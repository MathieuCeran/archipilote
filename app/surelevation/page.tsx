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

/* Intention unique : surélever une maison (gagner un étage) en Île-de-France.
   Mot-clé principal (WhatsWrong, 10/2026) : « surélévation maison » (1 600/mois).
   Secondaires : « prix surélévation maison » (390), « surélévation maison avant/après » (320).
   Aucun prix de surélévation dans le dépôt (ni data.ts ni observatoire) : pas de tableau de
   prix, seulement les facteurs de coût déjà publiés et un renvoi vers l'estimateur.
   Durée 6-10 mois : chiffre de l'ancienne page. */

const CHEMIN = "/surelevation";
const TITRE = "Surélévation de maison en Île-de-France";
const DESCRIPTION =
  "Surélévation de maison : étude de la structure existante, permis de construire, ossature bois ou maçonnerie, coût des travaux et étapes, en Île-de-France.";
const FIL = [{ nom: "Surélévation de maison", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Surélévation maison : faisabilité, prix, étapes | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Surélévation maison : faisabilité, prix, étapes | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chCharpenteMaisonEchafaudage.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Comment savoir si ma maison peut supporter une surélévation ?",
    reponse:
      "Seule une étude de structure par un ingénieur ou un bureau d'études partenaire permet de trancher. Elle analyse les fondations, les murs porteurs et la charpente pour fixer la charge supplémentaire admissible. Elle précède tout chiffrage : un budget annoncé avant n'a pas de valeur.",
  },
  {
    question: "Quel est le prix d'une surélévation de maison ?",
    reponse:
      "Le coût des travaux dépend surtout du type de structure, des renforcements demandés par l'étude, de la dépose de la charpente et de la toiture et du levage des matériaux. Le prix au m2 est en général plus élevé qu'une extension au sol. Une fourchette fiable se donne après la visite technique et l'étude de structure.",
  },
  {
    question: "Une surélévation nécessite-t-elle un permis de construire ?",
    reponse:
      "Dans la quasi-totalité des cas, oui, plutôt qu'une simple déclaration préalable : elle modifie la hauteur et souvent l'aspect extérieur du bâtiment. Un architecte est obligatoire dès que la surface de plancher totale après travaux dépasse le seuil légal en vigueur ; les architectes partenaires interviennent alors en leur nom.",
  },
  {
    question: "Peut-on rester dans la maison pendant les travaux ?",
    reponse:
      "Le plus souvent, oui. La phase sensible est la dépose de la toiture et le montage de la nouvelle structure, qui exposent la maison aux intempéries. Un bâchage renforcé et une mise hors d'eau rapide permettent en général de rester sur place, sauf configuration particulière.",
  },
  {
    question: "Qui garantit la solidité de la structure après surélévation ?",
    reponse:
      "L'entreprise partenaire qui exécute la structure porte sa garantie décennale, et l'ingénieur ou l'architecte partenaire répond de son étude. ARCHI PILOTE RÉNOVATION pilote la cohérence du projet sans se substituer à leurs responsabilités.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Surélévation de maison : gagner un étage sans quitter son terrain"
        chapo="Une surélévation pose d'abord une question de structure : votre maison peut-elle porter un étage de plus ? Nous faisons vérifier la faisabilité, préparons le permis de construire, puis pilotons le chantier jusqu'à la livraison."
        image="/photos/chantiers/chCharpenteMaisonEchafaudage.jpeg"
        alt="Maison en pierre sous échafaudage : nouvelle charpente bois et deux lucarnes en panneaux OSB montées au-dessus des murs existants"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique de la maison sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Étude de structure confiée à un bureau d'études partenaire",
          "Permis de construire préparé avec un architecte partenaire",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Une surélévation de maison, ou exhaussement, est un agrandissement vertical : elle ajoute de la surface habitable sans toucher à l'emprise au sol. Mais elle ajoute aussi une charge que les fondations et les murs porteurs n'ont pas été conçus pour recevoir. Avant de dessiner la nouvelle chambre, il faut savoir ce que la structure existante peut porter.
        </p>
        <p>
          Si vous disposez de combles aménageables, les aménager suffit parfois. Sinon, la surélévation est souvent la bonne solution quand le terrain ne permet pas d'
          <Link href="/extension-maison">extension au sol</Link>. Nous cadrons la faisabilité, mobilisons ingénieurs et
          architectes partenaires, et coordonnons les entreprises qui exécutent et facturent les travaux.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "6-10 mois", label: "de l'étude à la livraison, en moyenne" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une surélévation de maison"
        accroche="Une surélévation de maison touche la structure, la charpente et la toiture, les règles d'urbanisme et tous les réseaux. Chaque poste est vérifié avant le chiffrage."
      >
        <PageCartes
          items={[
            { titre: "Étude de structure", texte: "Fondations, murs porteurs et charpente analysés par un ingénieur partenaire. Une étude de sol complète si besoin." },
            { titre: "Renforcements", texte: "Renfort ponctuel des murs porteurs ou reprise des fondations en sous-œuvre, par plots successifs, si la charge admissible est dépassée." },
            { titre: "Démarches administratives", texte: "Permis de construire, règles d'urbanisme du PLU (hauteur, aspect, parfois pente du toit) et, en copropriété, vote en assemblée générale, dossier présenté au syndic avant le dépôt en mairie." },
            { titre: "Dépose de toiture et structure", texte: "Bâchage renforcé, dépose de la couverture, montage de l'ossature puis mise hors d'eau et hors d'air rapide." },
            { titre: "Escalier intérieur", texte: "L'accès au nouvel étage demande souvent une trémie dans le plancher existant, avec reprise des charges des solives coupées." },
            { titre: "Réseaux, isolation, ventilation", texte: "Électricité, plomberie, chauffage et ventilation prolongés vers l'étage ; isolation thermique et acoustique entre l'ancien et le nouveau niveau." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Ossature bois, métal ou maçonnerie"
        accroche="Les matériaux de construction ne se choisissent pas sur catalogue : ils découlent de la capacité portante mesurée par l'étude de structure. Plus la structure est légère, moins les fondations sont sollicitées."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers2/charpente-traditionnelle-chene.jpeg"
          alt="Charpente bois neuve montée au-dessus d'une maison : fermes, pannes et chevrons posés avant la couverture"
          legende="Charpente neuve posée au-dessus des murs existants, avant la couverture."
        />
        <PageTableau
          colonnes={["Structure", "Poids", "Ce que cela implique"]}
          lignes={[
            ["Ossature bois", "La plus légère", "Souvent compatible avec des fondations limitées"],
            ["Structure métallique", "Légère", "Bon compromis entre poids et portée dans certaines configurations"],
            ["Maçonnerie traditionnelle", "Lourde", "Demande le plus souvent un renforcement préalable des fondations"],
          ]}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une surélévation de maison"
        accroche="Aucun prix au m2 sérieux ne peut s'annoncer avant l'étude de structure : c'est elle qui fixe le matériau et les renforcements, donc l'essentiel du coût des travaux. Ce qui fait varier le prix :"
      >
        <PageCartes
          colonnes={2}
          items={[
            { titre: "Type de structure", texte: "Ossature bois, métal ou maçonnerie : le choix découle de la portance de la maison." },
            { titre: "Renforcements", texte: "Renfort des murs porteurs ou reprise des fondations, quand l'étude l'exige." },
            { titre: "Toiture et levage", texte: "Dépose de la couverture et levage des matériaux rendent le m² plus cher qu'une extension au sol." },
            { titre: "Matériaux en direct", texte: "Sur les lots qui s'y prêtent, vous achetez au prix fournisseur, sans marge d'intermédiaire." },
          ]}
        />
        <p className="pg-note">
          Pour un premier ordre de grandeur, utilisez l'<Link href="/estimateur-travaux">estimateur de travaux</Link> ; les
          postes courants sont sur la page <Link href="/observatoire-prix-renovation">prix de la rénovation</Link>.
        </p>
      </PageSection>

      <PageSection
        titre="Surélévation de maison : avant, après"
        accroche="Après une surélévation de maison, on ne gagne pas seulement de la surface habitable : l'aménagement intérieur se repense. Voici ce qui change entre l'avant et l'après."
        fond="craie"
      >
        <PageCoches
          items={[
            "Un niveau habitable de plus, sans emprise au sol supplémentaire sur le jardin",
            "Une nouvelle toiture, isolée dès la construction",
            "Un escalier intérieur qui relie les niveaux, logé dans une trémie du plancher existant",
            "Des réseaux prolongés, et parfois une distribution des étages inférieurs repensée",
            "Une façade et une hauteur modifiées, conformes au permis de construire",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre surélévation"
        accroche="Le planning des travaux est validé avec vous avant le démarrage. La dépose de toiture, phase la plus exposée à la météo, est préparée en détail."
      >
        <PageEtapes
          items={[
            { titre: "Visite et étude de structure", texte: "Relevé de la maison, puis analyse des fondations, murs et charpente par l'ingénieur partenaire." },
            { titre: "Démarches administratives", texte: "Permis de construire avec l'architecte partenaire et, en copropriété, vote en assemblée générale." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Dépose et structure", texte: "Bâchage, dépose de la couverture, montage de l'ossature retenue." },
            { titre: "Hors d'eau, hors d'air", texte: "Fermeture rapide de l'enveloppe, puis réseaux, isolation et finitions. Photos datées chaque jour." },
            { titre: "Réception", texte: "Réserves écrites, reprises, remise des garanties et attestations d'assurance." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre surélévation, de l'étude à la livraison"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/charpente-traditionnelle-chene.jpeg"

        alt="Charpente bois neuve montée au-dessus d'une maison : fermes, pannes et chevrons posés avant la couverture"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la surélévation de maison">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/extension-maison", titre: "Extension de maison", texte: "L'alternative au sol quand le terrain le permet." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Permis de construire, syndic, assemblée générale." },
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
