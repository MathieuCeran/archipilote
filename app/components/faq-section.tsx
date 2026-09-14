/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FAQ } from "../data";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/** FAQ accordéon — icône + rotative, ouverture fluide height auto. */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute left-1/2 -translate-x-1/2 -top-6 w-[28rem] h-40 hidden md:block" />
      <div className="container-site grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-start">
        <div className="flex flex-col gap-5 lg:sticky lg:top-32">
          <Reveal variant="fade-blur">
            <span className="eyebrow">Questions fréquentes</span>
          </Reveal>
          <WordReveal
            as="h2"
            segments={[
              { text: "Tout ce que vous vous demandez," },
              { text: "sans détour.", serif: true, gradient: true },
            ]}
            className="display text-[clamp(2rem,4.4vw,3.4rem)] text-ivoire text-balance"
          />
          <Reveal variant="slide-up" delay={0.15}>
            <p className="lead">
              Une autre question&nbsp;? Le plus simple reste d&apos;en parler de vive voix —
              la visite technique se fait sans engagement.
            </p>
          </Reveal>
          <Reveal variant="slide-up" delay={0.25}>
            <Link href="/contact" className="btn btn-ghost w-fit">
              Demander une visite
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} variant="slide-up" delay={i * 0.06}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                    aria-expanded={open}
                  >
                    <span
                      className={`flex-1 min-w-0 t-base md:t-haut font-medium transition-colors duration-300 ${
                        open ? "text-orange" : "text-ivoire group-hover:text-orange/80"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`relative size-9 border shrink-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "border-orange bg-orange/10 rotate-45" : "border-line-strong group-hover:border-orange/60"
                      }`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={open ? "text-orange" : "text-ivoire"}>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {/* Réponse toujours présente dans le HTML initial (recette V3 :
                      contenu visible en HTML, rien d'essentiel caché derrière un clic) —
                      l'animation ne fait que déplier/replier visuellement. */}
                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-14 text-muted leading-relaxed t-sec">
                      {item.reponse}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
