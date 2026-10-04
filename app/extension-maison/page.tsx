import type { Metadata } from "next";
import Link from "next/link";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import {
  PageHero,
  PageIntro,
  PageChiffres,
  PageSection,
  PageAppel,
  PageCartes,
  PageEtapes,
  PageCoches,
  PageImage,
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : agrandir sa maison par une extension au sol, en Île-de-France.
   Mot-clé principal : « extension maison ».
   Aucun prix d'extension dans le dépôt : pas de tableau, facteurs de coût et renvoi vers
   l'estimateur. Durée 4-8 mois : chiffre de l'ancienne page.
   Les trois photos viennent du même chantier (mur ancien couvert de végétation, murs en blocs). */

const CHEMIN = "/extension-maison";
const TITRE = "Extension de maison en Île-de-France";
const DESCRIPTION =
  "Extension de maison : PLU, déclaration préalable ou permis de construire, fondations, raccord avec l'existant. Un agrandissement piloté jusqu'à la réception.";
const FIL = [{ nom: "Extension de maison", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Extension maison : PLU, permis, raccord et étapes | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Extension maison : PLU, permis, raccord et étapes | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chCharpenteExtensionBlocsBeton.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Faut-il un permis de construire ou une déclaration préalable ?",
    reponse:
      "Cela dépend de la surface créée et de la zone d'urbanisme. Une extension de faible emprise peut relever d'une déclaration préalable, une extension plus importante d'un permis de construire. Le point est vérifié dès l'étude de faisabilité, avant tout engagement.",
  },
  {
    question: "Quand un architecte est-il obligatoire pour une extension ?",
    reponse:
      "Dès que la surface de plancher totale de la maison après travaux dépasse le seuil légal en vigueur. En dessous, un architecte ou un ingénieur structure reste conseillé si l'extension touche la structure porteuse. Les architectes et ingénieurs partenaires interviennent alors en leur nom.",
  },
  {
    question: "Combien coûte une extension de maison ?",
    reponse:
      "Le prix dépend du type d'extension et de structure, du choix des matériaux, du niveau de finition, des fondations et des raccordements aux réseaux existants. Une fourchette fiable se donne après la visite technique. Acheter certains matériaux en direct, au prix fournisseur, peut réduire le coût de quelques postes.",
  },
  {
    question: "Peut-on vivre dans la maison pendant la construction de l'extension ?",
    reponse:
      "Dans la plupart des cas, oui, si le phasage sépare la zone de chantier des pièces habitées. Les moments les plus gênants sont l'ouverture du mur existant pour créer la liaison et les coupures de réseaux, annoncées à l'avance.",
  },
  {
    question: "Où se situent les risques d'une extension de maison ?",
    reponse:
      "À la jonction entre l'ancien et le neuf : infiltration au raccord de toiture, pont thermique à la jonction des murs, marche imprévue entre deux niveaux de sol, fissure au droit de la reprise de façade. Ces points sont traités ensemble, pas comme deux chantiers juxtaposés.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Extension de maison : agrandir sans désorganiser l'existant"
        chapo="Un agrandissement de maison réussi fonctionne avec l'existant : structure, lumière, réseaux, isolation et circulation. Nous vérifions ce que le terrain et le PLU permettent, préparons les autorisations, puis pilotons les travaux jusqu'à la réception."
        image="/photos/chantiers/chCharpenteExtensionBlocsBeton.jpeg"
        alt="Extension de maison en cours : charpente bois neuve posée entre un mur en blocs de béton fraîchement monté et un mur ancien enduit conservé, échafaudage en pied"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de la maison sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Faisabilité vérifiée : PLU, emprise, accès, structure",
          "Déclaration préalable ou permis préparé avec vous",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Chambre en plus, cuisine agrandie ou bureau à domicile : avant d'imaginer la nouvelle pièce et la surface habitable gagnée, il faut savoir ce que le plan local d'urbanisme autorise : distance aux
          limites de propriété, hauteur, emprise au sol restante. Ces règles changent d'une commune à l'autre, parfois
          d'une rue à l'autre.
        </p>
        <p>
          L'accès au terrain et la structure de la maison décident ensuite de la méthode de construction. C'est pourquoi
          l'étude de faisabilité précède la conception du projet et tout chiffrage. Les entreprises de rénovation
          partenaires établissent ensuite leurs devis, exécutent et facturent les travaux.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "4-8 mois", label: "de l'étude à la livraison, en moyenne" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une extension de maison"
        accroche="Extension bois, extension vitrée, extension aluminium ou maçonnée : quel que soit le type d'extension, l'agrandissement de maison sollicite le terrain, la structure et les réseaux existants. Chaque poste est vérifié avant d'être chiffré."
      >
        <PageCartes
          items={[
            { titre: "Urbanisme et autorisations", texte: "Lecture du PLU, puis déclaration préalable ou permis de construire selon la surface et la zone.", href: "/demarches-administratives-renovation" },
            { titre: "Étude de sol et fondations", texte: "Une étude de sol préalable dimensionne des fondations adaptées et évite les tassements différentiels." },
            { titre: "Structure et liaison", texte: "Murs, charpente et ouverture du mur existant pour relier l'extension à la maison, avec étude si le mur est porteur.", href: "/ouverture-mur-porteur" },
            { titre: "Hors d'eau, hors d'air", texte: "Couverture, étanchéité et menuiseries, avec traitement prioritaire du raccord avec l'existant." },
            { titre: "Réseaux", texte: "Tableau électrique adapté, chauffage complété, eau et évacuations vérifiées si l'extension accueille une cuisine ou une salle d'eau." },
            { titre: "Isolation et ventilation", texte: "Pour une pièce utilisable à l'année, isolation thermique et chauffage complétés. Une extension plus étanche que le bâti ancien change l'équilibre d'air : une VMC hygroréglable est souvent nécessaire.", href: "/renovation-energetique" },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Le raccord entre la maison et l'extension"
        accroche="C'est à la jonction entre l'ancien et le neuf que naissent la plupart des désordres constatés des années après la livraison. Toiture, isolation, sols et façade se traitent comme un ensemble."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chCharpenteExtensionDepuisOuverture.jpeg"
          alt="Extension de maison vue depuis une ouverture percée dans un mur ancien en pierre : charpente neuve à chevrons posée sur des murs en blocs de béton, dalle et blocs stockés au sol"
          legende="La liaison vue depuis la maison : l'ouverture percée dans le mur ancien donne sur la charpente neuve de l'extension."
        />
        <PageCoches
          items={[
            "Raccord de toiture étanché et vérifié avant la couverture définitive",
            "Isolation continue entre l'existant et l'extension, sans pont thermique",
            "Niveaux de sol harmonisés, ou transition prévue dès le plan",
            "Reprise de façade avec des matériaux compatibles avec l'existant",
            "Étanchéité à l'air contrôlée avant la fermeture des cloisons",
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une extension de maison"
        accroche="Un prix annoncé avant les vérifications de faisabilité peut être trompeur. Le budget, et donc le financement de l'extension, se fixe sur les devis des entreprises, après la visite technique. Ce qui le fait varier :"
      >
        <PageCartes
          colonnes={2}
          items={[
            { titre: "Type d'extension et fondations", texte: "Structure retenue (bois, maçonnerie, vitrage), résultat de l'étude de sol, liaison avec la maison." },
            { titre: "Accès au terrain", texte: "Un accès difficile impose des matériaux plus légers ou des livraisons phasées." },
            { titre: "Réseaux et équipements", texte: "Une cuisine ou une salle d'eau demande de prolonger l'eau et les évacuations ; le tableau peut devoir évoluer." },
            { titre: "Choix des matériaux", texte: "Matériaux et niveau de finition ; achat direct possible au prix fournisseur." },
          ]}
        />
        <p className="pg-note">
          Premier ordre de grandeur avec l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; postes courants
          sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
        </p>
      </PageSection>

      <PageSection
        titre="Les étapes de votre extension"
        accroche="Pendant l'agrandissement de maison, si elle reste habitée, le phasage protège les circulations et annonce les coupures de réseaux à l'avance. Le planning est validé avec vous avant le démarrage."
      >
        <PageImage
          src="/photos/chantiers/chCharpenteFaitageArretiers.jpeg"
          alt="Faîtage et arêtiers d'une charpente bois neuve d'extension vus d'en haut, posés sur une tête de mur en béton aux armatures en attente, mur ancien et échafaudage en arrière-plan"
          legende="Même chantier, vu d'en haut : charpente assemblée avant la pose de la couverture."
        />
        <PageEtapes
          items={[
            { titre: "Faisabilité", texte: "PLU, emprise disponible, accès chantier et structure de la maison vérifiés." },
            { titre: "Autorisation", texte: "Déclaration préalable ou permis de construire, déposé avec architecte partenaire si le seuil l'impose." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Fondations et structure", texte: "Fondations, murs et charpente, puis mise hors d'eau et hors d'air." },
            { titre: "Réseaux, isolation, finitions", texte: "Réseaux prolongés, isolation posée, raccords contrôlés. Photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre extension, raccordée sans désordre"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chCharpenteExtensionDepuisOuverture.jpeg"

        alt="Extension de maison vue depuis une ouverture percée dans un mur ancien en pierre : charpente neuve à chevrons posée sur des murs en blocs de béton, dalle et blocs stockés au sol"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur l'extension de maison">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/surelevation", titre: "Surélévation de maison", texte: "L'agrandissement de maison par le haut, quand le terrain manque." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Déclaration préalable, permis, PLU." },
            { href: "/renovation-maison-pavillon", titre: "Rénovation de maison", texte: "Rénover l'existant en même temps." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
