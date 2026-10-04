#!/usr/bin/env node
/* ============================================================
   Synchronisation WhatsWrong (Léa) → blog ARCHI PILOTE RÉNOVATION

   WhatsWrong ne pousse rien : c'est le site qui tire les articles.
   Cycle complet, exécuté toutes les heures par GitHub Actions :
     1. GET  /api/v1/lea/blog-articles?states=DRAFT&limit=20
        (DRAFT = article terminé et dû aujourd'hui : on publie tout)
     2. pour chaque article inconnu : téléchargement de la couverture
        et des images du corps dans public/uploads/whatswrong/<slug>/,
        assainissement du HTML, écriture dans content/blog/generated.json
     3. commit + push  →  déploiement Vercel
     4. attente de la mise en ligne réelle (la page répond avec le site)
     5. PATCH /api/v1/lea/blog-articles/{id}  { state: PUBLISHED, url }
        — jamais avant l'étape 4. C'est ce PATCH qui lance le suivi SEO.
     6. article retiré à la main de generated.json après publication :
        PATCH { state: DRAFT } pour que WhatsWrong le sache.

   Idempotence : content/blog/_whatswrong-state.json garde l'id WhatsWrong
   de tout article importé. Un id connu n'est jamais réimporté ; un id
   importé mais non confirmé est repris à l'étape 4 au run suivant.

   Limite API : 60 appels/min. Sur HTTP 429, le run s'arrête proprement
   et le suivant reprend là où celui-ci s'est arrêté.

   Aucune dépendance npm : Node 20+ (fetch, fs/promises) uniquement.
   Usage : node scripts/whatswrong-sync.mjs [--dry-run] [--no-push]
   ============================================================ */

import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";

const exec = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/* ---------- Configuration ---------- */

const API_BASE = "https://www.whatswrong.io";
// WW_API_KEY est le nom retenu pour le secret ; WHATSWRONG_API_KEY reste accepté.
const API_KEY = process.env.WW_API_KEY || process.env.WHATSWRONG_API_KEY;

const SITE_ORIGIN = (process.env.SITE_ORIGIN || "https://www.archipiloterenovation.com").replace(/\/$/, "");

const BLOG_PREFIX = "/blog"; // structure d'URL existante : /blog/<slug>
const DEFAULT_CATEGORY = "Rénovation";
// Couverture de repli si Léa n'en fournit pas : photo illustrative, pas un chantier réel.
const FALLBACK_COVER = "heroHaussmannien";

const GENERATED_FILE = path.join(ROOT, "content/blog/generated.json");
const STATE_FILE = path.join(ROOT, "content/blog/_whatswrong-state.json");
const EDITORIAL_FILE = path.join(ROOT, "app/data.ts");
const UPLOAD_DIR = path.join(ROOT, "public/uploads/whatswrong");
const UPLOAD_PUBLIC = "/uploads/whatswrong";

const DEPLOY_TIMEOUT_MS = 15 * 60_000;
const DEPLOY_POLL_MS = 20_000;
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
const HTTP_TIMEOUT_MS = 45_000;

const DRY_RUN = process.argv.includes("--dry-run");
const NO_PUSH = process.argv.includes("--no-push") || DRY_RUN;

/* ---------- Journalisation ---------- */

const errors = [];
const stamp = () => new Date().toISOString().slice(11, 19);
const log = (...a) => console.log(`[${stamp()}]`, ...a);
const warn = (msg) => { console.log(`::warning::${msg}`); };
const fail = (msg) => { errors.push(msg); console.log(`::error::${msg}`); };

/* ---------- HTTP ---------- */

class RateLimited extends Error {}

async function whatswrong(method, pathname, body) {
  const res = await fetch(API_BASE + pathname, {
    method,
    signal: AbortSignal.timeout(HTTP_TIMEOUT_MS),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (res.status === 429) {
    throw new RateLimited(`limite d'appels atteinte, réessayer dans ${res.headers.get("Retry-After") ?? "?"} s`);
  }
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { /* réponse non JSON */ }
  if (!res.ok) {
    throw new Error(`WhatsWrong ${res.status} (${method} ${pathname}) : ${data?.message ?? text.slice(0, 300)}`);
  }
  return data;
}

/* ---------- Utilitaires ---------- */

function slugify(s) {
  return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

function frDate(iso) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" })
    .format(new Date(iso));
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function readJson(file, fallback) {
  try { return JSON.parse(await readFile(file, "utf8")); } catch { return fallback; }
}

async function writeJson(file, data) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}

/** Slugs déjà pris par les articles éditoriaux écrits à la main dans app/data.ts. */
async function editorialSlugs() {
  try {
    const src = await readFile(EDITORIAL_FILE, "utf8");
    return new Set([...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
  } catch { return new Set(); }
}

/** La FAQ arrive à part : on l'ajoute au corps seulement si Léa ne l'y a pas déjà mise. */
function withFaq(body, faq) {
  if (!faq?.items?.length) return body;
  const title = faq.title || "Foire aux questions";
  if (String(body).toLowerCase().includes(String(title).toLowerCase())) return body;
  const items = faq.items
    .filter((q) => q?.question && q?.answer)
    .map((q) => `<h3>${escapeHtml(q.question)}</h3><p>${q.answer}</p>`)
    .join("");
  return items ? `${body}<h2 id="${slugify(title)}">${escapeHtml(title)}</h2>${items}` : body;
}

/* ---------- Assainissement du HTML ----------
   Le corps est injecté via dangerouslySetInnerHTML : on retire tout ce qui
   peut exécuter du code ou casser la mise en page. */

const ALLOWED_TAGS = new Set([
  "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "mark", "small", "sub", "sup",
  "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "figure", "figcaption",
  "a", "img", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "code", "pre", "span", "div",
]);
const ALLOWED_ATTRS = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "width", "height", "loading"],
  th: ["colspan", "rowspan"],
  td: ["colspan", "rowspan"],
  // Les ancres du sommaire pointent vers ces id.
  h2: ["id"], h3: ["id"], h4: ["id"],
};

function sanitizeHtml(html) {
  let out = String(html);
  // Blocs entiers supprimés, contenu compris.
  out = out.replace(/<(script|style|iframe|object|embed|form|noscript)\b[\s\S]*?<\/\1>/gi, "");
  out = out.replace(/<(script|style|iframe|object|embed|form|noscript)\b[^>]*\/?>/gi, "");
  out = out.replace(/<!--[\s\S]*?-->/g, "");

  return out.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g, (full, close, rawTag, rawAttrs) => {
    const tag = rawTag.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return ""; // balise retirée, contenu conservé
    if (close) return `</${tag}>`;

    const allowed = ALLOWED_ATTRS[tag] ?? [];
    const kept = [];
    for (const m of rawAttrs.matchAll(/([a-zA-Z-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
      const name = m[1].toLowerCase();
      const value = m[3] ?? m[4] ?? "";
      if (!allowed.includes(name)) continue;
      if ((name === "href" || name === "src") && /^\s*(javascript|data|vbscript):/i.test(value)) continue;
      kept.push(`${name}="${value.replace(/"/g, "&quot;")}"`);
    }
    if (tag === "a") {
      const href = kept.find((k) => k.startsWith("href="));
      if (href && /^href="https?:\/\//i.test(href) && !href.includes(new URL(SITE_ORIGIN).host)) {
        kept.push('target="_blank"', 'rel="noopener noreferrer"');
      }
    }
    if (tag === "img" && !kept.some((k) => k.startsWith("loading="))) kept.push('loading="lazy"');
    const selfClosing = tag === "img" || tag === "br" || tag === "hr";
    return `<${tag}${kept.length ? " " + kept.join(" ") : ""}${selfClosing ? " /" : ""}>`;
  })
    // Liens vidés de leur href (protocole refusé) : on ne garde que le texte.
    .replace(/<a>([\s\S]*?)<\/a>/gi, "$1");
}

/* ---------- Téléchargement des images ---------- */

const EXT_BY_TYPE = {
  "image/jpeg": ".jpg", "image/jpg": ".jpg", "image/png": ".png", "image/webp": ".webp",
  "image/avif": ".avif", "image/gif": ".gif", "image/svg+xml": ".svg",
};

async function downloadImage(url, slug, basename) {
  const res = await fetch(url, { signal: AbortSignal.timeout(HTTP_TIMEOUT_MS), redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = (res.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (type && !type.startsWith("image/")) throw new Error(`type inattendu : ${type}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (!buf.length) throw new Error("fichier vide");
  if (buf.length > MAX_IMAGE_BYTES) throw new Error(`trop lourd (${Math.round(buf.length / 1024)} Ko)`);

  const urlExt = path.extname(new URL(url).pathname).toLowerCase();
  const ext = EXT_BY_TYPE[type] ?? (/^\.(jpe?g|png|webp|avif|gif|svg)$/.test(urlExt) ? urlExt : ".jpg");
  const dir = path.join(UPLOAD_DIR, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, basename + ext), buf);
  return `${UPLOAD_PUBLIC}/${slug}/${basename}${ext}`;
}

/** Remplace toutes les <img src> distantes par leur copie interne. */
async function internalizeBodyImages(html, slug) {
  const srcs = [...String(html).matchAll(/<img\b[^>]*?\bsrc\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]);
  const unique = [...new Set(srcs)].filter((s) => /^https?:\/\//i.test(s));
  let out = String(html);
  let i = 0;
  for (const src of unique) {
    i += 1;
    try {
      const local = await downloadImage(src, slug, `img-${String(i).padStart(2, "0")}`);
      out = out.split(src).join(local);
      log(`    image ${i}/${unique.length} → ${local}`);
    } catch (e) {
      warn(`[${slug}] image non téléchargée (${src}) : ${e.message} — URL d'origine conservée`);
    }
  }
  // Les liens sortants vers whatswrong.io n'ont rien à faire sur le blog :
  // on garde le texte, on retire le lien.
  out = out.replace(/<a\b[^>]*href\s*=\s*["'][^"']*whatswrong\.io[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi, "$1");
  return out;
}

/* ---------- Git ---------- */

async function git(...args) {
  const { stdout } = await exec("git", args, { cwd: ROOT, maxBuffer: 10 * 1024 * 1024 });
  return stdout.trim();
}

async function commitAndPush(message) {
  if (NO_PUSH) { log(`(push désactivé) commit prévu : ${message}`); return false; }
  await git("config", "user.name", "whatswrong-sync[bot]");
  await git("config", "user.email", "whatswrong-sync@users.noreply.github.com");
  await git("add", "content/blog", "public/uploads/whatswrong");
  const staged = await git("diff", "--cached", "--name-only");
  if (!staged) { log("rien à commiter"); return false; }
  await git("commit", "-m", message);
  await git("push");
  log(`poussé : ${message}`);
  return true;
}

/* ---------- Vérification de mise en ligne ---------- */

async function waitOnline(url, deadline) {
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20_000), redirect: "follow", headers: { "Cache-Control": "no-cache" } });
      if (res.ok) {
        // Un HTTP 200 ne prouve pas que la page est en ligne : le 09/09/2026, domaine
        // suspendu, chaque adresse répondait 200 avec « Your domain is suspended ».
        // On exige donc la marque, présente dans l'en-tête de toutes les pages.
        const html = await res.text();
        if (!/domain is suspended/i.test(html) && /ARCHI PILOTE/i.test(html)) return true;
      }
    } catch { /* déploiement en cours */ }
    await new Promise((r) => setTimeout(r, DEPLOY_POLL_MS));
  }
  return false;
}

/* ---------- Programme principal ---------- */

async function main() {
  if (!API_KEY) {
    console.log("::error::WW_API_KEY absente de l'environnement — arrêt.");
    process.exit(1);
  }
  log(`Synchronisation WhatsWrong — site ${SITE_ORIGIN}${DRY_RUN ? " (essai à blanc)" : ""}`);

  const { contents = [] } = await whatswrong("GET", "/api/v1/lea/blog-articles?states=DRAFT&limit=20");
  log(`${contents.length} article(s) à l'état DRAFT`);

  if (DRY_RUN) {
    for (const c of contents) {
      log(`· ${c.id} — « ${c.data?.title ?? "sans titre"} » → ${BLOG_PREFIX}/${slugify(c.data?.slug || c.data?.title || "")}`);
    }
    return;
  }

  const state = await readJson(STATE_FILE, { version: 1, articles: {} });
  const generated = await readJson(GENERATED_FILE, []);
  const taken = new Set([...(await editorialSlugs()), ...generated.map((a) => a.slug)]);

  /* --- Phase 1 : import --- */
  const nouveaux = [];
  for (const { id, data: d } of contents) {
    try {
      if (!id) throw new Error("identifiant absent de la réponse API");
      if (state.articles[id]) { log(`· ${id} déjà importé — ignoré`); continue; }
      if (!d?.title || !d?.body) throw new Error("titre ou corps manquant");

      let slug = slugify(d.slug || d.title);
      if (!slug) throw new Error("slug impossible à construire");
      let n = 2;
      const base = slug;
      while (taken.has(slug)) slug = `${base}-${n++}`;

      log(`→ import « ${d.title} » (${id}) → ${BLOG_PREFIX}/${slug}`);
      let photo = FALLBACK_COVER;
      if (d.cover?.url) {
        try {
          photo = await downloadImage(d.cover.url, slug, "cover");
          log(`    couverture → ${photo}`);
        } catch (e) {
          warn(`[${slug}] couverture non téléchargée (${e.message}) — image de repli`);
        }
      } else {
        warn(`[${slug}] pas de couverture fournie — image de repli`);
      }
      const body = sanitizeHtml(await internalizeBodyImages(withFaq(d.body, d.faq), slug));

      const iso = new Date().toISOString();
      generated.push({
        whatswrongId: id,
        slug,
        titre: String(d.title).trim(),
        date: frDate(iso),
        dateISO: iso.slice(0, 10),
        excerpt: String(d.description ?? "").trim(),
        categorie: DEFAULT_CATEGORY,
        photo,
        photoAlt: d.cover?.alt ? String(d.cover.alt).trim() : undefined,
        keyword: d.mainKeyword ? String(d.mainKeyword).trim() : undefined,
        bodyHtml: body,
      });
      taken.add(slug);
      state.articles[id] = {
        slug,
        url: `${SITE_ORIGIN}${BLOG_PREFIX}/${slug}`,
        importedAt: iso,
        confirmedAt: null,
      };
      nouveaux.push(id);
    } catch (e) {
      fail(`article ignoré (${id || "id inconnu"} — « ${d?.title ?? "sans titre"} ») : ${e.message}`);
    }
  }

  if (nouveaux.length) {
    generated.sort((x, y) => y.dateISO.localeCompare(x.dateISO));
    await writeJson(GENERATED_FILE, generated);
    await writeJson(STATE_FILE, state);
    await cleanOrphanUploads(generated);
    await commitAndPush(`content: ${nouveaux.length} article(s) WhatsWrong publié(s)`);
  } else {
    log("aucun nouvel article à importer");
  }

  let stateChanged = false;

  /* --- Phase 2 : confirmation PUBLISHED (nouveaux + reliquats des runs précédents) --- */
  const live = new Set(generated.map((a) => a.slug));
  const aConfirmer = Object.entries(state.articles).filter(([, v]) => !v.confirmedAt && !v.unpublishedAt && live.has(v.slug));
  const deadline = Date.now() + DEPLOY_TIMEOUT_MS;
  for (const [id, entry] of aConfirmer) {
    try {
      log(`· vérification de la mise en ligne : ${entry.url}`);
      if (!(await waitOnline(entry.url, deadline))) {
        fail(`page non accessible dans le délai imparti (${entry.url}) — PATCH non envoyé, reprise au prochain run`);
        continue;
      }
      await whatswrong("PATCH", `/api/v1/lea/blog-articles/${encodeURIComponent(id)}`, { state: "PUBLISHED", url: entry.url });
      entry.confirmedAt = new Date().toISOString();
      stateChanged = true;
      log(`  ✓ confirmé PUBLISHED auprès de WhatsWrong`);
    } catch (e) {
      if (e instanceof RateLimited) throw e;
      fail(`PATCH en échec pour ${id} (${entry.url}) : ${e.message} — reprise au prochain run`);
    }
  }

  /* --- Phase 3 : article retiré du blog après publication → retour en DRAFT --- */
  for (const [id, entry] of Object.entries(state.articles)) {
    if (!entry.confirmedAt || entry.unpublishedAt || live.has(entry.slug)) continue;
    try {
      await whatswrong("PATCH", `/api/v1/lea/blog-articles/${encodeURIComponent(id)}`, { state: "DRAFT" });
      entry.unpublishedAt = new Date().toISOString();
      stateChanged = true;
      log(`  ↩ ${entry.slug} retiré du blog — repassé en DRAFT chez WhatsWrong`);
    } catch (e) {
      if (e instanceof RateLimited) throw e;
      fail(`retour en DRAFT en échec pour ${id} (${entry.slug}) : ${e.message}`);
    }
  }

  if (stateChanged) {
    await writeJson(STATE_FILE, state);
    // [skip ci] : ce commit ne change aucun contenu rendu, inutile de redéployer.
    await commitAndPush("chore: état WhatsWrong mis à jour [skip ci]");
  }
  finish();
}

/** Supprime les dossiers d'images d'articles qui ne sont plus référencés
    (import interrompu à mi-chemin lors d'un run précédent). */
async function cleanOrphanUploads(generated) {
  if (!existsSync(UPLOAD_DIR)) return;
  const valides = new Set(generated.map((a) => a.slug));
  for (const dir of await readdir(UPLOAD_DIR, { withFileTypes: true })) {
    if (dir.isDirectory() && !valides.has(dir.name)) {
      await rm(path.join(UPLOAD_DIR, dir.name), { recursive: true, force: true });
      warn(`dossier d'images orphelin supprimé : ${dir.name}`);
    }
  }
}

function finish() {
  if (errors.length) {
    log(`terminé avec ${errors.length} erreur(s) :`);
    errors.forEach((e) => log(`  – ${e}`));
    process.exitCode = 1;
  } else {
    log("terminé sans erreur");
  }
}

main().catch((e) => {
  if (e instanceof RateLimited) {
    // Pas une panne : le prochain run horaire reprendra où celui-ci s'arrête.
    warn(`arrêt anticipé — ${e.message}`);
    return;
  }
  console.log(`::error::échec global de la synchronisation : ${e.stack ?? e.message}`);
  process.exit(1);
});
