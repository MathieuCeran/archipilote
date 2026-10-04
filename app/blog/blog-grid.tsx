"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
/** Ce que la liste affiche — rien de plus ne part dans le navigateur (le corps
    des articles reste côté serveur). */
export type Fiche = {
  slug: string;
  titre: string;
  excerpt: string;
  categorie: string;
  date: string;
  dateISO: string;
  minutes: number;
  image: string;
  schema: boolean;
};

/* ============================================================================
   L'INDEX DU BLOG — 04/10/2026.

   Avant : trente-quatre cartes identiques, photo assombrie d'un voile noir,
   rubrique illisible dans une pastille grise. Aucune hiérarchie, aucun moyen
   de trouver un sujet sans tout faire défiler.

   Maintenant : la note la plus récente en tête, en grand ; puis un filtre par
   rubrique (les rubriques sont celles des articles, comptées) ; puis la
   liste, en cartes plus légères — photo nette, rubrique en clair au-dessus du
   titre, durée de lecture.
   ============================================================================ */

function Carte({ a }: { a: Fiche }) {
  return (
    <Link href={`/blog/${a.slug}`} className="blog-carte">
      <span className={`blog-carte-image${a.image ? "" : " is-vide"}`}>
        {a.image && <img src={a.image} alt="" loading="lazy" className={a.schema ? "is-schema" : undefined} />}
      </span>
      <span className="blog-carte-rubrique">{a.categorie}</span>
      <span className="blog-carte-titre">{a.titre}</span>
      <span className="blog-carte-extrait">{a.excerpt}</span>
      <span className="blog-carte-meta">
        <time dateTime={a.dateISO}>{a.date}</time>
        <span>{a.minutes} min de lecture</span>
      </span>
    </Link>
  );
}

export function BlogGrid({ articles }: { articles: Fiche[] }) {
  const [une, ...suite] = articles;
  const [filtre, setFiltre] = useState<string | null>(null);

  const rubriques = useMemo(() => {
    const n = new Map<string, number>();
    for (const a of articles.slice(1)) n.set(a.categorie, (n.get(a.categorie) ?? 0) + 1);
    // Une rubrique d'un seul article ne mérite pas un filtre : « Toutes » la montre.
    return [...n.entries()].filter(([, c]) => c > 1).sort((x, y) => y[1] - x[1]);
  }, [articles]);

  const visibles = filtre ? suite.filter((a) => a.categorie === filtre) : suite;

  return (
    <section className="blog-index">
      <div className="rf-wrap">
        {une && (
          <Link href={`/blog/${une.slug}`} className={`blog-une${une.image ? "" : " blog-une--texte"}`}>
            {une.image && (
              <span className="blog-une-image">
                <img src={une.image} alt="" className={une.schema ? "is-schema" : undefined} />
              </span>
            )}
            <span className="blog-une-texte">
              <span className="blog-carte-rubrique">{une.categorie}</span>
              <span className="blog-une-titre">{une.titre}</span>
              <span className="blog-une-extrait">{une.excerpt}</span>
              <span className="blog-carte-meta">
                <time dateTime={une.dateISO}>{une.date}</time>
                <span>{une.minutes} min de lecture</span>
              </span>
              <span className="blog-une-lien">Lire la note</span>
            </span>
          </Link>
        )}

        <div className="blog-filtres" role="group" aria-label="Filtrer par rubrique">
          <button type="button" aria-pressed={filtre === null} onClick={() => setFiltre(null)}>
            Toutes <span>{suite.length}</span>
          </button>
          {rubriques.map(([r, n]) => (
            <button key={r} type="button" aria-pressed={filtre === r} onClick={() => setFiltre(r)}>
              {r} <span>{n}</span>
            </button>
          ))}
        </div>

        <ul className="blog-liste">
          {visibles.map((a) => (
            <li key={a.slug}>
              <Carte a={a} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
