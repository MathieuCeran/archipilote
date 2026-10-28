import type { Metadata } from "next";
import { CtaFinal } from "../components/cta-final";
import Link from "next/link";
import { PageCartes, PageLiens, PageSection } from "../components/page-kit";
import { FONDATEUR, FONDATEUR_LD, SITE } from "../data";
import { withWw, wwMetadata } from "@/lib/whatswrong-pages";

/* Intention unique : qui pilote les projets (EEAT). Le fondateur en tête,
   portrait entier, puis la répartition des rôles. Faits publiés : ceux du
   registre (IA RENOV, SASU, RCS Nanterre 889 976 387, siège, président) ;
   rien d'invérifiable (années d'expérience, nombre de chantiers…). */

const CHEMIN = "/qui-sommes-nous";
const TITRE = "Qui sommes-nous : ARCHI PILOTE RÉNOVATION et Ilann Atlan";
const DESCRIPTION =
  "ARCHI PILOTE RÉNOVATION, marque d’IA RENOV fondée par Ilann Atlan : le pilotage de vos travaux de rénovation en Île-de-France, avec des entreprises partenaires.";
const FIL = [{ nom: "Qui sommes-nous", href: CHEMIN }];

export const generateMetadata = (): Promise<Metadata> =>
  wwMetadata(CHEMIN, {
    title: { absolute: TITRE },
    description: DESCRIPTION,
    alternates: { canonical: CHEMIN },
    openGraph: { type: "profile", locale: "fr_FR", siteName: SITE.nom, title: TITRE, description: DESCRIPTION, url: CHEMIN, images: [{ url: FONDATEUR.photo }] },
  });

const REPERES = [
  { label: "Société", valeur: "IA RENOV, SASU" },
  { label: "Immatriculation", valeur: "RCS Nanterre 889 976 387" },
  { label: "Siège", valeur: "La Garenne-Colombes (92)" },
  { label: "Marques", valeur: "ARCHI PILOTE RÉNOVATION, Archi Renov, RenovIntérieurs" },
];

function QuiSommesNous() {
  const url = `https://www.archipiloterenovation.com${CHEMIN}`;
  return (
    <>
      {/* En-tête fondateur : texte à gauche, portrait entier à droite, même hauteur. */}
      <header className="rf-dossier pg-hero pg-hero--simple pg-hero-fondateur" data-ouverture>
        <div className="rf-wrap pg-hero-wrap pg-hero-fondateur-grille">
          <div className="pg-hero-fondateur-texte">
            <nav aria-label="Fil d'Ariane" className="pg-fil">
              <ol>
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <span aria-current="page">Qui sommes-nous</span>
                </li>
              </ol>
            </nav>
            <h1 className="pg-titre">Ilann Atlan, fondateur d’ARCHI PILOTE RÉNOVATION</h1>
            <p className="pg-chapo">
              ARCHI PILOTE RÉNOVATION est une marque d’IA RENOV, la société qu’il a fondée et qu’il préside. Son métier :
              piloter votre rénovation, pendant que des entreprises partenaires spécialisées réalisent les travaux.
            </p>
            <div className="pg-hero-actions">
              <Link href="/contact" className="rf-btn rf-btn--clair">
                Décrire mon projet
              </Link>
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="rf-btn rf-btn--fantome">
                {SITE.telAffiche}
              </a>
            </div>
          </div>
          <figure className="pg-hero-fondateur-portrait">
            <img
              src={FONDATEUR.photo}
              alt="Portrait d’Ilann Atlan, fondateur et président d’IA RENOV, dans un salon haussmannien rénové"
              width={1022}
              height={1532}
              fetchPriority="high"
            />
          </figure>
        </div>
      </header>

      <PageSection titre="Son rôle : votre interlocuteur unique">
        <div className="pg-fondateur">
          <div className="pg-fondateur-texte">
            <p className="pg-fondateur-role">{FONDATEUR.fonction}</p>
            <p>
              Ilann Atlan a fondé IA RENOV, la société qui porte ARCHI PILOTE RÉNOVATION ainsi qu’
              <a href="https://www.archi-renov.com/a-propos-ia-renov-ilann-atlan/">Archi Renov</a> et{" "}
              <a href="https://www.renovinterieurs.fr/a-propos">RenovIntérieurs</a>. Il pilote des projets de rénovation en
              Île-de-France : visite technique, chiffrage par lot, sélection des entreprises partenaires, suivi du chantier et
              réception.
            </p>
            <p>
              Les travaux sont réalisés par des entreprises partenaires spécialisées, qui signent leur devis avec vous,
              facturent leurs travaux et portent leurs propres assurances ; IA RENOV vérifie leurs attestations avant le
              démarrage.
            </p>
          </div>
          <dl className="pg-fondateur-reperes">
            {REPERES.map((r) => (
              <div key={r.label}>
                <dt>{r.label}</dt>
                <dd>{r.valeur}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PageSection>

      <PageSection titre="Qui fait quoi" fond="craie">
        <PageCartes
          items={[
            {
              titre: "ARCHI PILOTE RÉNOVATION vous accueille",
              texte: "Le nom sous lequel vous nous contactez : un seul interlocuteur, de la première visite à la réception.",
            },
            {
              titre: "IA RENOV pilote le projet",
              texte: "Étude du bien, chiffrage par lot, sélection des entreprises, planning, suivi du chantier et réception.",
              href: "/notre-methode",
            },
            {
              titre: "Les entreprises partenaires réalisent",
              texte: "Elles signent leur devis avec vous, réalisent et facturent leurs travaux, et portent leurs garanties (décennale, biennale, parfait achèvement).",
            },
          ]}
        />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/notre-methode", titre: "Notre méthode", texte: "Comment un chantier est préparé, suivi et réceptionné." },
            { href: "/realisations", titre: "Projets pilotés", texte: "Chantiers terminés des entreprises partenaires, en photos." },
            { href: "/contact", titre: "Décrire votre projet", texte: `Visite technique et étude sans engagement : ${SITE.telAffiche}.` },
          ]}
        />
      </PageSection>

      <CtaFinal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            { "@context": "https://schema.org", "@type": "AboutPage", name: TITRE, url, description: DESCRIPTION, mainEntity: FONDATEUR_LD },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
                { "@type": "ListItem", position: 2, name: "Qui sommes-nous", item: url },
              ],
            },
          ]),
        }}
      />
    </>
  );
}

export default withWw(CHEMIN, QuiSommesNous);
