"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "../../data";

/* La barre « projet » fixée en bas des articles.

   Elle apparaît une fois l'ouverture dépassée (le titre a déjà ses propres
   appels) et s'efface quand le bloc de contact de fin de page arrive à
   l'écran — deux fois le même appel côte à côte, c'est du bruit.

   Libellé : « Étude sous 48 h ouvrées », et non « devis sous 48 h ». La marque
   n'établit pas les devis — ce sont les entreprises partenaires — et ne peut
   s'engager que sur son propre délai (voir la note du 05/09 dans data.ts). */
export function BarreProjet() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ouverture = document.querySelector(".note-ouverture");
    const fin = document.getElementById("note-fin");
    let apresOuverture = false;
    let avantFin = true;
    const maj = () => setVisible(apresOuverture && avantFin);

    const obs = new IntersectionObserver((entrees) => {
      for (const e of entrees) {
        if (e.target === ouverture) apresOuverture = !e.isIntersecting && e.boundingClientRect.top < 0;
        if (e.target === fin) avantFin = !e.isIntersecting && e.boundingClientRect.top > 0;
      }
      maj();
    });
    if (ouverture) obs.observe(ouverture);
    if (fin) obs.observe(fin);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`note-projet${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <p className="note-projet-texte">
        Un projet ? <em>Étude sous 48 h ouvrées</em>
      </p>
      <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="note-projet-tel" tabIndex={visible ? 0 : -1}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        {SITE.telAffiche}
      </a>
      <Link href="/contact" className="note-projet-cta" tabIndex={visible ? 0 : -1}>
        Décrire mon projet
        <span aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </Link>
    </div>
  );
}
