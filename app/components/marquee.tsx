/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

/** Bande défilante infinie — contenu doublé pour la boucle CSS. */
export function Marquee({ items, speed = 40, className = "" }: MarqueeProps) {
  const content = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="marquee-track items-center gap-14 md:gap-20"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {content.map((item, i) => (
          <div key={i} className="flex items-center gap-14 md:gap-20 shrink-0">
            <span className="display t-titre md:t-titre text-ivoire/25 whitespace-nowrap mq-mention">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-orange/50 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
