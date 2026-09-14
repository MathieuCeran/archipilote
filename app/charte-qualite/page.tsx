import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Charte qualité rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Huit engagements vérifiables appliqués sur chaque projet piloté : devis lu ligne à ligne, assurances contrôlées, interfaces formalisées, points de réception documentés.",
  alternates: { canonical: "/charte-qualite" },
};


export default function Page() {
  return (
    <main>
      <MqHero kicker="Charte qualité" title="Des engagements vérifiables, pas des promesses" lead="Une charte qualité n'a de valeur que si chaque engagement peut être vérifié : un document contrôlé, un point de réception réalisé, une réserve levée et constatée. Cette page détaille les huit engagements appliqués sur chaque projet piloté, les documents exigés des entreprises partenaires contractantes avant tout démarrage, et les points de réception qui protègent le client à chaque étape sensible du chantier." />

      <MqSection kicker="Pourquoi une charte" title="Une charte sert à distinguer l'engagement du slogan" wide>
        <MqProse>
          <p>Beaucoup d&apos;acteurs du bâtiment promettent le sérieux et la qualité. Notre charte se veut vérifiable : chaque engagement correspond à un document, une action datée ou un contrôle réalisable par le client lui-même.</p>
          <h3 className="display t-haut text-ivoire mt-2">Un contrôle en amont, pas seulement en fin de chantier</h3>
          <p className="font-medium text-ivoire/90">La qualité se joue majoritairement avant le premier coup de perceuse.</p>
          <p>
            Vérifier les assurances d&apos;une entreprise, formaliser les interfaces entre lots et détailler un chiffrage
            évitent une grande partie des désordres qui apparaissent habituellement en fin de chantier, lorsqu&apos;il est
            trop tard pour les corriger simplement.
          </p>
        </MqProse>
        {/* Visuel 1 (hero) — remplace hero-renovation.jpg : ce fichier est un salon haussmannien meublé (photo de déco générique réutilisée sur plusieurs pages du site), sans aucun rapport avec un contrôle de réception. Aucune vraie photo de "fiche de réserves + niveau + documents d'assurance anonymisés" n'existe dans /photos/chantiers/ ni /photos/maquette/ (ce fonds ne contient que des photos de chantier technique — menuiserie, gros œuvre, réseaux — jamais de scène de bureau/paperasse). En attendant une vraie photo de réception avec documents, on utilise la photo réelle la plus honnête disponible : un contrôle technique avant fermeture, cohérent avec le propos de la page ("photos datées", "document écrit"). LIMITATION : commander une vraie photo de réception (fiche de réserves en main, niveau, attestations anonymisées) pour remplacer ce visuel de transition. */}
        <div className="mt-6"><MqFig src="/photos/pedagogie/42-charte-qualite-hero.jpeg" alt="Charte qualité avec engagements cochés, à côté d'un rapport de contrôle daté avec photos de chantier" caption="Chaque engagement correspond à un document, une action datée ou un contrôle vérifiable par le client lui-même." /></div>
      </MqSection>

      <MqSection kicker="Nos huit engagements" title="Ce que nous appliquons sur chaque projet piloté" wide>
        <MqNumbered items={[
          { title: "Devis lu ligne à ligne avant validation", text: "Aucun chiffrage n'est transmis au client sans vérification des quantités, hypothèses et exclusions." },
          { title: "Documents d'assurance vérifiés avant démarrage", text: "Attestation décennale et responsabilité civile professionnelle contrôlées pour chaque entreprise partenaire mobilisée." },
          { title: "Interfaces entre lots formalisées par écrit", text: "Un tableau des interfaces techniques est établi avant le premier coup de marteau." },
          { title: "Suivi quotidien par photos datées", text: "Transmission des photos de chantier sur WhatsApp, jour après jour, sans interruption non justifiée." },
          { title: "Points de réception documentés", text: "Chaque réception de lot fait l'objet d'un contrôle contradictoire et d'une liste de réserves écrite." },
          { title: "Dossier de fin de chantier complet", text: "Attestations, garanties, notices et factures réunis dans un dossier unique remis au client." },
          { title: "Séparation des missions et de la facturation", text: "Pilotage, accompagnement et travaux exécutés restent facturés séparément, sans confusion des rôles." },
          { title: "Réponse écrite à toute réserve signalée", text: "Chaque réserve fait l'objet d'un suivi jusqu'à sa levée effective, constatée par écrit." },
        ]} />
      </MqSection>

      <MqSection kicker="Documents exigés" title="Ce que nous demandons systématiquement aux entreprises partenaires" lead="Avant toute mobilisation sur un chantier piloté, chaque entreprise partenaire contractante doit transmettre un ensemble de documents permettant de vérifier son existence légale, ses assurances et ses références.">
        <MqChecklist cols={1} items={[
          "Attestation d'assurance décennale en cours de validité.",
          "Attestation de responsabilité civile professionnelle.",
          "Extrait Kbis ou équivalent pour vérifier l'existence légale de l'entreprise.",
          "Références de chantiers comparables réalisés récemment.",
          "Devis détaillé conforme au format exigé par notre méthode de chiffrage.",
          "Qualifications professionnelles pertinentes selon le lot concerné.",
        ]} />
      </MqSection>

      <MqSection kicker="Points de réception" title="Les contrôles réalisés à chaque étape sensible" wide>
        <div className="mb-10">
          <MqFig
            src="/photos/pedagogie/17-charte-qualite-jalons.jpeg"
            alt="Cinq jalons de contrôle qualité pendant une rénovation : avant travaux, avant fermeture, avant revêtement, essais, réception"
            caption="Cinq jalons de contrôle qualité pendant une rénovation. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />
        </div>
        <div className="mt-8"><MqNumbered cols={2} items={[
          { title: "Réception des lots de structure et de gros œuvre", text: "Contrôle de la conformité aux plans, des appuis, des niveaux et de l'absence de désordre visible avant fermeture des ouvrages." },
          { title: "Réception des réseaux avant fermeture", text: "Vérification électrique, plomberie et ventilation avant la pose des cloisons ou des revêtements qui les recouvriraient." },
          { title: "Réception intermédiaire des lots techniques", text: "Isolation, étanchéité à l'air et menuiseries contrôlées avant les finitions, car une non-conformité y est plus coûteuse à corriger ensuite." },
          { title: "Réception finale et levée des réserves", text: "Procès-verbal contradictoire, liste des réserves datée et suivi jusqu'à leur levée effective, documentée par photo." },
        ]} /></div>
      </MqSection>

      <MqSection kicker="Ce que cela change" title="Une charte vérifiable réduit le nombre de litiges, elle ne les supprime pas" wide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="display t-base text-ivoire">Ce que la charte démontre</h3><p className="text-muted t-sec mt-2 leading-relaxed">Un cadre de contrôle documenté à chaque étape, opposable en cas de désaccord.</p></div>
          <div><h3 className="display t-base text-ivoire">Ce qu&apos;elle ne garantit pas</h3><p className="text-muted t-sec mt-2 leading-relaxed">L&apos;absence totale d&apos;aléa technique, toujours possible sur un bâtiment existant.</p></div>
          <div><h3 className="display t-base text-ivoire">Ce que le client y gagne</h3><p className="text-muted t-sec mt-2 leading-relaxed">Une traçabilité complète, du choix de l&apos;entreprise partenaire à la levée de la dernière réserve.</p></div>
        </div>
      </MqSection>

      <MqSection kicker="Avant livraison" title="Quatre points de détail vérifiés avant réception" wide>
        {/* 05/09 — LES QUATRE PHOTOS DE CHANTIER SONT REMPLACÉES PAR LES QUATRE SCHÉMAS
            FOURNIS PAR LE CLIENT (Ilann Atlan, 04/09 au soir, un envoi par détail).
            Pourquoi le changement : les photos précédentes montraient bien chacune leur
            ouvrage, mais elles ne montraient pas CE QUI EST CONTRÔLÉ dessus. Un lecteur
            voyait une douche verte, un tableau dans un placard, deux portes — sans savoir
            ce que l'œil du pilote y cherche. Les schémas nomment les points observés.
            Format : 3:2, affichés en entier (`entier`) et non recadrés — ils portent leur
            titre en haut et leur signature en bas, un recadrage les décapiterait.
            Honnêteté : ce sont des dessins, pas des preuves de chantier. Ils ne portent
            donc PAS la mention « Chantier réel des équipes partenaires », et la note sous
            la grille dit explicitement ce qu'ils sont. Les preuves photographiques réelles
            restent portées par la galerie de /realisations et la section « L'ouvrage caché ». */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig entier ratio="aspect-[3/2]" src="/photos/pedagogie/schema-detail-1-etancheite-avant-carrelage.jpg" alt="Schéma d'une douche en coupe avant carrelage : continuité de l'étanchéité entre murs et sol, bandes de renfort dans les angles, manchettes aux traversées, pente vers l'évacuation et liaison étanche avec le siphon" caption="Détail 1 — étanchéité avant carrelage : continuité murs et sol, angles et raccords renforcés, traversées traitées, siphon intégré au système." />
          <MqFig entier ratio="aspect-[3/2]" src="/photos/pedagogie/schema-detail-2-tableau-electrique-accessible.jpg" alt="Schéma d'un tableau électrique intégré dans un placard sur mesure, portes ouvertes : accès dégagé sur toute la hauteur, circuits repérés, protections identifiées" caption="Détail 2 — tableau électrique accessible : accès maintenu après finition, porte entièrement ouvrable, circuits repérés. Les vérifications électriques sont réalisées par l'entreprise qualifiée." />
          <MqFig entier ratio="aspect-[3/2]" src="/photos/pedagogie/schema-detail-3-menuiseries-reglees.jpg" alt="Schéma de deux portes intérieures avec contrôle à la règle laser : aplomb, jeux réguliers autour de l'ouvrant, quincaillerie réglée et chants inspectés" caption="Détail 3 — menuiseries réglées : aplomb et alignement, jeux réguliers, ouverture sans contrainte, chants et finitions inspectés après retrait des protections." />
          <MqFig entier ratio="aspect-[3/2]" src="/photos/pedagogie/schema-detail-4-points-eau-testes.jpg" alt="Schéma d'un meuble de salle de bain ouvert montrant les raccordements sous vasque : siphon, robinets d'arrêt accessibles, évacuation et joint sanitaire continu" caption="Détail 4 — points d'eau testés : absence de fuite aux raccords, écoulement sans stagnation, joints sanitaires continus, accès au siphon et aux robinets d'arrêt. Les essais de plomberie sont réalisés par l'entreprise qualifiée." />
        </div>
        <p className="t-mini text-muted mt-4 max-w-3xl">
          Ces quatre illustrations sont des <strong className="text-ivoire/80">schémas pédagogiques</strong> : elles
          représentent les points observés lors des contrôles, elles ne documentent pas un chantier particulier et
          n&apos;ont pas valeur de document d&apos;exécution. Les photographies de chantiers réellement pilotés sont
          rassemblées dans nos <Link href="/realisations" className="text-orange hover:underline">réalisations</Link>.
        </p>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur nos engagements qualité">
        <MqFaq items={[
          { q: "La charte qualité s'applique-t-elle à toutes les entreprises partenaires ?", a: "Oui. Aucune entreprise n'est mobilisée sur un projet piloté sans que ses documents d'assurance et ses références aient été vérifiés au préalable." },
          { q: "Que se passe-t-il si une entreprise partenaire ne respecte pas un engagement de la charte ?", a: "L'écart est documenté et discuté avec l'entreprise concernée. Selon la gravité, cela peut conduire à une mise en demeure ou à un remplacement pour la suite du chantier, toujours sous la responsabilité contractuelle de l'entreprise concernée." },
          { q: "Puis-je consulter les attestations d'assurance des entreprises avant le démarrage ?", a: "Oui, ces documents font partie du dossier transmis avant le démarrage des travaux, dans le cadre de la transparence exigée par notre charte." },
          { q: "Comment sont gérées les réserves constatées à la réception ?", a: "Chaque réserve est consignée par écrit avec une date et une photo. Elle est suivie jusqu'à sa levée effective, elle-même documentée avant la clôture du dossier de fin de chantier." },
          { q: "La charte qualité garantit-elle l'absence de tout désordre de chantier ?", a: "Non. Elle garantit un cadre de contrôle et de traçabilité rigoureux, pas l'absence totale d'aléa. Un aléa documenté et traité reste néanmoins très différent d'un désordre découvert tardivement sans suivi." },
          { q: "Les photos datées transmises quotidiennement font-elles partie du dossier final ?", a: "Oui, elles sont archivées et peuvent être intégrées au dossier de fin de chantier pour constituer un historique visuel complet du déroulement des travaux." },
        ]} />
        <p className="t-mini text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Demandez le détail de la charte qualité appliquée à votre projet" lead="Nous transmettons les documents des entreprises partenaires envisagées avant tout engagement." />

      <MqReadNext items={[
        { href: "/notre-methode", label: "Notre méthode", sub: "Les huit étapes du pilotage" },
        { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Comment les entreprises sont sélectionnées" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage reçu" },
      ]} />
    </main>
  );
}
