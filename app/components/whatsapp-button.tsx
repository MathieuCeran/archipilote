"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "../data";

/**
 * Bouton WhatsApp flottant — bas gauche. Se masque en scrollant vers le bas
 * (il recouvrait des légendes de galerie sur mobile), reste visible en haut
 * de page et réapparaît dès qu'on remonte.
 */
export function WhatsappButton() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (y < 120) setVisible(true);
      else if (goingDown) setVisible(false);
      else if (goingUp) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Discuter sur WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-50 flex items-center gap-2.5 rounded-full pl-2.5 pr-3 py-2 sm:pl-3 sm:pr-4 sm:py-2.5 group"
          style={{
            background: "linear-gradient(180deg, #2fce65 -30%, #1faa4f 95%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), 0 12px 32px -10px rgba(31,170,79,0.65)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" aria-hidden className="sm:w-5 sm:h-5">
            <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.45 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
          </svg>
          <span className="text-white t-mini sm:t-petit font-semibold tracking-tight hidden sm:block group-hover:translate-x-0.5 transition-transform duration-300">
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
