import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-complexe-paris" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation complexe à Paris : copropriété, structure et réseaux | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes à Paris. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation complexe à Paris : copropriété, structure et réseaux | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes à Paris. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-complexe-paris",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Paris (75)"
      segments={[{ text: "Rénovation à Paris :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="À Paris, ARCHI PILOTE RÉNOVATION se positionne sur les dossiers où la complexité technique ou administrative justifie un pilotage structuré : redistribution, mur porteur, réseaux, copropriété, ventilation, rénovation complète et interactions avec des professionnels spécialisés. Notre terrain, c'est le projet complexe : celui qui demande de comprendre le bâti et l'immeuble avant de chiffrer quoi que ce soit."
      bulletsTitle="Projets prioritaires"
      bullets={["Appartement en copropriété complexe", "Ouverture structurelle", "Redistribution avec réseaux", "Rénovation complète à forte technicité", "Projets nécessitant un dossier documenté"]}
      maillage={{
        titre: "Les sujets qui reviennent sur un dossier parisien",
        intro:
          "Un immeuble ancien impose sa propre chronologie : autorisation de copropriété, étude de structure, réseaux, puis finitions. S'y ajoute, dès que la façade ou la toiture sont concernées, la question du périmètre protégé. Chacun de ces sujets est traité en détail sur sa page.",
        groupes: [
          {
            titre: "Le dossier technique",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur en copropriété" },
              { href: "/ouverture-mur-porteur", label: "Gros œuvre et reprise de structure" },
              { href: "/renovation-electrique", label: "Réseaux : électricité, plomberie, ventilation" },
              { href: "/renovation-complete", label: "Rénovation complète à forte technicité" },
              { href: "/renovation-appartement", label: "Savoir-faire du bâti ancien" },
            ],
          },
          {
            titre: "Le dossier administratif et budgétaire",
            liens: [
              { href: "/demarches-administratives-renovation", label: "Autorisations et démarches en copropriété" },
              { href: "/demarches-administratives-renovation", label: "Façade et menuiseries en périmètre ABF" },
              { href: "/renovation-complete", label: "Piloter un chantier complexe" },
              { href: "/blog/devis-travaux-lignes-a-verifier", label: "Lecture critique d'un devis" },
            ],
          },
          {
            titre: "Communes de l'ouest parisien traitées",
            liens: [
              { href: "/renovation-courbevoie", label: "Courbevoie" },
              { href: "/renovation-asnieres-sur-seine", label: "Asnières-sur-Seine" },
            ],
          },
          {
            titre: "Territoire",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine (92)" },
              { href: "/renovation-seine-saint-denis-93", label: "Seine-Saint-Denis (93)" },
              { href: "/renovation-val-de-marne-94", label: "Val-de-Marne (94)" },
              { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
