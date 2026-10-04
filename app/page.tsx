import type { Metadata } from "next";
import Link from "next/link";
import { HeroDiaporama } from "./accueil/hero-diaporama";
import { AvisTrustpilot } from "./accueil/avis";
import { CtaFinal } from "./components/cta-final";
import { BarreProjet } from "./blog/[slug]/barre-projet";
import { FAQ as FAQ_SITE, GAMMES } from "./data";
import {
  PageManifeste,
  PageAppel,
  PageSection,
  PageTuiles,
  PageEtapes,
  PageGalerie,
  PageCartes,
  PageTableau,
  PageFaq,
} from "./components/page-kit";

/* ============================================================================
   ACCUEIL — refonte lot 2 (10/2026).

   Le client trouvait l'ancienne page « le foutoir » : douze sections, trois
   manières de dire la même chose. Elle devient une page d'accueil courte, au
   modèle du reste du site : le hero est conservé tel quel (HeroRefonte et ses
   étiquettes), puis chaque section répond à UNE question du visiteur — qui
   êtes-vous, quels travaux, comment, des preuves, où, combien, et les
   questions fréquentes.

   Mot-clé principal : « entreprise de rénovation paris » (variante :
   « entreprise de rénovation »). La marque n'exécute pas les travaux : le
   mot-clé est donc toujours employé avec précision (ce que le visiteur
   cherche quand il tape « entreprise de rénovation », et ce que nous lui
   apportons à la place : un pilote unique et des entreprises partenaires).

   Les anciens blocs (Domaines, Releve, ChantiersComplexes, Demarches,
   AvantApres, Matieres, Parcours, PlanningLots) restent sur le disque mais ne
   sont plus montés ici.
   ============================================================================ */

const DESCRIPTION =
  "Entreprise de rénovation à Paris et en Île-de-France : un seul interlocuteur, des devis d'entreprises comparables et un chantier piloté jusqu'à la réception.";

export const metadata: Metadata = {
  title: "Entreprise de rénovation à Paris : un seul interlocuteur | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Entreprise de rénovation à Paris : un seul interlocuteur | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/og.jpg" }],
  },
};

const fmt = (n: number) => n.toLocaleString("fr-FR");

/* Cinq questions générales, reprises telles quelles de data.ts : coût,
   déroulé, devis, garanties, durée. */
const FAQ = [0, 6, 5, 4, 1].map((i) => FAQ_SITE[i]);

/* Photos des tuiles : la photo d'ouverture de chaque page de travaux, pour
   que le visiteur la reconnaisse en arrivant. */
const TRAVAUX = [
  {
    href: "/renovation-appartement",
    titre: "Rénovation d'appartement",
    texte: "Appartement ancien ou haussmannien, en copropriété.",
    image: "/photos/chantiers2/sejour-table-marbre-balcon-rue.jpeg",
    alt: "Séjour d'un appartement haussmannien rénové : moulures, parquet en point de Hongrie, fenêtres sur balcon",
  },
  {
    href: "/renovation-maison-pavillon",
    titre: "Rénovation de maison",
    texte: "Maison, pavillon, façade, toiture et intérieur.",
    image: "/photos/chantiers/chFacadeRavalementEchafaudage1.jpeg",
    alt: "Maison de ville en rénovation : façade sous échafaudage, volets persiennés et toiture en ardoise",
  },
  {
    href: "/renovation-complete",
    titre: "Rénovation complète",
    texte: "Tous corps d'état, du gros œuvre aux finitions.",
    image: "/photos/chantiers2/salon-trumeau-moulures-appliques.jpeg",
    alt: "Salon rénové entièrement : trumeau à miroir, appliques dorées, moulures restaurées et parquet à chevrons",
  },
  {
    href: "/renovation-salle-de-bain-maison",
    titre: "Salle de bain",
    texte: "Étanchéité, évacuations, ventilation, puis carrelage.",
    image: "/photos/chantiers2/sdb-granit-clair-baignoire.jpeg",
    alt: "Salle de bain rénovée en granit clair avec baignoire îlot et robinetterie murale cuivrée",
  },
  {
    href: "/renovation-cuisine-maison",
    titre: "Cuisine",
    texte: "Implantation, réseaux et meubles calés avant la commande.",
    image: "/photos/chantiers2/piece-de-vie-cuisine-parquet-versailles.jpeg",
    alt: "Cuisine ouverte rénovée : colonnes en bois clair, plan de travail en pierre, parquet de Versailles",
  },
  {
    href: "/renovation-electrique",
    titre: "Rénovation électrique",
    texte: "Tableau, circuits et mise aux normes NF C 15-100.",
    image: "/photos/chantiers/chTableauElectriqueDisjoncteurs.jpeg",
    alt: "Tableau électrique neuf encastré, rangées de disjoncteurs alimentées par peignes",
  },
  {
    href: "/renovation-energetique",
    titre: "Rénovation énergétique",
    texte: "Isolation, fenêtres, ventilation et chauffage.",
    image: "/photos/chantiers/chIsolationRampantOuateFibres.jpeg",
    alt: "Comble en cours d'isolation : isolant entre les chevrons et ossature de doublage",
  },
  {
    href: "/ouverture-mur-porteur",
    titre: "Ouverture de mur porteur",
    texte: "Étude de structure, étaiement, poutre et réception.",
    image: "/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg",
    alt: "Ouverture de mur porteur réalisée : portique acier, poutre sous plafond et poteau",
  },
  {
    href: "/surelevation",
    titre: "Surélévation",
    texte: "Gagner un niveau sur une maison existante.",
    image: "/photos/chantiers/chCharpenteMaisonEchafaudage.jpeg",
    alt: "Maison en pierre sous échafaudage : charpente neuve et lucarnes montées au-dessus des murs existants",
  },
  {
    href: "/extension-maison",
    titre: "Extension de maison",
    texte: "Agrandir au sol, de l'autorisation à la réception.",
    image: "/photos/chantiers/chCharpenteExtensionBlocsBeton.jpeg",
    alt: "Extension de maison en cours : charpente bois neuve entre un mur en blocs béton et un mur ancien",
  },
  {
    href: "/menuiserie-agencement-sur-mesure",
    titre: "Menuiserie sur mesure",
    texte: "Placards, dressings, bibliothèques : l'aménagement intérieur sur mesure.",
    image: "/photos/chantiers2/chambre-baignoire-ouverte-granit-lustre.jpeg",
    alt: "Chambre avec armoire en bois clair sur mesure et colonne d'étagères ouvertes",
  },
  {
    href: "/investisseurs-professionnels",
    titre: "Investissement locatif",
    texte: "Chiffrer les travaux avant d'acheter, rénover pour louer.",
    image: "/photos/chantiers2/appart2-salon-canape-placards-chene.jpeg",
    alt: "Appartement rénové et meublé pour la location : salon et placards en chêne clair",
  },
];

/* Galerie : un appartement parisien rénové, photographié une fois le
   chantier terminé (série chantiers2 non attribuée à une autre page). */
const photo = (nom: string) => `/photos/chantiers2/${nom}.jpeg`;
const GALERIE = [
  {
    src: photo("appart2-sejour-cuisine-parquet-versailles"),
    alt: "Séjour d'un appartement parisien rénové : parquet en panneaux de Versailles, cuisine en bois clair au fond, fenêtres sur balcon",
    legende: "Séjour et cuisine ouverte, parquet en panneaux de Versailles.",
  },
  {
    src: photo("appart2-bibliotheque-chene-salon"),
    alt: "Bibliothèque sur mesure en chêne clair et meuble bas assorti dans le salon d'un appartement rénové",
    legende: "Bibliothèque et meuble bas réalisés sur mesure.",
  },
  {
    src: photo("appart2-salle-eau-marbre-double-vasque"),
    alt: "Salle d'eau rénovée : double vasque sur plan en pierre veinée, miroirs ovales dans un meuble en chêne, douche vitrée",
    legende: "Salle d'eau : pierre veinée, chêne et robinetterie laiton.",
  },
  {
    src: photo("appart2-chambre-tete-de-lit-bureau"),
    alt: "Chambre d'un appartement haussmannien rénové : tête de lit capitonnée, suspensions, bureau en bois sous un miroir",
    legende: "Chambre : tête de lit sur mesure et éclairage intégré.",
  },
];

/* DONNÉES STRUCTURÉES — l'organisation (reprise de l'ancienne page), plus la
   FAQ de la page. Le `@id` (#organisation) est conservé tel quel. */
const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.archipiloterenovation.com/#organisation",
    name: "ARCHI PILOTE RÉNOVATION",
    url: "https://www.archipiloterenovation.com/",
    description:
      "Pilotage de projets de rénovation à Paris et en Île-de-France : visite technique, devis des entreprises partenaires rendus comparables, coordination des corps de métier et suivi du chantier jusqu'à la réception.",
    telephone: "+33667117975",
    email: "archipiloterenovation@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 bis rue Gabriel Péri",
      postalCode: "92250",
      addressLocality: "La Garenne-Colombes",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
      { "@type": "AdministrativeArea", name: "Yvelines" },
      { "@type": "AdministrativeArea", name: "Val-de-Marne" },
    ],
    knowsAbout: [
      "rénovation d'appartement",
      "rénovation de maison",
      "rénovation complète",
      "rénovation de salle de bain",
      "rénovation de cuisine",
      "rénovation électrique",
      "rénovation énergétique",
      "ouverture de mur porteur",
      "surélévation",
      "extension de maison",
      "menuiserie sur mesure",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.reponse } })),
  },
];

export default function Accueil() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      {/* L’ouverture en diaporama (app/accueil/hero-diaporama.tsx). Le conteneur porte `data-ouverture`
          pour que la barre « projet » apparaisse une fois le hero dépassé. */}
      <div data-ouverture>
        <HeroDiaporama />
      </div>

      <PageManifeste
        titre="Un seul interlocuteur pour votre rénovation, des entreprises choisies poste par poste."
        lien={{ href: "/notre-methode", label: "Découvrir notre méthode" }}
        image="/photos/chantiers2/appart2-coiffeuse-chene.jpeg"
        alt="Détail d'une chambre rénovée à Paris : tête de lit capitonnée avec niche en chêne et prise intégrée, bureau en bois cannelé et miroir demi-lune"
      >
        <p>
          Vous cherchez une entreprise de rénovation à Paris ? ARCHI PILOTE RÉNOVATION prépare votre projet, rend
          les devis des entreprises partenaires comparables et coordonne tous les corps d'état jusqu'à la réception.
        </p>
        <p>
          Les travaux sont réalisés par des artisans et sociétés du bâtiment indépendants : chacun signe son devis,
          facture ses travaux et porte sa garantie décennale. Vous, vous n'avez qu'un seul interlocuteur.
        </p>
      </PageManifeste>

      <PageSection
        id="travaux"
        titre="Nos travaux de rénovation"
        accroche="Rénovation d'appartement ou de maison, salle de bains, cuisine, structure : chaque type de travaux a sa page. Maçonnerie, travaux de plomberie et d'électricité, menuiserie, sols et peinture sont coordonnés par un seul interlocuteur."
      >
        <PageTuiles items={TRAVAUX} />
      </PageSection>

      <PageAppel

        repere="Structure et agrandissement"

        titre="Mur porteur, surélévation, extension : les chantiers qui demandent une étude"

        texte="Ouvrir un mur, ajouter un étage ou agrandir au sol engage la structure. Nous faisons réaliser l'étude par un bureau d'études partenaire, préparons les autorisations et pilotons les entreprises."

        image="/photos/chantiers2/charpente-traditionnelle-chene.jpeg"

        alt="Charpente bois neuve posée au-dessus d'une maison avant la couverture"

        cta={{ href: "/surelevation", label: "Découvrir la surélévation" }}

        secondaire={{ href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" }}

      />


      <PageSection
        titre="Comment nous travaillons"
        accroche={
          <p>
            Le même déroulé pour chaque projet, en cinq étapes. Le détail est sur la page{" "}
            <Link href="/notre-methode">notre méthode</Link>.
          </p>
        }
      >
        <PageEtapes
          items={[
            { titre: "Premier échange", texte: "Par téléphone ou WhatsApp : votre bien, votre projet, votre budget." },
            { titre: "Visite technique", texte: "Sur place : structure, réseaux, urbanisme, règlement et syndic de copropriété." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis de rénovation lus ligne à ligne." },
            { titre: "Budget arbitré", texte: "Poste par poste, avec vous, avant de signer. Vous pouvez acheter vos matériaux en direct." },
            { titre: "Chantier piloté", texte: "Photos datées chaque jour, réception avec réserves écrites, suivi 12 mois." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Nos réalisations"
        accroche={
          <p>
            Plutôt qu'une seule entreprise de rénovation à Paris, des entreprises partenaires choisies lot par lot.
            Ici, un appartement parisien rénové, une fois le chantier terminé. D'autres
            projets sur la page <Link href="/realisations">réalisations</Link>.
          </p>
        }
      >
        <PageGalerie items={GALERIE} />
      </PageSection>

      <PageSection titre="Avis clients" accroche="Avis publiés sur Trustpilot, nommés et datés. Chacun peut les vérifier à la source.">
        <AvisTrustpilot />
      </PageSection>

      <PageSection
        titre="Zone d'intervention"
        accroche="Nous restons sur un territoire que nous connaissons, depuis notre base de La Garenne-Colombes."
      >
        <PageCartes
          items={[
            { titre: "Paris", texte: "Paris intra-muros : immeubles anciens, haussmanniens et copropriétés." },
            {
              titre: "Hauts-de-Seine",
              texte: "La Garenne-Colombes, Neuilly, Levallois, Courbevoie, Asnières, Boulogne, Issy, Nanterre, Rueil, Saint-Cloud.",
            },
            { titre: "Île-de-France", texte: "Yvelines et Val-de-Marne. Ailleurs, nous étudions au cas par cas selon le projet." },
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation à Paris"
        accroche="Repères au m² en Île-de-France, 2026. Le prix réel se fixe sur les devis des entreprises, après la visite technique."
      >
        <PageTableau
          colonnes={["Niveau", "Ce qui est refait", "Coût au m²"]}
          lignes={GAMMES.map((g) => [g.nom, g.description, `${fmt(g.prixMin)} – ${fmt(g.prixMax)} €`])}
          note={
            <>
              Le détail poste par poste est sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation au m²</Link>.
              Pour un premier budget, utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection titre="Entreprise de rénovation à Paris : questions fréquentes">
        <PageFaq items={FAQ} />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <div id="contact">
        <CtaFinal />
      </div>
      <BarreProjet />
    </main>
  );
}
