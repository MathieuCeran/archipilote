import type { Metadata } from "next";
import { MqHero, MqSection, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { Estimateur } from "./estimateur";

export const metadata: Metadata = {
  title: "Estimateur de travaux de rénovation : budget indicatif en une minute | ARCHI PILOTE RÉNOVATION",
  description:
    "Fourchette de budget travaux à partir de la surface, du niveau de rénovation, du type de bien et des postes techniques structurants — valeurs constatées en Île-de-France.",
  alternates: { canonical: "/estimateur-travaux" },
};

/* Diagramme déterministe "inclus / non inclus" — deux colonnes fixes, aucune donnée
   utilisateur, donc pas de raison de passer par le composant client Estimateur. */
const INCLUS = [
  "Travaux et main-d'œuvre des entreprises partenaires.",
  "Dépose et évacuation des gravats.",
];

const NON_INCLUS = [
  "Mobilier, électroménager et décoration.",
  "Honoraires d'un architecte DPLG ou d'un ingénieur structure partenaire.",
  "Aléas structurels découverts après dépose (peuvent déplacer le budget vers le haut de la fourchette).",
];

export default function EstimateurPage() {
  return (
    <main>
      <MqHero
        kicker="Outil — budget indicatif"
        title="Estimateur de travaux : obtenir une fourchette de budget réaliste avant tout devis"
        lead="Cet estimateur calcule une fourchette de budget travaux à partir de la surface, du niveau de rénovation visé, du type de bien et des postes techniques les plus structurants. Les valeurs utilisées proviennent des fourchettes constatées en Île-de-France. Le résultat est un ordre de grandeur destiné à cadrer un projet, jamais un engagement de prix : celui-ci relève du chiffrage détaillé et des entreprises qui exécutent les travaux."
      />

      <MqSection kicker="Simulation" title="Renseigner le projet" lead="Quatre paramètres suffisent pour obtenir un ordre de grandeur exploitable." wide>
        <Estimateur />
      </MqSection>

      <MqSection kicker="Lecture des résultats" title="Ce que cette fourchette contient et ce qu'elle ne contient pas" wide>
        {/*
          Diagramme déterministe (JSX/CSS pur, aucune image générée) — remplace l'ancien
          MqChecklist à liste unique + le schéma IA schema-repartition-budget.jpg, qui
          faisait doublon avec la "Répartition indicative par lot" déjà calculée en
          direct dans l'outil ci-dessus (voir estimateur.tsx, bloc LOTS). Deux colonnes
          fixes inclus/non inclus, conforme au brief : jamais d'image IA pour un contenu
          qui relève de faits, pas d'esthétique dispensable ici — l'outil reste la
          priorité.
        */}
        <div
          role="img"
          aria-label="Ce que la fourchette de budget inclut et n'inclut pas. Inclus : travaux et main-d'œuvre des entreprises partenaires, dépose et évacuation des gravats. Non inclus : mobilier, électroménager et décoration, honoraires d'architecte ou d'ingénieur, aléas structurels découverts après dépose."
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-none overflow-hidden"
        >
          <div className="bg-surface p-6 flex flex-col gap-4">
            <p className="mq-mention mq-mention--accent">Inclus dans la fourchette</p>
            <ul className="flex flex-col gap-3">
              {INCLUS.map((t) => (
                <li key={t} className="flex items-start gap-3 t-petit text-ivoire/85 leading-relaxed">
                  <span aria-hidden className="mt-0.5 shrink-0 size-4 rounded-full flex items-center justify-center" style={{ background: "oklch(54% 0.095 70 / 15%)" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2d5c9c" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface p-6 flex flex-col gap-4">
            <p className="mq-mention">Non inclus</p>
            <ul className="flex flex-col gap-3">
              {NON_INCLUS.map((t) => (
                <li key={t} className="flex items-start gap-3 t-petit text-ivoire/85 leading-relaxed">
                  <span aria-hidden className="mt-0.5 shrink-0 size-4 rounded-full border border-line-strong flex items-center justify-center text-muted">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-muted t-mini mt-5 max-w-2xl leading-relaxed">
          L&apos;achat direct des matériaux par le client s&apos;applique ensuite au budget travaux : sur les postes hors décennale, la fourniture est réglée au prix fournisseur, sans marge d&apos;intermédiation.
        </p>

        {/*
          Visuel 1 du brief — graphique HTML/SVG (pas IA) de répartition du budget par
          poste, alimenté par les choix de l'utilisateur, à afficher après les résultats.
          NON traité dans cette passe : cette section vit dans app/estimateur-travaux/
          estimateur.tsx (composant client qui détient l'état surface/niveau/bien/
          finition/options), fichier hors périmètre de cette intervention (seuls les 4
          page.tsx listés en amont sont modifiables ici). L'outil affiche déjà une liste
          dynamique "Répartition indicative par lot" (calculée en direct à partir de
          `mid * l.part`, voir le bloc LOTS d'estimateur.tsx) mais sous forme de texte,
          pas de barres proportionnelles — donc la donnée dynamique existe, la
          représentation graphique manque encore. Piste pour une passe dédiée à
          estimateur.tsx : transformer cette liste en barres horizontales CSS pures
          (largeur = `${l.part * 100}%`), avec role="img" aria-label, toujours sans
          aucune image générée. Priorité confirmée par le client : l'outil qui fonctionne
          avant l'esthétique — pas de blocage sur ce point pour cette passe.
        */}
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les propriétaires demandent sur cette estimation">
        <MqFaq items={[
          { q: "Cet estimateur remplace-t-il un devis ?", a: "Non. Il fournit une fourchette indicative construite sur les prix constatés en Île-de-France. Seule une visite du bien et un chiffrage poste par poste engagent des montants réels, établis par les entreprises partenaires qui exécutent et facturent les travaux." },
          { q: "Sur quelles données reposent les fourchettes affichées ?", a: "Sur les fourchettes agrégées de l'observatoire des prix, alimentées par les projets accompagnés à Paris, dans les Hauts-de-Seine et en Île-de-France, hors mobilier et hors honoraires éventuels d'architecte ou d'ingénieur partenaire." },
          { q: "Pourquoi l'estimation est-elle affichée sous forme de fourchette ?", a: "Parce que l'état des réseaux, la qualité des supports et le niveau de finition font varier le coût réel d'un même projet dans un rapport de un à deux. Afficher un montant unique donnerait une fausse précision." },
          { q: "L'effet de l'achat direct est-il inclus dans le calcul ?", a: "Non. La fourchette correspond à un budget travaux de marché. L'optimisation par achat direct des matériaux, réglés au prix fournisseur sur les postes qui s'y prêtent, s'applique ensuite lors du chiffrage détaillé." },
        ]} />
        <p className="t-mini text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Passer de l'ordre de grandeur au budget réel" lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux et budget chiffré poste par poste." />

      <MqReadNext items={[
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes par poste" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un devis reçu" },
        { href: "/blog", label: "Magazine de la rénovation", sub: "Analyses techniques détaillées" },
      ]} />
    </main>
  );
}
