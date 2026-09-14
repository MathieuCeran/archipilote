"use client";

import { SERVICES } from "../data";
import { PHOTOS } from "../lib-photos";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/** Bento des 6 services — chaque carte porte sa marque en filigrane. */
export function ServicesGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-site flex flex-col gap-14 md:gap-20">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur"><span className="eyebrow">Le détail des services</span></Reveal>
          <WordReveal as="h2" segments={[{ text: "Six métiers," }, { text: "un seul pilote.", serif: true, gradient: true }]} className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire text-balance max-w-3xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((m, i) => (
            <Reveal key={m.slug} variant="slide-up" delay={i * 0.08} className="h-full">
              <article id={m.slug} className="group relative card-e rounded-none overflow-hidden h-[22rem] md:h-[25rem] flex flex-col justify-end scroll-mt-32">
                <img src={PHOTOS[m.photo as keyof typeof PHOTOS]} alt={m.titre} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />
                <span aria-hidden className="absolute top-5 right-6 font-serif text-5xl md:text-6xl leading-none text-white/25 group-hover:text-orange/70 transition-colors duration-500" style={{ fontFamily: "var(--font-serif)" }}>{m.marque}</span>
                <div className="relative p-7 md:p-8 flex flex-col gap-2.5">
                  <span className="serif-accent t-haut text-ambre/95">{m.accroche}</span>
                  <h3 className="display t-titre text-white normal-case">{m.titre}</h3>
                  <p className="text-white/70 t-sec leading-relaxed max-w-md">{m.texte}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
