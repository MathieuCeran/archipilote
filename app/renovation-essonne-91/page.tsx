import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-essonne-91" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation complète dans l'Essonne (91) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Essonne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation complète dans l'Essonne (91) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes en Essonne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-essonne-91",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Essonne (91)"
      segments={[{ text: "Rénovation en Essonne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans l'Essonne, ARCHI PILOTE RÉNOVATION intervient de manière sélective sur les rénovations complètes et projets à forte valeur de pilotage, notamment lorsqu'ils combinent plusieurs lots, performance énergétique, structure ou transformation importante."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
      maillage={{
        titre: "Vérifier si le projet justifie un pilotage",
        intro:
          "L'Essonne est étudiée de façon sélective : plus le projet compte de lots et d'arbitrages, plus un pilotage d'ensemble a du sens. Ces pages aident à situer le vôtre — et à savoir ce qu'un accompagnement représente en honoraires — avant tout déplacement.",
        groupes: [
          {
            titre: "Mesurer l'ampleur du projet",
            liens: [
              { href: "/estimateur-travaux", label: "Estimer un budget travaux" },
              { href: "/observatoire-prix-renovation", label: "Observatoire des prix de la rénovation" },
              { href: "/blog/devis-travaux-lignes-a-verifier", label: "Faire relire un devis d'entreprise" },
              { href: "/renovation-complete", label: "Chantiers multi-lots" },
              { href: "/notre-methode", label: "Ce que coûte un pilotage, et comment il est facturé" },
            ],
          },
          {
            titre: "Nature des travaux étudiés",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète de maison" },
              { href: "/ouverture-mur-porteur", label: "Structure et gros œuvre" },
              { href: "/renovation-energetique", label: "Performance énergétique" },
              { href: "/extension-maison", label: "Extension de maison" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-val-de-marne-94", label: "Val-de-Marne (94)" },
              { href: "/renovation-yvelines-78", label: "Yvelines (78)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
