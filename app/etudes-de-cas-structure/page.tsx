import type { Metadata } from "next";
import Link from "next/link";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import {
  PageHero,
  PageIntro,
  PageSection,
  PageEtapes,
  PageTableau,
  PageImage,
  PageGalerie,
  PageCoches,
  PageAppel,
  PageFaq,
  PageLiens,
  JsonLdPage,
} from "../components/page-kit";

/* Intention unique : comprendre comment se pilote une reprise de structure, qui fait quoi.
   Source : dossier technique du bureau d'études (22/10/2026), deux chantiers à Paris 16e.
   Jamais d'adresse : l'arrondissement seulement. Les sites sœurs traitent les mêmes dossiers
   sous un autre angle (archi-renov : études de cas ; renovinterieurs : conseils) — texte propre
   ici, centré sur le rôle de chacun. Photos : vues de chantier sans visage, filigrane du
   téléphone recadré. */

const CHEMIN = "/etudes-de-cas-structure";
const TITRE = "Reprise de structure : deux dossiers pilotés de A à Z";
const DESCRIPTION =
  "Mur à pans de bois ouvert par un portique acier, trémie d'escalier dans une dalle béton : qui calcule, qui exécute, ce que vérifie le pilote (Paris 16e).";
const FIL = [{ nom: "Études de cas structure", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Reprise de structure : deux études de cas pilotées",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Reprise de structure : deux études de cas pilotées | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/photos/etudes/tremie-etaiement-sous-sol.jpg" }],
  },
};

const ROLES = [
  ["Relevé et diagnostic sur place", "Organise la visite, rassemble plans et photos", "Constate, mesure, conclut", "—", "Donne accès au bien"],
  ["Choix de la solution", "Présente les options et leurs conséquences", "Compare et dimensionne", "—", "Arbitre"],
  ["Plans d'exécution", "Vérifie qu'ils répondent au projet", "Dessine profilés et assemblages", "—", "—"],
  ["Devis", "Consulte et rend les devis comparables", "—", "Chiffre sur les plans, en son nom", "Signe avec l'entreprise"],
  ["Étaiement, découpe, pose", "Suit le chantier, point écrit chaque semaine", "Répond aux questions d'exécution", "Exécute et assure", "—"],
  ["Contrôles", "Confronte l'ouvrage aux plans", "Valide si besoin", "Corrige les écarts", "Prononce la réception"],
];

const DOSSIER_MUR = [
  {
    titre: "Diagnostic",
    texte:
      "Immeuble R+3 du XIXe siècle, murs en maçonnerie et pans de bois, planchers sur poutres bois. Le mur à ouvrir est fait de montants de bois sans diagonale : non porteur au calcul, mais susceptible d'avoir repris des charges avec l'âge. Il est traité comme semi-porteur.",
  },
  {
    titre: "Solutions comparées",
    texte: "Poutre acier seule, ou portique complet. Le portique l'emporte : il conduit les charges jusqu'au plancher au lieu de les confier à des bois anciens.",
  },
  {
    titre: "Solution d'exécution",
    texte:
      "Poutre IPE180 sur deux poteaux IPE160, quatre boulons M12, cale acier et matage au mortier en tête ; en pied, platines de 10 mm (400 × 250 mm) soudées aux poteaux et posées sur mortier. Étaiement provisoire de part et d'autre.",
  },
  {
    titre: "Contrôle",
    texte: "Dimensions et détails vérifiés contre l'étude avant, pendant et après la pose.",
  },
];

const DOSSIER_TREMIE = [
  {
    titre: "Diagnostic",
    texte:
      "Immeuble R+5, façades en maçonnerie, poteaux et poutres mixtes acier-béton. Le plancher haut du sous-sol est une dalle béton armé de 22 cm en bon état, portant entre la façade et une poutre mixte.",
  },
  {
    titre: "Enjeu",
    texte: "Découper 3,50 × 3,20 m dans cette dalle pour un escalier : une ouverture large, sous des charges et une portée importantes.",
  },
  {
    titre: "Solution d'exécution",
    texte:
      "Un cadre en charpente métallique autour de la trémie, appuyé sur la poutre mixte et sur un poteau béton existants, descendu au sol par de nouveaux poteaux sur semelles en béton armé. Tiges M12 scellées chimiquement, cornières et platines soudées.",
  },
  {
    titre: "Vigilance et contrôle",
    texte: "Méthode de découpe de la dalle et exécution des assemblages, sous étaiement ; dimensions et détails vérifiés contre l'étude.",
  },
];

const FAQ = [
  {
    question: "Qui calcule une reprise de structure ?",
    reponse:
      "Un bureau d'études structure, qui intervient en son nom. Il dimensionne la solution et dessine les assemblages. ARCHI PILOTE RÉNOVATION organise son intervention et vérifie que l'étude répond au projet, sans s'y substituer.",
  },
  {
    question: "Pourquoi l'étude passe-t-elle avant les devis ?",
    reponse:
      "Parce qu'une entreprise qui chiffre sans plan d'exécution chiffre sa propre hypothèse. Avec la même étude, les devis portent sur le même ouvrage : ils deviennent comparables poste par poste.",
  },
  {
    question: "Qui est responsable des travaux ?",
    reponse:
      "L'entreprise partenaire qui les exécute : elle signe son devis avec vous, vous la payez directement, et elle porte sa garantie décennale. ARCHI PILOTE RÉNOVATION n'exécute ni ne facture aucun travaux.",
  },
  {
    question: "Faut-il l'accord de la copropriété ?",
    reponse:
      "Oui, dès que la structure de l'immeuble est touchée. L'étude du bureau d'études est la pièce centrale du dossier présenté en assemblée générale.",
  },
];

export default function EtudesDeCasStructurePage() {
  return (
    <main className="relative z-10">
      <PageHero
        fil={FIL}
        titre="Reprise de structure : deux dossiers pilotés de A à Z"
        chapo="Un mur à pans de bois à ouvrir, une dalle béton à percer pour un escalier. Deux chantiers à Paris 16e, et pour chaque étape, qui diagnostique, qui calcule, qui exécute."
        image="/photos/etudes/tremie-etaiement-sous-sol.jpg"
        alt="Sous-sol étayé sous une dalle béton, poutre métallique posée avant la découpe d'une trémie d'escalier"
      />

      <PageIntro
        titreCarte="Les deux dossiers"
        points={[
          "Paris 16e, immeubles d'habitation",
          "Mur à pans de bois du XIXe siècle : portique acier",
          "Dalle béton de 22 cm : trémie de 3,50 × 3,20 m",
          "Études : bureau d'études structure partenaire",
          "Travaux : entreprises partenaires, contractées par le client",
        ]}
      >
        <p>
          Une reprise de structure fait intervenir quatre acteurs : le client, le pilote du projet, le bureau d'études et
          l'entreprise. Chacun signe ce qu'il fait, et rien de plus. Ces deux dossiers, suivis par IA RENOV, la société
          qui porte ARCHI PILOTE RÉNOVATION, montrent comment ces rôles s'enchaînent.
        </p>
      </PageIntro>

      <PageSection
        titre="Qui fait quoi"
        accroche="Le même partage des rôles sur les deux chantiers, de la visite à la réception."
        fond="craie"
      >
        <PageTableau
          colonnes={["Étape", "ARCHI PILOTE RÉNOVATION", "Bureau d'études", "Entreprise", "Client"]}
          lignes={ROLES}
          note="Le bureau d'études et les entreprises partenaires interviennent en leur nom, sous leur propre responsabilité."
        />
      </PageSection>

      <PageSection
        id="mur"
        titre="Dossier 1 : ouvrir un mur à pans de bois"
        accroche="Un mur non porteur au calcul, traité comme semi-porteur à cause de son âge."
      >
        <PageGalerie
          items={[
            {
              src: "/photos/etudes/mur-pans-de-bois-avant-ouverture.jpg",
              alt: "Mur intérieur mis à nu dans un immeuble du XIXe siècle : montants et traverses en bois avant ouverture",
              legende: "Le mur mis à nu : montants de bois, aucune diagonale.",
            },
            {
              src: "/photos/etudes/portique-metallique-ouverture-mur.jpg",
              alt: "Visualisation d'un portique métallique projeté sur le mur à ouvrir : poutre en tête et deux poteaux",
              legende: "Le portique projeté sur le mur.",
            },
            {
              src: "/photos/etudes/coupe-portique-poutre-ipe.png",
              alt: "Coupe technique du portique : poutre IPE180, poteau IPE160, platine de pied, boulons M12 et étaiement",
              legende: "Coupe A-A du bureau d'études.",
            },
          ]}
        />
        <PageEtapes items={DOSSIER_MUR} />
      </PageSection>

      <PageSection
        id="tremie"
        titre="Dossier 2 : percer une dalle pour un escalier"
        accroche="Une dalle saine, mais une ouverture large : les charges doivent trouver un nouveau chemin."
        fond="craie"
      >
        <PageImage
          src="/photos/etudes/schema-renfort-tremie-escalier.png"
          alt="Schéma de principe du renfort de trémie : cadre métallique, poteaux sur semelles béton, appuis sur la structure existante"
          legende="Schéma de principe, sans valeur d'exécution : le cadre métallique et ses fondations."
        />
        <PageEtapes items={DOSSIER_TREMIE} />
        <PageGalerie
          items={[
            {
              src: "/photos/etudes/tremie-etaiement-sous-sol.jpg",
              alt: "Sous-sol étayé : poutre métallique posée, étais et madriers sous la dalle avant découpe",
              legende: "Dalle étayée, poutre posée, avant découpe.",
            },
            {
              src: "/photos/etudes/details-assemblages-tremie.png",
              alt: "Plans de détail des assemblages : cornière sur poutre HEB260 existante, platines, tiges M12 scellées dans un poteau béton",
              legende: "Détails d'assemblage sur l'existant.",
            },
          ]}
        />
      </PageSection>

      <PageSection titre="Ce que vérifie le pilote" accroche="Les points que nous contrôlons sur tout dossier de structure, quel que soit le bâtiment.">
        <PageCoches
          items={[
            "Le diagnostic repose sur un relevé sur place, pas sur des plans d'origine souvent absents",
            "Au moins deux solutions ont été comparées, et le choix est expliqué au client",
            "Les plans d'exécution détaillent chaque assemblage avant la consultation des entreprises",
            "L'étaiement et l'ordre de découpe sont prévus dans l'étude",
            "Chaque entreprise remet son attestation décennale avant démarrage",
            "Les dimensions et les assemblages sont confrontés aux plans avant la réception",
          ]}
        />
        <p>
          Pour le détail d'une ouverture de mur porteur — identification, étaiement, profilés, prix indicatifs — voir notre
          page <Link href="/ouverture-mur-porteur">ouverture de mur porteur</Link>.
        </p>
      </PageSection>

      <PageSection titre="Questions fréquentes" fond="craie">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageAppel
        titre="Un mur à ouvrir, un plancher à percer ?"
        texte="Décrivez votre projet en quelques lignes : nous revenons vers vous sous 48 h ouvrées avec une première lecture et la marche à suivre, sans engagement."
        image="/photos/etudes/portique-metallique-ouverture-mur.jpg"
        alt="Portique métallique projeté sur un mur à ouvrir"
        secondaire={{ href: "/estimateur-travaux", label: "Estimer mon budget" }}
      />

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/ouverture-mur-porteur", titre: "Ouverture de mur porteur", texte: "Étude, étaiement, profilés, prix indicatifs" },
            { href: "/notre-methode", titre: "Notre méthode", texte: "Les cinq étapes d'un projet piloté" },
            { href: "/demarches-administratives-renovation", titre: "Démarches administratives", texte: "Copropriété, déclarations, autorisations" },
          ]}
        />
      </PageSection>

      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
