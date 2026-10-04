import type { Metadata } from "next";
import Link from "next/link";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { GAMMES, PIECES_OPTIONS } from "../data";
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

/* Intention unique : connaître le prix de la rénovation au m² (et par poste) en Île-de-France.
   Mot-clé principal : « prix rénovation m2 ».
   Données : GAMMES et PIECES_OPTIONS (app/data.ts, repères IDF 2026) et les onze postes
   historiques de l'observatoire (1er semestre 2024), conservés à l'identique.
   Retirés : graphique à échelle logarithmique, infographie des « curseurs », liens vers les
   pages redirigées (clinique du devis, modèle économique, achat direct, pages locales). */

const CHEMIN = "/observatoire-prix-renovation";
const TITRE = "Prix de la rénovation au m² en Île-de-France";
const DESCRIPTION =
  "Prix rénovation m² en Île-de-France : de 250 à 2 500 €/m² selon le niveau de travaux, et fourchettes par poste (plomberie, électricité, carrelage, mur porteur).";
const FIL = [{ nom: "Prix de la rénovation au m²", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Prix rénovation m² : fourchettes par niveau et par poste | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Prix rénovation m² : fourchettes par niveau et par poste | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chCloisonsPlaco.jpeg" }],
  },
};

const euros = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ");

// `href` : page du site qui décrit les travaux correspondant au poste.
const POSTES = [
  { poste: "Démolition / dépose", unite: "m² ou forfait pièce", prix: "20 – 60 € / m²", href: "/ouverture-mur-porteur" },
  { poste: "Plomberie (rénovation complète)", unite: "point d'eau", prix: "400 – 900 € / point", href: "/renovation-salle-de-bain-maison" },
  { poste: "Électricité (mise aux normes)", unite: "m² habitable", prix: "70 – 130 € / m²", href: "/renovation-electrique" },
  { poste: "Cloisons (placo sur ossature)", unite: "m²", prix: "45 – 90 € / m²", href: "/renovation-complete" },
  { poste: "Peinture (préparation incluse)", unite: "m² au sol", prix: "25 – 55 € / m²", href: "/renovation-complete" },
  { poste: "Carrelage (pose incluse)", unite: "m²", prix: "50 – 110 € / m²", href: "/renovation-salle-de-bain-maison" },
  { poste: "Menuiseries extérieures", unite: "unité posée", prix: "500 – 1 400 € / fenêtre", href: "/menuiserie-agencement-sur-mesure" },
  { poste: "Isolation thermique (intérieure)", unite: "m² de paroi", prix: "40 – 90 € / m²", href: "/renovation-energetique" },
  { poste: "Ventilation (VMC simple à double flux)", unite: "logement", prix: "1 500 – 6 000 € / logement", href: "/renovation-energetique" },
  { poste: "Ouverture de mur porteur", unite: "ouverture", prix: "3 000 – 9 000 € / ouverture", href: "/ouverture-mur-porteur" },
  { poste: "Carottage (diagnostic ou passage réseau)", unite: "forage", prix: "150 – 450 € / forage", href: "/renovation-complete" },
];

const FAQ = [
  {
    question: "Quel est le prix d'une rénovation au m² en Île-de-France ?",
    reponse:
      "Comptez 250 à 450 € le m² pour un rafraîchissement, 600 à 900 € pour une rénovation partielle, 1 000 à 1 500 € pour une rénovation complète et 1 500 à 2 500 € pour du haut de gamme. Ce sont des fourchettes indicatives : le prix contractuel reste celui du devis de chaque entreprise.",
  },
  {
    question: "Ces prix sont-ils garantis pour mon projet ?",
    reponse:
      "Non. Le prix réel dépend de l'état du bâti, de l'accès au chantier, de la gamme de matériaux et des contraintes du logement. Seule une visite technique permet d'établir un budget fiable.",
  },
  {
    question: "Pourquoi les fourchettes sont-elles aussi larges ?",
    reponse:
      "Un même poste, comme l'ouverture d'un mur porteur, peut demander un simple linteau ou une reprise de charge avec étude d'ingénieur. La largeur de la fourchette reflète la diversité réelle des situations.",
  },
  {
    question: "Les prix incluent-ils les matériaux ?",
    reponse:
      "Oui, les fourchettes couvrent fourniture et pose, telles que facturées par une entreprise. Si vous achetez les matériaux en direct, au prix fournisseur, le montant final peut être inférieur.",
  },
  {
    question: "Ces prix sont-ils valables hors Île-de-France ?",
    reponse:
      "Non. Ils concernent le marché francilien, où le coût de la main-d'œuvre et les contraintes d'accès diffèrent souvent d'autres régions.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Prix de la rénovation au m² : les repères en Île-de-France"
        chapo="Combien coûte une rénovation au m², et poste par poste ? Des fourchettes indicatives et datées, pour cadrer un budget avant de recevoir les devis des entreprises."
        image="/photos/chantiers/chCloisonsPlaco.jpeg"
        alt="Chantier en cours : cloisons en plaques de plâtre vissées sur ossature métallique, sous une dalle béton, avant bandes et peinture"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises rendus comparables, poste par poste",
          "Achat direct des matériaux possible, au prix fournisseur",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Le prix d'une rénovation au m² dépend d'abord du niveau de travaux : repeindre ou tout reprendre ne se
          chiffre pas pareil. Le coût au m² dépend ensuite de l'état du logement, des matériaux et de la main-d'œuvre.
          Un prix moyen, seul, ne dit donc pas grand-chose.
        </p>
        <p>
          Les repères ci-dessous servent à poser un budget prévisionnel. Ils ne remplacent pas un devis travaux : ce
          sont les entreprises partenaires qui chiffrent, exécutent et facturent. Nous rendons leurs devis comparables.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "250 €", label: "le m² pour un rafraîchissement, au plus bas" },
          { valeur: "1 000 – 1 500 €", label: "le m² pour une rénovation complète" },
          { valeur: "11", label: "postes de travaux détaillés" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
        ]}
      />

      <PageSection
        id="prix-m2"
        titre="Prix de la rénovation au m² selon le niveau de travaux"
        accroche="Quatre niveaux couvrent l'essentiel des projets. Le coût au m² monte avec la part de réseaux, de cloisons et de pièces techniques reprises : cuisine, salle de bain, plomberie, électricité."
      >
        <PageTableau
          colonnes={["Niveau de rénovation", "Ce qu'il comprend", "Prix au m²"]}
          lignes={GAMMES.map((g) => [
            <strong key={g.id}>{g.nom}</strong>,
            g.description,
            `${euros(g.prixMin)} – ${euros(g.prixMax)} €`,
          ])}
          note="Repères Île-de-France 2026, fourniture et pose, hors mobilier et hors honoraires. Ce sont les mêmes fourchettes que celles de l'estimateur."
        />
      </PageSection>

      <PageSection
        id="prix-postes"
        titre="Prix par poste de travaux"
        accroche="Dans un devis détaillé, le prix se lit poste par poste, chacun avec son unité : m², point d'eau, fenêtre, logement ou ouverture. Isolation et ventilation relèvent de la rénovation énergétique."
      >
        <PageTableau
          colonnes={["Poste de travaux", "Unité", "Fourchette indicative"]}
          lignes={POSTES.map((p) => [
            <Link key={p.poste} href={p.href}>
              {p.poste}
            </Link>,
            p.unite,
            p.prix,
          ])}
          note="Île-de-France, premier semestre 2024. Fourchettes établies à partir d'exemples représentatifs de projets accompagnés, fourniture et pose, hors matériaux achetés en direct. Chaque poste renvoie vers la page qui décrit les travaux."
        />
      </PageSection>

      <PageSection
        titre="Les options qui font monter le budget"
        accroche="Certains choix s'ajoutent au prix au m². Ils sont déjà compris dans les niveaux « complète » et « haut de gamme » pour la cuisine et la salle de bain."
      >
        <PageTableau
          colonnes={["Option", "Supplément indicatif"]}
          lignes={PIECES_OPTIONS.map((o) => [o.nom, `environ + ${euros(o.majoration)} €`])}
        />
      </PageSection>

      <PageSection
        titre="Ce qui fait varier le prix d'un même poste"
        accroche="Six facteurs expliquent l'écart entre le bas et le haut de chaque fourchette."
      >
        <PageCartes
          colonnes={3}
          items={[
            { titre: "La surface", texte: "Un petit chantier absorbe moins bien les coûts fixes : installation, protections, évacuation." },
            { titre: "L'état du bâti", texte: "Un support dégradé impose des travaux préparatoires, souvent invisibles au premier coup d'œil." },
            { titre: "La structure", texte: "Murs porteurs, planchers et charges décident de la complexité d'une ouverture ou d'un carottage." },
            { titre: "L'accès au chantier", texte: "Étage sans ascenseur, cour étroite ou copropriété contrainte : le temps de mise en œuvre augmente." },
            { titre: "La gamme de matériaux", texte: "Un carrelage d'entrée de gamme et un produit haut de gamme n'ont pas le même prix au m²." },
            { titre: "Le délai souhaité", texte: "Aller plus vite demande plus d'ouvriers en même temps, ce qui a un coût." },
          ]}
        />
        <PageImage
          src="/photos/chantiers/chPoutreAcierMurDegarni.jpeg"
          alt="Ouverture de mur porteur en cours : poteau acier soudé sous une poutre de reprise, mur dégarni jusqu'à la pierre et gaine électrique apparente"
          legende="Ouverture de 1,80 m dans un immeuble ancien, avec reprise de charge validée par un ingénieur : ce cas se situe dans le haut de la fourchette « ouverture de mur porteur »."
        />
      </PageSection>

      <PageSection
        titre="Du prix au m² au budget réel"
        accroche="Une fourchette donne un ordre de grandeur. Votre budget rénovation, lui, se construit sur votre logement."
      >
        <PageCoches
          items={[
            "Vérifiez le périmètre : fourniture et pose, dépose, évacuation des gravats, protections",
            "Repérez les frais annexes et les exclusions écrites sur chaque devis : c'est là que naissent les écarts",
            "Demandez des devis comparatifs établis sur un même descriptif, pas des prix globaux",
            "Comparer des taux horaires ne suffit pas : c'est le contenu de chaque ligne qui compte",
            "Prévoyez une marge pour les aléas, surtout si la structure ou des réseaux anciens sont touchés",
            "Achetez carrelage, parquet ou robinetterie en direct pour réduire la facture finale",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Comment ces fourchettes sont établies"
        accroche="La méthode compte autant que le chiffre."
      >
        <PageEtapes
          items={[
            { titre: "Collecte", texte: "Les montants viennent des devis analysés et des chantiers accompagnés en Île-de-France." },
            { titre: "Nettoyage", texte: "Les montants incohérents, incomplets ou au périmètre flou sont écartés." },
            { titre: "Classement", texte: "Chaque montant est rattaché à un poste et à une unité cohérente : m², point, unité posée." },
            { titre: "Mise à jour", texte: "Les fourchettes sont revues pour suivre le prix des matériaux et de la main-d'œuvre." },
            { titre: "Limites publiées", texte: "Région et période sont indiquées avec chaque tableau, avec un rappel de leur caractère indicatif." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Passez des fourchettes à votre budget réel"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chPoutreAcierMurDegarni.jpeg"

        alt="Ouverture de mur porteur en cours : poteau acier soudé sous une poutre de reprise, mur dégarni jusqu'à la pierre et gaine électrique apparente"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur le prix de la rénovation au m²">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/estimateur-travaux", titre: "Estimateur de travaux", texte: "Une fourchette adaptée à votre surface en une minute." },
            { href: "/blog/devis-travaux-lignes-a-verifier", titre: "Lire un devis", texte: "Les lignes à vérifier avant de signer." },
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Un projet piloté de la visite à la réception." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
