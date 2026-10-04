/* ============================================================
   Source unique des articles du blog.

   Deux origines, un seul modèle :
   · ARTICLES (app/data.ts) — articles éditoriaux écrits à la main,
     corps en paragraphes de texte brut, `photo` = clé de PHOTOS.
   · content/blog/generated.json — articles importés depuis WhatsWrong
     par scripts/whatswrong-sync.mjs (les plus anciens venaient de
     Sedestral), corps en HTML assaini,
     `photo` = chemin interne /uploads/<source>/<slug>/cover.*

   Le fichier JSON est importé statiquement : tout est figé au build,
   aucune lecture de disque au runtime (compatible export statique Vercel).
   ============================================================ */

import { ARTICLES, type Article } from "./data";
import { PHOTOS } from "./lib-photos";
import generatedRaw from "../content/blog/generated.json";

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
};

const generated: BlogArticle[] = (generatedRaw as unknown as GeneratedArticle[]).map((a) => ({
  ...a,
  corps: [],
}));

/** Tous les articles, du plus récent au plus ancien. */
export const ALL_ARTICLES: BlogArticle[] = [...ARTICLES, ...generated].sort((a, b) =>
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
