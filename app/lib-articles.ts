import { cache } from "react";
/* ============================================================
   Source unique des articles du blog.

   Deux origines, un seul modèle :
   · ARTICLES (app/data.ts) — articles éditoriaux écrits à la main,
     corps en paragraphes de texte brut, `photo` = clé de PHOTOS.
   · content/blog/generated.json — articles copiés avant la lecture
     directe de WhatsWrong (les plus anciens venaient de Sedestral),
     corps en HTML assaini,
     `photo` = chemin interne /uploads/<source>/<slug>/cover.*

   Le fichier JSON est importé statiquement : tout est figé au build,
   aucune lecture de disque au runtime (compatible export statique Vercel).
   ============================================================ */

import { ARTICLES, type Article } from "./data";
import { PHOTOS } from "./lib-photos";
import generatedRaw from "../content/blog/generated.json";
import { minutesDeLecture } from "./blog/article-html";

export type GeneratedArticle = {
  /** Identifiant WhatsWrong — garantit qu'un article n'est jamais importé deux fois. */
  whatswrongId?: string;
  /** Articles historiques importés depuis Sedestral. */
  sedestralId?: string;
  slug: string;
  titre: string;
  date: string;
  dateISO: string;
  excerpt: string;
  categorie: string;
  photo: string;
  photoAlt?: string;
  keyword?: string;
  bodyHtml: string;
};

export type BlogArticle = Article & {
  /** Corps HTML — présent uniquement sur les articles importés. */
  bodyHtml?: string;
  /** Mot-clé principal transmis par WhatsWrong. */
  keyword?: string;
  /** Texte alternatif de la couverture fourni par WhatsWrong. */
  photoAlt?: string;
  whatswrongId?: string;
  sedestralId?: string;
  /** Temps de lecture estimé, en minutes. */
  minutes: number;
};

/** Première image du corps : sert de couverture quand WhatsWrong n'en fournit
    pas. C'est une image de l'article lui-même — jamais une image inventée. */
function premiereImage(html: string): { src: string; alt?: string } | null {
  const img = html.match(/<img\b[^>]*>/i)?.[0];
  const src = img?.match(/\bsrc="([^"]+)"/i)?.[1];
  if (!src) return null;
  return { src, alt: img?.match(/\balt="([^"]*)"/i)?.[1] || undefined };
}

const generated: BlogArticle[] = (generatedRaw as unknown as GeneratedArticle[]).map((a) => {
  const repli = a.photo ? null : premiereImage(a.bodyHtml);
  return {
    ...a,
    photo: a.photo || repli?.src || "",
    photoAlt: a.photoAlt ?? repli?.alt,
    corps: [],
    minutes: minutesDeLecture(a.bodyHtml),
  };
});

const editoriaux: BlogArticle[] = ARTICLES.map((a) => ({ ...a, minutes: minutesDeLecture(a.corps.join(" ")) }));

/** Tous les articles, du plus récent au plus ancien. */
export const ALL_ARTICLES: BlogArticle[] = [...editoriaux, ...generated].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
);

/**
 * Résout une référence d'image : clé du catalogue PHOTOS pour les articles
 * éditoriaux, chemin interne ou URL absolue pour les articles importés.
 */
export function photoSrc(ref: string | undefined): string {
  if (!ref) return "";
  if (ref.startsWith("/") || ref.startsWith("http")) return ref;
  return PHOTOS[ref as keyof typeof PHOTOS] ?? "";
}

/* ============================================================
   Lecture directe de WhatsWrong — 19/10/2026.

   Les articles de Léa sont lus au rendu sur l'API de WhatsWrong (cache
   d'une minute) : un article prêt est en ligne au plus une minute après,
   sans synchronisation ni redéploiement, et WhatsWrong vérifie lui-même
   qu'il répond à son adresse pour le dire publié. Les articles déjà
   copiés gardent leur photo et leur date ; les éditoriaux et ceux de
   Sedestral ne bougent pas. Si l'API ne répond pas, tout reste comme
   copié dans le dépôt (ALL_ARTICLES).
   ============================================================ */

const BLOG_BASE = "https://www.archipiloterenovation.com/blog";
const API_BASE = process.env.WW_API_BASE || "https://www.whatswrong.io";
const REVALIDATE_SECONDS = 60;
// Au-delà, le site n'attend pas : il affiche les copies du dépôt.
const TIMEOUT_MS = 2000;
const CATEGORIE_PAR_DEFAUT = "Rénovation";

type LiveArticle = {
  id: string;
  slug: string;
  title: string;
  description: string;
  html: string;
  mainKeyword: string | null;
  publishedAt: string;
};

async function liveArticlesUncached(): Promise<LiveArticle[] | null> {
  const key = process.env.WW_API_KEY || process.env.WHATSWRONG_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`${API_BASE}/api/v1/lea/blog?base=${encodeURIComponent(BLOG_BASE)}`, {
      headers: { Authorization: `Bearer ${key}` },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { articles?: LiveArticle[] };
    return Array.isArray(data.articles) ? data.articles : null;
  } catch {
    return null;
  }
}

/* Une lecture par rendu : les métadonnées et la page voient la même
 * réponse (sinon titre et contenu peuvent diverger si l'une expire). */
const liveArticles = cache(liveArticlesUncached);

function dateFr(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" })
    .format(new Date(iso));
}

/** Tous les articles, du plus récent au plus ancien — ceux de WhatsWrong
    lus en direct. */
export async function allArticles(): Promise<BlogArticle[]> {
  const live = await liveArticles();
  if (live === null) return ALL_ARTICLES;
  const copies = new Map(generated.filter((a) => a.whatswrongId).map((a) => [a.whatswrongId, a]));
  const fromLive: BlogArticle[] = live.map((a) => {
    const copie = copies.get(a.id);
    const repli = premiereImage(a.html);
    return {
      whatswrongId: a.id,
      slug: copie?.slug ?? a.slug,
      titre: a.title,
      date: copie?.date ?? dateFr(a.publishedAt),
      dateISO: copie?.dateISO ?? a.publishedAt.slice(0, 10),
      excerpt: a.description,
      categorie: copie?.categorie ?? CATEGORIE_PAR_DEFAUT,
      photo: copie?.photo || repli?.src || "",
      photoAlt: copie?.photoAlt ?? repli?.alt,
      keyword: a.mainKeyword ?? undefined,
      bodyHtml: a.html,
      corps: [],
      minutes: minutesDeLecture(a.html),
    };
  });
  // Les copies de WhatsWrong sont remplacées par la version en direct ; un
  // article retiré chez WhatsWrong disparaît. Éditoriaux et Sedestral restent.
  const autres = [...editoriaux, ...generated.filter((a) => !a.whatswrongId)];
  return [...autres, ...fromLive].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}
