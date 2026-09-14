import Link from "next/link";
import { PageHeader } from "./page-header";
import { CtaFinal } from "./cta-final";
import { MqFig } from "./mq";

type Segment = { text: string; serif?: boolean; gradient?: boolean };

const GATING_NOTE =
  "L'agence ne décline pas cette page automatiquement par commune. Une page ville n'est créée qu'avec au moins quatre éléments sur six réunis : potentiel commercial, demande observée, différence de bâti ou de contraintes, preuve ou chantier, contenu local original, capacité opérationnelle à servir la zone.";

const FAQ_LOCALE_TEMPLATE = (ville: string) => [
  { q: `Intervenez-vous à ${ville} ?`, r: "Oui, les projets y sont étudiés selon leur ampleur, le nombre de lots, les contraintes et la disponibilité opérationnelle." },
  { q: "Pouvez-vous intervenir sur un seul lot ?", r: "ARCHI PILOTE RÉNOVATION est surtout pertinent lorsque plusieurs décisions ou intervenants doivent être structurés. Pour un lot isolé, une orientation directe vers une entreprise peut être plus adaptée selon le besoin." },
  { q: "Faut-il vérifier le PLU ou le règlement de copropriété ?", r: "Oui dès que le projet touche à l'extérieur, à la création de surface, à certains éléments communs ou à la structure. La règle applicable se vérifie sur le bien concerné." },
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
  | "/gros-oeuvre-structure"
  | "/ouverture-mur-porteur"
  | "/second-oeuvre"
  | "/renovation-energetique"
  | "/menuiserie-agencement-sur-mesure"
  | "/extension-maison"
  | "/surelevation"
  | "/chantiers-complexes"
  | "/electricite-plomberie-renovation"
  | "/renovation-toiture-charpente"
  | "/renovation-cuisine-maison"
  | "/renovation-salle-de-bain-maison"
  | "/sols-finitions-renovation"
  | "/savoir-faire-ancien"
  // Autorisations et bâti protégé (page créée le 04/09)
  | "/travaux-perimetre-abf"
  // Ressources et outils
  | "/demarches-administratives-renovation"
  | "/aides-renovation-energetique"
  | "/clinique-du-devis"
  | "/estimateur-travaux"
  | "/observatoire-prix-renovation"
  | "/parcours-expertise"
  // 03/09 : élargi pour que SpecialtyPage puisse écrire son maillage sans sortir du registre.
  // Chaque entrée a été vérifiée sur disque (app/<slug>/page.tsx existe).
  | "/notre-methode"
  | "/modele-economique-transparence"
  | "/garanties-assurances"
  | "/charte-qualite"
  | "/reseau-partenaires"
  | "/achat-direct-materiaux"
  | "/expertise-carrelage-zellige-travertin"
  | "/detail-invisible"
  | "/realisations"
  | "/guides"
  | "/glossaire-renovation"
  | "/services"
  | "/nos-specialites"
  | "/temoignages-clients"
  | "/ce-que-nous-ne-faisons-pas"
  | "/investisseurs-professionnels"
  | "/tendances-2026-2027"
  | "/tendances-materiaux-francais"
  | "/faq"
  | "/blog"
  | "/contact"
  // Études de cas. ATTENTION : ces deux pages portent la mention
  // « Visuel d'illustration — nouvelle marque, premiers chantiers à
  // venir » et sont en noindex. Elles ne sont PAS une preuve locale.
  // Ne jamais les présenter comme un chantier réalisé dans une commune :
  // c'est précisément ce que la doctrine V3 interdit.
  | "/realisations/pavillon-annees-30-hauts-de-seine"
  | "/realisations/extension-yvelines"
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
  /** Maillage contextuel obligatoire : chaque page locale choisit ses propres ancres. */
  maillage: Maillage;
  /* 06/09 : VISUEL. Les 16 pages locales étaient les seules du site à n'afficher AUCUNE
     image — vérifié en production, zéro photo sur /renovation-courbevoie. Le client demande
     des images sur chaque page.

     Deux garde-fous tiennent cette prop :
     1. Chaque page passe une image DIFFÉRENTE. Une seule image partagée par le composant
        se serait retrouvée sur 16 pages d'un coup, très au-delà de la limite de 3 pages que
        le projet s'impose — c'est exactement le défaut « toujours les mêmes photos » que le
        client reproche.
     2. La légende ne doit JAMAIS laisser croire que la photo a été prise dans la commune.
        Ces pages sont en noindex précisément parce qu'aucune preuve locale n'existe encore ;
        une photo légendée « chantier à Courbevoie » fabriquerait cette preuve. La légende
        décrit l'ouvrage, rien de plus, et la mention sous la figure le dit au lecteur. */
  visuel?: { src: string; alt: string; caption: string; ratio?: string };
}) {
  const faq = variant === "ville" && ville ? FAQ_LOCALE_TEMPLATE(ville) : [];

  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader eyebrow={eyebrow} segments={segments} lead={lead} />

      <section className="relative pb-10 md:pb-16">
        <div className="rf-wrap mq-mesure">
          <p className="text-ivoire/85 t-base leading-relaxed">{intro}</p>
          {visuel ? (
            <div className="mt-8">
              <MqFig src={visuel.src} alt={visuel.alt} caption={visuel.caption} ratio={visuel.ratio ?? "aspect-[4/3]"} />
              <p className="text-muted t-mini leading-relaxed mt-2">
                Chantier accompagné par ARCHI PILOTE RÉNOVATION en Île-de-France. Cette photographie illustre le type
                d&apos;ouvrage traité&nbsp;; elle n&apos;a pas été prise dans cette commune.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative pb-16 md:pb-20">
        <div className="rf-wrap mq-mesure">
          <h2 className="display t-titre text-ivoire normal-case mb-4">{bulletsTitle}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ivoire/85 t-sec">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {variant === "ville" ? (
        <>
          <section className="relative pb-16 md:pb-20">
            <div className="rf-wrap mq-mesure flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="display t-titre text-ivoire normal-case">Notre méthode locale</h2>
                <p className="text-ivoire/85 t-sec leading-relaxed">
                  Une page locale ne doit pas donner l&apos;illusion qu&apos;une commune change les règles techniques d&apos;un
                  chantier. À {ville}, notre méthode reste la même : comprendre le bien, vérifier les contraintes, définir
                  les études nécessaires, rendre le budget lisible, consulter les entreprises et documenter les jalons.
                  Ce qui change réellement est le type de bâti, l&apos;urbanisme, la copropriété, les accès et les
                  conditions du projet ; ces éléments sont vérifiés au cas par cas.
                </p>
              </div>
              <div className="card-e rounded-none p-6">
                <h3 className="display t-base text-ivoire normal-case mb-1.5">Preuve locale à ajouter dès qu&apos;elle existe</h3>
                <p className="text-muted t-petit leading-relaxed">
                  Dès le premier projet documenté à {ville} ou à proximité immédiate, un bloc « Projet dans le secteur »
                  sera ajouté ici : type de bien, surface approximative, objectif, principale contrainte, décision
                  structurante et lien vers l&apos;étude de cas complète.
                </p>
              </div>
            </div>
          </section>
          <section className="relative pb-20 md:pb-28">
            <div className="rf-wrap mq-mesure flex flex-col gap-4">
              {faq.map((f) => (
                <div key={f.q} className="card-e rounded-none p-6">
                  <h3 className="display t-base text-ivoire normal-case mb-1.5">{f.q}</h3>
                  <p className="text-muted t-sec leading-relaxed">{f.r}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="relative pb-20 md:pb-28">
          <div className="rf-wrap mq-mesure">
            <div className="card-e rounded-none p-6">
              <h3 className="display t-base text-ivoire normal-case mb-1.5">Comment une future page ville sera autorisée</h3>
              <p className="text-muted t-petit leading-relaxed">{GATING_NOTE}</p>
            </div>
          </div>
        </section>
      )}

      <MaillageInterne
        titre={maillage.titre ?? (variant === "ville" ? "Aller plus loin sur votre projet" : "Poursuivre par territoire ou par sujet")}
        intro={maillage.intro}
        groupes={maillage.groupes}
      />

      <CtaFinal />
    </main>
  );
}
