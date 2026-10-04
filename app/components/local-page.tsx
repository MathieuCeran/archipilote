import Link from "next/link";
import { CtaFinal } from "./cta-final";
import { BarreProjet } from "../blog/[slug]/barre-projet";
import { PageHero, PageIntro, PageSection, PageCoches, PageEtapes, PageFaq, PageLiens, PageImage } from "./page-kit";

/* ============================================================================
   PAGES LOCALES — refonte lot 2 (10/2026).

   Les 16 pages ville / département passent au kit de page commun (PageHero,
   PageIntro, PageSection…) pour ressembler au reste du site. Le contrat de
   données ne change pas : les pages passent les mêmes props qu'avant.

   Ce qui a été retiré de l'affichage, parce que c'était écrit pour l'agence
   et non pour le visiteur : la note « comment une future page ville sera
   autorisée » et l'encart « preuve locale à ajouter dès qu'elle existe ».

   Maillage : les pages locales et les pages fusionnées disparaissent du site
   (redirections). Les liens du maillage sont donc FILTRÉS ici contre la
   liste des pages finales (`PAGES_FINALES`) : seules les pages de travaux et
   les ressources qui restent sont affichées, sans doublon. Les pages en noindex
   gardent `follow` : ce maillage reste utile.
   ============================================================================ */

type Segment = { text: string; serif?: boolean; gradient?: boolean };

/* Pages finales vers lesquelles une page locale peut renvoyer, avec la ligne
   affichée sous le titre du lien. */
const PAGES_FINALES: Partial<Record<MaillageHref, { titre: string; texte: string }>> = {
  "/renovation-appartement": { titre: "Rénovation d'appartement", texte: "Appartement ancien ou haussmannien, en copropriété." },
  "/renovation-maison-pavillon": { titre: "Rénovation de maison", texte: "Maison, pavillon, façade et toiture." },
  "/renovation-complete": { titre: "Rénovation complète", texte: "Tous corps d'état, un seul interlocuteur." },
  "/renovation-salle-de-bain-maison": { titre: "Salle de bain", texte: "Étanchéité, évacuations, ventilation, carrelage." },
  "/renovation-cuisine-maison": { titre: "Cuisine", texte: "Implantation, réseaux et meubles." },
  "/renovation-electrique": { titre: "Rénovation électrique", texte: "Tableau, circuits et mise aux normes." },
  "/renovation-energetique": { titre: "Rénovation énergétique", texte: "Isolation, fenêtres, ventilation, chauffage." },
  "/ouverture-mur-porteur": { titre: "Ouverture de mur porteur", texte: "Étude de structure, poutre et réception." },
  "/surelevation": { titre: "Surélévation", texte: "Gagner un niveau sur l'existant." },
  "/extension-maison": { titre: "Extension de maison", texte: "Agrandir au sol, autorisations comprises." },
  "/menuiserie-agencement-sur-mesure": { titre: "Menuiserie sur mesure", texte: "Placards, dressings, bibliothèques." },
  "/investisseurs-professionnels": { titre: "Investisseurs et professionnels", texte: "Projets locatifs et locaux professionnels." },
  "/demarches-administratives-renovation": { titre: "Démarches administratives", texte: "Copropriété, déclaration préalable, permis." },
  "/observatoire-prix-renovation": { titre: "Prix de la rénovation au m²", texte: "Fourchettes poste par poste." },
  "/estimateur-travaux": { titre: "Estimateur de travaux", texte: "Un premier budget en quelques clics." },
  "/notre-methode": { titre: "Notre méthode", texte: "Les étapes, de la visite à la réception." },
  "/realisations": { titre: "Réalisations", texte: "Chantiers terminés des entreprises partenaires." },
};

/* Liens affichés quand le maillage d'une page ne contient aucune page finale. */
const LIENS_PAR_DEFAUT: MaillageHref[] = ["/renovation-appartement", "/renovation-maison-pavillon", "/renovation-complete"];

function liensFinaux(maillage: Maillage) {
  const vus = new Set<string>();
  const hrefs: MaillageHref[] = [];
  for (const g of maillage.groupes) {
    for (const l of g.liens) {
      if (PAGES_FINALES[l.href] && !vus.has(l.href)) {
        vus.add(l.href);
        hrefs.push(l.href);
      }
    }
  }
  const choisis = (hrefs.length ? hrefs : LIENS_PAR_DEFAUT).slice(0, 6);
  return choisis.map((href) => ({ href, ...PAGES_FINALES[href]! }));
}

/* Titre d'une ligne : « Rénovation à Courbevoie : un projet cadré avant le chantier ». */
const titreDe = (segments: Segment[]) =>
  segments
    .map((s) => s.text.trim())
    .join(" ")
    .replace(/\s*\.$/, "");

const FAQ_LOCALE_TEMPLATE = (ville: string) => [
  { question: `Intervenez-vous à ${ville} ?`, reponse: "Oui, les projets y sont étudiés selon leur ampleur, le nombre de lots, les contraintes et la disponibilité opérationnelle." },
  { question: "Pouvez-vous intervenir sur un seul lot ?", reponse: "ARCHI PILOTE RÉNOVATION est surtout pertinent lorsque plusieurs décisions ou intervenants doivent être structurés. Pour un lot isolé, une orientation directe vers une entreprise peut être plus adaptée selon le besoin." },
  { question: "Faut-il vérifier le PLU ou le règlement de copropriété ?", reponse: "Oui dès que le projet touche à l'extérieur, à la création de surface, à certains éléments communs ou à la structure. La règle applicable se vérifie sur le bien concerné." },
];

/* Pages département : pas de nom de commune à insérer, donc des questions neutres. */
const FAQ_SECTEUR = [
  {
    question: "Mon projet est-il dans votre zone d'intervention ?",
    reponse:
      "Envoyez l'adresse ou la commune, le type de bien, la surface et votre projet. Nous vous indiquons si le dossier entre dans notre zone et notre niveau d'intervention.",
  },
  FAQ_LOCALE_TEMPLATE("")[2],
];

const FAQ_COMMUNE = [
  {
    question: "Qui signe les devis et qui je paie ?",
    reponse:
      "Chaque entreprise partenaire établit et signe son propre devis : vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier ; notre rôle est le pilotage du projet.",
  },
];

const ETAPES = [
  { titre: "Premier échange", texte: "Votre bien, votre projet, votre budget, par téléphone ou WhatsApp." },
  { titre: "Visite technique", texte: "Sur place : structure, réseaux, copropriété et urbanisme." },
  { titre: "Devis comparables", texte: "Un descriptif commun pour les entreprises partenaires, des devis lus ligne à ligne." },
  { titre: "Chantier piloté", texte: "Un seul interlocuteur, des photos datées chaque jour." },
  { titre: "Réception et suivi", texte: "Réserves écrites, reprises, puis suivi 12 mois après la réception." },
];

/* ============================================================
   MAILLAGE INTERNE DES PAGES LOCALES
   ------------------------------------------------------------
   Registre fermé des destinations autorisées. Toute URL absente
   de cette union est une erreur de compilation : impossible de
   publier un lien mort depuis une page locale.
   Chaque entrée a été vérifiée : app/<slug>/page.tsx existe.
   Les pages villes restent en robots { index: false, follow: true } :
   le maillage circule bien, seul l'indexation reste fermée tant
   qu'aucune preuve locale n'est documentée.

   05/09 — AUDIT DU REGISTRE. Les deux sens ont été recoupés contre
   `find app -name page.tsx` :
   — aucune entrée du registre ne pointait vers une page absente du
     disque (0 lien mort) ;
   — treize routes existantes n'y figuraient pas. Dix sont ajoutées
     plus bas, dont /travaux-perimetre-abf, créée le 04/09 et qu'aucune
     page locale ne pouvait donc citer.
   Trois routes restent VOLONTAIREMENT hors registre : "/" ,
   "/mentions-legales" et "/politique-confidentialite". Elles sont
   servies par l'en-tête et le pied de page ; les faire entrer dans un
   bloc « Poursuivre la lecture » diluerait le maillage éditorial sans
   rien apporter. Les y ajouter reste possible si le besoin apparaît.
   ============================================================ */
export type MaillageHref =
  // Prestations et sujets techniques
  | "/renovation-complete"
  | "/renovation-appartement"
  | "/renovation-maison-pavillon"
  | "/ouverture-mur-porteur"
  | "/ouverture-mur-porteur"
  | "/renovation-complete"
  | "/renovation-energetique"
  | "/menuiserie-agencement-sur-mesure"
  | "/extension-maison"
  | "/surelevation"
  | "/renovation-complete"
  | "/renovation-electrique"
  | "/renovation-maison-pavillon"
  | "/renovation-cuisine-maison"
  | "/renovation-salle-de-bain-maison"
  | "/renovation-complete"
  | "/renovation-appartement"
  // Autorisations et bâti protégé (page créée le 04/09)
  | "/demarches-administratives-renovation"
  // Ressources et outils
  | "/demarches-administratives-renovation"
  | "/renovation-energetique"
  | "/blog/devis-travaux-lignes-a-verifier"
  | "/estimateur-travaux"
  | "/observatoire-prix-renovation"
  | "/notre-methode"
  // 03/09 : élargi pour que SpecialtyPage puisse écrire son maillage sans sortir du registre.
  // Chaque entrée a été vérifiée sur disque (app/<slug>/page.tsx existe).
  | "/notre-methode"
  | "/notre-methode"
  | "/notre-methode"
  | "/notre-methode"
  | "/notre-methode"
  | "/notre-methode"
  | "/renovation-salle-de-bain-maison"
  | "/notre-methode"
  | "/realisations"
  | "/blog"
  | "/glossaire-renovation"
  | "/renovation-complete"
  | "/renovation-complete"
  | "/realisations"
  | "/notre-methode"
  | "/investisseurs-professionnels"
  | "/blog"
  | "/blog"
  | "/faq"
  | "/blog"
  | "/contact"
  // Études de cas. ATTENTION : ces deux pages portent la mention
  // « Visuel d'illustration — nouvelle marque, premiers chantiers à
  // venir » et sont en noindex. Elles ne sont PAS une preuve locale.
  // Ne jamais les présenter comme un chantier réalisé dans une commune :
  // c'est précisément ce que la doctrine V3 interdit.
  // Territoires
  | "/renovation-ile-de-france"
  | "/renovation-hauts-de-seine-92"
  | "/renovation-yvelines-78"
  | "/renovation-essonne-91"
  | "/renovation-seine-et-marne-77"
  | "/renovation-seine-saint-denis-93"
  | "/renovation-val-de-marne-94"
  | "/renovation-val-doise-95"
  | "/renovation-complexe-paris"
  // Communes traitées
  | "/renovation-asnieres-sur-seine"
  | "/renovation-bois-colombes"
  | "/renovation-colombes"
  | "/renovation-courbevoie"
  | "/renovation-la-garenne-colombes"
  | "/renovation-nanterre"
  | "/renovation-rueil-malmaison";

export type MaillageLien = { href: MaillageHref; label: string };
export type MaillageGroupe = { titre: string; liens: MaillageLien[] };
export type Maillage = {
  /** Phrase d'accroche propre à la page — évite un bloc de liens posé sans contexte. */
  intro: string;
  /** Titre de section, sinon un libellé par défaut selon le type de page. */
  titre?: string;
  groupes: MaillageGroupe[];
};

export function MaillageInterne({ intro, titre, groupes }: Maillage) {
  return (
    <section className="relative pb-20 md:pb-28">
      <div className="rf-wrap mq-mesure border-t border-line pt-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="display t-titre text-ivoire normal-case">{titre ?? "Poursuivre la lecture"}</h2>
          <p className="text-muted t-sec leading-relaxed">{intro}</p>
        </div>
        {groupes.map((g) => (
          <div key={g.titre} className="flex flex-col gap-3">
            <h3 className="mq-mention">{g.titre}</h3>
            <div className="flex flex-wrap gap-2.5">
              {g.liens.map((l) => (
                <Link key={l.href} href={l.href} className="btn btn-ghost !py-2.5 !px-5 t-petit">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LocalPage({
  eyebrow,
  segments,
  lead,
  intro,
  bulletsTitle,
  bullets,
  variant,
  ville,
  maillage,
  visuel,
}: {
  eyebrow: string;
  segments: Segment[];
  lead?: string;
  intro: string;
  bulletsTitle: string;
  bullets: string[];
  variant: "departement" | "ville";
  ville?: string;
  /** Maillage contextuel : filtré sur les pages finales du site (voir `liensFinaux`). */
  maillage: Maillage;
  /* VISUEL (facultatif) : une photo réelle DIFFÉRENTE par page. La légende ne doit
     jamais laisser croire que la photo a été prise dans la commune (pages en noindex,
     faute de preuve locale) : elle décrit l'ouvrage, et la mention sous la figure le dit. */
  visuel?: { src: string; alt: string; caption: string; ratio?: string };
}) {
  const faq = [...(variant === "ville" && ville ? FAQ_LOCALE_TEMPLATE(ville) : FAQ_SECTEUR), ...FAQ_COMMUNE];
  const liens = liensFinaux(maillage);

  return (
    <main className="relative z-10">
      <PageHero
        fil={[{ nom: eyebrow, href: "#" }]}
        titre={titreDe(segments)}
        chapo={
          lead ??
          "Visite technique sur place, devis des entreprises partenaires rendus comparables, chantier piloté jusqu'à la réception."
        }
      />

      <PageIntro
        titreCarte="Ce que nous prenons en charge"
        points={[
          "Visite technique sur place",
          "Étude de projet remise sous 48 h ouvrées",
          "Devis des entreprises partenaires rendus comparables",
          "Un seul interlocuteur pour tous les corps de métier",
          "Suivi 12 mois après la réception",
        ]}
      >
        <p>{intro}</p>
        <p>
          Les travaux sont réalisés et facturés par des entreprises partenaires indépendantes, qui portent leurs
          propres assurances. Nous pilotons le projet, de la visite à la réception.
        </p>
      </PageIntro>

      <PageSection titre={bulletsTitle} accroche="Les projets que nous étudions le plus souvent ici. Chacun est vérifié sur place, sur le bien concerné, avant d'être chiffré.">
        {visuel && (
          <>
            <PageImage src={visuel.src} alt={visuel.alt} legende={visuel.caption} />
            <p className="pg-note">
              Cette photographie illustre le type d&apos;ouvrage traité ; elle n&apos;a pas été prise dans cette commune.
            </p>
          </>
        )}
        <PageCoches items={bullets} />
      </PageSection>

      <PageSection
        titre="Comment se déroule votre projet"
        accroche={
          <p>
            Notre méthode ne change pas d&apos;une commune à l&apos;autre ; ce qui change, c&apos;est le bâti, la copropriété et
            l&apos;urbanisme. Le détail est sur la page <Link href="/notre-methode">notre méthode</Link>.
          </p>
        }
      >
        <PageEtapes items={ETAPES} />
      </PageSection>

      <PageSection titre="Questions fréquentes">
        <PageFaq items={faq} />
      </PageSection>

      <PageSection titre="Nos travaux en détail" accroche="Chaque type de travaux a sa page : étapes, prix et questions fréquentes.">
        <PageLiens items={liens} />
      </PageSection>

      <div id="note-fin" aria-hidden />
      <CtaFinal />
      <BarreProjet />
    </main>
  );
}
