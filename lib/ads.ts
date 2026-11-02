/* Google Ads — suivi des conversions.

   Deux conversions seulement, celles qui font un client :
   - LEAD : le mail de demande est réellement parti (SMTP ou FormSubmit),
     pas le simple clic sur « Envoyer » ni l'affichage de /contact ;
   - TEL  : un clic sur un lien tel: (mobile surtout).

   Ces identifiants sont publics (ils partent dans le HTML de toute façon) :
   ils vivent ici plutôt que dans des variables d'environnement. Tant que
   ADS_ID est vide, rien n'est chargé — le site se déploie sans balise. */
/* Balise Google propre à Archi Pilote (créée le 11/10/2026, séparée de la balise
   « Archi Renov » qui embarquait aussi l'Analytics d'archi-renov.com). */
export const GTAG_ID = "GT-PHX4KX6L";
export const ADS_ID = "AW-17906255882";
export const ADS_LABEL_LEAD = "TiXeCOv_m5kdEIqQr9pC"; // APR - Formulaire envoyé (succès)
export const ADS_LABEL_TEL = "jee2CO7_m5kdEIqQr9pC"; // APR - Clic téléphone

/* Choix cookies : { v: "granted" | "denied", t: date du choix } sous cette clé.
   Gardé six mois (recommandation CNIL), puis redemandé. Une ancienne valeur
   sans date (« granted » / « denied » seul) compte comme absente. */
export const CONSENT_KEY = "apr-consent";
export const CONSENT_MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000;
export const CONSENT_EVENT = "apr-consent";

export type Choix = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

function gtag(): Gtag | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  return typeof g === "function" ? g : null;
}

export function trackConversion(label: string) {
  const g = gtag();
  if (!ADS_ID || !label || !g) return;
  g("event", "conversion", { send_to: `${ADS_ID}/${label}` });
}

/** Choix enregistré et encore valable, sinon null. */
export function readConsent(): Choix | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as { v?: string; t?: number } | null;
    if (!c || (c.v !== "granted" && c.v !== "denied") || typeof c.t !== "number" || Date.now() - c.t > CONSENT_MAX_AGE_MS) return null;
    return c.v;
  } catch {
    return null;
  }
}

export function setAdsConsent(granted: boolean) {
  const v: Choix = granted ? "granted" : "denied";
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ v, t: Date.now() }));
  } catch {
    /* navigation privée : le choix vaut pour la page en cours */
  }
  gtag()?.("consent", "update", { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Efface le choix (tout repasse en refusé) et rouvre le bandeau. */
export function resetConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {}
  gtag()?.("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
