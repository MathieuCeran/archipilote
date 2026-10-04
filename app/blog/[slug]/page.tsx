import type { Metadata } from "next";
import Link from "next/link";
import { Tirage } from "../../components/tirage";
import { notFound } from "next/navigation";
import { ALL_ARTICLES, photoSrc, type BlogArticle } from "../../lib-articles";
import { CtaFinal } from "../../components/cta-final";
import { preparerArticle } from "../article-html";
import { SommaireSuivi, BarreLecture } from "./suivi-lecture";

export function generateStaticParams() {
  return ALL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.titre} — ARCHI PILOTE RÉNOVATION`,
    description: article.excerpt,
    keywords: article.keyword ? [article.keyword] : undefined,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

/** Trois suggestions : la même rubrique d'abord, puis les plus récentes. */
function suggestions(article: BlogArticle): BlogArticle[] {
  const autres = ALL_ARTICLES.filter((a) => a.slug !== article.slug);
  const memeRubrique = autres.filter((a) => a.categorie === article.categorie);
  return [...memeRubrique, ...autres.filter((a) => a.categorie !== article.categorie)].slice(0, 3);
}

/* ============================================================================
   LA NOTE TECHNIQUE — 04/10/2026.

   Un article se présente comme une note du dossier de l'agence : ouverture sur
   encre (comme toutes les pages), couverture qui chevauche l'ouverture, puis
   deux colonnes. À gauche, le CARTOUCHE — le bloc-titre d'un plan d'archi —
   collant : rubrique, date, durée de lecture, sommaire qui suit la lecture, et
   l'appel à estimer. À droite, la prose à 44 rem.

   L'ancienne mise en page n'avait de rail que pour les trois articles dont le
   HTML portait un « Sommaire » : les trente autres tombaient sur une colonne
   centrée, sans repère. Le cartouche existe désormais partout ; seul le
   sommaire dépend des intertitres.
   ============================================================================ */
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return notFound();

  const note = article.bodyHtml ? preparerArticle(article.bodyHtml) : null;
  const sommaire = note?.sommaire.filter((e) => e.texte) ?? [];
  const lire = suggestions(article);
  const url = `https://www.archipiloterenovation.com/blog/${article.slug}`;
  const image = photoSrc(article.photo);
  // Photo en fond d'ouverture seulement s'il y en a une, et si ce n'est pas un schéma.
  const photoFond = Boolean(image) && !article.schema;

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.titre,
      description: article.excerpt,
      datePublished: article.dateISO,
      dateModified: article.dateISO,
      ...(article.keyword ? { keywords: article.keyword } : {}),
      ...(image ? { image } : {}),
      url,
      timeRequired: `PT${article.minutes}M`,
      author: { "@type": "Organization", name: "ARCHI PILOTE RÉNOVATION", "@id": "https://www.archipiloterenovation.com/#organization" },
      publisher: { "@id": "https://www.archipiloterenovation.com/#organization" },
    },
  ];
  // Fil d'Ariane : Google l'affiche parfois à la place de l'adresse dans ses résultats.
  jsonLd.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.archipiloterenovation.com/blog" },
      { "@type": "ListItem", position: 3, name: article.titre, item: url },
    ],
  });
  if (note?.faq.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: note.faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.reponse },
      })),
    });
  }

  return (
    <main className="relative z-10 note">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BarreLecture />

      {/* L'ouverture : la photo de couverture passe DERRIÈRE le titre, sous un
          voile sombre plus dense à gauche, là où se lit le texte. Le chapô est
          la meta description — la phrase qui a fait cliquer dans Google.
          Un schéma ne se met pas en fond (illisible sous un voile) : il reste
          posé entier sous l'ouverture. */}
      <header className={`rf-dossier mq-ouverture-bloc note-ouverture${photoFond ? " note-ouverture--photo" : ""}`}>
        {!photoFond ? (
          <Tirage className="rf-tirage--ouverture" />
        ) : (
          <>
            <img className="note-ouverture-image" src={image} alt={article.photoAlt ?? ""} fetchPriority="high" />
            <div className="note-ouverture-voile" aria-hidden />
          </>
        )}
        <div className="rf-wrap note-ouverture-wrap">
          <p className="rf-repere">
            <Link href="/blog" className="mq-retour">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19 12H5m0 0 6 6m-6-6 6-6" /></svg>
              Le blog
            </Link>
          </p>
          <h1 className="rf-titre note-titre">{article.titre}</h1>
          {article.excerpt && <p className="note-chapo">{article.excerpt}</p>}
        </div>
      </header>

      {article.schema && image && (
        <div className="rf-wrap note-couverture-wrap">
          <figure className="note-couverture note-couverture--schema">
            <img src={image} alt={article.photoAlt ?? article.titre} />
            <figcaption>Schéma pédagogique — illustration de principe, non exécutoire.</figcaption>
          </figure>
        </div>
      )}

      <div className="rf-wrap note-grille">
        <aside className="note-cartouche">
          <dl className="note-fiche">
            <div>
              <dt>Rubrique</dt>
              <dd>{article.categorie}</dd>
            </div>
            <div>
              <dt>Publié le</dt>
              <dd>
                <time dateTime={article.dateISO}>{article.date}</time>
              </dd>
            </div>
            <div>
              <dt>Lecture</dt>
              <dd>{article.minutes} min</dd>
            </div>
          </dl>
          {sommaire.length > 1 && <SommaireSuivi sommaire={sommaire} />}
          <Link href="/estimateur-travaux" className="note-cartouche-cta">
            Estimer mon projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </aside>

        <article id="note-corps" className="note-prose">
          {note ? (
            <div dangerouslySetInnerHTML={{ __html: note.html }} />
          ) : (
            article.corps.map((p, i) => (
              <div key={i} className="note-bloc">
                <p>{p}</p>
                {i === 0 && article.img2 && (
                  <figure>
                    <img src={photoSrc(article.img2)} alt={article.img2Caption ?? article.titre} loading="lazy" />
                    {article.img2Caption && <figcaption>{article.img2Caption}</figcaption>}
                  </figure>
                )}
                {i === 1 && article.img3 && (
                  <figure>
                    <img src={photoSrc(article.img3)} alt={article.img3Caption ?? article.titre} loading="lazy" />
                    {article.img3Caption && <figcaption>{article.img3Caption}</figcaption>}
                  </figure>
                )}
              </div>
            ))
          )}
        </article>
      </div>

      {lire.length > 0 && (
        <section className="note-suite" aria-labelledby="note-suite-titre">
          <div className="rf-wrap">
            <h2 id="note-suite-titre" className="rf-titre rf-titre--petit">À lire ensuite</h2>
            <ul className="note-suite-liste">
              {lire.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="note-carte">
                    <span className={`note-carte-image${photoSrc(a.photo) ? "" : " is-vide"}`}>
                      {photoSrc(a.photo) && <img src={photoSrc(a.photo)} alt="" loading="lazy" className={a.schema ? "is-schema" : undefined} />}
                    </span>
                    <span className="note-carte-rubrique">{a.categorie}</span>
                    <span className="note-carte-titre">{a.titre}</span>
                    <span className="note-carte-meta">{a.minutes} min de lecture</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaFinal />
    </main>
  );
}
