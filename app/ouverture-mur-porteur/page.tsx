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
  PageTableau,
  PageImage,
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : ouvrir un mur porteur (maison ou appartement) en Île-de-France.
   Mot-clé principal : « ouverture mur porteur ».
   Contenu fusionné depuis /gros-oeuvre-structure (redirigée) : identification du mur, étude
   du bureau d'études, étaiement, profilés IPN / HEA / HEB, poteaux et appuis, trémie (mention),
   copropriété. Dossier réel cité : portique IPE180 sur poteaux IPE160 (ancienne page).
   Prix : poste « Ouverture de mur porteur » de /observatoire-prix-renovation. */

const CHEMIN = "/ouverture-mur-porteur";
const TITRE = "Ouverture de mur porteur en Île-de-France";
const DESCRIPTION =
  "Ouverture de mur porteur : étude de structure, étaiement, poutre de reprise IPN ou HEB, vote de copropriété. Prix indicatif : 3 000 à 9 000 € par ouverture.";
const FIL = [{ nom: "Ouverture de mur porteur", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Ouverture mur porteur : étude, étaiement, prix | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Ouverture mur porteur : étude, étaiement, prix | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Comment savoir si un mur est porteur ?",
    reponse:
      "Aucun indice ne suffit seul. On recoupe l'épaisseur du mur, son alignement avec les murs des étages voisins, le sens des solives du plancher et sa position par rapport aux façades et aux murs de refend. Sans plans fiables, un sondage ponctuel dans la cloison permet de voir la maçonnerie. Si le doute persiste, l'ingénieur structure tranche avant tout devis.",
  },
  {
    question: "Quel est le prix d'une ouverture de mur porteur ?",
    reponse:
      "En repère Île-de-France, comptez de 3 000 à 9 000 € par ouverture. L'écart tient à la reprise de charge : un simple linteau ou une poutre de reprise sur poteaux avec étude d'ingénieur. Le prix réel est celui du devis de l'entreprise, établi sur la base de l'étude de structure.",
  },
  {
    question: "Faut-il un architecte pour ouvrir un mur porteur ?",
    reponse:
      "Non, un architecte n'est pas obligatoire. En revanche, l'ouverture d'un mur porteur exige une étude par un bureau d'études structure, qui calcule la poutre, les poteaux et les appuis. Les ingénieurs partenaires interviennent en leur nom.",
  },
  {
    question: "Faut-il l'accord de la copropriété ?",
    reponse:
      "Oui. Un mur porteur situé dans votre lot reste en général rattaché aux parties communes : son ouverture demande une autorisation votée en assemblée générale. La majorité applicable se vérifie avec le syndic. Un dossier incomplet est renvoyé à l'assemblée suivante.",
  },
  {
    question: "Combien de temps durent les travaux ?",
    reponse:
      "Pour une ouverture simple avec poutre métallique, comptez indicativement une à deux semaines, étaiement, démolition, pose et reprises comprises. Une ouverture plus lourde ou en immeuble occupé, où les phases bruyantes sont réparties, prend plus de temps.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Ouverture de mur porteur : l'étude avant la démolition"
        chapo="Ouvrir un mur porteur engage la structure du bâtiment. Nous faisons réaliser l'étude par un bureau d'études partenaire, préparons le dossier de copropriété, puis pilotons l'étaiement, la pose de la poutre et les finitions."
        image="/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg"
        alt="Ouverture de mur porteur réalisée : portique acier vu en angle, poutre sous le plafond et poteau à l'about, mur voisin dégarni jusqu'à la pierre et gaine électrique apparente"
        cadrage="50% 14%"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Étude de structure par un bureau d'études partenaire",
          "Dossier pour le syndic et l'assemblée générale",
          "Devis des entreprises rendus comparables",
        ]}
      >
        <p>
          Un mur porteur reprend le poids des planchers et des murs situés au-dessus. L'ouvrir, c'est reporter cette
          charge sur une poutre de reprise, puis sur des poteaux, jusqu'aux fondations. Une erreur d'appréciation peut compromettre la
          stabilité du bâtiment ou faire annuler un devis déjà signé.
        </p>
        <p>
          Tout commence donc par un diagnostic, puis par l'étude de structure du bureau d'études. C'est elle qui fixe le dimensionnement de la poutre et la méthode, et qui
          rend les devis des entreprises partenaires comparables : sans elle, deux entreprises chiffrent deux ouvrages
          différents sans le savoir.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "1-2 sem.", label: "de travaux pour une ouverture simple" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une ouverture de mur porteur"
        accroche="De l'identification du mur à la finition des profilés, chaque poste est défini avant la demande de devis."
      >
        <PageCartes
          items={[
            { titre: "Identifier le mur", texte: "Mur porteur ou simple cloison ? Épaisseur, alignement entre étages, sens des solives et sondage ponctuel : on recoupe plusieurs indices, jamais un seul." },
            { titre: "Étude de structure", texte: "Le bureau d'études calcule la reprise de charge et le dimensionnement de la poutre, des poteaux et des appuis." },
            { titre: "Étaiement provisoire", texte: "Des étais reprennent les charges de part et d'autre du mur avant toute démolition : c'est la sécurité du chantier et du bâtiment." },
            { titre: "Démolition contrôlée", texte: "Le maçon dépose le mur à l'emplacement de l'ouverture sans abîmer les zones voisines, et évacue les gravats au fur et à mesure." },
            { titre: "Poutre de reprise et poteaux", texte: "Poutre posée, poteaux et platines calés, matés et boulonnés ou soudés selon l'étude." },
            { titre: "Reprises et finitions", texte: "Retrait des étais après contrôle, rebouchage des parements, protection anticorrosion des profilés." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="IPN, HEA, HEB : la poutre se calcule"
        accroche="IPN, HEA et HEB sont trois familles de profilés en acier, pas trois niveaux de qualité. « IPN » est devenu le nom courant de toute poutre métallique au-dessus d'une ouverture."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chPoteauAcierPlatinePied.jpeg"
          alt="Pied de poteau acier soudé sur sa platine, posé au fond d'un plancher ouvert lors d'une ouverture de mur porteur, gravats autour"
          legende="L'appui : pied de poteau soudé sur sa platine, avant rebouchage du plancher."
        />
        <PageCoches
          items={[
            "Le profilé résulte d'un calcul : portée, charges reprises, déformation admissible",
            "Une poutre acier franchit de grandes portées pour un faible encombrement ; une poutre bois convient aux portées plus modestes",
            "Une poutre ne vaut que par ses appuis : poteaux et semelles conduisent la charge jusqu'à la fondation",
            "Un appui mal placé, au milieu d'un plancher non renforcé, peut créer un désordre à l'étage inférieur",
            "Une trémie d'escalier dans un plancher suit la même logique de reprise de charge",
          ]}
        />
        <p>
          Exemple d'un dossier réel : pour une ouverture de 2,55 m entre un dégagement et un séjour, le bureau d'études a
          fixé un portique acier (poutre IPE180 sur poteaux IPE160), des platines de 10 mm et quatre boulons M12 par
          platine, avant toute demande de devis.
        </p>
      </PageSection>

      <PageSection
        titre="Mur porteur en copropriété"
        accroche="En appartement, l'ouverture d'un mur porteur demande une autorisation votée en assemblée générale. C'est la complétude du dossier qui le fait avancer."
      >
        <PageCartes
          colonnes={2}
          items={[
            { titre: "Plans et descriptif", texte: "Plans de l'existant et du projet, méthode, étaiement et phasage de l'ouverture." },
            { titre: "Étude de structure", texte: "Note du bureau d'études avec la descente de charges et le profilé retenu." },
            { titre: "Assurances", texte: "Attestations de décennale et de responsabilité civile des entreprises qui interviendront." },
            { titre: "Organisation du chantier", texte: "Planning, horaires, protection des parties communes et évacuation des gravats." },
          ]}
        />
        <p>
          Demandez d'abord la liste des pièces au syndic par écrit. Le reste des démarches est détaillé sur la page{" "}
          <Link href="/demarches-administratives-renovation">démarches administratives</Link>.
        </p>
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une ouverture de mur porteur"
        accroche="Le prix d'une ouverture de mur porteur dépend de la reprise de charge : un simple linteau ou un portique avec étude d'ingénieur. La nature du mur, le plancher, l'accès et les finitions autour de l'ouverture comptent aussi."
      >
        <PageTableau
          colonnes={["Poste", "Unité", "Fourchette indicative Île-de-France"]}
          lignes={[["Ouverture de mur porteur", "ouverture", "3 000 – 9 000 €"]]}
          note={
            <>
              Repère indicatif, hors honoraires de pilotage. Une ouverture de 1,80 m entre cuisine et séjour en immeuble
              ancien, avec reprise de charge, se situe dans le haut de la fourchette. Détail sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre ouverture"
        accroche="Un ordre qui ne se négocie pas une fois le chantier lancé. Les attestations d'assurance de l'entreprise sont vérifiées avant le démarrage."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chDemolitionLattisPlatreOuverture.jpeg"
          alt="Démolition contrôlée d'un mur en pan de bois : montants et lattis mis à nu, gravats et perforateur au sol, avant la pose du portique"
          legende="Démolition contrôlée d'un mur en pan de bois, avant la pose du portique acier."
        />
        <PageEtapes
          items={[
            { titre: "Visite et diagnostic", texte: "Plans disponibles, sondages ciblés, hauteurs sous plafond et largeur d'ouverture relevées." },
            { titre: "Étude de structure", texte: "Descente de charges et dimensionnement de la poutre, des poteaux et des appuis par le bureau d'études." },
            { titre: "Autorisations et devis", texte: "Vote en assemblée générale si besoin, puis devis comparables sur la base de l'étude." },
            { titre: "Étaiement et démolition", texte: "Étais calés de part et d'autre du mur, puis démolition contrôlée. Photos datées chaque jour." },
            { titre: "Pose de la poutre", texte: "Poutre et poteaux posés, calés et solidarisés ; les étais ne sont retirés qu'après contrôle." },
            { titre: "Finitions et réception", texte: "Parements rebouchés, profilés protégés, réserves écrites et garanties remises." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre ouverture de mur porteur, étudiée avant d'ouvrir"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chPoteauAcierPlatinePied.jpeg"

        alt="Pied de poteau acier soudé sur sa platine, posé au fond d'un plancher ouvert lors d'une ouverture de mur porteur, gravats autour"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur l'ouverture de mur porteur">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Redistribuer les pièces, cuisine ouverte comprise." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Syndic, assemblée générale, mairie." },
            { href: "/observatoire-prix-renovation", titre: "Prix de la rénovation", texte: "Fourchettes poste par poste." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
