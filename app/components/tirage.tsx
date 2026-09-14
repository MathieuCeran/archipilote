/* ============================================================================
   LE CALQUE DE TIRAGE — une élévation haussmannienne au trait.

   Pourquoi ce calque existe.

   Le fond des sections portait jusqu’ici le monogramme, agrandi et
   désaturé. C’est un filigrane de papeterie : il signe, il ne dit rien. Une
   maison qui lit un bâtiment avant de le chiffrer a mieux à mettre derrière
   son texte — le dessin lui-même.

   Ce qui est tracé ici n’est donc pas un ornement mais un vrai tirage : une
   élévation de trois travées sur quatre niveaux, avec ses conventions de
   dessin — ligne de terre hachurée, axes de travée en trait d’axe, cotation
   verticale à gauche avec ses repères de niveau, corniche, balcon filant au
   second, combles à la Mansart et lucarnes. Ce sont exactement les éléments
   dont parle la page : corniche conservée, garde-corps soumis à l’ABF, mur de
   refend, surélévation.

   Tout est vectoriel et tient dans le document : aucune image à charger,
   aucune requête, et le trait prend la couleur du registre par `currentColor`
   — graphite sur le papier, craie sur le dossier.
   ============================================================================ */

/* Axes des trois travées. */
const TRAVEES = [250, 550, 850];

/* Niveaux, du haut vers le bas : corniche, R+3, R+2, R+1, rez-de-chaussée,
   ligne de terre. Les baies de chaque étage sont posées relativement. */
const NIVEAUX = [
  { y: 270, nom: "R+3" },
  { y: 390, nom: "R+2" },
  { y: 520, nom: "R+1" },
  { y: 660, nom: "RDC" },
];

const SOL = 820;

/* Une baie : jambages, linteau, appui, et la croisée à deux vantaux. */
function Baie({ x, haut, bas, large = 130 }: { x: number; haut: number; bas: number; large?: number }) {
  const g = x - large / 2;
  const d = x + large / 2;
  return (
    <g>
      <rect x={g} y={haut} width={large} height={bas - haut} />
      {/* Linteau et appui, plus épais que la croisée : c’est la maçonnerie. */}
      <path d={`M${g - 10} ${haut} H${d + 10}`} strokeWidth="1.6" />
      <path d={`M${g - 12} ${bas} H${d + 12}`} strokeWidth="1.6" />
      {/* Croisée : meneau central et petits-bois. */}
      <path d={`M${x} ${haut + 6} V${bas - 6}`} strokeWidth="0.7" />
      <path d={`M${g + 6} ${haut + (bas - haut) * 0.42} H${d - 6}`} strokeWidth="0.7" />
    </g>
  );
}

/* Garde-corps : barreaudage vertical entre deux lisses. */
function GardeCorps({ x1, x2, y, hauteur = 40, pas = 15 }: { x1: number; x2: number; y: number; hauteur?: number; pas?: number }) {
  const barreaux: number[] = [];
  for (let x = x1 + pas; x < x2; x += pas) barreaux.push(x);
  return (
    <g>
      <path d={`M${x1} ${y} H${x2}`} strokeWidth="1.4" />
      <path d={`M${x1} ${y - hauteur} H${x2}`} strokeWidth="1.4" />
      <path d={`M${x1} ${y - hauteur * 0.45} H${x2}`} strokeWidth="0.7" />
      {barreaux.map((x) => (
        <path key={x} d={`M${x} ${y} V${y - hauteur}`} strokeWidth="0.6" />
      ))}
    </g>
  );
}

export function Tirage({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`rf-tirage ${className}`}
      viewBox="0 0 1200 900"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      focusable="false"
    >
      {/* ── Axes de travée, en trait d’axe (mixte fin) ──────────────────── */}
      {TRAVEES.map((x) => (
        <path key={`axe-${x}`} d={`M${x} 96 V${SOL + 34}`} strokeWidth="0.6" strokeDasharray="18 5 3 5" opacity="0.55" />
      ))}

      {/* ── Enveloppe : façade, corniche, combles ───────────────────────── */}
      <path d={`M100 ${SOL} V250 M1000 ${SOL} V250`} strokeWidth="1.8" />
      {/* Corniche, en saillie de part et d’autre du nu de façade. */}
      <path d="M84 250 H1016 M84 250 V272 H1016 V250" strokeWidth="1.8" />
      <path d="M92 262 H1008" strokeWidth="0.7" />
      {/* Combles à la Mansart : brisis, terrasson, faîtage. */}
      <path d="M100 250 L168 152 H1032 L1000 250" strokeWidth="1.6" />
      <path d="M168 152 L232 118 H968 L1032 152" strokeWidth="1.4" />

      {/* Lucarnes dans le brisis. */}
      {TRAVEES.map((x) => (
        <g key={`lucarne-${x}`}>
          <rect x={x - 40} y={168} width={80} height={70} strokeWidth="1.2" />
          <path d={`M${x - 50} 168 L${x} 138 L${x + 50} 168`} strokeWidth="1.2" />
          <path d={`M${x} 174 V232`} strokeWidth="0.6" />
        </g>
      ))}

      {/* ── Planchers ───────────────────────────────────────────────────── */}
      {NIVEAUX.map((n) => (
        <path key={`plancher-${n.y}`} d={`M100 ${n.y} H1000`} strokeWidth="1.2" />
      ))}

      {/* ── Bandeaux filants entre les étages nobles ────────────────────── */}
      <path d="M100 382 H1000 M100 512 H1000" strokeWidth="0.7" opacity="0.7" />

      {/* ── Baies ──────────────────────────────────────────────────────── */}
      {TRAVEES.map((x) => (
        <g key={`baies-${x}`}>
          {/* R+3, sous la corniche : baies plus basses, c’est l’usage. */}
          <Baie x={x} haut={296} bas={376} large={118} />
          {/* R+2, étage noble : hautes croisées et balcon filant. */}
          <Baie x={x} haut={412} bas={506} large={132} />
          {/* R+1 */}
          <Baie x={x} haut={546} bas={646} large={132} />
        </g>
      ))}

      {/* Balcon filant au second — la ligne qui tient toute la façade. */}
      <path d="M76 520 H1024" strokeWidth="1.6" />
      <GardeCorps x1={80} x2={1020} y={514} hauteur={42} pas={16} />

      {/* Balcons individuels au dernier étage. */}
      {TRAVEES.map((x) => (
        <GardeCorps key={`gc-${x}`} x1={x - 82} x2={x + 82} y={390} hauteur={36} pas={15} />
      ))}

      {/* ── Rez-de-chaussée : porte cochère au centre, boutiques aux flancs ── */}
      <g>
        <path d="M486 815 V742 A64 64 0 0 1 614 742 V815" strokeWidth="1.6" />
        <path d="M550 678 V815" strokeWidth="0.6" />
        <path d="M486 742 H614" strokeWidth="0.7" opacity="0.7" />
        <Baie x={250} haut={694} bas={812} large={150} />
        <Baie x={850} haut={694} bas={812} large={150} />
      </g>

      {/* ── Ligne de terre et hachures de sol ───────────────────────────── */}
      <path d={`M40 ${SOL} H1160`} strokeWidth="2" />
      {Array.from({ length: 38 }, (_, i) => 44 + i * 30).map((x) => (
        <path key={`hachure-${x}`} d={`M${x} ${SOL + 22} L${x + 18} ${SOL}`} strokeWidth="0.7" opacity="0.65" />
      ))}

      {/* ── Cotation verticale des niveaux, à gauche ────────────────────── */}
      <g strokeWidth="0.8">
        <path d={`M52 152 V${SOL}`} />
        {[152, 250, ...NIVEAUX.map((n) => n.y), SOL].map((y) => (
          <g key={`cote-${y}`}>
            <path d={`M44 ${y} H${y === SOL ? 1160 : 108}`} opacity={y === SOL ? 0 : 0.45} strokeDasharray="4 6" />
            <path d={`M44 ${y} H60`} />
            {/* Repère de niveau : le petit triangle des plans de coupe. */}
            <path d={`M52 ${y} l-7 -11 h14 z`} strokeWidth="0.8" />
          </g>
        ))}
      </g>

      {/* ── Cotation horizontale des travées, sous la ligne de terre ────── */}
      <g strokeWidth="0.8" opacity="0.75">
        <path d={`M100 ${SOL + 58} H1000`} />
        {[100, 400, 700, 1000].map((x) => (
          <g key={`cotev-${x}`}>
            <path d={`M${x} ${SOL + 46} V${SOL + 70}`} />
            <path d={`M${x - 9} ${SOL + 49} L${x + 9} ${SOL + 67}`} strokeWidth="1.2" />
          </g>
        ))}
      </g>
    </svg>
  );
}
