/* ============================================================================
   LES PICTOGRAMMES — dessinés de la même main que le calque de tirage.

   Trois familles de lots, trois dessins. Ce ne sont pas des icônes de
   bibliothèque : chacun est une petite coupe technique, tracée avec les
   mêmes conventions que l’élévation du fond (filet, bouts carrés, hachures
   de terre). Le rapprochement se fait tout seul à l’écran, et aucun d’eux ne
   pourrait se retrouver sur un autre site.

   Ce qui est représenté, et pourquoi c’est celui-là :

   · structure — l’ouverture d’un mur porteur : la poutre est posée, les
     deux étais tiennent encore la charge. C’est l’instant exact où le lot
     gros œuvre engage la stabilité de l’ouvrage ;
   · réseaux — une cloison en coupe, avec ce qui la traverse avant qu’elle ne
     se ferme. Le propos de la section est là : on ne referme pas un ouvrage
     avant que ce qui doit passer dedans soit posé ;
   · enveloppe — un mur en coupe à trois couches et la flèche de déperdition
     qui le traverse de l’intérieur vers l’extérieur.
   ============================================================================ */

export type ClePicto =
  | "structure"
  | "reseaux"
  | "enveloppe"
  | "agencement"
  | "menuiseries"
  | "bain"
  | "finitions"
  | "suivi";

function Cadre({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="rf-picto"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* Hachures de la ligne de terre, comme sur la planche. */
function Terre({ y = 58 }: { y?: number }) {
  return (
    <g>
      <path d={`M2 ${y} H62`} strokeWidth="1.5" />
      {[4, 12, 20, 28, 36, 44, 52].map((x) => (
        <path key={x} d={`M${x} ${y + 4} l5 -4`} strokeWidth="0.7" />
      ))}
    </g>
  );
}

const DESSINS: Record<ClePicto, React.ReactNode> = {
  /* Ouverture de mur porteur : poutre posée, étais en place.
     Les hachures de maçonnerie ont sauté — à cette taille elles fermaient le
     dessin au lieu de le qualifier. Restent les quatre traits qui portent le
     propos : la poutre, la trémie, les deux étais. */
  structure: (
    <>
      <Terre />
      <path d="M5 22 V58 M16 22 V58 M48 22 V58 M59 22 V58" />
      {/* Poutre métallique en linteau : deux semelles et l’âme. */}
      <path d="M3 7 H61 M3 19 H61" strokeWidth="2.2" />
      <path d="M3 13 H61" strokeWidth="1" />
      {/* Étais, avec semelle et collier de réglage. */}
      <path d="M25 19 V52 M39 19 V52" strokeWidth="1.8" />
      <path d="M19 52 H31 M33 52 H45" strokeWidth="1.8" />
      <path d="M21 34 H29 M35 34 H43" strokeWidth="1" />
    </>
  ),

  /* Cloison en coupe, et ce qui la traverse avant qu’elle ne se ferme. */
  reseaux: (
    <>
      <Terre />
      <path d="M11 4 V58 M53 4 V58" strokeWidth="2.2" />
      {/* Alimentations : aller et retour, chacune avec son coude. */}
      <path d="M21 58 V32 H33 V12" />
      <path d="M29 58 V40 H41 V12" />
      {/* Évacuation : plus grosse, et elle descend. */}
      <path d="M46 12 V58" strokeWidth="3" />
      {/* Boîtier encastré. */}
      <rect x="16" y="16" width="11" height="10" />
    </>
  ),

  /* Mur en coupe : maçonnerie, isolant, doublage — et la déperdition. */
  enveloppe: (
    <>
      <Terre />
      {/* Maçonnerie, côté extérieur. Les hachures de pierre ont sauté : à
         cette taille elles se refermaient sur le zigzag de l'isolant, et les
         deux se lisaient comme une seule texture. */}
      <path d="M5 6 V58 M16 6 V58" strokeWidth="2.2" />
      {/* Isolant : le zigzag est sa convention de représentation. */}
      <path d="M19 12 L31 20 L19 28 L31 36 L19 44 L31 52" strokeWidth="1.5" />
      {/* Doublage intérieur. */}
      <path d="M34 6 V58" strokeWidth="2.2" />
      {/* Déperdition : de l'intérieur vers l'extérieur, et elle traverse. */}
      <path d="M59 32 H42" strokeWidth="1.8" />
      <path d="M49 24 L41 32 L49 40" strokeWidth="1.8" />
    </>
  ),

  /* Plan de distribution : une vue en plan, avec le battement de porte —
     la convention qui distingue immédiatement un plan d'une élévation. */
  agencement: (
    <>
      <rect x="5" y="8" width="54" height="48" strokeWidth="2.2" />
      <path d="M30 8 V34 M30 44 V56" strokeWidth="1.4" />
      <path d="M30 34 H59" strokeWidth="1.4" />
      {/* Battement de porte. */}
      <path d="M30 44 A10 10 0 0 0 20 34" strokeWidth="1" />
      <path d="M20 34 H30" strokeWidth="1.4" />
      {/* Baies percées dans les murs. */}
      <path d="M5 20 V30" strokeWidth="3" />
      <path d="M42 56 H52" strokeWidth="3" />
    </>
  ),

  /* Croisée à deux vantaux, en élévation, avec son battement. */
  menuiseries: (
    <>
      <Terre />
      <path d="M10 8 H54 V54 H10 Z" strokeWidth="2.2" />
      <path d="M32 8 V54" strokeWidth="1.6" />
      <path d="M10 26 H54" strokeWidth="1" />
      {/* Le battement du vantail gauche : le triangle des menuiseries. */}
      <path d="M10 8 L32 31 L10 54" strokeWidth="0.9" />
      <path d="M29 29 H35" strokeWidth="1.8" />
    </>
  ),

  /* Baignoire en élévation, avec son alimentation et son évacuation. */
  bain: (
    <>
      <Terre />
      <path d="M8 30 H56 V42 A10 10 0 0 1 46 52 H18 A10 10 0 0 1 8 42 Z" strokeWidth="2" />
      <path d="M8 30 V24" strokeWidth="1.4" />
      {/* Mitigeur. */}
      <path d="M16 24 V12 H28" strokeWidth="1.6" />
      <path d="M28 12 V18" strokeWidth="1.6" />
      {/* Évacuation. */}
      <path d="M32 52 V58" strokeWidth="1.6" />
    </>
  ),

  /* Rouleau et sa bande : la finition qui se pose en dernier, sur un support
     déjà prêt — les deux traits fins sous la bande sont les couches
     antérieures. */
  finitions: (
    <>
      <Terre />
      {/* Le manchon, son axe, sa poignée. La première version posait la
         poignée en petit rectangle détaché : à trois centimètres à l'écran,
         elle se lisait comme une seconde forme, pas comme un outil. */}
      <rect x="7" y="9" width="30" height="13" strokeWidth="2" />
      <path d="M37 15.5 H47" strokeWidth="1.6" />
      <path d="M47 15.5 V27" strokeWidth="1.6" />
      <rect x="43" y="27" width="8" height="17" strokeWidth="1.8" />
      {/* La bande qui vient d'être posée, et les couches déjà sèches. */}
      <path d="M7 31 H37" strokeWidth="4" />
      <path d="M7 39 H37 M7 45 H37" strokeWidth="0.8" opacity="0.6" />
    </>
  ),

  /* Trois barres de planning décalées : le phasage, qui est l'objet même du
     suivi. C'est le diagramme du planning des lots, réduit à trois lignes. */
  suivi: (
    <>
      {/* Le diagramme de phases, réduit à trois lots. Les liaisons verticales
         disent ce qui fait le suivi : chaque barre commence où la précédente
         finit. */}
      <path d="M7 8 V56 H58" strokeWidth="1.8" />
      <path d="M13 17 H31" strokeWidth="6" />
      <path d="M25 31 H45" strokeWidth="6" />
      <path d="M39 45 H57" strokeWidth="6" />
      <path d="M31 17 V31 M45 31 V45" strokeWidth="0.9" />
      {/* Graduation de l'axe du temps. */}
      <path d="M18 56 V60 M31 56 V60 M45 56 V60" strokeWidth="0.9" />
    </>
  ),
};

export function Picto({ cle }: { cle: ClePicto }) {
  return <Cadre>{DESSINS[cle]}</Cadre>;
}
