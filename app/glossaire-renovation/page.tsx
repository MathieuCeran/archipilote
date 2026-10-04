import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { PageHero, PageSection, PageCartes, PageLiens, JsonLdPage } from "../components/page-kit";

/* Glossaire : définitions historiques conservées mot pour mot, regroupées par thème.
   Retirés : « Autorisation d'urbanisme » (doublon de déclaration préalable + permis) et
   « Code de la construction » (définition vague, liée à une page redirigée).
   Liens : uniquement vers les URL finales ; un terme sans page réellement dédiée n'a pas de
   lien (évite des dizaines de « En savoir plus » vers la même page). */

const CHEMIN = "/glossaire-renovation";
const TITRE = "Glossaire de la rénovation";
const DESCRIPTION =
  "Glossaire de la rénovation : une cinquantaine de termes du bâtiment expliqués simplement, par thème : structure, second œuvre, énergie, démarches, devis.";
const FIL = [{ nom: "Glossaire de la rénovation", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Glossaire de la rénovation : le vocabulaire du bâtiment | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Glossaire de la rénovation : le vocabulaire du bâtiment | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/og.jpg" }],
  },
};

type Terme = { titre: string; texte: string; href?: string };

const FAMILLES: { titre: string; accroche: string; termes: Terme[] }[] = [
  {
    titre: "Structure",
    accroche: "Les éléments qui portent le bâtiment, et ce qu'il faut vérifier avant d'y toucher.",
    termes: [
      { titre: "Mur porteur", texte: "Mur qui supporte une partie du poids du bâtiment, en plus de son propre poids. Sa modification nécessite un renfort adapté et, souvent, l'avis d'un professionnel compétent.", href: "/ouverture-mur-porteur" },
      { titre: "Refend", texte: "Mur porteur intérieur qui divise un bâtiment en participant à la stabilité de la structure, distinct des murs de façade." },
      { titre: "Trémie", texte: "Ouverture pratiquée dans un plancher, par exemple pour un escalier ou un conduit. Sa création modifie la répartition des charges autour de l'ouverture." },
      { titre: "Chaînage", texte: "Élément en béton armé, horizontal ou vertical, qui renforce la structure et répartit les efforts entre les murs et les planchers." },
      { titre: "Linteau", texte: "Élément placé au-dessus d'une ouverture (porte, fenêtre) pour reporter les charges du mur vers les points d'appui de part et d'autre." },
      { titre: "Fondation", texte: "Ouvrage enterré qui transmet les charges du bâtiment au sol. Sa nature dépend de la portance du terrain et du poids de la construction.", href: "/blog/surelevation-etude-des-fondations" },
      { titre: "Plancher collaborant", texte: "Plancher associant une dalle béton et une structure métallique ou bois travaillant ensemble pour reprendre les charges." },
      { titre: "Étai", texte: "Élément provisoire qui soutient une structure pendant les travaux, avant la mise en place ou la validation d'un renfort définitif." },
      { titre: "Sondage structurel", texte: "Ouverture ponctuelle et contrôlée réalisée pour observer la composition réelle d'un mur, d'un plancher ou d'une fondation avant travaux.", href: "/blog/signes-mur-porteur-avant-travaux" },
      { titre: "Descente de charges", texte: "Calcul qui suit le trajet des efforts depuis la toiture jusqu'aux fondations, utilisé pour valider une modification de structure." },
      { titre: "IPN", texte: "Poutrelle métallique en I utilisée pour reprendre une charge au-dessus d'une ouverture. D'autres profilés, comme le HEA ou le HEB, répondent à d'autres cas de figure.", href: "/blog/ipn-hea-heb-choix-profile" },
    ],
  },
  {
    titre: "Second œuvre",
    accroche: "Cloisons, sols, réseaux et revêtements : tout ce qui vient après la structure.",
    termes: [
      { titre: "Cloison", texte: "Paroi non porteuse qui sépare des espaces intérieurs sans participer à la stabilité du bâtiment." },
      { titre: "Doublage", texte: "Habillage intérieur d'un mur, souvent isolant, posé pour améliorer le confort thermique ou acoustique." },
      { titre: "Ragréage", texte: "Enduit appliqué sur un sol pour le rendre plan avant la pose d'un revêtement." },
      { titre: "Chape", texte: "Couche de mortier appliquée sur une dalle pour recevoir un revêtement de sol ou intégrer un réseau de chauffage." },
      { titre: "Faux plafond", texte: "Plafond suspendu qui dissimule des réseaux (électricité, ventilation) et permet d'ajuster la hauteur ou l'acoustique d'une pièce." },
      { titre: "Tableau électrique", texte: "Coffret regroupant les dispositifs de protection et de répartition du courant électrique dans un logement.", href: "/renovation-electrique" },
      { titre: "Nourrice", texte: "Répartiteur de plomberie qui alimente plusieurs points d'eau depuis une arrivée principale unique." },
      { titre: "Étanchéité à l'air", texte: "Qualité d'une paroi ou d'une menuiserie à limiter les entrées d'air non maîtrisées, essentielle à la performance énergétique." },
      { titre: "Menuiserie extérieure", texte: "Fenêtre, porte-fenêtre ou porte donnant sur l'extérieur, dont la pose influence l'isolation thermique et acoustique.", href: "/menuiserie-agencement-sur-mesure" },
      { titre: "Revêtement de sol", texte: "Matériau final posé sur la chape ou le ragréage : carrelage, parquet, sol souple, selon l'usage de la pièce.", href: "/blog/parquet-massif-contrecolle-stratifie" },
      { titre: "Étanchéité sous carrelage", texte: "Système appliqué sous le carrelage d'une pièce humide pour empêcher l'eau d'atteindre le support, avec un traitement particulier des angles, seuils et traversées.", href: "/blog/etancheite-sous-carrelage-points-singuliers" },
      { titre: "Joint époxy", texte: "Joint de carrelage à base de résine, plus résistant aux taches et à l'eau qu'un joint au ciment, mais dont la pose demande davantage de soin.", href: "/blog/joints-epoxy-vs-ciment" },
    ],
  },
  {
    titre: "Énergie et ventilation",
    accroche: "Isolation, ventilation et chauffage : le vocabulaire de la rénovation énergétique.",
    termes: [
      { titre: "VMC", texte: "Ventilation mécanique contrôlée : système qui renouvelle l'air d'un logement en évacuant l'air vicié et en apportant de l'air neuf.", href: "/blog/vmc-renovation-verifier-au-dela-du-debit" },
      { titre: "VMC simple flux", texte: "Système de ventilation qui extrait l'air vicié des pièces humides, l'air neuf entrant par des entrées d'air dans les pièces sèches." },
      { titre: "VMC double flux", texte: "Système de ventilation qui extrait l'air vicié et insuffle de l'air neuf préchauffé, en récupérant une partie des calories de l'air extrait." },
      { titre: "Passoire énergétique", texte: "Terme courant désignant un logement dont la performance énergétique est très dégradée, généralement lié à une isolation insuffisante.", href: "/blog/sortir-passoire-energetique" },
      { titre: "Diagnostic de performance énergétique", texte: "Document qui évalue la consommation d'énergie et l'impact carbone d'un logement, utilisé notamment lors d'une vente ou d'une location.", href: "/renovation-energetique" },
      { titre: "Pont thermique", texte: "Point de la construction où l'isolation est interrompue ou affaiblie, provoquant une déperdition de chaleur localisée." },
      { titre: "Isolation par l'extérieur", texte: "Technique qui place l'isolant sur la façade extérieure du bâtiment, limitant les ponts thermiques mais soumise au règlement de copropriété et à l'urbanisme." },
      { titre: "Isolation par l'intérieur", texte: "Technique qui place l'isolant côté intérieur des murs, plus simple à mettre en œuvre mais réduisant légèrement la surface habitable.", href: "/blog/isolation-interieure-erreurs-humidite" },
      { titre: "Pompe à chaleur", texte: "Équipement qui transfère la chaleur d'un milieu (air, eau, sol) vers le logement pour le chauffer, parfois de manière réversible pour le rafraîchir." },
      { titre: "Condensation", texte: "Formation d'humidité sur une paroi froide au contact d'un air chaud et humide, souvent liée à une ventilation insuffisante." },
    ],
  },
  {
    titre: "Démarches et copropriété",
    accroche: "Les autorisations et les acteurs à connaître avant de lancer un chantier.",
    termes: [
      { titre: "Déclaration préalable de travaux", texte: "Autorisation d'urbanisme simplifiée requise pour certains travaux modifiant l'aspect extérieur ou créant une surface limitée.", href: "/demarches-administratives-renovation" },
      { titre: "Permis de construire", texte: "Autorisation d'urbanisme requise pour les travaux d'ampleur, notamment les extensions ou surélévations dépassant certains seuils de surface.", href: "/extension-maison" },
      { titre: "Secteur protégé", texte: "Zone soumise à des règles d'urbanisme renforcées (abords de monument historique, site patrimonial) pouvant conditionner certains travaux." },
      { titre: "Servitude", texte: "Charge grevant un bien au profit d'un autre bien ou d'un tiers, pouvant limiter certains travaux (passage, vue, réseaux)." },
      { titre: "Règlement de copropriété", texte: "Document qui fixe les règles d'usage des parties privatives et communes d'un immeuble en copropriété, à consulter avant tout projet touchant les communs." },
      { titre: "Assemblée générale de copropriété", texte: "Réunion annuelle ou exceptionnelle des copropriétaires au cours de laquelle sont votées les autorisations touchant les parties communes.", href: "/blog/ouvrir-mur-porteur-copropriete-assemblee" },
      { titre: "Syndic de copropriété", texte: "Professionnel ou structure chargée de la gestion administrative de l'immeuble et de l'exécution des décisions votées en assemblée générale.", href: "/blog/coproprietaire-autorisations-avant-travaux" },
      { titre: "Parties communes", texte: "Éléments de l'immeuble utilisés ou profitant à l'ensemble des copropriétaires : façades, toiture, gaines techniques, halls.", href: "/blog/vivre-dans-l-immeuble-pendant-les-travaux" },
    ],
  },
  {
    titre: "Devis et chantier",
    accroche: "Les mots du chiffrage, du suivi et de la réception.",
    termes: [
      { titre: "Devis descriptif", texte: "Devis détaillant les prestations poste par poste, avec quantités et prix unitaires, permettant une comparaison précise entre entreprises.", href: "/blog/devis-travaux-lignes-a-verifier" },
      { titre: "Devis forfaitaire", texte: "Devis présentant un prix global sans détail des quantités, rendant la comparaison entre entreprises plus difficile." },
      { titre: "Métré", texte: "Mesure précise des quantités de matériaux et de surfaces nécessaires à un chantier, base du chiffrage détaillé." },
      { titre: "Poste de travaux", texte: "Ligne d'un devis correspondant à une prestation ou un lot déterminé, par exemple l'électricité ou la peinture.", href: "/observatoire-prix-renovation" },
      { titre: "Exclusion de devis", texte: "Prestation explicitement non comprise dans un devis, à vérifier systématiquement pour éviter les mauvaises surprises." },
      { titre: "Aléa de chantier", texte: "Imprévu découvert en cours de travaux, par exemple un réseau caché ou un désordre structurel, nécessitant un chiffrage complémentaire." },
      { titre: "Provision pour imprévus", texte: "Marge budgétaire réservée avant travaux pour absorber les aléas révélés en cours de chantier.", href: "/estimateur-travaux" },
      { titre: "Attestation d'assurance décennale", texte: "Document justifiant qu'une entreprise est couverte pour les désordres pouvant affecter la solidité de l'ouvrage pendant dix ans." },
      { titre: "Situation de travaux", texte: "Décompte intermédiaire de l'avancement du chantier, utilisé pour établir les paiements échelonnés aux entreprises." },
      { titre: "Réception de travaux", texte: "Acte par lequel le client accepte les travaux réalisés, avec ou sans réserves, marquant le point de départ de certaines garanties.", href: "/blog/reception-chantier-preparer-les-reserves" },
    ],
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} />

      <PageHero
        fil={FIL}
        titre="Glossaire de la rénovation : le vocabulaire du bâtiment"
        chapo="Une cinquantaine de termes rencontrés dans les devis, les diagnostics et les échanges avec les entreprises, expliqués en une à trois phrases et classés par thème."
      />

      {FAMILLES.map((f) => (
        <PageSection key={f.titre} titre={f.titre} accroche={f.accroche}>
          <PageCartes colonnes={3} items={f.termes} />
        </PageSection>
      ))}

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/faq", titre: "Questions fréquentes", texte: "Les réponses classées par thème." },
            { href: "/observatoire-prix-renovation", titre: "Prix de la rénovation au m²", texte: "Fourchettes par niveau et par poste." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Syndic, assemblée générale, mairie et ABF." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
