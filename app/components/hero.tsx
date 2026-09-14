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
import { PHOTOS, srcSetOf } from "../lib-photos";

const EASE = [0.25, 0.1, 0.25, 1] as const;

/* Image de fond unique — le diaporama 4 slides a été retiré (dossier V3 :
   aucun carrousel, pas de bandeau décoratif multiple, poids mobile maîtrisé).
   Décorative (le fond du H1), donc alt vide ; le Ken Burns léger reste. */
function HeroBackdrop() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={PHOTOS.heroHaussmannien}
        srcSet={srcSetOf(PHOTOS.heroHaussmannien)}
        sizes="100vw"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[center_38%]"
      />
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "160px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col grain">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <HeroBackdrop />
      </motion.div>
      <div className="absolute inset-0 bg-[#14181a]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#14181a]/60 via-transparent to-[#14181a]" />

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 flex-1 flex items-center justify-center pt-16 pb-10 sm:pt-20 sm:pb-16">
        <div className="container-site flex flex-col items-center text-center gap-4 sm:gap-7">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="bg-black/45 border border-white/25 backdrop-blur-[6px] pl-3 pr-4 py-2 flex items-center gap-2.5"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-orange opacity-70 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-orange" />
            </span>
            <span className="t-micro sm:t-mini text-white/85">Travaux de rénovation tous corps d&apos;état — Île-de-France</span>
          </motion.div>

          <WordReveal
            as="h1"
            immediate
            delay={0.25}
            stagger={0.1}
            segments={[
              { text: "Rénovation tous corps d'état," },
              { text: "du gros œuvre aux finitions.", serif: true, gradient: true },
            ]}
            className="hero-title display text-[clamp(2.5rem,7.6vw,6.4rem)] leading-[1.04] sm:leading-[1.02] tracking-[-0.01em] text-white text-balance max-w-6xl"
          />

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
            className="max-w-xl t-base sm:t-haut md:t-haut leading-snug text-white/75 text-balance"
          >
            Second œuvre tous corps d&apos;état, cuisine sur-mesure, salle de bain étanche, isolation.{" "}
            <strong className="text-white font-semibold">Un seul interlocuteur</strong>, devis des entreprises sous 48&nbsp;heures ouvrées.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mt-1 sm:mt-2">
            <motion.div initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 1, delay: 1.05, ease: EASE }}>
              <Link href="/estimateur-travaux" className="btn btn-primary">
                Estimer mon budget
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-px"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 1, delay: 1.2, ease: EASE }}>
              <Link href="/realisations" className="btn btn-ghost !text-white !border-white/90 hover:!bg-white hover:!text-orange-deep">Voir les réalisations</Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hidden sm:flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-1 mq-mention mq-mention--clair"
          >
            <span>Entreprises partenaires assurées</span>
            <span className="size-1 rounded-full bg-orange/60" />
            <span>Devis entreprises sous 48 heures ouvrées</span>
            <span className="size-1 rounded-full bg-orange/60" />
            <span>Visite technique du bien</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="mq-mention mq-mention--clair">Découvrir</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block h-8 w-px bg-gradient-to-b from-orange to-transparent" />
      </motion.div>
    </section>
  );
}
