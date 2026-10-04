import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-asnieres-sur-seine" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Asnières-sur-Seine : appartement et maison | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Asnières-sur-Seine : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Asnières-sur-Seine : appartement et maison | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Asnières-sur-Seine : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-asnieres-sur-seine",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Asnières-sur-Seine"
      eyebrow="Asnières-sur-Seine"
      segments={[{ text: "Rénovation à Asnières-sur-Seine :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="Asnières combine appartements, petits collectifs et maisons. Nous orientons vers copropriété, rénovation complète, structure et projets de maison selon le bien."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "Asnières mélange collectif ancien, petits immeubles et maisons : les pages ci-dessous détaillent chacun des sujets évoqués plus haut, ainsi que les communes voisines couvertes par la même équipe.",
        groupes: [
          {
            titre: "Les sujets abordés sur cette page",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète d'un logement" },
              { href: "/renovation-appartement", label: "Rénovation d'appartement en copropriété" },
              { href: "/ouverture-mur-porteur", label: "Structure et ouvertures porteuses" },
              { href: "/renovation-electrique", label: "Réseaux : électricité et plomberie" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/extension-maison", label: "Extension de maison" },
            ],
          },
          {
            titre: "Communes voisines traitées",
            liens: [
              { href: "/renovation-bois-colombes", label: "Bois-Colombes" },
              { href: "/renovation-courbevoie", label: "Courbevoie" },
              { href: "/renovation-colombes", label: "Colombes" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine (92)" },
              { href: "/renovation-ile-de-france", label: "Notre zone d'intervention en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
