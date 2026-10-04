import type { Metadata } from "next";
import Link from "next/link";
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

/* Intention unique : confier une rénovation complète, tous corps d'état, à un seul interlocuteur.
   Mot-clé principal : « entreprise de rénovation tous corps d'état ». La marque n'exécute pas les
   travaux : le H1 emploie la variante « Rénovation tous corps d'état » pour ne pas se présenter comme
   l'entreprise qui exécute, et l'introduction explique la différence.
   Contenu fusionné : services, nos-specialites, chantiers-complexes, second-oeuvre,
   sols-finitions-renovation (ordre des lots, contrôles avant fermeture, gestion des aléas,
   rôles). Prix : postes de l'observatoire des prix (app/observatoire-prix-renovation) et gamme
   « Rénovation complète » de data.ts. */

const CHEMIN = "/renovation-complete";
const TITRE = "Rénovation complète tous corps d'état à Paris et en Île-de-France";
const DESCRIPTION =
  "Rénovation tous corps d'état à Paris : un seul interlocuteur, 8 corps de métier coordonnés, des devis comparables et un chantier suivi jusqu'à la réception.";
const FIL = [{ nom: "Rénovation complète", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation tous corps d'état : un seul interlocuteur | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation tous corps d'état : un seul interlocuteur | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/salon-trumeau-moulures-appliques.jpeg" }],
  },
};

/* Postes repris tels quels de l'observatoire des prix (Île-de-France). */
const POSTES = [
  ["Démolition / dépose", "20 – 60 € / m²"],
  ["Électricité (mise aux normes)", "70 – 130 € / m² habitable"],
  ["Plomberie (rénovation complète)", "400 – 900 € / point d'eau"],
  ["Cloisons (placo sur ossature)", "45 – 90 € / m²"],
  ["Isolation thermique (intérieure)", "40 – 90 € / m² de paroi"],
  ["Carrelage (pose incluse)", "50 – 110 € / m²"],
  ["Peinture (préparation incluse)", "25 – 55 € / m² au sol"],
  ["Ouverture de mur porteur", "3 000 – 9 000 € / ouverture"],
];

const FAQ = [
  {
    question: "Quelle différence avec une entreprise de rénovation tous corps d'état ?",
    reponse:
      "Une entreprise de rénovation tous corps d'état exécute et facture l'ensemble des lots sous un contrat unique. Avec ARCHI PILOTE RÉNOVATION, vous avez aussi un interlocuteur unique, mais chaque entreprise partenaire spécialisée établit son devis, exécute son lot et vous facture directement. Vous voyez le prix réel de chaque lot.",
  },
  {
    question: "Quel budget prévoir pour une rénovation complète ?",
    reponse:
      "En repère Île-de-France 2026, une rénovation complète se situe entre 1 000 et 1 500 € par m². Le budget se construit ensuite par familles de postes, avec une réserve pour aléas, puis se confronte aux devis reçus. Le prix réel dépend de l'état du bien, de la structure et des finitions choisies.",
  },
  {
    question: "Combien de temps dure une rénovation complète ?",
    reponse:
      "Il faut distinguer la préparation (études, autorisations, consultation des entreprises) et les travaux. Un appartement sans reprise de structure se situe le plus souvent entre huit et seize semaines de travaux ; une maison avec reprises structurelles entre quatre et sept mois. Ce ne sont pas des délais garantis.",
  },
  {
    question: "Que se passe-t-il si un problème est découvert pendant le chantier ?",
    reponse:
      "La zone concernée est suspendue. Le problème est photographié et décrit, l'entreprise chiffre la reprise, et vous validez par écrit avant toute exécution. Le planning est ensuite mis à jour.",
  },
  {
    question: "Est-ce un chantier clé en main ?",
    reponse:
      "Pour vous, l'organisation est proche d'un chantier clé en main : un interlocuteur unique assure la coordination de chantier, du premier relevé à la réception. La différence : vous signez un devis de travaux avec chaque entreprise partenaire, qui reste responsable de son lot et de ses assurances.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation tous corps d'état : un seul interlocuteur pour tout le chantier"
        chapo="Structure, réseaux, cloisons, pièces d'eau, menuiseries et finitions : nous coordonnons les 8 corps de métier d'une rénovation complète, dans le bon ordre, du premier relevé à la réception."
        image="/photos/chantiers2/salon-trumeau-moulures-appliques.jpeg"
        alt="Salon d'un appartement haussmannien après une rénovation complète : trumeau à miroir entre deux appliques dorées, moulures et rosace restaurées, parquet chêne à chevrons, grille de climatisation intégrée au plafond"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Achat direct des matériaux possible, au prix fournisseur",
          "Devis des entreprises rendus comparables",
          "Photos datées envoyées chaque jour",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Vous cherchez une entreprise de rénovation tous corps d'état pour ne pas coordonner seul l'électricien, le
          plombier, le plaquiste, le carreleur et le peintre. Nous répondons au même besoin : un seul interlocuteur
          pour l'ensemble des travaux, du gros œuvre au second œuvre.
        </p>
        <p>
          La différence tient aux contrats. Les entreprises partenaires, indépendantes et assurées, établissent leurs
          devis, exécutent et vous facturent directement. Nous cadrons le projet, rendons les devis comparables et
          assurons le pilotage de chantier, un rôle proche de celui d'un conducteur de travaux. Vous voyez le prix réel
          de chaque lot.
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
        titre="Ce que comprend une rénovation tous corps d'état"
        accroche="Une rénovation complète reprend tous les lots d'un logement, du gros œuvre au second œuvre. Chaque lot est simple pris isolément ; la difficulté vient de leurs interfaces : c'est l'objet de la coordination de chantier."
      >
        <PageCartes
          items={[
            {
              titre: "Dépose et structure",
              texte: "Démolition, redistribution des pièces. Une ouverture dans un mur porteur passe par une étude d'un bureau d'études structure.",
              href: "/ouverture-mur-porteur",
            },
            {
              titre: "Plomberie, électricité, chauffage",
              texte: "Mise aux normes du tableau et des circuits, alimentations et évacuations en pente, émetteurs dimensionnés sur l'isolation finale.",
              href: "/renovation-electrique",
            },
            {
              titre: "Cloisons, doublages, isolation",
              texte: "Ossatures renforcées là où un meuble sera suspendu, plaques hydrofuges en pièce humide, isolation thermique et ventilation traitées ensemble.",
            },
            {
              titre: "Salle de bains et cuisine",
              texte: "Étanchéité contrôlée avant carrelage ; pour une rénovation cuisine, implantation arrêtée avant le passage des réseaux.",
              href: "/renovation-salle-de-bain-maison",
            },
            {
              titre: "Menuiserie intérieure et agencement",
              texte: "Portes commandées sur cotes relevées après cloisons finies, rangements sur mesure posés au bon moment.",
              href: "/menuiserie-agencement-sur-mesure",
            },
            {
              titre: "Carrelage, parquet, peinture",
              texte: "Support plan et sec avant la pose du carrelage ou du parquet ; peinture en dernier. La qualité des finitions se prépare dès le gros œuvre.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="L'ordre des lots, et les contrôles avant fermeture"
        accroche="Ce qui sera recouvert intervient avant ce qui recouvre. Une modification décidée sur plan ne coûte presque rien ; la même après pose oblige à rouvrir plusieurs ouvrages."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers2/salle-a-manger-table-onyx-lustre.jpeg"
          alt="Salle à manger d'un appartement rénové tous corps d'état : table en onyx sous une suspension en verre, murs à moulures repeints en blanc, parquet chêne à chevrons"
          legende="Rénovation complète livrée : réseaux, cloisons et éclairage ont été contrôlés avant d'être recouverts."
        />
        <PageCoches
          items={[
            "Électricité et plomberie posées dans les cloisons ouvertes, selon un plan validé",
            "Pente des évacuations et mise sous pression des réseaux vérifiées avant fermeture",
            "Renforts d'ossature en place pour chaque équipement suspendu",
            "Photo datée de chaque réseau encastré avant la pose des plaques",
            "Étanchéité de la salle d'eau contrôlée avant le carrelage",
            "Sols posés sur chape sèche, peinture en toute fin de chantier",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation complète tous corps d'état"
        accroche="En repère Île-de-France 2026, une rénovation complète coûte de 1 000 à 1 500 € par m². Le budget se lit poste par poste : voici les fourchettes des principaux lots."
      >
        <PageTableau
          colonnes={["Poste", "Fourchette indicative"]}
          lignes={POSTES}
          note={
            <>
              Fourchettes indicatives et datées, hors honoraires de pilotage. Le prix contractuel reste celui du devis
              de chaque entreprise. Détail complet sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link> ; premier budget avec l'
              <Link href="/estimateur-travaux">estimateur de travaux</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre rénovation complète"
        accroche="Chaque étape conditionne la suivante. C'est l'ordre, plus que la vitesse, qui protège le budget et le calendrier."
      >
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Usages, état des supports, réseaux, structure, accès et règles de copropriété." },
            { titre: "Plan et budget", texte: "Plan arrêté une fois les contraintes connues, budget par familles de postes avec une réserve pour aléas." },
            { titre: "Études et autorisations", texte: "Architecte, architecte d'intérieur ou ingénieur partenaire, en leur nom, quand le dossier l'exige ; syndic ou mairie si nécessaire." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne, assurances vérifiées." },
            { titre: "Chantier piloté", texte: "Interfaces entre lots suivies, contrôles avant fermeture, photos datées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, remise des garanties, puis suivi pendant 12 mois." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Une rénovation complète, un seul interlocuteur"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/salle-a-manger-table-onyx-lustre.jpeg"

        alt="Salle à manger d'un appartement rénové tous corps d'état : table en onyx sous une suspension en verre, murs à moulures repeints en blanc, parquet chêne à chevrons"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation tous corps d'état">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Les mêmes lots, en copropriété." },
            { href: "/renovation-maison-pavillon", titre: "Rénovation de maison", texte: "Du sol à la toiture." },
            { href: "/notre-methode", titre: "Notre méthode", texte: "Le pilotage étape par étape." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
