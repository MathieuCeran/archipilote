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

/* Intention unique : rénover une salle de bain (ou une salle d'eau) à Paris / en Île-de-France,
   en appartement comme en maison malgré l'URL historique.
   Mot-clé principal : « rénovation salle de bain ».
   Contenu fusionné : /expertise-carrelage-zellige-travertin (étanchéité, zellige, travertin,
   joint époxy), page redirigée ici.
   Prix : lignes carrelage et plomberie de l'observatoire, fourchettes zellige / travertin de
   l'ancienne page carrelage, option « sdb » de PIECES_OPTIONS (data.ts). */

const CHEMIN = "/renovation-salle-de-bain-maison";
const TITRE = "Rénovation de salle de bain à Paris et en Île-de-France";
const DESCRIPTION =
  "Rénovation de salle de bain à Paris : étanchéité sous carrelage, pentes, ventilation et réseaux vérifiés avant la faïence. Prix au m², étapes et chantier piloté.";
const FIL = [{ nom: "Rénovation de salle de bain", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation salle de bain Paris : étanchéité, prix, étapes | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation salle de bain Paris : étanchéité, prix, étapes | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/sdb-granit-clair-baignoire.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Quel est le coût de la rénovation d'une salle de bain ?",
    reponse:
      "Le budget salle de bain dépend de la surface de la salle de bain, des réseaux à reprendre et du revêtement. En repères Île-de-France, comptez 400 à 900 € par point d'eau pour la plomberie et, en prix au m², 50 à 110 € pour un carrelage posé, 140 à 260 € le m² pour du zellige et 180 à 320 € pour du travertin. Le reste se lit sur les devis des entreprises.",
  },
  {
    question: "Combien de temps dure une rénovation complète de salle d'eau ?",
    reponse:
      "Comptez en moyenne trois à quatre semaines pour une salle d'eau complète en appartement ancien : dépose, réseaux, étanchéité et séchage, carrelage, joints, puis équipements et mise en service.",
  },
  {
    question: "Le joint époxy suffit-il à rendre une douche étanche ?",
    reponse:
      "Non. L'étanchéité est assurée par la natte ou le système posé sous le carrelage, avec ses bandes d'angle. Le joint époxy est une finition résistante, pas une barrière d'eau.",
  },
  {
    question: "Peut-on remplacer une baignoire par une douche à l'italienne ?",
    reponse:
      "Souvent, oui. Tout dépend de la place disponible pour la pente vers le siphon et de la position de l'évacuation. C'est vérifié au relevé, avant de dessiner la nouvelle salle de bain.",
  },
  {
    question: "Puis-je acheter moi-même le carrelage et la robinetterie ?",
    reponse:
      "Oui. Vous pouvez acheter en direct, au prix fournisseur, le carrelage, la pierre, la robinetterie et le meuble vasque ; les entreprises facturent alors la main-d'œuvre et la pose. Nous vérifions les références avant commande.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation de salle de bain : l'étanchéité avant le décor"
        chapo="Salle de bain ou salle d'eau, en appartement ou en maison : nous vérifions les évacuations, les pentes, l'étanchéité et la ventilation avant de choisir la faïence, puis pilotons les entreprises jusqu'à la réception."
        image="/photos/chantiers2/sdb-granit-clair-baignoire.jpeg"
        alt="Salle de bain rénovée dans un appartement haussmannien : murs et sol en grandes dalles de granit clair, baignoire îlot couleur sable, vasque monolithe et robinetterie murale cuivrée"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de la salle de bain sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Étanchéité photographiée avant recouvrement",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux
          bien plus que du style du carrelage, quels que soient les matériaux.
        </p>
        <p>
          Nous commençons donc par le relevé de l'existant. Le plan, les équipements, les revêtements muraux et le
          revêtement de sol viennent ensuite, avec vous. Les entreprises partenaires
          exécutent et facturent les travaux ; nous coordonnons plombier, électricien et carreleur avec un seul
          interlocuteur.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "1 à 2 %", label: "de pente vers le siphon de douche" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une rénovation de salle de bain"
        accroche="Une rénovation légère se limite aux équipements et aux revêtements ; une rénovation complète reprend aussi les réseaux et l'étanchéité. Chaque poste est vérifié avant le plan, pas découvert pendant le chantier."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Dépose et préparation du support",
              texte: "Dépose de l'existant, contrôle de la planéité au réglet, ragréage ou enduit si besoin. Aucun revêtement n'est posé sur un support non dressé.",
            },
            {
              titre: "Plomberie et évacuations",
              texte: "Position du siphon, diamètres, forme de pente et essai de mise en pression des alimentations avant fermeture des cloisons.",
            },
            {
              titre: "Étanchéité sous carrelage",
              texte: "Natte continue entre sol et murs, bandes de renfort dans les angles, manchons aux traversées. C'est elle, et non le joint, qui arrête l'eau.",
            },
            {
              titre: "Électricité et ventilation",
              texte: "Circuits et éclairage aux normes des pièces d'eau, extraction d'air dimensionnée pour éviter la condensation.",
              href: "/renovation-electrique",
            },
            {
              titre: "Douche, baignoire et meuble vasque",
              texte: "Douche à l'italienne, receveur extra-plat ou baignoire, WC suspendu, meuble vasque standard ou sur mesure. Remplacer seulement ces équipements relève d'une rénovation partielle.",
            },
            {
              titre: "Revêtements muraux et revêtement de sol",
              texte: "Carrelage, faïence ou pierre : calepinage tracé à sec, pose, joints adaptés à la zone, puis hydrofuge sur les pierres poreuses.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Étanchéité, pentes et ventilation"
        accroche="La plupart des désordres en pièce d'eau viennent d'une étanchéité absente ou interrompue, pas d'un carreau mal choisi. Ces points sont photographiés avant d'être recouverts."
      >
        <PageImage
          src="/photos/chantiers2/salle-eau-pierre-claire-douche-italienne.jpeg"
          alt="Salle d'eau rénovée : douche à l'italienne de plain-pied en carrelage ton pierre claire, siphon de sol, ciel de pluie et robinetterie encastrée cuivrés, plan-vasque en pierre veinée"
          legende="Douche à l'italienne de plain-pied : la pente vers le siphon et l'étanchéité se jouent sous le carrelage."
        />
        <PageCoches
          items={[
            "Forme de pente de 1 à 2 % vers le siphon, contrôlée au niveau laser",
            "Natte d'étanchéité continue du sol aux murs, renforcée dans les angles et autour des canalisations",
            "Joint époxy en douche : il ne se charge pas d'eau et ne noircit pas, mais il ne remplace pas l'étanchéité",
            "Ventilation vérifiée : une salle d'eau mal ventilée se dégrade, même bien carrelée",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Carrelage, zellige ou travertin : bien choisir"
        accroche="Chaque revêtement a ses contraintes de pose et d'entretien."
        fond="craie"
      >
        <PageCartes
          colonnes={3}
          items={[
            {
              titre: "Carrelage grand format",
              texte: "Peu de joints, entretien simple. Il exige un support parfaitement plan ; les découpes se font en atelier pour éviter les éclats sur les arêtes.",
            },
            {
              titre: "Zellige",
              texte: "Carreau artisanal aux nuances vivantes. On mélange plusieurs boîtes, on prévoit 10 à 15 % de casse et un joint fin de 1 à 2 mm, en époxy dans les zones humides.",
            },
            {
              titre: "Travertin et pierre naturelle",
              texte: "Pierre poreuse : double encollage, joint minéral de 2 à 3 mm et hydrofuge avant mise en service, à renouveler selon l'usage.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation de salle de bain"
        accroche="Le coût de la rénovation d'une salle de bain dépend de la surface de la salle de bain, des réseaux à reprendre, des matériaux et des équipements choisis, et de la main-d'œuvre. Repères Île-de-France en prix au m² ou au point d'eau ; le prix réel figure sur les devis des entreprises."
      >
        <PageTableau
          colonnes={["Poste", "Unité", "Fourchette indicative"]}
          lignes={[
            ["Plomberie (alimentation et évacuation)", "point d'eau", "400 – 900 €"],
            ["Carrelage ou faïence, pose incluse", "m²", "50 – 110 €"],
            ["Zellige posé", "m²", "140 – 260 €"],
            ["Travertin posé", "m²", "180 – 320 €"],
            ["Étanchéité renforcée et niches maçonnées", "option", "environ + 4 500 €"],
          ]}
          note={
            <>
              Prix au m² et au point d'eau indicatifs, hors honoraires de pilotage. Étanchéité courante, ragréage et joint époxy se chiffrent
              à part. Pour un premier budget, utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; le
              détail est sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
        <PageCoches
          items={[
            "Une salle de bain économique et une salle de bain haut de gamme demandent la même étanchéité : l'écart se fait sur les matériaux, les équipements et la surface carrelée",
            "Pour optimiser le budget, achetez carrelage, robinetterie et vasque en direct, au prix fournisseur",
            "Un forfait annoncé sans visite ne tient pas compte de l'état des réseaux : le budget salle de bain se fixe après le relevé",
            "Comparer des tarifs horaires ne suffit pas : nous comparons des devis établis sur un descriptif commun",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre rénovation de salle de bain"
        accroche="Le même déroulé pour chaque pièce d'eau. Le budget salle de bain et le planning sont validés avec vous avant le démarrage."
      >
        <PageImage
          src="/photos/chantiers2/salle-eau-marbre-gris-vers-chambre.jpeg"
          alt="Salle d'eau en carrelage effet marbre gris veiné, vasque monolithe et robinet mural cuivré, porte ouverte sur une chambre haussmannienne au parquet à chevrons"
          legende="Salle d'eau attenante à une chambre : réseaux et étanchéité traités avant le revêtement grand format."
        />
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Relevé des dimensions, des évacuations, de la ventilation et de l'état du support." },
            { titre: "Plan et choix des équipements", texte: "Implantation, douche ou baignoire, revêtements validés techniquement avant commande." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Réseaux et étanchéité", texte: "Plomberie, électricité, pentes et natte d'étanchéité, photographiées avant recouvrement." },
            { titre: "Pose et finitions", texte: "Carrelage, joints, appareils sanitaires et mise en service, avec photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, puis remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre salle de bain, étanche et durable"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/salle-eau-pierre-claire-douche-italienne.jpeg"

        alt="Salle d'eau rénovée : douche à l'italienne de plain-pied en carrelage ton pierre claire, siphon de sol, ciel de pluie et robinetterie encastrée cuivrés, plan-vasque en pierre veinée"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation de salle de bain">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Salle de bain et autres pièces, un seul projet." },
            { href: "/menuiserie-agencement-sur-mesure", titre: "Agencement sur mesure", texte: "Meuble vasque et rangements dessinés au relevé." },
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
