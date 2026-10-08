import { NextRequest, NextResponse } from "next/server";

import { isMailConfigured, sendLeadMail } from "@/lib/mail";

/* ============================================================
   API contact — protections côté serveur :
   · Same-origin (Origin/Referer) → protège du CSRF cross-site
   · Honeypot (champ « website » caché) → bots
   · Délai minimal de remplissage (< 3 s = bot)
   · Validation stricte des champs (longueurs, listes fermées)
   · Rate-limit mémoire par IP (5 req / 10 min — best-effort serverless)
   Livraison : SMTP Hostinger (lib/mail.ts) dès que SMTP_USER/SMTP_PASS sont définis.
   À défaut, repli sur FormSubmit (AJAX) → archipiloterenovation@gmail.com.
   ============================================================ */

export const runtime = "nodejs";

const DEST = "archipiloterenovation@gmail.com";

const PROJETS = new Set([
  "Rafraîchissement", "Rénovation partielle", "Rénovation complète", "Cuisine sur-mesure",
  "Salle de bain", "Isolation & DPE", "Gros œuvre / surélévation", "Autre projet",
]);
const BUDGETS = new Set(["Moins de 10 000 €", "10 000 – 50 000 €", "50 000 – 100 000 €", "100 000 – 200 000 €", "Plus de 200 000 €", "Je ne sais pas encore"]);
const HORIZONS = new Set(["Dans le mois", "Dans les 3 mois", "Dans les 6 mois", "Je me renseigne encore", "Non précisé"]);
/* 04/09 : 6e critère de qualification (copropriété). Champ FACULTATIF — la chaîne vide
   et l'absence du champ sont acceptées ; toute autre valeur doit appartenir à la liste. */
const COPROS = new Set(["Oui", "Non", "Je ne sais pas"]);

type Payload = {
  projet?: unknown; budget?: unknown; horizon?: unknown;
  commune?: unknown; description?: unknown; nom?: unknown; tel?: unknown;
  email?: unknown; surface?: unknown; copro?: unknown;
  website?: unknown; startedAt?: unknown;
};

const hits = new Map<string, { n: number; t: number }>();
function rateLimited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.t > 10 * 60_000) { hits.set(ip, { n: 1, t: now }); return false; }
  rec.n += 1;
  return rec.n > 5;
}

function str(v: unknown, max: number) {
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s || s.length > max) return null;
  return s;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "";
  const referer = req.headers.get("referer") ?? "";
  const host = req.headers.get("host") ?? "";
  const sameOrigin = (origin && new URL(origin).host === host) || (!origin && referer && new URL(referer).host === host);
  if (!sameOrigin) return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });

  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json({ ok: false, error: "content-type" }, { status: 415 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });

  let body: Payload;
  try { body = (await req.json()) as Payload; } catch { return NextResponse.json({ ok: false, error: "json" }, { status: 400 }); }

  // Honeypot + timing : on fait semblant de réussir pour ne pas éduquer les bots.
  if (typeof body.website === "string" && body.website.length > 0) return NextResponse.json({ ok: true });
  const started = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (started && Date.now() - started < 3000) return NextResponse.json({ ok: true });

  const projet = str(body.projet, 40);
  const budget = str(body.budget, 40);
  const horizon = str(body.horizon, 40);
  const commune = str(body.commune, 80);
  const nom = str(body.nom, 80);
  const tel = str(body.tel, 30);
  const email = str(body.email, 120);
  const surface = str(body.surface, 20);
  const copro = str(body.copro, 20);
  const description = typeof body.description === "string" ? body.description.trim().slice(0, 2000) : "";

  const errors: string[] = [];
  if (!projet || !PROJETS.has(projet)) errors.push("projet");
  if (!budget || !BUDGETS.has(budget)) errors.push("budget");
  if (!horizon || !HORIZONS.has(horizon)) errors.push("horizon");
  if (!commune || commune.length < 2) errors.push("commune");
  if (!nom || nom.length < 2) errors.push("nom");
  const isTel = !!tel && /^(\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(tel);
  if (!isTel) errors.push("tel");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("email");
  if (copro && !COPROS.has(copro)) errors.push("copro");
  if (errors.length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const subject = `Nouveau projet — ${projet} à ${commune}`;
  const fields: [string, string][] = [
    ["Nom", nom!],
    ["Téléphone", tel!],
    ["Courriel", email || "(non renseigné)"],
    ["Surface", surface || "(non renseignée)"],
    ["Copropriété", copro || "(non précisé)"],
    ["Projet", projet!],
    ["Budget", budget!],
    ["Démarrage", horizon!],
    ["Commune", commune!],
    ["Description", description || "(non renseignée)"],
  ];

  if (isMailConfigured()) {
    try {
      await sendLeadMail({ subject, replyTo: email || undefined, rows: fields });
      return NextResponse.json({ ok: true });
    } catch (e) {
      console.error("[contact] envoi SMTP échoué", e);
      return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
    }
  }

  try {
    const site = `https://${host}`;
    const r = await fetch(`https://formsubmit.co/ajax/${DEST}`, {
      method: "POST",
      // FormSubmit exige Origin/Referer, même en AJAX serveur.
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: site, Referer: `${site}/contact` },
      body: JSON.stringify({ _subject: subject, _template: "table", ...Object.fromEntries(fields) }),
    });
    const res = (await r.json().catch(() => null)) as { success?: string | boolean } | null;
    const delivered = r.ok && (res?.success === true || res?.success === "true");
    if (!delivered) throw new Error("formsubmit not delivered");
    return NextResponse.json({ ok: true });
  } catch {
    // La livraison a échoué : on le dit franchement au visiteur (pas de faux succès).
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
