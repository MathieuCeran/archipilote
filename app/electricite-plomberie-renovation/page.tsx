import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { MaillageInterne } from "../components/local-page";
import { CtaFinal } from "../components/cta-final";
import { MqFig } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/electricite-plomberie-renovation" },
  title: "Électricité et plomberie en rénovation | ARCHI PILOTE RÉNOVATION",
  description: "Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture.",
};

/*
  07/09/2026 — cette page n'utilise plus le gabarit `SpecialtyPage`.

  Motif : le gabarit n'expose qu'UN emplacement d'image (le visuel d'en-tête) et son prop
  `sections` rend son texte dans un <p>, où l'on ne peut pas glisser une <figure> sans produire
  du HTML invalide. Le client reproche à cette page de n'avoir qu'une seule image alors que des
  photos de chantier inemployées documentent exactement ce dont elle parle. Le gabarit est donc
  déplié ici, comme il l'avait déjà été le 06/09 pour /renovation-cuisine-maison, sans modifier
  app/components/specialty-page.tsx (partagé avec d'autres pages). Tout le reste est conservé à
  l'identique : en-tête, fil d'Ariane, JSON-LD Service + BreadcrumbList, FAQ commune (texte
  inchangé), maillage propre à la page, CTA.

  Deux corrections au passage :
  - le visuel d'en-tête (1200 × 1600, portrait) était affiché en aspect-[16/8] par le gabarit :
    les deux tiers du placard étaient hors cadre. Il passe à son ratio natif 3/4 ;
  - le gabarit suffixait la légende par « — Illustration, non contractuelle », y compris sur
    cette photo de chantier réel. La mention exacte est désormais écrite dans chaque légende.

  Ce qui n'est PAS illustré, et pourquoi : la section « Diagnostic initial » reste sans image.
  Les 245 photos de public/photos/chantiers/ ont été passées en revue ; les deux seules qui
  montraient l'existant mis à nu (chDemolitionLattisPlatreChantier1.jpeg et
  chDemolitionCloisonBoisPlatre.jpeg) sont déjà comptées sur trois pages chacune par
  `scripts/surexposition.py`. Une quatrième reprise en aurait fait des « photos qu'on revoit
  partout », reproche déjà formulé par le client : l'emplacement reste donc vide.

  Écartée volontairement : chNourriceLaitonVanneGenerale.jpeg, seule photo de plomberie encore
  inemployée. Elle montre LE MÊME collecteur laiton, sur le MÊME mur de plaques hydrofuges vertes,
  que chNourriceDoubleAnglePlafond.jpeg déjà publiée sur /renovation-complete et /realisations
  (mêmes étiquettes collées sur la barre, mêmes vannes noires à repère bleu, même vanne générale
  rouge en bout). La note du 03/09 dans /second-oeuvre avait déjà tranché : une seule de cette
  série reste publiée. La reprendre ici recréerait exactement le « trois fois presque la même
  chose » reproché par le client.
*/

const EYEBROW = "Second œuvre";
const LEAD =
  "Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture.";
const TITRE = "Électricité et plomberie : refaire les réseaux avant de fermer.";

const FAQ_COMMUNE = [
  { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", r: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité." },
  { q: "Une visite technique est-elle nécessaire ?", r: "Oui, pour tout chiffrage sérieux : l'existant et l'accès changent fortement les hypothèses de chantier." },
  { q: "Les prix affichés sont-ils garantis ?", r: "Non. Les fourchettes éventuellement publiées sont datées et indicatives ; le prix contractuel reste celui du devis remis par l'entreprise." },
  { q: "Intervenez-vous depuis La Garenne-Colombes ?", r: "Oui, avec une zone d'intervention plus large en Île-de-France selon la nature du projet." },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITRE,
    description: LEAD,
    areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
    provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
      { "@type": "ListItem", position: 2, name: EYEBROW, item: "https://www.archipiloterenovation.com/services" },
      { "@type": "ListItem", position: 3, name: TITRE, item: "https://www.archipiloterenovation.com/electricite-plomberie-renovation" },
    ],
  },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      {JSON_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <PageHeader
        eyebrow={EYEBROW}
        segments={[{ text: "Électricité et plomberie :" }, { text: "refaire les réseaux avant de fermer.", serif: true, gradient: true }]}
        lead={LEAD}
      />

      <nav aria-label="Fil d'Ariane" className="rf-wrap mq-mesure--large -mt-6 mb-8">
        <ol className="flex flex-wrap items-center gap-2 mq-mention">
          <li><Link href="/" className="hover:text-orange transition-colors">Accueil</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/services" className="hover:text-orange transition-colors">{EYEBROW}</Link></li>
          <li aria-hidden>›</li>
          <li className="text-ivoire/70">{TITRE}</li>
        </ol>
      </nav>

      {/* 07/09 : illustration technique posée en tête, avant la photographie. Elle montre
          ce que la chape et les plaques vont refermer — donc ce que la page a justement
          pour objet d'expliquer. C'est un DESSIN, pas une photographie : légende et prop
          `entier` le disent, et elle vit dans /photos/pedagogie/. */}
      <section className="relative pb-10">
        <div className="rf-wrap mq-mesure">
          <MqFig
            src="/photos/pedagogie/illustration-reseaux-encastres.jpg"
            alt="Écorché d'un mur et d'un sol montrant les réseaux avant fermeture : gaines annelées dans les saignées, boîtes d'encastrement, alimentations d'eau chaude et froide, évacuation posée en pente sous la chape"
            caption="Illustration technique — ce que la chape et les plaques vont refermer : gaines dans les saignées, boîtes d'encastrement, alimentations, et l'évacuation dont la pente se règle avant coulage. Dessin d'illustration, pas une photographie de chantier."
            ratio="aspect-[3/2]"
            entier
          />
        </div>
      </section>

      <section className="relative pb-10">
        <div className="rf-wrap mq-mesure--etroite">
          <MqFig
            src="/photos/chantiers/chPlacardTableauElectriqueIntegre.jpeg"
            alt="Placard d'entrée en MDF brut, portes ouvertes : une colonne abrite un compteur ancien et deux tableaux de protection, l'autre reçoit des étagères"
            caption="Placard d'entrée sur mesure, portes ouvertes : un compteur ancien et deux tableaux de protection occupent une colonne dédiée, les étagères l'autre. Le meuble est encore en MDF brut, sans peinture, et les douilles pendent au bout de leur fil. Une fois les façades posées, l'installation reste atteignable en ouvrant une porte. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-12 text-ivoire/85 t-base leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Diagnostic initial</h2>
            <p>
              Tableau, circuits, mise à la terre, distribution d&apos;eau, évacuations, pression et
              production d&apos;eau chaude — l&apos;état réel avant toute décision.
            </p>
            {/*
              07/09 : chDemolitionLattisPlatreChantier1.jpeg (cloison ancienne déposée jusqu'à son
              ossature) avait d'abord été posée ici. Retirée le jour même : `scripts/surexposition.py`
              la comptait alors sur QUATRE pages, sa scène venant d'être publiée sur /realisations en
              plus de /gros-oeuvre-structure et d'un article de blog. Aucune autre photo de la
              photothèque ne montre le diagnostic d'une installation existante : l'emplacement reste
              vide plutôt que rempli par une image approchante.
            */}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Plans de réseaux</h2>
            <p>
              Les plans évitent les décisions improvisées sur chantier, où une erreur coûte cher à
              corriger une fois les murs fermés.
            </p>
            {/*
              07/09 : photo inemployée jusqu'ici, ouverte avant rédaction de sa légende. Elle est
              retenue pour ce qu'on n'y voit PAS — ni source lumineuse, ni câble, ni appareillage —
              alors que la lumière vient bien de la menuiserie : un éclairage intégré de ce type
              suppose que son point d'alimentation ait été arrêté avant la pose. La légende décrit
              l'image, elle ne prétend pas montrer un plan. Fichier 1200 × 1600, ratio natif 3/4.
            */}
            <div className="mt-4 max-w-sm">
              <MqFig
                src="/photos/chantiers/chNicheArrondieCouloirBacklight.jpeg"
                alt="Couloir bordé d'une menuiserie toute hauteur beige à angle arrondi : un bandeau lumineux dissimulé au-dessus des portes éclaire le plafond, niche habillée de bois avec assise et tiroir"
                caption="Entrée bordée d'une menuiserie toute hauteur à angle arrondi : la lumière vient d'un bandeau dissimulé derrière la corniche du meuble et rebondit sur le plafond. Aucune source, aucun câble ni appareillage n'est visible dans le couloir ; la niche habillée de bois reçoit une assise et un tiroir, et le sol est un parquet de bois clair. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Photos avant fermeture</h2>
            <p>
              Une bibliothèque de photos datées, prise avant chaque fermeture de cloison, facilite
              toute intervention future — sur ce chantier comme sur les suivants.
            </p>
            {/*
              07/09 : photo ouverte avant rédaction de la légende. Elle montre exactement le moment
              décrit ci-dessus : l'ouvrage est en place, rien n'est encore refermé, chaque point se
              photographie et se vérifie. Fichier 900 × 1600, affiché en aspect-[9/16], son ratio
              natif, dans une colonne étroite plutôt que dans un cadre paysage qui en couperait les
              deux tiers.

              chPortiqueAcierAngleGaine.jpeg (gaine cheminant le long d'un portique acier) devait
              l'accompagner : retirée le jour même, `scripts/surexposition.py` comptait alors sa
              scène sur QUATRE pages (/gros-oeuvre-structure, /ouverture-mur-porteur, un article de
              blog).
            */}
            <div className="mt-4 max-w-xs">
              <MqFig
                src="/photos/chantiers/chOssatureDevantFaienceOrigine.jpeg"
                alt="Ossature métallique montée devant un mur d'origine carrelé de faïence : robinets d'arrêt, attente d'évacuation en PVC et câble noir descendu d'une boîte rouge restent visibles entre les montants"
                caption="Ossature montée devant le mur d'origine carrelé de faïence : deux robinets d'arrêt, une attente d'évacuation en PVC et un câble noir descendu d'une boîte rouge restent tous accessibles entre les montants, sous un châssis neuf posé en partie haute. Rien n'est fermé : chaque point se photographie et se contrôle à la main. Chantier réel des équipes partenaires."
                ratio="aspect-[9/16]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-4">
          {FAQ_COMMUNE.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
              <h3 className="display t-base text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted t-sec leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      <MaillageInterne
        intro="Électricité et plomberie se décident avant la fermeture des cloisons. Ce qui suit détaille le séquencement, les points de contrôle et les arbitrages de budget."
        groupes={[
          {
            titre: "Avant de refermer les murs",
            liens: [
              { href: "/second-oeuvre", label: "Interfaces entre lots techniques" },
              { href: "/detail-invisible", label: "Les réseaux qu'on ne reverra plus" },
              { href: "/renovation-salle-de-bain-maison", label: "Salle de bain : étanchéité et évacuations" },
            ],
          },
          {
            titre: "Projets concernés",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-energetique", label: "Chauffage et ventilation" },
            ],
          },
          {
            titre: "Cadrer le devis",
            liens: [
              { href: "/clinique-du-devis", label: "Lire un devis ligne à ligne" },
              { href: "/garanties-assurances", label: "Garanties et assurances des exécutants" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
