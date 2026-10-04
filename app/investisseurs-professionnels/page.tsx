import type { Metadata } from "next";
import Link from "next/link";
import { GAMMES } from "../data";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import {
  PageHero,
  PageIntro,
  PageChiffres,
  PageSection,
  PageAppel,
  PageCartes,
  PageEtapes,
  PageCoches,
  PageTableau,
  PageImage,
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : rénover un appartement acheté (ou à acheter) pour le louer.
   Mot-clé principal : « rénovation appartement investissement locatif ».
   Faits repris de la page actuelle (méthode issue des foncières, chiffrage avant acquisition,
   quatre issues acheter / renégocier / différer / abandonner, trois scénarios, pilotage à distance
   avec point écrit hebdomadaire). Prix : GAMMES de data.ts. Aucune échéance réglementaire DPE
   n'est citée : aucune n'est sourcée dans le dépôt. */

const CHEMIN = "/investisseurs-professionnels";
const TITRE = "Rénovation d'appartement pour investissement locatif";
const DESCRIPTION =
  "Rénovation d'appartement en investissement locatif : travaux chiffrés avant l'achat, scénarios selon le rendement visé, chantier piloté à distance en Île-de-France.";
const FIL = [{ nom: "Investissement locatif", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation investissement locatif : chiffrer avant d'acheter | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation investissement locatif : chiffrer avant d'acheter | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/appart2-salon-canape-placards-chene.jpeg" }],
  },
};

const fmt = (n: number) => n.toLocaleString("fr-FR");

const SCENARIOS: Record<string, string> = {
  rafraichissement: "Remise en état locative",
  partielle: "Rénovation intermédiaire",
  complete: "Restructuration complète",
};

const FAQ = [
  {
    question: "Pouvez-vous chiffrer les travaux avant l'achat de l'appartement ?",
    reponse:
      "Oui. Nous produisons une estimation argumentée à partir des photos, du diagnostic de performance énergétique, du règlement de copropriété et, lorsque c'est possible, d'une visite. Elle sert à négocier le prix d'acquisition en connaissance de cause.",
  },
  {
    question: "Quel budget prévoir pour rénover un appartement à louer ?",
    reponse:
      "En repères Île-de-France 2026 : de 250 à 450 € par m² pour une remise en état locative, de 600 à 900 € pour une rénovation intermédiaire et de 1 000 à 1 500 € pour une restructuration complète. Le scénario se choisit selon le loyer visé et la durée d'immobilisation acceptable.",
  },
  {
    question: "Prenez-vous en charge la sortie de passoire énergétique ?",
    reponse:
      "Oui. Nous analysons le diagnostic de performance énergétique, hiérarchisons les postes de déperdition et pilotons l'isolation, les menuiseries et la ventilation, traitées ensemble pour éviter la condensation.",
  },
  {
    question: "Je n'habite pas à proximité : comment suivre le chantier ?",
    reponse:
      "Vous recevez des photos datées chaque jour et un point écrit chaque semaine. Chaque décision et son incidence sur le budget sont consignées dans un journal des décisions.",
  },
  {
    question: "Qui signe les devis et qui je paie ?",
    reponse:
      "Chaque entreprise partenaire établit son devis, exécute son lot et vous facture directement. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux ; vous pouvez aussi acheter certains matériaux en direct, au prix fournisseur.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation d'appartement en investissement locatif : chiffrer avant d'acheter"
        chapo="Pour un investisseur, les travaux sont une ligne du plan de financement. Nous les estimons avant l'acquisition, les calibrons sur le rendement visé, puis pilotons le chantier à distance jusqu'à la mise en location."
        image="/photos/chantiers2/appart2-salon-canape-placards-chene.jpeg"
        alt="Appartement rénové et meublé pour la location : salon avec canapé, placards toute hauteur en chêne clair, parquet en panneaux de Versailles"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Estimation des travaux avant acquisition",
          "Visite technique sur place",
          "Devis des entreprises rendus comparables",
          "Photos datées chaque jour, point écrit chaque semaine",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Une estimation produite après la signature ne sert plus à négocier. Nous intervenons pendant la phase de
          décision, avec une méthode issue du secteur des foncières : lecture rapide du bien, travaux décomposés par
          lot, hypothèses et incertitudes écrites. C'est le moment de pré-qualifier les travaux et d'identifier les
          travaux rentables au regard du retour sur investissement visé.
        </p>
        <p>
          Une fois le bien acheté, nous pilotons la rénovation locative de l'appartement, pour une location nue ou
          meublée et équipée. Les entreprises partenaires exécutent
          et facturent les travaux ; vous suivez tout à distance.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "8", label: "corps de métier coordonnés" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Avant l'achat : quatre issues possibles"
        accroche="Nous repérons les postes lourds (structure, réseaux vétustes, ventilation absente, humidité, menuiseries) qui font l'écart entre un rafraîchissement et une restructuration. L'estimation débouche sur une décision."
      >
        <PageCartes
          colonnes={2}
          items={[
            { titre: "Acheter", texte: "Les travaux identifiés, ajoutés au prix d'achat, restent compatibles avec le loyer ou la revente visés." },
            { titre: "Renégocier", texte: "Des travaux importants sont nécessaires : l'estimation chiffrée appuie une baisse du prix, poste par poste." },
            { titre: "Différer", texte: "Les travaux de confort ou de finition peuvent attendre sans aggraver le risque : l'investissement est lissé." },
            { titre: "Abandonner", texte: "Structure compromise ou incertitude majeure non levée : le dossier est écarté avant tout engagement." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Ce que comprend la rénovation d'un appartement locatif"
        accroche="Selon l'état du bien et le loyer visé, trois familles de travaux reviennent. Les petits travaux à fort impact passent en premier ; le reste s'arbitre selon la valorisation du bien attendue."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chSdbDoucheReceveurExtraPlat.jpeg"
          alt="Salle d'eau d'un appartement locatif en fin de rénovation : douche à receveur extra-plat et paroi vitrée, WC suspendu, meuble vasque en bois, carreaux de ciment gris clair au sol"
          legende="Salle d'eau refaite avant mise en location : douche, WC suspendu et meuble vasque."
        />
        <PageCoches
          items={[
            "Rénovation locative entre deux locataires : sols, peinture, électricité mise en sécurité, cuisine équipée, salle de bains moderne, portes",
            <>
              Amélioration de la performance énergétique (DPE) : isolation, menuiseries et ventilation traitées ensemble (voir{" "}
              <Link href="/renovation-energetique">rénovation énergétique</Link>)
            </>,
            <>
              Restructuration : redécoupage, création d'une pièce d'eau,{" "}
              <Link href="/ouverture-mur-porteur">ouverture de mur porteur</Link> avec étude de structure
            </>,
            "Plusieurs lots en parallèle : descriptif standardisé, références répétables, tableau de suivi unique",
            "Achat direct des matériaux par le propriétaire, au prix fournisseur",
            "Arbitrages décidés avant le démarrage, pas en cours de chantier",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation d'appartement en investissement locatif"
        accroche="Trois scénarios permettent d'ajuster les travaux au rendement visé. Chaque scénario a son coût au m², sa durée d'immobilisation et son incidence sur le loyer envisageable : une augmentation de loyer ne s'estime qu'au cas par cas."
      >
        <PageTableau
          colonnes={["Scénario", "Ce qui est refait", "Coût au m²", "Pour 40 m²"]}
          lignes={GAMMES.filter((g) => SCENARIOS[g.id]).map((g) => [
            SCENARIOS[g.id],
            g.description,
            `${fmt(g.prixMin)} – ${fmt(g.prixMax)} €`,
            `${fmt(g.prixMin * 40)} – ${fmt(g.prixMax * 40)} €`,
          ])}
          note={
            <>
              Repères Île-de-France 2026, indicatifs et hors honoraires de pilotage. Le prix réel se fixe sur les devis
              des entreprises. Détail poste par poste sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes, de l'achat à la mise en location"
        accroche="Un chantier démarré sur un budget déjà arrêté limite les avenants et la durée d'immobilisation du bien : c'est la base de la réduction de la vacance locative et de l'optimisation des coûts."
      >
        <PageEtapes
          items={[
            { titre: "Diagnostic des travaux", texte: "Photos, diagnostic de performance énergétique et règlement de copropriété, visite si possible." },
            { titre: "Estimation et décision", texte: "Travaux par lot, scénarios chiffrés : acheter, renégocier, différer ou abandonner." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Chantier à distance", texte: "Photos datées chaque jour, point écrit chaque semaine, journal des décisions." },
            { titre: "Réception", texte: "Réserves écrites, reprises, remise des garanties : le bien est prêt à louer." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre investissement, chiffré avant l'achat"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chSdbDoucheReceveurExtraPlat.jpeg"

        alt="Salle d'eau d'un appartement locatif en fin de rénovation : douche à receveur extra-plat et paroi vitrée, WC suspendu, meuble vasque en bois, carreaux de ciment gris clair au sol"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation en investissement locatif">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Copropriété, prix au m², étapes." },
            { href: "/renovation-energetique", titre: "Rénovation énergétique", texte: "Sortir un logement de la passoire." },
            { href: "/estimateur-travaux", titre: "Estimateur de travaux", texte: "Un premier budget en quelques questions." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
