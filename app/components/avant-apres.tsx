"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

type AvantApresProps = {
  titre: string;
  texte?: string;
  avant: string;
  apres: string;
  avantLabel: string;
  apresLabel: string;
  eyebrow?: string;
  /** true = section complète avec titre ; false = juste le comparateur */
  standalone?: boolean;
};

/**
 * Comparateur avant/après — vraies photos de chantier.
 * Poignée draggable (pointer events) + animation d'amorce au viewport.
 */
export function AvantApres({
  titre,
  texte,
  avant,
  apres,
  avantLabel,
  apresLabel,
  eyebrow,
  standalone = true,
}: AvantApresProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const inView = useInView(frameRef, { once: true, margin: "-20%" });
  const [primed, setPrimed] = useState(false);

  // Amorce : au premier viewport, la poignée balaie doucement pour montrer le geste
  useEffect(() => {
    if (!inView || primed) return;
    setPrimed(true);
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      // 50 -> 68 -> 44 -> 50 (petit balayage)
      const sweep =
        t < 0.45 ? 50 + (68 - 50) * (t / 0.45) : t < 0.8 ? 68 - 24 * ((t - 0.45) / 0.35) : 44 + 6 * ((t - 0.8) / 0.2);
      setPos(sweep * (1 - eased * 0) );
      if (t < 1) raf = requestAnimationFrame(tick);
      else setPos(50);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, primed]);

  const update = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }, []);

  const comparateur = (
    <div
      ref={frameRef}
      className="ba-handle relative w-full aspect-[16/11] md:aspect-[16/9] rounded-none overflow-hidden card-e select-none"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging && update(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* APRÈS — pleine surface */}
      <img src={apres} alt={apresLabel} className="absolute inset-0 size-full object-cover" draggable={false} />

      {/* AVANT — clip à gauche */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={avant} alt={avantLabel} className="absolute inset-0 size-full object-cover" draggable={false} />
      </div>

      {/* Labels — version courte sur mobile (les libellés complets se chevauchaient
          sur écran étroit) ; la mention « illustration » reste portée par le texte
          d'intro et la légende sous le comparateur. */}
      <span className="absolute top-4 left-4 bg-black/70 border border-white/25 px-3.5 py-1.5 pointer-events-none mq-mention mq-mention--clair">
        <span className="sm:hidden">{avantLabel.split("—")[0].trim()}</span>
        <span className="hidden sm:inline">{avantLabel}</span>
      </span>
      <span className="absolute top-4 right-4 bg-black/70 border border-white/25 px-3.5 py-1.5 pointer-events-none mq-mention mq-mention--clair">
        <span className="sm:hidden">{apresLabel.split("—")[0].trim()}</span>
        <span className="hidden sm:inline">{apresLabel}</span>
      </span>

      {/* Poignée */}
      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-white/85 shadow-[0_0_18px_rgba(0,0,0,0.5)]" />
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-black/60 border border-white/45 flex items-center justify-center text-white transition-transform duration-300 ${
            dragging ? "scale-110" : ""
          }`}
        >
          <svg width="20" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 1 1 7l6 6M17 1l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (!standalone) return comparateur;

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute top-0 left-0 w-64 h-64 hidden md:block" />
      <div className="container-site flex flex-col gap-12 md:gap-16 relative">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur">
            <span className="eyebrow">{eyebrow ?? "Avant / après"}</span>
          </Reveal>
          <WordReveal
            as="h2"
            segments={[
              { text: titre.split("—")[0].trim() + "," },
              { text: "en images.", serif: true, gradient: true },
            ]}
            className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire text-balance max-w-4xl"
          />
          {texte && (
            <Reveal variant="slide-up" delay={0.15}>
              <p className="lead max-w-2xl">{texte}</p>
            </Reveal>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl w-full"
        >
          {comparateur}
          <p className="mt-4 text-center mq-mention">
            ← Faites glisser — illustration d&apos;un chantier type →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
