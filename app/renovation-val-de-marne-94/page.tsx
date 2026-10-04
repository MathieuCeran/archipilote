import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-val-de-marne-94" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation dans le Val-de-Marne (94) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes dans le Val-de-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation dans le Val-de-Marne (94) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes dans le Val-de-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-val-de-marne-94",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Val-de-Marne (94)"
      segments={[{ text: "Rénovation dans le Val-de-Marne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Le Val-de-Marne offre un mix pertinent de maisons, appartements et petites copropriétés. ARCHI PILOTE RÉNOVATION y étudie les rénovations complètes, les projets structurels, les extensions, les transformations énergétiques et les appartements techniquement complexes."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
      maillage={{
        titre: "Maison, appartement ou petite copropriété",
        intro:
          "Le mix de biens du Val-de-Marne fait cohabiter trois situations très différentes. Ces pages précisent ce que chacune implique en études, en autorisations et en organisation des interventions — et à quoi ressemble concrètement un projet suivi de bout en bout.",
        groupes: [
          {
            titre: "Selon le type de bien",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Maison et pavillon" },
              { href: "/renovation-appartement", label: "Appartement en petite copropriété" },
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/extension-maison", label: "Extension de maison" },
            ],
          },
          {
            titre: "Technique et autorisations",
            liens: [
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/renovation-energetique", label: "Transformation énergétique" },
              { href: "/renovation-complete", label: "Appartement techniquement complexe" },
              { href: "/demarches-administratives-renovation", label: "Démarches et autorisations" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-complexe-paris", label: "Projets complexes à Paris" },
              { href: "/renovation-seine-saint-denis-93", label: "Seine-Saint-Denis (93)" },
              { href: "/renovation-essonne-91", label: "Essonne (91)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
          {
            titre: "Comment se déroule un accompagnement",
            liens: [
              { href: "/notre-methode", label: "Notre méthode de pilotage" },
              { href: "/realisations", label: "Cas de projets accompagnés" },
            ],
          },
        ],
      }}
    />
  );
}
