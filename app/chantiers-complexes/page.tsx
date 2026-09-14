import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/chantiers-complexes" },
  title: "Chantiers complexes en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Un chantier devient complexe lorsqu'il combine une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux.",
};

const PHASES = [
  {
    title: "Diagnostic technique approfondi",
    text: "Lecture de la structure existante, des réseaux, de l'humidité et des désordres visibles, avec mobilisation d'un ingénieur structure partenaire si nécessaire.",
  },
  {
    title: "Étude de faisabilité et scénarios",
    text: "Plusieurs scénarios techniques et budgétaires sont chiffrés avant tout choix définitif, notamment sur les reprises de structure.",
  },
  {
    title: "Dossier réglementaire et copropriété",
    text: "Constitution du dossier technique destiné au syndic ou à l'urbanisme, préparation des pièces pour l'assemblée générale ou le permis.",
  },
  {
    title: "Phasage des travaux et de l'occupation",
    text: "Organisation du chantier en séquences compatibles avec un immeuble occupé : zones, horaires, nuisances et accès.",
  },
  {
    title: "Exécution pilotée et suivi des aléas",
    text: "Chaque aléa de structure ou de réseau caché est documenté, chiffré et validé avant exécution.",
  },
  {
    title: "Réception et clôture du dossier",
    text: "Contrôle contradictoire, levée des réserves et dossier complet remis au client et, si besoin, au syndic.",
  },
];

const FAQ = [
  {
    q: "Qu'est-ce qu'un chantier complexe selon votre méthode ?",
    a: "Un projet impliquant une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux, ou un aléa technique important comme une découverte de désordre caché.",
  },
  {
    q: "Qui intervient sur les questions de structure ?",
    a: "Un ingénieur structure partenaire indépendant, mobilisé sous sa propre responsabilité professionnelle, réalise les calculs nécessaires. Un architecte DPLG partenaire peut être associé lorsque le dossier l'exige, notamment pour un dépôt de permis.",
  },
  {
    q: "Comment gérez-vous un chantier dans un immeuble occupé ?",
    a: "Par un phasage écrit qui organise les zones de travail, les horaires compatibles avec la vie de l'immeuble, la gestion des nuisances et l'information préalable des occupants concernés.",
  },
  {
    q: "Que se passe-t-il si un aléa de structure est découvert en cours de chantier ?",
    a: "Les travaux sur la zone concernée sont suspendus, l'aléa est documenté par photo et par note technique, chiffré, puis soumis à validation du client avant toute reprise d'exécution.",
  },
  {
    q: "Faut-il l'accord du syndic pour un chantier lourd en copropriété ?",
    a: "Souvent oui, notamment si des parties communes ou l'aspect extérieur de l'immeuble sont concernés. Nous préparons le dossier technique et accompagnons les démarches auprès du syndic pour l'inscription à l'ordre du jour de l'assemblée générale.",
  },
  {
    q: "Un chantier complexe suit-il la même méthode que les autres projets ?",
    a: "Oui, les huit étapes de notre méthode s'appliquent, mais avec un formalisme renforcé : davantage de documents techniques, un phasage plus détaillé et une implication accrue des partenaires spécialisés.",
  },
];

export default function ChantiersComplexesPage() {
  return (
    <main>
      <MqHero
        kicker="Dossiers lourds"
        title="Piloter les chantiers complexes sans improviser"
        lead="Un chantier devient complexe lorsqu'il combine une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux ou un risque d'aléa technique important. Ces dossiers exigent un diagnostic approfondi, la mobilisation d'un ingénieur structure ou d'un architecte DPLG partenaire indépendant, un phasage précis et une gestion documentée de chaque imprévu, du premier relevé jusqu'à la levée des réserves."
      />

      {/*
        03/09 : les cinq visuels de cette page sont des schémas pédagogiques — chacun a été
        ouvert et confronté à son intitulé, aucun ne présente une pièce décorée sous un titre
        technique. En revanche, tous étaient affichés en aspect-[16/9] alors qu'ils sont
        nativement en 3/2 (1536×1024) ou 10/7 (1280×896) : le recadrage rognait le haut et le
        bas de chaque schéma, c'est-à-dire précisément le titre et les mentions de bas de page.
        Chaque figure reprend désormais son ratio natif et s'affiche en entier.
      */}
      <div className="rf-wrap mq-mesure--large pb-12 md:pb-16 mq-planche-ouverture">
        <MqFig entier
          src="/photos/pedagogie/10-chantiers-complexes-hero.jpeg"
          alt="Coupe d'un immeuble haussmannien occupé pendant des travaux lourds : mur porteur ouvert, réseaux déviés, protections de chantier, accord du syndic, phasage"
          caption="Anatomie d'un chantier complexe en immeuble occupé. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        kicker="Ce qui définit un dossier lourd"
        title="Structure, copropriété, occupation et aléas"
        lead="Quatre familles de contraintes distinguent un chantier complexe d'une rénovation courante : la stabilité du bâti, les règles de copropriété, la présence d'occupants pendant les travaux et la probabilité de découvertes imprévues."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Contraintes de structure</h3>
              <p className="text-ivoire/85 t-sec leading-relaxed font-medium">
                Ouverture de mur porteur, reprise en sous-œuvre, poutre, poteaux, descente de charges.
              </p>
              <p className="text-muted t-sec leading-relaxed">
                Chaque décision engage la stabilité de l'ouvrage. Un ingénieur structure partenaire indépendant réalise la note de calcul
                nécessaire avant toute exécution, sous sa propre responsabilité professionnelle. Le cas le plus fréquent est détaillé sur
                la page{" "}
                <Link href="/ouverture-mur-porteur" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                  ouverture de mur porteur et reprise de charge
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Contraintes de copropriété</h3>
              <p className="text-ivoire/85 t-sec leading-relaxed font-medium">
                Parties communes, façade, distribution des colonnes techniques, règlement de copropriété.
              </p>
              <p className="text-muted t-sec leading-relaxed">
                Le dossier technique doit être présenté au syndic et, souvent, voté en assemblée générale avant tout démarrage sur une partie
                commune ou un élément visible depuis l'extérieur de l'immeuble. La chronologie complète figure sur la page{" "}
                <Link href="/demarches-administratives-renovation" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                  démarches administratives : syndic, urbanisme, copropriété
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Immeuble occupé pendant les travaux</h3>
              <p className="text-ivoire/85 t-sec leading-relaxed font-medium">
                Voisins, locataires ou occupants du bien lui-même présents durant tout ou partie du chantier.
              </p>
              <p className="text-muted t-sec leading-relaxed">
                Le phasage doit limiter les nuisances, organiser les accès et prévoir une information préalable claire des personnes
                concernées par les zones de travail successives.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Aléas techniques probables</h3>
              <p className="text-ivoire/85 t-sec leading-relaxed font-medium">
                Réseau caché, désordre non visible au diagnostic initial, matériau amianté à traiter.
              </p>
              <p className="text-muted t-sec leading-relaxed">
                Sur un bâti ancien, une part d'incertitude subsiste malgré un diagnostic approfondi. La méthode consiste à documenter chaque
                découverte pour la transformer en décision, pas en improvisation.
              </p>
            </div>
          </div>
          <MqFig entier
            src="/photos/maquette/schema-carottage-ventilation.jpg"
            alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
            caption="Schéma pédagogique : carottage d'un mur de façade pour ventilation — carotteuse sur bâti, percement Ø 160 mm, gaine et bouche d'extraction. Le schéma rappelle lui-même que l'accord préalable du syndic est requis en copropriété."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Expertise mobilisée" title="Architecte DPLG et ingénieur structure, chacun dans son périmètre">
        <div className="flex flex-col gap-8">
          <MqFig entier
            src="/photos/pedagogie/45-chantiers-complexes-roles-dplg-ingenieur.jpeg"
            alt="Schéma en deux colonnes : Architecte DPLG (conception, dépôt de permis, urbanisme) et Ingénieur structure (note de calcul, descente de charges, dimensionnement)"
            caption="Répartition des rôles : conception côté architecte, calcul côté ingénieur structure. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Ingénieur structure partenaire</h3>
              <p className="text-muted t-sec leading-relaxed">
                Note de calcul, descente de charges, dimensionnement des reprises, sous sa propre responsabilité professionnelle.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Architecte DPLG partenaire</h3>
              <p className="text-muted t-sec leading-relaxed">
                Dépôt de permis, conception d'ensemble et interface avec les règles d'urbanisme lorsque le dossier l'exige.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Géotechnicien partenaire — Geo2Mo</h3>
              <p className="text-muted t-sec leading-relaxed">
                Études de sols et diagnostics de fondation pour les reprises structurelles, extensions et surélévations. Sérieux, réactivité
                et échanges réguliers pour valider les décisions techniques complexes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Entreprises partenaires spécialisées</h3>
              <p className="text-muted t-sec leading-relaxed">
                Gros œuvre, désamiantage ou reprise en sous-œuvre confiés à des entreprises qualifiées et assurées pour ce type
                d'intervention.
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqDark kicker="Phasage" title="Comment un dossier lourd est séquencé, étape par étape">
        <div className="mb-10">
          <MqFig entier
            src="/photos/pedagogie/11-chantiers-complexes-frise.jpeg"
            alt="Frise en 9 étapes : diagnostic, sondage, calcul, autorisation, étaiement, ouverture, structure, contrôle, finitions"
            caption="Séquence d'une intervention structurelle complexe. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
        <MqDarkSteps steps={PHASES} />
      </MqDark>

      <MqSection kicker="Gestion des aléas" title="Ce que documenter un aléa change concrètement">
        <div className="flex flex-col gap-8">
          <MqFig entier
            src="/photos/pedagogie/40-chantiers-complexes-aleas-schema.jpeg"
            alt="Les 4 étapes de gestion d'un aléa de chantier : suspension de la zone, photo datée, validation écrite du client, chiffrage de la reprise"
            caption="Ce que documenter un aléa change concrètement. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
          <MqChecklist
            items={[
              "Suspension de la zone concernée dès la découverte d'un désordre imprévu.",
              "Photo datée et note technique transmises immédiatement au client.",
              "Chiffrage de la reprise nécessaire avant toute exécution.",
              "Validation écrite du client avant reprise du chantier.",
              "Mise à jour du planning et information des occupants si nécessaire.",
              "Archivage de l'incident dans le dossier de fin de chantier.",
            ]}
          />
          <p className="text-muted t-sec leading-relaxed max-w-2xl">
            Le chiffrage d'une reprise se lit comme n'importe quel devis de travaux : la page{" "}
            <Link href="/clinique-du-devis" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              clinique du devis
            </Link>{" "}
            détaille les lignes à contrôler avant de valider une somme en cours de chantier.
          </p>
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur les dossiers lourds">
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

      <MqCta
        title="Faites analyser la complexité réelle de votre projet"
        lead="Structure, copropriété ou immeuble occupé : nous évaluons le niveau de complexité avant tout chiffrage."
      />

      <MqReadNext
        items={[
          { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur", sub: "Étaiement, note de calcul, reprise de charge" },
          { href: "/blog/ouvrir-mur-porteur-copropriete-assemblee", label: "Ouvrir un mur porteur en copropriété : les pièces avant l'assemblée", sub: "Ce que le syndic attend dans le dossier" },
          { href: "/blog/vivre-dans-l-immeuble-pendant-les-travaux", label: "Vivre dans l'immeuble pendant les travaux", sub: "Protections, horaires et voisinage" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/parcours-expertise", label: "Parcours & expertise", sub: "Architectes DPLG et ingénieurs structure" },
          { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France", sub: "Notre zone d'intervention pour les dossiers lourds" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="rf-wrap mq-mesure--large t-petit text-muted">
          <Link href="/notre-methode" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Voir les huit étapes appliquées aux dossiers lourds
          </Link>
          {" · "}
          <Link href="/charte-qualite" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Charte qualité et contrôles de chantier
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
