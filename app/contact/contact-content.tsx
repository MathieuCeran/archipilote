"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "../data";

/* Formulaire de contact — mise en page maquette Lovable (une étape, 8 champs),
   branché sur /api/contact (envoi réel + protections anti-bot). */

const PROJETS = ["Rafraîchissement", "Rénovation partielle", "Rénovation complète", "Cuisine sur-mesure", "Salle de bain", "Isolation & DPE", "Gros œuvre / surélévation", "Autre projet"];
const BUDGETS = ["Moins de 10 000 €", "10 000 – 50 000 €", "50 000 – 100 000 €", "100 000 – 200 000 €", "Plus de 200 000 €", "Je ne sais pas encore"];
const HORIZONS = ["Dans le mois", "Dans les 3 mois", "Dans les 6 mois", "Je me renseigne encore", "Non précisé"];
/* 04/09 : 6e critère de qualification demandé au dossier (8.12) — la copropriété.
   Volontairement NON obligatoire : un prospect qui ne sait pas ne doit pas être bloqué,
   d'où l'option vide « Non précisé » en plus des trois réponses.
   Liste identique à celle validée dans app/api/contact/route.ts. */
const COPROS = ["Oui", "Non", "Je ne sais pas"];

/* 03/09 : filet de sécurité. Si la livraison échoue (service d'e-mail indisponible ou
   non activé), le visiteur perdait tout ce qu'il venait de saisir et devait le retaper
   ailleurs — donc, en pratique, le contact était perdu. On lui propose désormais son
   propre message déjà rédigé, à envoyer par mail ou par WhatsApp en un clic. */
function recapitulatif(f: Record<string, string>) {
  const l = [
    `Nom : ${f.nom}`,
    `Téléphone : ${f.tel}`,
    f.email && `E-mail : ${f.email}`,
    `Commune : ${f.commune}`,
    `Projet : ${f.projet}`,
    f.surface && `Surface : ${f.surface} m²`,
    f.copro && `Copropriété : ${f.copro}`,
    `Budget : ${f.budget}`,
    `Démarrage : ${f.horizon}`,
    f.description && `\n${f.description}`,
  ].filter(Boolean);
  return l.join("\n");
}

export function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", commune: "", projet: "", surface: "", copro: "", budget: "", horizon: "Non précisé", description: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [secours, setSecours] = useState(false);
  const [piege, setPiege] = useState("");
  const startedAt = useRef(Date.now());

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSecours(false);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: piege, startedAt: startedAt.current }),
      });
      const data = await r.json().catch(() => ({ ok: false }));
      if (r.ok && data.ok) setDone(true);
      else if (r.status === 422 && Array.isArray(data.errors) && data.errors.includes("tel")) setError("Vérifiez votre numéro de téléphone — il doit comporter 10 chiffres (ex. 06 12 34 56 78).");
      else if (r.status === 422 && Array.isArray(data.errors) && data.errors.includes("email")) setError("Vérifiez l'adresse e-mail saisie.");
      else if (r.status === 422) setError("Certains champs obligatoires sont incomplets — vérifiez le nom, le téléphone, la commune, le type de projet et le budget.");
      else {
        setError("Votre demande n'a pas pu être transmise automatiquement. Votre message est prêt ci-dessous : envoyez-le en un clic, rien n'est perdu.");
        setSecours(true);
      }
    } catch {
      setError("Votre demande n'a pas pu être transmise automatiquement. Votre message est prêt ci-dessous : envoyez-le en un clic, rien n'est perdu.");
      setSecours(true);
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="border border-line bg-surface rounded-none p-8 text-center flex flex-col items-center gap-3">
        <h3 className="display t-titre text-ivoire">Demande envoyée</h3>
        <p className="text-muted t-sec max-w-md">
          {form.nom.split(" ")[0] || "Merci"}, votre demande d&apos;étude sans engagement est bien transmise. Retour sous
          48&nbsp;heures ouvrées avec une première lecture de votre projet à {form.commune || "votre commune"}.
        </p>
      </div>
    );
  }

  const labelCls = "flex flex-col gap-1.5 t-petit font-semibold text-ivoire";

  return (
    <form onSubmit={submit} className="border border-line bg-surface rounded-none p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <label className={labelCls}>Nom et prénom *
        <input required className="field" value={form.nom} onChange={set("nom")} autoComplete="name" />
      </label>
      <label className={labelCls}>Courriel
        <input type="email" className="field" value={form.email} onChange={set("email")} autoComplete="email" />
      </label>
      <label className={labelCls}>Téléphone *
        <input required type="tel" className="field" value={form.tel} onChange={set("tel")} autoComplete="tel" placeholder="06 12 34 56 78" />
      </label>
      <label className={labelCls}>Commune du bien *
        <input required className="field" value={form.commune} onChange={set("commune")} />
      </label>
      <label className={labelCls}>Type de projet *
        <select required className="field" value={form.projet} onChange={set("projet")}>
          <option value="" disabled>Choisir…</option>
          {PROJETS.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </label>
      <label className={labelCls}>Surface concernée
        <input className="field" value={form.surface} onChange={set("surface")} placeholder="ex. 75 m²" />
      </label>
      <label className={`${labelCls} sm:col-span-2`}>Le bien est-il en copropriété ?
        <select className="field" value={form.copro} onChange={set("copro")}>
          <option value="">Non précisé</option>
          {COPROS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <label className={labelCls}>Budget envisagé *
        <select required className="field" value={form.budget} onChange={set("budget")}>
          <option value="" disabled>Choisir…</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </label>
      <label className={labelCls}>Vous pensez démarrer…
        <select className="field" value={form.horizon} onChange={set("horizon")}>
          {HORIZONS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
      </label>
      <label className={`${labelCls} sm:col-span-2`}>Description du projet
        <textarea className="field min-h-[7rem] resize-none" value={form.description} onChange={set("description")} placeholder="Objectifs, état actuel, contraintes connues…" />
      </label>
      {/* Piège à robots : invisible et hors du parcours clavier, un humain ne le remplit jamais.
          Il était déclaré côté serveur mais n'existait pas dans le formulaire — donc inopérant. */}
      <div aria-hidden className="hidden">
        <label>
          Ne pas remplir
          <input tabIndex={-1} autoComplete="off" value={piege} onChange={(e) => setPiege(e.target.value)} />
        </label>
      </div>

      {error && <p className="sm:col-span-2 t-petit leading-relaxed" style={{ color: "var(--c-orange-deep)" }}>{error}</p>}

      {secours && (
        <div className="sm:col-span-2 border border-line bg-surface rounded-none p-5 flex flex-col gap-3">
          <p className="t-petit text-ivoire font-semibold">Envoyer votre demande autrement</p>
          <p className="text-muted t-petit leading-relaxed">
            Votre message est déjà rédigé avec les informations saisies. Choisissez le moyen qui vous arrange.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              className="btn btn-primary !py-2.5 !px-5 t-petit"
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Demande d'étude — ${form.projet || "projet"} à ${form.commune || ""}`)}&body=${encodeURIComponent(recapitulatif(form))}`}
            >
              Envoyer par e-mail
            </a>
            <a
              className="btn btn-ghost !py-2.5 !px-5 t-petit"
              href={`${SITE.whatsapp}?text=${encodeURIComponent(recapitulatif(form))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Envoyer sur WhatsApp
            </a>
            <a className="btn btn-ghost !py-2.5 !px-5 t-petit" href={`tel:${SITE.tel.replace(/\s/g, "")}`}>
              Appeler le {SITE.telAffiche}
            </a>
          </div>
        </div>
      )}
      <div className="sm:col-span-2 flex flex-col gap-3">
        <button type="submit" disabled={sending} className={`btn btn-primary w-full sm:w-auto !whitespace-normal text-center leading-snug ${sending ? "opacity-50 pointer-events-none" : ""}`}>
          {sending ? "Envoi en cours…" : "Envoyer ma demande d'étude sans engagement"}
        </button>
        <p className="text-muted t-mini">
          Vos coordonnées servent uniquement à vous répondre au sujet de ce projet et ne sont transmises à des tiers
          qu&apos;en cas de mise en relation avec une entreprise partenaire pour l&apos;exécution des travaux. Vous
          disposez d&apos;un droit d&apos;accès, de rectification et de suppression : voir notre{" "}
          <Link href="/politique-confidentialite" className="text-orange hover:underline">politique de confidentialité</Link>.
        </p>
      </div>
    </form>
  );
}
