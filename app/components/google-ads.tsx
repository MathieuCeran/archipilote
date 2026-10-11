"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ADS_ID, ADS_LABEL_TEL, CONSENT_KEY, setAdsConsent, trackConversion } from "@/lib/ads";

/* Balise Google Ads + mode consentement v2.

   Par défaut tout est refusé : sans accord, Google ne reçoit que des signaux
   sans cookie (conversions modélisées). Le bandeau propose « Refuser » au même
   niveau que « Accepter », comme l'exige la CNIL. Le choix est gardé dans le
   navigateur ; il se réinitialise depuis la politique de confidentialité.

   Les appels sont comptés par un seul écouteur sur le document : les liens
   tel: sont éparpillés dans une dizaine de composants, inutile de les toucher. */
export function GoogleAds() {
  const [choix, setChoix] = useState<"granted" | "denied" | null | undefined>(undefined);

  useEffect(() => {
    let v: string | null = null;
    try {
      v = localStorage.getItem(CONSENT_KEY);
    } catch {}
    setChoix(v === "granted" || v === "denied" ? v : null);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (a) trackConversion(ADS_LABEL_TEL);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!ADS_ID) return null;

  const repondre = (ok: boolean) => {
    setAdsConsent(ok);
    setChoix(ok ? "granted" : "denied");
  };

  return (
    <>
      <Script id="gads-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        var c = null; try { c = localStorage.getItem(${JSON.stringify(CONSENT_KEY)}); } catch (e) {}
        var v = c === "granted" ? "granted" : "denied";
        gtag("consent", "default", { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v, wait_for_update: 500 });
        gtag("js", new Date());
        gtag("config", ${JSON.stringify(ADS_ID)});
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />

      {choix === null && (
        <div
          role="dialog"
          aria-label="Cookies publicitaires"
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-50 border border-line bg-surface p-5 flex flex-col gap-3 t-petit shadow-lg"
        >
          <p>
            Nous utilisons des cookies Google Ads pour mesurer l&apos;efficacité de nos annonces. Vous pouvez les
            accepter ou les refuser ; le site fonctionne de la même façon.{" "}
            <Link href="/politique-confidentialite" className="underline">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-2">
            <button type="button" className="rf-btn rf-btn--contour flex-1 justify-center" onClick={() => repondre(false)}>
              Refuser
            </button>
            <button type="button" className="rf-btn rf-btn--contour flex-1 justify-center" onClick={() => repondre(true)}>
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* Bouton de la politique de confidentialité : efface le choix et rouvre le bandeau. */
export function ReinitialiserCookies() {
  return (
    <button
      type="button"
      className="underline"
      onClick={() => {
        setAdsConsent(false);
        try {
          localStorage.removeItem(CONSENT_KEY);
        } catch {}
        location.reload();
      }}
    >
      Modifier mon choix sur les cookies
    </button>
  );
}
