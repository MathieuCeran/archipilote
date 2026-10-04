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

/* Intention unique : refaire ou mettre aux normes l'installation électrique d'un logement.
   Mot-clé principal : « rénovation électrique ». Secondaires (WhatsWrong) : tableau électrique aux
   normes, changer tableau électrique prix, mise aux normes électricité, remise aux normes électriques prix.
   Faits repris de electricite-plomberie-renovation et second-oeuvre (tableau, circuits par usage,
   différentiel 30 mA, mise à la terre, liaison équipotentielle, plan d'implantation, attestation de
   conformité, photos avant fermeture). Prix : ligne « Électricité (mise aux normes) » de
   l'observatoire des prix, 70 – 130 € / m². Aucun prix isolé du tableau n'existe dans le dépôt :
   il n'est pas inventé. La plomberie est seulement liée. */

const CHEMIN = "/renovation-electrique";
const TITRE = "Rénovation électrique à Paris et en Île-de-France";
const DESCRIPTION =
  "Rénovation électrique et mise aux normes NF C 15-100 : diagnostic, tableau électrique aux normes, circuits refaits avant les cloisons. Prix au m².";
const FIL = [{ nom: "Rénovation électrique", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation électrique : mise aux normes, tableau, prix au m² | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation électrique : mise aux normes, tableau, prix au m² | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chTableauElectriqueDisjoncteurs.jpeg" }],
  },
};

const SURFACES = [30, 50, 80, 100];
const PRIX_MIN = 70;
const PRIX_MAX = 130;
const fmt = (n: number) => n.toLocaleString("fr-FR");

const FAQ = [
  {
    question: "Quel est le prix d'une remise aux normes électrique ?",
    reponse:
      "En repère Île-de-France, la mise aux normes de l'électricité coûte de 70 à 130 € par m² habitable, soit environ 3 500 à 6 500 € pour 50 m². Le prix dépend de l'état de l'installation, du nombre de points à créer et de l'accès aux cloisons. Le prix réel est celui du devis de l'électricien.",
  },
  {
    question: "Faut-il changer le tableau électrique ?",
    reponse:
      "Pas systématiquement. Mais un tableau ancien, saturé, sans protection différentielle adaptée ou aux circuits non identifiés est presque toujours remplacé en entier plutôt que complété, pour garantir une protection cohérente sur tout le logement.",
  },
  {
    question: "Combien coûte le changement d'un tableau électrique seul ?",
    reponse:
      "Nous ne publions pas de prix isolé pour le tableau : son remplacement fait le plus souvent partie de la mise aux normes, dont le prix se lit au m². L'électricien partenaire le chiffre ligne à ligne sur son devis, après la visite technique.",
  },
  {
    question: "Peut-on rester dans le logement pendant la rénovation électrique ?",
    reponse:
      "Pour une mise en sécurité limitée, souvent oui. Quand l'électricité est refaite en même temps que la plomberie ou les cloisons, le logement devient difficilement habitable pendant plusieurs semaines, faute d'installation stabilisée.",
  },
  {
    question: "Qui réalise et facture les travaux ?",
    reponse:
      "L'électricien partenaire, qualifié et assuré, établit son devis, exécute les travaux, vous remet l'attestation de conformité et vous facture directement. ARCHI PILOTE RÉNOVATION pilote le projet et ne facture pas les travaux.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation électrique : une installation aux normes avant de fermer les murs"
        chapo="Tableau vétuste, prises sans terre, circuits saturés : nous faisons diagnostiquer l'installation, arrêtons le plan des points électriques avec vous, puis pilotons l'électricien jusqu'à l'attestation de conformité."
        image="/photos/chantiers/chTableauElectriqueDisjoncteurs.jpeg"
        alt="Rénovation électrique en cours : tableau électrique neuf encastré dans un mur fraîchement enduit, rangées de disjoncteurs alimentées par peignes, borniers bleu et rouge, disjoncteur de branchement au-dessus"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des électriciens partenaires rendus comparables",
          "Photos datées des réseaux avant fermeture",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Rénovation partielle ou complète, une rénovation électrique ne commence pas par le nombre de prises. Elle commence par un tableau conforme, une
          mise à la terre effective et un plan d'implantation validé avant l'ouverture des cloisons.
        </p>
        <p>
          Les réseaux cachés sont difficiles à corriger après les doublages, le carrelage et la peinture. Nous les
          faisons donc décider tôt, contrôler avant fermeture et photographier. L'électricien partenaire, un électricien
          professionnel qualifié et assuré, exécute et facture les travaux.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "30 mA", label: "protection différentielle des circuits" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une mise aux normes électrique"
        accroche="La norme NF C 15-100 fixe les règles d'une installation de logement. En rénovation, la mise aux normes de l'électricité porte sur ces quatre points."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Tableau électrique aux normes",
              texte: "Un tableau vétuste ou sans différentiel adapté est remplacé en entier, disjoncteurs et différentiels neufs. Les circuits y sont repérés et il reste accessible après les finitions.",
            },
            {
              titre: "Circuits séparés par usage",
              texte: "Éclairage, prises de courant, cuisine, chauffage électrique : un défaut sur un circuit ne prive plus tout le logement de courant.",
            },
            {
              titre: "Terre et liaison équipotentielle",
              texte: "Mise à la terre effective, liaisons vétustes remplacées, liaison équipotentielle en salle d'eau.",
            },
            {
              titre: "Plan d'implantation",
              texte: "Chaque prise, interrupteur et point lumineux placé sur un plan validé avant de tirer les gaines, jamais improvisé sur chantier.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Refaire les réseaux avant de fermer"
        accroche="Une fois le plan validé, les gaines sont tirées et repérées pendant que tout reste accessible : c'est la dernière étape où une correction reste peu coûteuse."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chElectriciteFauxPlafondFaisceaux.jpeg"
          alt="Rénovation électrique d'un appartement avant fermeture : faisceaux de gaines bleues et de câbles regroupés le long d'un mur, ossature métallique du faux plafond posée, bâti-support de WC en attente"
          legende="Gaines tirées au-dessus de l'ossature du faux plafond, avant la pose des plaques."
        />
        <PageCoches
          items={[
            "Diagnostic électrique initial : tableau, circuits, mise à la terre et état des liaisons",
            "Position de chaque point électrique conforme au plan validé",
            "Implantation de la cuisine arrêtée avant le passage des circuits",
            "Câblage électrique repéré et photographié, avec date, avant la pose des plaques",
            "Attestation de conformité remise à la réception",
          ]}
        />
        <p className="pg-note">
          La plomberie se refait au même moment, cloisons ouvertes : elle est détaillée sur les pages{" "}
          <Link href="/renovation-salle-de-bain-maison">rénovation de salle de bain</Link> et{" "}
          <Link href="/renovation-cuisine-maison">rénovation de cuisine</Link>.
        </p>
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation électrique"
        accroche="Le coût d'une rénovation électrique se lit au prix au m² : en Île-de-France, la mise aux normes coûte de 70 à 130 € par m² habitable. Le remplacement du tableau électrique fait le plus souvent partie de cette mise aux normes."
      >
        <PageTableau
          colonnes={["Surface du logement", "Mise aux normes électrique (70 – 130 € / m²)"]}
          lignes={SURFACES.map((s) => [`${s} m²`, `${fmt(s * PRIX_MIN)} – ${fmt(s * PRIX_MAX)} €`])}
          note={
            <>
              Fourchettes indicatives et datées, hors honoraires de pilotage. Le prix contractuel est celui du devis de
              l'électricien, qui détaille fournitures et main-d'œuvre. Les autres postes sont sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link> ; premier budget avec l'
              <Link href="/estimateur-travaux">estimateur de travaux</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre rénovation électrique"
        accroche="Le même déroulé, qu'il s'agisse d'une remise aux normes seule ou d'un lot dans une rénovation complète."
      >
        <PageEtapes
          items={[
            { titre: "Visite et diagnostic", texte: "État du tableau, des circuits, de la terre et des liaisons existantes." },
            { titre: "Plan d'implantation", texte: "Prises, interrupteurs et points lumineux placés selon l'usage de chaque pièce." },
            { titre: "Devis comparables", texte: "Un descriptif commun aux électriciens partenaires, des devis lus ligne à ligne." },
            { titre: "Passage des réseaux", texte: "Gaines tirées et repérées cloisons ouvertes, tableau posé et câblé." },
            { titre: "Contrôle avant fermeture", texte: "Vérification des points et photos datées, puis fermeture des cloisons." },
            { titre: "Réception", texte: "Attestation de conformité, réserves écrites et remise des garanties." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre installation électrique, aux normes"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chElectriciteFauxPlafondFaisceaux.jpeg"

        alt="Rénovation électrique d'un appartement avant fermeture : faisceaux de gaines bleues et de câbles regroupés le long d'un mur, ossature métallique du faux plafond posée, bâti-support de WC en attente"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation électrique">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-complete", titre: "Rénovation complète", texte: "Électricité, plomberie et tous les autres lots." },
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Les réseaux en copropriété." },
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
