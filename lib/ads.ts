/* Google Ads — suivi des conversions.

   Deux conversions seulement, celles qui font un client :
   - LEAD : le mail de demande est réellement parti (SMTP ou FormSubmit),
     pas le simple clic sur « Envoyer » ni l'affichage de /contact ;
   - TEL  : un clic sur un lien tel: (mobile surtout).

   Ces identifiants sont publics (ils partent dans le HTML de toute façon) :
   ils vivent ici plutôt que dans des variables d'environnement. Tant que
   ADS_ID est vide, rien n'est chargé — le site se déploie sans balise. */
export const ADS_ID = "AW-17906255882";
export const ADS_LABEL_LEAD = "TiXeCOv_m5kdEIqQr9pC"; // APR - Formulaire envoyé (succès)
export const ADS_LABEL_TEL = "jee2CO7_m5kdEIqQr9pC"; // APR - Clic téléphone

export const CONSENT_KEY = "apr-consent";

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

export function setAdsConsent(granted: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {
    /* navigation privée : le choix vaut pour la page en cours */
  }
  const v = granted ? "granted" : "denied";
  gtag()?.("consent", "update", { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
}
