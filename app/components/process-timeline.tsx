/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PROCESS } from "../data";
import { PHOTOS, srcSetOf } from "../lib-photos";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

const PHOTOS_STEP = [PHOTOS.planArchitecte, PHOTOS.chantierEchelle, PHOTOS.devisDetail, PHOTOS.chOssatureCloisonsHuisserieMetal, PHOTOS.sejourApres];

/** Timeline scrubbée — ligne centrale au scroll, zigzag, 5 étapes réelles du process. */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute right-[-3rem] top-10 w-64 h-64 hidden md:block" />
      <div className="container-site flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur"><span className="eyebrow">Comment ça se passe</span></Reveal>
          <WordReveal as="h2" segments={[{ text: "Du premier appel" }, { text: "à la réception du chantier.", serif: true, gradient: true }]} className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire text-balance max-w-4xl" />
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          <motion.div style={{ scaleY }} className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-orange origin-top md:-translate-x-1/2" />

          <div className="flex flex-col gap-14 md:gap-8">
            {PROCESS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div key={step.numero} className="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[1fr_4rem_1fr] items-center gap-4 md:gap-0">
                  <div className="md:col-start-2 md:row-start-1 flex justify-start md:justify-center">
                    <Reveal variant="scale">
                      <span className="relative size-10 bg-carbone border-2 border-orange flex items-center justify-center font-mono t-micro text-orange font-bold shadow-[0_0_0_6px_rgba(45,92,156,0.12)]">{step.numero}</span>
                    </Reveal>
                  </div>
                  <Reveal variant="slide-up" delay={0.1} className={`md:row-start-1 ${left ? "md:col-start-1 md:pr-14" : "md:col-start-3 md:pl-14"}`}>
                    <article className={`group card-e rounded-none overflow-hidden flex ${left ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse`}>
                      <div className="relative md:w-[42%] aspect-[16/10] md:aspect-auto md:min-h-[13rem] overflow-hidden shrink-0">
                        <img src={PHOTOS_STEP[i]} srcSet={srcSetOf(PHOTOS_STEP[i])} sizes="(min-width: 768px) 40vw, 100vw" alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" loading="lazy" />
                        <span className="absolute top-3 left-3 display text-4xl italic text-white/80 leading-none [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">{step.numero}</span>
                      </div>
                      <div className="p-6 md:p-7 flex flex-col gap-2 flex-1">
                        <span className="serif-accent t-base text-orange">{step.accroche}</span>
                        <h3 className="display t-titre text-ivoire leading-tight">{step.titre}</h3>
                        <p className="text-muted t-sec leading-relaxed">{step.texte}</p>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
