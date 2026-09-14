import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { MaillageInterne } from "../components/local-page";
import { CtaFinal } from "../components/cta-final";
import { MqSection, MqFig } from "../components/mq";

/* 06/09 : cette page n'utilise plus le gabarit `SpecialtyPage`.
   Motif : le gabarit n'expose aucun emplacement pour des photos hors de l'unique visuel
   d'en-tête, et son prop `sections` rend son texte dans un <p> — y glisser une <figure>
   produirait du HTML invalide. Le client reprochait à cette page de n'avoir qu'une seule
   image ; neuf cuisines de chantier étaient disponibles et inutilisées.
   Tout le reste du gabarit est conservé à l'identique : en-tête, fil d'Ariane, JSON-LD
   Service + BreadcrumbList, FAQ commune (texte inchangé), maillage propre à la page, CTA.
   Si un emplacement « galerie » est un jour ajouté à `SpecialtyPage`, cette page doit y
   revenir. */

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-cuisine-maison" },
  title: "Rénovation de cuisine | ARCHI PILOTE RÉNOVATION",
  description: "La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports.",
};

const EYEBROW = "Second œuvre";
const LEAD =
  "La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports.";
const TITRE = "Cuisine : décider les réseaux avant les façades.";

/*
  07/09 : chacun des trois intitulés reçoit la photo qui montre RÉELLEMENT l'ouvrage qu'il nomme.
  Les trois fichiers étaient inemployés sur le site et ont été ouverts avant rédaction des
  légendes ; chaque cadre reprend le ratio natif du fichier (900 × 1600 → 9/16,
  1600 × 1200 → 4/3, 1200 × 1600 → 3/4). Aucune des trois n'est annoncée comme « livrée » :
  sur les trois chantiers, il reste des outils au sol, un caisson sans façade ou les plans de
  pose scotchés au mur.
*/
const SECTIONS = [
  {
    titre: "Plan fonctionnel",
    texte: "Circulations, hauteurs, points d'eau, cuisson et éclairage — l'implantation se décide avant le style.",
    photo: {
      src: "/photos/chantiers/chCuisineAnthraciteCarreauxVue2.jpeg",
      alt: "Cuisine en U dans une pièce étroite : évier sous la fenêtre, plaque et four au centre entre deux colonnes, façades noir brillant à poignées cuivrées, carrelage à motif de losanges au sol",
      caption:
        "Implantation en U dans une pièce étroite : évier sous la fenêtre, plaque de cuisson et four encastrés au centre entre deux colonnes, plan de travail blanc filant jusqu'au retour, prises alignées au-dessus du plan et spots encastrés au plafond. Le carrelage à motif de losanges s'arrête net sur le parquet clair de la pièce voisine ; un seau et des outils sont encore posés au premier plan. Chantier réel des équipes partenaires.",
      ratio: "aspect-[9/16]",
      cadre: "max-w-xs",
    },
  },
  {
    titre: "Standard et sur-mesure",
    texte: "Des caissons standards peuvent être habillés de façades spécifiques pour arbitrer entre budget et rendu, sans sacrifier l'un pour l'autre.",
    photo: {
      src: "/photos/chantiers/chCuisineBlancheElectromenagerLG.jpeg",
      alt: "Cuisine blanc brillant en cours de finition : entre la colonne du four et le réfrigérateur, un caisson reste nu, tablettes et perçages apparents, sans façade",
      caption:
        "La distinction entre le caisson et la façade, en une image : entre la colonne du four et le réfrigérateur, un caisson est encore nu — tablettes et perçages de crémaillère apparents — alors que les meubles voisins ont déjà reçu leurs façades blanc brillant. Le réfrigérateur porte encore ses étiquettes de livraison. Chantier réel des équipes partenaires.",
      ratio: "aspect-[4/3]",
      cadre: "",
    },
  },
  {
    titre: "Commandes longues",
    texte: "Plan de travail, façades, électroménager et menuiseries doivent être intégrés au planning tôt — ce sont souvent les délais les plus longs du chantier.",
    photo: {
      src: "/photos/chantiers/chCuisineBlanchePendantsFinie.jpeg",
      alt: "Cuisine en U en fin de pose : façades blanc brillant sans poignée, plans de travail en décor bois, trois suspensions au-dessus du retour bar, plans de pose scotchés au mur",
      caption:
        "Fin de pose : façades blanc brillant sans poignée, colonnes de four et de micro-ondes, plans de travail en décor bois, évier et robinetterie noirs, trois suspensions alignées au-dessus du retour formant bar. Les plans de pose sont restés scotchés au mur, à droite, et le sol passe du carrelage effet marbre au décor bois côté séjour. Chantier réel des équipes partenaires.",
      ratio: "aspect-[3/4]",
      cadre: "max-w-sm",
    },
  },
];

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
      { "@type": "ListItem", position: 3, name: TITRE, item: "https://www.archipiloterenovation.com/renovation-cuisine-maison" },
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
        segments={[{ text: "Cuisine :" }, { text: "décider les réseaux avant les façades.", serif: true, gradient: true }]}
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

      {/* 06/09 : l'en-tête affichait chCuisineSauge, un fichier PORTRAIT (1350 × 1600) recadré
          dans un cadre 16/8 — plus de la moitié de la pièce était perdue. Remplacée par une
          photo native paysage, dans un cadre 3/2 qui la recoupe à peine. chCuisineSauge reste
          publiée dans la galerie de /realisations. */}
      <section className="relative pb-10">
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-12 text-ivoire/85 t-base leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display t-titre text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
              <div className={`mt-4 ${s.photo.cadre}`}>
                <MqFig src={s.photo.src} alt={s.photo.alt} caption={s.photo.caption} ratio={s.photo.ratio} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <MqSection
        kicker="CUISINES LIVRÉES"
        title="Trois cuisines rendues à leurs occupants"
        lead="Trois implantations, trois budgets, la même méthode : relevé du volume, arbitrage des façades, puis pose et raccordements par les entreprises partenaires."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chCuisineLCheneGrisFonce.jpeg"
            alt="Petite cuisine en L à façades décor chêne gris foncé sans poignée, plan de travail et crédence blancs légèrement veinés, four encastré, retour formant bar, sol en parquet posé à chevrons"
            caption="Cuisine en L livrée et occupée : façades sans poignée en décor chêne gris foncé, colonnes toute hauteur intégrant le réfrigérateur, plan de travail et crédence blancs légèrement veinés, retour formant bar et spots noirs encastrés. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBlancLaqueDoubleFour.jpeg"
            alt="Cuisine en L blanc laqué brillant sans poignée, colonne toute hauteur intégrant deux fours superposés, plan de travail et crédence en décor bois, sol en grands carreaux polis effet marbre"
            caption="Cuisine en L livrée : façades blanc laqué brillant sans poignée, colonne toute hauteur intégrant deux fours superposés, plan de travail et crédence en décor bois, plan-repas en retour au-dessus du radiateur et sol en grands carreaux polis effet marbre blanc veiné. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineBleuVifPoigneesCoquille.jpeg"
            alt="Cuisine linéaire à façades bleu vif brillantes et poignées coquille noires, plan de travail et crédence en décor marbre noir veiné, table de cuisson gaz et four encastré"
            caption="Cuisine linéaire dans un logement ancien : façades bleu vif brillantes à poignées coquille noires, colonnes toute hauteur, plan de travail et crédence en décor marbre noir veiné, table de cuisson gaz et évier noir. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="AVANT LA RÉCEPTION"
        title="À quoi ressemble une cuisine juste avant la fin"
        lead="Ces cinq vues sont prises avant les derniers raccordements. C'est le moment où l'on vérifie ce que la page décrit plus haut : les réseaux sont arrêtés, les façades sont posées, il reste l'électricité, l'eau et les luminaires."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chCuisineBleuCielIlotLaque.jpeg"
            alt="Cuisine ouverte en fin de chantier : linéaire de façades bleu ciel brillantes toute hauteur, four et micro-ondes en colonne, îlot blanc coiffé d'un plan de travail en bois foncé assemblé à chevrons"
            caption="Linéaire de façades bleu ciel brillantes toute hauteur, four et micro-ondes en colonne, îlot blanc coiffé d'un plan de travail en bois foncé assemblé à chevrons. Les plans de pose sont encore scotchés sur la crédence, deux sorties de fils attendent leurs suspensions et l'aspirateur de chantier est resté au fond. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineCouloirNoirMatHotte.jpeg"
            alt="Cuisine en couloir : deux linéaires face à face, façades basses noir mat sans poignée, meubles hauts blanc et noir mat, plans de travail en bois clair, fenêtre donnant sur les toits parisiens"
            caption="Cuisine en couloir, deux linéaires face à face : façades basses noir mat sans poignée, meubles hauts blanc et noir mat, plans de travail en bois clair, évier noir à égouttoir et sol en grès cérame gris grand format. L'ampoule pend encore au plafond. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBlancMatLaveLinge.jpeg"
            alt="Cuisine en L blanc mat sans poignée, plan de travail et crédence gris anthracite, lave-linge glissé sous le plan à côté de l'évier inox, réfrigérateur dans une niche en plaques de plâtre"
            caption="Cuisine en L blanc mat, plan de travail et crédence gris anthracite : le lave-linge est glissé sous le plan à côté de l'évier, l'étiquette du constructeur est encore collée sur le four et deux douilles de suspension pendent sans luminaire. Le réfrigérateur occupe une niche en plaques de plâtre non habillée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBleuVifColonnes.jpeg"
            alt="Cuisine en L à façades bleu vif brillantes aux chants blancs apparents, colonnes toute hauteur avec micro-ondes encastré, plan de travail noir, évier inox, sol en grès cérame anthracite"
            caption="Cuisine en L à façades bleu vif brillantes, chants blancs apparents : colonnes toute hauteur avec micro-ondes encastré, plan de travail noir, évier inox à égouttoir et four encastré. La douille pend encore au plafond et la sortie de ventilation reste apparente. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLineaireBlancPanneauBleu.jpeg"
            alt="Cuisine linéaire blanc mat en fin de pose, colonne habillée d'un panneau bleu, étagères murales en bois clair, plan-bar en bois au premier plan, sol couvert de panneaux de protection"
            caption="Cuisine linéaire en fin de pose : caissons blanc mat sans poignée, colonne habillée d'un panneau bleu, étagères murales en bois clair, plan de travail en décor bois, évier blanc à égouttoir et réglette allumée sous les meubles hauts. Le sol est encore couvert de ses panneaux de protection. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
        <p className="text-muted t-petit leading-relaxed max-w-2xl mt-8">
          Les façades, les plans de travail et l&apos;électroménager visibles sur ces photos ont été
          choisis chantier par chantier : les modalités d&apos;achat sont décrites sur la page{" "}
          <Link href="/achat-direct-materiaux" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            achat direct des matériaux
          </Link>
          , et l&apos;arbitrage entre caissons standards et sur-mesure sur la page{" "}
          <Link href="/menuiserie-agencement-sur-mesure" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            menuiserie et agencement sur mesure
          </Link>
          .
        </p>
      </MqSection>

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
        intro="Une cuisine se dessine avant les réseaux, pas après. Ces pages détaillent l'implantation, la fabrication sur mesure et les postes où l'achat direct change le budget."
        groupes={[
          {
            titre: "Concevoir et fabriquer",
            liens: [
              { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie et agencement sur mesure" },
              { href: "/expertise-carrelage-zellige-travertin", label: "Crédence : carrelage, zellige, pierre" },
              { href: "/sols-finitions-renovation", label: "Revêtements de sol" },
            ],
          },
          {
            titre: "Ce qui doit être arrêté avant",
            liens: [
              { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie" },
              { href: "/second-oeuvre", label: "Ordre d'intervention des lots" },
              { href: "/ouverture-mur-porteur", label: "Ouvrir sur le séjour : mur porteur" },
            ],
          },
          {
            titre: "Budget et réalisations",
            liens: [
              { href: "/achat-direct-materiaux", label: "Achat direct des éléments de cuisine" },
              { href: "/realisations", label: "Cuisines livrées" },
              { href: "/renovation-ile-de-france", label: "Île-de-France" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
