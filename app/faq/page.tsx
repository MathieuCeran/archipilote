import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { FAQ as FAQ_ACCUEIL } from "../data";
import { PageHero, PageSection, PageFaq, PageLiens, JsonLdPage } from "../components/page-kit";

/* Questions fréquentes, regroupées par thème. Sources : FAQ de data.ts (accueil) et FAQ
   historique de cette page, dédoublonnées (« qui signe les devis », « durée d'une
   rénovation complète »). Les icônes décoratives par thème sont retirées. */

const CHEMIN = "/faq";
const TITRE = "Questions fréquentes sur la rénovation";
const DESCRIPTION =
  "Questions fréquentes sur la rénovation : rôle du pilote, devis et prix, structure, second œuvre, rénovation énergétique, copropriété et déroulement du chantier.";
const FIL = [{ nom: "Questions fréquentes", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Questions fréquentes sur la rénovation | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Questions fréquentes sur la rénovation | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/og.jpg" }],
  },
};

type Q = { question: string; reponse: string };
const accueil = (debut: string): Q => {
  const q = FAQ_ACCUEIL.find((f) => f.question.startsWith(debut));
  if (!q) throw new Error(`FAQ introuvable : ${debut}`);
  return q;
};

const THEMES: { titre: string; accroche: string; items: Q[] }[] = [
  {
    titre: "Rôle et responsabilités",
    accroche: "Qui fait quoi, qui signe, qui garantit.",
    items: [
      { question: "ARCHI PILOTE RÉNOVATION est-il un architecte ou une entreprise générale ?", reponse: "Non. ARCHI PILOTE RÉNOVATION structure et pilote le projet de A à Z. Les entreprises partenaires contractantes exécutent et facturent les travaux. Pour les dossiers lourds, des architectes et ingénieurs structure partenaires indépendants interviennent sur leur périmètre." },
      accueil("Qui signe les devis"),
      { question: "Que signifie « pilotage » dans ce contexte ?", reponse: "Le pilotage désigne l'accompagnement de A à Z du projet : cadrage, chiffrage, sélection des compétences nécessaires, suivi des décisions et vérification des interfaces entre lots, sans se substituer aux entreprises exécutantes." },
      { question: "Dans quels cas un architecte intervient-il ?", reponse: "Un architecte partenaire intervient lorsque le dossier l'exige : modification de structure, extension, surélévation ou obligation réglementaire liée à la surface du projet." },
      accueil("Qui garantit les travaux"),
    ],
  },
  {
    titre: "Prix et budget",
    accroche: "Ce que coûte une rénovation et comment lire les écarts.",
    items: [
      accueil("Combien coûtent des travaux"),
      { question: "Le pilotage fait-il vraiment baisser le budget travaux ?", reponse: "Un chiffrage détaillé et une hiérarchisation rigoureuse des postes évitent les dépenses inutiles ou mal séquencées. L'économie dépend de chaque projet et ne peut être garantie de façon uniforme." },
      { question: "Pourquoi deux devis pour un projet similaire peuvent-ils autant varier ?", reponse: "Les écarts viennent souvent des quantités, des exclusions non précisées, de la qualité des matériaux ou de prestations regroupées en forfaits opaques. Une lecture ligne à ligne permet de comparer réellement." },
      { question: "Comment est financée l'étude de projet sans engagement ?", reponse: "L'étude initiale est offerte pour qualifier la faisabilité du projet. Le pilotage devient payant une fois le projet engagé, selon des modalités présentées avant toute décision." },
      { question: "Faut-il prévoir une marge de sécurité sur le budget ?", reponse: "Oui, une marge est recommandée pour absorber les aléas révélés en cours de chantier, notamment sur les projets touchant la structure ou les réseaux anciens." },
    ],
  },
  {
    titre: "Structure et gros œuvre",
    accroche: "Murs porteurs, planchers, trémies et carottages.",
    items: [
      { question: "Comment savoir si un mur est porteur avant travaux ?", reponse: "Une lecture des plans, de l'épaisseur du mur et de la structure du bâtiment donne une première indication. Toute suppression ou modification doit être validée par un professionnel compétent avant intervention." },
      { question: "Un plancher peut-il être renforcé sans tout reprendre ?", reponse: "Selon l'état constaté, un renfort ponctuel est parfois suffisant. Un diagnostic préalable détermine si une reprise partielle ou complète est nécessaire." },
      { question: "Que vérifier avant de créer une trémie d'escalier ?", reponse: "La nature du plancher, la répartition des charges et la présence de réseaux traversants doivent être vérifiées avant toute ouverture, en lien avec un ingénieur structure si le dossier l'exige." },
      { question: "Le carottage d'une dalle nécessite-t-il une autorisation ?", reponse: "En copropriété, un carottage touchant une partie commune requiert généralement une information ou une autorisation du syndic, voire un passage en assemblée générale selon l'ampleur de l'intervention." },
    ],
  },
  {
    titre: "Second œuvre",
    accroche: "Réseaux, ordre des lots et finitions.",
    items: [
      { question: "Faut-il refaire l'électricité complète en rénovation ?", reponse: "Cela dépend de l'âge de l'installation et de sa conformité. Une installation ancienne ou sans mise à la terre justifie souvent une reprise complète pour des raisons de sécurité." },
      { question: "Dans quel ordre enchaîner les lots techniques ?", reponse: "Généralement : structure, réseaux (plomberie, électricité, ventilation), cloisonnement, puis finitions. Ce séquençage évite de reprendre un lot déjà terminé." },
      { question: "Une cuisine peut-elle être dessinée avant l'électricité ?", reponse: "Non, l'implantation électrique doit suivre le plan de cuisine et non l'inverse, sous peine de reprises coûteuses après pose du mobilier." },
      { question: "Comment éviter les conflits entre plomberie et électricité ?", reponse: "Un plan d'interfaces établi avant le chantier précise les emplacements et évite les croisements de réseaux dans les cloisons et les faux plafonds." },
      accueil("Pourquoi des joints époxy"),
    ],
  },
  {
    titre: "Rénovation énergétique et ventilation",
    accroche: "Isoler, ventiler, sortir d'une passoire énergétique.",
    items: [
      { question: "Qu'est-ce qu'une passoire énergétique ?", reponse: "C'est un logement dont la performance énergétique est très dégradée, généralement lié à une isolation insuffisante et des équipements anciens. Un diagnostic de performance énergétique précise le classement du bien." },
      accueil("Pilotez-vous la rénovation de maisons classées DPE"),
      { question: "Pourquoi vérifier la ventilation avant d'isoler ?", reponse: "Isoler sans ventilation adaptée augmente le risque d'humidité et de condensation. La ventilation doit être vérifiée ou mise à niveau en parallèle des travaux d'isolation." },
      { question: "Que faire si l'immeuble n'a pas de VMC ou une VMC défaillante ?", reponse: "Un dossier technique peut être constitué et transmis au syndic pour évaluer une intervention sur les parties communes, notamment si la ventilation est collective." },
      { question: "L'isolation par l'extérieur est-elle toujours possible ?", reponse: "Elle dépend de la façade, du règlement de copropriété et d'une éventuelle autorisation d'urbanisme, notamment en secteur protégé." },
    ],
  },
  {
    titre: "Copropriété et syndic",
    accroche: "Assemblée générale, règlement et voisinage.",
    items: [
      { question: "Quels travaux nécessitent l'accord de l'assemblée générale ?", reponse: "Les travaux touchant les parties communes, l'aspect extérieur de l'immeuble ou certains réseaux collectifs nécessitent généralement une autorisation votée en assemblée générale." },
      { question: "Comment monter un dossier pour le syndic ?", reponse: "Un dossier clair présente la nature des travaux, les parties communes concernées, les plans ou schémas utiles et, si nécessaire, l'avis d'un professionnel compétent." },
      { question: "Le règlement de copropriété peut-il interdire certains travaux ?", reponse: "Oui, le règlement de copropriété peut restreindre certaines modifications, notamment sur les façades, les sols ou les usages des lots. Il doit être consulté avant tout projet." },
      { question: "Que faire en cas de nuisances signalées par le voisinage ?", reponse: "Un cadrage des horaires de chantier, une information préalable du voisinage et le respect du règlement de copropriété limitent les tensions liées au bruit ou à l'accès aux communs." },
    ],
  },
  {
    titre: "Déroulement du chantier",
    accroche: "Étapes, durée, suivi et fin de chantier.",
    items: [
      accueil("Comment se déroule un projet"),
      accueil("Combien de temps dure une rénovation complète"),
      { question: "Comment le suivi de chantier est-il assuré ?", reponse: "Un compte rendu régulier, des photos datées et un journal des décisions permettent de suivre l'avancement et l'impact budgétaire des éventuelles modifications." },
      { question: "Que se passe-t-il en cas d'imprévu pendant les travaux ?", reponse: "Un imprévu (réseau caché, désordre structurel) est documenté, chiffré et validé avant reprise du chantier, pour éviter toute dérive non maîtrisée." },
      { question: "Quels documents sont remis à la fin du chantier ?", reponse: "Un dossier de fin de chantier regroupe généralement plans mis à jour, notices techniques, photos et éventuelles attestations remises par les entreprises partenaires." },
    ],
  },
];

const TOUTES = THEMES.flatMap((t) => t.items);

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={TOUTES} />

      <PageHero
        fil={FIL}
        titre="Questions fréquentes sur la rénovation"
        chapo="Rôle du pilote, prix, structure, second œuvre, énergie, copropriété et déroulement du chantier : les réponses, classées par thème. Les points réglementaires se vérifient toujours sur votre dossier."
      />

      {THEMES.map((t) => (
        <PageSection key={t.titre} titre={t.titre} accroche={t.accroche}>
          <PageFaq items={t.items} />
        </PageSection>
      ))}

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/notre-methode", titre: "Notre méthode", texte: "Les étapes du pilotage, de la visite à la réception." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Syndic, assemblée générale, mairie et ABF." },
            { href: "/glossaire-renovation", titre: "Glossaire de la rénovation", texte: "Le vocabulaire des devis, expliqué simplement." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
