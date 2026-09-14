import type { Metadata } from "next";
import Link from "next/link";
import { HeroRefonte } from "./accueil/hero";
import { AvantApres } from "./accueil/avant-apres";
import { Matieres } from "./accueil/matieres";
import { ZoneIntervention } from "./accueil/zone-intervention";
import { PlanningLots } from "./accueil/planning-lots";
import { Demarches } from "./accueil/demarches";
import { AvisTrustpilot } from "./accueil/avis";
import { ChantiersComplexes, type Terrain } from "./accueil/chantiers-complexes";
import { Tirage } from "./components/tirage";
import { Domaines, type Domaine } from "./accueil/domaines";
import { Releve } from "./accueil/releve";
import { Parcours } from "./accueil/parcours";
import { STATS, SITE } from "./data";

/* ============================================================================
   PROTOTYPE DE REFONTE — page d’accueil.

   PASSE 2 (retours client) : « énormément de texte, rends ça plus digeste avec
   des images ; ne retire pas trop de texte, retire les sujets en doublon. »

   Ce qui a été RETIRÉ, et pourquoi — uniquement des doublons, jamais un sujet
   qui n’était dit qu’une fois :

   — la liste « ce que nous prenons en charge » (six puces) : c’était le
     déroulé en six étapes, écrit une seconde fois à plat. Le déroulé, lui, est
     une séquence justifiée ; c’est la version qui reste.
   — le bloc « Copropriété : ce qui doit passer en assemblée générale » des
     chantiers complexes : le tableau des démarches le dit ligne 4, et la
     question fréquente sur le mur porteur le dit une troisième fois.
   — le seuil des 150 m² dans le bloc Extension : il est déjà ligne 3 du
     tableau des démarches.
   — trois questions fréquentes dont la réponse figurait mot pour mot plus
     haut : périmètre ABF, recours obligatoire à l’architecte, achat des
     matériaux en direct. Les sept autres restent.

   Ce qui a été AJOUTÉ pour aérer, en puisant dans les médias du dépôt qui ne
   servaient nulle part : un comparateur avant/après manipulable, une bande de
   cinq matières, le planning des lots, et quatre photographies de chantier
   dans les colonnes qui restaient vides.
   ============================================================================ */

export const metadata: Metadata = {
  title: "Rénovation complète et chantiers complexes | ARCHI PILOTE RÉNOVATION",
  description:
    "Rénovation complète, extension, surélévation, immeuble haussmannien, périmètre ABF : dossier chiffré avant devis, démarches syndic et urbanisme portées, chantier suivi. Paris et Île-de-France.",
  alternates: { canonical: "/" },
};

/* STATS est déclaré dans l’ordre du fichier de contenu (48 h, 5 j, 8, 12 mois).
   Au cartouche il suit l’ordre du projet : on visite, on chiffre, on pilote,
   on suit. Un index plutôt qu’une copie des valeurs — le jour où le client
   corrige un chiffre dans data.ts, il est corrigé ici aussi. */
const ORDRE_STATS = [1, 0, 2, 3];

const COMPLEXES: Terrain[] = [
  {
    court: "01",
    titre: "Immeuble haussmannien et pierre de taille",
    texte:
      "Murs de refend porteurs, planchers bois sur solives, gaines techniques inexistantes, façade en pierre de taille dont la modification relève de la copropriété et souvent de l’urbanisme. Dans ce bâti, la question n’est jamais « peut-on abattre ce mur » mais « qu’est-ce que cette ouverture déplace, qui doit l’autoriser, et dans quel ordre ». Nous faisons intervenir un ingénieur structure partenaire indépendant avant de dessiner, pas après.",
  },
  {
    court: "02",
    titre: "Périmètre ABF et monument historique",
    texte:
      "Dans un périmètre de protection, toute modification de l’aspect extérieur — menuiseries, garde-corps, volets, ravalement, verrière, sortie de toiture — est soumise à l’architecte des Bâtiments de France. Deux régimes coexistent : un avis simple, que l’autorité peut écarter, et un avis conforme, qui s’impose. Le délai d’instruction est majoré, en pratique d’un mois de plus qu’un dossier ordinaire. Nous préparons le dossier dans le sens de ce que ces services acceptent habituellement, plutôt que de déposer et d’espérer.",
    lien: { href: "/travaux-perimetre-abf", label: "Avis simple ou avis conforme" },
  },
  {
    court: "03",
    titre: "Surélévation et création de surface",
    texte:
      "Une surélévation cumule presque toutes les difficultés d’un coup : capacité portante de l’existant, règles du PLU sur la hauteur et l’emprise, permis de construire, accord de la copropriété lorsque le projet touche les parties communes, et parfois cession de droit à surélever. La faisabilité se tranche sur trois documents — le PLU, le règlement de copropriété et une note de structure — avant toute étude d’aménagement.",
    lien: { href: "/surelevation", label: "Les trois documents à lire avant tout" },
  },
  {
    court: "04",
    titre: "Extension, combles, garage, véranda",
    texte:
      "Le régime dépend de la surface créée et de la zone : au-delà de 20 m², le permis de construire est en principe requis, seuil porté à 40 m² pour une extension en zone urbaine couverte par un PLU. Ces seuils décident du calendrier avant de décider du budget : nous les vérifions au PLU applicable dès la première visite.",
    lien: { href: "/extension-maison", label: "Les seuils qui décident du calendrier" },
  },
  {
    court: "05",
    titre: "Transformation d’usage et plateaux",
    texte:
      "Local commercial transformé en logement, plateau à diviser, immeuble à repositionner : la lecture se fait autant dans le règlement d’urbanisme et le règlement de copropriété que dans le bâti. C’est le terrain sur lequel nous sommes le plus souvent appelés par des investisseurs et des marchands de biens.",
  },
];

const MODELE: { titre: string; texte: string; lien?: { href: string; label: string } }[] = [
  {
    titre: "Le client achète ses matériaux en direct",
    texte:
      "Carrelage, parquet, robinetterie, appareillage électrique, cuisine : les références sont choisies avec nous, commandées par le client au prix fournisseur, et restent traçables. Les marges en cascade sortent du budget, le niveau de gamme reste maîtrisé.",
  },
  {
    titre: "Chaque devis est relu ligne à ligne",
    texte:
      "Quantités, unités, hypothèses, exclusions, prestations manquantes, doublons entre lots. Un devis moins cher qui a oublié trois postes n’est pas moins cher, il est incomplet.",
  },
  {
    titre: "Les rôles sont écrits",
    texte:
      "Les entreprises partenaires exécutent et facturent leurs travaux sous leur propre responsabilité, avec leurs propres assurances. Notre mission d’accompagnement est distincte de la leur, et son mode de rémunération est indiqué par écrit avant tout engagement.",
  },
  {
    titre: "Les hommes de l’art interviennent quand le dossier l’exige",
    texte:
      "Architecte inscrit à l’Ordre, ingénieur structure, bureau d’études : ils interviennent en leur nom, sous leur propre responsabilité, et leur intervention est budgétée dès le départ plutôt que découverte en cours de route.",
    lien: { href: "/modele-economique-transparence", label: "Comment le budget se construit" },
  },
];

const ETAPES: [string, string][] = [
  [
    "Premier échange",
    "Vous décrivez le bien, l’usage visé et l’ordre de budget envisagé. Nous vous disons dès cet échange si le projet relève d’une déclaration, d’un permis, d’un vote en assemblée, ou de rien de tout cela.",
  ],
  [
    "Visite technique",
    "Lecture du bâti, relevé, repérage des éléments porteurs, état des réseaux, contraintes de copropriété et d’urbanisme. Nous repartons avec les documents utiles : règlement de copropriété, derniers procès-verbaux, diagnostics, plans existants.",
  ],
  [
    "Programme et arbitrages",
    "Le projet est écrit poste par poste, avec les scénarios et ce que chacun coûte. C’est le moment où les décisions se prennent, pendant qu’elles ne coûtent encore rien.",
  ],
  [
    "Dossiers et autorisations",
    "Montage des demandes, association des hommes de l’art lorsque la loi l’impose, dépôt et suivi de l’instruction jusqu’à la décision.",
  ],
  [
    "Consultation et achats",
    "Consultation des entreprises partenaires sur une base identique, lecture comparée des chiffrages ligne à ligne, planification des commandes de matériaux selon les délais réels d’approvisionnement.",
  ],
  [
    "Chantier et réception",
    "Suivi sur place, photos datées transmises, journal des décisions et de leur effet sur le budget, jusqu’à la réception et la levée des réserves.",
  ],
];

/* Le « Nous ne… » qui ouvrait les cinq phrases est porté par le repère « non »
   posé dans la marge. La phrase gagne en tranchant ce que la répétition lui
   prenait, et le propos est mot pour mot le même. */
const REFUS = [
  "Nous n’exécutons pas les travaux nous-mêmes. Les entreprises partenaires les réalisent, les facturent et les garantissent sous leurs propres assurances.",
  "Nous ne prenons aucune marge sur les matériaux que vous achetez.",
  "Nous ne promettons pas un budget ou un délai avant d’avoir lu le bien, les autorisations nécessaires et les chiffrages.",
  "Nous ne déposons pas un dossier d’urbanisme dont nous savons qu’il sera refusé, pour gagner du temps sur le calendrier commercial.",
  "Nous ne prenons pas un chantier dont la faisabilité dépend d’une autorisation que nous jugeons improbable, sans vous l’avoir dit par écrit.",
];

const DOMAINES: Domaine[] = [
  {
    titre: "Gros œuvre et structure",
    texte:
      "Un mur porteur, un plancher, une extension ou une surélévation ne se traitent pas comme un lot de finition. Ouverture de mur porteur, création de trémie, reprise en sous-œuvre, poutre métallique, appuis et descente de charges : chaque décision engage la stabilité de l’ouvrage.",
    img: "/photos/maquette/chantier-ouverture-mur-etaiement.jpg",
    alt: "Ouverture de mur porteur en cours, étaiement métallique en place avant dépose de la maçonnerie",
    href: "/gros-oeuvre-structure",
    label: "Gros œuvre et structure",
    picto: "structure",
    ruban: "Étaiement en place, avant dépose",
  },
  {
    titre: "Second œuvre technique",
    texte:
      "Électricité, plomberie, cloisons, isolation, ventilation, chauffage et revêtements doivent être organisés autour des mêmes plans. L’objectif n’est pas de multiplier les intervenants, mais de réduire les contradictions entre leurs travaux.",
    img: "/photos/maquette/chantier-plomberie-encastree.jpg",
    alt: "Réseaux de plomberie encastrés dans une cloison avant fermeture, alimentations repérées",
    href: "/second-oeuvre",
    label: "Second œuvre technique",
    picto: "reseaux",
    ruban: "Réseaux repérés, avant fermeture",
  },
  {
    titre: "Performance énergétique",
    texte:
      "Logements classés F ou G : lecture complète de l’enveloppe et du renouvellement d’air, isolation, menuiseries, ventilation mécanique contrôlée, carottage de traversée, démarches auprès du syndic. L’ordre des travaux se déduit des postes de déperdition, pas des offres commerciales du moment.",
    img: "/photos/maquette/chantier-isolation-laine.jpg",
    alt: "Pose d’isolant en laine minérale entre montants d’ossature avant fermeture du doublage",
    href: "/renovation-energetique",
    label: "Rénovation énergétique",
    picto: "enveloppe",
    ruban: "Isolant posé, avant doublage",
  },
];

/* Sept questions. Trois ont été retirées parce que leur réponse figure déjà,
   mot pour mot, dans le corps de la page : le périmètre ABF, le recours
   obligatoire à l’architecte au-delà de 150 m², et l’achat des matériaux en
   direct. Les répéter sous forme de question n’apprenait rien à personne. */
const FAQ: [string, string][] = [
  [
    "Est-ce que vous êtes une entreprise de travaux ?",
    "Non. ARCHI PILOTE RÉNOVATION structure, chiffre et accompagne le projet. Les travaux sont exécutés et facturés par les entreprises partenaires, sous leur propre responsabilité et leurs propres assurances.",
  ],
  [
    "Puis-je abattre un mur porteur dans un immeuble en copropriété ?",
    "C’est souvent possible, jamais automatique. Il faut une étude d’un ingénieur structure avec note de calcul, puis une autorisation votée en assemblée générale, le mur porteur relevant des parties communes. L’étude se fait avant, parce que c’est elle qui détermine ce qui sera présenté au vote.",
  ],
  [
    "Combien de temps avant de pouvoir commencer les travaux ?",
    "Sans autorisation à obtenir, quelques semaines de préparation suffisent. Avec une déclaration préalable, comptez un à deux mois d’instruction. Avec un permis de construire, deux à quatre mois selon la nature du projet et la présence d’un périmètre protégé. Avec un vote en assemblée générale, le calendrier dépend de la date de l’assemblée annuelle, et c’est souvent le vrai facteur limitant.",
  ],
  [
    "Comment êtes-vous rémunérés ?",
    "Le mode de rémunération dépend de la mission et vous est indiqué par écrit avant tout engagement. Certaines missions d’accompagnement sont facturées au client, d’autres relèvent d’un apport d’affaires auprès des entreprises partenaires. Dans tous les cas, c’est écrit avant de commencer.",
  ],
  [
    "Travaillez-vous sur des petits projets ?",
    "Oui. Une salle de bain, une cuisine, un rafraîchissement complet entrent dans notre champ. Nous vous le disons simplement si le projet ne justifie pas un accompagnement structuré : dans ce cas, une mise en relation directe vous coûtera moins cher.",
  ],
  [
    "Intervenez-vous pour des professionnels de l’immobilier ?",
    "Oui. Marchands de biens, investisseurs, foncières, agences et gestionnaires : chiffrage avant compromis, arbitrage de scénarios de travaux, cadencement de plusieurs lots, travaux en site occupé.",
  ],
  [
    "Que se passe-t-il si un devis est plus élevé que prévu ?",
    "Nous le reprenons ligne à ligne avec l’entreprise, en cherchant d’abord ce qui explique l’écart : une quantité, une hypothèse, une prestation absente ailleurs. La négociation ne vient qu’après, quand on compare des choses comparables.",
  ],
];

/* Le repère de section vivait dans une gouttière de deux colonnes à gauche du
   titre. Sur une planche de dessin c’est la bonne place ; à l’écran, ça
   creusait une marge vide sur un quart de la largeur et donnait à chaque bloc
   l’air d’être décalé vers la droite. Il est repassé au-dessus du titre, et le
   contenu occupe toute la largeur du conteneur. */
function Section({
  repere,
  fond = "matiere",
  children,
  serre = false,
  id,
  filigrane,
  tirage,
}: {
  repere?: string;
  fond?: "matiere" | "dossier";
  children: React.ReactNode;
  serre?: boolean;
  id?: string;
  filigrane?: string;
  /* Le calque de tirage remplace le filigrane là où il apporte davantage :
     un dessin d’architecte derrière un texte d’architecte. */
  tirage?: string;
}) {
  return (
    <section id={id} className={fond === "dossier" ? "rf-dossier" : "rf-matiere"}>
      {tirage && <Tirage className={`rf-tirage--${tirage}`} />}
      {filigrane && (
        <span className={`rf-filigrane rf-filigrane--${filigrane}`} aria-hidden>
          <img src="/photos/maquette/monogramme-archi-pilote.png" alt="" width={1024} height={1024} loading="lazy" />
        </span>
      )}
      <div className={`rf-wrap ${serre ? "rf-section--serre" : "rf-section"}`}>
        {repere && <p className="rf-repere">{repere}</p>}
        {children}
      </div>
    </section>
  );
}

function LienSuite({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="rf-lien" style={{ fontFamily: "var(--f-display)", fontSize: "0.9rem", fontWeight: 500 }}>
      {label}
    </Link>
  );
}

/* DONNÉES STRUCTURÉES — reprises telles quelles de l'ancienne page d'accueil.

   Elles ne sont pas décoratives : elles déclarent l'adresse, les zones
   desservies et les domaines de compétence à un moteur. Les perdre en
   remplaçant la page aurait été une régression invisible à l'écran et bien
   réelle en référencement. Le `@id` diffère de celui du gabarit racine
   (#organisation contre #organization) : les deux coexistaient déjà avant
   cette promotion, on ne touche pas à ce point sans l'avoir instruit. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.archipiloterenovation.com/#organisation",
  name: "ARCHI PILOTE RÉNOVATION",
  url: "https://www.archipiloterenovation.com/",
  description:
    "Structuration, chiffrage et accompagnement de projets de rénovation à Paris et en Île-de-France : chantiers complexes, périmètre ABF, surélévation, extension, copropriété.",
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
    "rénovation complète",
    "chantier en périmètre ABF",
    "surélévation",
    "extension de maison",
    "ouverture de mur porteur",
    "autorisation de travaux en copropriété",
    "immeuble haussmannien",
    "achat de matériaux en direct",
  ],
};

export default function AccueilRefonte() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <HeroRefonte />

      {/* ── Cartouche : quatre engagements chiffrés ────────────────────────

          RETRAIT — les trois blocs « Avant le premier devis / Démarches
          portées / Chantier documenté » qui suivaient le cartouche ont été
          supprimés. Aucun ne disait quoi que ce soit d’inédit, et le
          recouvrement a été mesuré mot à mot :

          · « Avant le premier devis » reprend le titre même de la page —
            « Écrit et chiffré avant d’être un chantier » — deux écrans plus
            haut, et l’étape 03 du déroulé : 50 % de mots communs ;
          · « Démarches portées » est le sujet entier de la section Démarches,
            et l’étape 04 du déroulé ;
          · « Chantier documenté » est l’étape 06 du déroulé à 87 % de mots
            communs. « Photos datées transmises, journal des décisions et de
            leur effet sur le budget » y figure mot pour mot.

          Rien d’unique n’est perdu : l’occupation de voirie reste la
          situation 06 du diagnostic, et l’ordre « chiffrer avant de
          consulter » est démontré par la séquence du déroulé elle-même.
          Le cartouche gagne à rester seul — c’est une bande de chiffres,
          pas une section.

          Les chiffres viennent de STATS, déjà publiés par le site : ils
          engagent (cinq jours, quarante-huit heures, douze mois) au lieu de
          se vanter. Aucun n’a été inventé pour l’occasion, et l’ordre suit
          celui du projet : on visite, on chiffre, on pilote, on suit. */}
      <section className="rf-dossier">
        <Tirage className="rf-tirage--preuve" />
        <div className="rf-wrap rf-section--serre">
          <div className="rf-cartouche">
            {ORDRE_STATS.map((i) => {
              const s = STATS[i];
              return (
                <div key={s.label} className="rf-cartouche-case">
                  <span className="rf-cartouche-chiffre">
                    {s.prefixe}
                    {s.valeur}
                    {s.suffixe && <span className="rf-cartouche-unite">{s.suffixe.trim()}</span>}
                  </span>
                  <span className="rf-cartouche-label">{s.label}</span>
                  <span className="rf-cartouche-detail">{s.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Le risque est entre les lots ──────────────────────────────────── */}
      <Section repere="Le risque est entre les lots">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="rf-titre">Un projet lisible avant de devenir un chantier</h2>
            <div className="rf-texte mt-6" style={{ maxWidth: "34rem" }}>
              <p>
                Une rénovation complète ne se résume pas à additionner des corps de métier. Le risque apparaît entre les
                lots : une ouverture structurelle qui déplace un réseau, une isolation qui modifie la ventilation, une
                cuisine dessinée avant les contraintes électriques, un budget qui dérive parce que les arbitrages
                arrivent trop tard. Chaque entreprise peut avoir parfaitement raison dans son lot et rendre le suivant
                impossible.
              </p>
            </div>
          </div>

          {/* La liste des six missions qui occupait cette colonne était le
              déroulé en six étapes, écrit deux fois. La photographie dit la
              même chose plus vite : la poutre et le réseau sont dans le même
              plafond, et c’est là que les lots se contredisent. */}
          <figure className="rf-fig">
            <div className="rf-cadre" style={{ aspectRatio: "4 / 3" }}>
              <img
                src="/photos/maquette/chantier-ipn-habillage.jpg"
                alt="Poutre métallique posée après ouverture, en cours d’habillage, avec les réseaux qui passent dans le même plafond"
                loading="lazy"
                width={1280}
                height={896}
              />
              {/* La plaque ne porte pas un chiffre de vitrine : elle compte ce
                  qu’on voit sur la photographie, et la légende le nomme juste
                  en dessous. */}
              <span className="rf-plaque" aria-hidden>
                <span className="rf-plaque-chiffre">
                  3<em>lots</em>
                </span>
                <span className="rf-plaque-label">dans le même plafond</span>
              </span>
              <span className="rf-ruban" aria-hidden>
                Ouverture de mur porteur
              </span>
            </div>
            <figcaption>
              La poutre, l’habillage et les réseaux occupent le même plafond. L’ordre dans lequel ces trois
              lots interviennent ne se rattrape pas après coup.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Chantiers complexes — cinq terrains, un seul déplié ──────────── */}
      <Section repere="Chantiers complexes" fond="dossier" tirage="complexes">
        <div className="rf-entete">
          <h2 className="rf-titre">Les projets où le dossier compte autant que le chantier</h2>
          <p className="rf-chapo">
            Un chantier complexe n’est pas un chantier difficile à réaliser. C’est un chantier dont la faisabilité dépend
            d’une autorisation, d’un vote, d’un avis ou d’une contrainte de structure. Nous prenons les dossiers par cet
            endroit-là.
          </p>
        </div>

        {/* Deux colonnes, une seule rangée. Le schéma n’est pas un bloc posé
            sous la section : c’est sa moitié droite, en vis-à-vis permanent des
            cinq terrains. Empilés l’un sous l’autre, les trois éléments avaient
            des hauteurs différentes et laissaient des bandes de vide entre eux. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start mt-12">
          <ChantiersComplexes terrains={COMPLEXES} />

          <figure className="rf-fig">
            <div className="rf-planche" style={{ maxWidth: "none" }}>
              <img
                src="/photos/pedagogie/08-accueil-axonometrique.jpeg"
                alt="Axonométrie écorchée d’un appartement : structure porteuse, poutre métallique, réseaux d’eau chaude et froide, évacuations et circuits électriques repérés lot par lot"
                loading="lazy"
                width={1536}
                height={1024}
              />
            </div>
            <figcaption>
              Ce que déplace une seule ouverture : structure, alimentations, évacuations et circuits sont solidaires.
              Les points cerclés décident de l’ordre des lots — et donc du calendrier avant le budget.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Les démarches ─────────────────────────────────────────────────── */}
      <Section repere="Démarches">
        <div className="rf-entete">
          <h2 className="rf-titre">Les démarches, nous les préparons et nous les suivons</h2>
          <p className="rf-chapo">
            Un dossier mal monté ne se traduit pas par un refus, la plupart du temps. Il se traduit par une demande de
            pièces complémentaires, un délai qui repart, une entreprise qui a repris un autre chantier et une saison
            perdue.
          </p>
        </div>

        <div className="mt-9">
          <Demarches />
        </div>

        {/* La réserve et le renvoi partagent un rang sous un filet : superposés,
            ils coûtaient cent quarante pixels pour quatre lignes de petit texte.
            Le texte est intact, c’est la mise en page qui change. */}
        <div className="rf-pied-section">
          <p className="rf-reserve" style={{ maxWidth: "52rem" }}>
            Les seuils et les délais indiqués sont ceux du régime général. Ils se vérifient au cas par cas dans le PLU
            applicable et dans le règlement de copropriété. Lorsque la loi impose un architecte ou un bureau d’études,
            le dossier est signé par ce professionnel, qui intervient sous sa propre responsabilité.
          </p>
          <LienSuite href="/demarches-administratives-renovation" label="Le parcours complet, étape par étape" />
        </div>
      </Section>

      {/* ── Avant / après — la preuve que le visiteur manipule ────────────── */}
      <Section repere="Avant / après" fond="dossier">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="rf-titre">Le même cadrage, avant et après</h2>
            <div className="rf-texte mt-6">
              <p>
                Pavillon des années soixante : façade fatiguée, menuiseries d’origine, garde-corps corrodé, couverture en
                fin de vie. Ravalement, remplacement complet des menuiseries, reprise de la couverture, garde-corps et
                abords.
              </p>
              <p>
                <strong>Faites glisser le curseur.</strong> C’est le même point de vue, à deux ans d’écart.
              </p>
            </div>
          </div>

          <AvantApres
            avant="/photos/maquette/pavillon-facade-avant.jpg"
            apres="/photos/maquette/pavillon-facade-apres.jpg"
            altAvant="Façade du pavillon avant travaux : enduit gris fissuré, volets bois abîmés, garde-corps rouillé, toiture encrassée et jardin à l’abandon"
            altApres="Façade du pavillon après travaux : enduit clair repris, menuiseries et garde-corps gris anthracite, couverture neuve et abords aménagés"
            legende="Chantier des équipes partenaires. Les photographies avant et après sont prises depuis le même point de vue, sans recadrage."
          />
        </div>
      </Section>

      {/* La bande photographique pleine largeur qui séparait l’avant/après du
          bâti ancien a été retirée : deux images plein cadre coup sur coup, la
          seconde ne servait plus qu’à faire défiler. */}

      <Section repere="Bâti ancien">
        {/* Le titre était bridé à vingt-quatre caractères : il tombait en trois
            lignes sur le tiers gauche, au-dessus d’un texte qui, lui, occupe la
            pleine largeur sur trois colonnes. Une manchette se pose sur la
            largeur de ses colonnes. */}
        <h2 className="rf-titre rf-titre--manchette">
          Ce qui fait la valeur d’un appartement ancien ne se refabrique pas
        </h2>

        {/* Deux colonnes de journal et une lettrine : on est ici dans le récit
            du métier, pas dans la fiche technique. Le format le dit avant que
            la première phrase soit lue. */}
        <div className="rf-colonnes rf-texte mt-10">
          <p>
            Une corniche déposée est perdue. Un parquet point de Hongrie poncé une fois de trop ne se rattrape pas. Une
            cheminée démontée sans relevé ne se remonte jamais tout à fait à sa place. Dans un immeuble ancien, une part
            importante de la valeur tient à des éléments qu’aucun budget ne reconstitue à l’identique.
          </p>
          <p>
            Avant la démolition, nous faisons un inventaire de ce qui se conserve, de ce qui se complète et de ce qui se
            remplace. Les moulures se dégagent, se raccordent ou se remoulent selon leur état. Les parquets anciens se
            jugent à l’épaisseur restante avant ponçage. Les menuiseries à petits bois se restaurent souvent mieux
            qu’elles ne se remplacent, et c’est parfois la seule solution acceptée en périmètre protégé.
          </p>
        </div>

        {/* La bande de 3:1 coupait la rosace et la cheminée — les deux
            éléments que sa propre légende nommait. L’image est montrée
            entière, annotée, et la légende est devenue l’inventaire.

            Le troisième paragraphe est descendu ici. Il était en haut à
            droite des colonnes, là où on le lit le moins — or c’est la chute
            de la section : « c’est ce qui distingue une rénovation d’un
            remplacement ». Posé sous l’inventaire, il conclut ce que
            l’inventaire vient de montrer, et il comble le blanc qui traînait
            à droite de la photographie. Les colonnes, elles, passent de trois
            paragraphes inégaux à deux qui se répartissent. */}
        <div className="mt-12">
          <Releve
            chute="Le reste — isolation, ventilation, électricité aux normes, salle de bain contemporaine, cuisine ouverte — s’installe autour de ces éléments, et non à leur place. C’est plus exigeant à organiser. C’est ce qui distingue une rénovation d’un remplacement."
          />
        </div>
      </Section>

      {/* ── Les matières ──────────────────────────────────────────────────── */}
      <section className="rf-matiere">
        <div className="rf-wrap rf-section--serre">
          <p className="rf-repere">Matières</p>
          <div className="rf-entete">
            <h2 className="rf-titre">Ce que l’on pose réellement chez vous</h2>
            <p className="rf-secondaire" style={{ maxWidth: "32rem" }}>
              Cinq matières que nous mettons en œuvre régulièrement, et la contrainte que chacune impose. Désignez-en
              une pour la lire.
            </p>
          </div>
        </div>
        {/* Seul moment de la page qui sort du conteneur.

            Toutes les autres sections sont calées sur la même largeur de
            planche : c’est ce qui tient la page, et c’est aussi ce qui finit
            par lasser. La bande de matières traverse l’écran d’un bord à
            l’autre — la matière n’a pas de marge, elle couvre les murs et les
            sols en entier. La rupture est unique, donc elle se remarque. */}
        <div className="rf-pleine-bande pb-14 md:pb-20">
          <Matieres />
        </div>
      </section>

      {/* ── Modèle économique — deux par deux ────────────────────────────── */}
      <Section repere="Modèle économique" fond="dossier">
        <div className="rf-entete">
          <h2 className="rf-titre">Un modèle venu de la gestion d’actifs immobiliers</h2>
          <p className="rf-chapo">
            Le prix d’une rénovation se construit en amont, par la précision du chiffrage et la maîtrise des achats.
            Jamais par la négociation de dernière minute, qui ne fait que déplacer la perte vers la qualité d’exécution.
          </p>
        </div>

        {/* La photographie n’est plus une bande posée SOUS le texte, avec sa
            légende, ses soixante pixels de marge et ses quatre cent soixante-dix
            pixels de hauteur pour ne rien dire de plus que la légende.

            Elle est devenue une COLONNE de la composition : même hauteur que
            les quatre points du modèle, à côté d’eux et non dessous. Cinq cents
            pixels de défilement en moins, et une image qui appartient enfin à
            la grille au lieu d’y être déposée. */}
        <div className="rf-diptyque mt-12">
          <div className="rf-diptyque-corps">
            {MODELE.map((m) => (
              <div key={m.titre} className="py-6" style={{ borderTop: "1px solid var(--graphite-3)" }}>
                <h3 className="rf-h3">{m.titre}</h3>
                <p className="rf-secondaire mt-2.5">{m.texte}</p>
                {m.lien && (
                  <p className="mt-3">
                    <LienSuite {...m.lien} />
                  </p>
                )}
              </div>
            ))}
          </div>

          <figure className="rf-fig-colonne">
            <div className="rf-cadre">
              <img
                src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
                alt="Plateforme d’approvisionnement : plaques de plâtre, rouleaux d’isolant et sacs de mortier sur palettes"
                loading="lazy"
                width={1280}
                height={896}
              />
              <span className="rf-ruban" aria-hidden>
                Achat direct
              </span>
            </div>
            <figcaption>Commandé au prix fournisseur, au nom du client, et traçable jusqu’au chantier.</figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Le déroulé — frise ────────────────────────────────────────────── */}
      {/* Ce contenu est une ligne de temps : il se lit en travers, pas de haut
          en bas à côté d’un titre. Les six étapes s’alignent sur un réglet
          gradué qui court sur toute la largeur, et le diagramme de phases posé
          dessous dit la même chose en semaines. Au passage, le grand vide qui
          restait sous la colonne de gauche disparaît. */}
      <Section repere="Déroulé">
        <div className="rf-entete">
          <h2 className="rf-titre">De la première visite à la levée des réserves</h2>
          <p className="rf-chapo">
            Six étapes, dans cet ordre. Chacune produit un livrable écrit, et chacune conditionne la suivante.
          </p>
        </div>

        <div className="mt-14">
          <Parcours etapes={ETAPES} />
        </div>

        {/* Le diagramme était une capture d’écran du document PDF : neuf cent
            quatre-vingts pixels de haut, un plein écran pour une image, et une
            plaque crème posée au milieu du graphite. Reconstruit en HTML, il
            tient en quatre cents pixels et parle la langue du reste de la page. */}
        <div className="mt-14">
          <PlanningLots />
        </div>

        <div className="mt-12">
          <Link href="/notre-methode" className="rf-btn rf-btn--plein">
            Détail complet de la méthode
          </Link>
        </div>
      </Section>

      {/* ── Ce que nous ne faisons pas — manifeste ──────────────────────── */}
      {/* Une entreprise qui écrit noir sur blanc ce qu’elle refuse de faire,
          c’est rare et ça vaut cher. Ce contenu était rangé dans une liste à
          puces au fond d’une demi-colonne. Il prend maintenant une page
          entière, sur encre, à la plus grande échelle de lecture du site. */}
      <section className="rf-dossier">
        <Tirage className="rf-tirage--manifeste" />
        <div className="rf-wrap rf-section">
          <p className="rf-repere">Périmètre</p>
          {/* Le titre du manifeste sortait de l’échelle : 67 px, soit au-dessus
              de tous les titres de section et presque au niveau du titre de
              page. Il revient au degré de la manchette — un cran au-dessus
              d’un titre de section, ce qu’il est. */}
          <h2 className="rf-display" style={{ fontSize: "var(--t-h2-l)", color: "var(--craie)", maxWidth: "20ch" }}>
            Ce que nous ne faisons pas
          </h2>
          <ul className="rf-manifeste mt-12">
            {REFUS.map((r) => (
              <li key={r}>
                <span className="rf-non" aria-hidden>
                  non
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Nos domaines — la photographie à cheval sur deux sections ────── */}
      {/* Cette section ne passe pas par le composant `Section` : elle ne doit
          surtout pas se rogner, puisque la photographie en déborde par le
          haut pour monter dans le manifeste. Elle ne porte donc ni filigrane
          ni calque de tirage, qui imposent l’un et l’autre un
          `overflow: hidden` à leur section. */}
      <section className="rf-matiere" style={{ position: "relative" }}>
        <div className="rf-wrap rf-section">
          <Domaines
            domaines={DOMAINES}
            tel={SITE.tel.replace(/\s/g, "")}
            telAffiche={SITE.telAffiche}
            entete={
              <>
                <p className="rf-repere">Nos domaines</p>
                <h2 className="rf-titre">Gros œuvre, second œuvre et lots techniques</h2>
                <p className="rf-chapo rf-chapo--suite">
                  Trois familles de lots, trois manières de se tromper. Elles ne se pilotent pas de la même façon.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* ── Territoire — « intervenez-vous chez moi ? » ──────────────────── */}
      {/* Le plan dessiné qui occupait cette place était une image de plus.
          Un visiteur qui arrive ici n’a qu’une question, et une carte n’y
          répond pas. Il tape sa commune, il obtient une réponse et un bouton. */}
      <Section repere="Territoire">
        <div className="rf-entete">
          <h2 className="rf-titre">Intervenons-nous chez vous ?</h2>
          <p className="rf-chapo">
            Un immeuble haussmannien du 16<sup>e</sup>, un pavillon meulière des Hauts-de-Seine et une barre des
            années 1970 ne posent ni les mêmes questions de structure, ni les mêmes contraintes d’urbanisme. Nous
            restons sur un territoire que nous connaissons.
          </p>
        </div>

        <div className="mt-12">
          <ZoneIntervention />
        </div>

        <p className="mt-10">
          <LienSuite href="/renovation-ile-de-france" label="Notre zone d’intervention en Île-de-France" />
        </p>
      </Section>

      {/* ── Confiance — les avis viennent de Trustpilot ──────────────────── */}
      {/* Trois citations anonymes (« Propriétaires, 92 ») étaient invérifiables
          pour un visiteur, donc faibles comme preuve. La fiche Trustpilot du
          client porte désormais de vrais avis, nommés et datés : c’est elle qui
          passe devant. Les trois retours recueillis directement restent, en
          second rideau. */}
      <Section repere="Confiance">
        <div className="rf-entete">
          <h2 className="rf-titre">Ce que disent les clients accompagnés</h2>
          <p className="rf-chapo">
            Quatre avis publiés sur Trustpilot, nommés et datés. Chacun peut les vérifier à la source.
          </p>
        </div>

        <div className="mt-10">
          <AvisTrustpilot />
        </div>

        {/* Les trois citations anonymes (« Propriétaires, 92 ») ont été retirées :
            elles disaient la même chose que les avis Trustpilot ci-dessus, en
            moins vérifiable. Doublon signalé par le client. */}
      </Section>

      {/* ── Questions fréquentes ──────────────────────────────────────────── */}
      <Section repere="Questions fréquentes">
        <div className="rf-entete rf-entete--faq">
          <h2 className="rf-titre rf-colonne-fixe">Questions fréquentes</h2>
          <div className="rf-faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="rf-croix" aria-hidden />
                </summary>
                <div className="rf-secondaire">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Prendre contact ───────────────────────────────────────────────── */}
      <section id="contact" className="rf-dossier">
        <div className="rf-wrap rf-section">
          {/* Les deux boutons flottaient au milieu d’une colonne vide, calés
              nulle part. Une maison ne termine pas sur deux boutons en l’air :
              elle donne un nom, un numéro et des heures. Le numéro et les
              horaires viennent de `SITE` — ils existaient déjà, et n’étaient
              lisibles qu’au pied de page. */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] gap-10 lg:gap-20 items-end">
            <div>
              <h2 className="rf-titre" style={{ fontSize: "var(--t-h2-l)" }}>
                Décrivez votre projet
              </h2>
              <p className="rf-chapo mt-6" style={{ color: "#c3c0b6", maxWidth: "34rem" }}>
                Dites-nous ce que vous avez, ce que vous voulez en faire et sous quel délai. Nous vous répondons avec une
                première lecture du projet : ce qui relève d’une autorisation, ce qui touche la structure, et ce qui
                doit être tranché en premier.
              </p>
            </div>

            <div className="rf-contact-carte">
              <p className="rf-contact-libelle">De vive voix</p>
              <p className="rf-contact-numero">
                <a href={`tel:${SITE.tel.replace(/\s/g, "")}`}>{SITE.telAffiche}</a>
              </p>
              <p className="rf-contact-heures">
                {SITE.horaires.map((h) => `${h.jours}, ${h.heures.toLowerCase()}`).join(" · ")}
              </p>
              <div className="rf-contact-actions">
                <Link href="/contact" className="rf-btn rf-btn--clair">
                  Décrire mon projet
                </Link>
                <Link href="/estimateur-travaux" className="rf-btn rf-btn--fantome">
                  Faire estimer un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── À lire ensuite ────────────────────────────────────────────────── */}
      <Section repere="À lire ensuite" serre>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { href: "/notre-methode", label: "Notre méthode", sub: "Les étapes et leurs livrables" },
            { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage ligne à ligne" },
            { href: "/realisations", label: "Réalisations", sub: "Chantiers documentés des équipes partenaires" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rf-carte">
              <span className="rf-carte-titre">{l.label}</span>
              <p className="rf-secondaire mt-1">{l.sub}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
