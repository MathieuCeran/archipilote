"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ============================================================================
   L'OUVERTURE DE L'ACCUEIL — 10/2026.

   Plein écran, trois vraies photos de chantiers livrés qui se relaient
   (fondu + lent resserrement), le H1 qui porte enfin le mot-clé de la page
   (« entreprise de rénovation à Paris »), deux appels, et un bandeau
   d'engagements en pied.

   La signature reste celle du site : le repère numéroté façon cartouche de
   plan (01 / 03) et ses traits de progression, les angles vifs des boutons,
   le bleu de tirage. Le défilement s'arrête au survol, au focus clavier, et
   n'existe pas pour qui a demandé moins d'animations.
   ============================================================================ */

const DUREE = 7000;

const DIAPOS = [
  {
    image: "/photos/chantiers2/salon-salle-a-manger-moulures-parquet-chevrons.jpeg",
    alt: "Salon et salle à manger d'un appartement haussmannien rénové à Paris : moulures, miroir encadré, parquet chêne en point de Hongrie",
    legende: "Appartement haussmannien, Paris",
    detail: "Moulures et cheminée conservées, réseaux refaits.",
  },
  {
    image: "/photos/chantiers2/appart2-chambre-tete-velours-fenetre.jpeg",
    alt: "Chambre d'un appartement parisien entièrement rénové : tête de lit capitonnée, rangements en chêne clair intégrés, fenêtre sur rue",
    legende: "Appartement parisien, rénovation complète",
    detail: "Plan redessiné, rangements sur mesure.",
  },
  {
    image: "/photos/chantiers2/sdb-granit-clair-baignoire-2.jpeg",
    alt: "Salle de bain rénovée : baignoire îlot et vasque monolithe devant un habillage en granit clair",
    legende: "Salle de bain, Paris",
    detail: "Étanchéité contrôlée avant le revêtement.",
  },
];

const ENGAGEMENTS = [
  "Étude de projet sous 48 h ouvrées",
  "Devis des entreprises rendus comparables",
  "8 corps de métier, un seul interlocuteur",
  "Suivi 12 mois après réception",
];

export function HeroDiaporama() {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  const [calme, setCalme] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCalme(m.matches);
    const f = () => setCalme(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);

  useEffect(() => {
    if (pause || calme) return;
    const t = setTimeout(() => setI((v) => (v + 1) % DIAPOS.length), DUREE);
    return () => clearTimeout(t);
  }, [i, pause, calme]);

  const d = DIAPOS[i];

  return (
    <section
      className="hd rf-dossier"
      aria-label="Présentation"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      onFocusCapture={() => setPause(true)}
      onBlurCapture={() => setPause(false)}
    >
      {DIAPOS.map((s, k) => (
        <img
          key={s.image}
          src={s.image}
          alt={k === i ? s.alt : ""}
          aria-hidden={k !== i}
          className={`hd-photo${k === i ? " is-active" : ""}`}
          fetchPriority={k === 0 ? "high" : "low"}
          loading={k === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="hd-voile" aria-hidden />

      <div className="rf-wrap hd-corps">
        <div className="hd-texte">
          <p className="hd-lieu">Paris, Hauts-de-Seine et Île-de-France</p>
          <h1 className="hd-titre">
            Entreprise de rénovation à Paris
            <span>un seul interlocuteur, du plan à la réception</span>
          </h1>
          <p className="hd-chapo">
            Nous préparons votre projet, rendons les devis des entreprises partenaires comparables et pilotons le
            chantier tous corps d'état. Appartement, maison, structure, pièces d'eau.
          </p>
          <div className="hd-actions">
            <Link href="/contact" className="rf-btn rf-btn--clair">
              Décrire mon projet
            </Link>
            <Link href="/estimateur-travaux" className="rf-btn rf-btn--fantome">
              Estimer mon budget
            </Link>
          </div>
        </div>

        <div className="hd-cartouche">
          <p className="hd-compteur" aria-live="polite">
            <span>{String(i + 1).padStart(2, "0")}</span> / {String(DIAPOS.length).padStart(2, "0")}
          </p>
          <p className="hd-legende">{d.legende}</p>
          <p className="hd-detail">{d.detail}</p>
          <div className="hd-traits" role="group" aria-label="Choisir une photo">
            {DIAPOS.map((s, k) => (
              <button
                key={s.image}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Photo ${k + 1} : ${s.legende}`}
                aria-current={k === i}
                className={k === i ? "is-active" : undefined}
              >
                <span style={k === i && !pause && !calme ? { animationDuration: `${DUREE}ms` } : undefined} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rf-wrap hd-bandeau">
        <ul>
          {ENGAGEMENTS.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
