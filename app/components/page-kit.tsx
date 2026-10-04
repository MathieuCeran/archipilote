import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "../data";

/* ============================================================================
   LE KIT DE PAGE — 04/10/2026.

   Un seul modèle pour toutes les pages hors blog. Une page = une intention :
   un H1 qui porte le mot-clé, une introduction courte, puis des sections au
   même dessin (titre à gauche, accroche à droite, filet au-dessus), et des
   contenus faits pour être parcourus — cartes, chiffres, étapes, tableau,
   FAQ — plutôt que de longs paragraphes.

   Remplace progressivement MqHero/MqSection, PageHeader, LocalPage et
   SpecialtyPage, qui coexistaient et donnaient un site à trois visages.
   ============================================================================ */

const URL_SITE = "https://www.archipiloterenovation.com";

type Fil = { nom: string; href: string };

/** Ouverture : photo en fond sous un voile, fil d'Ariane, H1, chapô, deux appels. */
export function PageHero({
  fil,
  titre,
  chapo,
  image,
  alt,
  cadrage,
  actions = true,
}: {
  fil: Fil[];
  titre: string;
  chapo: string;
  /** Sans image : en-tête sobre sur encre (pages légales, FAQ, glossaire…). */
  image?: string;
  alt?: string;
  /** object-position de la photo — utile pour une photo portrait recadrée en bandeau. */
  cadrage?: string;
  /** false : pas de boutons d'appel (pages légales). */
  actions?: boolean;
}) {
  return (
    <header className={`rf-dossier pg-hero${image ? "" : " pg-hero--simple"}`} data-ouverture>
      {image && (
        <>
          <img className="pg-hero-image" src={image} alt={alt ?? ""} fetchPriority="high" style={cadrage ? { objectPosition: cadrage } : undefined} />
          <div className="pg-hero-voile" aria-hidden />
        </>
      )}
      <div className="rf-wrap pg-hero-wrap">
        <nav aria-label="Fil d'Ariane" className="pg-fil">
          <ol>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            {fil.map((f, i) => (
              <li key={f.href}>
                {i === fil.length - 1 ? <span aria-current="page">{f.nom}</span> : <Link href={f.href}>{f.nom}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="pg-titre">{titre}</h1>
        <p className="pg-chapo">{chapo}</p>
        {actions && (
        <div className="pg-hero-actions">
          <Link href="/contact" className="rf-btn rf-btn--clair">
            Décrire mon projet
          </Link>
          <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="rf-btn rf-btn--fantome">
            {SITE.telAffiche}
          </a>
        </div>
        )}
      </div>
    </header>
  );
}

/** Introduction : le paragraphe d'entrée à gauche, la carte « ce que nous prenons en charge » à droite. */
export function PageIntro({ children, titreCarte, points }: { children: ReactNode; titreCarte: string; points: string[] }) {
  return (
    <section className="pg-section pg-intro">
      <div className="rf-wrap pg-intro-grille">
        <div className="pg-intro-texte">{children}</div>
        <aside className="pg-carte-engagements">
          <p className="pg-carte-titre">{titreCarte}</p>
          <ul>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

/** Manifeste : une phrase forte, deux phrases d'explication, un lien, et une
    vraie photo. Remplace l'intro + carte + chiffres quand ils se répètent. */
export function PageManifeste({
  titre,
  children,
  lien,
  image,
  alt,
}: {
  titre: string;
  children: ReactNode;
  lien?: { href: string; label: string };
  image: string;
  alt: string;
}) {
  return (
    <section className="pg-section pg-manifeste">
      <div className="rf-wrap pg-manifeste-grille">
        <div className="pg-manifeste-texte">
          <h2>{titre}</h2>
          <div className="pg-manifeste-corps">{children}</div>
          {lien && (
            <Link href={lien.href} className="pg-manifeste-lien">
              {lien.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          )}
        </div>
        <figure className="pg-manifeste-image">
          <img src={image} alt={alt} loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

/** Appel à l'action : carte sombre, texte + bouton à gauche, vraie photo à droite. */
export function PageAppel({
  repere,
  titre,
  texte,
  image,
  alt,
  cta = { href: "/contact", label: "Décrire mon projet" },
  secondaire,
}: {
  repere?: string;
  titre: string;
  texte: string;
  image: string;
  alt: string;
  cta?: { href: string; label: string };
  secondaire?: { href: string; label: string };
}) {
  return (
    <div className="pg-appel-section">
      <div className="rf-wrap">
        <div className="pg-appel">
          <div className="pg-appel-texte">
            {repere && <p className="pg-appel-repere">{repere}</p>}
            <h2>{titre}</h2>
            <p>{texte}</p>
            <div className="pg-appel-actions">
              <Link href={cta.href} className="rf-btn rf-btn--clair">
                {cta.label}
              </Link>
              {secondaire && (
                <Link href={secondaire.href} className="rf-btn rf-btn--fantome">
                  {secondaire.label}
                </Link>
              )}
            </div>
          </div>
          <div className="pg-appel-image">
            <img src={image} alt={alt} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Chiffres clés : grille à filets fins. */
export function PageChiffres({ items }: { items: { valeur: string; label: string }[] }) {
  return (
    <div className="rf-wrap">
      <dl className="pg-chiffres">
        {items.map((c) => (
          <div key={c.label}>
            <dt>{c.label}</dt>
            <dd>{c.valeur}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Section : H2 à gauche, accroche à droite, filet au-dessus. */
export function PageSection({
  id,
  titre,
  accroche,
  children,
  fond,
}: {
  id?: string;
  titre: string;
  accroche?: ReactNode;
  children: ReactNode;
  fond?: "craie";
}) {
  return (
    <section id={id} className={`pg-section${fond ? " pg-section--craie" : ""}`}>
      <div className="rf-wrap">
        <div className="pg-entete">
          <h2>{titre}</h2>
          {accroche && <div className="pg-accroche">{accroche}</div>}
        </div>
        <div className="pg-contenu">{children}</div>
      </div>
    </section>
  );
}

/** Cartes : ce qui est compris, ce qui est vérifié… */
export function PageCartes({ items, colonnes = 3 }: { items: { titre: string; texte: ReactNode; href?: string }[]; colonnes?: 2 | 3 }) {
  return (
    <ul className={`pg-cartes pg-cartes--${colonnes}`}>
      {items.map((c) => (
        <li key={c.titre} className="pg-carte">
          <h3>{c.titre}</h3>
          <p>{c.texte}</p>
          {c.href && (
            <Link href={c.href} className="pg-carte-lien">
              En savoir plus
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Étapes : une vraie séquence, donc numérotée. */
export function PageEtapes({ items }: { items: { titre: string; texte: string }[] }) {
  return (
    <ol className="pg-etapes">
      {items.map((e) => (
        <li key={e.titre}>
          <h3>{e.titre}</h3>
          <p>{e.texte}</p>
        </li>
      ))}
    </ol>
  );
}

/** Liste à coches. */
export function PageCoches({ items }: { items: ReactNode[] }) {
  return (
    <ul className="pg-coches">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

/** Tableau de prix (ou de comparaison). */
export function PageTableau({ colonnes, lignes, note }: { colonnes: string[]; lignes: ReactNode[][]; note?: ReactNode }) {
  return (
    <>
      <div className="note-tableau pg-tableau">
        <table>
          <thead>
            <tr>
              {colonnes.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i}>
                {l.map((c, j) => (
                  <td key={j}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="pg-note">{note}</p>}
    </>
  );
}

/** Tuiles avec photo : les métiers de l'accueil, chaque tuile mène à sa page. */
export function PageTuiles({ items }: { items: { href: string; titre: string; texte: string; image: string; alt: string }[] }) {
  return (
    <ul className="pg-tuiles">
      {items.map((t) => (
        <li key={t.href}>
          <Link href={t.href} className="pg-tuile">
            <span className="pg-tuile-image">
              <img src={t.image} alt={t.alt} loading="lazy" />
            </span>
            <span className="pg-tuile-titre">{t.titre}</span>
            <span className="pg-tuile-texte">{t.texte}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Galerie de photos réelles, légendées. */
export function PageGalerie({ items }: { items: { src: string; alt: string; legende?: string }[] }) {
  return (
    <ul className="pg-galerie" data-colonnes={items.length % 3 === 0 && items.length % 4 !== 0 ? 3 : 4}>
      {items.map((g) => (
        <li key={g.src}>
          <figure>
            <img src={g.src} alt={g.alt} loading="lazy" />
            {g.legende && <figcaption>{g.legende}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** Image pleine largeur de la colonne, avec légende courte. */
export function PageImage({ src, alt, legende }: { src: string; alt: string; legende?: string }) {
  return (
    <figure className="pg-image">
      <img src={src} alt={alt} loading="lazy" />
      {legende && <figcaption>{legende}</figcaption>}
    </figure>
  );
}

/** FAQ dépliable. Le JSON-LD est produit par `jsonLdPage`. */
export function PageFaq({ items }: { items: { question: string; reponse: string }[] }) {
  return (
    <div className="note-faq">
      {items.map((q) => (
        <details key={q.question} className="note-faq-item">
          <summary>{q.question}</summary>
          <div className="note-faq-reponse">
            <p>{q.reponse}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/** Pages proches : le maillage interne, en cartes. */
export function PageLiens({ items }: { items: { href: string; titre: string; texte: string }[] }) {
  return (
    <ul className="pg-liens">
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>
            <span className="pg-liens-titre">{l.titre}</span>
            <span className="pg-liens-texte">{l.texte}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** JSON-LD d'une page de service : Service + fil d'Ariane + FAQ. */
export function JsonLdPage({
  chemin,
  nom,
  description,
  fil,
  faq,
}: {
  chemin: string;
  nom: string;
  description: string;
  fil: Fil[];
  faq?: { question: string; reponse: string }[];
}) {
  const url = URL_SITE + chemin;
  const donnees: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: nom,
      description,
      url,
      areaServed: ["Paris", "Hauts-de-Seine", "Île-de-France"],
      provider: { "@id": `${URL_SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ nom: "Accueil", href: "/" }, ...fil].map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: f.nom,
        item: URL_SITE + f.href,
      })),
    },
  ];
  if (faq?.length) {
    donnees.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.reponse } })),
    });
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }} />;
}
