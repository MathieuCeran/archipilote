import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/notre-methode" },
  title: "Notre méthode de pilotage de rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Un chantier dérive rarement à cause d'une seule erreur spectaculaire. Il dérive par accumulation : un devis incomplet, une option validée trop vite, un lot oublié.",
};

const STEPS = [
  {
    title: "Comprendre le besoin réel",
    text: "Usage du bien, durée de détention, contraintes familiales, objectif patrimonial et enveloppe budgétaire disponible. Une résidence principale et un investissement locatif n'appellent pas les mêmes arbitrages, même sur un bien identique.",
  },
  {
    title: "Lire le bâti avant les finitions",
    text: "Structure porteuse, réseaux existants, ventilation, traces d'humidité, état des menuiseries et accès chantier sont examinés avant toute discussion de matériaux ou de couleurs. Un projet esthétiquement séduisant peut être techniquement intenable.",
  },
  {
    title: "Séparer indispensable, souhaitable et optionnel",
    text: "Chaque poste de dépense est classé selon sa nécessité réelle. Cette hiérarchie sert de filet de sécurité : si le budget évolue en cours de projet, l'arbitrage porte sur l'optionnel, jamais sur un poste technique indispensable.",
  },
  {
    title: "Construire un chiffrage lisible",
    text: "Un total ne suffit jamais. Le chiffrage détaille les lots, les quantités, les hypothèses retenues et les exclusions explicites. Deux devis ne se comparent que si leurs périmètres sont rigoureusement identiques.",
  },
  {
    title: "Identifier les compétences nécessaires",
    text: "Certaines opérations exigent un professionnel spécifique : reprise de structure, dépôt de permis, calcul de descente de charges, étude de sols. Nous identifions à ce stade si un architecte DPLG, un ingénieur structure ou le bureau d'études géotechniques Geo2Mo doit intervenir.",
  },
  {
    title: "Verrouiller les interfaces entre les lots",
    text: "Les erreurs coûteuses se logent rarement à l'intérieur d'un lot, mais entre deux lots : une ouverture qui déplace un réseau, une isolation qui modifie la ventilation, une cuisine dessinée avant les réservations électriques.",
  },
  {
    title: "Suivre les décisions et les changements",
    text: "Un chantier vivant évolue. Chaque modification est tracée avec sa conséquence identifiée : coût, délai, technique ou esthétique. Un changement non tracé est la première cause de litige en fin de chantier.",
  },
  {
    title: "Documenter la fin du projet",
    text: "Une rénovation bien pilotée se termine avec un dossier complet : attestations d'assurance des entreprises exécutantes, garanties, notices techniques, réserves et leur levée effective.",
  },
];

const STEP_DETAILS = [
  {
    title: "Comprendre le besoin réel",
    liens: [
      { href: "/parcours-expertise", label: "Le parcours et l'expérience de chiffrage à l'origine de la méthode" },
      { href: "/estimateur-travaux", label: "Estimer une enveloppe de travaux en quelques questions" },
      { href: "/investisseurs-professionnels", label: "Cadrage spécifique aux investisseurs et aux professionnels" },
    ],
    livrable: "Note de cadrage, liste des objectifs hiérarchisés, budget cible.",
    documents: "Titre de propriété ou bail, règlement de copropriété, diagnostic de performance énergétique existant.",
    duree: "3 à 5 jours ouvrés",
  },
  {
    title: "Lire le bâti avant les finitions",
    liens: [
      { href: "/gros-oeuvre-structure", label: "Gros œuvre et structure : ce que la lecture du bâti vérifie" },
      { href: "/detail-invisible", label: "Le détail invisible : ce qui se joue derrière les cloisons" },
      { href: "/blog/signes-mur-porteur-avant-travaux", label: "Les signes qui doivent alerter avant de toucher à un mur" },
    ],
    livrable: "Rapport de visite technique illustré, liste des points de vigilance.",
    documents: "Plans existants si disponibles, historique de travaux, autorisations antérieures.",
    duree: "1 visite + 3 jours de restitution",
  },
  {
    title: "Séparer indispensable, souhaitable et optionnel",
    liens: [
      { href: "/nos-specialites", label: "Nos spécialités, de la structure aux finitions" },
      { href: "/observatoire-prix-renovation", label: "Les fourchettes de prix par poste de travaux" },
      { href: "/ce-que-nous-ne-faisons-pas", label: "Ce que nous ne prenons pas en charge" },
    ],
    livrable: "Grille de hiérarchisation des postes, scénarios budgétaires.",
    documents: "Premiers devis ou estimations, souhaits écrits du client.",
    duree: "2 à 4 jours ouvrés",
  },
  {
    title: "Construire un chiffrage lisible",
    liens: [
      { href: "/clinique-du-devis", label: "Lire un devis de travaux ligne à ligne" },
      { href: "/modele-economique-transparence", label: "Qui facture quoi : le modèle économique détaillé" },
      { href: "/blog/devis-travaux-lignes-a-verifier", label: "Les lignes d'un devis à vérifier avant de signer" },
    ],
    livrable: "Chiffrage ligne à ligne par lot, tableau comparatif des offres.",
    documents: "Devis des entreprises consultées, métrés, plans côtés.",
    duree: "1 à 2 semaines selon la taille du projet",
  },
  {
    title: "Identifier les compétences nécessaires",
    liens: [
      { href: "/reseau-partenaires", label: "Les entreprises et compétences mobilisées" },
      { href: "/chantiers-complexes", label: "Les chantiers qui exigent des compétences renforcées" },
      { href: "/demarches-administratives-renovation", label: "Les démarches administratives à prévoir" },
    ],
    livrable: "Liste des intervenants nécessaires et de leur périmètre de responsabilité.",
    documents: "Cahier des charges technique, éventuel dossier de structure ou étude géotechnique préexistant.",
    duree: "3 à 7 jours ouvrés",
  },
  {
    title: "Verrouiller les interfaces entre les lots",
    liens: [
      { href: "/second-oeuvre", label: "Second œuvre tous corps d'état" },
      { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie : réseaux et attentes" },
      { href: "/renovation-energetique", label: "Isolation et ventilation arbitrées ensemble" },
      { href: "/blog/ordre-intervention-lots-renovation-complete", label: "Dans quel ordre faire intervenir les lots" },
    ],
    livrable: "Tableau des interfaces techniques, plan d'implantation piloté.",
    documents: "Plans d'exécution, fiches techniques des équipements retenus.",
    duree: "1 semaine, avant le démarrage des travaux",
  },
  {
    title: "Suivre les décisions et les changements",
    liens: [
      { href: "/charte-qualite", label: "La charte qualité qui encadre le suivi de chantier" },
      { href: "/blog/photos-techniques-avant-de-fermer-les-murs", label: "Les photos techniques à conserver avant de fermer les murs" },
      { href: "/blog/planning-chantier-commandes-a-lancer-en-premier", label: "Quelles commandes lancer en premier" },
    ],
    livrable: "Comptes rendus réguliers, journal des modifications, photos datées transmises quotidiennement sur WhatsApp.",
    documents: "Avenants signés, bons de commande de matériaux.",
    duree: "Pendant toute la durée du chantier",
  },
  {
    title: "Documenter la fin du projet",
    liens: [
      { href: "/garanties-assurances", label: "Garanties et assurances : ce qui doit être remis" },
      { href: "/blog/reception-chantier-preparer-les-reserves", label: "Préparer les réserves de réception sans improviser" },
      { href: "/temoignages-clients", label: "Les retours de clients accompagnés" },
    ],
    livrable: "Dossier unique de fin de chantier, procès-verbal de réception, liste des réserves levées.",
    documents: "Attestations décennale et responsabilité civile, factures, notices d'entretien.",
    duree: "1 à 2 semaines après réception",
  },
];

const FAQ = [
  {
    q: "Combien de temps dure le pilotage complet d'un projet ?",
    a: "Le cadrage et le chiffrage prennent en général deux à quatre semaines selon la taille du bien. Le pilotage du chantier lui-même suit ensuite la durée réelle des travaux, du démarrage jusqu'à la levée des réserves.",
  },
  {
    q: "Qui rédige le chiffrage détaillé ?",
    a: "Le chiffrage est analysé et mis en forme par notre équipe, avec une rigueur issue de l'expérience en chiffrage acquise dans le secteur des foncières. Les devis finaux restent émis par les entreprises partenaires contractantes retenues.",
  },
  {
    q: "La méthode change-t-elle selon la taille du projet ?",
    a: "Les huit étapes s'appliquent toujours, mais leur durée et leur formalisme s'adaptent. Une rénovation de salle de bains suit une version allégée ; une restructuration complète avec reprise de structure mobilise davantage de documents et de partenaires.",
  },
  {
    q: "Comment suis-je informé de l'avancement du chantier ?",
    a: "Par des photos datées transmises quotidiennement sur WhatsApp et des comptes rendus réguliers qui font le point sur les décisions prises, les écarts éventuels et les prochaines étapes.",
  },
  {
    q: "Que se passe-t-il si une contrainte technique apparaît en cours de chantier ?",
    a: "Chaque aléa est documenté, chiffré et arbitré avant exécution. La méthode vise précisément à éviter qu'un imprévu ne devienne une décision improvisée prise sans validation ni traçabilité.",
  },
  {
    q: "Le pilotage inclut-il les démarches auprès du syndic de copropriété ?",
    a: "Oui lorsque le projet le nécessite : constitution du dossier technique, demande d'inscription à l'ordre du jour de l'assemblée générale et suivi des pièces justificatives, notamment pour la ventilation mécanique contrôlée ou le carottage de traversée.",
  },
];

export default function NotreMethodePage() {
  return (
    <main>
      <MqHero
        kicker="Méthode de pilotage"
        title="Une méthode de rénovation fondée sur les décisions"
        lead="Un chantier dérive rarement à cause d'une seule erreur spectaculaire. Il dérive par accumulation : un devis incomplet, une option validée trop vite, un lot oublié, un changement tardif ou une responsabilité mal comprise. Notre méthode transforme chaque projet en une suite de huit décisions vérifiables, chacune assortie d'un livrable écrit, de documents précis et d'une durée indicative, du premier rendez-vous jusqu'au dossier de fin de chantier."
      />

      <div className="rf-wrap mq-mesure--large pb-12 md:pb-16 mq-planche-ouverture">
        <MqFig entier
          src="/photos/pedagogie/06-huit-etapes.jpeg"
          alt="Schéma pédagogique des huit étapes du pilotage : comprendre le besoin, lire le bâti, prioriser, chiffrer, sélectionner, vérifier les interfaces, suivre le chantier, dossier final"
          caption="Schéma pédagogique : les huit étapes de la méthode, chacune produisant un livrable écrit avant de passer à la suivante."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        kicker="Pourquoi cette méthode"
        title="Le risque se loge dans l'accumulation, pas dans un seul lot"
        lead="Les litiges de chantier naissent rarement d'une malfaçon isolée. Ils naissent d'une somme de petites approximations : un devis mal lu, une interface oubliée entre deux corps de métier, une décision prise oralement et jamais tracée."
      >
        <MqProse>
          <h3 className="display t-fort text-ivoire">Une suite de décisions, pas une promesse de perfection</h3>
          <p>Notre objectif n'est pas d'annoncer un chantier sans imprévu, mais d'éviter que l'imprévu devienne une improvisation.</p>
          <p>
            Chaque étape du pilotage produit un document daté : note de cadrage, rapport de visite, grille de hiérarchisation, chiffrage
            comparatif, tableau des interfaces, compte rendu ou dossier de fin de chantier. Cette documentation permet de revenir sur une
            décision et d'en comprendre l'origine.
          </p>
          <p>
            Elle sert aussi de base au dialogue avec les entreprises partenaires contractantes, qui exécutent et facturent les travaux, et
            avec les architectes DPLG ou ingénieurs structure partenaires indépendants mobilisés sur les dossiers lourds.
          </p>
        </MqProse>
        <div className="mt-10">
          <MqFig entier
            src="/photos/pedagogie/08-notre-methode-dependances.jpeg"
            alt="Diagramme des dépendances entre structure, réseaux, isolation, ventilation, cuisine et finitions"
            caption="Dépendances et risques entre les différents lots de rénovation. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
      </MqSection>

      <MqDark kicker="Détail des huit étapes" title="Livrables, documents et durée indicative">
        <MqDarkSteps steps={STEPS} />
        <div className="mt-10">
          <MqFig entier
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
            caption="Schéma pédagogique : enchaînement des lots d'un chantier de rénovation, chaque phase conditionnant la suivante."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqDark>

      <MqSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STEP_DETAILS.map((d) => (
            <div key={d.title} className="border border-line bg-surface rounded-none p-5 flex flex-col gap-2">
              <h3 className="display t-base text-ivoire">{d.title}</h3>
              <p className="text-muted t-petit leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Livrable :</strong> {d.livrable}
              </p>
              <p className="text-muted t-petit leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Documents mobilisés :</strong> {d.documents}
              </p>
              <p className="text-muted t-petit leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Durée indicative :</strong> {d.duree}
              </p>
              <div className="mt-1 pt-3 border-t border-line">
                <span className="mq-mention">Le détail sur le site</span>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {d.liens.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-orange-deep t-petit leading-snug hover:underline">
                        {l.label}
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
        kicker="Interfaces entre lots"
        title="L'étape la plus souvent négligée : verrouiller ce qui se trouve entre deux corps de métier"
        lead="Une ouverture structurelle peut déplacer un réseau électrique ; une isolation renforcée peut rendre une ventilation existante insuffisante ; une cuisine dessinée trop tôt peut bloquer une réservation de plomberie."
      >
        <div className="flex flex-col gap-8">
          <MqFig entier
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma d'une ventilation mécanique contrôlée hygroréglable dans un appartement, avec entrées d'air, gaines vers le caisson en combles et bouches d'extraction en pièces techniques"
            caption="Schéma pédagogique (principe d'une VMC hygroréglable en appartement), pris ici comme exemple d'interface entre lots : la pose de la ventilation dépend de l'étanchéité à l'air obtenue par l'isolation."
            ratio="aspect-[10/7]"
          />
          {/*
            31/08 : alt corrigé — le schéma réutilisé ici (déjà utilisé sur la page
            rénovation-énergétique) montre un plan d'appartement avec caisson VMC en combles et
            gaines vers les pièces techniques, pas un "immeuble ancien" avec une "trémie existante"
            comme l'affirmait l'ancien alt : ce détail ne figure pas dans l'image. La légende
            visible (générique, "interface entre lots") restait exacte et n'a pas été modifiée.
          */}
          <MqChecklist
            items={[
              "Réservations électriques posées avant l'implantation des meubles.",
              "Arrivées et évacuations d'eau vérifiées avant la pose des cloisons.",
              "Épaisseurs d'isolation confrontées aux niveaux finis de sol.",
              "Dimensions de menuiseries validées avant la commande.",
              "Ventilation dimensionnée après l'amélioration de l'étanchéité à l'air.",
              "Contraintes de pose transmises à chaque entreprise partenaire concernée.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Résultat" title="Ce que cette méthode démontre, et ce qu'elle ne démontre pas">
        <div className="flex flex-col gap-8">
          <MqNumbered
            items={[
              {
                title: "Ce qu'elle démontre",
                text: "Une décision documentée peut être expliquée, discutée et, si nécessaire, révisée sans perdre le fil du projet.",
              },
              {
                title: "Ce qu'elle ne garantit pas",
                text: "Aucune méthode ne supprime tout aléa de chantier : un réseau caché, une donnée d'humidité imprévue ou un délai fournisseur peuvent survenir.",
              },
              {
                title: "Ce que cela change concrètement",
                text: "L'aléa devient un sujet d'arbitrage documenté plutôt qu'une décision improvisée prise sous pression le jour même.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur la méthode de pilotage">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-8 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
            les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque
            nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises
            concernées.
          </p>
        </div>
      </section>

      <MqSection kicker="Zone d'intervention" title="Où cette méthode est appliquée">
        <p className="text-muted t-sec leading-relaxed max-w-2xl">
          Le pilotage suppose des visites régulières sur le chantier. ARCHI PILOTE RÉNOVATION intervient donc en
          priorité dans les Hauts-de-Seine et, selon l&apos;ampleur et la technicité du projet, plus largement en
          Île-de-France.
        </p>
        <ul className="flex flex-col gap-2 mt-4">
          <li><Link href="/renovation-hauts-de-seine-92" className="text-orange-deep hover:underline t-sec">Rénovation dans les Hauts-de-Seine (92)</Link></li>
          <li><Link href="/renovation-ile-de-france" className="text-orange-deep hover:underline t-sec">La zone d&apos;intervention en Île-de-France</Link></li>
          <li><Link href="/services" className="text-orange-deep hover:underline t-sec">L&apos;index complet des prestations pilotées</Link></li>
          <li><Link href="/guides" className="text-orange-deep hover:underline t-sec">Les guides et articles classés par sujet</Link></li>
        </ul>
      </MqSection>

      <MqCta
        title="Faites cadrer votre projet en huit étapes"
        lead="Décrivez votre bien et vos objectifs : nous appliquons la méthode dès le premier rendez-vous."
      />

      <MqReadNext
        items={[
          { href: "/parcours-expertise", label: "Parcours & expertise", sub: "L'origine de la méthode de chiffrage" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Quand la méthode se durcit" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage existant" },
          { href: "/charte-qualite", label: "Charte qualité", sub: "Les engagements tenus sur le chantier" },
          { href: "/garanties-assurances", label: "Garanties & assurances", sub: "Décennale, réception, levée des réserves" },
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Qui intervient et sur quel périmètre" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="rf-wrap mq-mesure--large t-petit text-muted">
          <Link href="/gros-oeuvre-structure" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Voir l'application de cette méthode au gros œuvre et à la structure
          </Link>
          {" · "}
          <Link href="/contact" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Décrire mon projet
          </Link>
        </div>
      </section>
    </main>
  );
}
