import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { PageHero, PageSection, PageCartes, PageEtapes, PageFaq, PageLiens, JsonLdPage } from "../components/page-kit";
import { Estimateur } from "./estimateur";

/* Intention unique : obtenir une fourchette de budget travaux en ligne.
   L'outil (./estimateur.tsx, composant client) est inchangé ; seule la coquille de page est
   refaite au kit. Aucun chiffre ajouté hors de ceux de l'outil et de data.ts.
   Retiré : lien vers /clinique-du-devis (page redirigée). */

const CHEMIN = "/estimateur-travaux";
const TITRE = "Estimateur de travaux de rénovation";
const DESCRIPTION =
  "Estimateur de travaux de rénovation : une fourchette de budget en une minute selon la surface, le niveau de travaux, le bien et les options, en Île-de-France.";
const FIL = [{ nom: "Estimateur de travaux", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Estimateur de travaux : budget de rénovation en une minute | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Estimateur de travaux : budget de rénovation en une minute | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/og.jpg" }],
  },
};

const FAQ = [
  {
    question: "Cet estimateur remplace-t-il un devis ?",
    reponse:
      "Non. Il donne une fourchette indicative fondée sur les prix constatés en Île-de-France. Seuls une visite du bien et un chiffrage poste par poste engagent des montants réels, établis par les entreprises partenaires qui exécutent et facturent les travaux.",
  },
  {
    question: "Sur quelles données reposent les fourchettes ?",
    reponse:
      "Sur les fourchettes de prix au m² publiées sur la page prix de la rénovation, issues de projets accompagnés à Paris, dans les Hauts-de-Seine et en Île-de-France, hors mobilier et hors honoraires d'architecte ou d'ingénieur.",
  },
  {
    question: "Pourquoi une fourchette plutôt qu'un montant ?",
    reponse:
      "Parce que l'état des réseaux, la qualité des supports et le niveau de finition font varier le coût réel d'un même projet. Un montant unique donnerait une fausse précision.",
  },
  {
    question: "L'achat direct des matériaux est-il pris en compte ?",
    reponse:
      "Non. La fourchette correspond à un budget travaux de marché. L'économie liée à l'achat direct des matériaux, au prix fournisseur, s'applique ensuite, au moment du chiffrage détaillé.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Estimateur de travaux : votre budget de rénovation en une minute"
        chapo="Surface, niveau de travaux, type de bien, finition et options : l'outil calcule une fourchette de budget à partir des prix constatés en Île-de-France. Un ordre de grandeur pour cadrer le projet, jamais un prix ferme."
      />

      <PageSection
        id="simulation"
        titre="Simulez votre budget de travaux"
        accroche="Renseignez votre projet : la fourchette et sa répartition par lot s'affichent en direct."
      >
        <Estimateur />
      </PageSection>

      <PageSection
        titre="Comment fonctionne l'estimateur"
        accroche="Quatre réglages suffisent pour un ordre de grandeur exploitable."
      >
        <PageEtapes
          items={[
            { titre: "La surface", texte: "Le nombre de m² concernés par les travaux, pas forcément la surface totale du logement." },
            { titre: "Le niveau de rénovation", texte: "Du rafraîchissement à la rénovation lourde, chacun avec sa fourchette au m²." },
            { titre: "Le type de bien et la finition", texte: "Appartement, maison ou bien locatif ; finition sobre, soignée ou haut de gamme." },
            { titre: "Les options techniques", texte: "Mur porteur, ventilation, isolation, cuisine, salle d'eau : elles s'ajoutent au calcul." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Ce que comprend l'estimation"
        accroche="La fourchette couvre les travaux eux-mêmes. Le reste se chiffre à part."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Inclus dans la fourchette",
              texte: "Les travaux et la main-d'œuvre des entreprises partenaires, la dépose et l'évacuation des gravats.",
            },
            {
              titre: "Non inclus",
              texte: "Mobilier, électroménager et décoration ; honoraires d'architecte ou d'ingénieur ; aléas structurels découverts après dépose, qui peuvent pousser vers le haut de la fourchette.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="De l'estimation au budget réel"
        accroche="L'estimation cadre le projet. Le budget se fixe ensuite sur votre logement."
      >
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Sur place : relevé, état des réseaux, contraintes de copropriété." },
            { titre: "Étude de projet", texte: "Remise sous 48 h ouvrées, avec les points de vigilance et les priorités." },
            { titre: "Devis comparables", texte: "Les entreprises partenaires chiffrent sur un descriptif commun, lu ligne à ligne avec vous." },
          ]}
        />
      </PageSection>

      <PageSection titre="Questions fréquentes sur l'estimateur de travaux">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/observatoire-prix-renovation", titre: "Prix de la rénovation au m²", texte: "Fourchettes par niveau et par poste." },
            { href: "/blog/devis-travaux-lignes-a-verifier", titre: "Lire un devis", texte: "Les lignes à vérifier avant de signer." },
            { href: "/notre-methode", titre: "Notre méthode", texte: "Les étapes du pilotage, de la visite à la réception." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
