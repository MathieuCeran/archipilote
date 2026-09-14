import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";
import "./systeme.css";
import { LenisProvider } from "./components/lenis-provider";
import { NavRefonte } from "./components/nav-systeme";
import { PiedRefonte } from "./components/pied-systeme";
import { WhatsappButton } from "./components/whatsapp-button";
import { SITE_OFFLINE, EXPIRES_AT } from "./site-config";
import { OfflineScreen } from "./components/offline-screen";

/* PROMOTION DE LA REFONTE — étape 1 : le socle.

   Les deux fontes du prototype montent au niveau racine, elles servent donc
   les soixante-sept pages. Fraunces et Manrope sont déposées : deux familles
   de moins à télécharger, et surtout les rôles s’inversent — le titrage passe
   à la grotesque, la lecture à la sérif. C’est le changement le plus visible
   du système, et il tient en deux déclarations.

   Les noms de variable historiques (--font-dm-serif, --font-sora) sont
   conservés : ils sont câblés dans `@theme` et dans les classes utilitaires
   des pages. Les renommer obligerait à toucher les soixante-sept fichiers
   pour un gain nul. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});
const newsreader = Newsreader({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});
/* PAS de troisième instance de Bricolage pour --font-space-mono.
   Une seconde déclaration de la même famille, sans l’axe optique, prend le pas
   sur la première : le titrage se retrouvait rendu au dessin de lettre par
   défaut, plus large, et « Écrit et chiffré avant d’être un chantier » passait
   de deux lignes à trois. Défaut constaté à l’écran, pas déduit.
   L’alias est fait en CSS, dans globals.css, où --font-mono pointe sur la
   même variable que le titrage. */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.archipiloterenovation.com"),
  title: "ARCHI PILOTE RÉNOVATION — Rénovation tous corps d'état en Île-de-France",
  description:
    "Pilotage de travaux de rénovation en Île-de-France : gros œuvre, second œuvre, cuisine sur-mesure, salle de bain étanche, isolation DPE. Un seul interlocuteur, devis des entreprises rendus comparables poste par poste.",
  alternates: { canonical: "/" },
  // Blocage levé le 25/08/2026 — le site est en phase de visibilité SEO réelle.
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: [
      "7iUlAObR2WvotDJ3nOlAz5QjefEjRC-HaOAewDg5x08",
      "6CNvUvCSLjFhSkB8CbWeOL-82Drksn5BJvSK6IyitKk",
    ],
      },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    url: "https://www.archipiloterenovation.com",
    title: "ARCHI PILOTE RÉNOVATION — Rénovation tous corps d'état en Île-de-France",
    description:
      "Pilotage de travaux de rénovation en Île-de-France. Un seul interlocuteur, des entreprises partenaires qui contractent directement avec vous.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Séjour rénové, niveau de finition visé — visuel d'illustration" }],
  },
};

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.archipiloterenovation.com/#organization",
  name: "ARCHI PILOTE RÉNOVATION",
  /* 03/09 : « legalName: IA RENOV » retiré du balisage. C'était le signal lisible par
     machine qui rattachait publiquement cette marque aux deux autres enseignes exploitées
     par la même société — exactement ce que le dossier T5 demande de ne pas déclarer ici.
     La dénomination sociale et l'immatriculation restent où la loi les exige : page
     Mentions légales, documents contractuels, et une ligne unique en pied de page. */
  url: "https://www.archipiloterenovation.com",
  telephone: "+33667117975",
  email: "archipiloterenovation@gmail.com",
  description: "Pilotage de travaux de rénovation tous corps d'état en Île-de-France, priorité maison et pavillon.",
  areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 bis rue Gabriel Péri",
    postalCode: "92250",
    addressLocality: "La Garenne-Colombes",
    addressCountry: "FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const expired = SITE_OFFLINE || Date.now() > new Date(EXPIRES_AT).getTime();
  return (
    <html
      lang="fr"
      data-theme="pierre"
      suppressHydrationWarning
      className={`${bricolage.variable} ${newsreader.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_ORGANIZATION) }}
        />
      </head>
      {/* `rf` porte les jetons et les composants du système de refonte. Elle
          était sur un calque autour du seul prototype ; elle est ici, donc sur
          les soixante-sept pages. */}
      <body className="rf min-h-screen antialiased">
        {expired ? (
          <OfflineScreen />
        ) : (
          <>
            <LenisProvider>
              <NavRefonte />
              {children}
              <PiedRefonte />
            </LenisProvider>
            <WhatsappButton />
          </>
        )}
      </body>
    </html>
  );
}
