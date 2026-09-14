/* ⚠️ COMPOSANT ACTUELLEMENT NON MONTÉ — il n'est importé par aucune page (vérifié le
   05/09/2026). Conservé pour un réemploi éventuel ; relire son texte avant de le
   remettre en ligne. */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { GAMMES, PIECES_OPTIONS } from "../data";

/* États du bien — resserrent la fourchette de ±50 % à ±25-30 % (audit T3 §3.3) :
   chaque état sélectionne la moitié basse, centrale ou haute de la gamme. */
const ETATS = [
  { id: "bon", nom: "Rafraîchi récemment", detail: "Réseaux et supports sains, surtout des finitions", plage: [0, 0.55] as const },
  { id: "origine", nom: "D'origine, habitable", detail: "Jamais restructuré, réseaux anciens", plage: [0.25, 0.8] as const },
  { id: "degrade", nom: "Dégradé ou à restructurer", detail: "Gros travaux probables, surprises à prévoir", plage: [0.45, 1] as const },
] as const;

/**
 * Estimateur de budget interactif.
 * Gamme × état du bien × surface × options → fourchette indicative live,
 * basée sur des fourchettes de marché Île-de-France (repères 2026).
 * Les options déjà comprises dans la gamme choisie sont désactivées pour ne
 * jamais facturer deux fois le même poste (cf. audit — double comptage cuisine/sdb).
 */
export function DevisEstimateur() {
  const [gammeId, setGammeId] = useState("complete");
  const [etatId, setEtatId] = useState("origine");
  const [surface, setSurface] = useState(65);
  const [pieces, setPieces] = useState<string[]>([]);

  const gamme = GAMMES.find((g) => g.id === gammeId)!;
  const etat = ETATS.find((e) => e.id === etatId)!;
  const optionsDisponibles = PIECES_OPTIONS.filter((p) => !gamme.inclus.includes(p.id));

  const ecart = gamme.prixMax - gamme.prixMin;
  const m2Min = Math.round(gamme.prixMin + ecart * etat.plage[0]);
  const m2Max = Math.round(gamme.prixMin + ecart * etat.plage[1]);

  const { min, max } = useMemo(() => {
    const base = { min: m2Min * surface, max: m2Max * surface };
    const extra = optionsDisponibles.filter((p) => pieces.includes(p.id)).reduce((s, p) => s + p.majoration, 0);
    return { min: base.min + extra, max: base.max + extra };
  }, [m2Min, m2Max, surface, pieces, optionsDisponibles]);

  const toggle = (id: string) => setPieces((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const fmt = (n: number) => n.toLocaleString("fr-FR");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] gap-6 items-start">
      <div className="flex flex-col gap-6">
        {/* Gamme */}
        <div className="flex flex-col gap-3">
          <span className="mq-mention">1. Type de rénovation</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GAMMES.map((g) => {
              const active = gammeId === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setGammeId(g.id)}
                  className={`relative text-left card-e rounded-none p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                    active ? "border-orange/70 bg-orange/[0.06] -translate-y-1" : "hover:-translate-y-1 hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 pr-7">
                    <span className="display t-haut text-ivoire normal-case">{g.nom}</span>
                    <span className={`font-mono t-micro ${active ? "text-orange" : "text-muted"}`}>{g.prixMin}-{g.prixMax}&nbsp;€/m²</span>
                  </div>
                  <p className="serif-accent t-sec text-orange/90 mt-1">{g.accroche}</p>
                  <p className="text-muted t-mini mt-1.5 leading-snug">{g.description}</p>
                  <span className={`absolute top-4 right-4 size-4 border-2 transition-all duration-300 ${active ? "border-orange bg-orange shadow-[0_0_0_4px_rgba(45,92,156,0.22)]" : "border-line-strong"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* État du bien — resserre la fourchette (T3 §3.3) */}
        <div className="flex flex-col gap-3">
          <span className="mq-mention">2. État actuel du bien</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {ETATS.map((e) => {
              const on = etatId === e.id;
              return (
                <button
                  key={e.id}
                  onClick={() => setEtatId(e.id)}
                  className={`text-left rounded-none border px-4 py-3 transition-all duration-300 cursor-pointer ${
                    on ? "border-orange/70 bg-orange/[0.08]" : "border-line hover:border-line-strong"
                  }`}
                >
                  <span className={`block t-petit font-medium ${on ? "text-orange" : "text-ivoire"}`}>{e.nom}</span>
                  <span className="block text-muted t-micro mt-0.5 leading-snug">{e.detail}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Surface */}
        <div className="card-e rounded-none p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="mq-mention">3. Surface du logement</span>
            <span className="display t-titre text-gradient normal-case">{surface}&nbsp;m²</span>
          </div>
          <input
            type="range"
            min={20}
            max={200}
            step={5}
            value={surface}
            onChange={(e) => setSurface(Number(e.target.value))}
            className="w-full accent-[var(--c-orange)] h-2 cursor-pointer"
          />
          <div className="flex justify-between font-mono t-micro text-muted">
            <span>20 m²</span>
            <span>200 m²</span>
          </div>
        </div>

        {/* Options */}
        <div className="card-e rounded-none p-6 md:p-7">
          <div className="flex items-center justify-between mb-5">
            <span className="mq-mention">4. Montées en gamme à prévoir</span>
            <span className="mq-mention">Optionnel</span>
          </div>
          {gamme.inclus.length > 0 && (
            <p className="text-muted t-micro mb-4 -mt-1">
              Cuisine et salle de bain neuves déjà comprises dans « {gamme.nom} » — les options ci-dessous ne s&apos;ajoutent que si vous montez en gamme sur ces postes.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {optionsDisponibles.map((p) => {
              const on = pieces.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => toggle(p.id)}
                  className={`flex items-center justify-between gap-3 rounded-none border px-4 py-3 text-left transition-all duration-300 cursor-pointer ${
                    on ? "border-orange/70 bg-orange/[0.08]" : "border-line hover:border-line-strong"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`size-5 rounded-none border-2 flex items-center justify-center transition-all ${on ? "border-orange bg-orange" : "border-line-strong"}`}>
                      {on && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                    </span>
                    <span className="t-sec text-ivoire">{p.nom}</span>
                  </span>
                  <span className="font-mono t-mini text-muted tabular-nums">+{fmt(p.majoration)}&nbsp;€</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ticket estimation */}
      <div className="lg:sticky lg:top-28">
        <div className="card-e rounded-none overflow-hidden">
          <div className="herringbone-divider" />
          <div className="p-6 md:p-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="mq-mention">Estimation</span>
              <span className="text-muted t-micro">{gamme.nom} · {surface} m²</span>
            </div>

            <div className="flex flex-col gap-2 t-sec">
              <div className="devis-row !py-2"><span className="text-ivoire">Base ({m2Min}-{m2Max} €/m² × {surface} m²)</span><span className="devis-prix">{fmt(m2Min * surface)}–{fmt(m2Max * surface)} €</span></div>
              <AnimatePresence initial={false}>
                {optionsDisponibles.filter((p) => pieces.includes(p.id)).map((p) => (
                  <motion.div key={p.id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="devis-row !py-2 overflow-hidden">
                    <span className="text-muted">{p.nom}</span><span className="devis-prix">+{fmt(p.majoration)} €</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="hr-fade" />

            <div className="flex flex-col gap-1">
              <span className="text-muted t-petit">Fourchette estimée</span>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`${min}-${max}`}
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="display text-[clamp(1.9rem,4vw,2.6rem)] leading-tight text-gradient normal-case"
                >
                  {fmt(min)}&nbsp;–&nbsp;{fmt(max)}&nbsp;€
                </motion.div>
              </AnimatePresence>
            </div>

            <Link href="/contact" className="btn btn-primary w-full !px-3 t-micro">
              Demander une visite technique
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <p className="t-micro text-muted leading-snug">
              Estimation indicative basée sur les fourchettes observées en 2026, hors autorisations, études
              techniques et imprévus de structure. Les devis remis par les entreprises partenaires après
              visite technique restent la seule référence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
