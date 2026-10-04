"use client";

import { useEffect, useState } from "react";
import type { Entree } from "../article-html";

/* Le suivi de lecture : la part de l'article déjà lue (0 → 1) et la section
   en cours. Mesuré sur l'élément `#note-corps`, pas sur la page — le pied de
   page et les suggestions ne comptent pas dans la lecture. */
function useSuivi(ids: string[]) {
  // Clé stable : le tableau est recréé à chaque rendu, sa liste d'ids non.
  const cle = ids.join("|");
  const [progres, setProgres] = useState(0);
  const [actif, setActif] = useState<string | null>(null);

  useEffect(() => {
    const corps = document.getElementById("note-corps");
    if (!corps) return;
    let image = 0;
    const mesurer = () => {
      image = 0;
      const r = corps.getBoundingClientRect();
      const parcours = r.height - window.innerHeight * 0.6;
      const lu = Math.min(1, Math.max(0, (window.innerHeight * 0.25 - r.top) / Math.max(1, parcours)));
      setProgres(lu);
      // Section en cours : le dernier h2 passé sous le quart haut de l'écran.
      let courant: string | null = null;
      for (const id of cle ? cle.split("|") : []) {
        const h = document.getElementById(id);
        if (h && h.getBoundingClientRect().top < window.innerHeight * 0.3) courant = id;
      }
      setActif(courant);
    };
    const planifier = () => {
      if (!image) image = requestAnimationFrame(mesurer);
    };
    mesurer();
    window.addEventListener("scroll", planifier, { passive: true });
    window.addEventListener("resize", planifier);
    return () => {
      window.removeEventListener("scroll", planifier);
      window.removeEventListener("resize", planifier);
      if (image) cancelAnimationFrame(image);
    };
  }, [cle]);

  return { progres, actif };
}

/** Sommaire du rail : l'entrée en cours est marquée, le filet de gauche se remplit. */
export function SommaireSuivi({ sommaire }: { sommaire: Entree[] }) {
  const ids = sommaire.map((e) => e.id);
  const { progres, actif } = useSuivi(ids);
  return (
    <nav className="note-sommaire" aria-label="Sommaire de l’article">
      <div className="note-sommaire-jauge" aria-hidden>
        <span style={{ transform: `scaleY(${progres})` }} />
      </div>
      <ol>
        {sommaire.map((e) => (
          <li key={e.id}>
            <a href={`#${e.id}`} aria-current={actif === e.id ? "location" : undefined}>
              {e.texte}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Sous 1100 px, le rail disparaît : une barre fine en haut d'écran prend le relais. */
export function BarreLecture() {
  const { progres } = useSuivi([]);
  return (
    <div className="note-barre" aria-hidden>
      <span style={{ transform: `scaleX(${progres})` }} />
    </div>
  );
}
