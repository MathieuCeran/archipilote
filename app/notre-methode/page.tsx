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

/* Intention unique : comment ARCHI PILOTE RÉNOVATION pilote une rénovation (méthode, rôles,
   modèle économique, garanties). Mot-clé principal (WhatsWrong, 10/2026) : « pilotage de
   chantier rénovation ».
   Contenus fusionnés ici (pages redirigées) : parcours-expertise, charte-qualite,
   detail-invisible, modele-economique-transparence, achat-direct-materiaux,
   garanties-assurances, reseau-partenaires, ce-que-nous-ne-faisons-pas.
   Retirés à la fusion (non vérifiables ou hors faits autorisés) : durées indicatives par
   étape, part des matériaux « 30 à 45 % du budget », noms de fournisseurs et de partenaires,
   logistique et nettoyage « non facturés », mention « architecte ». */

const CHEMIN = "/notre-methode";
const TITRE = "Pilotage de chantier rénovation : la méthode ARCHI PILOTE RÉNOVATION";
const DESCRIPTION =
  "Pilotage de chantier rénovation à Paris et en Île-de-France : visite technique, devis comparables, contrôles avant fermeture et photos datées chaque jour.";
const FIL = [{ nom: "Notre méthode", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Pilotage de chantier rénovation : méthode, rôles, garanties | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Pilotage de chantier rénovation : méthode, rôles, garanties | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/chambre-salle-de-bain-ouverte-marbre-cheminee.jpeg" }],
  },
};

const FAQ = [
  {
    question: "En quoi consiste le pilotage de chantier en rénovation ?",
    reponse:
      "Le pilotage couvre la préparation de chantier, la coordination des entreprises, la planification des lots, le suivi des travaux et la réception. Nous ne posons rien nous-mêmes : nous organisons, vérifions et documentons le travail des entreprises partenaires, de la visite technique jusqu'à la levée des réserves.",
  },
  {
    question: "Qui signe les devis et qui je paie ?",
    reponse:
      "Chaque entreprise partenaire établit et signe son propre devis : vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier. La mission de pilotage fait l'objet d'un document distinct.",
  },
  {
    question: "Comment suis-je informé de l'avancement du chantier ?",
    reponse:
      "Par des photos datées envoyées chaque jour sur WhatsApp et des comptes rendus réguliers : décisions prises, écarts éventuels, prochaines étapes. Ce reporting par des outils numériques simples vous permet de suivre le chantier sans être sur place en permanence.",
  },
  {
    question: "Acheter mes matériaux en direct réduit-il la garantie décennale ?",
    reponse:
      "Non. La décennale de l'entreprise porte sur la mise en œuvre, qui reste de sa responsabilité. L'achat direct est réservé aux postes hors décennale (carrelage, sanitaires, parquet, cuisine…), et chaque référence est validée par écrit par l'entreprise qui la pose.",
  },
  {
    question: "Que se passe-t-il si un imprévu apparaît pendant les travaux ?",
    reponse:
      "Il est documenté, chiffré par l'entreprise concernée et soumis à votre validation avant exécution : la gestion des coûts reste visible à chaque avenant. Aucune méthode ne supprime tout aléa sur un bâtiment existant ; elle évite qu'un imprévu devienne une décision improvisée.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Pilotage de chantier rénovation : notre méthode, de la visite à la réception"
        chapo="Nous préparons le projet, rendons les devis comparables et coordonnons les entreprises partenaires jusqu'à la réception. Elles exécutent et facturent les travaux ; vous les payez directement."
        image="/photos/chantiers2/chambre-salle-de-bain-ouverte-marbre-cheminee.jpeg"
        alt="Chambre d'un appartement haussmannien rénové ouverte sur une salle de bain en marbre sombre, cheminée d'origine conservée : un chantier de rénovation piloté jusqu'aux finitions"
      />

      <PageIntro
        titreCarte="Nos engagements"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises rendus comparables",
          "Photos datées envoyées chaque jour",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Un chantier dérive rarement à cause d'une seule erreur. Il dérive par accumulation : un devis incomplet,
          une option validée trop vite, un lot oublié entre deux corps de métier.
        </p>
        <p>
          Le pilotage de chantier rénovation sert à éviter cette accumulation. Chaque décision est prise au bon
          moment, écrite et vérifiable : de la phase conception à la phase exécution, vous savez qui fait quoi,
          pour quel prix et dans quel ordre.
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
        titre="Les étapes du pilotage de chantier"
        accroche="Le pilotage de chantier rénovation suit le même déroulé pour chaque projet, d'une salle de bain à une rénovation complète. Seuls la durée et le nombre de documents changent."
      >
        <PageEtapes
          items={[
            { titre: "Premier échange", texte: "Par téléphone ou WhatsApp : votre bien, vos usages, votre budget et vos délais." },
            { titre: "Visite technique", texte: "Structure, réseaux, ventilation, humidité, accès : le bâti est lu avant de parler finitions." },
            { titre: "Étude et planification", texte: "Postes classés en indispensable, souhaitable et optionnel. Ordonnancement des lots et planning arrêtés avec vous." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne sur le même périmètre." },
            { titre: "Chantier piloté", texte: "Préparation de chantier (accès, protections, horaires), coordination des lots, contrôles avant fermeture et changements tracés." },
            { titre: "Réception et suivi", texte: "Réserves écrites et levées, dossier de fin de chantier, puis suivi 12 mois après la réception." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Qui fait quoi sur votre chantier"
        accroche="Nous ne sommes pas une entreprise générale. Cette séparation des rôles est le socle de notre modèle, pas une réserve en petits caractères."
      >
        <PageCartes
          items={[
            {
              titre: "ARCHI PILOTE RÉNOVATION",
              texte: "Cadrage du projet, lecture des devis, coordination des entreprises, planification, suivi des travaux et préparation de la réception.",
            },
            {
              titre: "Les entreprises partenaires",
              texte: "Indépendantes, elles établissent leurs devis, exécutent les travaux, les facturent et portent leurs propres assurances.",
            },
            {
              titre: "Architectes et ingénieurs",
              texte: "Partenaires indépendants, ils interviennent en leur nom quand le dossier l'exige : permis, étude de structure pour un mur porteur.",
            },
          ]}
        />
        <PageCoches
          items={[
            "Nous n'exécutons aucun lot : aucun carrelage posé, aucun câble tiré par nos soins",
            "Nous n'émettons aucun devis de travaux et ne facturons aucun chantier",
            "Nous ne vendons aucun matériau et ne prenons aucune marge sur la fourniture",
            "Nous ne nous substituons à aucune assurance des entreprises",
            "Nous ne prononçons pas la réception : c'est votre acte, nous vous y accompagnons",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Contrôles avant fermeture des cloisons"
        accroche="Ce qui décide de la durée de vie d'une rénovation disparaît derrière les finitions. Chaque point est vérifié et photographié avant que le lot suivant ne le recouvre."
      >
        <PageImage
          src="/photos/chantiers/chEtancheiteSolDoucheTrameArmee.jpeg"
          alt="Sol de douche à l'italienne en préparation : treillis d'armature sur la dalle, évacuation en attente, cloisons en plaques hydrofuges"
          legende="Sol de douche en préparation, avant étanchéité et carrelage. Chantier réel des équipes partenaires."
        />
        <PageCoches
          items={[
            "Étanchéité sous carrelage continue au sol et en remontée, angles et traversées traités",
            "Renforts posés derrière les cloisons pour meubles suspendus, WC suspendu, sèche-serviettes",
            "Réservations d'eau, d'évacuation et d'électricité à l'emplacement exact des équipements",
            "Câblage, boîtes de dérivation et repérage des circuits vérifiés avant plaquage",
            "Gaines de ventilation raccordées et étanches avant faux plafond",
            "Traversées de murs et planchers calfeutrées pour le feu et l'acoustique",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Achat direct des matériaux"
        accroche="Vous pouvez acheter vos matériaux en direct, à votre nom et au prix fournisseur. Le devis est alors découpé en deux, ligne par ligne, dès le chiffrage."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Ce que vous achetez",
              texte: "Carrelage et faïence, robinetterie et sanitaires, parquet, cuisine équipée, façades sur mesure, luminaires. Chaque référence est validée par écrit par l'entreprise qui la pose.",
            },
            {
              titre: "Ce que l'entreprise fournit",
              texte: "Tout ce qui engage sa décennale : câblage, canalisations, étanchéité sous carrelage, colles techniques, isolants, plaques et structure.",
            },
          ]}
        />
        <PageCoches
          items={[
            "Quantités relevées sur place, avec une réserve de coupe calculée selon le calepinage",
            "Livraisons calées sur le planning des lots : une gestion des stocks sans saturation ni équipe immobilisée",
            "Contrôle des quantités, références et teintes à la livraison, avant déballage complet",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Garanties et assurances"
        accroche="Chaque entreprise partenaire porte les assurances des travaux qu'elle exécute. Avant tout démarrage, elle remet ses attestations : nous vérifions l'activité couverte, la période de validité et l'identité de l'assuré."
      >
        <PageTableau
          colonnes={["Garantie", "Durée", "Ce qu'elle couvre", "Qui la porte"]}
          lignes={[
            ["Parfait achèvement", "1 an", "Toute malfaçon signalée dans l'année suivant la réception", "Chaque entreprise, pour ses travaux"],
            ["Biennale", "2 ans", "Équipements dissociables : volets, chauffage, VMC, robinetterie", "L'entreprise qui les a installés"],
            ["Décennale", "10 ans", "Dommages touchant la solidité ou rendant l'ouvrage impropre à son usage", "L'entreprise qui a exécuté le lot"],
          ]}
          note={
            <>
              En cas de malfaçon, c'est l'assurance de l'entreprise concernée qui joue. Nous vous accompagnons dans les
              constats et le suivi des reprises, sans nous substituer à aucune assurance. Les autorisations à prévoir sont
              sur la page <Link href="/demarches-administratives-renovation">démarches administratives</Link>.
            </>
          }
        />
      </PageSection>

      <PageAppel

        titre="Votre projet, piloté de la visite à la réception"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chEtancheiteSolDoucheTrameArmee.jpeg"

        alt="Sol de douche à l'italienne en préparation : treillis d'armature sur la dalle, évacuation en attente, cloisons en plaques hydrofuges"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur le pilotage de chantier">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/realisations", titre: "Réalisations", texte: "Photos de chantiers réels des entreprises partenaires." },
            { href: "/observatoire-prix-renovation", titre: "Prix de la rénovation", texte: "Fourchettes au m² et poste par poste." },
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
