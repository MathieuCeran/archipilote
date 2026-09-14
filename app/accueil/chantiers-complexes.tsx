"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/* ============================================================================
   CHANTIERS COMPLEXES — cinq terrains, un seul déplié.

   Les cinq blocs étaient tous ouverts en même temps : deux mille pixels de
   texte que personne ne lit d’affilée, et le schéma repoussé si bas qu’on ne
   le voyait plus. Le visiteur choisit maintenant son terrain, et le dessin
   reste en vis-à-vis.

   Le motif est celui d’un jeu d’onglets, mais il est écrit ici plutôt
   qu’importé d’une bibliothèque : la même mécanique dans notre grammaire
   graphique, sans la mise en forme générique qui viendrait avec.

   Clavier : flèches pour changer d’onglet, Origine et Fin pour aller au
   premier ou au dernier, conformément au motif « tablist ».
   ============================================================================ */

export type Terrain = {
  titre: string;
  court: string;
  texte: string;
  lien?: { href: string; label: string };
};

export function ChantiersComplexes({ terrains }: { terrains: Terrain[] }) {
  const [actif, setActif] = useState(0);
  const onglets = useRef<(HTMLButtonElement | null)[]>([]);

  const auClavier = (e: React.KeyboardEvent, i: number) => {
    const dernier = terrains.length - 1;
    const cible =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? i === dernier
          ? 0
          : i + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
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
    <div className="rf-onglets">
      <div className="rf-onglets-liste" role="tablist" aria-label="Types de chantiers complexes" aria-orientation="vertical">
        {terrains.map((terrain, i) => (
          <button
            key={terrain.titre}
            ref={(el) => {
              onglets.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`onglet-${i}`}
            aria-selected={actif === i}
            aria-controls={`panneau-terrain-${i}`}
            tabIndex={actif === i ? 0 : -1}
            onClick={() => setActif(i)}
            onKeyDown={(e) => auClavier(e, i)}
            className="rf-onglet"
          >
            <span className="rf-onglet-court">{terrain.court}</span>
            <span className="rf-onglet-titre">{terrain.titre}</span>
          </button>
        ))}
      </div>

      {/* ⚠️ LES CINQ PANNEAUX SONT DANS LE DOCUMENT, PAS SEULEMENT L’ACTIF.

         La version précédente n’affichait que le panneau courant. Conséquence
         mesurée en comparant le HTML de cette page à celui de l’ancien
         accueil : quatre titres et TROIS LIENS INTERNES manquaient — périmètre
         ABF, surélévation, extension. Ils existaient à l’écran dès qu’on
         cliquait, mais pas dans la source, donc pas pour un moteur.

         Les cinq sont désormais rendus, empilés dans la même case de grille et
         relayés par l’opacité. La hauteur du bloc est celle du plus long : rien
         ne saute d’un onglet à l’autre, et tout le texte est dans la page. */}
      <div className="rf-onglets-panneaux">
        {terrains.map((terrain, i) => (
          <div
            key={terrain.titre}
            className="rf-onglets-panneau"
            role="tabpanel"
            id={`panneau-terrain-${i}`}
            aria-labelledby={`onglet-${i}`}
            data-actif={actif === i}
            tabIndex={actif === i ? 0 : -1}
            inert={actif !== i}
          >
            <p className="rf-texte">{terrain.texte}</p>
            {terrain.lien && (
              <p className="mt-6">
                <Link href={terrain.lien.href} className="rf-lien" style={{ fontFamily: "var(--f-display)", fontSize: "0.92rem", fontWeight: 500 }}>
                  {terrain.lien.label}
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
