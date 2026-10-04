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

/* Intention unique : faire une rénovation énergétique (sortir d'un DPE F ou G) en Île-de-France.
   Mot-clé principal : « rénovation énergétique ». Secondaire (WhatsWrong, 10/2026) :
   « aide rénovation énergétique 2026 » (1 600/mois), MaPrimeRénov'.
   Contenu fusionné depuis /aides-renovation-energetique (redirigée) : aucun montant d'aide,
   seulement la méthode de vérification déjà publiée.
   Prix : postes « Isolation thermique (intérieure) », « Ventilation » et « Menuiseries
   extérieures » de /observatoire-prix-renovation. */

const CHEMIN = "/renovation-energetique";
const TITRE = "Rénovation énergétique en Île-de-France";
const DESCRIPTION =
  "Rénovation énergétique : isolation thermique, VMC et chauffage dans le bon ordre pour sortir d'un DPE F ou G. Aides 2026, prix indicatifs et étapes.";
const FIL = [{ nom: "Rénovation énergétique", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Rénovation énergétique : ordre des travaux, aides 2026, prix | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation énergétique : ordre des travaux, aides 2026, prix | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers2/combles-isolation-laine-sous-toiture.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Par quoi commencer une rénovation énergétique ?",
    reponse:
      "Par la lecture détaillée du diagnostic de performance énergétique (DPE), ou de l'audit énergétique s'il existe, pas seulement de l'étiquette énergie. Le détail poste par poste montre où se situent les principales déperditions : toiture et combles, murs, menuiseries, planchers bas ou renouvellement d'air. Les travaux suivent cet ordre de priorité, confirmé par la visite technique.",
  },
  {
    question: "Quelles aides pour une rénovation énergétique en 2026 ?",
    reponse:
      "Deux dispositifs concernent la plupart des projets : MaPrimeRénov', calculée selon vos revenus et le gain énergétique obtenu, et les Certificats d'Économie d'Énergie (CEE), versés par les fournisseurs d'énergie. Ces aides financières peuvent se cumuler selon les travaux. Leurs règles évoluent : vérifiez-les sur maprimerenov.gouv.fr ou service-public.fr au moment de votre projet.",
  },
  {
    question: "Peut-on isoler un logement sans s'occuper de la ventilation ?",
    reponse:
      "Ce n'est pas recommandé. Un logement rendu plus étanche à l'air garde l'humidité produite par ses occupants : condensation et moisissures apparaissent sur les parois froides. La ventilation mécanique contrôlée se pense en même temps que l'isolation, pas après.",
  },
  {
    question: "Isolation par l'intérieur ou par l'extérieur ?",
    reponse:
      "L'isolation par l'extérieur traite mieux les ponts thermiques et conserve la surface habitable, mais elle modifie la façade : autorisation d'urbanisme et, en copropriété, vote en assemblée générale. L'isolation par l'intérieur est plus simple en appartement, réduit un peu la surface et demande un soin particulier aux jonctions.",
  },
  {
    question: "Qui monte le dossier MaPrimeRénov' ?",
    reponse:
      "Nous vous aidons à identifier les pièces à réunir. La demande se dépose en général avant le début des travaux, avec des entreprises certifiées RGE pour les postes concernés. L'étude d'éligibilité et le versement relèvent des organismes officiels : aucune aide n'est promise avant l'étude de votre dossier.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Rénovation énergétique : sortir d'un DPE F ou G sans abîmer le bâti"
        chapo="Isolation, étanchéité à l'air, ventilation et chauffage forment un système. Nous fixons l'ordre des travaux à partir de votre diagnostic, préparons le dossier d'aides et pilotons les entreprises partenaires jusqu'à la réception."
        image="/photos/chantiers2/combles-isolation-laine-sous-toiture.jpeg"
        alt="Rénovation énergétique d'un comble : panneaux de laine minérale posés entre les chevrons d'une charpente ancienne, sous la toiture"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique du logement sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Ordre des travaux fixé à partir du DPE",
          "Pièces du dossier d'aides identifiées avec vous",
          "Devis des entreprises partenaires rendus comparables",
        ]}
      >
        <p>
          Un logement classé F ou G sur l'étiquette énergie additionne le plus souvent plusieurs faiblesses : combles peu isolés, murs anciens
          sans isolation, menuiseries vieillissantes, ventilation absente. Isoler au hasard ne suffit pas : traiter un
          poste sans les autres crée souvent un nouveau désordre, en particulier de la condensation.
        </p>
        <p>
          Une rénovation énergétique commence donc par un diagnostic du bâti : DPE, audit énergétique s'il a été fait, visite technique. Nous hiérarchisons les travaux avec vous,
          puis les entreprises partenaires établissent leurs devis, exécutent et facturent les travaux. Pour les postes
          aidés, la certification RGE de l'entreprise est vérifiée avant la signature.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "8", label: "corps de métier coordonnés" },
          { valeur: "12 mois", label: "de suivi après réception" },
        ]}
      />

      <PageSection
        titre="Ce que comprend une rénovation énergétique"
        accroche="Six postes, qui ne pèsent jamais autant les uns que les autres. Le détail du diagnostic de performance énergétique indique lesquels traiter en premier ; une rénovation globale les traite tous dans un même projet."
      >
        <PageCartes
          items={[
            {
              titre: "Toiture et combles",
              texte: "Souvent l'un des postes de déperdition les plus importants. Isolation des combles perdus ou des rampants, avec pare-vapeur continu côté chauffé.",
            },
            {
              titre: "Isolation thermique des murs",
              texte: "Par l'intérieur, fréquente en copropriété car elle ne change pas la façade. Par l'extérieur, qui enveloppe le bâtiment mais demande une autorisation d'urbanisme.",
            },
            {
              titre: "Ponts thermiques",
              texte: "Zones moins isolées que le reste de la paroi : jonctions de planchers, balcons, murs de refend. Non traitées, elles restent froides et concentrent la condensation.",
            },
            {
              titre: "Menuiseries et étanchéité à l'air",
              texte: "Des fenêtres neuves suppriment les fuites d'air qui renouvelaient l'air du logement. Leur remplacement se pense avec les entrées d'air de la ventilation.",
            },
            {
              titre: "Ventilation mécanique contrôlée",
              texte: "Simple flux autoréglable, hygroréglable (débit ajusté à l'humidité) ou double flux, qui récupère la chaleur de l'air extrait mais demande plus de gaines.",
            },
            {
              titre: "Chauffage performant",
              texte: "Redimensionné une fois l'enveloppe traitée, jamais avant, pour éviter un système trop puissant pour les besoins réels du logement isolé.",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="L'ordre des travaux : l'enveloppe avant le chauffage"
        accroche="En rénovation énergétique, les erreurs les plus coûteuses viennent presque toujours d'un mauvais ordre des travaux, pas d'un mauvais matériau. Les travaux d'isolation passent avant le chauffage. La ventilation avance en même temps que l'étanchéité à l'air."
        fond="craie"
      >
        <PageImage
          src="/photos/chantiers/chIsolationLaineUrsaVarioSdb.jpeg"
          alt="Isolation thermique par l'intérieur en laine minérale posée entre montants, joints et pourtour d'une fenêtre neuve repris à la bande adhésive"
          legende="Isolation par l'intérieur : les joints et le pourtour de la fenêtre sont repris à l'adhésif, là où se logent les ponts thermiques."
        />
        <PageCoches
          items={[
            "Lire le DPE poste par poste et hiérarchiser les déperditions",
            "Isoler toiture et murs en traitant les jonctions avec les parois voisines",
            "Reprendre l'étanchéité à l'air du logement",
            "Dimensionner la VMC au même moment, avec ses entrées d'air",
            "Remplacer les menuiseries en cohérence avec la ventilation",
            "Choisir un chauffage performant en dernier, dimensionné pour le logement isolé",
          ]}
        />
        <p>
          En copropriété, une ventilation qui traverse la façade ou la toiture, ou utilise une gaine commune, passe par un
          dossier présenté au syndic puis voté en assemblée générale. Le détail figure sur la page{" "}
          <Link href="/demarches-administratives-renovation">démarches administratives</Link>.
        </p>
      </PageSection>

      <PageSection
        titre="Aides à la rénovation énergétique en 2026"
        accroche="Les aides financières et leurs plafonds changent d'une année sur l'autre. Nous ne promettons aucune éligibilité avant l'étude de votre dossier ; voici ce qu'il faut vérifier."
      >
        <PageCartes
          items={[
            {
              titre: "MaPrimeRénov'",
              texte: "Aide de l'État calculée selon vos revenus (revenu fiscal de référence) et le gain énergétique obtenu par les travaux.",
            },
            {
              titre: "Certificats d'Économie d'Énergie",
              texte: "Primes CEE versées par les fournisseurs d'énergie. Elles peuvent se cumuler avec MaPrimeRénov' selon les travaux engagés.",
            },
            {
              titre: "Avant de signer",
              texte: "La demande se dépose en général avant le début des travaux, avec des entreprises certifiées RGE (le label qualité exigé pour les postes concernés).",
            },
            {
              titre: "Où vérifier",
              texte: "Montants et conditions à jour sur maprimerenov.gouv.fr et service-public.fr, au moment de votre projet.",
            },
          ]}
          colonnes={2}
        />
      </PageSection>

      <PageSection
        id="prix"
        titre="Prix d'une rénovation énergétique"
        accroche="Il n'existe pas de coût moyen valable pour tous les logements : le budget d'une rénovation énergétique dépend de la surface, de l'état initial du bâti et du niveau de performance énergétique visé. Ces repères Île-de-France donnent un ordre de grandeur par poste ; le prix réel se fixe sur les devis des entreprises, après la visite technique."
      >
        <PageTableau
          colonnes={["Poste", "Unité", "Fourchette indicative"]}
          lignes={[
            ["Isolation thermique par l'intérieur", "m² de paroi", "40 – 90 € / m²"],
            ["Ventilation (VMC simple à double flux)", "logement", "1 500 – 6 000 €"],
            ["Menuiseries extérieures", "fenêtre posée", "500 – 1 400 € / fenêtre"],
          ]}
          note={
            <>
              Fourchettes indicatives avant aides, hors honoraires de pilotage. Isolants et menuiseries peuvent être achetés
              en direct au prix fournisseur. Détail sur la page{" "}
              <Link href="/observatoire-prix-renovation">prix de la rénovation</Link> ; budget global avec l'
              <Link href="/estimateur-travaux">estimateur de travaux</Link>.
            </>
          }
        />
      </PageSection>

      <PageSection
        titre="Les étapes de votre projet"
        accroche="Le même déroulé pour chaque logement. Le planning des travaux est validé avec vous avant le démarrage."
      >
        <PageEtapes
          items={[
            { titre: "Visite technique", texte: "Lecture du DPE ou de l'audit énergétique, relevé de l'isolation thermique existante, des menuiseries, de la ventilation et du chauffage." },
            { titre: "Ordre des travaux", texte: "Postes hiérarchisés par impact réel, budget global et points de vigilance remis dans l'étude de projet." },
            { titre: "Dossier d'aides et autorisations", texte: "Pièces à réunir avant travaux, autorisation d'urbanisme ou accord du syndic si la façade est touchée." },
            { titre: "Devis comparables", texte: "Un descriptif commun envoyé aux entreprises partenaires, des devis lus ligne à ligne, certification RGE vérifiée." },
            { titre: "Chantier piloté", texte: "Isolation et pare-vapeur contrôlés avant fermeture, photos datées envoyées chaque jour." },
            { titre: "Réception", texte: "Mise en service de la ventilation, réserves écrites, remise des garanties et attestations." },
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Votre rénovation énergétique, dans le bon ordre"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chIsolationLaineUrsaVarioSdb.jpeg"

        alt="Isolation thermique par l'intérieur en laine minérale posée entre montants, joints et pourtour d'une fenêtre neuve repris à la bande adhésive"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur la rénovation énergétique">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-maison-pavillon", titre: "Rénovation de maison", texte: "Toiture, isolation et réseaux d'un pavillon." },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Mairie, syndic et assemblée générale." },
            { href: "/estimateur-travaux", titre: "Estimateur de travaux", texte: "Un premier budget pour vos travaux d'isolation." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
