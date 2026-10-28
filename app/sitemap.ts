import type { MetadataRoute } from "next";
import { allArticles } from "./lib-articles";
import { mergedPaths } from "@/lib/whatswrong-pages";

const BASE = "https://www.archipiloterenovation.com";

/* Pages indexables — refonte 10/2026 « une page = une intention ». Les pages
   locales noindexées et les anciennes URLs redirigées n'y figurent pas. */
const STATIC_PATHS = [
  "/",
  // Travaux
  "/renovation-appartement",
  "/renovation-maison-pavillon",
  "/renovation-complete",
  "/renovation-salle-de-bain-maison",
  "/renovation-cuisine-maison",
  "/renovation-electrique",
  "/renovation-energetique",
  "/ouverture-mur-porteur",
  "/etudes-de-cas-structure",
  "/surelevation",
  "/extension-maison",
  "/menuiserie-agencement-sur-mesure",
  "/investisseurs-professionnels",
  // Méthode et preuves
  "/notre-methode",
  "/qui-sommes-nous",
  "/realisations",
  // Prix et ressources
  "/observatoire-prix-renovation",
  "/estimateur-travaux",
  "/demarches-administratives-renovation",
  "/glossaire-renovation",
  "/faq",
  "/blog",
  "/contact",
  // Légal
  "/mentions-legales",
  "/politique-confidentialite",
  "/ai-instruction",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Une page fusionnée depuis WhatsWrong redirige : elle ne figure pas au sitemap.
  const merged = await mergedPaths();
  const staticEntries = STATIC_PATHS.filter((path) => !merged.has(path)).map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-10-04"),
  }));
  const articleEntries = (await allArticles()).filter((a) => !merged.has(`/blog/${a.slug}`)).map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dateISO),
  }));
  return [...staticEntries, ...articleEntries];
}
