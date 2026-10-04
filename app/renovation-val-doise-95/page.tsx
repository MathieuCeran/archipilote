import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-val-doise-95" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation de maison dans le Val-d'Oise (95) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes dans le Val-d'Oise. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation de maison dans le Val-d'Oise (95) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes dans le Val-d'Oise. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-val-doise-95",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Val-d'Oise (95)"
      segments={[{ text: "Rénovation dans le Val-d'Oise :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans le Val-d'Oise, le positionnement privilégie les maisons, pavillons et projets de rénovation globale : enveloppe, toiture, énergie, extension, redistribution et lots techniques."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
      maillage={{
        titre: "Reprendre un pavillon de l'enveloppe aux réseaux",
        intro:
          "Sur un pavillon, l'ordre des travaux compte : l'enveloppe d'abord, les lots techniques ensuite, les finitions en dernier. Voici le détail de chaque étape, puis les deux leviers qui pèsent le plus sur l'enveloppe budgétaire d'une rénovation globale.",
        groupes: [
          {
            titre: "L'enveloppe d'abord",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Rénovation de pavillon" },
              { href: "/renovation-maison-pavillon", label: "Toiture, charpente et enveloppe" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/renovation-energetique", label: "Aides et financement des travaux" },
            ],
          },
          {
            titre: "Puis les lots techniques et la surface",
            liens: [
              { href: "/renovation-electrique", label: "Lots techniques : électricité et plomberie" },
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/surelevation", label: "Surélévation" },
              { href: "/renovation-complete", label: "Sols et finitions" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine (92)" },
              { href: "/renovation-yvelines-78", label: "Yvelines (78)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
          {
            titre: "Tenir le budget sur une rénovation globale",
            liens: [
              { href: "/notre-methode", label: "Acheter les matériaux en direct" },
              { href: "/observatoire-prix-renovation", label: "Fourchettes de prix par poste" },
            ],
          },
        ],
      }}
    />
  );
}
