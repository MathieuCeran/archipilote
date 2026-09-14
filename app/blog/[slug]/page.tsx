import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Tirage } from "../../components/tirage";
import { notFound } from "next/navigation";
import { ALL_ARTICLES, photoSrc } from "../../lib-articles";
import { Reveal } from "../../components/reveal";
import { WordReveal } from "../../components/word-reveal";
import { CtaFinal } from "../../components/cta-final";

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

/* Extraction du sommaire : on ne touche pas au HTML importé, on le coupe.
   Le titre « Sommaire » et sa liste sont retirés du corps ; les ancres sont
   relues pour construire le rail. Si l'article n'a pas de sommaire — les
   articles rédigés à la main n'en ont pas — la fonction rend `null` et la
   page retombe sur une seule colonne. */
function extraireSommaire(html?: string): { entrees: { href: string; texte: string }[]; corps: string } | null {
  if (!html) return null;
  const bloc = html.match(/<h2[^>]*>\s*Sommaire\s*<\/h2>\s*<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (!bloc) return null;
  const entrees = [...bloc[1].matchAll(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1],
    texte: m[2].replace(/<[^>]+>/g, "").trim(),
  }));
  if (entrees.length < 2) return null;
  return { entrees, corps: html.replace(bloc[0], "") };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return notFound();

  const autres = ALL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  /* LE SOMMAIRE SORT DU CORPS.

     Les articles importés commencent par « <h2>Sommaire</h2> » suivi d'une
     liste d'ancres. Laissé dans le flux, ce bloc pousse le premier paragraphe
     six cents pixels plus bas et, surtout, il occupe la mesure de lecture
     avec de la navigation.

     Il part donc dans le rail collant, comme le repère et le titre des autres
     pages du site : il accompagne la lecture au lieu de la retarder, et il
     remplit la colonne de gauche qui, sur ces pages, était vide sur toute la
     hauteur de l'article — mesuré à 638 px de large pour rien. */
  const sommaire = extraireSommaire(article.bodyHtml);

  const jsonLdBlogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.titre,
    description: article.excerpt,
    datePublished: article.dateISO,
    ...(article.keyword ? { keywords: article.keyword } : {}),
    dateModified: article.dateISO,
    image: photoSrc(article.photo),
    url: `https://www.archipiloterenovation.com/blog/${article.slug}`,
    author: { "@type": "Organization", name: "ARCHI PILOTE RÉNOVATION", "@id": "https://www.archipiloterenovation.com/#organization" },
    publisher: { "@id": "https://www.archipiloterenovation.com/#organization" },
  };

  return (
    <main className="relative z-10 bg-carbone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }} />
      {/* L'OUVERTURE D'ARTICLE — la seule famille de pages qui n'y passait pas.

          Elle était centrée, sur fond clair, avec un titre révélé mot par mot.
          Trente-trois articles ouvraient donc autrement que les soixante-cinq
          autres pages du site. Ils prennent la même couverture de dossier :
          registre sombre, calque de tirage, repère à gauche, titre à gauche.

          Le retour vers /blog reste dans le repère — c'est la seule
          navigation dont dispose un lecteur arrivé par un moteur. */}
      <header className="rf-dossier mq-ouverture-bloc">
        <Tirage className="rf-tirage--ouverture" />
        <div className="rf-wrap pt-36 md:pt-44 pb-14 md:pb-20">
          <p className="rf-repere">
            <Link href="/blog" className="mq-retour">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19 12H5m0 0 6 6m-6-6 6-6" /></svg>
              {article.categorie}
            </Link>
          </p>
          <div className="mq-ouverture">
            <h1 className="rf-titre rf-titre--manchette">{article.titre}</h1>
            <p className="mq-chapo mq-date">{article.date}</p>
          </div>
        </div>
      </header>

      {/* 05/09 : un schéma pédagogique ne se recadre pas. Le cadre reste au même format
          (16/8) pour ne pas faire sauter la mise en page d'un article à l'autre, mais
          l'image y est posée ENTIÈRE (object-contain) sur le fond de la page. Recadrée en
          object-cover comme une photo, elle perdait un quart de sa hauteur — donc son
          titre. La mention explicite évite qu'un dessin passe pour une preuve de chantier. */}
      <Reveal variant="scale" className="container-site mb-14 md:mb-20">
        {/* Même règle que les figures des pages (§ 28) : la hauteur se mesure
            en écran, pas en largeur de colonne. Le 16/8 donnait 614 px sur un
            portable et près de 750 px sur un grand écran — la couverture
            occupait la page avant que l'article ne commence. */}
        <div className={`rf-couverture-article relative rounded-none overflow-hidden card-e${article.schema ? " bg-surface" : ""}`}>
          <img
            src={photoSrc(article.photo)}
            alt={article.titre}
            className={`absolute inset-0 size-full ${article.schema ? "object-contain" : "object-cover"}`}
          />
        </div>
        {article.schema && (
          <p className="mt-2 t-micro text-muted">Schéma pédagogique — illustration de principe, non exécutoire.</p>
        )}
      </Reveal>

      <article className="container-site pb-20 md:pb-28">
        {/* La grille à deux colonnes n'a de sens QUE s'il y a un rail. Sans
            sommaire — les articles rédigés à la main n'en ont pas — le corps
            partirait dans la deuxième piste et laisserait la première vide :
            exactement le vide qu'on vient de supprimer, du côté gauche. */}
        <div className={sommaire ? "mq-grille" : "rf-article-seul"}>
          {/* Le rail : sommaire collant à gauche, comme le repère et le titre
              des autres pages. Sur les articles sans sommaire il reste vide et
              la grille retombe d'elle-même sur une colonne à partir de 1100 px
              (voir .rf-article-grille). */}
          {sommaire && (
            <nav className="mq-grille-rail rf-sommaire" aria-label="Sommaire de l’article">
              <p className="rf-repere">Sommaire</p>
              <ol>
                {sommaire.entrees.map((e) => (
                  <li key={e.href}>
                    <a href={e.href}>{e.texte}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

        <div className="mq-grille-corps flex flex-col gap-6">
          {article.bodyHtml ? (
            /* Article importé depuis Sedestral : corps HTML assaini à la synchronisation. */
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: sommaire ? sommaire.corps : article.bodyHtml }} />
          ) : (
            article.corps.map((p, i) => (
              <Fragment key={i}>
                <p className="text-ivoire/85 t-base leading-[1.75]">{p}</p>
                {i === 0 && article.img2 && (
                  <figure className="rf-fig my-2">
                      <div className="rf-article-figure rf-cadre relative overflow-hidden">
                        <img src={photoSrc(article.img2)} alt={article.img2Caption ?? article.titre} className="absolute inset-0 size-full object-cover" loading="lazy" />
                      </div>
                      {article.img2Caption && <figcaption>{article.img2Caption}</figcaption>}
                    </figure>
                )}
                {i === 1 && article.img3 && (
                  <figure className="rf-fig my-2">
                      <div className="rf-article-figure rf-cadre relative overflow-hidden">
                        <img src={photoSrc(article.img3)} alt={article.img3Caption ?? article.titre} className="absolute inset-0 size-full object-cover" loading="lazy" />
                      </div>
                      {article.img3Caption && <figcaption>{article.img3Caption}</figcaption>}
                    </figure>
                )}
              </Fragment>
            ))
          )}
          <div className="mt-4">
            <Link href="/estimateur-travaux" className="btn btn-primary w-fit">
              Estimer mon projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
        </div>
      </article>

      {autres.length > 0 && (
        <section className="relative pb-24 md:pb-36 border-t border-line pt-16">
          <div className="container-site flex flex-col gap-8">
            <h2 className="rf-titre rf-titre--petit">À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
              {autres.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group card-e rounded-none overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={photoSrc(a.photo)} alt={a.titre} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col gap-1.5">
                    <span className="text-orange mq-mention">{a.categorie}</span>
                    <h3 className="display t-base text-ivoire normal-case group-hover:text-orange transition-colors leading-tight">{a.titre}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal />
    </main>
  );
}
