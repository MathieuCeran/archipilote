/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { PHOTOS } from "../lib-photos";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/** Liste éditoriale des services — hover = image sticky qui change, ligne accent qui se trace. */
export function ServicesList() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-surface/40 border-y border-line">
      <div aria-hidden className="herringbone-ghost absolute left-[-4rem] bottom-[-3rem] w-72 h-72 hidden md:block" />
      <div className="container-site relative flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-5 max-w-2xl">
            <Reveal variant="fade-blur"><span className="eyebrow">Nos services</span></Reveal>
            <WordReveal as="h2" segments={[{ text: "Vos travaux de rénovation," }, { text: "un seul pilote.", serif: true, gradient: true }]} className="display text-[clamp(2.2rem,5.2vw,4.1rem)] text-ivoire text-balance" />
          </div>
          <Reveal variant="slide-up" delay={0.2}>
            <Link href="/services" className="btn btn-ghost shrink-0">Le détail des services <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} variant="slide-up" delay={i * 0.06}>
                <Link
                  href="/services"
                  className="group relative grid grid-cols-[3.2rem_1fr_auto] items-center gap-4 py-5 border-t border-line last:border-b"
                  data-active={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className={`font-mono t-micro transition-colors ${active === i ? "text-orange" : "text-muted"}`}>0{i + 1}</span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className={`display text-[clamp(1.3rem,2.6vw,2rem)] leading-none transition-colors duration-300 ${active === i ? "text-ivoire" : "text-ivoire/65 group-hover:text-ivoire"}`}>{service.titre}</span>
                    <span className="text-muted t-petit truncate">{service.accroche}</span>
                    {/* Le panneau photo qui porte ce texte est masqué sous lg — on le rend
                        ici pour que le mobile ait le même contenu que le desktop (V3). */}
                    <span className="text-muted t-mini leading-snug lg:hidden">{service.texte}</span>
                  </div>
                  <span className={`size-9 border flex items-center justify-center transition-all duration-500 ${active === i ? "border-orange bg-orange text-white" : "border-line-strong text-muted"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal variant="scale" delay={0.15} className="lg:sticky lg:top-28 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden card-e">
              <AnimatePresence mode="popLayout">
                <motion.img key={s.slug} src={PHOTOS[s.photo as keyof typeof PHOTOS]} alt={s.titre} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 size-full object-cover" />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181a]/90 via-[#14181a]/15 to-transparent" />
              <div className="herringbone-divider absolute top-0 inset-x-0 opacity-60" />
              <div className="absolute bottom-0 inset-x-0 p-7">
                <AnimatePresence mode="wait">
                  <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col gap-2">
                    <span className="serif-accent t-haut text-ambre">{s.accroche}</span>
                    <p className="text-white/85 t-sec leading-relaxed">{s.texte}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
