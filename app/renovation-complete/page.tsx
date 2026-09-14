import type { Metadata } from "next";
import Link from "next/link";
import { Postes, type Poste } from "../components/postes";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

/* 05/09/2026 — RÉÉCRITURE COMPLÈTE, sur directives du client (dossier transmis le 04/09).
   Le reproche de fond : la page était un long article généraliste sur les travaux, pas une
   page de service consacrée au pilotage. Elle devait répondre vite à six questions —
   qu'est-ce qu'une rénovation complète, quel est notre rôle, dans quel ordre se prennent
   les décisions, qui exécute et facture, comment le budget est structuré, comment demander
   une première étude.

   TROIS FORMULATIONS ONT ÉTÉ SUPPRIMÉES, sur demande explicite et pour de bonnes raisons :
   — « La difficulté n'est pas de trouver des entreprises » : c'est faux, et cela minimise
     une difficulté réelle du marché.
   — « Une rénovation complète échoue rarement par manque de compétence technique » :
     affirmation trop absolue, indémontrable.
   — « Pilote le budget de A à Z » : promesse trop large. On parle désormais de
     structuration, d'analyse et de suivi budgétaire, ce qui est ce que l'on fait vraiment.

   Deux points de méthode conservés du dossier :
   — la méthode en six étapes est rendue en HTML et non dans une image contenant du texte
     (lisible à l'agrandissement, sélectionnable, indexable, accessible aux lecteurs
     d'écran) ;
   — aucun pourcentage d'économie garanti n'apparaît. Une économie éventuelle s'évalue
     projet par projet et se démontre par les devis. */

const FAQ = [
  {
    q: "Quel budget prévoir pour une rénovation complète ?",
    a: "Il n'existe pas de prix au mètre carré fiable pour une rénovation complète : le budget dépend de l'état réel du bien, de la surface, des modifications de structure, des démarches administratives, des produits choisis et du niveau de finition. La méthode consiste à décomposer le budget par familles de postes, à prévoir une réserve pour aléas, puis à confronter cette décomposition aux devis reçus. Les fourchettes indicatives et datées que nous publions poste par poste sont réunies dans l'observatoire des prix.",
  },
  {
    q: "Combien de temps dure une rénovation complète ?",
    a: "La durée se compte en deux temps qu'il ne faut pas confondre. Le temps de préparation — diagnostics, études, autorisations, consultation et comparaison des entreprises — précède le chantier et dépend surtout des délais administratifs. Le temps de travaux, lui, commence une fois le chantier lancé. Un appartement sans reprise de structure se situe le plus souvent entre huit et seize semaines de travaux ; une maison avec reprises structurelles entre quatre et sept mois. Ces ordres de grandeur supposent les autorisations obtenues, les entreprises disponibles et aucune découverte majeure derrière les murs : ce ne sont pas des délais garantis.",
  },
  {
    q: "Peut-on habiter le logement pendant les travaux ?",
    a: "Cela dépend de l'ampleur du chantier. Une rénovation qui touche en même temps l'électricité, la plomberie et la structure rend le logement difficilement habitable pendant plusieurs semaines, faute d'eau et d'électricité stabilisées. Sur une maison, un phasage par zones permet parfois de rester sur place, au prix d'une organisation plus lourde et souvent d'un chantier plus long.",
  },
  {
    q: "Quand faut-il faire intervenir un architecte ou un ingénieur structure ?",
    a: "Ce n'est pas systématique. Le recours à un architecte DPLG ou à un ingénieur structure partenaire indépendant devient nécessaire dès qu'un ouvrage engage la stabilité du bâtiment — ouverture de mur porteur, création de trémie, surélévation, extension — ainsi que dans les cas où la réglementation impose le recours à un architecte pour le dépôt du dossier. Ce besoin est identifié pendant l'étude de faisabilité, avant tout engagement financier. Chacun de ces professionnels intervient dans son propre domaine de compétence, sous ses propres responsabilité et assurance.",
  },
  {
    q: "Qui établit les devis et facture les travaux ?",
    a: "Chaque entreprise partenaire contractante établit son propre devis, exécute son lot et facture directement le client. Elle reste responsable de ses travaux, de ses obligations et de ses assurances. ARCHI PILOTE RÉNOVATION n'exécute pas les travaux et ne les facture pas : ses honoraires d'accompagnement sont identifiés séparément des montants facturés par les entreprises.",
  },
  {
    q: "Peut-on acheter directement les matériaux ?",
    a: "Sur certains postes, oui. Le client règle alors le fournisseur sans passer par l'entreprise, ce qui supprime la marge d'intermédiation sur ces lignes. Ce n'est pertinent que si les références, les quantités, les délais de livraison, le lieu de stockage et la répartition des responsabilités sont définis à l'avance : un matériau fourni par le client engage sa propre responsabilité en cas d'erreur de référence, de quantité insuffisante ou de retard de livraison. L'économie éventuelle s'évalue projet par projet et se vérifie sur les devis, elle ne se promet pas à l'avance.",
  },
  {
    q: "Quelles démarches prévoir en copropriété ?",
    a: "Des travaux réalisés à l'intérieur d'un lot privatif peuvent nécessiter une information ou une autorisation du syndic dès qu'ils touchent aux parties communes, aux réseaux communs ou à l'aspect extérieur de l'immeuble. La majorité applicable en assemblée générale dépend de la nature exacte des travaux et se vérifie avec le syndic. Le calendrier des assemblées générales conditionne le démarrage : c'est l'une des premières choses à caler, bien avant les devis.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Paris, les Hauts-de-Seine et l'Île-de-France. D'autres secteurs peuvent être envisagés après étude du projet.",
  },
];

/* Données structurées. Service et FAQPage décrivent la page ; BreadcrumbList situe la page
   dans l'arborescence. Les réponses de la FAQ sont celles RÉELLEMENT affichées en HTML
   ci-dessous : un balisage qui annoncerait des réponses absentes de la page serait une
   non-conformité aux consignes de Google, en plus d'être trompeur. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Pilotage de rénovation complète",
      serviceType: "Pilotage et accompagnement de rénovation complète",
      provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION", url: "https://www.archipiloterenovation.com" },
      areaServed: [
        { "@type": "City", name: "Paris" },
        { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      url: "https://www.archipiloterenovation.com/renovation-complete",
      description:
        "Cadrage du projet, hiérarchisation des décisions, analyse des chiffrages et suivi des étapes d'une rénovation complète. Les entreprises partenaires contractantes exécutent et facturent leurs prestations.",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com" },
        { "@type": "ListItem", position: 2, name: "Rénovation complète", item: "https://www.archipiloterenovation.com/renovation-complete" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Rénovation complète à Paris et en Île-de-France | ARCHI PILOTE",
  description:
    "Pilotage et accompagnement de rénovations complètes : budget, devis, structure, réseaux, démarches et entreprises partenaires à Paris et en Île-de-France.",
  alternates: { canonical: "/renovation-complete" },
};

/* Relevés mot pour mot sur l'infographie de marque fournie par le client
   (public/photos/pedagogie/infographie-renovation-complete.jpg), dans l'ordre
   de lecture de la planche : colonne de gauche, puis colonne de droite. */
const POSTES: Poste[] = [
  { cle: "agencement", titre: "Agencement & distribution", texte: "Optimisation des espaces et nouveaux usages." },
  { cle: "menuiseries", titre: "Menuiseries sur-mesure", texte: "Fenêtres, portes, dressings, cuisines, rangements." },
  { cle: "enveloppe", titre: "Isolation & confort énergétique", texte: "Isolation intérieure, combles, remplacement des menuiseries, VMC, climatisation." },
  { cle: "finitions", titre: "Finitions haut de gamme", texte: "Peinture, revêtements, parquet, béton ciré, carrelage, moulures." },
  { cle: "structure", titre: "Structure & gros œuvre", texte: "Ouvertures, IPN, maçonnerie, renforcement, surélévation." },
  { cle: "reseaux", titre: "Réseaux techniques", texte: "Électricité, plomberie, chauffage, VMC, domotique." },
  { cle: "bain", titre: "Salle de bains & cuisine", texte: "Conception, étanchéité, joints époxy, équipements haut de gamme." },
  { cle: "suivi", titre: "Suivi & coordination", texte: "Planning, qualité, respect du budget, réception du chantier." },
];

const REPERES = [
  "Contraintes techniques identifiées",
  "Budget structuré par familles de postes",
  "Devis comparés sur un périmètre commun",
  "Interlocuteurs spécialisés selon le projet",
];

const METHODE = [
  { title: "Comprendre les usages et les priorités", text: "Le nombre de pièces, la circulation, la lumière, les rangements et les équipements envisagés déterminent l'emplacement des cloisons, des prises et des points d'eau — donc les chiffrages. Ce cadrage précède toute consultation d'entreprise." },
  { title: "Observer le bien et identifier les contraintes", text: "Lecture du bien existant : état des supports, humidité, réseaux en place, ancienneté de l'installation électrique, accès au chantier, contraintes de copropriété." },
  { title: "Examiner la structure, les réseaux et les démarches", text: "Nature réelle des murs, sens de portée des planchers, capacité des réseaux communs, autorisations à obtenir. Un architecte ou un ingénieur structure partenaire indépendant est sollicité lorsque le dossier l'exige." },
  { title: "Décomposer le budget et rendre les devis comparables", text: "Le budget est découpé par familles de postes, avec une réserve pour aléas. Les chiffrages reçus sont rapprochés ligne par ligne sur un périmètre commun, sans quoi deux totaux identiques peuvent recouvrir des prestations très différentes." },
  { title: "Aider au choix des entreprises et des partenaires spécialisés", text: "Vérification des assurances et des références, comparaison des périmètres, mise en relation. Le client contracte directement avec chaque entreprise." },
  { title: "Piloter les décisions, documenter les étapes et préparer la réception", text: "Suivi du phasage et des interfaces entre lots, photographies datées des ouvrages avant qu'ils ne soient recouverts, liste de réserves à la réception et suivi jusqu'à leur levée." },
];

const MODELE = [
  { title: "Honoraires identifiables", text: "Les honoraires d'accompagnement sont distingués des montants facturés par les entreprises. Ils apparaissent sur une ligne distincte, jamais fondus dans le prix des travaux." },
  { title: "Entreprises contractantes", text: "Chaque entreprise établit son devis, exécute son lot et facture directement le client. Elle demeure responsable de ses travaux, de ses obligations et de ses assurances." },
  { title: "Achats directs possibles", text: "Selon le projet, certains matériaux peuvent être achetés directement par le client auprès du fournisseur. Les références, quantités, délais et responsabilités sont définis à l'avance." },
  { title: "Devis réellement comparables", text: "Les chiffrages sont rapprochés ligne par ligne sur un périmètre commun : préparations, fournitures, finitions, protections, évacuations, délais et exclusions." },
];

/* Les quatre décisions renvoient chacune vers la ressource qui la traite en détail :
   sans ce renvoi, la rubrique énonce un conseil sans donner les moyens de l'appliquer. */
const DECISIONS = [
  { title: "Vérifier la nature des murs", text: "Un mur épais n'est pas automatiquement porteur, et un mur fin n'est pas automatiquement sans rôle structurel. Quatre indices se recoupent — épaisseur, alignement vertical, sens de portée des planchers, position dans le bâtiment — et le doute se lève par un sondage, pas à l'œil.", href: "/ouverture-mur-porteur", lien: "Ouverture de mur porteur" },
  { title: "Anticiper les démarches auprès du syndic", text: "En copropriété, le calendrier des assemblées générales conditionne le démarrage. Certains travaux réalisés à l'intérieur du lot nécessitent malgré tout une autorisation dès qu'ils touchent aux parties communes ou aux réseaux communs.", href: "/demarches-administratives-renovation", lien: "Démarches administratives" },
  { title: "Séparer le socle indispensable des options", text: "Un budget lisible distingue ce qui conditionne l'habitabilité — structure, réseaux, étanchéité, ventilation — de ce qui relève de l'amélioration. C'est cette séparation qui permet d'arbitrer sans casser le projet quand une découverte de chantier pèse sur l'enveloppe.", href: "/observatoire-prix-renovation", lien: "Observatoire des prix" },
  { title: "Prévoir la documentation du chantier", text: "Les réseaux, l'étanchéité et les supports disparaissent derrière les finitions. Ce qui n'a pas été photographié avant fermeture ne sera plus vérifiable ensuite, sauf à rouvrir l'ouvrage.", href: "/charte-qualite", lien: "Charte qualité" },
];

/* Les quatre schémas fournis par le client le 04/09. Affichés ENTIERS : ils portent leur
   titre en haut et leur signature en bas, un recadrage au format du cadre les décapiterait.
   Ce sont des dessins, pas des preuves de chantier — la note sous la grille le dit. */
const CONTROLES = [
  { src: "/photos/pedagogie/schema-detail-1-etancheite-avant-carrelage.jpg", alt: "Schéma d'une douche en coupe avant carrelage : continuité de l'étanchéité entre murs et sol, bandes de renfort dans les angles, manchettes aux traversées et liaison étanche avec le siphon", cap: "Étanchéité avant carrelage : continuité entre murs et sol, angles et raccords renforcés, traversées traitées, siphon intégré au système." },
  { src: "/photos/pedagogie/schema-detail-2-tableau-electrique-accessible.jpg", alt: "Schéma d'un tableau électrique intégré dans un placard sur mesure, portes ouvertes, accès dégagé sur toute la hauteur et circuits repérés", cap: "Tableau électrique accessible : accès maintenu après finition, porte entièrement ouvrable, circuits repérés. Les vérifications électriques sont réalisées par l'entreprise qualifiée." },
  { src: "/photos/pedagogie/schema-detail-3-menuiseries-reglees.jpg", alt: "Schéma de deux portes intérieures contrôlées à la règle laser : aplomb, jeux réguliers autour de l'ouvrant, quincaillerie réglée et chants inspectés", cap: "Menuiseries réglées : aplomb et alignement, jeux réguliers, ouverture sans contrainte, chants inspectés après retrait des protections." },
  { src: "/photos/pedagogie/schema-detail-4-points-eau-testes.jpg", alt: "Schéma d'un meuble de salle de bain ouvert montrant les raccordements sous vasque : siphon, robinets d'arrêt accessibles, évacuation et joint sanitaire continu", cap: "Points d'eau testés : absence de fuite aux raccords, écoulement sans stagnation, joints continus, accès au siphon et aux robinets d'arrêt. Les essais de plomberie sont réalisés par l'entreprise qualifiée." },
];

const lien = "text-orange-deep underline underline-offset-4 hover:text-orange transition-colors";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <MqHero
        kicker="Rénovation complète"
        title="Pilotage de rénovation complète à Paris et en Île-de-France"
        lead={
          <>
            <p>
              Une rénovation complète engage simultanément la distribution des espaces, la structure, les réseaux
              techniques, l&apos;isolation, la ventilation, les menuiseries et les finitions. Chaque décision influence
              les suivantes.
            </p>
            <p className="mt-4">
              ARCHI PILOTE RÉNOVATION accompagne le cadrage du projet, hiérarchise les priorités, analyse les chiffrages
              et pilote les décisions d&apos;ensemble. Les entreprises partenaires contractantes exécutent et facturent
              directement leurs prestations, sous leurs propres responsabilités et assurances.
            </p>
          </>
        }
      >
        <Link href="/contact" className="btn btn-primary">Étudier mon projet</Link>
        <Link href="/notre-methode" className="btn btn-ghost">Découvrir notre méthode</Link>
      </MqHero>

      {/* STRUCTURE D'OUVERTURE, alignée sur celle de la page d'accueil.

          L'accueil ouvre sur son héros, puis pose immédiatement une BANDE
          SOMBRE de chiffres — le cartouche. C'est elle qui donne le premier
          contraste de la page et qui empêche l'ouverture de se diluer.

          Les pages internes n'avaient rien de tel : après le titre, on
          enchaînait sur du papier, indéfiniment. Les quatre repères de cette
          page tenaient dans une grille de cases grises, en bas d'un bloc
          bridé à 58 rem. Ils prennent la bande sombre, sur toute la planche,
          et jouent le rôle du cartouche.

          Les huit postes deviennent une section à part entière, avec son
          repère et son titre dans le rail — comme toutes les autres. */}
      <section className="rf-dossier">
        <div className="rf-wrap rf-section--serre">
          <ul className="mq-reperes">
            {REPERES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <MqSection
        kicker="Périmètre"
        title="Les huit postes d'une rénovation complète"
        lead="Ce que « complète » recouvre exactement, poste par poste. Aucun ne se traite isolément : c'est leur enchaînement qui décide du budget et du calendrier."
      >
        {/* 08/09 — L'infographie de marque « Rénovation complète » était posée
            ici, seule, en 1 222 × 1 287 px. Elle portait quatre choses : les
            huit postes, la méthode en six étapes, quatre engagements et un
            bandeau de contact. Trois sur quatre sont DÉJÀ sur cette page en
            toutes lettres — la méthode a sa section « Six décisions dans le
            bon ordre », les engagements leur bandeau, le contact sa clôture.

            Seuls les huit postes n'y figuraient nulle part. Ils sont
            transcrits mot pour mot, dans l'ordre de lecture de la planche. Le
            texte devient sélectionnable, traduisible, lisible au téléphone, et
            corrigible en une ligne le jour où un poste change — ce qu'une
            image ne permet pas. */}
        <Postes postes={POSTES} />
      </MqSection>

      <MqSection
        title="Une rénovation complète se décide avant de se chiffrer"
        lead="Les dérives de budget et de délai proviennent souvent de décisions prises trop tard, de prestations mal délimitées ou d'interfaces oubliées entre les différents lots."
      >
        <MqProse>
          <p>
            Avant de consulter les entreprises, il faut définir les usages, identifier les contraintes du bien, traiter
            les sujets structurels et administratifs, puis construire un périmètre comparable pour les chiffrages.
          </p>
          <p>
            Demander des devis avant d&apos;avoir arrêté le plan d&apos;usage revient à faire chiffrer un projet qui sera
            modifié quelques semaines plus tard. À l&apos;inverse, choisir son carrelage avant de savoir si un mur est
            porteur inverse l&apos;ordre du risque : les interventions structurelles, les réseaux principaux,
            l&apos;humidité, l&apos;isolation et la ventilation conditionnent la faisabilité même des finitions
            envisagées. Lorsqu&apos;un mur doit être modifié, la marche à suivre est détaillée sur la page consacrée à{" "}
            <Link href="/ouverture-mur-porteur" className={lien}>l&apos;ouverture de mur porteur</Link>.
          </p>
          <p>
            Une modification décidée sur plan ne coûte presque rien ; la même modification décidée après pose peut
            remettre en cause plusieurs ouvrages déjà réalisés. Une douche déplacée après étanchéité entraîne des
            reprises en cascade sur la plomberie, le carrelage et parfois le plafond du niveau inférieur. D&apos;où une
            validation formelle des plans techniques avant le démarrage de chaque lot.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Ordre logique des lots d'une rénovation complète, de la dépose à la réception"
            caption="Ordre logique des lots : dépose, gros œuvre, réseaux, cloisons, chapes, carrelage, peinture, cuisine, puis réception. Schéma pédagogique."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      {/* Méthode rendue en HTML et non dans une image contenant du texte : elle reste lisible
          à l'agrandissement, sélectionnable, indexable et accessible aux lecteurs d'écran.
          MqDarkSteps écrit en clair (var(--mq-primary-fg)) : il doit impérativement rester
          dans MqDark, qui fournit le fond sombre. Posé dans une section ordinaire, il
          s'afficherait en clair sur clair, donc invisible. */}
      <MqDark
        kicker="Notre méthode"
        title="Six décisions dans le bon ordre"
        lead="Chacune de ces étapes conditionne la suivante. C'est l'ordre, plus que la vitesse, qui protège le budget et le calendrier."
        cta={{ href: "/notre-methode", label: "Le détail de la méthode" }}
      >
        <div className="max-w-3xl">
          <MqFig
            src="/photos/pedagogie/illustration-ordre-des-lots.jpg"
            alt="Axonométrie éclatée d'une rénovation, du plus lourd au plus fin : démolition et reprises de structure, puis réseaux encastrés, puis cloisons et doublages, puis chapes et sols, puis menuiseries, puis finitions"
            caption="Illustration technique — l'ordre des lots, du plus lourd au plus fin. Chaque niveau referme le précédent : c'est ce qui rend une décision tardive coûteuse, puisqu'il faut rouvrir ce qui est déjà fermé. Dessin d'illustration, pas une photographie de chantier."
            ratio="aspect-[3/2]"
            entier
          />
        </div>

        {/* 07/09 — Illustration de la méthode. MqFig est habillé pour le fond clair
            (bg-surface, text-muted) : posé ici il ferait une carte blanche sur l'encre.
            La figure est donc composée sur place avec les tons de MqDark. Colonne étroite
            (17rem) : l'image est un portrait 1200 × 1600, en pleine largeur elle mesurerait
            plus de 1 100 px de haut.

            chDemolitionCloisonBoisPlatre.jpeg a été écartée pour cet emplacement : ses deux
            recadrages (chDemolitionGravatsChantier, chDemolitionLattisPlatreOuverture) sont
            déjà en service sur ouverture-mur-porteur — page liée depuis celle-ci — et sur un
            article du blog. La scène aurait atteint le plafond de trois pages. */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_17rem] gap-8 md:gap-10 items-start">
          <MqDarkSteps steps={METHODE} />
          <figure className="rounded-none overflow-hidden border" style={{ borderColor: "#2b3338" }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/photos/chantiers/chCouloirOssatureMetalliquePlaque.jpeg"
                alt="Couloir au stade des cloisons : montants et rails métalliques dressés, plaques déjà vissées sur une face, câble noir descendu le long d'un montant, plafond plaqué, sol encore brut"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <figcaption
              className="px-4 py-3 t-mini leading-snug border-t"
              style={{ borderColor: "#2b3338", color: "#c3c0b6" }}
            >
              Couloir au stade des cloisons : ossature métallique dressée, plaques vissées sur une face,
              câble descendu avant fermeture, plafond déjà plaqué, sol encore brut. Chaque étape referme la
              précédente. Chantier réel des équipes partenaires.
            </figcaption>
          </figure>
        </div>
      </MqDark>

      <MqSection
        title="Un budget lisible et des responsabilités séparées"
        lead="Ce qui relève de l'accompagnement et ce qui relève des travaux sont facturés séparément, par des acteurs différents."
      >
        {/* 07/09 — SCHÉMA DES QUATRE RÔLES, demandé nommément par le client : « Créer
            impérativement le schéma pédagogique à quatre blocs : CLIENT / ARCHI PILOTE
            RÉNOVATION / ENTREPRISES / FOURNISSEURS ».

            Il est construit en HTML, pas généré par une IA, et c'est délibéré : le client
            pose comme règle que « le texte ne doit jamais être généré par l'IA », qui n'en
            produit que l'environnement graphique. Un schéma dont TOUT le sens tient dans ses
            libellés doit donc être composé, pas dessiné. En HTML il est en plus net à toutes
            les définitions, lisible par un lecteur d'écran, traduisible, et corrigible en une
            ligne le jour où le modèle économique bouge — ce qu'une image ne permet pas.

            role="img" + aria-label : pour une aide technique, l'ensemble se lit comme une
            seule figure et non comme quatre listes sans lien entre elles. */}
        <div
          role="img"
          aria-label="Répartition des rôles dans un projet de rénovation piloté : le client décide et valide, ARCHI PILOTE RÉNOVATION structure et suit, les entreprises partenaires exécutent et facturent leurs travaux, les fournisseurs livrent les matériaux que le client peut acheter en direct."
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {[
            { n: "01", r: "Client", c: "décide", l: ["Arbitre le programme et le budget", "Valide chaque décision", "Peut acheter les matériaux en direct"] },
            { n: "02", r: "ARCHI PILOTE RÉNOVATION", c: "structure et suit", l: ["Lit le bien et ses contraintes", "Chiffre poste par poste", "Aide à sélectionner les entreprises", "Suit le chantier jusqu'aux réserves"] },
            { n: "03", r: "Entreprises partenaires", c: "exécutent et facturent", l: ["Établissent leurs devis", "Réalisent les travaux", "Facturent directement le client", "Portent leurs assurances"] },
            { n: "04", r: "Fournisseurs", c: "livrent", l: ["Fournissent les matériaux", "Facturent au prix fournisseur", "Achat direct possible"] },
          ].map((b) => (
            <div key={b.n} className="flex flex-col gap-3 border border-line bg-surface rounded-none p-5">
              <div className="flex items-baseline gap-2">
                <span className="font-mono t-micro tracking-[0.16em] text-orange-deep">{b.n}</span>
                <span className="mq-mention">{b.c}</span>
              </div>
              <h3 className="display t-base text-ivoire leading-tight">{b.r}</h3>
              <ul className="flex flex-col gap-1.5 mt-1">
                {b.l.map((x) => (
                  <li key={x} className="text-muted t-petit leading-snug flex gap-2">
                    <span aria-hidden className="text-orange-deep shrink-0">·</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* 08/09 — Infographie de marque fournie par le client, posée APRÈS le schéma HTML des
            quatre rôles (qu'elle complète sans le remplacer). Planche composée, affichée
            `entier` dans un cadre à son format natif (1491 × 1055). */}
        <div className="max-w-4xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-budget-lisible.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : Un budget lisible et des responsabilités séparées — honoraires identifiables, entreprises contractantes, achats directs possibles, devis réellement comparables, et lecture du budget par postes"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Un budget lisible et des responsabilités séparées."
            ratio="aspect-[1491/1055]"
            entier
          />
        </div>
        <p className="text-muted t-mini leading-relaxed max-w-3xl mb-10">
          Les travaux sont exécutés et facturés par les entreprises partenaires contractantes, qui portent leurs
          propres assurances. ARCHI PILOTE RÉNOVATION n&apos;exécute aucun lot&nbsp;: son intervention porte sur la
          structuration du projet, le chiffrage, la sélection des intervenants et le suivi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {MODELE.map((m) => (
            <div key={m.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display t-haut text-ivoire">{m.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
        <MqProse>
          <p className="mt-10">
            Le budget se construit par familles de postes plutôt qu&apos;en enveloppe globale : études et diagnostics,
            dépose et préparation, structure et maçonnerie, réseaux techniques, isolation et cloisons, menuiseries et
            équipements, finitions, et une réserve dédiée aux aléas découverts en cours de chantier. Cette décomposition
            montre immédiatement où se situent les marges de négociation et où se situent les postes incompressibles.
          </p>
          <p>
            Les fourchettes indicatives et datées que nous publions poste par poste sont réunies dans{" "}
            <Link href="/observatoire-prix-renovation" className={lien}>l&apos;observatoire des prix</Link>. Les devis
            reçus y sont confrontés ligne à ligne lors de la{" "}
            <Link href="/clinique-du-devis" className={lien}>clinique du devis</Link>. Le détail de la facturation est
            exposé sur la page{" "}
            <Link href="/modele-economique-transparence" className={lien}>modèle économique</Link>, et les conditions de
            l&apos;<Link href="/achat-direct-materiaux" className={lien}>achat direct des matériaux</Link> y sont
            précisées.
          </p>
          <p>
            <strong>Aucun pourcentage d&apos;économie n&apos;est annoncé à l&apos;avance.</strong> Une économie
            éventuelle dépend du projet, des postes concernés et des prix obtenus ; elle se démontre sur les devis, elle
            ne se promet pas.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Une solution complète, des responsabilités claires"
        lead="Un seul interlocuteur pour coordonner l'ensemble, mais des rôles et des responsabilités qui restent distincts."
      >
        {/* 08/09 — Infographie de marque fournie par le client, sous le titre de la section.
            Planche composée, affichée `entier` dans un cadre à son format natif (1491 × 1055). */}
        <div className="max-w-4xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-solution-complete.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : Une solution complète, des responsabilités claires — ce que fait ARCHI PILOTE RÉNOVATION, ce que font les entreprises partenaires contractantes, et les experts indépendants mobilisés selon les besoins du dossier"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Une solution complète, des responsabilités claires."
            ratio="aspect-[1491/1055]"
            entier
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="display t-haut text-ivoire mb-4">ARCHI PILOTE RÉNOVATION</h3>
            <MqChecklist
              cols={1}
              items={[
                "Cadre le besoin et les usages attendus",
                "Hiérarchise les décisions et leur calendrier",
                "Analyse les périmètres et les chiffrages",
                "Aide à sélectionner les interlocuteurs",
                "Suit le budget et les étapes du chantier",
                "Documente les points sensibles avant leur fermeture",
              ]}
            />
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-4">Les entreprises partenaires contractantes</h3>
            <MqChecklist
              cols={1}
              items={[
                "Établissent leurs devis",
                "Exécutent leurs prestations",
                "Facturent directement le client",
                "Restent responsables de leurs assurances, obligations et travaux",
              ]}
            />
          </div>
        </div>
        {/* 07/09 — Photo posée en colonne étroite (14rem) à côté du paragraphe : format
            natif 1200 × 1600, un cadre pleine largeur la ferait dépasser 1 100 px de haut.
            Le mt-10 est passé du paragraphe au conteneur pour que l'image et le texte
            démarrent à la même hauteur.

            chPoutreAcierPlafondMurDegarni.jpeg disait mieux le sujet — trois corps de métier
            dans le même angle — mais sa scène est déjà servie sur trois pages (un article,
            gros-oeuvre-structure, realisations) : une quatrième dépassait le plafond. */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 items-start">
          <MqProse>
            <p>
              Selon les besoins du dossier, un architecte DPLG, un architecte d&apos;intérieur, un ingénieur structure
              ou un bureau d&apos;études partenaire indépendant peut intervenir dans son propre domaine de compétence.
              La manière dont ces intervenants sont sélectionnés et vérifiés est décrite sur la page{" "}
              <Link href="/reseau-partenaires" className={lien}>réseau de partenaires</Link>. Cette organisation
              s&apos;applique sur l&apos;ensemble de notre zone d&apos;intervention, décrite sur la page{" "}
              <Link href="/renovation-ile-de-france" className={lien}>rénovation en Île-de-France</Link>.
            </p>
          </MqProse>
          <MqFig
            src="/photos/chantiers/chEtagereCoinFenetreBrute.jpeg"
            alt="Angle de pièce en cours de finition : panneaux muraux et niche à étagères en bois clair posés, plafond en plaques d'où pendent deux attentes électriques, sol encore brut parcouru d'un câble, fenêtre donnant sur un mur de pierre"
            caption="Le même angle de pièce à trois stades : la menuiserie en bois clair posée, deux attentes électriques pendantes au plafond, le sol encore brut. Chaque ouvrage relève de l'entreprise qui l'a chiffré et qui le facture. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Quatre décisions à prendre avant de consulter les entreprises"
        lead="Ces quatre points reviennent sur pratiquement tous les chantiers de rénovation complète, et se traitent avant le premier devis."
        wide
      >
        {/* 08/09 — Infographie de marque fournie par le client, sous le titre de la section.
            Planche composée, affichée `entier` dans un cadre à son format natif (1222 × 1287). */}
        <div className="max-w-3xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-quatre-decisions.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : Quatre décisions à prendre avant de consulter les entreprises — vérifier la nature des murs, anticiper les démarches auprès du syndic, séparer le socle indispensable des options, prévoir la documentation du chantier"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Quatre décisions à prendre avant de consulter les entreprises."
            ratio="aspect-[1222/1287]"
            entier
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {DECISIONS.map((d, i) => (
            <div key={d.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <span className="font-mono t-micro text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display t-haut text-ivoire">{d.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{d.text}</p>
              <Link href={d.href} className={`${lien} t-petit mt-1`}>{d.lien} →</Link>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-3xl">
          <MqFig
            src="/photos/maquette/schema-demarches-copropriete.jpg"
            alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie"
            caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire. Schéma pédagogique."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Les éléments invisibles sont documentés avant leur fermeture"
        lead="Les réseaux, l'étanchéité et les supports disparaissent derrière les finitions. Ce sont eux qui décident de la durée de vie d'une rénovation."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chNourriceDoubleAnglePlafond.jpeg"
            alt="Deux nourrices en laiton fixées en angle de plafond, départs multicouche descendant dans un plancher ouvert avec gaines rouges et bleues"
            caption="Deux nourrices en laiton posées en angle de plafond : chaque départ multicouche est isolable par sa vanne, puis descend dans le plancher ouvert avant refermeture. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chEtancheiteSolDoucheTrameArmee.jpeg"
            alt="Sol de douche préparé : treillis d'armature métallique posé sur la dalle, évacuation et siphon en attente, cloisons en plaques hydrofuges"
            caption="Sol de douche préparé avant étanchéité : treillis d'armature posé sur la dalle, évacuation et siphon laissés en attente, cloisons montées en plaques hydrofuges. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <p className="mt-4 t-mini text-muted max-w-3xl">
          Ces deux photographies proviennent de chantiers réellement pilotés. D&apos;autres sont rassemblées dans nos{" "}
          <Link href="/realisations" className="text-orange hover:underline">réalisations</Link>, et le principe est
          détaillé sur la page <Link href="/detail-invisible" className="text-orange hover:underline">l&apos;ouvrage
          caché</Link>.
        </p>

        <h3 className="display t-fort text-ivoire mt-12">Quatre points de contrôle documentés avant réception</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CONTROLES.map((c) => (
            <MqFig key={c.src} entier ratio="aspect-[3/2]" src={c.src} alt={c.alt} caption={c.cap} />
          ))}
        </div>
        <p className="t-mini text-muted mt-4 max-w-3xl">
          Ces quatre illustrations sont des <strong className="text-ivoire/80">schémas pédagogiques</strong> : elles
          représentent les points observés lors des contrôles. Elles ne documentent pas un chantier particulier et
          n&apos;ont pas valeur de document d&apos;exécution.
        </p>
      </MqSection>

      <MqSection
        title="Budget et délai : un pré-cadrage, jamais une promesse automatique"
        lead="Les premiers ordres de grandeur servent à tester la cohérence d'un projet, pas à l'engager."
      >
        <MqProse>
          <p>
            Le budget et la durée dépendent de l&apos;état réel du bien, de la surface, des modifications structurelles,
            des démarches administratives, des produits choisis et du niveau de finition. Les premiers ordres de grandeur
            permettent de tester la cohérence du projet. Ils doivent ensuite être confrontés aux diagnostics, aux études
            et aux devis des entreprises.
          </p>
          <p>
            Sur les durées, une distinction est nécessaire. Le <strong>temps de préparation</strong> — diagnostics,
            études, autorisations, consultation et comparaison des entreprises — précède le chantier et dépend surtout
            des délais administratifs, en particulier du calendrier des assemblées générales en copropriété. Le{" "}
            <strong>temps de travaux</strong> commence une fois le chantier lancé : de huit à seize semaines pour un
            appartement sans reprise de structure, de quatre à sept mois pour une maison avec reprises structurelles.
            Ces ordres de grandeur supposent les autorisations obtenues, les entreprises disponibles et aucune
            découverte majeure derrière les murs. Ce ne sont pas des délais garantis, et ils n&apos;incluent pas le
            temps de préparation.
          </p>
        </MqProse>
        <div className="mt-8">
          <Link href="/estimateur-travaux" className="btn btn-primary">Obtenir un pré-cadrage de mon projet</Link>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/pedagogie/18-renovation-complete-budget.jpeg"
            alt="Répartition qualitative d'un budget de rénovation complète par grandes familles, sans chiffres"
            caption="Répartition des familles de coûts d'une rénovation complète. Schéma pédagogique, sans valeur chiffrée."
            ratio="aspect-[3/2]"
          />
        </div>
      </MqSection>

      <MqSection title="Questions fréquentes sur la rénovation complète">
        {/* 07/09 — L'image accompagne l'accordéon plutôt que de se poser sous lui : repliée,
            la FAQ fait à peu près la hauteur d'un portrait 9/16 en colonne de 14rem, les deux
            colonnes se terminent donc ensemble. */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-10 items-start">
          <MqFaq items={FAQ} />
          <MqFig
            src="/photos/chantiers/chCouloirPorteBoisModerne.jpeg"
            alt="Couloir aux murs clairs déjà lissés, sol entièrement recouvert d'un film plastique de protection, carton posé au sol, porte en bois au fond dont la fine imposte vitrée laisse entrer la lumière"
            caption="Couloir en cours de travaux : murs clairs déjà lissés, sol recouvert d'un film de protection, carton de fourniture posé au sol. Le logement n'est pas encore rendu à l'usage. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
        </div>
        <div className="mt-8">
          <MqNumbered
            cols={2}
            items={[
              { title: "Documents attendus avant consultation", text: "Plan d'usage validé, diagnostics techniques disponibles selon l'ancienneté du bien, et autorisation écrite de la copropriété si des parties communes sont concernées." },
              { title: "Documents attendus avant ouverture des murs", text: "Plans de réseaux électricité et plomberie validés, devis détaillés ligne à ligne des entreprises retenues, et attestations d'assurance à jour pour chaque lot." },
            ]}
          />
        </div>
        <p className="mt-8 max-w-2xl border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
          <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION
          structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises
          partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les
          travaux sont exécutés et facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta
        title="Votre rénovation commence par des décisions claires"
        lead="Décrivez le bien, les travaux envisagés, votre calendrier et les principales contraintes déjà identifiées. ARCHI PILOTE RÉNOVATION pourra effectuer une première lecture du projet et préciser les prochaines étapes utiles. Paris, Hauts-de-Seine et Île-de-France. Autres secteurs après étude du projet."
      />

      <MqReadNext
        items={[
          { href: "/realisations/pavillon-annees-30-hauts-de-seine", label: "Pavillon des années 30", sub: "Un dossier documenté de bout en bout" },
          { href: "/guides", label: "Les guides techniques", sub: "Douze décisions expliquées une par une" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Ce qui est facturé, et par qui" },
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Comment les entreprises sont sélectionnées" },
          { href: "/renovation-appartement", label: "Rénovation d'appartement", sub: "Le même projet, mais en copropriété" },
          { href: "/contact", label: "Étudier mon projet", sub: "Première lecture sous 48 heures ouvrées" },
        ]}
      />
    </>
  );
}
