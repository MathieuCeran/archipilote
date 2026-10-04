import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { PageHero, PageIntro, PageSection, PageCartes, PageEtapes, PageFaq, PageLiens } from "../components/page-kit";

/* Refonte lot 2 (10/2026) : page passée au kit commun. Toujours en noindex.
   Les pages département et commune disparaissent du site : les cartes des
   départements restent, sans lien. Le maillage ne renvoie plus qu'aux pages
   de travaux finales. */

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-ile-de-france" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation en Île-de-France : maison, appartement, structure | ARCHI PILOTE RÉNOVATION",
  description: "ARCHI PILOTE RÉNOVATION étudie les projets de rénovation complète, structure, extension, surélévation et copropriété dans toute l'Île-de-France selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation en Île-de-France : maison, appartement, structure | ARCHI PILOTE RÉNOVATION",
    description: "ARCHI PILOTE RÉNOVATION étudie les projets de rénovation complète, structure, extension, surélévation et copropriété dans toute l'Île-de-France selon leur ampleur et leurs contraintes.",
    url: "/renovation-ile-de-france",
    images: [{ url: "/og.jpg" }],
  },
};

const DEPARTEMENTS = [
  { nom: "Hauts-de-Seine (92)", texte: "Le premier bassin d'intervention. Mix maison / appartement en copropriété, extension, ouverture structurelle, rénovation énergétique." },
  { nom: "Yvelines (78)", texte: "Particulièrement adapté aux projets de maison : rénovation globale, extension, surélévation, toiture, redistribution." },
  { nom: "Val-de-Marne (94)", texte: "Mix d'appartements, maisons et opérations de transformation complète — Saint-Maur, Nogent, Le Perreux, Vincennes." },
  { nom: "Val-d'Oise (95)", texte: "Nombreux projets pavillonnaires et de maisons : rénovation complète, énergie, toiture, extension." },
  { nom: "Essonne (91)", texte: "Étudié de façon sélective, lorsque l'ampleur et la complexité justifient un pilotage d'ensemble." },
  { nom: "Seine-et-Marne (77)", texte: "Réservé aux projets d'ensemble : maison à reprendre intégralement, enveloppe, toiture, création de surface." },
  { nom: "Seine-Saint-Denis (93)", texte: "Pavillons à l'est, maisons de ville et restructurations d'appartement plus près de Paris." },
  { nom: "Paris", texte: "Dossiers à angle technique : structure, copropriété, redistribution, réseaux, transformation complexe." },
];

const FAQ = [
  {
    question: "Ma commune n'est pas citée : pouvez-vous intervenir ?",
    reponse:
      "Envoyez l'adresse ou la commune, le type de bien, la surface et votre projet. Nous vous indiquons si le dossier entre dans notre zone et notre niveau d'intervention.",
  },
  {
    question: "Qui réalise et facture les travaux ?",
    reponse:
      "Les entreprises partenaires indépendantes : chacune établit et signe son devis, exécute et facture ses travaux, et porte ses assurances. Vous contractez et payez directement chaque entreprise. ARCHI PILOTE RÉNOVATION pilote le projet.",
  },
];

export default function Page() {
  return (
    <main className="relative z-10">
      <PageHero
        fil={[{ nom: "Île-de-France", href: "/renovation-ile-de-france" }]}
        titre="Rénovation en Île-de-France : une stratégie adaptée au bien, pas seulement à l'adresse"
        chapo="ARCHI PILOTE RÉNOVATION étudie les projets à Paris, dans les Hauts-de-Seine et plus largement en Île-de-France. La distance n'est pas le seul critère : plus un projet est complet, technique ou structurant, plus un déplacement régulier peut être justifié."
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Un seul interlocuteur pour 8 corps de métier",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>
          Notre base est à La Garenne-Colombes, dans les Hauts-de-Seine. C&apos;est le bien et ses contraintes qui
          commandent la méthode, pas l&apos;adresse.
        </p>
        <p>
          Les travaux sont réalisés et facturés par des entreprises partenaires indépendantes. Nous pilotons le projet,
          de la visite à la réception.
        </p>
      </PageIntro>

      <PageSection
        titre="Nos secteurs en Île-de-France"
        accroche="Chaque département a son type de bâti et ses projets dominants. Votre commune n'est pas citée ? Décrivez-nous le projet : nous vous disons s'il entre dans notre zone."
      >
        <PageCartes colonnes={2} items={DEPARTEMENTS.map((d) => ({ titre: d.nom, texte: d.texte }))} />
      </PageSection>

      <PageSection titre="Comment se déroule votre projet" accroche="Le même déroulé partout en Île-de-France.">
        <PageEtapes
          items={[
            { titre: "Premier échange", texte: "Votre bien, votre projet, votre budget, par téléphone ou WhatsApp." },
            { titre: "Visite technique", texte: "Sur place : structure, réseaux, copropriété et urbanisme." },
            { titre: "Devis comparables", texte: "Un descriptif commun pour les entreprises partenaires, des devis lus ligne à ligne." },
            { titre: "Chantier piloté", texte: "Un seul interlocuteur, des photos datées chaque jour." },
            { titre: "Réception et suivi", texte: "Réserves écrites, reprises, puis suivi 12 mois après la réception." },
          ]}
        />
      </PageSection>

      <PageSection titre="Questions fréquentes">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Nos travaux en détail" accroche="Chaque type de travaux a sa page : étapes, prix et questions fréquentes.">
        <PageLiens
          items={[
            { href: "/renovation-appartement", titre: "Rénovation d'appartement", texte: "Appartement ancien ou haussmannien, en copropriété." },
            { href: "/renovation-maison-pavillon", titre: "Rénovation de maison", texte: "Maison, pavillon, façade et toiture." },
            { href: "/renovation-complete", titre: "Rénovation complète", texte: "Tous corps d'état, un seul interlocuteur." },
            { href: "/extension-maison", titre: "Extension de maison", texte: "Agrandir au sol, autorisations comprises." },
            { href: "/surelevation", titre: "Surélévation", texte: "Gagner un niveau sur l'existant." },
            { href: "/ouverture-mur-porteur", titre: "Ouverture de mur porteur", texte: "Étude de structure, poutre et réception." },
          ]}
        />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
