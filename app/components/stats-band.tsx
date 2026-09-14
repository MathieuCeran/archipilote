/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { STATS } from "../data";
import { Counter } from "./counter";
import { Reveal } from "./reveal";

/** Bande de chiffres clés — counters animés au scroll. */
export function StatsBand() {
  return (
    <section className="relative py-16 md:py-20 border-y border-line bg-surface/40 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute -right-10 -top-10 w-56 h-56 hidden md:block" />
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} variant="slide-up" delay={i * 0.1} className="relative">
              <div className="flex flex-col gap-2 lg:px-6 lg:border-l border-line first:border-l-0">
                <span className="display text-[clamp(2.6rem,5.5vw,4.3rem)] leading-none text-gradient tabular-nums">
                  <Counter value={stat.valeur} prefix={stat.prefixe} suffix={stat.suffixe} />
                </span>
                <span className="text-ivoire t-sec font-medium">{stat.label}</span>
                <span className="text-muted t-petit leading-snug">{stat.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
