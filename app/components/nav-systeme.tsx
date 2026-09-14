"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_GROUPS, NAV_STANDALONE } from "./mq-nav-data";

/* ============================================================================
   BARRE DE NAVIGATION

   Le vrai sujet n’est pas l’apparence de la barre : c’est que ce site compte
   cent pages, dont trente-trois dans le menu. La version précédente les
   déversait en quatre listes plates, sans hiérarchie ni point d’entrée. On
   pouvait les lire ; on ne pouvait pas s’orienter.

   Trois changements, dans l’ordre d’importance :

   1. Chaque menu s’ouvre sur une PLANCHE : les liens sur deux colonnes, et à
      droite une destination mise en avant, avec sa photographie et une ligne
      qui dit ce qu’on y trouve. Un visiteur qui ne sait pas quoi choisir a
      toujours une porte d’entrée évidente.

   2. La barre se DÉTACHE au défilement : posée sur le hero elle est
      transparente et pleine largeur ; dès qu’on scrolle elle se resserre en
      barre flottante à filet et ombre portée. Le changement d’état dit qu’on
      a quitté le haut de page.

   3. Le CLAVIER est traité. Flèches gauche et droite entre les menus, Échap
      pour fermer et rendre le focus à l’onglet, fermeture automatique quand le
      focus quitte l’en-tête. La version précédente ne s’ouvrait qu’à la souris.
   ============================================================================ */

/* La destination mise en avant de chaque menu. Les phrases sont reprises des
   renvois « À lire ensuite » déjà présents dans le site — rien d’inventé. */
const VEDETTES: Record<string, { href: string; titre: string; ligne: string; img: string; alt: string }> = {
  Expertise: {
    href: "/notre-methode",
    titre: "Notre méthode",
    ligne: "Les six étapes, et le livrable écrit de chacune.",
    img: "/photos/maquette/chantier-ouverture-mur-etaiement.jpg",
    alt: "Ouverture de mur porteur en cours, étaiement métallique en place",
  },
  Travaux: {
    href: "/renovation-complete",
    titre: "Rénovation complète",
    ligne: "Du gros œuvre aux finitions, un seul interlocuteur.",
    img: "/photos/maquette/sejour-haussmannien-renove.jpg",
    alt: "Séjour haussmannien livré, moulures conservées et parquet chêne",
  },
  Preuves: {
    href: "/realisations",
    titre: "Réalisations",
    ligne: "Chantiers documentés des équipes partenaires.",
    img: "/photos/maquette/pavillon-facade-apres.jpg",
    alt: "Façade de pavillon après ravalement et remplacement des menuiseries",
  },
  Ressources: {
    href: "/estimateur-travaux",
    titre: "Estimateur de travaux",
    ligne: "Une première fourchette, en quelques questions.",
    img: "/photos/maquette/schema-repartition-budget.jpg",
    alt: "Schéma de répartition d’un budget de rénovation par poste",
  },
};

export function NavRefonte() {
  const [pose, setPose] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [avancee, setAvancee] = useState(0);
  const [sombre, setSombre] = useState(false);

  const entete = useRef<HTMLElement>(null);
  const onglets = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    /* CE QUI PASSE DERRIÈRE LA BARRE, à quarante pixels du haut de l’écran.

       La barre a trois tenues : posée sur une photographie (transparente,
       texte clair), au-dessus d’une section sombre (flottante, texte clair),
       ou ordinaire (flottante, texte encre).

       Tant qu’elle ne servait que le prototype, l’état « photo » était supposé
       en haut de page : le prototype commence toujours par un héros
       photographique. Promue sur les soixante-sept pages, l’hypothèse devient
       fausse — la plupart ouvrent sur du papier, et la barre s’y affichait en
       texte clair sur fond clair, donc illisible.

       Elle regarde maintenant ce qu’il y a réellement derrière elle. */
    const surSectionSombre = () => {
      const bande = 40;
      for (const el of document.querySelectorAll<HTMLElement>(".rf-hero, .rf-dossier")) {
        const r = el.getBoundingClientRect();
        if (r.top <= bande && r.bottom > bande) return true;
      }
      return false;
    };

    const onScroll = () => {
      setPose(window.scrollY > 40);
      setSombre(surSectionSombre());
      const course = document.documentElement.scrollHeight - window.innerHeight;
      setAvancee(course > 0 ? Math.min(1, window.scrollY / course) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const fermer = useCallback(() => setMenu(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menu) {
        const i = NAV_GROUPS.findIndex((g) => g.label === menu);
        fermer();
        onglets.current[i]?.focus();
      }
      setMobile(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu, fermer]);

  /* Le menu se ferme quand le focus quitte l’en-tête : sans cela il resterait
     ouvert derrière le contenu dès qu’on tabule au-delà du dernier lien. */
  const surPerteFocus = (e: React.FocusEvent) => {
    if (!entete.current?.contains(e.relatedTarget as Node)) fermer();
  };

  const auClavier = (e: React.KeyboardEvent, i: number) => {
    const dernier = NAV_GROUPS.length - 1;
    const cible =
      e.key === "ArrowRight" ? (i === dernier ? 0 : i + 1) : e.key === "ArrowLeft" ? (i === 0 ? dernier : i - 1) : null;
    if (cible === null) return;
    e.preventDefault();
    onglets.current[cible]?.focus();
    if (menu) setMenu(NAV_GROUPS[cible].label);
  };

  /* « photo » : en haut de page ET un fond sombre derrière — barre effacée.
     « sombre » : flottante au-dessus d’un fond sombre — texte clair.
     « pose »   : tout le reste, dont le haut des pages qui ouvrent sur du
     papier, c’est-à-dire la quasi-totalité des pages hors accueil. */
  const etat = menu || mobile ? "pose" : !pose && sombre ? "photo" : sombre ? "sombre" : "pose";
  const clair = etat === "photo" || etat === "sombre";
  const groupe = NAV_GROUPS.find((g) => g.label === menu);
  const vedette = menu ? VEDETTES[menu] : null;

  return (
    <header ref={entete} className="rf-nav" data-pose={etat} data-flottante={pose || !!menu} onBlur={surPerteFocus}>
      <div className="rf-nav-barre">
        <span className="rf-progression" style={{ "--avancee": avancee } as React.CSSProperties} aria-hidden />

        <div className="rf-nav-interieur">
          <Link href="/" className="rf-nav-marque" onFocus={fermer}>
            <img
              src="/photos/maquette/monogramme-archi-pilote.png"
              alt=""
              aria-hidden
              width={36}
              height={36}
              style={{ filter: clair ? "brightness(0) invert(1)" : "none" }}
            />
            <span>
              Archi Pilote<span className="rf-nav-marque-suite"> Rénovation</span>
            </span>
          </Link>

          <nav className="rf-nav-menus" aria-label="Navigation principale">
            {NAV_GROUPS.map((g, i) => (
              <button
                key={g.label}
                ref={(el) => {
                  onglets.current[i] = el;
                }}
                type="button"
                className="rf-nav-lien"
                data-ouvert={menu === g.label}
                aria-expanded={menu === g.label}
                aria-haspopup="true"
                onMouseEnter={() => setMenu(g.label)}
                onFocus={() => setMenu(g.label)}
                onKeyDown={(e) => auClavier(e, i)}
                onClick={() => setMenu(menu === g.label ? null : g.label)}
              >
                {g.label}
                <svg viewBox="0 0 12 8" width="9" height="6" aria-hidden className="rf-nav-chevron">
                  <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            ))}
            {NAV_STANDALONE.map((l) => (
              <Link key={l.href} href={l.href} className="rf-nav-lien" onMouseEnter={fermer} onFocus={fermer}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="rf-nav-actions">
            <a href="tel:+33667117975" className="rf-nav-tel" onFocus={fermer}>
              06 67 11 79 75
            </a>
            {/* L’enveloppe porte le `hidden` : .rf-btn impose display:inline-flex
                et écraserait la classe utilitaire. */}
            <span className="hidden sm:inline-flex">
              <Link
                href="/contact"
                className={`rf-btn ${clair ? "rf-btn--clair" : "rf-btn--plein"} rf-nav-cta`}
                onFocus={fermer}
              >
                Décrire mon projet
              </Link>
            </span>
            <button
              type="button"
              className="rf-nav-burger"
              aria-label={mobile ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobile}
              onClick={() => setMobile(!mobile)}
            >
              <span data-ouvert={mobile} />
              <span data-ouvert={mobile} />
            </button>
          </div>
        </div>
      </div>

      {/* ── La planche déroulante ─────────────────────────────────────────── */}
      {groupe && vedette && (
        <div className="rf-megamenu" onMouseLeave={fermer}>
          <div className="rf-megamenu-planche">
            <div className="rf-megamenu-liens">
              {groupe.links.map((l) => (
                <Link key={l.href} href={l.href} onClick={fermer}>
                  {l.label}
                </Link>
              ))}
            </div>

            <Link href={vedette.href} className="rf-megamenu-vedette" onClick={fermer}>
              <span className="rf-megamenu-image">
                <img src={vedette.img} alt={vedette.alt} width={1280} height={880} />
              </span>
              <span className="rf-megamenu-titre">{vedette.titre}</span>
              <span className="rf-megamenu-ligne">{vedette.ligne}</span>
            </Link>
          </div>
        </div>
      )}

      {menu && <span className="rf-nav-voile" aria-hidden onMouseEnter={fermer} />}

      {/* ── Mobile ───────────────────────────────────────────────────────── */}
      {mobile && (
        <div className="rf-nav-mobile">
          <div className="rf-wrap py-6 flex flex-col gap-2">
            {NAV_GROUPS.map((g) => (
              <details key={g.label} className="rf-nav-groupe">
                <summary>
                  {g.label}
                  <span aria-hidden>+</span>
                </summary>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={() => setMobile(false)}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            {NAV_STANDALONE.map((l) => (
              <Link key={l.href} href={l.href} className="rf-nav-groupe-seul" onClick={() => setMobile(false)}>
                {l.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/contact"
                className="rf-btn rf-btn--plein justify-center"
                onClick={() => setMobile(false)}
              >
                Décrire mon projet
              </Link>
              <a href="tel:+33667117975" className="rf-btn rf-btn--contour justify-center">
                06 67 11 79 75
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
