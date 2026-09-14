import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Glossaire de la rénovation : le vocabulaire du bâtiment | ARCHI PILOTE RÉNOVATION",
  description:
    "Plus de quarante termes techniques de la rénovation, classés par famille : structure, second œuvre, énergie et ventilation, administratif, chiffrage.",
  alternates: { canonical: "/glossaire-renovation" },
};

const FAMILLES = [
  {
    titre: "Structure",
    termes: [
      { t: "Mur porteur", d: "Mur qui supporte une partie du poids du bâtiment, en plus de son propre poids. Sa modification nécessite un renfort adapté et, souvent, l'avis d'un professionnel compétent.", href: "/ouverture-mur-porteur", lien: "Ouvrir un mur porteur : sondages, étaiement, reprise de charge" },
      { t: "Refend", d: "Mur porteur intérieur qui divise un bâtiment en participant à la stabilité de la structure, distinct des murs de façade.", href: "/gros-oeuvre-structure", lien: "Gros œuvre et structure : murs, planchers, reprises" },
      { t: "Trémie", d: "Ouverture pratiquée dans un plancher, par exemple pour un escalier ou un conduit. Sa création modifie la répartition des charges autour de l'ouverture.", href: "/gros-oeuvre-structure", lien: "Création de trémie et reprise de plancher" },
      { t: "Chaînage", d: "Élément en béton armé, horizontal ou vertical, qui renforce la structure et répartit les efforts entre les murs et les planchers.", href: "/gros-oeuvre-structure", lien: "Les travaux de structure pilotés" },
      { t: "Linteau", d: "Élément placé au-dessus d'une ouverture (porte, fenêtre) pour reporter les charges du mur vers les points d'appui de part et d'autre.", href: "/ouverture-mur-porteur", lien: "Ce que suppose une ouverture dans un mur porteur" },
      { t: "Fondation", d: "Ouvrage enterré qui transmet les charges du bâtiment au sol. Sa nature dépend de la portance du terrain et du poids de la construction.", href: "/blog/surelevation-etude-des-fondations", lien: "Pourquoi l'étude des fondations vient avant le dessin" },
      { t: "Plancher collaborant", d: "Plancher associant une dalle béton et une structure métallique ou bois travaillant ensemble pour reprendre les charges.", href: "/blog/ipn-hea-heb-choix-profile", lien: "IPN, HEA ou HEB : ce que change le choix du profilé" },
      { t: "Étai", d: "Élément provisoire qui soutient une structure pendant les travaux, avant la mise en place ou la validation d'un renfort définitif.", href: "/ouverture-mur-porteur", lien: "L'étaiement dans une ouverture de mur porteur" },
      { t: "Sondage structurel", d: "Ouverture ponctuelle et contrôlée réalisée pour observer la composition réelle d'un mur, d'un plancher ou d'une fondation avant travaux.", href: "/blog/signes-mur-porteur-avant-travaux", lien: "Les signes qui doivent alerter avant travaux" },
      { t: "Descente de charges", d: "Calcul qui suit le trajet des efforts depuis la toiture jusqu'aux fondations, utilisé pour valider une modification de structure.", href: "/chantiers-complexes", lien: "Les chantiers qui exigent une étude de structure" },
      { t: "IPN", d: "Poutrelle métallique en I utilisée pour reprendre une charge au-dessus d'une ouverture. D'autres profilés, comme le HEA ou le HEB, répondent à d'autres cas de figure.", href: "/blog/ipn-hea-heb-choix-profile", lien: "IPN, HEA ou HEB : comparer les profilés" },
    ],
  },
  {
    titre: "Second œuvre",
    termes: [
      { t: "Cloison", d: "Paroi non porteuse qui sépare des espaces intérieurs sans participer à la stabilité du bâtiment.", href: "/second-oeuvre", lien: "Second œuvre tous corps d'état" },
      { t: "Doublage", d: "Habillage intérieur d'un mur, souvent isolant, posé pour améliorer le confort thermique ou acoustique.", href: "/renovation-energetique", lien: "Isolation, ventilation et chauffage arbitrés ensemble" },
      { t: "Ragréage", d: "Enduit appliqué sur un sol pour le rendre plan avant la pose d'un revêtement.", href: "/sols-finitions-renovation", lien: "Sols et finitions : préparation du support" },
      { t: "Chape", d: "Couche de mortier appliquée sur une dalle pour recevoir un revêtement de sol ou intégrer un réseau de chauffage.", href: "/sols-finitions-renovation", lien: "Chape, ragréage et pose des revêtements" },
      { t: "Faux plafond", d: "Plafond suspendu qui dissimule des réseaux (électricité, ventilation) et permet d'ajuster la hauteur ou l'acoustique d'une pièce.", href: "/second-oeuvre", lien: "Cloisons, plafonds et réseaux du second œuvre" },
      { t: "Tableau électrique", d: "Coffret regroupant les dispositifs de protection et de répartition du courant électrique dans un logement.", href: "/electricite-plomberie-renovation", lien: "Électricité et plomberie en rénovation" },
      { t: "Nourrice", d: "Répartiteur de plomberie qui alimente plusieurs points d'eau depuis une arrivée principale unique.", href: "/electricite-plomberie-renovation", lien: "Réseaux, alimentations et évacuations" },
      { t: "Étanchéité à l'air", d: "Qualité d'une paroi ou d'une menuiserie à limiter les entrées d'air non maîtrisées, essentielle à la performance énergétique.", href: "/renovation-energetique", lien: "Étanchéité à l'air et ventilation en rénovation énergétique" },
      { t: "Menuiserie extérieure", d: "Fenêtre, porte-fenêtre ou porte donnant sur l'extérieur, dont la pose influence l'isolation thermique et acoustique.", href: "/menuiserie-agencement-sur-mesure", lien: "Menuiserie et agencement sur-mesure" },
      { t: "Revêtement de sol", d: "Matériau final posé sur la chape ou le ragréage : carrelage, parquet, sol souple, selon l'usage de la pièce.", href: "/blog/parquet-massif-contrecolle-stratifie", lien: "Parquet massif, contrecollé ou stratifié : quel usage" },
      { t: "Étanchéité sous carrelage", d: "Système appliqué sous le carrelage d'une pièce humide pour empêcher l'eau d'atteindre le support, avec un traitement particulier des angles, seuils et traversées.", href: "/blog/etancheite-sous-carrelage-points-singuliers", lien: "Les points singuliers d'étanchéité à documenter" },
      { t: "Joint époxy", d: "Joint de carrelage à base de résine, plus résistant aux taches et à l'eau qu'un joint au ciment, mais dont la pose demande davantage de soin.", href: "/blog/joints-epoxy-vs-ciment", lien: "Joints époxy ou joints classiques : pourquoi le choix compte" },
    ],
  },
  {
    titre: "Énergie et ventilation",
    termes: [
      { t: "VMC", d: "Ventilation mécanique contrôlée : système qui renouvelle l'air d'un logement en évacuant l'air vicié et en apportant de l'air neuf.", href: "/blog/vmc-renovation-verifier-au-dela-du-debit", lien: "Ce qu'il faut vérifier au-delà du débit d'une VMC" },
      { t: "VMC simple flux", d: "Système de ventilation qui extrait l'air vicié des pièces humides, l'air neuf entrant par des entrées d'air dans les pièces sèches.", href: "/renovation-energetique", lien: "Ventilation et rénovation énergétique" },
      { t: "VMC double flux", d: "Système de ventilation qui extrait l'air vicié et insuffle de l'air neuf préchauffé, en récupérant une partie des calories de l'air extrait.", href: "/renovation-energetique", lien: "Arbitrer isolation, ventilation et chauffage" },
      { t: "Passoire énergétique", d: "Terme courant désignant un logement dont la performance énergétique est très dégradée, généralement lié à une isolation insuffisante.", href: "/blog/sortir-passoire-energetique", lien: "DPE F ou G : comment sortir de la passoire énergétique" },
      { t: "Diagnostic de performance énergétique", d: "Document qui évalue la consommation d'énergie et l'impact carbone d'un logement, utilisé notamment lors d'une vente ou d'une location.", href: "/renovation-energetique", lien: "Rénovation énergétique : du diagnostic aux travaux" },
      { t: "Pont thermique", d: "Point de la construction où l'isolation est interrompue ou affaiblie, provoquant une déperdition de chaleur localisée.", href: "/blog/isolation-interieure-erreurs-humidite", lien: "Les erreurs d'isolation qui créent humidité et inconfort" },
      { t: "Isolation par l'extérieur", d: "Technique qui place l'isolant sur la façade extérieure du bâtiment, limitant les ponts thermiques mais soumise au règlement de copropriété et à l'urbanisme.", href: "/renovation-energetique", lien: "Les travaux d'isolation pilotés" },
      { t: "Isolation par l'intérieur", d: "Technique qui place l'isolant côté intérieur des murs, plus simple à mettre en œuvre mais réduisant légèrement la surface habitable.", href: "/blog/isolation-interieure-erreurs-humidite", lien: "Isolation intérieure : les erreurs à éviter" },
      { t: "Pompe à chaleur", d: "Équipement qui transfère la chaleur d'un milieu (air, eau, sol) vers le logement pour le chauffer, parfois de manière réversible pour le rafraîchir.", href: "/aides-renovation-energetique", lien: "Les aides mobilisables sur les travaux énergétiques" },
      { t: "Condensation", d: "Formation d'humidité sur une paroi froide au contact d'un air chaud et humide, souvent liée à une ventilation insuffisante.", href: "/blog/vmc-renovation-verifier-au-dela-du-debit", lien: "Ventilation : ce qui provoque humidité et condensation" },
    ],
  },
  {
    titre: "Administratif",
    termes: [
      { t: "Déclaration préalable de travaux", d: "Autorisation d'urbanisme simplifiée requise pour certains travaux modifiant l'aspect extérieur ou créant une surface limitée.", href: "/demarches-administratives-renovation", lien: "Les démarches administratives avant travaux" },
      { t: "Permis de construire", d: "Autorisation d'urbanisme requise pour les travaux d'ampleur, notamment les extensions ou surélévations dépassant certains seuils de surface.", href: "/extension-maison", lien: "Extension de maison : urbanisme et faisabilité" },
      { t: "Règlement de copropriété", d: "Document qui fixe les règles d'usage des parties privatives et communes d'un immeuble en copropriété, à consulter avant tout projet touchant les communs.", href: "/renovation-appartement", lien: "Rénover un appartement en copropriété" },
      { t: "Assemblée générale de copropriété", d: "Réunion annuelle ou exceptionnelle des copropriétaires au cours de laquelle sont votées les autorisations touchant les parties communes.", href: "/blog/ouvrir-mur-porteur-copropriete-assemblee", lien: "Les pièces à préparer avant l'assemblée générale" },
      { t: "Syndic de copropriété", d: "Professionnel ou structure chargée de la gestion administrative de l'immeuble et de l'exécution des décisions votées en assemblée générale.", href: "/blog/coproprietaire-autorisations-avant-travaux", lien: "Les autorisations à obtenir avant de lancer un chantier" },
      { t: "Parties communes", d: "Éléments de l'immeuble utilisés ou profitant à l'ensemble des copropriétaires : façades, toiture, gaines techniques, halls.", href: "/blog/vivre-dans-l-immeuble-pendant-les-travaux", lien: "Protections, horaires et voisinage pendant les travaux" },
      { t: "Servitude", d: "Charge grevant un bien au profit d'un autre bien ou d'un tiers, pouvant limiter certains travaux (passage, vue, réseaux).", href: "/demarches-administratives-renovation", lien: "Ce qu'il faut vérifier côté urbanisme" },
      { t: "Code de la construction", d: "Ensemble de textes réglementaires encadrant les normes de construction et de rénovation applicables en France.", href: "/garanties-assurances", lien: "Garanties légales et assurances des entreprises" },
      { t: "Autorisation d'urbanisme", d: "Terme générique regroupant déclaration préalable, permis de construire et permis d'aménager selon la nature et l'ampleur du projet.", href: "/demarches-administratives-renovation", lien: "Déclaration préalable ou permis : le parcours administratif" },
      { t: "Secteur protégé", d: "Zone soumise à des règles d'urbanisme renforcées (abords de monument historique, site patrimonial) pouvant conditionner certains travaux.", href: "/savoir-faire-ancien", lien: "Rénover dans l'ancien : contraintes et savoir-faire" },
    ],
  },
  {
    titre: "Chiffrage",
    termes: [
      { t: "Devis descriptif", d: "Devis détaillant les prestations poste par poste, avec quantités et prix unitaires, permettant une comparaison précise entre entreprises.", href: "/clinique-du-devis", lien: "Lire un devis de travaux ligne à ligne" },
      { t: "Devis forfaitaire", d: "Devis présentant un prix global sans détail des quantités, rendant la comparaison entre entreprises plus difficile.", href: "/blog/devis-travaux-lignes-a-verifier", lien: "Les lignes d'un devis à vérifier avant de signer" },
      { t: "Métré", d: "Mesure précise des quantités de matériaux et de surfaces nécessaires à un chantier, base du chiffrage détaillé.", href: "/clinique-du-devis", lien: "Contrôler quantités et unités d'un devis" },
      { t: "Poste de travaux", d: "Ligne d'un devis correspondant à une prestation ou un lot déterminé, par exemple l'électricité ou la peinture.", href: "/observatoire-prix-renovation", lien: "Les fourchettes de prix par poste de travaux" },
      { t: "Exclusion de devis", d: "Prestation explicitement non comprise dans un devis, à vérifier systématiquement pour éviter les mauvaises surprises.", href: "/clinique-du-devis", lien: "Repérer les exclusions écrites dans un devis" },
      { t: "Aléa de chantier", d: "Imprévu découvert en cours de travaux, par exemple un réseau caché ou un désordre structurel, nécessitant un chiffrage complémentaire.", href: "/chantiers-complexes", lien: "Les chantiers exposés aux aléas cachés" },
      { t: "Provision pour imprévus", d: "Marge budgétaire réservée avant travaux pour absorber les aléas révélés en cours de chantier.", href: "/estimateur-travaux", lien: "Estimer une enveloppe de travaux" },
      { t: "Attestation d'assurance décennale", d: "Document justifiant qu'une entreprise est couverte pour les désordres pouvant affecter la solidité de l'ouvrage pendant dix ans.", href: "/garanties-assurances", lien: "Garanties et assurances : ce qui doit être remis" },
      { t: "Situation de travaux", d: "Décompte intermédiaire de l'avancement du chantier, utilisé pour établir les paiements échelonnés aux entreprises.", href: "/modele-economique-transparence", lien: "Qui facture quoi : le modèle économique détaillé" },
      { t: "Réception de travaux", d: "Acte par lequel le client accepte les travaux réalisés, avec ou sans réserves, marquant le point de départ de certaines garanties.", href: "/blog/reception-chantier-preparer-les-reserves", lien: "Préparer les réserves de réception sans improviser" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Glossaire technique"
        title="Le vocabulaire du bâtiment, expliqué simplement"
        lead="Ce glossaire réunit plus de quarante termes techniques utilisés en rénovation, classés par famille : structure, second œuvre, énergie et ventilation, administratif et chiffrage. Chaque définition tient en une à trois phrases et vise à faciliter la lecture des devis, des diagnostics et des échanges avec les entreprises partenaires."
      />

      {/*
        À GÉNÉRER — Visuel 1, seul visuel de cette page. Le client est explicite :
        "la page doit rester rapide et scannable ; une image par définition serait une
        erreur" — donc UN SEUL visuel compact ici, jamais un par terme du glossaire.
        Vérifié le 31/08 dans /public/photos/pedagogie/ (7 schémas déjà produits :
        01-beton-cire, 02-transformer-methode, 03-menuiserie-condensation,
        04-circuit-air, 05-menuiserie-moulures, 06-huit-etapes, 07-modele-economique) —
        aucun ne correspond au sujet demandé.
        Sujet : planche technique sobre regroupant poutre, pare-vapeur, nourrice, VMC,
        chape et joint époxy.
        Alt à utiliser : "Principaux éléments techniques expliqués dans le glossaire de
        la rénovation."
        Une fois produite, l'ajouter ici (hero compact, format large) via
        <div className="rf-wrap mq-mesure--large pb-12 md:pb-16">
          <MqFig src="..." alt="..." ratio="aspect-[21/9]" caption="..." />
        </div>
        avant la première <MqSection> des familles de termes — compact, PAS une image
        par définition.
        Prompt FR exact pour la génération :
        "Planche technique éditoriale et sobre présentant six pictogrammes techniques
        alignés sur une seule ligne horizontale, fond ivoire uni, traits fins noir mat,
        courte légende en français sous chaque élément : une poutre de reprise en coupe,
        un pare-vapeur en coupe de paroi, une nourrice de plomberie avec ses départs,
        une bouche de VMC avec son conduit, une chape en coupe sur dalle, un joint en
        époxy entre deux carreaux. Style schéma pédagogique cohérent avec les
        illustrations techniques déjà produites pour ce site (mêmes gris/noir sur ivoire,
        aucune touche de couleur vive), aucune photographie, aucun personnage, format
        large 21:9, compact et lisible en petite taille."
      */}

      <MqSection kicker="Mode d'emploi" title="Chaque définition renvoie vers la page qui traite le sujet">
        <p className="text-muted t-sec leading-relaxed max-w-2xl">
          Un terme rencontré dans un devis ou un diagnostic conduit presque toujours à une décision de chantier.
          Sous chaque définition figure donc le lien vers la page ou l&apos;article qui détaille ce sujet : travaux
          concernés, points de vigilance et ordre d&apos;intervention.
        </p>
      </MqSection>

      {FAMILLES.map((f) => (
        <MqSection key={f.titre} kicker={f.titre} wide>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {f.termes.map((term) => (
              <div key={term.t} className="border-b border-line pb-4">
                <dt className="display t-base text-ivoire">{term.t}</dt>
                <dd className="text-muted t-petit mt-1 leading-relaxed">
                  {term.d}
                  <Link href={term.href} className="block mt-1.5 text-orange-deep t-petit hover:underline">
                    → {term.lien}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </MqSection>
      ))}

      <MqSection kicker="Poursuivre" title="Où ce vocabulaire est mis en pratique" wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <h3 className="display t-base text-ivoire">Les pages qui couvrent ces sujets</h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/services" className="text-orange-deep hover:underline t-petit">L&apos;index complet des prestations pilotées</Link></li>
              <li><Link href="/nos-specialites" className="text-orange-deep hover:underline t-petit">Nos spécialités, de la structure aux finitions</Link></li>
              <li><Link href="/notre-methode" className="text-orange-deep hover:underline t-petit">Les huit étapes de la méthode de pilotage</Link></li>
              <li><Link href="/guides" className="text-orange-deep hover:underline t-petit">Les guides et articles classés par sujet</Link></li>
              <li><Link href="/observatoire-prix-renovation" className="text-orange-deep hover:underline t-petit">Les fourchettes de prix par poste de travaux</Link></li>
              <li><Link href="/faq" className="text-orange-deep hover:underline t-petit">Les questions fréquentes classées par décision</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="display t-base text-ivoire">Zone d&apos;intervention</h3>
            <p className="text-muted t-petit leading-relaxed mt-3">
              Ce vocabulaire vaut partout ; l&apos;accompagnement, lui, couvre en priorité les Hauts-de-Seine et,
              selon l&apos;ampleur du projet, le reste de l&apos;Île-de-France.
            </p>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/renovation-hauts-de-seine-92" className="text-orange-deep hover:underline t-petit">Rénovation dans les Hauts-de-Seine (92)</Link></li>
              <li><Link href="/renovation-ile-de-france" className="text-orange-deep hover:underline t-petit">La zone d&apos;intervention en Île-de-France</Link></li>
            </ul>
          </div>
        </div>
      </MqSection>

      <MqSection>
        <p className="t-mini text-muted max-w-3xl">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqReadNext items={[
        { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
        { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Isolation, VMC, passoire énergétique" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Comprendre un devis ligne à ligne" },
        { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Déclaration préalable, permis, copropriété" },
        { href: "/garanties-assurances", label: "Garanties & assurances", sub: "Décennale, réception, levée des réserves" },
        { href: "/blog", label: "Blog", sub: "Les articles techniques du site" },
      ]} />
    </main>
  );
}
