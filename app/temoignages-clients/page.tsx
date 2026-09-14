import type { Metadata } from "next";
import { MqHero, MqSection, MqChecklist, MqFig, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { TrustpilotEncart } from "../components/trustpilot";

export const metadata: Metadata = {
  alternates: { canonical: "/temoignages-clients" },
  title: "Témoignages clients anonymisés et méthode de recueil | ARCHI PILOTE RÉNOVATION",
  description:
    "Retours clients anonymisés sur des projets de rénovation accompagnés en Île-de-France, avec méthode de recueil et transparence sur la vérification.",
};

const QUOTES = [
  {
    quote: "Nous avons pu comparer nos devis ligne à ligne avant de signer, ce qui a changé notre façon de discuter avec les entreprises.",
    author: "Client, propriétaire occupant — Rénovation complète d'un appartement, Paris, exemple anonymisé",
    photo: {
      src: "/photos/chantiers/chCuisineSejourParquetChevrons.jpeg",
      alt: "Cuisine et séjour rénovés avec parquet à chevrons dans un appartement ancien, chantier réel",
      caption: "Illustration : rénovation complète d'un appartement ancien, cuisine et séjour livrés. Chantier réel des équipes partenaires.",
    },
  },
  {
    quote: "Le suivi par photos datées chaque jour nous a permis de suivre le chantier sans être sur place en permanence.",
    author: "Cliente, investisseur locatif — Second œuvre technique d'un studio, Hauts-de-Seine, exemple anonymisé",
    photo: {
      /* 05/09 : légende corrigée. Elle annonçait « second œuvre technique d'un STUDIO,
         cloisons et réseaux avant finition ». La photo, ouverte et regardée, montre tout
         autre chose : un vaste plateau livré en structure béton — poteaux et poutres bruts,
         façade vitrée au fond, réservations percées dans la retombée de poutre — où l'on
         monte des cloisons sur ossature métallique. Ce n'est ni un studio, ni un logement,
         et aucun réseau n'y est visible. La légende ne décrit plus que ce qui est à
         l'image, et ne rattache plus la photo au témoignage voisin : la page annonce déjà
         ces visuels comme des « illustrations », pas comme le chantier du client cité. */
      src: "/photos/chantiers/chCloisonsPlaco.jpeg",
      alt: "Plateau livré en structure béton brute, poteaux et retombées de poutre apparents, cloisons en plaques de plâtre montées sur ossature métallique le long de la façade vitrée",
      caption: "Illustration : montage de cloisons sur ossature métallique dans un plateau livré en structure béton, avant passage des réseaux et finitions. Chantier réel des équipes partenaires.",
    },
  },
  {
    quote: "L'achat direct des matériaux nous a semblé plus contraignant au départ, mais l'écart de budget final nous a convaincus.",
    author: "Client, propriétaire occupant — Rénovation énergétique d'une maison, Île-de-France, exemple anonymisé",
    photo: {
      /* 05/09 : chIsolationCombles retirée. Deux motifs cumulés. (1) Elle était affichée
         sur HUIT pages du site (cf. scripts/surexposition.py), record absolu de la
         photothèque. (2) Surtout, la légende annonçait une « rénovation énergétique »
         alors que la photo montre une CONSTRUCTION NEUVE — briques monomur rouges encore
         nues, charpente neuve, aucun ouvrage existant. Elle ne pouvait donc pas illustrer
         un témoignage de rénovation. La remplaçante est un vrai chantier de rénovation :
         le carrelage blanc d'origine est encore en place à droite du pare-vapeur. */
      src: "/photos/chantiers/chParVapeurSopremaMuralSdb.jpeg",
      alt: "Mur d'une salle d'eau en rénovation recouvert d'une membrane pare-vapeur agrafée et adhésivée, alimentations d'eau en attente, carrelage blanc d'origine conservé à droite",
      caption: "Illustration : rénovation énergétique d'une pièce d'eau, membrane pare-vapeur posée sur l'isolant et adhésivée au pourtour de la fenêtre, alimentations laissées en attente. Chantier réel des équipes partenaires.",
    },
  },
];

const FAQ = [
  {
    q: "Ces témoignages sont-ils vérifiés ?",
    a: "Chaque retour publié est relié à un projet réel accompagné par ARCHI PILOTE RÉNOVATION. Les éléments identifiants sont retirés pour préserver la confidentialité des clients, mais le contexte du projet (type de bien, lots concernés, période) est conservé pour rester vérifiable.",
  },
  {
    q: "Pourquoi les témoignages sont-ils anonymisés plutôt que signés d'un nom complet ?",
    a: "L'anonymisation protège la vie privée des clients, notamment lorsque le témoignage porte sur un logement identifiable. Le contexte du projet est en revanche détaillé pour permettre au lecteur de juger de la pertinence du retour par rapport à sa propre situation.",
  },
  {
    q: "Comment les retours clients sont-ils recueillis ?",
    a: "Les retours sont sollicités après la livraison du chantier, à un moment où le client peut juger du résultat dans la durée et non sous le coup de l'enthousiasme du jour de réception. Le client valide le contenu et le niveau d'anonymisation avant toute publication.",
  },
  {
    q: "Un retour négatif serait-il publié sur cette page ?",
    a: "La méthode de recueil ne filtre pas les retours par leur tonalité, mais par leur capacité à décrire un contexte de projet exploitable. Un retour mitigé et argumenté a autant sa place qu'un retour très positif, dès lors qu'il reste rattaché à un projet identifiable en interne.",
  },
  {
    q: "Puis-je échanger directement avec un client ayant témoigné ?",
    a: "Pour préserver la confidentialité des clients, une mise en relation directe n'est pas proposée systématiquement. En revanche, l'étude de votre projet peut s'appuyer sur des exemples de cas comparables présentés sur la page réalisations.",
  },
];

export default function TemoignagesClientsPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Preuves — retours clients"
        title="Témoignages clients : des retours anonymisés, reliés à un projet réel"
        lead="Chaque témoignage publié ici correspond à un projet réellement accompagné, présenté de façon anonymisée pour préserver la confidentialité du client. Le contexte du projet (type de bien, lots concernés, période) reste indiqué pour que le retour demeure vérifiable, plutôt que réduit à une citation flatteuse sans ancrage."
      />

      <MqSection
        kicker="Retours clients"
        title="Exemples de retours reçus après livraison"
        lead="Ces citations sont présentées comme des exemples représentatifs de retours reçus, anonymisés à la demande des clients concernés."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <div key={q.author} className="flex flex-col gap-4">
              <MqFig src={q.photo.src} alt={q.photo.alt} caption={q.photo.caption} />
              <blockquote className="border border-line bg-surface rounded-none p-6 flex flex-col gap-4">
                <p className="t-sec leading-relaxed text-ivoire/90">« {q.quote} »</p>
                <footer className="text-muted t-mini mt-auto">{q.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Méthode de recueil"
        title="Comment un témoignage devient une preuve exploitable"
        lead="Le recueil intervient après livraison, avec validation du client sur le contenu et le niveau d'anonymisation retenu."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Un recueil après livraison, pas à chaud</h3>
            <p className="text-muted t-sec leading-relaxed">
              {"Le retour est sollicité une fois le chantier terminé et le recul suffisant pour juger du résultat dans la durée."}
            </p>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              {"Solliciter un avis le jour de la réception favorise l'enthousiasme immédiat plutôt que le jugement sur la durée. Le recueil intervient donc après un délai permettant au client de juger de la tenue des ouvrages dans l'usage quotidien."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Une validation du client avant publication</h3>
            <p className="text-muted t-sec leading-relaxed">
              {"Le client relit et valide le contenu ainsi que le niveau d'anonymisation retenu avant toute mise en ligne."}
            </p>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              {"Aucun témoignage n'est publié sans l'accord explicite du client sur sa formulation et sur les éléments de contexte conservés. Le client peut demander le retrait de son retour à tout moment."}
            </p>
          </div>
        </div>

        {/*
          À FOURNIR PAR LE CLIENT — document réel, ne peut pas être généré par IA.
          Ce visuel doit être une véritable capture d'écran anonymisée d'un avis
          publié (Google Business Profile, ou autre plateforme d'avis), avec lien
          vers la plateforme si autorisé. Fabriquer un faux avis ou une fausse
          capture serait une preuve inventée : à ne jamais faire. Demander à Yanis
          / au client d'exporter une capture réelle (nom masqué, note visible,
          date visible), puis l'intégrer ainsi :
          <div className="max-w-md mt-8">
            <MqFig src="/photos/chantiers/[capture-avis-anonymisee].jpg"
              alt="Exemple anonymisé d'un témoignage client publié et vérifiable"
              ratio="aspect-[3/2]" />
          </div>
          Tant qu'aucune capture réelle n'est fournie, ne rien afficher ici.
        */}
      </MqSection>

      <MqSection
        kicker="Transparence sur la vérification"
        title="Ce que ce site garantit, et ce qu'il ne garantit pas"
        lead="Chaque retour est rattaché en interne à un projet identifiable, sans qu'un tiers indépendant certifie ces témoignages."
      >
        <MqChecklist
          cols={1}
          items={[
            "Chaque témoignage correspond à un projet réel accompagné, conservé en interne avec ses justificatifs.",
            "Aucun témoignage nominatif fictif ni chiffre non vérifiable n'est publié sur cette page.",
            "Le contexte du projet (type de bien, lots, difficulté rencontrée) est indiqué pour rester comparable.",
            "Les témoignages ne remplacent pas une analyse individuelle : chaque projet reste évalué sur son propre contexte.",
            "Aucun label ni certification tierce n'est associé à ces témoignages ; leur vérification reste interne à la marque.",
          ]}
        />
      </MqSection>

      {/* 05/09 : invitation à déposer un avis Trustpilot, la fiche ayant été ouverte par le
          client ce jour. Elle est placée ICI, sur la page des témoignages, parce que c'est la
          page où la question de la preuve se pose — et parce que les témoignages qui la
          précèdent sont des exemples anonymisés, pas des avis vérifiés. Le voisinage rend la
          distinction lisible : d'un côté ce que nous racontons, de l'autre une plateforme
          indépendante sur laquelle nous n'avons pas la main.
          Aucune note ni aucun nombre d'avis n'est affiché : la fiche en compte zéro à ce jour. */}
      <MqSection kicker="Votre retour" title="Déposer un avis sur notre fiche Trustpilot">
        <TrustpilotEncart />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les visiteurs demandent sur ces témoignages">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqReadNext
        items={[
          { href: "/realisations", label: "Réalisations", sub: "Cas de projets accompagnés, contexte et limites" },
          { href: "/modele-economique-transparence", label: "Modèle économique & transparence", sub: "Comment fonctionne l'achat direct de matériaux" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
        ]}
      />

      <MqCta
        title="Discutez de votre projet avec notre équipe"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux et budget réaliste."
      />
    </main>
  );
}
