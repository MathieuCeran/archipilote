import type { Metadata } from "next";
import { MqHero, MqSection, MqFaq, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Questions fréquentes sur la rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Réponses classées par thème : rôle et responsabilités, prix, gros œuvre, second œuvre, rénovation énergétique, copropriété et déroulement du chantier.",
  alternates: { canonical: "/faq" },
};

const THEMES = [
  {
    kicker: "Rôle et responsabilités",
    faqs: [
      { q: "ARCHI PILOTE RÉNOVATION est-il un architecte ou une entreprise générale ?", a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote le projet de A à Z. Les entreprises partenaires contractantes exécutent et facturent les travaux. Pour les dossiers lourds, des architectes DPLG et ingénieurs structure partenaires indépendants interviennent sur leur périmètre." },
      { q: "Qui signe les devis et facture les travaux ?", a: "Les entreprises partenaires contractantes établissent les devis, signent les marchés et facturent directement le client pour les travaux qu'elles réalisent." },
      { q: "Que signifie « pilotage » dans ce contexte ?", a: "Le pilotage désigne l'accompagnement de A à Z du projet : cadrage, chiffrage, sélection des compétences nécessaires, suivi des décisions et vérification des interfaces entre lots, sans se substituer aux entreprises exécutantes." },
      { q: "Dans quels cas un architecte DPLG intervient-il ?", a: "Un architecte DPLG partenaire intervient lorsque le dossier l'exige : modification de structure, extension, surélévation ou obligation réglementaire liée à la surface du projet." },
    ],
  },
  {
    kicker: "Prix et économies",
    faqs: [
      { q: "Le pilotage fait-il vraiment baisser le budget travaux ?", a: "Un chiffrage détaillé et une hiérarchisation rigoureuse des postes évitent les dépenses inutiles ou mal séquencées. L'économie dépend de chaque projet et ne peut être garantie de façon uniforme." },
      { q: "Pourquoi deux devis pour un projet similaire peuvent-ils autant varier ?", a: "Les écarts viennent souvent des quantités, des exclusions non précisées, de la qualité des matériaux ou de prestations regroupées en forfaits opaques. Une lecture ligne à ligne permet de comparer réellement." },
      { q: "Comment est financée l'étude de projet sans engagement ?", a: "L'étude initiale est offerte pour qualifier la faisabilité du projet. Le pilotage devient payant une fois le projet engagé, selon des modalités présentées avant toute décision." },
      { q: "Faut-il prévoir une marge de sécurité sur le budget ?", a: "Oui, une marge est recommandée pour absorber les aléas révélés en cours de chantier, notamment sur les projets touchant la structure ou les réseaux anciens." },
    ],
  },
  {
    kicker: "Gros œuvre",
    faqs: [
      { q: "Comment savoir si un mur est porteur avant travaux ?", a: "Une lecture des plans, de l'épaisseur du mur et de la structure du bâtiment donne une première indication. Toute suppression ou modification doit être validée par un professionnel compétent avant intervention." },
      { q: "Un plancher peut-il être renforcé sans tout reprendre ?", a: "Selon l'état constaté, un renfort ponctuel est parfois suffisant. Un diagnostic préalable détermine si une reprise partielle ou complète est nécessaire." },
      { q: "Que vérifier avant de créer une trémie d'escalier ?", a: "La nature du plancher, la répartition des charges et la présence de réseaux traversants doivent être vérifiées avant toute ouverture, en lien avec un ingénieur structure si le dossier l'exige." },
      { q: "Le carottage d'une dalle nécessite-t-il une autorisation ?", a: "En copropriété, un carottage touchant une partie commune requiert généralement une information ou une autorisation du syndic, voire un passage en assemblée générale selon l'ampleur de l'intervention." },
    ],
  },
  {
    kicker: "Second œuvre",
    faqs: [
      { q: "Faut-il refaire l'électricité complète en rénovation ?", a: "Cela dépend de l'âge de l'installation et de sa conformité. Une installation ancienne ou sans mise à la terre justifie souvent une reprise complète pour des raisons de sécurité." },
      { q: "Dans quel ordre enchaîner les lots techniques ?", a: "Généralement : structure, réseaux (plomberie, électricité, ventilation), cloisonnement, puis finitions. Ce séquençage évite de reprendre un lot déjà terminé." },
      { q: "Une cuisine peut-elle être dessinée avant l'électricité ?", a: "Non, l'implantation électrique doit suivre le plan de cuisine et non l'inverse, sous peine de reprises coûteuses après pose du mobilier." },
      { q: "Comment éviter les conflits entre plomberie et électricité ?", a: "Un plan d'interfaces établi avant le chantier précise les emplacements et évite les croisements de réseaux dans les cloisons et les faux plafonds." },
    ],
  },
  {
    kicker: "Rénovation énergétique et ventilation",
    faqs: [
      { q: "Qu'est-ce qu'une passoire énergétique ?", a: "C'est un logement dont la performance énergétique est très dégradée, généralement lié à une isolation insuffisante et des équipements anciens. Un diagnostic de performance énergétique précise le classement du bien." },
      { q: "Pourquoi vérifier la ventilation avant d'isoler ?", a: "Isoler sans ventilation adaptée augmente le risque d'humidité et de condensation. La ventilation doit être vérifiée ou mise à niveau en parallèle des travaux d'isolation." },
      { q: "Que faire si l'immeuble n'a pas de VMC ou une VMC défaillante ?", a: "Un dossier technique peut être constitué et transmis au syndic pour évaluer une intervention sur les parties communes, notamment si la ventilation est collective." },
      { q: "L'isolation par l'extérieur est-elle toujours possible ?", a: "Elle dépend de la façade, du règlement de copropriété et d'une éventuelle autorisation d'urbanisme, notamment en secteur protégé." },
    ],
  },
  {
    kicker: "Copropriété et syndic",
    faqs: [
      { q: "Quels travaux nécessitent l'accord de l'assemblée générale ?", a: "Les travaux touchant les parties communes, l'aspect extérieur de l'immeuble ou certains réseaux collectifs nécessitent généralement une autorisation votée en assemblée générale." },
      { q: "Comment monter un dossier pour le syndic ?", a: "Un dossier clair présente la nature des travaux, les parties communes concernées, les plans ou schémas utiles et, si nécessaire, l'avis d'un professionnel compétent." },
      { q: "Le règlement de copropriété peut-il interdire certains travaux ?", a: "Oui, le règlement de copropriété peut restreindre certaines modifications, notamment sur les façades, les sols ou les usages des lots. Il doit être consulté avant tout projet." },
      { q: "Que faire en cas de nuisances signalées par le voisinage ?", a: "Un cadrage des horaires de chantier, une information préalable du voisinage et le respect du règlement de copropriété limitent les tensions liées au bruit ou à l'accès aux communs." },
    ],
  },
  {
    kicker: "Déroulement du chantier",
    faqs: [
      { q: "Combien de temps dure une rénovation complète ?", a: "La durée dépend de la surface, de l'ampleur des travaux de structure et du nombre de lots. Un planning réaliste est établi après le diagnostic du bien." },
      { q: "Comment le suivi de chantier est-il assuré ?", a: "Un compte rendu régulier, des photos datées et un journal des décisions permettent de suivre l'avancement et l'impact budgétaire des éventuelles modifications." },
      { q: "Que se passe-t-il en cas d'imprévu pendant les travaux ?", a: "Un imprévu (réseau caché, désordre structurel) est documenté, chiffré et validé avant reprise du chantier, pour éviter toute dérive non maîtrisée." },
      { q: "Quels documents sont remis à la fin du chantier ?", a: "Un dossier de fin de chantier regroupe généralement plans mis à jour, notices techniques, photos et éventuelles attestations remises par les entreprises partenaires." },
    ],
  },
];

/* Visuel 1 — icônes SVG inline, PAS IA, traits fins cohérents (même stroke que le
   reste du site : currentColor, strokeWidth 1.6, viewBox 24x24, cf. app/components/
   services-list.tsx). Une icône par catégorie de la FAQ : structure, budget, énergie,
   matériaux, copropriété, rôles, et une 7e pour le déroulement du chantier (thème
   supplémentaire présent sur cette page, non listé dans le brief mais traité à
   l'identique pour rester cohérent). Avant cette passe, la page n'avait ni photo ni
   icône : juste un libellé texte (eyebrow) par catégorie — donc pas de correction d'un
   mauvais existant, plutôt un ajout du visuel demandé. */
function CategoryIcon({ id }: { id: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons: Record<string, React.ReactNode> = {
    "Rôle et responsabilités": (
      <svg {...common}><circle cx="12" cy="6.2" r="2.4" /><circle cx="5.8" cy="17.4" r="2.1" /><circle cx="18.2" cy="17.4" r="2.1" /><path d="M12 8.6v3M12 11.6 6.6 15.4M12 11.6l5.4 3.8" /></svg>
    ),
    "Prix et économies": (
      <svg {...common}><path d="M3 11.5 11.5 3H19a2 2 0 0 1 2 2v7.5L12.5 21 3 11.5Z" /><circle cx="15.4" cy="8.6" r="1.15" /></svg>
    ),
    "Gros œuvre": (
      <svg {...common}><path d="M5 4.5h14M5 19.5h14M9 4.5v15M15 4.5v15" /></svg>
    ),
    "Second œuvre": (
      <svg {...common}><path d="m12 4 8 4.2-8 4.2-8-4.2L12 4Z" /><path d="m4 12.3 8 4.2 8-4.2" /><path d="m4 16.3 8 4.2 8-4.2" /></svg>
    ),
    "Rénovation énergétique et ventilation": (
      <svg {...common}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
    ),
    "Copropriété et syndic": (
      <svg {...common}><path d="M5 21V6.5L12 3l7 3.5V21" /><path d="M9 21v-5h6v5" /><path d="M9 9h1.2M13.8 9H15M9 13h1.2M13.8 13H15" /></svg>
    ),
    "Déroulement du chantier": (
      <svg {...common}><rect x="5" y="4" width="14" height="17" rx="1.5" /><path d="M9 4V3h6v1" /><path d="m8.5 10.7 2 2 4-4M8.5 16.5h7" /></svg>
    ),
  };
  return icons[id] ?? null;
}

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Questions fréquentes"
        title="Les réponses classées par décision"
        lead="Cette page regroupe les questions les plus fréquentes sur le rôle d'ARCHI PILOTE RÉNOVATION, les prix, le gros œuvre, le second œuvre, la rénovation énergétique, la copropriété et le déroulement du chantier. Chaque réponse reste prudente et générique sur les points réglementaires, qui dépendent toujours du dossier précis."
      />

      {THEMES.map((t) => (
        <MqSection key={t.kicker}>
          <div className="flex items-center gap-2.5 mb-5">
            <span aria-hidden className="inline-flex items-center justify-center size-8 shrink-0 border border-line rounded-none text-orange-deep">
              <CategoryIcon id={t.kicker} />
            </span>
            <p className="eyebrow">{t.kicker}</p>
          </div>
          <MqFaq items={t.faqs} />
        </MqSection>
      ))}

      <MqSection>
        <p className="t-mini text-muted max-w-3xl">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqReadNext items={[
        { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Syndic, urbanisme, copropriété" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/contact", label: "Contact", sub: "Étude de projet sans engagement" },
      ]} />
    </main>
  );
}
