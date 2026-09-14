/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Il est conservé au cas où la maquette le réemploierait, mais NE PAS le
   remettre en ligne sans relire son texte : les formulations que le client a fait retirer
   du site y survivaient. Elles ont été corrigées ici le 05/09 pour qu'un futur réemploi ne
   les republie pas par inadvertance. */
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";
import { PHOTOS } from "../lib-photos";

/**
 * Split 45/55 — texte à gauche, collage de 2 photos avec parallax différencié.
 */
export function ConceptSplit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute top-10 right-0 w-72 h-72 hidden md:block" />
      <div ref={ref} className="container-site">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <div className="w-full lg:w-[45%] flex flex-col gap-5">
            <Reveal variant="fade-blur"><span className="eyebrow">La méthode ARCHI PILOTE RÉNOVATION</span></Reveal>
            <WordReveal
              as="h2"
              segments={[{ text: "Un pilote de projet," }, { text: "jamais un standard.", serif: true, gradient: true }]}
              className="display text-[clamp(2.2rem,5vw,4rem)] text-ivoire text-balance"
            />
            <Reveal variant="slide-up" delay={0.15}>
              <p className="lead">
                Une rénovation se joue rarement sur le seul geste technique —
                elle échoue sur l&apos;enchaînement des lots. Chez ARCHI PILOTE RÉNOVATION, un seul pilote
                suit votre chantier du diagnostic à la réception et tient l&apos;interface avec
                les corps de métier. Vous n&apos;appelez jamais trois numéros différents.
              </p>
            </Reveal>
            <Reveal variant="slide-up" delay={0.25}>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Devis des entreprises poste par poste, sous 48 heures ouvrées",
                  "Compte-rendu de chantier chaque semaine",
                  "Suivi après réception, en plus des garanties légales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ivoire/85">
                    <span className="mt-[7px] size-1.5 rounded-full bg-orange shrink-0" />
                    <span className="t-sec leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="slide-up" delay={0.35} className="mt-3">
              <Link href="/services" className="btn btn-ghost group">
                Nos services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-400 group-hover:translate-x-1"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </Reveal>
          </div>

          <div className="w-full lg:w-[55%] relative h-[26rem] md:h-[34rem] xl:h-[38rem]">
            <motion.div style={{ y: yBack }} className="absolute top-0 right-0 w-[72%] h-[84%] rounded-none overflow-hidden card-e">
              <img src={PHOTOS.chOssatureCloisonsHuisserieMetal} alt="Pièce en cours de travaux, sols protégés — visuel d'illustration" className="size-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div style={{ y: yFront }} className="absolute bottom-0 left-0 w-[52%] h-[58%] rounded-none overflow-hidden card-e z-10">
              <img src={PHOTOS.detailParquet} alt="Détail de parquet point de Hongrie posé" className="size-full object-cover" loading="lazy" />
              <span className="absolute bottom-3 left-3 bg-black/45 border border-white/25 px-3 py-1.5 t-micro font-medium text-white/90">Parquet point de Hongrie</span>
            </motion.div>

            <Reveal variant="scale" delay={0.4} className="absolute -bottom-5 right-6 md:right-14 z-20">
              <div className="card-e rounded-none px-5 py-4 flex items-center gap-4">
                <span className="display t-titre text-gradient leading-none">48h</span>
                <span className="t-mini text-muted leading-tight">pour les devis<br />des entreprises</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
