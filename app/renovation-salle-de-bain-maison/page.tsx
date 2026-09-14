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
   image ; six salles de bain de chantier étaient disponibles et inutilisées.
   Tout le reste du gabarit est conservé à l'identique : en-tête, fil d'Ariane, JSON-LD
   Service + BreadcrumbList, FAQ commune (texte inchangé), maillage propre à la page, CTA.
   Si un emplacement « galerie » est un jour ajouté à `SpecialtyPage`, cette page doit y
   revenir. */

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-salle-de-bain-maison" },
  title: "Rénovation de salle de bain | ARCHI PILOTE RÉNOVATION",
  description: "Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage.",
};

const EYEBROW = "Second œuvre";
const LEAD =
  "Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage.";
const TITRE = "Salle de bain : l'étanchéité avant le décor.";

const SECTIONS = [
  {
    titre: "Étanchéité sous carrelage",
    texte: "Prescrire un système adapté et documenter sa mise en œuvre — c'est ce qui décide de la durabilité, bien avant le choix du carrelage.",
  },
  {
    titre: "Ventilation",
    texte: "Une belle salle d'eau mal ventilée se dégrade vite, quels que soient les matériaux choisis.",
  },
  {
    titre: "Joints et entretien",
    texte: "L'époxy peut être pertinent dans certaines zones, mais ne doit jamais être présenté comme une promesse absolue de durée ou d'absence totale de désordre.",
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
      { "@type": "ListItem", position: 3, name: TITRE, item: "https://www.archipiloterenovation.com/renovation-salle-de-bain-maison" },
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
        segments={[{ text: "Salle de bain :" }, { text: "l'étanchéité avant le décor.", serif: true, gradient: true }]}
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

      {/* 06/09 : l'en-tête affichait chSdbCarreauxCiment (alias salleBainBeton), un fichier
          PORTRAIT (900 × 1200) recadré dans un cadre 16/8, et déjà présent sur quatre pages du
          site — l'une des scènes que le client voyait « partout ». Remplacée par une photo
          native paysage, inédite. chSdbCarreauxCiment reste publiée ailleurs. */}
      <section className="relative pb-10">
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-7 text-ivoire/85 t-base leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display t-titre text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <MqSection
        kicker="DOUCHES ET BAIGNOIRES"
        title="Là où l'étanchéité se joue"
        lead="Receveur, caniveau, pente et parois : trois configurations différentes, photographiées l'une terminée, les deux autres avant la fin du lot plomberie."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chSdbCabineDoucheAngleNoire.jpeg"
            alt="Cabine de douche d'angle à profilés noirs et porte coulissante en verre, colonne de douche thermostatique chromée, sol de douche en mosaïque grise avec caniveau linéaire, faïence blanche rectifiée grand format"
            caption="Salle d'eau terminée : cabine d'angle à profilés noirs et porte coulissante, colonne thermostatique avec ciel de pluie, sol de douche en petite mosaïque grise et caniveau linéaire le long de la paroi, faïence blanche rectifiée posée en décalé. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chSdbDoucheReceveurExtraPlat.jpeg"
            alt="Douche à receveur extra-plat blanc et parois de verre sur profilés fins, barre et mitigeur thermostatique chromés, niche de rangement creusée dans la cloison, WC suspendu à côté, sol en carrelage à motif géométrique gris"
            caption="Douche à receveur extra-plat et parois de verre sur profilés fins : barre et mitigeur thermostatiques posés, niche de rangement creusée dans la cloison, WC suspendu à côté. Emballages et petits outils sont encore au sol, sur un carrelage à motif géométrique gris. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chBaignoireIlotColonneChromee.jpeg"
            alt="Baignoire îlot ovale en acrylique blanc posée le long d'un mur en faïence blanche grand format, colonne de robinetterie sur pied chromée avec douchette, attentes de plomberie PER rouge et bleue sortant du mur à droite"
            caption="Baignoire îlot posée et alimentée par une colonne de robinetterie sur pied, avant la fin du lot plomberie : à droite, les attentes PER rouge et bleue et une sortie de robinet restent en saillie du mur. Balai de chantier et gravats encore au sol. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PLANS VASQUE"
        title="Le meuble arrive en dernier, et sans robinetterie"
        lead="Deux salles de bain photographiées au même moment du chantier : le mobilier est en place, les raccordements et les finitions ne le sont pas encore. C'est l'état réel d'une pièce quelques jours avant sa réception."
        wide
      >
        <div className="max-w-3xl">
          <MqFig
            src="/photos/pedagogie/illustration-etancheite-douche.jpg"
            alt="Coupe en écorché d'une paroi et d'un receveur de douche montrant la superposition : support, natte d'étanchéité remontant sur les parois, bande de renfort dans l'angle mur-sol, colle peignée, carrelage et bonde"
            caption="Illustration technique — l'étanchéité d'une douche se joue sous le carrelage : la natte remonte sur les parois et une bande renforce l'angle entre le mur et le sol, là où le carrelage seul finit par fissurer. Dessin d'illustration, pas une photographie de chantier."
            ratio="aspect-[3/2]"
            entier
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          <MqFig
            src="/photos/chantiers/chSdbMeubleTeckDoubleVasque.jpeg"
            alt="Salle de bain en fin de chantier : meuble double vasque en bois clair à portes persiennées, deux vasques à poser en céramique blanche encore sans robinetterie, quincaillerie sous emballage, cuvette suspendue protégée sous film"
            caption="Fin de chantier avant raccordement : le meuble double vasque en bois clair est posé, les deux vasques à poser sont en place mais sans robinetterie, la quincaillerie n'est pas déballée, la cuvette suspendue reste sous film et la boîte d'encastrement est encore ouverte. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chSdbVasqueDoubleTabletteChene.jpeg"
            alt="Plan-vasque double en céramique blanche posé sur une tablette en bois massif portée par un caisson blanc ouvert, deux mitigeurs chromés, grand miroir sans cadre collé au mur, boîte d'encastrement ouverte au-dessus du plan"
            caption="Même salle de bain que la douche à receveur extra-plat montrée plus haut, vue cette fois vers le plan : vasque double posée sur une tablette en bois clair portée par un caisson blanc ouvert, deux mitigeurs montés et grand miroir sans cadre collé au mur. Au-dessus du plan, la boîte d'encastrement est encore ouverte, fils sortis. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <p className="text-muted t-petit leading-relaxed max-w-2xl mt-8">
          Ce qui ne se voit plus sur ces photos — étanchéité sous carrelage, pentes, évacuations —
          est détaillé sur la page{" "}
          <Link href="/detail-invisible" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            le détail invisible
          </Link>
          , et le choix des carrelages et pierres sur la page{" "}
          <Link href="/expertise-carrelage-zellige-travertin" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            carrelage, zellige et travertin
          </Link>
          .
        </p>
      </MqSection>

      {/*
        07/09 : section ajoutée. La page ne montrait que des pièces d'eau à leur stade final,
        alors que son texte d'ouverture affirme que « l'étanchéité et les réseaux décident de la
        durabilité, bien avant le carrelage » — l'illustration disait donc l'inverse du propos.
        Les trois photos ont été ouvertes une par une avant d'écrire les légendes.
        chVasqueMarbreVanite, qui semblait un quatrième candidat, s'est révélée être le fichier
        strictement identique à chSdbVasquesPoseMeubleBeige, déjà publiée sur deux pages : elle
        est écartée. Aucune autre salle de bain n'était disponible en réserve — c'est pourquoi
        deux des trois vues sont des réseaux, ce que le titre annonce.
      */}
      <MqSection
        kicker="RÉSEAUX"
        title="Avant le carrelage : les réseaux, et rien d'autre"
        lead="Ce qui décide de la durabilité d'une salle de bain se pose des semaines avant le premier carreau — et ne se voit plus une fois la pièce livrée."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chNourriceLaitonVanneGenerale.jpeg"
            alt="Nourrice de distribution d'eau en laiton fixée sur des plaques de plâtre hydrofuges vertes, une douzaine de départs équipés chacun d'une vanne quart de tour à manette noire, tubes blancs sertis et maintenus par colliers, vanne générale à manette rouge en bout de ligne"
            caption="Une nourrice, une douzaine de départs : chaque point d'eau part de là, sur sa propre vanne quart de tour, et la manette rouge en bout de ligne coupe l'ensemble. Le tout est fixé sur des plaques hydrofuges, avant fermeture. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chPlomberieVannesRougesBetonDetail.jpeg"
            alt="Distribution d'eau en cours sur un mur en béton brut : antennes grises serties sur raccords laiton, vannes d'arrêt à manette rouge, manchons noirs, collecteurs gris assemblés et repérés au ruban orange, tracés au crayon et repères peints à la bombe sur le mur"
            caption="La même logique un cran plus loin : chaque antenne est sertie sur son raccord laiton et reçoit sa vanne d'arrêt, les collecteurs sont assemblés et repérés au ruban, et les tracés restent lisibles sur le béton — c'est ce relevé qui permettra de retrouver les réseaux une fois la cloison fermée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chVasqueBoisMuraleChantier.jpeg"
            alt="Meuble double vasque suspendu à façade cannelée en bois clair, plan et deux cuvettes moulés d'une seule pièce en blanc, deux mitigeurs dorés brossés posés, mur habillé de grandes dalles blanches veinées de gris et d'ocre, deux réservations rondes encore ouvertes de part et d'autre"
            caption="Le meuble n'arrive qu'à la fin : caisson suspendu à façade cannelée, plan-vasque double moulé d'une seule pièce et mitigeurs posés. De part et d'autre, deux réservations restent ouvertes dans le parement, une notice traîne encore dans la cuvette et une chute de bois attend au sol. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <p className="text-muted t-petit leading-relaxed max-w-2xl mt-8">
          Le détail de ces réseaux — diamètres, pentes, points de coupure — est repris sur la page{" "}
          <Link href="/electricite-plomberie-renovation" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            électricité et plomberie
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
        intro="Une salle de bain se juge sur ce qui ne se voit plus : étanchéité, pentes, ventilation. Ces pages reprennent chacun de ces points."
        groupes={[
          {
            titre: "L'ouvrage caché",
            liens: [
              { href: "/detail-invisible", label: "Étanchéité et réseaux avant carrelage" },
              { href: "/electricite-plomberie-renovation", label: "Alimentation et évacuations" },
              { href: "/renovation-energetique", label: "Ventilation et condensation" },
            ],
          },
          {
            titre: "Matières et finitions",
            liens: [
              { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige et travertin" },
              { href: "/sols-finitions-renovation", label: "Sols et finitions" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Meuble vasque sur mesure" },
            ],
          },
          {
            titre: "Cadrer le projet",
            liens: [
              { href: "/clinique-du-devis", label: "Vérifier le devis avant de signer" },
              { href: "/renovation-appartement", label: "Salle de bain en appartement" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
