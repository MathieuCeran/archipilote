"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================================
   AVANT / APRÈS — le moment que le visiteur manipule lui-même.

   C’est la seule preuve qu’une entreprise de rénovation puisse donner sans un
   mot : l’état de départ et l’état livré, dans le même cadrage, et la main du
   visiteur entre les deux. Le mouvement ne se déclenche pas tout seul — il
   répond à un geste, ce qui est la seule animation qui se justifie toujours.

   Accessibilité et robustesse : le curseur EST un <input type="range">, posé
   sur toute la surface et rendu transparent. On récupère donc gratuitement le
   glissement à la souris, le tactile, le clic n’importe où sur la bande, les
   flèches du clavier, le focus visible et l’annonce par lecteur d’écran —
   sans une ligne de gestion d’événements maison, et sans rien qui puisse se
   désynchroniser.
   ============================================================================ */

type Props = {
  avant: string;
  apres: string;
  altAvant: string;
  altApres: string;
  legende?: string;
};

export function AvantApres({ avant, apres, altAvant, altApres, legende }: Props) {
  /* On démarre sur l’état AVANT en plein cadre, et le voile s’ouvre une fois
     quand la section apparaît. Ce n’est pas un effet : c’est ce qui apprend au
     visiteur que l’image se manipule. Le défaut connu de tous les comparateurs
     avant/après est que personne ne devine qu’on peut tirer le curseur — un
     seul mouvement, à l’arrivée, le dit sans une ligne de texte.

     Le glissement est porté par une transition CSS, retirée dès qu’elle est
     jouée : sans cela, chaque geste de l’utilisateur traînerait derrière son
     doigt. */
  const [p, setP] = useState(100);
  const [demo, setDemo] = useState(false);
  const cadre = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cadre.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(50);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        setDemo(true);
        window.setTimeout(() => setP(50), 260);
        window.setTimeout(() => setDemo(false), 1900);
      },
      /* `rootMargin` négatif en bas : l’animation ne part pas quand
         l’élément effleure le bas de l’écran — elle attend qu’il soit
         réellement dans la zone de lecture. Sans ça, elle était finie avant
         que le visiteur ait les yeux dessus. */
      { threshold: 0.1, rootMargin: "0px 0px -28% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <figure className="rf-ba" style={{ margin: 0 }}>
      <div className="rf-ba-cadre" ref={cadre} data-demo={demo} style={{ "--p": `${p}%` } as React.CSSProperties}>
        <img src={apres} alt={altApres} loading="lazy" className="rf-ba-img" />
        <img src={avant} alt={altAvant} loading="lazy" className="rf-ba-img rf-ba-avant" />

        <span className="rf-ba-etiquette rf-ba-etiquette--g" aria-hidden>
          Avant
        </span>
        <span className="rf-ba-etiquette rf-ba-etiquette--d" aria-hidden>
          Après
        </span>

        {/* Le trait et sa poignée : purement décoratifs, le curseur réel est
            l’input transparent posé par-dessus. */}
        <span className="rf-ba-trait" aria-hidden>
          <span className="rf-ba-poignee">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M7 1 2 6l5 5M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={p}
          onChange={(e) => setP(Number(e.target.value))}
          className="rf-ba-curseur"
          aria-label="Curseur avant / après : déplacez-le pour révéler l’état livré"
        />
      </div>
      {legende && <figcaption className="rf-ba-legende">{legende}</figcaption>}
    </figure>
  );
}
