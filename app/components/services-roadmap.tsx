"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";

const SERVICES_LINKS: Record<string, string> = {
  "second-oeuvre": "/electricite-plomberie-renovation",
  "cuisine-sur-mesure": "/renovation-cuisine-maison",
  "salle-de-bain": "/renovation-salle-de-bain-maison",
  "beton-cire": "/sols-finitions-renovation",
  "isolation-dpe": "/renovation-energetique",
  "gros-oeuvre": "/renovation-complete",
};
import { PHOTOS } from "../lib-photos";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/**
 * Roadmap animée des 6 services — ligne centrale scrubbée au scroll,
 * chaque étape déplie ses postes concrets (pas juste un titre + une ligne).
 */
export function ServicesRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [openPhoto, setOpenPhoto] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute left-[-4rem] top-1/3 w-80 h-80 hidden lg:block" />
      <div className="container-site flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur"><span className="eyebrow">Ce qu'on peut faire pour vous</span></Reveal>
          <WordReveal
            as="h2"
            segments={[{ text: "Une feuille de route," }, { text: "poste par poste.", serif: true, gradient: true }]}
            className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire text-balance max-w-3xl"
          />
          <Reveal variant="slide-up" delay={0.15}>
            <p className="lead max-w-2xl">Six domaines, un seul chantier. Chaque ligne ci-dessous peut être combinée dans votre projet — c'est vous qui composez, on pilote.</p>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[1.15rem] md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          <motion.div style={{ scaleY }} className="absolute left-[1.15rem] md:left-1/2 top-0 bottom-0 w-px bg-orange origin-top md:-translate-x-1/2" />

          <div className="flex flex-col gap-10 md:gap-6">
            {SERVICES.map((s, i) => {
              const left = i % 2 === 0;
              const open = openPhoto === s.slug;
              return (
                <div key={s.slug} className="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[1fr_4rem_1fr] gap-4 md:gap-0">
                  <div className="md:col-start-2 md:row-start-1 flex md:justify-center pt-1">
                    <Reveal variant="scale">
                      <span className="relative size-9 bg-carbone border-2 border-orange flex items-center justify-center font-serif italic t-sec text-orange shadow-[0_0_0_6px_rgba(45,92,156,0.12)]">
                        {s.marque}
                      </span>
                    </Reveal>
                  </div>

                  <Reveal variant="slide-up" delay={0.08} className={`md:row-start-1 ${left ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-3 md:pl-14"}`}>
                    <button
                      onClick={() => setOpenPhoto(open ? null : s.slug)}
                      className={`group w-full text-left ${left ? "md:text-right" : ""} card-e rounded-none p-5 md:p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 cursor-pointer ${open ? "border-orange/60 bg-orange/[0.04]" : ""}`}
                    >
                      <div className={`flex items-start justify-between gap-4 ${left ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex flex-col gap-1">
                          <span className="serif-accent t-sec text-orange">{s.accroche}</span>
                          <h3 className="display t-fort text-ivoire leading-tight">{s.titre}</h3>
                        </div>
                        <span className={`size-8 border shrink-0 flex items-center justify-center transition-all duration-400 ${open ? "border-orange bg-orange text-white rotate-45" : "border-line-strong text-muted"}`}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                        </span>
                      </div>
                      <p className="text-muted t-petit leading-relaxed mt-2">{s.texte}</p>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-line ${left ? "md:text-right" : ""}`}>
                              {s.details.map((d) => (
                                <div key={d} className={`flex items-start gap-2 t-petit text-ivoire/85 ${left ? "md:flex-row-reverse md:text-right" : ""}`}>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                                  {d}
                                </div>
                              ))}
                            </div>
                            <div className="relative mt-4 rounded-none overflow-hidden aspect-[16/8]">
                              <img src={PHOTOS[s.photo as keyof typeof PHOTOS]} alt={s.titre} className="absolute inset-0 size-full object-cover" loading="lazy" />
                            </div>
                            {SERVICES_LINKS[s.slug] && (
                              <Link href={SERVICES_LINKS[s.slug]} className={`inline-flex items-center gap-1.5 text-orange t-petit font-medium mt-3 hover:underline ${left ? "md:justify-end md:w-full" : ""}`}>
                                La page dédiée {s.titre.toLowerCase()}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </Link>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
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
