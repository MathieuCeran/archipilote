import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/parcours-expertise" },
  title: "Parcours & expertise rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Avant de structurer des projets pour particuliers et professionnels, cette méthode s'est construite au contact de foncières, de marchands de biens et d'agences immobilières.",
};

const FAQ = [
  {
    q: "ARCHI PILOTE RÉNOVATION est-il un cabinet d'architecture ?",
    a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Lorsque le dossier l'exige, un architecte DPLG ou un ingénieur structure partenaire indépendant intervient sous sa propre responsabilité professionnelle. Les travaux sont exécutés et facturés par les entreprises partenaires contractantes.",
  },
  {
    q: "D'où vient la méthode de lecture des devis ?",
    a: "Elle s'est construite au contact du secteur des foncières, des marchands de biens et des agences immobilières, dans des dossiers où un mauvais chiffrage pouvait bloquer une décision d'acquisition ou de cession.",
  },
  {
    q: "Comment vérifier la compétence d'un interlocuteur en rénovation ?",
    a: "Trois critères concrets : un auteur identifié et joignable, une expérience démontrée sur des dossiers comparables au vôtre, et des sources vérifiables — devis analysés, réalisations documentées, partenaires nommés et leurs qualifications.",
  },
  {
    q: "Travaillez-vous avec des architectes DPLG sur tous les projets ?",
    a: "Non, uniquement lorsque le dossier l'exige : dépôt de permis, reprise de structure, extension, surélévation ou exigence du règlement de copropriété. Sur les projets plus simples, notre équipe pilote directement avec les entreprises partenaires contractantes.",
  },
  {
    q: "Cette expertise s'applique-t-elle aux professionnels et pas seulement aux particuliers ?",
    a: "Oui. La méthode d'origine s'adresse aussi bien aux investisseurs et bailleurs qu'aux propriétaires occupants, avec la même exigence de lecture des coûts et la même transparence sur le rôle de chaque intervenant.",
  },
  {
    q: "Comment savoir si le chiffrage remis pour mon projet est fiable ?",
    a: "En le confrontant ligne à ligne à ce qu'il est censé couvrir : quantités, hypothèses, exclusions et cohérence entre lots. C'est précisément l'objet de notre clinique du devis, accessible avant tout engagement.",
  },
];

export default function ParcoursExpertisePage() {
  return (
    <main>
      <MqHero
        kicker="Expertise et parcours"
        title="Une expertise construite dans l'analyse des coûts"
        lead="Avant de structurer des projets pour particuliers et professionnels, cette méthode s'est construite au contact de foncières, de marchands de biens et d'agences immobilières, sur des dossiers où un mauvais chiffrage pouvait bloquer une décision d'acquisition. Le point commun : lire les devis, identifier les écarts, comprendre les postes réellement nécessaires et remettre les coûts dans un ordre cohérent avant toute négociation."
      />

      <MqSection
        kicker="Un parcours d'ancien expert en chiffrage"
        title="Décortiquer avant de négocier"
        lead="Réduire un prix sans comprendre le devis est une mauvaise méthode. Il faut d'abord identifier ce qui est inclus, ce qui manque, ce qui se répète et ce qui dépend d'une hypothèse. Cette lecture permet ensuite de discuter sur des faits, pas sur des impressions."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <h3 className="display t-fort text-ivoire">Le secteur des foncières comme école de rigueur</h3>
            <p>Un chiffrage d'acquisition ou de cession ne tolère pas l'approximation : chaque poste engage une décision d'investissement.</p>
            <p>
              Dans une foncière, un chiffrage erroné se répercute directement sur la rentabilité d'un actif. Cette contrainte impose une
              lecture méthodique : vérifier les quantités annoncées, comparer les prix unitaires aux référentiels du marché, repérer les
              prestations absentes et signaler les hypothèses non écrites qui peuvent faire dériver un budget.
            </p>
            <p>
              Cette discipline s'applique désormais aux projets de rénovation des particuliers et des professionnels accompagnés par ARCHI
              PILOTE RÉNOVATION, avec les mêmes réflexes de vérification.
            </p>
          </MqProse>
          <MqFig entier
            src="/photos/pedagogie/27-parcours-devis-breakdown.jpeg"
            alt="Décomposition d'une ligne de devis en six blocs : quantité, unité, fourniture, pose, hypothèse, exclusion"
            caption="Décomposition pédagogique d'une ligne de devis de travaux. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
          <MqProse>
            <h3 className="display t-fort text-ivoire">Transformer cette méthode pour les particuliers</h3>
            <p>Un particulier n'a pas besoin d'un discours de professionnel : il a besoin d'un projet lisible.</p>
            <p>
              Notre rôle consiste à traduire les enjeux techniques en décisions concrètes : conserver, remplacer, déplacer, renforcer,
              isoler, différer ou supprimer un poste. Cette traduction évite au client de subir un vocabulaire technique sans en comprendre
              les conséquences budgétaires.
            </p>
          </MqProse>
          <MqFig entier
            src="/photos/pedagogie/02-transformer-methode.jpeg"
            alt="Schéma pédagogique : un enjeu technique de devis se traduit en sept décisions concrètes — conserver, remplacer, déplacer, renforcer, isoler, différer, supprimer"
            caption="Schéma pédagogique : chaque enjeu technique du devis se traduit en une décision concrète et arbitrable."
            ratio="aspect-[3/2]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Culture du coût total" title="Le poste le moins cher n'est pas toujours la solution la moins chère">
        <div className="flex flex-col gap-8">
          {/* 05/09 — EMPLACEMENT RETIRÉ. Le fichier affiché ici était schema-deperditions.jpg,
              c'est-à-dire l'infographie « DÉPERDITIONS THERMIQUES — logement classé passoire
              énergétique » (30 % par le toit, 20 % par les murs, etc.). Sa légende annonçait
              « un poste isolé mal séquencé peut faire refaire un autre ouvrage : l'ordre des
              travaux compte autant que leur prix unitaire » — un propos qui ne figure nulle part
              dans l'image et qui ne décrit rien de ce que le lecteur voit. Le schéma était de
              surcroît déjà affiché sur /renovation-energetique et /extension-maison, où il est à
              sa place. Aucun schéma de SÉQUENCEMENT n'existe dans la photothèque : l'emplacement
              est laissé vide et inscrit dans docs/EMPLACEMENTS-PHOTO-A-POURVOIR.md plutôt que
              rempli par une image hors sujet. */}
          <MqProse>
            <p>
              Une mauvaise séquence peut faire refaire un ouvrage déjà terminé. Une économie sur l'étanchéité peut coûter plusieurs fois son
              montant en désordres ultérieurs. Une menuiserie mal anticipée peut bloquer les finitions et immobiliser une équipe.
            </p>
            <p>
              Notre lecture des devis intègre systématiquement ces effets de bord : un poste n'est jamais évalué isolément, mais en fonction
              de sa place dans l'ensemble du chantier et de ses interactions avec les lots voisins.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Le réseau de compétences"
        title="Un réseau, pas une entreprise unique"
        lead="ARCHI PILOTE RÉNOVATION s'appuie, selon les besoins, sur des entreprises partenaires contractantes et des professionnels indépendants. Le choix dépend de la nature du projet, des assurances requises, des compétences nécessaires et des disponibilités réelles."
      >
        <div className="mb-10">
          <MqFig entier
            src="/photos/pedagogie/28-parcours-reseau-roles.jpeg"
            alt="Réseau de rôles : Client au centre, relié à ARCHI PILOTE RÉNOVATION (pilotage), Entreprise partenaire, Architecte DPLG et Ingénieur structure"
            caption="Rôles et responsabilités des intervenants d'un projet de rénovation. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Architectes DPLG partenaires</h3>
            <p className="text-muted t-sec leading-relaxed">
              Mobilisés pour les dossiers lourds : dépôt de permis, extension, surélévation ou exigences architecturales spécifiques, sous
              leur propre responsabilité professionnelle.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Ingénieurs structure partenaires</h3>
            <p className="text-muted t-sec leading-relaxed">
              Calcul de descente de charges, note de calcul pour ouverture de mur porteur ou reprise en sous-œuvre, indépendants et engagés
              sur leur mission.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Géotechnicien partenaire — Geo2Mo</h3>
            <p className="text-muted t-sec leading-relaxed">
              Études de sols et diagnostics de fondation indispensables aux reprises structurelles, extensions et surélévations. Sérieux,
              réactivité et échanges réguliers pour valider les hypothèses techniques.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Entreprises partenaires contractantes</h3>
            <p className="text-muted t-sec leading-relaxed">
              Sélectionnées selon leurs assurances, leurs références et leur adéquation au projet ; elles exécutent et facturent les travaux
              qui leur sont confiés.
            </p>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Critères de compétence"
        title="Comment vérifier qui vous accompagne"
        lead="La confiance ne doit pas reposer sur des slogans mais sur des critères vérifiables. Voici ceux que nous appliquons à notre propre organisation et que nous recommandons d'exiger de tout interlocuteur de chantier."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border border-line bg-surface rounded-none p-6 sm:p-8">
            <div className="shrink-0 w-40 sm:w-48 aspect-[3/4] border border-orange-deep/30 rounded-none overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/equipe/ilann-atlan.jpg"
                alt="Ilann Atlan, votre interlocuteur ARCHI PILOTE RÉNOVATION"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-1 mq-mention">Votre interlocuteur</p>
              <h3 className="display t-titre text-ivoire">Ilann Atlan</h3>
              <p className="mt-3 text-muted t-sec leading-relaxed max-w-xl">
                C&apos;est lui qui pilote votre dossier, du premier rendez-vous à la réception des travaux : un interlocuteur identifié et
                joignable, qui porte personnellement le suivi de votre projet plutôt qu&apos;une adresse générique.
              </p>
            </div>
          </div>
          <MqChecklist
            items={[
              "Un auteur identifié et joignable, pas une adresse générique anonyme.",
              "Une expérience démontrée sur des projets comparables au vôtre en taille et en complexité.",
              "Des sources vérifiables : devis analysés, réalisations datées, documents transmis.",
              "Des partenaires nommés avec leurs qualifications et leurs assurances.",
              "Une séparation claire entre pilotage, accompagnement et exécution des travaux.",
              "Une trace écrite de chaque décision, disponible à tout moment du projet.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur l'expertise et le parcours">
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
        title="Faites lire votre devis par un ancien expert en chiffrage"
        lead="Transmettez votre devis ou votre projet : nous identifions les écarts avant tout engagement."
      />

      <MqReadNext
        items={[
          { href: "/notre-methode", label: "Notre méthode", sub: "Les huit étapes du pilotage" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Qui facture quoi, poste par poste" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Structure, copropriété, immeuble occupé" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="rf-wrap mq-mesure--large t-petit text-muted">
          <Link href="/clinique-du-devis" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Faire analyser un devis existant
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
