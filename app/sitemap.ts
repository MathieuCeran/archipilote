import type { MetadataRoute } from "next";
import { ALL_ARTICLES } from "./lib-articles";

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
  "/surelevation",
  "/extension-maison",
  "/menuiserie-agencement-sur-mesure",
  "/investisseurs-professionnels",
  // Méthode et preuves
  "/notre-methode",
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-10-04"),
  }));
  const articleEntries = ALL_ARTICLES.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dateISO),
  }));
  return [...staticEntries, ...articleEntries];
}
