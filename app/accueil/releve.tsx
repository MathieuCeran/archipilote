"use client";

import { useState } from "react";
import Link from "next/link";

/* ============================================================================
   LE RELEVÉ — la photographie devient la démonstration.

   Ce qu’il y avait ici : une bande de 3:1 posée sous le texte, sa légende
   dessous, et rien à faire avec. Deux défauts, dont un grave.

   LE DÉFAUT GRAVE. Le recadrage en 3:1 coupait la rosace de plafond ET la
   cheminée en marbre — c’est-à-dire deux des trois éléments que la légende
   nommait. Elle annonçait « corniche, rosace et cheminée sont relevées » sous
   une image où l’on ne voyait ni l’une ni l’autre. L’image est désormais
   montrée ENTIÈRE, dans son rapport natif de 1280 × 896, et le calque
   d’annotation partage exactement ce rapport : aucun recadrage, donc aucun
   repère qui puisse glisser.

   L’AUTRE DÉFAUT. La légende disait ce que l’image montrait, sans jamais
   désigner où. Les trois éléments portent maintenant un repère sur la
   photographie, et le relevé les liste à côté avec ce qu’on en fait. Désigner
   une ligne allume son repère, et inversement : c’est le geste d’un relevé de
   chantier, pas un ornement.

   Rien n’est inventé : les trois verdicts sont repris mot pour mot du corps de
   la section et de la légende qu’ils remplacent.
   ============================================================================ */

type Repere = {
  num: string;
  x: number;
  y: number;
  element: string;
  verdict: string;
};

/* ⚠️ COORDONNÉES RELEVÉES SUR L’IMAGE, PAS ESTIMÉES.

   Le système de coordonnées est celui du fichier : 1280 × 896. Comme le cadre
   porte ce même rapport, l’image n’est pas recadrée et un point du dessin
   tombe exactement sur le même point de la photographie, à toutes les tailles
   d’écran.

   Méthode de contrôle, celle qui a fini par marcher sur le héros : afficher
   une grille de points numérotés aux coordonnées du dessin, capturer, et lire
   quel point tombe sur quoi. Jamais à l’estime — trois tentatives avaient raté
   sur le héros pour l’avoir fait autrement. */
const REPERES: Repere[] = [
  /* Relevées sur la grille, pas estimées — la première pose tombait trente
     pixels à gauche du centre de la rosace et au-dessus de la frise. */
  { num: "01", x: 955, y: 112, element: "Rosace de plafond", verdict: "Relevée, protégée, reprise" },
  { num: "02", x: 480, y: 342, element: "Corniche et panneautage", verdict: "Dégagés, raccordés ou remoulés" },
  { num: "03", x: 640, y: 752, element: "Cheminée en marbre", verdict: "Jamais démontée sans relevé" },
];

export function Releve({ chute }: { chute: string }) {
  const [actif, setActif] = useState<string | null>(null);

  return (
    <div className="rf-releve">
      <figure className="rf-releve-fig">
        <div className="rf-releve-cadre">
          <img
            src="/photos/maquette/moulures-corniches-pose.jpg"
            alt="Pièce d’un appartement ancien avant travaux : corniche, rosace de plafond et cheminée en marbre conservées, échafaudage roulant en place"
            loading="lazy"
            width={1280}
            height={896}
          />

          {/* Calque décoratif : tout ce qu’il désigne est écrit en clair dans
              le relevé qui l’accompagne. */}
          <svg
            className="rf-releve-calque"
            viewBox="0 0 1280 896"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
            focusable="false"
          >
            {REPERES.map((r) => (
              <g key={r.num} className="rf-releve-repere" data-actif={actif === r.num}>
                {/* Le halo, qui ne se voit qu’une fois le repère désigné. */}
                <circle className="rf-releve-halo" cx={r.x} cy={r.y} r="46" />
                <circle className="rf-releve-disque" cx={r.x} cy={r.y} r="26" />
                <text x={r.x} y={r.y} textAnchor="middle" dominantBaseline="central">
                  {r.num}
                </text>
              </g>
            ))}
          </svg>

          <span className="rf-ruban" aria-hidden>
            Relevé avant dépose
          </span>
        </div>
      </figure>

      <div className="rf-releve-liste">
        <p className="rf-releve-titre">L’inventaire, avant la première benne</p>
        <ul>
          {REPERES.map((r) => (
            <li key={r.num}>
              <button
                type="button"
                data-actif={actif === r.num}
                onMouseEnter={() => setActif(r.num)}
                onMouseLeave={() => setActif(null)}
                onFocus={() => setActif(r.num)}
                onBlur={() => setActif(null)}
                onClick={() => setActif(actif === r.num ? null : r.num)}
              >
                <span className="rf-releve-num">{r.num}</span>
                <span className="rf-releve-element">{r.element}</span>
                <span className="rf-releve-verdict">{r.verdict}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* La chute de la section, descendue du corps de texte : elle conclut
            ce que l’inventaire vient de montrer, et elle comble le blanc qui
            traînait à droite de la photographie. */}
        <p className="rf-releve-chute">{chute}</p>

        {/* Le renvoi ferme le bloc. Il était en fin de paragraphe, dans le
            corps du texte : ici, il tombe là où le visiteur se pose la
            question. */}
        <p className="rf-releve-suite">
          <Link href="/savoir-faire-ancien" className="rf-lien">
            Ce qui se conserve dans un appartement ancien
          </Link>
        </p>
      </div>
    </div>
  );
}
