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

/* Intention unique : rénover une cuisine à Paris / en Île-de-France (appartement ou maison).
   Mot-clé principal : « rénovation cuisine ».
   Le détail de la menuiserie (façades, dressings) vit sur /menuiserie-agencement-sur-mesure :
   ici seulement résumé et lié.
   Prix : lignes plomberie, carrelage et mur porteur de l'observatoire, option « cuisine » de
   PIECES_OPTIONS (data.ts). Aucun prix global de cuisine n'existe dans le dépôt. */

const CHEMIN = "/renovation-cuisine-maison";
const TITRE = "Rénovation de cuisine à Paris et en Île-de-France";
const DESCRIPTION =
  "Rénovation de cuisine à Paris : implantation, réseaux et ventilation calés avant les meubles, façades sur mesure sur caissons standards. Prix et étapes.";
const FIL = [{ nom: "Rénovation de cuisine", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation cuisine Paris : implantation, réseaux, prix | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation cuisine Paris : implantation, réseaux, prix | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/piece-de-vie-cuisine-parquet-versailles.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Combien coûte la rénovation d'une cuisine ?",
    reponse:
      "Il n'existe pas de prix unique : tout dépend des réseaux à déplacer, des meubles et de l'électroménager. En repères Île-de-France, comptez 400 à 900 € par point d'eau pour la plomberie et 50 à 110 € le m² pour un carrelage posé. Choisir une cuisine sur mesure plutôt que standard ajoute environ 6 000 €. Le prix réel se lit sur les devis des entreprises.",
  },
  {
    question: "Peut-on déplacer l'évier ou ouvrir la cuisine sur le séjour ?",
    reponse:
      "Déplacer un point d'eau dépend des chutes et des pentes d'évacuation : c'est vérifié au relevé. Ouvrir la cuisine sur le séjour est simple si la cloison n'est pas porteuse ; dans le cas contraire, une étude par un bureau d'études structure est nécessaire.",
  },
  {
    question: "Faut-il une cuisine entièrement sur mesure pour un beau rendu ?",
    reponse:
      "Non. Le rendu tient aux façades, aux plinthes, aux joues d'habillage et au plan de travail, pas au caisson, invisible une fois posé. Des caissons standards de bonne facture habillés de façades sur mesure arbitrent entre budget et rendu.",
  },
  {
    question: "Qui achète les meubles et l'électroménager ?",
    reponse:
      "Vous pouvez les acheter en direct, à votre nom et au prix fournisseur : caissons, façades, plan de travail, électroménager. Nous vérifions les références et les cotes avant commande, puis coordonnons la livraison avec la pose.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation de cuisine : décider les réseaux avant les façades"
        chapo="Cuisine fermée, ouverte ou en îlot : nous calons l'implantation, la plomberie, l'électricité et la ventilation avant de commander les meubles, puis pilotons la pose jusqu'à la réception."
        image="/photos/chantiers2/piece-de-vie-cuisine-parquet-versailles.jpeg"
        alt="Cuisine ouverte rénovée dans un appartement haussmannien : colonnes toute hauteur en placage bois clair sans poignée, crédence et plan de travail en pierre rubanée, parquet en panneaux de Versailles"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de la cuisine sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Plombier, électricien, menuisier coordonnés",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Une cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Si l'un de
          ces postes est décidé trop tard, les meubles commandés ne tombent plus juste.
        </p>
        <p>
          Que vous refassiez entièrement la pièce ou que vous envisagiez la rénovation d'une cuisine aménagée existante,
          nous partons du relevé. La conception de la cuisine et son aménagement se décident avant le style, et les cotes finales
          arrivent après validation des supports. Les entreprises partenaires exécutent et facturent les travaux ;
          vous gardez un seul interlocuteur du plan à la réception.
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
        titre="Ce que comprend une rénovation de cuisine"
        accroche="Selon l'état de la pièce, la rénovation de cuisine touche tout ou partie de ces postes. Chacun est vérifié avant la commande des meubles."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Plan et implantation",
              texte: "Circulations, hauteurs, points d'eau, cuisson et éclairage : cuisine en L, cuisine en U, cuisine linéaire ou îlot central, l'implantation de la cuisine est dessinée sur plan.",
            },
            {
              titre: "Plomberie et évacuations",
              texte: "Alimentations et évacuations de l'évier et du lave-vaisselle. Déplacer un point d'eau dépend des pentes disponibles.",
            },
            {
              titre: "Électricité et ventilation",
              texte: "Circuits dédiés à l'électroménager, prises au-dessus du plan, éclairage et extraction de la hotte.",
              href: "/renovation-electrique",
            },
            {
              titre: "Meubles, façades et plan de travail",
              texte: "Caissons, façades, plan en bois, béton ciré ou quartz, électroménager encastré intégré au dessin.",
            },
            {
              titre: "Crédence, sol et finitions",
              texte: "Carrelage, pierre ou zellige en crédence, avec un joint époxy qui résiste aux taches et à l'entretien.",
            },
            {
              titre: "Ouverture sur le séjour",
              texte: "Supprimer une cloison ou ouvrir un mur porteur : dans ce second cas, étude de structure obligatoire.",
              href: "/ouverture-mur-porteur",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Caissons standards, façades sur mesure"
        accroche={
          <p>
            Le caisson disparaît derrière la façade. Nous gardons donc souvent des caissons standards de bonne facture et
            faisons fabriquer sur mesure ce qui se voit : façades, plinthes, joues d'habillage. Le détail est sur la page{" "}
            <Link href="/menuiserie-agencement-sur-mesure">agencement sur mesure</Link>.
          </p>
        }
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chCuisineBlancheElectromenagerLG.jpeg"
          alt="Cuisine blanche brillante en cours de pose avec îlot central : entre la colonne des fours et le réfrigérateur, un caisson standard encore sans façade, tablettes apparentes"
          legende="Avant les façades : un caisson standard encore nu entre la colonne des fours et le réfrigérateur."
        />
        <PageCoches
          items={[
            "Façades en chêne, en placage ou en laqué, réglées au millimètre",
            "Plinthes et joues d'habillage ajustées aux murs, qui ne sont jamais droits en ancien",
            "Plan de travail, façades et électroménager commandés tôt : ce sont souvent les délais les plus longs",
            "Électroménager encastré prévu dans le dessin, pas ajouté après",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation de cuisine"
        accroche="Le budget de rénovation d'une cuisine dépend surtout des réseaux à reprendre, des meubles et des matériaux choisis. Ces repères Île-de-France donnent un ordre de grandeur ; le prix réel figure sur les devis des entreprises, après la visite technique."
      >
        <PageTableau
          colonnes={["Poste", "Unité", "Fourchette indicative"]}
          lignes={[
            ["Plomberie (évier, lave-vaisselle)", "point d'eau", "400 – 900 €"],
            ["Carrelage de sol ou crédence, pose incluse", "m²", "50 – 110 €"],
            ["Cuisine sur mesure plutôt que standard", "option", "environ + 6 000 €"],
            ["Ouverture d'un mur porteur sur le séjour", "ouverture", "3 000 – 9 000 €"],
          ]}
          note={
            <>
              Fourchettes indicatives, hors meubles achetés en direct et hors honoraires de pilotage. Pour un premier budget
              global, utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; le détail est sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre rénovation de cuisine"
        accroche="Les étapes de rénovation sont les mêmes pour chaque cuisine. La planification des travaux et le budget de rénovation sont validés avec vous avant le démarrage."
      >
        <PageImage
          src="/photos/chantiers2/enfilade-cuisine-parquet-versailles.jpeg"
          alt="Pièce de vie haussmannienne en enfilade : cuisine en bois clair avec four encastré et crédence en pierre rubanée, banquette arrondie, parquet de Versailles et radiateur en fonte"
          legende="Cuisine ouverte sur la pièce de vie : réseaux et électroménager calés avant la commande des meubles."
        />
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Relevé de la pièce, des évacuations, du tableau électrique et de la ventilation." },
            { titre: "Plan de la cuisine", texte: "Implantation, aménagement intérieur des meubles, plan de travail et électroménager arrêtés avec vous, cotes vérifiées sur les supports." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Réseaux et supports", texte: "Plomberie, électricité, ventilation et sols traités avant l'arrivée des meubles." },
            { titre: "Pose et raccordements", texte: "Meubles, plan de travail, crédence et électroménager, avec photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, puis remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre cuisine, réseaux et implantation d'abord"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/enfilade-cuisine-parquet-versailles.jpeg"

        alt="Cuisine rénovée en enfilade : façades bois clair toute hauteur, crédence en pierre, parquet de Versailles"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation de cuisine">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/menuiserie-agencement-sur-mesure", titre: "Agencement sur mesure", texte: "Façades, dressings et rangements." },
            { href: "/ouverture-mur-porteur", titre: "Ouverture de mur porteur", texte: "Ouvrir la cuisine sur le séjour." },
            { href: "/realisations", titre: "Réalisations", texte: "Cuisines et appartements livrés." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
