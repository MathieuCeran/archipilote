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

/* Intention unique : rénover une maison ou un pavillon en Île-de-France.
   Mot-clé principal : « rénovation maison ». Termes Eli : rénovation partielle / complète,
   budget de rénovation, isolation thermique, mise aux normes, redistribution des pièces,
   menuiseries et fenêtres, étapes de la rénovation, devis de travaux, confort du logement.
   Contenu fusionné : renovation-toiture-charpente (diagnostic de toiture, réparer ou refaire,
   ordre toiture → isolation → ventilation). Les sujets voisins sont seulement liés. */

const CHEMIN = "/renovation-maison-pavillon";
const TITRE = "Rénovation de maison et de pavillon en Île-de-France";
const DESCRIPTION =
  "Rénovation de maison en Île-de-France : lecture du bâti du sol au toit, devis d'entreprises comparables, chantier piloté jusqu'à la réception. Prix au m².";
const FIL = [{ nom: "Rénovation de maison", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation maison : prix au m², étapes, toiture et isolation | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation maison : prix au m², étapes, toiture et isolation | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/maison-facade-toiture-echafaudage.jpeg" }],
  },
};

const fmt = (n: number) => n.toLocaleString("fr-FR");

const FAQ = [
  {
    question: "Par où commencer la rénovation d'une maison ancienne ?",
    reponse:
      "Par une lecture complète du bâtiment, du sol à la toiture : humidité, structure, isolation, ventilation et réseaux. C'est cette lecture, et non le choix des finitions, qui fixe l'ordre réel des travaux et évite de traiter un symptôme sans corriger sa cause.",
  },
  {
    question: "Quel budget prévoir pour une rénovation de maison ?",
    reponse:
      "En repères Île-de-France 2026, comptez de 600 à 900 € par m² pour une rénovation partielle et de 1 000 à 1 500 € par m² pour une rénovation complète. Le budget de rénovation se construit ensuite par familles de postes (diagnostics, toiture et façade, structure, réseaux, isolation, finitions), avec une réserve pour aléas : le bâti ancien réserve souvent des découvertes.",
  },
  {
    question: "Faut-il refaire la toiture avant l'isolation ?",
    reponse:
      "C'est très souvent le bon ordre. Une toiture en mauvais état laisse entrer l'humidité, qui dégrade ensuite toute isolation posée en dessous. Traiter la couverture et l'étanchéité d'abord évite de reprendre un ouvrage neuf quelques années plus tard.",
  },
  {
    question: "Combien de temps dure une rénovation complète de maison ?",
    reponse:
      "Pour une maison avec reprise de l'enveloppe, des réseaux et de la structure, comptez généralement de 4 à 7 mois de travaux, hors temps de préparation (études, autorisations, consultation des entreprises). Ce n'est pas un délai garanti : il dépend de l'état découvert derrière les murs.",
  },
  {
    question: "Qui signe les devis et qui je paie ?",
    reponse:
      "Chaque entreprise partenaire établit et signe son propre devis : vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier ; notre rôle est le pilotage du projet.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation de maison en Île-de-France : lire le bâtiment du sol au toit"
        chapo="Maison ancienne ou pavillon des années 1960 à 1990 : nous lisons l'enveloppe, la structure et les réseaux avant de hiérarchiser les travaux, rendons les devis comparables, puis pilotons le chantier jusqu'à la réception."
        image="/photos/chantiers2/maison-facade-toiture-echafaudage.jpeg"
        alt="Rénovation d'une maison en Île-de-France : façade sous échafaudage et toiture en tuiles en cours de réfection"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de la maison sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Un seul interlocuteur pour les 8 corps de métier",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Une maison réunit dans un même volume l'enveloppe, la structure et les usages. Une tache d'humidité au
          plafond de l'étage peut venir de la toiture, d'une remontée capillaire ou d'une fuite de réseau : seule une
          lecture complète permet de trancher.
        </p>
        <p>
          Cette lecture précède toute demande de devis de travaux. Nous hiérarchisons ensuite les priorités avec vous :
          ce qui protège le bâti d'abord, puis le confort du logement, puis les finitions. Le budget de rénovation et les
          étapes de la rénovation en découlent. Les entreprises partenaires
          exécutent et facturent chaque lot.
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
        titre="Ce que comprend une rénovation de maison"
        accroche="Rénovation partielle ou rénovation complète, les mêmes postes reviennent. Chacun est vérifié à la visite, pas découvert pendant le chantier."
      >
        <PageCartes
          items={[
            {
              titre: "Toiture, charpente et façade",
              texte: "Couverture, zinguerie, points singuliers, bois et enduits : l'enveloppe se met hors d'eau avant d'isoler en dessous.",
            },
            {
              titre: "Isolation thermique et ventilation",
              texte: "Combles, murs et planchers isolés avec une ventilation adaptée : l'un ne va pas sans l'autre.",
              href: "/renovation-energetique",
            },
            {
              titre: "Électricité, plomberie et mise aux normes",
              texte: "Tableau et circuits remis aux normes, alimentations et évacuations refaites avant la fermeture des cloisons.",
              href: "/renovation-electrique",
            },
            {
              titre: "Redistribution des pièces",
              texte: "Cloisons déplacées, cuisine ouverte, chambre ajoutée. Une ouverture de mur porteur passe par une étude de structure.",
              href: "/ouverture-mur-porteur",
            },
            {
              titre: "Menuiseries et fenêtres",
              texte: "Remplacement des fenêtres les plus dégradées en priorité, portes intérieures posées sur cotes réelles.",
            },
            {
              titre: "Sols, murs et finitions",
              texte: "Remplacement des sols, peinture et rangements : la dernière étape des travaux de rénovation intérieure.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Toiture et isolation : l'ordre qui protège le budget"
        accroche="La toiture protège tout le reste. Tant que l'enveloppe n'est pas saine, l'isolation thermique et les finitions reposent sur un support incertain. Le diagnostic précède l'arbitrage, et l'arbitrage précède le devis."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers2/maison-toiture-tuiles-facade-refaites.jpeg"
          alt="Maison rénovée : toiture en tuiles refaite et façade enduite ton crème, fenêtres neuves"
          legende="Toiture en tuiles refaite et façade enduite : l'enveloppe d'abord."
        />
        <PageCoches
          items={[
            "Diagnostic de la couverture, de la zinguerie, des bois et des traces d'humidité",
            "Réparer, traiter ou remplacer : un choix fait sur l'état réel, pas sur une règle générale",
            "Points singuliers repérés : une jonction de toiture ou une fissure de façade explique souvent un désordre présenté comme diffus",
            "Toiture traitée en premier, poste de déperdition souvent le plus important",
            "Fenêtres de toit, isolant, pare-vapeur et ventilation décidés ensemble",
            "Déclaration préalable en mairie pour certaines modifications de toiture ou de façade",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation de maison"
        accroche="Le coût au m² d'une rénovation de maison dépend surtout du niveau de rénovation. Ces repères Île-de-France 2026 donnent un ordre de grandeur ; le prix réel se fixe sur les devis des entreprises, après la visite technique."
      >
        <PageTableau
          colonnes={["Niveau de rénovation", "Ce qui est refait", "Coût au m²", "Pour 100 m²"]}
          lignes={GAMMES.map((g) => [
            g.nom,
            g.description,
            `${fmt(g.prixMin)} – ${fmt(g.prixMax)} €`,
            `${fmt(g.prixMin * 100)} – ${fmt(g.prixMax * 100)} €`,
          ])}
          note={
            <>
              Fourchettes indicatives, hors honoraires de pilotage. La toiture, la façade et une éventuelle reprise de
              structure s'ajoutent selon l'état de la maison. Le détail poste par poste (isolation, fenêtres,
              ventilation) est sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation</Link> ;
              pour un premier budget, utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de la rénovation de votre maison"
        accroche="Le même déroulé pour chaque rénovation de maison. Les délais sont fixés dans un planning validé avec vous avant le démarrage."
      >
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Lecture du sol au toit : humidité, structure, toiture, réseaux, isolation et ventilation existantes." },
            { titre: "Priorités et budget", texte: "Travaux classés par niveau de risque : structure, humidité et enveloppe d'abord, finitions ensuite." },
            { titre: "Autorisations", texte: "Déclaration préalable en mairie pour certaines modifications de façade ou de toiture, étude de structure si un mur porteur est touché." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Chantier piloté", texte: "Contrôles avant fermeture des cloisons et photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, puis remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre rénovation de maison, du sol au toit"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/maison-toiture-tuiles-facade-refaites.jpeg"

        alt="Maison rénovée : toiture en tuiles refaite et façade enduite ton crème, fenêtres neuves"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation de maison">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-energetique", titre: "Rénovation énergétique", texte: "Isolation, ventilation et chauffage arbitrés ensemble." },
            { href: "/extension-maison", titre: "Extension de maison", texte: "Gagner de la surface sans désorganiser l'existant." },
            { href: "/renovation-complete", titre: "Rénovation complète", texte: "Tous corps d'état, un seul interlocuteur." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
