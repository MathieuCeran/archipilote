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

/* Intention unique : rénover un appartement à Paris / en Île-de-France.
   Mot-clé principal (WhatsWrong / DataForSEO, 10/2026) : « rénovation appartement paris » (1 300/mois).
   Secondaires : entreprise rénovation appartement paris, rénovation appartement paris prix m2,
   rénovation appartement haussmannien paris, rénovation appartement ancien.
   Les sujets voisins ont leur propre page (mur porteur, salle de bain, cuisine, rénovation
   complète, démarches) : ici ils sont seulement résumés et liés. */

const CHEMIN = "/renovation-appartement";
const TITRE = "Rénovation d'appartement à Paris et en Île-de-France";
const DESCRIPTION =
  "Rénovation d'appartement à Paris : prix au m², étapes, copropriété. Visite technique, devis d'entreprises comparables, chantier piloté jusqu'à la réception.";
const FIL = [{ nom: "Rénovation d'appartement", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation appartement Paris : prix au m², étapes, copropriété | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation appartement Paris : prix au m², étapes, copropriété | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/sejour-table-marbre-balcon-rue.jpeg" }],
  },
};

const fmt = (n: number) => n.toLocaleString("fr-FR");

/* Libellés du tableau : les termes que les pages concurrentes emploient. */
const NOMS_NIVEAUX: Record<string, string> = {
  partielle: "Rénovation intermédiaire",
  hautdegamme: "Rénovation haut de gamme",
};

const FAQ = [
  {
    question: "Quel est le coût au m² d'une rénovation d'appartement à Paris ?",
    reponse:
      "En repères Île-de-France 2026, comptez de 250 à 450 € par m² pour un rafraîchissement, de 600 à 900 € pour une rénovation partielle, de 1 000 à 1 500 € pour une rénovation complète et de 1 500 à 2 500 € en haut de gamme. Pour un appartement de 50 m² rénové entièrement, cela représente environ 50 000 à 75 000 €. Le prix exact dépend de l'état des réseaux, de la structure et des finitions choisies.",
  },
  {
    question: "Faut-il l'accord de la copropriété pour rénover son appartement ?",
    reponse:
      "Les travaux purement intérieurs n'en ont pas besoin. L'accord de l'assemblée générale est en revanche nécessaire dès que les travaux touchent aux parties communes, à la structure (mur porteur), à l'aspect extérieur (fenêtres sur rue) ou aux réseaux collectifs. Nous préparons le dossier pour le syndic.",
  },
  {
    question: "Faut-il un architecte pour rénover un appartement ?",
    reponse:
      "Non, un architecte n'est pas obligatoire pour une rénovation intérieure d'appartement. En revanche, une ouverture dans un mur porteur exige une étude par un bureau d'études structure. Les architectes et ingénieurs partenaires interviennent en leur nom lorsque le projet le demande.",
  },
  {
    question: "Qui signe les devis et qui je paie ?",
    reponse:
      "Chaque entreprise partenaire établit et signe son propre devis : vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier ; notre rôle est le pilotage du projet.",
  },
  {
    question: "Peut-on rénover un appartement haussmannien sans perdre son cachet ?",
    reponse:
      "Oui. Moulures, cheminées, parquets et menuiseries d'origine se relèvent avant les travaux, se protègent pendant le chantier et se restaurent plutôt que de se remplacer. Les réseaux neufs passent en doublage ou en faux plafond là où le décor le permet.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation d'appartement à Paris : un projet cadré avant le chantier"
        chapo="Appartement ancien, haussmannien ou plus récent : nous vérifions la structure, les réseaux et les règles de la copropriété, rendons les devis comparables, puis pilotons les travaux jusqu'à la réception."
        image="/photos/chantiers2/sejour-table-marbre-balcon-rue.jpeg"
        alt="Séjour d'un appartement haussmannien rénové à Paris : moulures, parquet chêne en point de Hongrie, fenêtres ouvertes sur un balcon filant"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de l'appartement sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Un seul interlocuteur pour tous les corps de métier",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Rénover un appartement à Paris, c'est d'abord composer avec un immeuble : des murs porteurs, des
          évacuations qui imposent leurs pentes, une copropriété qui fixe ses règles et ses horaires. Un beau plan
          qui ignore ces contraintes finit en avenants.
        </p>
        <p>
          Tout commence par une visite technique et un diagnostic du bâti. Nous arrêtons ensuite le plan et le budget
          global avec vous, puis pilotons les entreprises partenaires qui exécutent et facturent les travaux : un
          accompagnement sur mesure, de la première visite à la réception.
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
        titre="Ce que comprend une rénovation d'appartement"
        accroche="Selon l'état du logement, la rénovation d'appartement à Paris touche tout ou partie de ces postes : structure, électricité, plomberie, pièces d'eau, isolation et finitions. Chacun est vérifié avant le plan, pas découvert pendant le chantier."
      >
        <PageCartes
          items={[
            {
              titre: "Dépose et optimisation de l'espace",
              texte: "Démolition, nouvelles cloisons, redistribution des pièces pour gagner une chambre ou ouvrir la cuisine. Une ouverture dans un mur porteur passe par une étude de structure.",
              href: "/ouverture-mur-porteur",
            },
            {
              titre: "Électricité, plomberie et mise aux normes",
              texte: "Tableau et circuits mis aux normes NF C 15-100, attestation de conformité à la fin. Déplacer une cuisine ou une salle d'eau dépend des chutes et des pentes : c'est vérifié au relevé.",
            },
            {
              titre: "Salle de bain",
              texte: "Étanchéité sous carrelage, évacuations et ventilation traitées avant la faïence et les finitions.",
              href: "/renovation-salle-de-bain-maison",
            },
            {
              titre: "Cuisine",
              texte: "Implantation, réseaux et électroménager calés avant la commande des meubles, façades sur mesure si besoin.",
              href: "/renovation-cuisine-maison",
            },
            {
              titre: "Isolation énergétique et ventilation",
              texte: "Isolation des murs donnant sur l'extérieur, fenêtres et ventilation traitées ensemble pour éviter la condensation.",
            },
            {
              titre: "Sols, murs et finitions",
              texte: "Parquet, peinture, portes et rangements : les finitions qui donnent son caractère à l'appartement.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Rénover un appartement haussmannien ou ancien"
        accroche="Dans un appartement haussmannien, la rénovation consiste autant à conserver qu'à refaire. Son cachet tient à des éléments qui ne se remplacent pas : on les relève avant le chantier et on les protège pendant."
      >
        <PageImage
          src="/photos/chantiers2/chambre-moulures-parquet-chevrons-armoire-chene.jpeg"
          alt="Chambre d'un appartement haussmannien rénové : moulures et corniche conservées, parquet chêne posé à chevrons, grandes fenêtres, armoire en chêne sur mesure"
          legende="Appartement haussmannien rénové : décor d'origine conservé, réseaux et rangements neufs."
        />
        <PageCoches
          items={[
            "Moulures, corniches et rosaces relevées puis restaurées",
            "Parquets anciens en point de Hongrie ou à chevrons poncés, réparés ou reposés",
            "Cheminées en marbre conservées et protégées pendant le chantier",
            "Planchers bois vérifiés et isolés contre les bruits d'impact",
            "Réseaux neufs passés en doublage ou en faux plafond",
            "Menuiseries sur rue traitées selon les règles de la copropriété",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Travaux en copropriété : ce qui se vérifie avant le plan"
        accroche={
          <p>
            Certains travaux demandent l'accord du syndic ou de l'assemblée générale. Les identifier tôt évite de
            bloquer le chantier. Le détail figure sur la page{" "}
            <Link href="/demarches-administratives-renovation">démarches administratives</Link>.
          </p>
        }
        fond="craie"
      >
        <PageCartes
          colonnes={3}
          items={[
            { titre: "Structure", texte: "Toute ouverture dans un mur porteur : étude, puis vote en assemblée générale avant les travaux." },
            { titre: "Façade et fenêtres", texte: "Changer des fenêtres sur rue ou percer une façade touche à l'aspect extérieur : accord nécessaire." },
            { titre: "Accès chantier", texte: "Protection des parties communes, horaires autorisés, ascenseur et évacuation des gravats sont convenus avec le syndic avant le démarrage." },
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation d'appartement à Paris"
        accroche="Le coût au m² dépend surtout du niveau de rénovation : rafraîchissement, rénovation intermédiaire, rénovation complète ou haut de gamme. Ces repères Île-de-France 2026 donnent un ordre de grandeur ; le prix réel se fixe sur les devis de rénovation des entreprises, après la visite technique."
      >
        <PageTableau
          colonnes={["Niveau de rénovation", "Ce qui est refait", "Coût au m²", "Pour 50 m²"]}
          lignes={GAMMES.map((g) => [
            NOMS_NIVEAUX[g.id] ?? g.nom,
            g.description,
            `${fmt(g.prixMin)} – ${fmt(g.prixMax)} €`,
            `${fmt(g.prixMin * 50)} – ${fmt(g.prixMax * 50)} €`,
          ])}
          note={
            <>
              Fourchettes indicatives, hors honoraires de pilotage. Pour un premier budget global adapté à votre logement,
              utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; le détail poste par poste est
              sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre rénovation"
        accroche="Le même déroulé pour chaque appartement. Les délais de réalisation sont fixés dans un planning des travaux validé avec vous avant le démarrage."
      >
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Relevé des dimensions, murs porteurs, gaines, état des réseaux et règlement de copropriété." },
            { titre: "Plan et planning des travaux", texte: "Le plan et le planning sont arrêtés une fois les contraintes techniques vérifiées, pas avant." },
            { titre: "Autorisations", texte: "Dossier pour le syndic et l'assemblée générale quand les travaux le demandent." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Chantier piloté", texte: "Contrôles avant fermeture des cloisons, suivi des finitions et photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, puis remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre rénovation d'appartement, cadrée avant le chantier"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/chambre-moulures-parquet-chevrons-armoire-chene.jpeg"

        alt="Chambre d'un appartement haussmannien rénové : moulures et corniche conservées, parquet chêne posé à chevrons, grandes fenêtres, armoire en chêne sur mesure"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation d'appartement">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-complete", titre: "Rénovation complète", texte: "Tous corps d'état, un seul interlocuteur." },
            { href: "/ouverture-mur-porteur", titre: "Ouverture de mur porteur", texte: "Étude, étaiement, poutre et réception." },
            { href: "/observatoire-prix-renovation", titre: "Prix de la rénovation", texte: "Fourchettes poste par poste." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
