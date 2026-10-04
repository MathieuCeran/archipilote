import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-la-garenne-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à La Garenne-Colombes : pilotage et travaux complexes | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à La Garenne-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation à La Garenne-Colombes : pilotage et travaux complexes | ARCHI PILOTE RÉNOVATION",
    description: "Projet de rénovation à La Garenne-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
    url: "/renovation-la-garenne-colombes",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="La Garenne-Colombes"
      eyebrow="La Garenne-Colombes"
      segments={[{ text: "Rénovation à La Garenne-Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="Base locale d'ARCHI PILOTE RÉNOVATION, La Garenne-Colombes est notre page locale la plus solide : proximité, capacité de passage rapide, mix appartement / maison de ville et connaissance opérationnelle du secteur."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
      maillage={{
        intro:
          "C'est depuis La Garenne-Colombes que partent nos visites. Les pages ci-dessous décrivent ce que nous étudions, par où commencer si vous avez déjà un devis en main, et qui réalise concrètement les travaux — la marque pilote le projet, les entreprises partenaires contractantes exécutent et facturent leur lot.",
        groupes: [
          {
            titre: "Les types de projets étudiés",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/renovation-maison-pavillon", label: "Maison de ville et pavillon" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie et agencement sur mesure" },
            ],
          },
          {
            titre: "Avant de signer quoi que ce soit",
            liens: [
              { href: "/notre-methode", label: "Le parcours d'expertise, étape par étape" },
              { href: "/blog/devis-travaux-lignes-a-verifier", label: "Faire relire un devis d'entreprise" },
              { href: "/estimateur-travaux", label: "Estimer un budget travaux" },
              { href: "/notre-methode", label: "Les entreprises partenaires qui exécutent les lots" },
            ],
          },
          {
            titre: "Communes voisines traitées",
            liens: [
              { href: "/renovation-courbevoie", label: "Courbevoie" },
              { href: "/renovation-bois-colombes", label: "Bois-Colombes" },
              { href: "/renovation-nanterre", label: "Nanterre" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine (92)" },
              { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
