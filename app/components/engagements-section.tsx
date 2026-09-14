/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { ENGAGEMENTS } from "../data";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/**
 * Ce sur quoi la marque s'engage — remplace un ancien carrousel d'avis
 * clients fictifs, incompatible avec une marque qui n'a pas encore de
 * chantier réel (cf. audit T3 §3.1). Trois blocs statiques, vérifiables.
 */
export function EngagementsSection() {
  return (
    <section className="relative py-24 md:py-36 bg-surface/30 border-y border-line overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute bottom-0 right-0 w-56 h-56 hidden md:block" />
      <div className="container-site flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur">
            <span className="eyebrow">Ce sur quoi nous nous engageons</span>
          </Reveal>
          <WordReveal
            as="h2"
            segments={[
              { text: "Une marque neuve," },
              { text: "des règles claires.", serif: true, gradient: true },
            ]}
            className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.titre} variant="slide-up" delay={i * 0.1}>
              <div className="card-e rounded-none p-7 h-full flex flex-col gap-3">
                <span className="font-mono t-micro text-orange">0{i + 1}</span>
                <h3 className="display t-haut text-ivoire leading-tight normal-case">{e.titre}</h3>
                <p className="text-muted t-sec leading-relaxed">{e.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
