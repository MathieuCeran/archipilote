import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-nanterre" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Nanterre : maison, pavillon et rénovation complète | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Nanterre : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Nanterre : maison, pavillon et rénovation complète | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Nanterre : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-nanterre",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Nanterre"
      eyebrow="Nanterre"
      segments={[{ text: "Rénovation à Nanterre :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Nanterre, nous privilégions la maison, le pavillon, la rénovation énergétique, la redistribution et les transformations globales, tout en restant ouverts aux appartements complexes."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "Sur un pavillon, la performance énergétique et la redistribution intérieure se décident ensemble : isoler sans revoir les cloisons ni les réseaux fait perdre le bénéfice des deux.",
        groupes: [
          {
            titre: "Pavillon, énergie et redistribution",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Rénovation de pavillon" },
              { href: "/renovation-energetique", label: "Isolation et rénovation énergétique" },
              { href: "/renovation-energetique", label: "Aides à la rénovation énergétique" },
              { href: "/renovation-complete", label: "Transformation complète du logement" },
              { href: "/ouverture-mur-porteur", label: "Structure et reprise de charge" },
              { href: "/renovation-appartement", label: "Appartement à forte technicité" },
            ],
          },
          {
            titre: "Communes voisines traitées",
            liens: [
              { href: "/renovation-colombes", label: "Colombes" },
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-rueil-malmaison", label: "Rueil-Malmaison" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine (92)" },
              { href: "/renovation-ile-de-france", label: "Nos secteurs en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
