import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/demarches-administratives-renovation" },
  title: "Démarches administratives de la rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Déclaration préalable, permis de construire, copropriété, assemblée générale, dossier syndic pour la ventilation : repères génériques pour orienter votre projet.",
};

const ARBRE_AUTORISATIONS = [
  {
    title: "Intérieur privatif",
    body: "Généralement aucune autorisation d'urbanisme n'est nécessaire, sauf en secteur protégé.",
  },
  {
    title: "Partie commune",
    body: "Accord du syndic, avec vote en assemblée générale si le sujet le nécessite.",
  },
  {
    title: "Façade",
    body: "Déclaration préalable de travaux, et accord de la copropriété si la façade est une partie commune.",
  },
  {
    title: "Structure",
    body: "Avis technique et accord du syndic dès qu'une partie commune ou une dalle est concernée.",
  },
  {
    title: "Extension",
    body: "Permis de construire au-delà de certains seuils de surface, selon le plan local d'urbanisme.",
  },
  {
    title: "Surélévation",
    body: "Permis de construire, avec reprise des charges jusqu'aux fondations et accord de la copropriété si la structure de l'immeuble est concernée.",
  },
];

const AUTORISATIONS = [
  {
    title: "Déclaration préalable de travaux",
    resume: "Autorisation simplifiée pour les projets limités.",
    body: "Requise pour certains travaux modifiant l'aspect extérieur ou créant une surface de plancher limitée. Le dossier est déposé en mairie.",
  },
  {
    title: "Permis de construire",
    resume: "Autorisation complète pour les projets d'ampleur.",
    body: "Nécessaire au-delà de certains seuils de surface, notamment pour une extension ou une surélévation. L'instruction dépend du plan local d'urbanisme.",
  },
  {
    title: "Secteur protégé",
    resume: "Des règles renforcées peuvent s'appliquer.",
    body: "Aux abords d'un monument historique ou dans un site patrimonial, des règles complémentaires peuvent conditionner la nature des travaux autorisés.",
  },
];

const ETAPES_SYNDIC = [
  {
    title: "Identifier la nature exacte de l'intervention",
    text: "Vérifier si le projet touche une partie commune (gaine de ventilation, réseau collectif, façade) ou reste strictement privatif.",
  },
  {
    title: "Consulter le règlement de copropriété",
    text: "Relire les clauses concernant les parties communes et les travaux affectant l'aspect ou le fonctionnement de l'immeuble.",
  },
  {
    title: "Constituer un dossier technique",
    text: "Rassembler un descriptif de l'intervention, un schéma ou un plan, et si nécessaire l'avis d'un professionnel compétent sur l'état de la ventilation ou du réseau concerné.",
  },
  {
    title: "Transmettre le dossier au syndic",
    text: "Adresser le dossier au syndic par écrit, en demandant son inscription à l'ordre du jour de la prochaine assemblée générale si un vote est nécessaire.",
  },
  {
    title: "Présenter le dossier en assemblée générale",
    text: "Si le sujet nécessite un vote (par exemple une intervention sur une VMC collective défaillante), présenter le dossier aux copropriétaires avec les éléments techniques réunis.",
  },
  {
    title: "Suivre la décision et les suites",
    text: "Une fois la décision votée, organiser le passage des entreprises partenaires et informer le voisinage concerné du calendrier d'intervention.",
  },
];

const FAQ = [
  {
    q: "Faut-il toujours une déclaration préalable pour des travaux intérieurs ?",
    a: "Non. Les travaux strictement intérieurs qui ne modifient ni l'aspect extérieur ni la surface de plancher ne nécessitent généralement pas d'autorisation d'urbanisme, sauf en secteur protégé.",
  },
  {
    q: "Quand un permis de construire est-il nécessaire ?",
    a: "Un permis de construire est généralement requis au-delà de certains seuils de surface créée, notamment pour une extension ou une surélévation. Le seuil exact dépend du projet et de la zone d'urbanisme.",
  },
  {
    q: "Le syndic peut-il refuser un dossier de ventilation défaillante ?",
    a: "Le syndic transmet le dossier à l'assemblée générale qui vote. Un dossier technique complet et argumenté facilite l'instruction et la décision des copropriétaires.",
  },
  {
    q: "Un carottage traversant une dalle nécessite-t-il un accord ?",
    a: "Si la dalle est une partie commune ou si le carottage affecte la structure, une information au syndic, voire une autorisation en assemblée générale, est généralement nécessaire avant intervention.",
  },
  {
    q: "Comment limiter les nuisances de voisinage pendant le chantier ?",
    a: "Une information préalable des voisins, le respect des horaires autorisés et une planification des interventions bruyantes limitent les tensions et les réclamations.",
  },
  {
    q: "Ces informations remplacent-elles un conseil juridique ?",
    a: "Non. Ces éléments restent génériques et prudents. Chaque projet doit être vérifié au regard du règlement de copropriété, du code de la construction et, si nécessaire, d'un professionnel compétent.",
  },
];

export default function DemarchesAdministrativesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Démarches administratives"
        title="Identifier les validations possibles avant de lancer un projet"
        lead="Selon la nature du projet, une déclaration préalable, un permis de construire ou une autorisation de la copropriété peuvent être nécessaires. Cette page présente des repères génériques et prudents pour orienter la réflexion : ils ne remplacent jamais l'avis d'un professionnel compétent sur un dossier précis."
      />

      {/*
        Visuel 1 (hero) — infographie déterministe, pas une image générée.
        Arbre simple : la nature des travaux détermine le niveau d'autorisation.
      */}
      <section className="pb-8 md:pb-12">
        <div className="rf-wrap mq-mesure--large">
          <div className="flex flex-col gap-3">
            <div
              role="img"
              aria-label="Autorisations possibles selon la nature des travaux de rénovation."
              className="flex flex-col items-center"
            >
              <div className="border border-line rounded-none bg-surface px-5 py-3 text-center">
                <span className="text-ivoire font-semibold t-sec">Nature des travaux envisagés</span>
              </div>
              <div className="w-px h-6 bg-line" aria-hidden />
              <div className="w-full h-px bg-line" aria-hidden />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 w-full pt-6">
                {ARBRE_AUTORISATIONS.map((a) => (
                  <div key={a.title} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-px h-4 bg-line" aria-hidden />
                    <div className="flex flex-col gap-1.5 border border-line rounded-none bg-surface p-4 w-full">
                      <span className="mq-mention mq-mention--accent">{a.title}</span>
                      <p className="t-petit text-ivoire/85 leading-relaxed">{a.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted t-petit leading-relaxed max-w-2xl">
              {"Six familles de travaux, du strictement privatif à la surélévation, chacune avec le niveau d'autorisation qui lui est généralement associé."}
            </p>
          </div>
        </div>
      </section>

      <MqSection
        title="Autorisations d'urbanisme"
        lead="Le seuil d'autorisation dépend de la surface créée et de la zone d'urbanisme."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-extension-surelevation.jpg"
            alt="Coupe technique d'une maison avec extension de plain-pied et surélévation, reprise de charges et chaînage"
            caption="Extension et surélévation : reprise des charges jusqu'aux fondations, chaînage et raccords d'étanchéité entre l'existant et le neuf."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {AUTORISATIONS.map((a) => (
              <div key={a.title} className="flex flex-col gap-2">
                <h3 className="display t-haut text-ivoire">{a.title}</h3>
                <p className="text-muted t-sec leading-relaxed">{a.resume}</p>
                <p className="t-sec text-ivoire/85 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Copropriété et assemblée générale"
        lead="Les parties communes relèvent d'une décision collective."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-demarches-copropriete.jpg"
            alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie"
            caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire."
          />

          <MqFig
            src="/photos/pedagogie/26-demarches-copropriete.jpeg"
            alt="Chronologie en 6 étapes d'une demande d'autorisation en copropriété : préparation, inscription, assemblée générale, accord, affichage, travaux"
            caption="Étapes d'une demande d'autorisation en copropriété. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />

          <MqChecklist
            cols={1}
            items={[
              "Le règlement de copropriété doit être consulté avant tout projet touchant les communs",
              "Les travaux sur façade, toiture ou réseaux collectifs nécessitent généralement un vote en assemblée générale",
              "Le syndic transmet le dossier technique aux copropriétaires pour instruction",
              "Un dossier complet (descriptif, plan, avis technique) facilite la décision",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Dossier au syndic pour une ventilation absente ou défaillante"
        lead="Procédure détaillée, étape par étape."
      >
        {/*
          Visuel 3 — limitation honnête. Le cahier des charges demande ici une photo
          RÉELLE anonymisée montrant la composition d'un dossier technique transmis au
          syndic (sommaire, plan, notice, assurance, devis), alt prévu :
          "Composition d'un dossier technique transmis au syndic."
          Aucun candidat honnête dans /public/photos/chantiers/ : ce dossier ne contient
          que des photos de chantier (cuisines, dressings, démolition, façades, escaliers,
          plomberie, charpente...), aucune ne montre un document, un plan papier, une
          notice ou un devis. Faute d'une vraie photo disponible, aucune image n'est
          insérée ici plutôt que d'en fabriquer une fausse. Il faudra qu'une vraie photo
          anonymisée d'un dossier technique (chantier réel) soit fournie avant de compléter
          cette section, suivie du pattern <MqFig> déjà en place ailleurs sur cette page.
        */}
        <MqNumbered items={ETAPES_SYNDIC} />
      </MqSection>

      <MqSection
        title="Carottage et traversée de parties communes"
        lead="Une intervention structurelle sur du commun se prépare en amont."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-carottage-ventilation.jpg"
            alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
            caption="Carottage de façade pour ventilation : diamètre, gaine et bouche d'extraction, avec accord préalable du syndic lorsque la façade est concernée."
          />
          <MqProse>
            <p>
              {"Un carottage ou une traversée de dalle qui touche une partie commune doit être signalé au syndic. Selon l'ampleur, une simple information suffit ou un vote en assemblée générale est nécessaire. Un avis technique sur la nature de la dalle est recommandé avant toute intervention."}
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection title="Voisinage et nuisances" lead="Anticiper limite les tensions pendant le chantier.">
        {/* 05/09 — EMPLACEMENT PHOTO VOLONTAIREMENT LAISSÉ VIDE.
            chDemolitionCloisonBoisPlatre a été retirée : cette prise de vue était affichée
            sur cinq pages (cf. scripts/surexposition.py) et a été ramenée aux deux où elle
            est la plus justifiée. Aucune photo de la photothèque ne peut la remplacer ici
            sans redevenir un doublon : les quatre seules scènes de démolition disponibles
            sont déjà employées deux à trois fois chacune ailleurs.
            Aucun substitut n'a été forcé — mettre une photo hors sujet (la photothèque
            contient surtout de la menuiserie) aurait été pire que pas de photo.
            À POURVOIR avec les photos que le client doit fournir. Le sujet exact attendu
            par cette section n'est d'ailleurs pas la démolition mais le VOISINAGE :
            protections des parties communes, escalier bâché, affichage d'information dans
            le hall, benne ou zone de stockage sur la voirie.
            Cf. docs/EMPLACEMENTS-PHOTO-A-POURVOIR.md */}
        <MqChecklist
          cols={1}
          items={[
            "Informer le voisinage avant le démarrage des travaux bruyants",
            "Respecter les horaires de chantier fixés par la commune ou le règlement de copropriété",
            "Protéger les parties communes utilisées pour l'accès au chantier",
            "Prévoir un interlocuteur identifié en cas de réclamation",
          ]}
        />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqSection title="Questions fréquentes">
        <MqFaq items={FAQ} />
      </MqSection>

      <MqCta
        title="Décrivez votre projet, nous le structurons"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste."
      />

      <MqReadNext
        items={[
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Architectes et ingénieurs partenaires" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Ventilation et isolation" },
          { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Comprendre le vocabulaire administratif" },
        ]}
      />
    </main>
  );
}
