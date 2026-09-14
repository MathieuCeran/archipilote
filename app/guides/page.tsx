import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqFig, MqCta, MqReadNext } from "../components/mq";
import { ARTICLES } from "../data";

export const metadata: Metadata = {
  title: "Guides et conseils pour réussir sa rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Douze guides thématiques pour orienter un projet de rénovation, du budget à la structure en passant par l'énergie et les démarches en copropriété, avec les articles du blog classés par sujet.",
  alternates: { canonical: "/guides" },
};

const M = "/photos/maquette";

const GUIDES = [
  {
    kicker: "Estimer un budget avant de contacter des entreprises",
    q: "Combien coûte une rénovation complète ?",
    texte: "Fourchettes constatées par type de bien et niveau de finition, avec les postes qui font varier le prix.",
    href: "/observatoire-prix-renovation",
    cible: "Observatoire des prix de rénovation",
    articles: [
      { href: "/blog/prix-renovation-maison-2026", label: "Ce que coûtent des travaux de rénovation de maison en 2026" },
      { href: "/blog/cuisine-sur-mesure-ou-caissons-standards", label: "Cuisine sur mesure ou caissons standards : où se joue l'économie" },
    ],
  },
  {
    kicker: "Sécuriser un projet touchant la structure",
    q: "Comment reconnaître un mur porteur ?",
    texte: "Les indices visibles et les vérifications indispensables avant toute ouverture.",
    href: "/gros-oeuvre-structure",
    cible: "Gros œuvre et structure",
    articles: [
      { href: "/blog/signes-mur-porteur-avant-travaux", label: "Les signes qui doivent alerter avant de toucher à un mur" },
      { href: "/blog/ipn-hea-heb-choix-profile", label: "IPN, HEA ou HEB : ce que change le choix du profilé" },
    ],
  },
  {
    kicker: "Décider de l'ampleur des travaux de second œuvre",
    q: "Faut-il refaire l'électricité en rénovation ?",
    texte: "Les signes d'une installation à reprendre et l'ordre logique des lots techniques.",
    href: "/second-oeuvre",
    cible: "Second œuvre tous corps d'état",
    articles: [
      { href: "/blog/ordre-intervention-lots-renovation-complete", label: "Dans quel ordre faire intervenir les lots" },
      { href: "/blog/photos-techniques-avant-de-fermer-les-murs", label: "Les photos techniques à conserver avant de fermer les murs" },
    ],
  },
  {
    kicker: "Prioriser les travaux d'isolation et de ventilation",
    q: "Comment sortir un logement du statut de passoire énergétique ?",
    texte: "Isolation, ventilation et menuiseries : la méthode pour hiérarchiser les postes selon le diagnostic.",
    href: "/renovation-energetique",
    cible: "Rénovation énergétique",
    articles: [
      { href: "/blog/sortir-passoire-energetique", label: "DPE F ou G : comment sortir de la passoire énergétique" },
      { href: "/blog/isolation-interieure-erreurs-humidite", label: "Isolation intérieure : les erreurs qui créent l'humidité" },
      { href: "/blog/maprimerenov-cee-2026", label: "MaPrimeRénov' et CEE : ce qu'il faut vérifier avant de compter sur une aide" },
    ],
  },
  {
    kicker: "Comparer deux façons d'agrandir un bien",
    q: "Extension ou surélévation : quelle solution choisir ?",
    texte: "Les critères de faisabilité (terrain, structure, urbanisme) qui orientent le choix.",
    href: "/extension-maison",
    cible: "Extension de maison",
    articles: [
      { href: "/blog/extension-ou-surelevation-maison", label: "Extension ou surélévation : choisir selon son terrain" },
      { href: "/blog/surelevation-etude-des-fondations", label: "Surélévation : pourquoi l'étude des fondations vient avant le dessin" },
    ],
  },
  {
    kicker: "Éviter les forfaits opaques et comparer plusieurs devis",
    q: "Comment lire un devis de travaux ligne à ligne ?",
    texte: "La méthode pour repérer les quantités, les exclusions et les postes sous-évalués.",
    href: "/clinique-du-devis",
    cible: "Clinique du devis",
    articles: [
      { href: "/blog/devis-travaux-lignes-a-verifier", label: "Les lignes d'un devis à vérifier avant de signer" },
    ],
  },
  {
    kicker: "Anticiper le passage en assemblée générale",
    q: "Quelles démarches avant de commencer un chantier en copropriété ?",
    texte: "Les validations possibles selon la nature des travaux et le rôle du syndic.",
    href: "/demarches-administratives-renovation",
    cible: "Démarches administratives",
    articles: [
      { href: "/blog/coproprietaire-autorisations-avant-travaux", label: "Les autorisations à obtenir avant de lancer un chantier" },
      { href: "/blog/ouvrir-mur-porteur-copropriete-assemblee", label: "Ouvrir un mur porteur : les pièces à préparer pour l'assemblée" },
      { href: "/blog/vivre-dans-l-immeuble-pendant-les-travaux", label: "Vivre dans l'immeuble pendant les travaux" },
    ],
  },
  {
    kicker: "Comprendre les étapes avant de s'engager",
    q: "Comment se déroule un chantier piloté de A à Z ?",
    texte: "Du diagnostic à la livraison, les huit étapes de la méthode et les points de vigilance à chaque phase.",
    href: "/notre-methode",
    cible: "Notre méthode de pilotage",
    articles: [
      { href: "/blog/planning-chantier-commandes-a-lancer-en-premier", label: "Quelles commandes lancer en premier" },
      { href: "/blog/reception-chantier-preparer-les-reserves", label: "Réception de chantier : préparer les réserves sans improviser" },
    ],
  },
  {
    kicker: "Identifier si un projet nécessite des compétences spécifiques",
    q: "Quels chantiers sont considérés comme complexes ?",
    texte: "Structure, copropriété, aléas cachés : les situations qui justifient un accompagnement renforcé.",
    href: "/chantiers-complexes",
    cible: "Chantiers complexes",
    articles: [
      { href: "/blog/renovation-toiture-reparer-traiter-remplacer", label: "Toiture : réparer, traiter ou remplacer" },
      { href: "/blog/amenagement-local-commercial-difference-logement", label: "Aménager un local commercial : ce qui change par rapport à un logement" },
    ],
  },
  {
    kicker: "Comprendre qui facture quoi avant de s'engager",
    q: "Comment est structuré le modèle économique d'ARCHI PILOTE RÉNOVATION ?",
    texte: "Achats en direct, transparence sur la facturation des entreprises partenaires et rôle du pilotage.",
    href: "/modele-economique-transparence",
    cible: "Modèle économique et transparence",
    articles: [
      { href: "/blog/parquet-massif-contrecolle-stratifie", label: "Parquet massif, contrecollé ou stratifié : quel revêtement pour quel usage" },
      { href: "/blog/joints-epoxy-vs-ciment", label: "Joints époxy ou joints classiques : pourquoi le choix compte" },
    ],
  },
  {
    kicker: "Comprendre les termes utilisés par les entreprises et les diagnostics",
    q: "Quel est le vocabulaire indispensable avant de lancer des travaux ?",
    texte: "Structure, second œuvre, énergie, administratif, chiffrage : plus de quarante définitions courtes.",
    href: "/glossaire-renovation",
    cible: "Glossaire technique",
    articles: [
      { href: "/blog/vmc-renovation-verifier-au-dela-du-debit", label: "VMC en rénovation : ce qu'il faut vérifier au-delà du débit" },
      { href: "/blog/etancheite-sous-carrelage-points-singuliers", label: "Étanchéité sous carrelage : les points singuliers à documenter" },
    ],
  },
  {
    kicker: "Comprendre qui fait quoi sur un chantier",
    q: "Quelles entreprises et compétences interviennent sur un projet de rénovation ?",
    texte: "Entreprises partenaires, architectes DPLG et ingénieurs structure : critères de sélection et périmètre de chacun.",
    href: "/reseau-partenaires",
    cible: "Réseau de partenaires",
    articles: [
      { href: "/blog/escalier-bois-massif-structure-ouverte-fermee", label: "Escalier : bois massif, structure ouverte ou fermée" },
    ],
  },
];

/* Regroupement dynamique des articles du blog par catégorie : la source reste
   ARTICLES (app/data.ts), de sorte qu'un article ajouté au blog apparaisse
   automatiquement dans cette page carrefour, sans risque de lien mort. */
const ARTICLES_PAR_CATEGORIE = Array.from(
  ARTICLES.reduce((acc, a) => {
    const liste = acc.get(a.categorie) ?? [];
    liste.push(a);
    acc.set(a.categorie, liste);
    return acc;
  }, new Map<string, typeof ARTICLES>())
).sort((a, b) => a[0].localeCompare(b[0], "fr"));

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Guides & conseils"
        title="Choisissez votre question de départ"
        lead="Cette page pilier regroupe douze guides thématiques pour orienter un projet de rénovation, du budget à la structure en passant par l'énergie et les démarches en copropriété. Chaque entrée résume la décision à prendre, renvoie vers la page de service correspondante et vers les articles du blog qui traitent le sujet en détail."
      />

      {/*
        Diagnostic client (antérieur à la refonte qui a porté cette page à 12 guides) :
        "les quatre illustrations actuelles sont pertinentes mais visuellement
        hétérogènes." Vérifié le 31/08 : la page compte bien 12 guides aujourd'hui
        (tableau GUIDES ci-dessus) mais la grille "Repères visuels" n'affiche encore
        que 4 vignettes, et les 12 cartes de guides plus bas n'ont elles-mêmes AUCUNE
        vignette — l'écart entre "douze vignettes cohérentes, une par question" (brief)
        et l'état réel est donc à la fois un écart de nombre (4 sur 12) et de style.

        Hétérogénéité précise des 4 images actuelles :
        - schema-repartition-budget.jpg, schema-mur-porteur.jpg et
          schema-demarches-copropriete.jpg (dossier /photos/maquette) appartiennent à
          UNE MÊME série d'illustrations techniques générées : même registre de schéma
          pédagogique dessiné, même palette ivoire/trait noir. Cohérentes entre elles.
        - chIsolationCombles.jpeg (dossier /photos/chantiers, légende "chantier réel des
          équipes partenaires") est une PHOTOGRAPHIE RÉELLE de chantier, pas un schéma
          généré : registre visuel opposé (photo vs dessin technique). C'est cette
          quatrième image qui casse la cohérence de la série et qui correspond très
          précisément à l'hétérogénéité signalée par le client.

        Régénérer 12 vignettes cohérentes (une par guide) est hors scope pour cette
        passe (page P1, priorité plus basse que les pages déjà traitées). Piste pour une
        passe dédiée : 1) remplacer chIsolationCombles.jpeg par un 4e schéma généré dans
        la même série que les 3 autres ; 2) étendre à 12 vignettes, une par entrée de
        GUIDES, chacune représentant la DÉCISION posée par la question (ex. "reconnaître
        un mur porteur" → un repérage visuel du mur, pas une pièce déjà rénovée) plutôt
        que le résultat rêvé (budget, structure, énergie, autorisation, méthode) —
        conformément à la règle Visuel 2 du brief, à appliquer aussi si des vignettes
        sont un jour ajoutées aux 12 cartes de guides ci-dessous, qui n'en ont aucune
        pour l'instant.
      */}
      <MqSection kicker="Repères visuels" title="Trois illustrations pédagogiques pour situer les sujets les plus consultés" wide>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <MqFig entier ratio="aspect-[10/7]" src={`${M}/schema-repartition-budget.jpg`} alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage" caption="Schéma pédagogique : répartition indicative d'un budget de rénovation complète par poste, du gros œuvre à la salle d'eau. Ordres de grandeur, à confirmer par un chiffrage détaillé." />
          <MqFig entier ratio="aspect-[10/7]" src={`${M}/schema-mur-porteur.jpg`} alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge" caption="Schéma pédagogique : ouverture de mur porteur, la charge étant reprise par une poutre dimensionnée par un ingénieur structure puis descendue jusqu'aux appuis." />
          <MqFig entier ratio="aspect-[10/7]" src={`${M}/schema-demarches-copropriete.jpg`} alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie" caption="Schéma pédagogique : parcours administratif en copropriété — demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire." />
          {/* 05/09 : la 4e tuile (chIsolationCombles) est retirée. Cette rangée présente
              des SCHÉMAS explicatifs ; une photographie de chantier y était l'intruse, et
              celle-ci l'était doublement — elle montre une construction neuve, pas une
              rénovation, et elle était employée sur huit pages du site.
              À POURVOIR : un quatrième schéma, pas une photo (cf. la note de passe ci-dessus
              et docs/EMPLACEMENTS-PHOTO-A-POURVOIR.md). La grille passe à trois colonnes. */}
        </div>
      </MqSection>

      <MqSection kicker="Les douze guides" title="Chaque guide répond à une décision précise et renvoie vers la page utile" wide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GUIDES.map((g) => (
            <div key={g.href + g.q} className="group border border-line bg-surface rounded-none p-6 flex flex-col gap-2 hover:border-line-strong transition-colors">
              <span className="mq-mention mq-mention--accent">{g.kicker}</span>
              <h3 className="display t-base text-ivoire text-balance">
                <Link href={g.href} className="hover:text-orange-deep transition-colors">{g.q}</Link>
              </h3>
              <p className="text-muted t-petit leading-relaxed">{g.texte}</p>
              <p className="t-petit mt-1">
                <Link href={g.href} className="text-orange-deep font-medium hover:underline">→ {g.cible}</Link>
              </p>
              <div className="mt-2 pt-3 border-t border-line">
                <span className="mq-mention">Articles du blog sur ce sujet</span>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {g.articles.map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className="text-ivoire/85 t-petit leading-snug hover:text-orange-deep transition-colors underline underline-offset-4 decoration-line">
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Tout le blog"
        title="Les articles publiés, classés par sujet"
        lead="Les guides ci-dessus orientent une décision ; les articles ci-dessous entrent dans le détail technique. Cette liste suit directement le blog : chaque article publié y apparaît, dans sa catégorie."
        wide
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {ARTICLES_PAR_CATEGORIE.map(([categorie, articles]) => (
            <div key={categorie} className="flex flex-col gap-2">
              <h3 className="border-b border-line pb-2 mq-mention mq-mention--accent">
                {categorie}
              </h3>
              <ul className="flex flex-col gap-2 mt-1">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="text-ivoire/85 t-petit leading-snug hover:text-orange-deep transition-colors">
                      {a.titre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-muted t-petit leading-relaxed mt-8">
          <Link href="/blog" className="text-orange-deep hover:underline">Parcourir le blog par date de publication</Link>
          {" · "}
          <Link href="/services" className="text-orange-deep hover:underline">Voir l&apos;index complet des prestations</Link>
          {" · "}
          <Link href="/nos-specialites" className="text-orange-deep hover:underline">Nos spécialités, de la structure aux finitions</Link>
        </p>
      </MqSection>

      <MqSection kicker="Zone d'intervention" title="Où ces projets sont étudiés">
        <p className="text-muted t-sec leading-relaxed max-w-2xl">
          Les décisions décrites dans ces guides valent partout ; l&apos;accompagnement, lui, se limite à une zone
          géographique. ARCHI PILOTE RÉNOVATION intervient en priorité dans les Hauts-de-Seine et, selon l&apos;ampleur
          du projet, plus largement en Île-de-France.
        </p>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <Link href="/renovation-hauts-de-seine-92" className="text-orange-deep hover:underline t-sec">
              Rénovation dans les Hauts-de-Seine (92)
            </Link>
          </li>
          <li>
            <Link href="/renovation-ile-de-france" className="text-orange-deep hover:underline t-sec">
              La zone d&apos;intervention en Île-de-France
            </Link>
          </li>
        </ul>
      </MqSection>

      <MqCta lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste." />

      <MqReadNext items={[
        { href: "/faq", label: "Questions fréquentes", sub: "Réponses classées par décision" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/contact", label: "Contact", sub: "Étude de projet sans engagement" },
      ]} />
    </main>
  );
}
