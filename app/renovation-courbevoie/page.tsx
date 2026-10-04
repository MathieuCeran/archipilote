import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-courbevoie" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Courbevoie : appartement, copropriété et structure | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Courbevoie : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Courbevoie : appartement, copropriété et structure | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Courbevoie : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-courbevoie",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Courbevoie"
      eyebrow="Courbevoie"
      segments={[{ text: "Rénovation à Courbevoie :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Courbevoie, l'angle prioritaire est l'appartement et la copropriété : redistribution, réseaux, structure, accès, voisinage et pilotage d'un chantier multi-lots."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète d'appartement", "Copropriété et démarches", "Ouverture de mur porteur avec professionnels compétents", "Cuisine / salle de bain / réseaux", "Ventilation et rénovation énergétique", "Chantier multi-lots en site occupé"]}
      maillage={{
        intro:
          "En copropriété, l'ordre des décisions compte autant que les travaux eux-mêmes : autorisation, structure, réseaux, puis pièces humides. Chaque étape a sa page.",
        groupes: [
          {
            titre: "Rénover un appartement en copropriété",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/demarches-administratives-renovation", label: "Copropriété et démarches administratives" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/renovation-cuisine-maison", label: "Rénovation de cuisine" },
              { href: "/renovation-salle-de-bain-maison", label: "Rénovation de salle de bain" },
              { href: "/renovation-energetique", label: "Ventilation et rénovation énergétique" },
              { href: "/renovation-complete", label: "Chantier multi-lots en site occupé" },
            ],
          },
          {
            titre: "Secteurs proches traités",
            liens: [
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-asnieres-sur-seine", label: "Asnières-sur-Seine" },
              { href: "/renovation-complexe-paris", label: "Projets complexes à Paris" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine (92)" },
              { href: "/renovation-ile-de-france", label: "Notre couverture en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
