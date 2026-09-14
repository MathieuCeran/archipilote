import Link from "next/link";
import { Tirage } from "./tirage";

/* ============================================================================
   LE KIT — réécrit sur le système de la refonte.

   Quatorze primitives, employées 950 fois par les soixante-sept pages :
   MqFig 322, MqSection 235, MqProse 93, MqChecklist 39, MqReadNext 37,
   MqHero 35, MqFaq 33, MqCta 32, MqNumbered 22. Les toucher ici, c’est les
   toucher partout — aucune page n’est ouverte.

   CE QUI N’ALLAIT PAS, mesuré sur /renovation-complete avant réécriture :

   · 896 px de contenu dans une planche de 1408. Un `max-w-4xl` posé sur
     chaque section enfermait tout le site dans une colonne calée à gauche,
     et laissait CINQ CENT DOUZE PIXELS DE VIDE à droite, sur toute la
     hauteur de chaque page. C’est le défaut dominant, et il tenait en une
     classe utilitaire ;
   · 17 865 px de haut pour une page interne, parce que tout s’empile dans
     cette colonne unique ;
   · 235 sections, dont SIX en registre sombre. Aucune alternance, donc aucun
     rythme : onze bandes de papier à la suite.

   CE QUI CHANGE. La section prend toute la planche, et chaque primitive
   décide de sa propre justification : la prose se répartit en colonnes de
   journal, les grilles et les figures occupent la largeur. Le texte reste
   lisible — il n’est jamais tiré à 1408 px — mais la page cesse d’être une
   colonne posée dans un vide.
   ============================================================================ */

export function MqKicker({ children }: { children: React.ReactNode }) {
  return <p className="rf-repere">{children}</p>;
}

export function MqHero({ kicker, title, lead, children }: { kicker?: string; title: React.ReactNode; lead?: React.ReactNode; children?: React.ReactNode }) {
  /* L’OUVERTURE DE PAGE — trente-cinq pages passent par ici.

     Elle était en registre clair : un titre, un chapô, et rien qui distingue
     le haut de la page du reste. Sur des pages qui enchaînent ensuite huit
     sections de papier, l’ouverture ne s’ouvrait sur rien.

     Elle passe sur ENCRE. C’est la couverture du dossier : le calque de
     tirage en filigrane, le repère en bleu clair, le titre en craie. Trois
     conséquences, toutes voulues :

     · la page a un début, et il se voit avant d’avoir lu un mot ;
     · la barre de navigation bascule d’elle-même en tenue claire — elle
       détecte le registre sombre derrière elle — et retrouve exactement
       l’allure qu’elle a sur l’accueil ;
     · la première section claire qui suit se lit comme une page qui
       commence, pas comme la suite d’un flux.

     Le tirage n’est pas un ornement : c’est le même dessin d’élévation que
     l’accueil, et c’est ce qui rattache visuellement les soixante-sept pages
     à la même maison. */
  return (
    <header className="rf-dossier mq-ouverture-bloc">
      <Tirage className="rf-tirage--ouverture" />
      <div className="rf-wrap pt-36 md:pt-44 pb-14 md:pb-20">
        {kicker && <MqKicker>{kicker}</MqKicker>}
        <div className="mq-ouverture">
          <div>
            {/* Le même volet que l’accueil (§ 62) : la manchette sort de son
                bord au lieu d’apparaître. Le texte est présent dès le premier
                rendu — il n’est pas en opacité nulle, seulement derrière
                l’arête, ce qui laisse le LCP intact. */}
            <h1 className="rf-titre rf-titre--manchette">
              <span className="rf-volet" style={{ "--d": "0.18s" } as React.CSSProperties}>
                <span>{title}</span>
              </span>
            </h1>
            {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
          </div>
          {lead && <div className="mq-chapo">{lead}</div>}
        </div>
      </div>
    </header>
  );
}

export function MqSection({
  kicker,
  title,
  lead,
  children,
  fond = "matiere",
}: {
  kicker?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  children: React.ReactNode;
  /* `wide` existait pour libérer une section du `max-w-4xl`. Toutes le sont
     désormais ; la prop est conservée et ignorée, le temps que les quelques
     appels qui la passent soient nettoyés. */
  wide?: boolean;
  fond?: "matiere" | "dossier";
}) {
  /* LE TITRE PASSE DANS UNE COLONNE DE GAUCHE.

     Le défaut d’origine n’était pas la colonne étroite : c’était une colonne
     étroite CALÉE À GAUCHE dans une planche large. 896 px de contenu, 512 px
     de vide, toujours du même côté, sur toute la hauteur de chaque page.

     Une première tentative devinait la composition à partir des enfants —
     « une prose et une figure, donc en vis-à-vis ». Elle ne se déclenchait
     jamais : les pages emballent leurs figures dans des div, et le type de
     l’enfant n’est plus MqFig. Deviner la mise en page à partir du contenu
     d’autrui est fragile par construction ; abandonné.

     Le repère et le titre occupent donc un rail de gauche, le contenu la
     colonne de droite. La planche est remplie, la lecture reste sur une seule
     colonne, et rien ne dépend de la façon dont chaque page écrit ses
     enfants. Sous 1100 px, tout se remet en pile. */
  return (
    <section className={fond === "dossier" ? "rf-dossier" : "rf-matiere"}>
      <div className="rf-wrap rf-section">
        <div className="mq-grille">
          <div className="mq-grille-rail">
            {kicker && <MqKicker>{kicker}</MqKicker>}
            {title && <h2 className="rf-titre rf-titre--petit">{title}</h2>}
            {lead && <p className="rf-chapo mt-4">{lead}</p>}
          </div>
          <div className="mq-grille-corps">{children}</div>
        </div>
      </div>
    </section>
  );
}

/* Colonne unique, à sa mesure. Deux colonnes de journal avaient été
   essayées : dans une section dont l’en-tête pose déjà le chapô à droite,
   elles créaient un troisième saut de lecture. C’est le vis-à-vis de
   MqSection qui remplit la planche, pas la prose elle-même. */
export function MqProse({ children }: { children: React.ReactNode }) {
  return <div className="mq-prose">{children}</div>;
}

/* LA FIGURE N’EST JAMAIS SEULE.

   Recensement fait sur les quatre-vingt-une pages : 491 figures, dont 131
   POSÉES SEULES dans leur bloc, sur 55 pages, avec jusqu’à 862 pixels de vide
   à côté. Une image avec sa légende dessous et rien autour n’est pas une
   composition, c’est une affiche déposée au milieu du texte.

   Dès que la place le permet, la légende passe DONC À CÔTÉ : l’image à
   gauche, la légende en colonne à droite, sous son filet. C’est la planche
   documentée — le même dispositif que le relevé de l’accueil, appliqué
   partout sans qu’une page soit touchée.

   Le seuil est mesuré sur l’hôte, pas sur l’écran : une figure logée dans une
   demi-colonne garde sa légende dessous, une figure qui occupe la planche
   prend la légende de côté. C’est ce que fait une requête de conteneur, et
   c’est la seule façon de le décider sans savoir où la page l’a mise.

   `entier` : affiche l’image en entier au lieu de la recadrer au format du
   cadre. Réservé aux schémas et infographies, dont le texte touche les bords :
   recadrés comme une photo, ils perdent leur titre ou leur légende. */
export function MqFig({ src, alt, caption, ratio = "aspect-[4/3]", entier = false }: { src: string; alt: string; caption?: string; ratio?: string; entier?: boolean }) {
  return (
    <div className="mq-fig-hote">
      <figure className={`rf-fig mq-fig ${entier ? "mq-fig--schema" : ""}`}>
        <div className={`rf-cadre relative ${ratio}`}>
          <img src={src} alt={alt} loading="lazy" className={`absolute inset-0 size-full ${entier ? "object-contain" : "object-cover"}`} />
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

/* Le cartouche du prototype : le chiffre au grand corps, l’unité détachée,
   et un filet entre les cases. */
export function MqStats({ items }: { items: { dt: string; dd: string }[] }) {
  /* ⚠️ CE CARTOUCHE N’EST PAS TOUJOURS UN CARTOUCHE DE CHIFFRES.

     Il a été dessiné pour l’accueil, où les quatre valeurs sont des nombres
     courts — 5 j, 48 h, 8, 12 mois — posés au grand corps. Les pages internes
     lui passent aussi des PHRASES : « Prix fournisseur », « Documents
     attendus ». Rendues à 46 px dans une piste de 170, elles débordaient la
     page de quarante-quatre pixels sur mobile. Défaut mesuré, pas supposé.

     La valeur choisit donc son corps : le grand chiffre tant qu’elle tient en
     six signes, le degré d’accroche au-delà. Rien à changer dans les pages. */
  return (
    <dl className="rf-cartouche mq-cartouche">
      {items.map((s) => (
        <div key={s.dd} className="rf-cartouche-case">
          <dt className={s.dt.length <= 6 ? "rf-cartouche-chiffre" : "mq-cartouche-mot"}>{s.dt}</dt>
          <dd className="rf-cartouche-label">{s.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MqNumbered({ items, cols = 3 }: { items: { title: string; text: string }[]; cols?: 2 | 3 }) {
  return (
    <ol className="mq-numerote" data-cols={cols}>
      {items.map((it, i) => (
        <li key={it.title}>
          <span className="mq-numerote-num">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="rf-h3">{it.title}</h3>
          <p className="rf-secondaire mt-2">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function MqChecklist({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <ul className="mq-liste" data-cols={cols}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

/* Section sombre. Elle n’était employée que six fois sur deux cent
   trente-cinq — c’est la raison du manque de rythme des pages internes. */
export function MqDark({ kicker, title, lead, children, cta }: { kicker?: string; title: React.ReactNode; lead?: React.ReactNode; children: React.ReactNode; cta?: { href: string; label: string } }) {
  return (
    <MqSection kicker={kicker} title={title} lead={lead} fond="dossier">
      {children}
      {cta && (
        <div className="mt-10">
          <Link href={cta.href} className="rf-btn rf-btn--clair">{cta.label}</Link>
        </div>
      )}
    </MqSection>
  );
}

export function MqDarkSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mq-etapes">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="mq-etapes-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="rf-h3">{s.title}</h3>
            <p className="rf-secondaire mt-1.5">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function MqQuotes({ items }: { items: { quote: string; author: string }[] }) {
  return (
    <div className="mq-citations">
      {items.map((q) => (
        <blockquote key={q.author}>
          <p>{q.quote}</p>
          <footer>{q.author}</footer>
        </blockquote>
      ))}
    </div>
  );
}

/* FAQ en <details> natifs — réponses présentes dans le HTML initial. */
export function MqFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="rf-faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span aria-hidden>+</span>
          </summary>
          <div className="rf-secondaire">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function MqCta({ title = "Décrivez votre projet, nous le structurons", lead }: { title?: string; lead?: string }) {
  return (
    <section className="rf-dossier">
      <div className="rf-wrap rf-section">
        {/* Le même bloc de clôture que l’accueil : un nom, un numéro, des
            heures, puis les actions. Pas deux boutons centrés en l’air. */}
        <div className="mq-cloture">
          <div>
            <h2 className="rf-titre" style={{ fontSize: "var(--t-h2-l)" }}>{title}</h2>
            {lead && <p className="rf-chapo mt-6" style={{ color: "#c3c0b6", maxWidth: "34rem" }}>{lead}</p>}
          </div>
          <div className="rf-contact-carte">
            <p className="rf-contact-libelle">De vive voix</p>
            <p className="rf-contact-numero">
              <a href="tel:+33667117975">06 67 11 79 75</a>
            </p>
            <p className="rf-contact-heures">Lundi — vendredi, 08h30 – 19h00 · Samedi, sur rendez-vous</p>
            <div className="rf-contact-actions">
              <Link href="/contact" className="rf-btn rf-btn--clair">Décrire mon projet</Link>
              <Link href="/estimateur-travaux" className="rf-btn rf-btn--fantome">Faire estimer un devis</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MqReadNext({ items }: { items: { href: string; label: string; sub: string }[] }) {
  return (
    <section className="rf-matiere">
      <div className="rf-wrap rf-section--serre">
        <p className="rf-repere">À lire ensuite</p>
        <div className="mq-suite">
          {items.map((l) => (
            <Link key={l.href} href={l.href}>
              <span className="mq-suite-titre">{l.label}</span>
              <span className="mq-suite-sous">{l.sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
