import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { MaillageInterne } from "../components/local-page";
import { CtaFinal } from "../components/cta-final";
import { MqFig } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/sols-finitions-renovation" },
  title: "Sols et finitions | ARCHI PILOTE RÉNOVATION",
  description: "Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé.",
};

/*
  07/09/2026 — cette page n'utilise plus le gabarit `SpecialtyPage`.

  Motif : le gabarit n'expose qu'UN emplacement d'image (le visuel d'en-tête) et son prop
  `sections` rend son texte dans un <p>, où l'on ne peut pas glisser une <figure> sans produire
  du HTML invalide. Le client reproche à cette page de n'avoir qu'une seule image, alors que deux
  photos de chantier inemployées montrent littéralement l'un de ses intitulés — « Protection en
  fin de chantier » : un sol sous film et un escalier emballé pendant que les derniers lots
  travaillent. Le gabarit est donc déplié ici, comme il l'avait déjà été le 06/09 pour
  /renovation-cuisine-maison, sans modifier app/components/specialty-page.tsx (partagé avec
  d'autres pages). Tout le reste est conservé à l'identique : en-tête, fil d'Ariane, JSON-LD
  Service + BreadcrumbList, FAQ commune (texte inchangé), maillage propre à la page, CTA.

  Deux corrections au passage :
  - chParquetVitrifie.jpeg est un PORTRAIT (1050 × 1400) que le gabarit affichait en
    aspect-[16/8] : la moitié de la pièce était hors cadre, cheminée comprise. Il passe à son
    ratio natif 3/4 ;
  - le gabarit suffixait la légende par « — Illustration, non contractuelle », y compris sur
    cette photo de chantier réel. La mention exacte est désormais écrite dans chaque légende.

  Les photos « Parquet et boiseries » du client (chParquetChevronsCacheRadiateur.jpeg,
  chParquetChevronsCouloirDeuxTeintes.jpeg) restent sur /savoir-faire-ancien : elles y illustrent
  l'ouvrage « Parquets et boiseries » et rien ne justifie de les dupliquer ici.
*/

const EYEBROW = "Second œuvre";
const LEAD =
  "Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé.";
const TITRE = "Sols et finitions : la qualité dépend d'abord des supports.";

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
      { "@type": "ListItem", position: 3, name: TITRE, item: "https://www.archipiloterenovation.com/sols-finitions-renovation" },
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
        segments={[{ text: "Sols et finitions :" }, { text: "la qualité dépend d'abord des supports.", serif: true, gradient: true }]}
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

      <section className="relative pb-10">
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-12 text-ivoire/85 t-base leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Planéité et humidité</h2>
            <p>
              Mesurer avant de choisir la finition — un support mal préparé se rappelle toujours au
              bout de quelques mois.
            </p>
            {/*
              07/09 : chIsolationPhoniqueGranulesPlancher2.jpeg (plancher haussmannien déposé
              jusqu'à sa structure) avait d'abord été posée ici. Retirée le jour même :
              `scripts/surexposition.py` comptait alors cette scène — le MÊME plancher ouvert, sous
              plusieurs noms de fichiers — sur CINQ pages (/gros-oeuvre-structure, /realisations,
              /renovation-appartement, /savoir-faire-ancien et un article de blog). C'est exactement
              le « on revoit toujours les mêmes photos » signalé par le client.
              Les autres candidates sont dans le même cas : chSousCouchePanneauxOSB2.jpeg est déjà
              sur trois pages, et chPlancherSolivesBoisRangees.jpeg montre le même plancher que
              ci-dessus. Aucune photo de la photothèque ne documente une mesure d'humidité ni un
              contrôle de planéité : l'emplacement reste vide plutôt que rempli par une image
              approchante.
            */}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Compatibilité des systèmes</h2>
            <p>
              Primaire, colle, ragréage, support et finition doivent fonctionner ensemble, pas être
              choisis indépendamment les uns des autres.
            </p>
            {/*
              07/09 : chCouloirParquetChevronsPorteBois.jpeg avait d'abord été posée ici, pour la
              jonction entre deux calepinages qu'elle montre au droit d'une porte. Retirée le jour
              même : `scripts/surexposition.py` comptait alors sa scène sur QUATRE pages
              (/renovation-appartement, /savoir-faire-ancien, un article de blog, et celle-ci).
              Elle reste sur /savoir-faire-ancien, où sa légende est la plus précise.
            */}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Protection en fin de chantier</h2>
            <p>
              Les finitions posées trop tôt sont souvent abîmées par les derniers lots — le
              séquencement protège aussi le travail déjà fait.
            </p>
            {/*
              07/09 : deux photos inemployées jusqu'ici, ouvertes avant rédaction des légendes.
              Elles montrent littéralement l'intitulé de la section : un sol et un escalier déjà
              finis, mis sous protection pendant que les derniers lots travaillent. Ratios natifs
              respectés (900 × 1600 → 9/16 ; 1200 × 1600 → 3/4), items-start aligne les deux cadres
              par le haut.
            */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              <MqFig
                src="/photos/chantiers/chCouloirPortesBoisJumelles.jpeg"
                alt="Dégagement dont le sol est entièrement recouvert d'un film de protection scotché jusqu'aux plinthes, deux portes en décor bois à vitrage vertical déjà posées"
                caption="Dégagement en fin de chantier : le sol est entièrement recouvert d'un film dont les lés sont scotchés jusque contre les plinthes, alors que les deux portes en décor bois à vitrage vertical et le plafond suspendu sont déjà posés. Ce qui est fini se protège tant que les autres lots circulent. Chantier réel des équipes partenaires."
                ratio="aspect-[9/16]"
              />
              <MqFig
                src="/photos/chantiers/chHabillageMdfSousPente.jpeg"
                alt="Habillage de sous-escalier en panneaux de MDF brut, sol couvert d'un voile de protection à joints scotchés et marches de l'escalier elles-mêmes emballées"
                caption="Habillage de sous-escalier en panneaux de MDF brut, avant peinture : le sol est couvert d'un voile de protection dont les joints sont maintenus au ruban orange, et les marches de l'escalier sont emballées une à une. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
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
        intro="Le revêtement de sol arrive en fin de séquence, mais il dépend de décisions prises bien plus tôt : support, chape, réseaux encastrés et menuiseries."
        groupes={[
          {
            titre: "Ce qui conditionne la pose",
            liens: [
              { href: "/second-oeuvre", label: "Enchaînement des lots de second œuvre" },
              { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige et travertin" },
              { href: "/detail-invisible", label: "Les ouvrages qui disparaissent sous la finition" },
            ],
          },
          {
            titre: "Choisir et budgéter",
            liens: [
              { href: "/achat-direct-materiaux", label: "Acheter son revêtement en direct" },
              { href: "/observatoire-prix-renovation", label: "Repères de prix par poste" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Raccords avec la menuiserie sur mesure" },
            ],
          },
          {
            titre: "Zone d'intervention",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
              { href: "/renovation-ile-de-france", label: "Île-de-France" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
