import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-rueil-malmaison" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Rueil-Malmaison : maison et rénovation complète | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Rueil-Malmaison : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Rueil-Malmaison : maison et rénovation complète | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Rueil-Malmaison : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-rueil-malmaison",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Rueil-Malmaison"
      eyebrow="Rueil-Malmaison"
      segments={[{ text: "Rénovation à Rueil-Malmaison :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Rueil-Malmaison, l'angle prioritaire est la maison et les projets de grande ampleur : rénovation complète, extension, toiture, énergie, redistribution et montée en gamme des finitions."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "Agrandir, surélever ou reprendre une toiture ne relève pas des mêmes autorisations ni des mêmes entreprises. Les pages ci-dessous distinguent chaque option avant de choisir.",
        groupes: [
          {
            titre: "Agrandir, reprendre, finir",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète de maison" },
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/surelevation", label: "Surélever une maison" },
              { href: "/renovation-maison-pavillon", label: "Toiture et charpente" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Agencement et menuiserie sur mesure" },
              { href: "/renovation-complete", label: "Sols et finitions" },
            ],
          },
          {
            titre: "Autres communes traitées dans le secteur ouest",
            liens: [
              { href: "/renovation-nanterre", label: "Nanterre, commune limitrophe" },
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-colombes", label: "Colombes" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine (92)" },
              { href: "/renovation-yvelines-78", label: "Les Yvelines (78), département limitrophe" },
              { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
