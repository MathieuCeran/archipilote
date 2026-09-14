"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  variant?: "slide-up" | "fade-blur" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
};

const VARIANTS = {
  "slide-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
} as const;

/** Wrapper reveal au viewport — vocabulaire slide-up / fade-blur / scale.

    DEUX DÉFAUTS CORRIGÉS, ET LE PREMIER SE VOYAIT À LA LECTURE.

    · `margin: "-15%"` exigeait que l'élément soit entré de 15 % dans la
      fenêtre avant de se montrer. Sur un article, un paragraphe déjà à
      l'écran restait donc à opacité nulle : on lisait un bloc blanc de trois
      cents pixels au milieu du texte. La marge passe en positif — l'élément
      se révèle un peu AVANT d'entrer, ce qui est le seul réglage juste : on
      ne doit jamais voir la place d'un contenu sans le contenu.

    · `prefers-reduced-motion` n'était pas respecté. `motion/react` ne le lit
      pas tout seul : il faut le lui demander. Ici, si le visiteur a demandé
      moins d'animation, le contenu est simplement là. */
export function Reveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 0.7,
  className = "",
}: RevealProps) {
  const sobre = useReducedMotion();
  if (sobre) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "120px" }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
