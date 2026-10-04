import type { Metadata } from "next";
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
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : savoir quelle autorisation obtenir avant des travaux, en copropriété
   d'abord (syndic, assemblée générale), puis en mairie et en secteur protégé.
   Mot-clé principal : « autorisation travaux copropriété ».
   Contenu fusionné : /travaux-perimetre-abf (avis simple / conforme, ce qui est soumis,
   calendrier, refus), page redirigée ici.
   Retirés : schémas /photos/maquette et /photos/pedagogie (images générées), lien vers
   /reseau-partenaires et /savoir-faire-ancien (pages redirigées). */

const CHEMIN = "/demarches-administratives-renovation";
const TITRE = "Autorisation de travaux en copropriété, en mairie et en secteur ABF";
const DESCRIPTION =
  "Autorisation travaux copropriété : quand saisir le syndic et l'assemblée générale, déclaration préalable ou permis en mairie, secteur ABF et calendrier.";
const FIL = [{ nom: "Démarches administratives", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Autorisation travaux copropriété : syndic, AG, mairie, ABF | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Autorisation travaux copropriété : syndic, AG, mairie, ABF | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/chantiers/chFacadeRavalementVillage.jpeg" }],
  },
};

const FAQ = [
  {
    question: "Quels travaux en copropriété demandent l'accord de l'assemblée générale ?",
    reponse:
      "Les travaux qui touchent les parties communes, l'aspect extérieur de l'immeuble ou des réseaux collectifs demandent généralement un vote en assemblée générale. Les travaux strictement privatifs n'en ont en principe pas besoin, sauf clause contraire du règlement de copropriété.",
  },
  {
    question: "Faut-il une autorisation pour des travaux intérieurs ?",
    reponse:
      "Des travaux strictement intérieurs, qui ne modifient ni l'aspect extérieur ni la surface de plancher, ne demandent généralement pas d'autorisation d'urbanisme, sauf en secteur protégé. En copropriété, toucher un mur porteur ou une dalle reste soumis à l'accord du syndicat.",
  },
  {
    question: "Un carottage dans une dalle nécessite-t-il un accord ?",
    reponse:
      "Si la dalle est une partie commune ou si le carottage affecte la structure, une information au syndic, voire une autorisation en assemblée générale, est généralement nécessaire avant d'intervenir.",
  },
  {
    question: "Comment savoir si mon logement est en périmètre ABF ?",
    reponse:
      "Demandez-le au service urbanisme de la commune, sur la parcelle précise : sa réponse fait foi. Les servitudes annexées au plan local d'urbanisme, l'acte de vente et la note de renseignements d'urbanisme donnent une première indication.",
  },
  {
    question: "Ces informations remplacent-elles un conseil juridique ?",
    reponse:
      "Non. Elles restent générales. Chaque projet se vérifie au regard du règlement de copropriété, du plan local d'urbanisme et, si besoin, avec un professionnel compétent.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Autorisation de travaux en copropriété : syndic, mairie et ABF"
        chapo="Avant un chantier en immeuble, trois accords peuvent être nécessaires : celui de la copropriété, celui de la mairie et, en secteur protégé, l'avis de l'architecte des Bâtiments de France. Nous les identifions dès la visite technique."
        image="/photos/chantiers/chFacadeRavalementVillage.jpeg"
        alt="Immeuble ancien à toiture d'ardoise entièrement échafaudé pour un ravalement de façade, dans une rue de centre-bourg"
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Repérage des autorisations nécessaires à la visite technique",
          "Dossier technique pour le syndic et l'assemblée générale",
          "Montage et suivi des dossiers de déclaration préalable",
          "Calendrier copropriété et urbanisme préparé ensemble",
          "Un seul interlocuteur jusqu'à la réception",
        ]}
      >
        <p>
          En copropriété, l'autorisation de travaux dépend de ce que vous touchez. Les parties privatives restent
          libres en principe. Les parties communes, l'aspect extérieur ou une modification structurelle demandent
          l'accord du syndicat des copropriétaires, voté en assemblée générale.
        </p>
        <p>
          Nous plaçons la question administrative avant le chiffrage des finitions. Lorsque la loi impose un
          architecte, le dossier est signé par un architecte partenaire, qui intervient en son nom.
        </p>
      </PageIntro>

      <PageChiffres
        items={[
          { valeur: "1", label: "interlocuteur pour tout le chantier" },
          { valeur: "48 h", label: "pour l'étude de projet (ouvrées)" },
          { valeur: "≈ 1 mois", label: "d'instruction en plus en secteur ABF" },
          { valeur: "1", label: "interlocuteur pour tous les dossiers" },
        ]}
      />

      <PageSection
        titre="Quelle autorisation pour quels travaux ?"
        accroche="La nature des travaux décide du niveau d'autorisation. Repères généraux, à vérifier sur chaque dossier."
      >
        <PageTableau
          colonnes={["Travaux envisagés", "Autorisation généralement nécessaire"]}
          lignes={[
            ["Parties privatives (intérieur du logement)", "Aucune autorisation d'urbanisme en principe, sauf secteur protégé ou clause du règlement de copropriété."],
            ["Partie commune (gaine, réseau collectif)", "Accord du syndic, avec vote en assemblée générale si le sujet le nécessite."],
            ["Façade", "Déclaration préalable en mairie, et accord de la copropriété si la façade est une partie commune."],
            ["Modification structurelle (mur porteur, dalle, ouverture de plancher)", "Étude de structure et accord de l'assemblée générale dès qu'une partie commune ou une dalle est concernée."],
            ["Extension", "Permis de construire au-delà de certains seuils de surface, selon le plan local d'urbanisme."],
            ["Surélévation", "Permis de construire, et accord de la copropriété si la structure de l'immeuble est concernée."],
          ]}
        />
      </PageSection>

      <PageSection
        titre="L'autorisation de la copropriété : syndic et assemblée générale"
        accroche="Les parties communes relèvent d'une décision collective. Une autorisation de travaux en copropriété s'obtient par un vote, à la majorité prévue par la loi selon la nature des travaux."
      >
        <PageEtapes
          items={[
            { titre: "Qualifier les travaux", texte: "Vérifier si le projet touche une partie commune (gaine, réseau, façade, dalle) ou reste privatif." },
            { titre: "Lire le règlement de copropriété", texte: "Il peut restreindre certains travaux, sur les façades, les sols ou l'usage des lots." },
            { titre: "Constituer le dossier technique", texte: "Descriptif, plan ou schéma, avis d'un ingénieur si besoin, attestations d'assurance des entreprises qui portent les garanties travaux." },
            { titre: "Saisir le syndic", texte: "Par lettre recommandée, avec demande d'inscription à l'ordre du jour de la prochaine assemblée générale." },
            { titre: "Présenter le dossier en AG", texte: "Les copropriétaires votent sur les éléments techniques réunis. La décision figure au procès-verbal." },
            { titre: "Organiser le chantier", texte: "Après le vote : passage des entreprises, protection des parties communes, information des voisins." },
          ]}
        />
      </PageSection>

      <PageSection
        titre="L'autorisation de la mairie : déclaration préalable ou permis"
        accroche="Dès que l'aspect extérieur change ou qu'une surface est créée, une autorisation d'urbanisme s'ajoute à celle de la copropriété."
      >
        <PageCartes
          colonnes={2}
          items={[
            {
              titre: "Déclaration préalable de travaux",
              texte: "Autorisation simplifiée pour les projets limités : modification de façade, menuiseries extérieures, petite surface créée. Le dossier est déposé en mairie.",
            },
            {
              titre: "Permis de construire",
              texte: "Nécessaire au-delà de certains seuils de surface, notamment pour une extension ou une surélévation. L'instruction dépend du plan local d'urbanisme.",
              href: "/surelevation",
            },
          ]}
        />
      </PageSection>

      <PageSection
        titre="Travaux en secteur ABF"
        accroche="Aux abords d'un monument historique ou dans un site patrimonial remarquable, tout ce qui modifie l'aspect extérieur passe devant l'architecte des Bâtiments de France."
      >
        <PageCoches
          items={[
            "Menuiseries extérieures : matériau, profil, teinte, découpage des vitrages, même pour un remplacement « à l'identique »",
            "Volets, persiennes, garde-corps et ferronneries",
            "Ravalement : nature de l'enduit, finition, teinte, modénatures",
            "Verrière, châssis de toit, lucarne, sortie de toiture, climatiseur ou pompe à chaleur visible",
            "L'intérieur du logement n'est en principe pas concerné, sauf protection particulière du bâtiment",
          ]}
        />
        <PageTableau
          colonnes={["", "Avis simple", "Avis conforme"]}
          lignes={[
            ["Portée", "L'autorité qui délivre l'autorisation le consulte, mais peut s'en écarter.", "Il s'impose à l'autorité qui délivre l'autorisation."],
            ["Si l'avis est défavorable", "L'autorisation reste possible.", "La demande est en principe refusée."],
            ["Ce que ça change", "Le dossier se défend d'abord devant la commune.", "L'essentiel se joue avant le dépôt, avec le service du patrimoine."],
          ]}
          note="Le régime applicable dépend de la protection en cause. Il se vérifie au cas par cas auprès du service urbanisme de la commune."
        />
      </PageSection>

      <PageSection
        titre="Le calendrier des autorisations"
        accroche="Les autorisations ne rendent pas un projet impossible. Elles le rendent plus long, et moins tolérant à l'improvisation."
      >
        <PageCoches
          items={[
            "La copropriété suit le rythme des assemblées générales : le dossier se prépare bien avant le chantier",
            "Conservez le procès-verbal de l'assemblée : c'est la preuve de votre autorisation de travaux en copropriété",
            "En secteur ABF, comptez en pratique environ un mois d'instruction de plus qu'un dossier ordinaire",
            "Le vrai risque est une pièce manquante ou un refus : le délai repart alors de zéro",
            "Un refus porte le plus souvent sur des points précis ; on les reprend, puis on redépose",
            "Aucun travaux avant l'autorisation : en secteur protégé, ils exposent à une remise en état",
            "Informez les voisins et respectez les horaires fixés par la commune ou le règlement de copropriété",
          ]}
        />
      </PageSection>

      <PageAppel

        titre="Vos autorisations, préparées avant les travaux"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers/chFacadeRavalementVillage.jpeg"

        alt="Immeuble ancien à toiture d'ardoise entièrement échafaudé pour un ravalement de façade, dans une rue de centre-bourg"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur l'autorisation de travaux en copropriété">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/ouverture-mur-porteur", titre: "Ouverture de mur porteur", texte: "Étude de structure et accord de la copropriété." },
            { href: "/surelevation", titre: "Surélévation", texte: "Permis, plan local d'urbanisme et copropriété." },
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Un chantier en immeuble, piloté de bout en bout." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
