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

/* Intention unique : agencement sur mesure (dressings, bibliothèques, placards, rangements,
   menuiserie intérieure) à Paris / en Île-de-France.
   Mot-clé principal : « agencement sur mesure ».
   La cuisine a sa propre page (/renovation-cuisine-maison) : ici seulement résumée et liée.
   Prix : fourchettes dressing de l'ancienne page (FAQ), option « cuisine » de PIECES_OPTIONS. */

const CHEMIN = "/menuiserie-agencement-sur-mesure";
const TITRE = "Agencement sur mesure à Paris et en Île-de-France";
const DESCRIPTION =
  "Agencement sur mesure à Paris : dressings, bibliothèques, placards et rangements dessinés sur le relevé réel, posés par des menuisiers partenaires.";
const FIL = [{ nom: "Agencement sur mesure", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Agencement sur mesure Paris : dressing, bibliothèque, placard | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Agencement sur mesure Paris : dressing, bibliothèque, placard | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/chambre-baignoire-ouverte-granit-lustre.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Combien coûte un dressing sur mesure ?",
    reponse:
      "En repères Île-de-France, comptez 900 à 1 800 € le mètre linéaire pour un dressing sur mesure en chêne, façades et aménagement intérieur compris, et 500 à 1 100 € en solution mixte, caissons standards et façades sur mesure. Le prix dépend de la hauteur, du nombre de tiroirs et de la finition.",
  },
  {
    question: "Peut-on habiller des caissons du commerce avec des façades sur mesure ?",
    reponse:
      "Oui. Les caissons de grande distribution ont des dimensions normalisées et des quincailleries fiables. Les façades, plinthes et habillages latéraux sont fabriqués sur mesure, en chêne ou en laqué, puis posés et réglés par l'entreprise partenaire.",
  },
  {
    question: "Le sur-mesure est-il adapté à un logement ancien ?",
    reponse:
      "C'est même là qu'il est le plus utile. Dans un logement ancien, aucun mur n'est droit : un meuble standard laisse des jours et de la surface perdue. Le sur-mesure part du relevé réel, faux aplombs, retours de cheminée et passages de gaines compris.",
  },
  {
    question: "Quels sont l'entretien et la garantie d'un mobilier sur mesure ?",
    reponse:
      "Chaque menuisier partenaire porte ses propres assurances et garanties (parfait achèvement, biennale, décennale selon l'ouvrage) sur ce qu'il fabrique et pose. Nous assurons en plus un suivi de 12 mois après la réception. L'entretien dépend de la finition retenue : huilée, vernie ou laquée.",
  },
  {
    question: "Qui fabrique et qui achète les meubles ?",
    reponse:
      "Les menuisiers partenaires fabriquent, posent et facturent leur ouvrage. Vous pouvez acheter en direct la fourniture courante, caissons, quincaillerie, plans : nous validons les références avant commande et coordonnons la livraison avec la pose.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Agencement sur mesure : des rangements dessinés pour votre logement"
        chapo="Dressings, bibliothèques, placards et menuiserie intérieure : nous dessinons l'agencement sur le relevé réel, arbitrons entre tout sur mesure et façades sur caissons standards, puis pilotons fabrication et pose."
        image="/photos/chantiers2/chambre-baignoire-ouverte-granit-lustre.jpeg"
        alt="Chambre d'un appartement haussmannien avec agencement sur mesure : armoire en bois clair à deux portes et poignées laiton, colonne à étagères ouvertes séparant le coin bain en granit, parquet à chevrons"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique et relevé sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des menuisiers partenaires rendus comparables",
          "Fabrication et pose suivies, photos datées chaque jour",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Dans un logement ancien, aucun volume n'est droit. Le mobilier standard laisse des jours, des rives
          disgracieuses et de la surface perdue. Un agencement sur mesure récupère ces volumes, du sol au plafond : c'est
          de l'optimisation d'espace, avec du mobilier sur mesure plutôt que des solutions de catalogue.
        </p>
        <p>
          Nous assurons la gestion de projet : relevé, dessin, comparaison des devis sur mesure établis par les
          menuisiers partenaires, puis suivi de la fabrication en atelier et de la pose. Les menuisiers exécutent et
          facturent leur travail.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "3 mm", label: "de jeu réglé entre façades" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend un agencement sur mesure"
        accroche="Le même principe pour chaque ouvrage : relevé du réel, dessin coté, fabrication en atelier, pose et réglage."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Dressings et penderies",
              texte: "Toute hauteur ou sous pente, en chêne huilé ou en laqué, penderies et tiroirs dimensionnés sur vos usages, éclairage intégré.",
            },
            {
              titre: "Bibliothèques",
              texte: "Du sol au plafond, autour d'une cheminée ou d'une fenêtre, avec caissons bas fermés et étagères ouvertes.",
            },
            {
              titre: "Placards et rangements de couloir",
              texte: "Affleurés au doublage, sans poignée apparente : le couloir gagne du rangement sans paraître plus étroit.",
            },
            {
              titre: "Bureaux et espaces professionnels",
              texte: "Bureau intégré aux rangements, comptoir d'accueil, présentoirs : l'aménagement de bureaux et de boutiques suit la même méthode.",
            },
            {
              titre: "Menuiserie intérieure",
              texte: "Portes, chambranles, plinthes hautes et placards moulurés dans le dessin des menuiseries anciennes.",
            },
            {
              titre: "Façades de cuisine",
              texte: "Façades, plinthes et joues sur mesure posées sur des caissons standards.",
              href: "/renovation-cuisine-maison",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Sur mesure ce qui se voit, standard ce qui ne se voit pas"
        accroche="Un ensemble tout sur mesure coûte cher parce que chaque caisson est fabriqué à l'unité. Or le caisson disparaît derrière la façade. Nous comparons les deux solutions chiffrées, devis en main."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers2/rangement-integre-gris-entree.jpeg"
          alt="Rangement intégré sur mesure dans une entrée : armoires toute hauteur gris taupe sans poignée, éclairage encastré, parquet à chevrons"
          legende="Rangement intégré toute hauteur dans une entrée : façades lisses, sans poignée."
        />
        <PageCoches
          items={[
            "Caissons standards de bonne facture, aux dimensions normalisées",
            "Façades en chêne massif, en placage ou en laqué, fabriquées sur mesure",
            "Plinthes, joues d'habillage, corniches et retours contre les murs biais ajustés",
            "Jeux réguliers de 3 mm entre façades, charnières réglées à la pose",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'un agencement sur mesure"
        accroche="Le prix se lit au mètre linéaire et dépend de la hauteur, du nombre de tiroirs et de la finition. Ces repères Île-de-France donnent un ordre de grandeur ; le prix réel figure sur les devis des menuisiers."
      >
        <PageTableau
          colonnes={["Ouvrage", "Unité", "Fourchette indicative"]}
          lignes={[
            ["Dressing tout sur mesure en chêne, intérieur compris", "mètre linéaire", "900 – 1 800 €"],
            ["Dressing mixte : caissons standards, façades sur mesure", "mètre linéaire", "500 – 1 100 €"],
            ["Cuisine sur mesure plutôt que standard", "option", "environ + 6 000 €"],
          ]}
          note={
            <>
              Fourchettes indicatives, hors honoraires de pilotage. Pour un premier budget, utilisez
              l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; d'autres postes sont sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes d'un agencement sur mesure"
        accroche="Le processus de conception part toujours du réel pour aboutir à des solutions personnalisées. Chaque étape est documentée et photographiée dans le suivi envoyé chaque jour."
      >
        <PageImage
          src="/photos/chantiers/chBibliothequeChenePieceComplete.jpeg"
          alt="Bibliothèque sur mesure en bois clair en cours de pose, montée sur deux murs et retournée dans l'angle, prolongée par un placard toute hauteur, tréteaux au premier plan"
          legende="Bibliothèque et placard toute hauteur en cours de pose, avant finitions."
        />
        <PageEtapes
          items={[
            { titre: "Relevé du volume", texte: "Mesures au télémètre, faux aplombs, retours de cheminée, coffres et passages de gaines." },
            { titre: "Dessin coté", texte: "Plans et élévations, hauteurs de tablettes, sens d'ouverture et éclairage, validés avant commande." },
            { titre: "Arbitrage chiffré", texte: "Tout sur mesure ou caissons standards avec façades sur mesure : les deux versions comparées sur devis." },
            { titre: "Fabrication en atelier", texte: "Façades, plinthes, joues et corniches en chêne, en placage ou en laqué, finition huilée ou vernie." },
            { titre: "Pose et réception", texte: "Calage des faux aplombs, réglage des charnières, contrôle des alignements, puis nettoyage." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Vos rangements, dessinés sur mesure"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/rangement-integre-gris-entree.jpeg"

        alt="Rangement intégré sur mesure dans une entrée : armoires toute hauteur gris taupe sans poignée, éclairage encastré, parquet à chevrons"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur l'agencement sur mesure">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-cuisine-maison", titre: "Rénovation de cuisine", texte: "Implantation, réseaux et pose des meubles." },
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Volumes anciens et rangements intégrés." },
            { href: "/realisations", titre: "Réalisations", texte: "Dressings, bibliothèques et cuisines livrés." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
