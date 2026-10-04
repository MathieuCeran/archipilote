import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-bois-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Bois-Colombes : maison et projets complexes | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Bois-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à Bois-Colombes : maison et projets complexes | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à Bois-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-bois-colombes",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Bois-Colombes"
      eyebrow="Bois-Colombes"
      segments={[{ text: "Rénovation à Bois-Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Bois-Colombes, nous visons principalement les maisons de ville, pavillons et rénovations où l'existant impose une lecture fine de la structure, des réseaux et de l'enveloppe."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "Sur une maison de ville ou un pavillon, la lecture de l'existant se joue sur trois plans : la structure, l'enveloppe et les réseaux. Chacun a sa page dédiée.",
        groupes: [
          {
            titre: "Lire l'existant, lot par lot",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon" },
              { href: "/ouverture-mur-porteur", label: "Reprise de structure et gros œuvre" },
              { href: "/renovation-energetique", label: "Enveloppe et performance énergétique" },
              { href: "/renovation-complete", label: "Rénover un logement de fond en comble" },
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/surelevation", label: "Surélévation" },
            ],
          },
          {
            titre: "Communes voisines traitées",
            liens: [
              { href: "/renovation-asnieres-sur-seine", label: "Asnières-sur-Seine" },
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-colombes", label: "Colombes" },
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
