import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-hauts-de-seine-92" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation dans les Hauts-de-Seine (92) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes dans les Hauts-de-Seine. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation dans les Hauts-de-Seine (92) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes dans les Hauts-de-Seine. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-hauts-de-seine-92",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Hauts-de-Seine (92)"
      segments={[{ text: "Rénovation dans les Hauts-de-Seine :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Le 92 est le territoire prioritaire d'ARCHI PILOTE RÉNOVATION. Il concentre des projets de maison, d'appartement en copropriété et de transformation complexe : rénovation complète, structure, extension, surélévation, énergie et lots techniques. La proximité avec La Garenne-Colombes permet une forte réactivité sur les communes du premier cercle."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
      maillage={{
        titre: "Les communes et les sujets du 92",
        intro:
          "Sept communes du département disposent d'une page dédiée, chacune avec son angle dominant : appartement et copropriété au sud-est, maison et pavillon vers l'ouest. La dernière rangée regroupe ce qu'il vaut mieux avoir lu avant de lancer une consultation d'entreprises.",
        groupes: [
          {
            titre: "Communes couvertes dans le département",
            liens: [
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-courbevoie", label: "Courbevoie" },
              { href: "/renovation-asnieres-sur-seine", label: "Asnières-sur-Seine" },
              { href: "/renovation-bois-colombes", label: "Bois-Colombes" },
              { href: "/renovation-colombes", label: "Colombes" },
              { href: "/renovation-nanterre", label: "Nanterre" },
              { href: "/renovation-rueil-malmaison", label: "Rueil-Malmaison" },
            ],
          },
          {
            titre: "Types de projets étudiés",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-appartement", label: "Rénovation d'appartement en copropriété" },
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/ouverture-mur-porteur", label: "Gros œuvre et structure" },
              { href: "/renovation-complete", label: "Lots de second œuvre" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-complexe-paris", label: "Projets complexes à Paris" },
              { href: "/renovation-yvelines-78", label: "Yvelines (78)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
          {
            titre: "Avant de lancer une consultation",
            liens: [
              { href: "/notre-methode", label: "Les étapes du parcours d'expertise" },
              { href: "/notre-methode", label: "Les engagements tenus sur chaque projet" },
              { href: "/estimateur-travaux", label: "Estimer un budget travaux" },
            ],
          },
        ],
      }}
    />
  );
}
