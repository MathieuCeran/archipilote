"use client";

import { useRef, useState } from "react";

/* ============================================================================
   LE PARCOURS — six étapes sur un seul rail.

   Ce qu’il y avait : six colonnes côte à côte, chacune avec son propre petit
   réglet gradué, son numéro, son titre et son paragraphe. Trois défauts, dont
   un qui décide de tout.

   LE DÉFAUT QUI DÉCIDE. Six colonnes dans la largeur de la planche font deux
   cent quinze pixels chacune, soit une justification de trente signes. Aucun
   texte ne se lit à trente signes : les paragraphes tombaient en cinq à huit
   lignes, de longueurs toutes différentes, et le bas du bloc partait en
   dents de scie. Ce n’était pas une question de goût, c’était une mesure
   typographique fausse.

   LE SECOND. Le réglet était répété six fois, une fois par colonne. Or ce
   qu’on veut montrer est justement le contraire de six objets séparés : une
   séquence, où chacune conditionne la suivante. Un seul rail continu le dit ;
   six réglets côte à côte disent l’inverse.

   LE TROISIÈME. Le visiteur ne pouvait pas embrasser la méthode d’un coup
   d’œil — il fallait lire six paragraphes pour connaître les six étapes.

   Ce qui remplace : UN rail, six jalons, six titres — la méthode entière se
   lit en une ligne. Le détail de l’étape désignée s’ouvre dans un panneau
   unique, à une justification enfin lisible. Le rail se remplit jusqu’au
   jalon courant : la progression se voit.

   Les six textes restent dans le document, tous : ils sont empilés dans la
   même case de grille et se relaient par l’opacité. Rien n’est retiré du HTML,
   la hauteur du panneau est celle du plus long, et rien ne saute d’une étape
   à l’autre.
   ============================================================================ */

export function Parcours({ etapes }: { etapes: [string, string][] }) {
  const [actif, setActif] = useState(0);
  const onglets = useRef<(HTMLButtonElement | null)[]>([]);

  const auClavier = (e: React.KeyboardEvent, i: number) => {
    const dernier = etapes.length - 1;
    const cible =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? i === dernier
          ? 0
          : i + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? i === 0
            ? dernier
            : i - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? dernier
              : null;
    if (cible === null) return;
    e.preventDefault();
    setActif(cible);
    onglets.current[cible]?.focus();
  };

  return (
    <div className="rf-parcours">
      <ol className="rf-parcours-rail" role="tablist" aria-label="Les six étapes du parcours">
        {etapes.map(([titre], i) => (
          <li key={titre}>
            <button
              ref={(el) => {
                onglets.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`etape-${i}`}
              aria-selected={i === actif}
              aria-controls={`etape-panneau-${i}`}
              tabIndex={i === actif ? 0 : -1}
              data-actif={i === actif}
              data-passe={i <= actif}
              onMouseEnter={() => setActif(i)}
              onFocus={() => setActif(i)}
              onClick={() => setActif(i)}
              onKeyDown={(e) => auClavier(e, i)}
            >
              <span className="rf-parcours-jalon" aria-hidden />
              <span className="rf-parcours-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="rf-parcours-titre">{titre}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="rf-parcours-panneaux">
        {etapes.map(([titre, texte], i) => (
          <div
            key={titre}
            id={`etape-panneau-${i}`}
            role="tabpanel"
            aria-labelledby={`etape-${i}`}
            data-actif={i === actif}
            /* Les panneaux inactifs restent dans le document — donc lisibles
               par les moteurs — mais sortent du parcours de tabulation et de
               l’arbre d’accessibilité. React 19 accepte `inert` en booléen,
               sans transtypage. */
            inert={i !== actif}
          >
            <p>{texte}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
