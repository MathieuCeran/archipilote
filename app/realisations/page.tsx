import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { AvisTrustpilot } from "../accueil/avis";
import {
  PageHero,
  PageIntro,
  PageSection,
  PageAppel,
  PageGalerie,
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : voir des réalisations de rénovation d'appartement (preuves en photos).
   Mot-clé principal (WhatsWrong, 10/2026) : « réalisations rénovation appartement ».
   Fusion : temoignages-clients (redirigée). Les citations « exemples anonymisés » de cette
   page ne sont PAS reprises : rien ne permet de les vérifier. Les avis passent par l'encart
   Trustpilot existant (mêmes avis publiés que sur l'accueil, nommés et datés).
   Retirés de l'ancienne page : les trois « cas documentés » sans photo (Paris 11e, maison 1970,
   studio 92 : résultats non vérifiables), tous les visuels /maquette et /pedagogie, les
   comparateurs avant/après illustratifs.
   Photos : uniquement /photos/chantiers, ouvertes avant emploi, sans visage. Les vues chHdg*
   retenues ne sont PAS des doublons des photos de /photos/chantiers2 attribuées aux autres pages
   (comparaison perceptuelle 32×32 faite le 04/10/2026). Légendes reprises de l'ancienne page,
   condensées. */

const CHEMIN = "/realisations";
const TITRE = "Réalisations de rénovation d'appartement";
const DESCRIPTION =
  "Réalisations rénovation appartement à Paris et en Île-de-France : photos de chantiers réels, appartement haussmannien, menuiserie sur mesure, avant/après.";
const FIL = [{ nom: "Réalisations", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Réalisations rénovation appartement : photos de chantiers réels | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Réalisations rénovation appartement : photos de chantiers réels | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/og.jpg" }],
  },
};

const CH = "/photos/chantiers";
const REEL = "Chantier réel des équipes partenaires.";

const HAUSSMANNIEN = [
  {
    src: `${CH}/chHdgChambreChemineeMiroirMoulure.jpeg`,
    alt: "Chambre d'un appartement ancien rénové : cheminée de marbre et trumeau cintré d'origine conservés, dressing en placage bois clair",
    legende: `Cheminée de marbre et trumeau d'origine conservés, dressing toute hauteur en placage bois clair. ${REEL}`,
  },
  {
    src: `${CH}/chHdgChambreVeloursTaupeBalcon.jpeg`,
    alt: "Chambre sur rue rénovée : tête de lit en panneaux capitonnés taupe, radiateur en fonte conservé, parquet chêne à chevrons",
    legende: `Tête de lit capitonnée sur soubassement bois, radiateur en fonte d'origine conservé, parquet à chevrons. ${REEL}`,
  },
  {
    src: `${CH}/chHdgDetailMarbreGrisVasque.jpeg`,
    alt: "Salle d'eau en marbre gris veiné : vasque-auge suspendue et robinetterie murale encastrée dans la pierre",
    legende: `Vasque-auge taillée dans la même dalle que le parement, robinetterie encastrée dans la pierre. ${REEL}`,
  },
  {
    src: `${CH}/chHdgChambrePlacardMoulure.jpeg`,
    alt: "Chambre rénovée avec placard toute hauteur dont les façades reprennent les panneaux moulurés de la pièce",
    legende: `Placard toute hauteur aux façades moulurées, corniche reprise en retour sur le caisson. ${REEL}`,
  },
  {
    src: `${CH}/chHdgChambreBalconApplique.jpeg`,
    alt: "Chambre d'angle à mur arrondi, deux portes-fenêtres sur balcons à garde-corps en fonte",
    legende: `Chambre d'angle : mur courbe conservé, balcons à garde-corps en fonte, radiateur ancien maintenu. ${REEL}`,
  },
  {
    src: `${CH}/chHdgDiptyqueSalonMiroirBalcon.jpeg`,
    alt: "Salon reflété dans un trumeau à cadre de plâtre sculpté, et balcon filant sur une rue parisienne",
    legende: `Trumeau à cadre de plâtre sculpté conservé et balcon filant sur rue, garde-corps d'origine. ${REEL}`,
  },
];

const SUR_MESURE = [
  {
    src: `${CH}/chDressingBufetNoyerMoulures1.jpeg`,
    alt: "Dressing toute hauteur et enfilade basse en placage noyer dans une pièce ancienne à corniche moulurée",
    legende: `Dressing et enfilade en placage noyer, corniche moulurée conservée. Sol encore protégé. ${REEL}`,
  },
  {
    src: `${CH}/chPorteCoulissanteClaustraChene2.jpeg`,
    alt: "Porte coulissante à claustra de lames verticales en bois clair, rail masqué par un bandeau",
    legende: `Porte coulissante à claustra en bois clair, rail masqué par un bandeau filant. ${REEL}`,
  },
  {
    src: `${CH}/chEnsembleRangementRadiateurClaustra.jpeg`,
    alt: "Mur de rangements sur mesure avec étagères ouvertes, portes pleines et habillage à claire-voie devant le radiateur",
    legende: `Mur de rangements avec habillage à claire-voie du radiateur, avant peinture. ${REEL}`,
  },
  {
    src: `${CH}/chBoiserieCourbeNicheEtageres.jpeg`,
    alt: "Boiserie en placage bois clair suivant la courbe du mur, niches à casiers aux angles arrondis",
    legende: `Boiserie courbe en placage bois clair et niches à casiers, chantier en cours. ${REEL}`,
  },
  {
    src: `${CH}/chCouloirDressingToilettes.jpeg`,
    alt: "Couloir livré : mur de placards toute hauteur en placage chêne, porte à panneaux ancienne repeinte",
    legende: `Placards en placage chêne sur toute la longueur du couloir, porte ancienne conservée. ${REEL}`,
  },
  {
    src: `${CH}/chBibliothequeNicheGrisTaupe.jpeg`,
    alt: "Bibliothèque sur mesure peinte gris taupe, placards moulurés en partie basse, face à un mur de pierre apparente",
    legende: `Bibliothèque sur mesure gris taupe, plancher bois ancien conservé. ${REEL}`,
  },
];

const AVANT_APRES = [
  {
    src: `${CH}/chAzulejosAvantTravaux.jpeg`,
    alt: "Avant travaux : pièce aux murs en azulejos, baies en pavés de verre et plafond en lambris",
    legende: "Avant : murs en azulejos, baies en pavés de verre, plafond en lambris.",
  },
  {
    src: `${CH}/chGresCerameMarbreApresTravaux.jpeg`,
    alt: "Après travaux : même pièce recarrelée en grand format poli à veinage gris, murs et sol",
    legende: `Après : la même pièce en carrelage grand format poli, mur du fond pas encore fini. ${REEL}`,
  },
  {
    src: `${CH}/chFacadeAvantRavalementTyrolien.jpeg`,
    alt: "Avant ravalement : façade de maison de village en enduit tyrolien, rebouchages autour des menuiseries",
    legende: "Avant : enduit ciment tyrolien et rebouchages autour de chaque menuiserie.",
  },
  {
    src: `${CH}/chFacadeRavalementEnduitGratte.jpeg`,
    alt: "Après ravalement : même façade en enduit gratté, encadrements de baies blancs, échafaudage encore monté",
    legende: `Après : enduit gratté, encadrements rechampis en blanc. Échafaudage encore en place. ${REEL}`,
  },
  {
    src: `${CH}/chOptiqueComptoirCarcasseBrute.jpeg`,
    alt: "Local commercial en travaux : carcasse brute du comptoir d'accueil montée sur site",
    legende: "Avant : la carcasse du comptoir d'un local d'opticien, montée sur site.",
  },
  {
    src: `${CH}/chOptiqueComptoirAccueilFini.jpeg`,
    alt: "Local commercial livré : comptoir d'accueil habillé de bois et de laque, présentoirs muraux",
    legende: `Après : le même comptoir habillé en bois et laque, local livré. ${REEL}`,
  },
];

const CHANTIER = [
  {
    src: `${CH}/chDemolitionMursDecapes.jpeg`,
    alt: "Pièce d'un logement ancien mise à nu : murs décapés, cloison en pan de bois apparente, alimentations neuves en pied de mur",
    legende: `Démolition : murs décapés, pan de bois apparent, alimentations neuves déjà tirées. ${REEL}`,
  },
  {
    src: `${CH}/chNourriceManometreEvacuationPvc.jpeg`,
    alt: "Nourrice de plomberie avec manomètre pour l'essai de mise en pression, évacuations PVC à côté",
    legende: `Essai de mise en pression du réseau d'eau avant fermeture des cloisons. ${REEL}`,
  },
  {
    src: `${CH}/chSousCouchePanneauxOSB.jpeg`,
    alt: "Panneaux OSB posés sur tout le plancher d'un salon haussmannien, boiseries et volets intérieurs en place",
    legende: `Plancher d'un salon haussmannien refait en OSB, boiseries restées en place. ${REEL}`,
  },
  {
    src: `${CH}/chCarrelageBoisBatonsRompusCroisillons.jpeg`,
    alt: "Carrelage effet bois en cours de pose en bâtons rompus, croisillons autonivelants encore en place",
    legende: `Carrelage effet bois posé en bâtons rompus, croisillons encore en place. ${REEL}`,
  },
  {
    src: `${CH}/chParquetPinLargesLamesVitrifie.jpeg`,
    alt: "Parquet ancien à larges lames poncé et vitrifié, radiateur à colonnes conservé",
    legende: `Parquet d'origine à larges lames poncé et vitrifié, pas un sol neuf. ${REEL}`,
  },
  {
    src: `${CH}/chCuisineTerracotta.jpeg`,
    alt: "Cuisine linéaire livrée : façades terracotta, meubles hauts crème, sol en carreaux de ciment, corniche moulurée",
    legende: `Cuisine livrée dans une pièce ancienne, sol en carreaux de ciment. ${REEL}`,
  },
];

const FAQ = [
  {
    question: "Qui a réalisé les travaux présentés sur cette page ?",
    reponse:
      "Les entreprises partenaires, qui les ont exécutés et facturés directement à leurs clients. ARCHI PILOTE RÉNOVATION a piloté ces projets ; un ingénieur ou un architecte partenaire est intervenu en son nom lorsque le dossier l'exigeait.",
  },
  {
    question: "Pourquoi les réalisations sont-elles anonymisées ?",
    reponse:
      "Par respect de la vie privée des clients : ni nom, ni adresse précise, ni visage. Les légendes décrivent seulement ce que montre chaque photo.",
  },
  {
    question: "Ces photos sont-elles toutes prises après travaux ?",
    reponse:
      "Non. Certaines montrent un chantier en cours : démolition, réseaux avant fermeture, sol encore protégé. La légende le précise à chaque fois.",
  },
  {
    question: "Quel budget prévoir pour une rénovation d'appartement comme celles-ci ?",
    reponse:
      "Le coût de rénovation dépend surtout du niveau de travaux. En repères Île-de-France 2026 : 600 à 900 € par m² pour une rénovation partielle, 1 000 à 1 500 € pour une rénovation complète, 1 500 à 2 500 € en haut de gamme. Le budget de rénovation réel se fixe sur les devis des entreprises, après la visite technique.",
  },
  {
    question: "Puis-je consulter les devis ou factures de ces chantiers ?",
    reponse:
      "Non, ces documents restent confidentiels. Pour situer votre budget, consultez les prix au m² de la rénovation ou l'estimateur de travaux, puis demandez une visite technique.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Réalisations de rénovation d'appartement : des chantiers réels, en photos"
        chapo="Appartement haussmannien, menuiserie sur mesure, pièces d'eau, chantiers en cours : des photos prises sur des chantiers pilotés et exécutés par les entreprises partenaires."
        image={`${CH}/chHdgCuisineOnyxParquetVersailles.jpeg`}
        alt="Réalisation de rénovation d'appartement : cuisine en placage bois clair, parement en pierre naturelle rubanée et parquet chêne en panneaux de Versailles"
      />

      <PageIntro
        titreCarte="Ce que montre cette page"
        points={[
          "Uniquement des photos de chantiers réels",
          "Aucune image de synthèse ni de catalogue",
          "Des légendes fidèles à ce qu'on voit",
          "Des clients anonymisés, sans visage",
          "Des travaux exécutés par les entreprises partenaires",
        ]}
      >
        <p>
          Ces réalisations de rénovation d'appartement servent à juger d'un travail sur pièce : la qualité d'une
          finition, un décor ancien conservé, un réseau d'électricité ou de plomberie vérifié avant d'être caché.
        </p>
        <p>
          Rénovation complète ou rénovation partielle, chaque photo vient d'un chantier piloté par ARCHI PILOTE
          RÉNOVATION : diagnostic de l'appartement, planning de chantier, coordination des artisans partenaires
          jusqu'à la réception de chantier. Quand un chantier n'est pas terminé sur la photo, la légende le dit.
        </p>
      </PageIntro>

      <PageSection
        titre="Un appartement haussmannien rénové"
        accroche="Une rénovation intérieure dans un grand appartement ancien parisien, photographiée après travaux : décor d'origine conservé, pierre, menuiseries sur mesure."
      >
        <PageGalerie items={HAUSSMANNIEN} />
      </PageSection>

      <PageSection
        titre="Menuiserie et agencement sur mesure"
        accroche="L'aménagement intérieur sur mesure : dressings, bibliothèques, portes et habillages dessinés pour la pièce, sur plusieurs chantiers de rénovation d'appartement."
      >
        <PageGalerie items={SUR_MESURE} />
      </PageSection>

      <PageSection
        titre="Avant / après : trois chantiers réels"
        accroche="Chaque paire montre le même lieu avant puis après travaux : une pièce recarrelée, une façade ravalée, un local commercial agencé."
      >
        <PageGalerie items={AVANT_APRES} />
      </PageSection>

      <PageSection
        titre="Pendant le chantier"
        accroche="Ce qui ne se voit plus une fois l'appartement livré : démolition avant redistribution des pièces, électricité, plomberie, supports de sol. Ces étapes de rénovation intérieure sont photographiées avant d'être recouvertes."
      >
        <PageGalerie items={CHANTIER} />
      </PageSection>

      <PageSection
        titre="Avis clients"
        accroche="Les avis sont publiés sur Trustpilot, une plateforme indépendante : nous ne pouvons ni les modifier ni les supprimer."
      >
        <AvisTrustpilot />
      </PageSection>

      <PageAppel

        titre="Votre projet sera le prochain chantier documenté"

        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et un budget indicatif, sans engagement."

        image="/photos/chantiers2/appart2-etageres-chene.jpeg"

        alt="Étagères sur mesure en chêne clair dans un appartement parisien rénové"

        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}

      />


      <PageSection titre="Questions fréquentes sur nos réalisations de rénovation d'appartement">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Prix au m², étapes, copropriété." },
            { href: "/notre-methode", titre: "Notre méthode", texte: "Comment un chantier est piloté." },
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
