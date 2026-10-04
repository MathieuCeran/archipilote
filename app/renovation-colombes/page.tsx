import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Colombes : maison, extension et appartement | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Colombes : maison, extension et appartement | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-colombes",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Colombes"
      eyebrow="Colombes"
      segments={[{ text: "Rénovation à Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Colombes, nous privilégions les maisons, pavillons, transformations complètes et projets combinant structure, énergie et second œuvre, tout en conservant une porte d'entrée pour les appartements en copropriété."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "Un projet à Colombes bascule souvent d'un simple rafraîchissement vers une transformation d'ensemble. Voici les pages qui détaillent ce basculement, du gros œuvre aux finitions.",
        groupes: [
          {
            titre: "De la structure aux finitions",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Maison et pavillon" },
              { href: "/ouverture-mur-porteur", label: "Gros œuvre et structure" },
              { href: "/renovation-complete", label: "Les lots de second œuvre" },
              { href: "/renovation-complete", label: "Sols et finitions" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/renovation-appartement", label: "Appartement en copropriété" },
            ],
          },
          {
            titre: "Communes voisines traitées",
            liens: [
              { href: "/renovation-bois-colombes", label: "Bois-Colombes" },
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-nanterre", label: "Nanterre" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Le 92, notre bassin principal" },
              { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
