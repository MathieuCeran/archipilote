"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* Estimateur de travaux — reconstruit d'après l'outil de la maquette Lovable :
   surface × niveau × type de bien × finition + options techniques.
   Fourchettes €/m² alignées sur le barème IDF validé du site. */

const NIVEAUX = [
  { id: "rafraichissement", nom: "Rafraîchissement", detail: "Peintures, sols, petits équipements.", min: 250, max: 450 },
  { id: "partielle", nom: "Rénovation partielle", detail: "Une pièce d'eau ou une cuisine, reprises ponctuelles.", min: 600, max: 900 },
  { id: "complete", nom: "Rénovation complète", detail: "Réseaux, cloisons, pièces techniques, sols.", min: 1000, max: 1500 },
  { id: "lourde", nom: "Rénovation lourde", detail: "Structure, redistribution, mise aux normes intégrale.", min: 1500, max: 2500 },
] as const;

const BIENS = [
  { id: "appart", nom: "Appartement en copropriété", coef: 1.05 },
  { id: "maison", nom: "Maison ou pavillon", coef: 1 },
  { id: "locatif", nom: "Bien locatif ou investissement", coef: 0.95 },
] as const;

const FINITIONS = [
  { id: "sobre", nom: "Finition sobre", detail: "Matériaux courants, calepinage simple.", coef: 0.9 },
  { id: "soignee", nom: "Finition soignée", detail: "Grès cérame grand format, menuiseries standard.", coef: 1 },
  { id: "hdg", nom: "Haut de gamme", detail: "Travertin, zellige, béton ciré, menuiserie sur mesure.", coef: 1.25 },
] as const;

const OPTIONS = [
  { id: "porteur", nom: "Ouverture de mur porteur ou reprise de structure", montant: 15000 },
  { id: "vmc", nom: "Création de ventilation mécanique (carottage inclus)", montant: 6500 },
  { id: "iti", nom: "Isolation thermique par l'intérieur", montant: 7500 },
  { id: "cuisine", nom: "Cuisine équipée neuve", montant: 9000 },
  { id: "sde", nom: "Salle d'eau complète supplémentaire", montant: 8500 },
  { id: "ancien", nom: "Restitution du charme de l'ancien (moulures, fenêtres à l'identique)", montant: 7000 },
] as const;

/* Répartition indicative par lot (part du budget médian) — grille de la maquette. */
const LOTS = [
  { nom: "Dépose, gros œuvre et structure", part: 0.18 },
  { nom: "Plomberie et ventilation", part: 0.14 },
  { nom: "Électricité et mise aux normes", part: 0.13 },
  { nom: "Cloisons, doublages et plafonds", part: 0.16 },
  { nom: "Sols, faïences et pierre", part: 0.17 },
  { nom: "Menuiseries et peintures", part: 0.22 },
] as const;

const fmt = (n: number) => (Math.round(n / 500) * 500).toLocaleString("fr-FR");

export function Estimateur() {
  const [surface, setSurface] = useState(60);
  const [niveauId, setNiveauId] = useState<string>("complete");
  const [bienId, setBienId] = useState<string>("appart");
  const [finitionId, setFinitionId] = useState<string>("soignee");
  const [opts, setOpts] = useState<string[]>([]);

  const niveau = NIVEAUX.find((n) => n.id === niveauId)!;
  const bien = BIENS.find((b) => b.id === bienId)!;
  const finition = FINITIONS.find((f) => f.id === finitionId)!;

  const { min, max, mid, semaines } = useMemo(() => {
    const coef = bien.coef * finition.coef;
    const extra = OPTIONS.filter((o) => opts.includes(o.id)).reduce((s, o) => s + o.montant, 0);
    const min = niveau.min * surface * coef + extra;
    const max = niveau.max * surface * coef + extra;
    const mid = (min + max) / 2;
    const lvl = { rafraichissement: 0.45, partielle: 0.7, complete: 1, lourde: 1.4 }[niveau.id as string] ?? 1;
    const semaines = Math.max(2, Math.round((surface / 12) * lvl));
    return { min, max, mid, semaines };
  }, [surface, niveau, bien, finition, opts]);

  const toggle = (id: string) => setOpts((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const groupCls = "border border-line bg-surface rounded-none p-5";
  const radioCls = (on: boolean) => `text-left border rounded-none px-4 py-3 transition-colors cursor-pointer ${on ? "border-ivoire bg-surface-2" : "border-line hover:border-line-strong"}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 items-start">
      <div className="flex flex-col gap-5">
        <div className={groupCls}>
          <div className="flex items-center justify-between">
            <span className="font-semibold t-petit text-ivoire">Surface du logement</span>
            <span className="display t-fort text-ivoire tabular-nums">{surface}&nbsp;m²</span>
          </div>
          {/* 05/09 : aria-label ajouté. Le libellé « Surface du logement » est un <span> voisin,
              il n'est associé à aucun champ : un lecteur d'écran annonçait donc « curseur,
              75 » sans dire de quoi. aria-valuetext donne l'unité, sans quoi la valeur est
              lue comme un nombre nu. */}
          <input type="range" min={15} max={250} step={5} value={surface}
            aria-label="Surface du logement en mètres carrés"
            aria-valuetext={`${surface} mètres carrés`}
            onChange={(e) => setSurface(Number(e.target.value))} className="w-full mt-3 accent-[oklch(26%_0.013_60)] cursor-pointer" />
          <div className="flex justify-between t-micro text-muted mt-1"><span>15 m²</span><span>250 m²</span></div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold t-petit text-ivoire mb-3">Niveau de rénovation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {NIVEAUX.map((n) => (
              <button key={n.id} onClick={() => setNiveauId(n.id)} className={radioCls(niveauId === n.id)}>
                <span className="block font-semibold t-sec text-ivoire">{n.nom}</span>
                <span className="block text-muted t-mini mt-0.5">{n.detail}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold t-petit text-ivoire mb-3">Type de bien</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {BIENS.map((b) => (
              <button key={b.id} onClick={() => setBienId(b.id)} className={radioCls(bienId === b.id)}>
                <span className="block font-medium t-petit text-ivoire leading-snug">{b.nom}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold t-petit text-ivoire mb-3">Niveau de finition</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {FINITIONS.map((f) => (
              <button key={f.id} onClick={() => setFinitionId(f.id)} className={radioCls(finitionId === f.id)}>
                <span className="block font-semibold t-petit text-ivoire">{f.nom}</span>
                <span className="block text-muted t-micro mt-0.5">{f.detail}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold t-petit text-ivoire mb-3">Postes techniques structurants</p>
          <div className="grid grid-cols-1 gap-2">
            {OPTIONS.map((o) => {
              const on = opts.includes(o.id);
              return (
                <button key={o.id} onClick={() => toggle(o.id)} className={`flex items-center justify-between gap-3 border rounded-none px-4 py-2.5 text-left transition-colors cursor-pointer ${on ? "border-ivoire bg-surface-2" : "border-line hover:border-line-strong"}`}>
                  <span className="flex items-center gap-3">
                    <span className={`size-4 border rounded-none flex items-center justify-center ${on ? "bg-ivoire border-ivoire" : "border-line-strong"}`}>
                      {on && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="oklch(98.5% 0.008 85)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                    </span>
                    <span className="t-petit text-ivoire leading-snug">{o.nom}</span>
                  </span>
                  <span className="text-muted t-mini tabular-nums shrink-0">+{o.montant.toLocaleString("fr-FR")}&nbsp;€</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="rf-dossier rf-estimation">
          <p className="mq-mention mq-mention--accent">Fourchette indicative</p>
          <p className="rf-estimation-chiffre">
            {fmt(min)}&nbsp;€ – {fmt(max)}&nbsp;€
          </p>
          <p className="t-petit mt-2 leading-relaxed" style={{ color: "var(--papier-2)" }}>
            Budget travaux hors mobilier, hors électroménager et hors honoraires éventuels d&apos;architecte ou d&apos;ingénieur partenaire.
          </p>
          <p className="t-petit mt-1" style={{ color: "var(--tirage-clair)" }}>
            Soit environ {Math.round(min / surface / 50) * 50} € à {Math.round(max / surface / 50) * 50} € par mètre carré.
          </p>
          <dl className="rf-estimation-pied">
            <div>
              <dt className="mq-mention">Durée de chantier indicative</dt>
              <dd className="font-semibold mt-0.5" style={{ color: "var(--craie)" }}>{semaines} semaines</dd>
            </div>
            <div>
              <dt className="mq-mention">Achat direct des matériaux</dt>
              <dd className="font-semibold mt-0.5" style={{ color: "var(--craie)" }}>Prix fournisseur sur les postes hors décennale</dd>
            </div>
          </dl>
        </div>

        <div className="border border-line bg-surface rounded-none p-6">
          <p className="mq-mention mq-mention--accent">Répartition indicative par lot</p>
          <ul className="mt-3 flex flex-col divide-y divide-line">
            {LOTS.map((l) => (
              <li key={l.nom} className="flex items-baseline justify-between gap-4 py-2 t-petit">
                <span className="text-ivoire/85">{l.nom}</span>
                <span className="text-muted tabular-nums shrink-0">{fmt(mid * l.part)} €</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" className="btn btn-primary w-full">Passer au budget réel — étude sans engagement</Link>
      </div>
    </div>
  );
}
