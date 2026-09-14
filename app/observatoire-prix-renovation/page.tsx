import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqNumbered, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/observatoire-prix-renovation" },
  title: "Observatoire des prix de rénovation en Île-de-France | ARCHI PILOTE RÉNOVATION",
  description:
    "Fourchettes de prix indicatives et datées par poste de travaux en Île-de-France : démolition, plomberie, électricité, cloisons, isolation, mur porteur, carottage et plus.",
};

// `href` : page du site qui décrit les travaux correspondant au poste (maillage interne).
const FOURCHETTES = [
  { poste: "Démolition / dépose", unite: "m² ou forfait pièce", prix: "20 – 60 € / m²", min: 20, max: 60, href: "/gros-oeuvre-structure" },
  { poste: "Plomberie (rénovation complète)", unite: "point d'eau", prix: "400 – 900 € / point", min: 400, max: 900, href: "/electricite-plomberie-renovation" },
  { poste: "Électricité (mise aux normes)", unite: "m² habitable", prix: "70 – 130 € / m²", min: 70, max: 130, href: "/electricite-plomberie-renovation" },
  { poste: "Cloisons (placo sur ossature)", unite: "m²", prix: "45 – 90 € / m²", min: 45, max: 90, href: "/second-oeuvre" },
  { poste: "Peinture (préparation incluse)", unite: "m² au sol", prix: "25 – 55 € / m²", min: 25, max: 55, href: "/sols-finitions-renovation" },
  { poste: "Carrelage (pose incluse)", unite: "m²", prix: "50 – 110 € / m²", min: 50, max: 110, href: "/expertise-carrelage-zellige-travertin" },
  { poste: "Menuiseries extérieures", unite: "unité posée", prix: "500 – 1 400 € / fenêtre", min: 500, max: 1400, href: "/menuiserie-agencement-sur-mesure" },
  { poste: "Isolation thermique (intérieure)", unite: "m² de paroi", prix: "40 – 90 € / m²", min: 40, max: 90, href: "/renovation-energetique" },
  { poste: "Ventilation (VMC simple à double flux)", unite: "logement", prix: "1 500 – 6 000 € / logement", min: 1500, max: 6000, href: "/renovation-energetique" },
  { poste: "Ouverture de mur porteur", unite: "ouverture", prix: "3 000 – 9 000 € / ouverture", min: 3000, max: 9000, href: "/ouverture-mur-porteur" },
  { poste: "Carottage (diagnostic ou passage réseau)", unite: "forage", prix: "150 – 450 € / forage", min: 150, max: 450, href: "/chantiers-complexes" },
];

// Échelle logarithmique commune au graphique (les postes ci-dessus vont de 20 € à 9 000 €).
const PRIX_SCALE_MIN = 20;
const PRIX_SCALE_MAX = 9000;
function prixToPercent(valeur: number) {
  const a = Math.log10(PRIX_SCALE_MIN);
  const b = Math.log10(PRIX_SCALE_MAX);
  return ((Math.log10(valeur) - a) / (b - a)) * 100;
}

// Six curseurs déjà décrits en toutes lettres dans la section « Ce qui déplace le prix »
// ci-dessous : mêmes intitulés, reformulés en paire de pôles bas/haut pour l'infographie.
const FACTEURS_PRIX = [
  { label: "Surface concernée", bas: "Chantier réduit", haut: "Grande surface" },
  { label: "État initial du bâti", bas: "Support sain", haut: "Support dégradé" },
  { label: "Structure du bâtiment", bas: "Structure simple", haut: "Porteurs, planchers complexes" },
  { label: "Accès au chantier", bas: "Accès facile", haut: "Accès contraint" },
  { label: "Gamme de matériaux", bas: "Entrée de gamme", haut: "Haut de gamme" },
  { label: "Délai souhaité", bas: "Délai standard", haut: "Délai accéléré" },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="PREUVES — DONNÉES"
        title="Observatoire des prix de rénovation en Île-de-France"
        lead="Combien coûte réellement une ouverture de mur porteur, une isolation ou un carrelage en Île-de-France ? Cet observatoire publie des fourchettes indicatives, datées et classées par poste, établies à partir d'exemples représentatifs de projets accompagnés. Chaque fourchette précise son périmètre et ses limites : elle sert de repère pour préparer un budget, jamais de prix garanti pour un projet donné."
      />

      <MqSection
        kicker="AVERTISSEMENT"
        title="Des repères indicatifs, pas des prix garantis"
        lead="Toute fourchette de prix publiée ici est datée et limitée à l'Île-de-France ; elle ne remplace pas un chiffrage sur mesure."
      >
        <MqProse>
          <p>
            Les montants indiqués correspondent à des exemples représentatifs de projets accompagnés en
            Île-de-France sur la période premier semestre 2024. Ils dépendent fortement de l'état du bâti, de
            l'accès au chantier et de la gamme choisie. Ils ne constituent ni une offre commerciale ni un
            engagement de prix pour un projet particulier. Seule une étude de projet permet d'établir un budget
            fiable pour un logement donné.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        kicker="DONNÉES"
        title="Fourchettes de prix indicatives par poste de travaux"
        lead="Fourniture et pose, hors remise liée à l'achat direct de matériaux par le client, sur la base des projets accompagnés en Île-de-France."
      >
        <div
          role="img"
          aria-label="Fourchettes de prix de rénovation observées en Île-de-France, par poste de travaux, premier semestre 2024."
          className="border border-line bg-surface rounded-none overflow-hidden"
        >
          <div className="px-5 pt-5 pb-1 flex items-baseline justify-between gap-4 flex-wrap">
            <h3 className="display t-base text-ivoire">Fourchettes de prix par poste (échelle logarithmique)</h3>
            <span className="text-muted t-micro whitespace-nowrap">Île-de-France · 1er semestre 2024</span>
          </div>
          <div className="px-5 pt-4 pb-2 flex flex-col gap-3">
            {FOURCHETTES.map((r) => {
              const left = prixToPercent(r.min);
              const right = prixToPercent(r.max);
              return (
                <div key={r.poste} className="grid grid-cols-[8rem_1fr_6.5rem] sm:grid-cols-[13rem_1fr_7rem] items-center gap-3">
                  <span className="t-micro text-ivoire/85 leading-snug">{r.poste}</span>
                  <div className="relative h-2 bg-line/50 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 bg-orange-deep/75 rounded-full"
                      style={{ left: `${left}%`, width: `${Math.max(right - left, 1.2)}%` }}
                    />
                  </div>
                  <span className="t-micro text-muted text-right whitespace-nowrap">{r.prix}</span>
                </div>
              );
            })}
            <div className="grid grid-cols-[8rem_1fr_6.5rem] sm:grid-cols-[13rem_1fr_7rem] gap-3 mt-1">
              <span aria-hidden />
              <div className="relative h-4 t-micro text-muted">
                <span className="absolute" style={{ left: `${prixToPercent(100)}%` }}>100 €</span>
                <span className="absolute" style={{ left: `${prixToPercent(1000)}%` }}>1 000 €</span>
                <span className="absolute" style={{ left: `${prixToPercent(9000)}%`, transform: "translateX(-100%)" }}>9 000 €</span>
              </div>
              <span aria-hidden />
            </div>
          </div>
          <p className="px-5 pb-5 pt-2 t-micro text-muted leading-snug border-t border-line mt-2">
            Fourchettes de prix de rénovation observées en Île-de-France, par poste de travaux — premier semestre 2024,
            à partir d&apos;exemples représentatifs de projets accompagnés. Échelle logarithmique commune : l&apos;unité de
            référence diffère selon le poste (m², point, unité posée, logement, ouverture, forage — voir le tableau
            ci-dessous).
          </p>
        </div>
        <div className="overflow-x-auto border border-line rounded-none mt-8">
          <table className="w-full min-w-[40rem] text-left t-sec">
            <thead>
              <tr className="border-b border-line">
                <th className="px-4 py-3 font-semibold text-ivoire">Poste de travaux</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Unité de référence</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Fourchette indicative (premier semestre 2024)</th>
              </tr>
            </thead>
            <tbody>
              {FOURCHETTES.map((r) => (
                <tr key={r.poste} className="border-b border-line last:border-b-0 align-top">
                  <td className="px-4 py-3 font-medium text-ivoire">
                    <Link href={r.href} className="hover:text-orange-deep transition-colors underline underline-offset-4 decoration-line">
                      {r.poste}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted leading-relaxed">{r.unite}</td>
                  <td className="px-4 py-3 text-ivoire/85 leading-relaxed whitespace-nowrap">{r.prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted t-petit leading-relaxed mt-4 max-w-2xl">
          Données indicatives, Île-de-France, premier semestre 2024. Fourchettes établies à partir d'un ensemble
          d'exemples représentatifs de projets accompagnés, hors matériaux achetés en direct par le client.
          Chaque intitulé de poste renvoie vers la page qui décrit les travaux correspondants.
        </p>
      </MqSection>

      <MqSection
        kicker="FACTEURS DE VARIATION"
        title="Ce qui déplace le prix d'un même poste"
        lead="Six variables expliquent l'essentiel de l'écart entre le bas et le haut de chaque fourchette."
      >
        <div
          role="img"
          aria-label="Facteurs qui font varier le prix d'un même poste de rénovation."
          className="border border-line bg-surface rounded-none overflow-hidden"
        >
          <div className="px-5 pt-5 pb-1">
            <h3 className="display t-base text-ivoire">Six curseurs qui font bouger le prix d&apos;un même poste</h3>
          </div>
          <div className="px-5 pt-3 pb-2 flex flex-col gap-5">
            {FACTEURS_PRIX.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="t-petit font-medium text-ivoire">{f.label}</span>
                <div className="relative h-1.5 bg-line rounded-full">
                  <div
                    aria-hidden
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-orange-deep border-2 border-surface"
                  />
                </div>
                <div className="flex justify-between t-micro text-muted">
                  <span>{f.bas}</span>
                  <span>{f.haut}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="px-5 pb-5 pt-2 t-micro text-muted leading-snug border-t border-line mt-2">
            Position illustrative : chaque projet se situe différemment sur ces six curseurs, dans un sens ou dans
            l&apos;autre selon la configuration réelle du logement — voir le détail de chaque facteur ci-dessous.
          </p>
        </div>
        <div className="mt-8">
          <MqChecklist
            cols={1}
            items={[
              "Surface concernée : un chantier réduit supporte moins bien les coûts fixes de mobilisation.",
              "État initial du bâti : un support dégradé impose des travaux préparatoires non visibles au premier diagnostic.",
              "Structure du bâtiment : porteurs, planchers et charges conditionnent la complexité d'une ouverture ou d'un carottage.",
              "Accès au chantier : étage sans ascenseur, cour étroite ou copropriété contrainte augmentent le temps de mise en œuvre.",
              "Gamme de matériaux : un carrelage ou une menuiserie d'entrée de gamme et un produit haut de gamme n'ont pas le même prix au m².",
              "Délai souhaité : une exécution accélérée mobilise davantage de main-d'œuvre simultanée, ce qui a un coût.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="MÉTHODE"
        title="Comment les données de l'observatoire sont préparées"
        lead="La méthode compte autant que le chiffre : collecte, nettoyage, classement, mise à jour et publication des limites."
      >
        <MqNumbered
          items={[
            {
              title: "Collecte des données",
              text: "Les montants proviennent des devis analysés et des chantiers accompagnés en Île-de-France, avant application de toute remise liée à l'achat direct de matériaux.",
            },
            {
              title: "Nettoyage des données",
              text: "Les montants incohérents, incomplets ou associés à un périmètre non identifiable sont écartés avant tout calcul de fourchette.",
            },
            {
              title: "Classement par poste homogène",
              text: "Chaque montant est rattaché à un poste unique et à une unité de mesure cohérente (m², point, unité posée) pour permettre la comparaison.",
            },
            {
              title: "Mise à jour périodique",
              text: "Les fourchettes sont revues à intervalle régulier pour tenir compte de l'évolution des prix des matériaux et de la main-d'œuvre en Île-de-France.",
            },
            {
              title: "Publication des limites",
              text: "Le nombre d'observations, la région et la période sont indiqués avec chaque fourchette, avec un rappel explicite de son caractère indicatif.",
            },
          ]}
        />
      </MqSection>

      <MqSection
        kicker="EXEMPLE DE SOURCE"
        title="Un point de données, son contexte"
        lead="Chaque fourchette repose sur des cas dont le périmètre est connu, jamais sur des moyennes anonymes sans contexte."
      >
        <h3 className="display t-haut text-ivoire">Exemple représentatif : ouverture de mur porteur en appartement parisien</h3>
        <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
          Un cas type illustre comment un montant s'intègre dans l'observatoire, sans valeur de preuve
          individuelle.
        </p>
        <div className="mt-4">
          <MqProse>
            <p>
              Ouverture d'un mur porteur de 1,80 mètre entre cuisine et séjour dans un immeuble ancien, avec pose
              d'un IPN et reprise de charge validée par un ingénieur structure partenaire indépendant. Ce cas,
              anonymisé et présenté comme un exemple représentatif, se situe dans le haut de la fourchette
              « ouverture de mur porteur » en raison de la reprise de charge nécessaire. Il ne permet pas de
              déduire le prix d'une ouverture dans un mur en parpaing d'une maison individuelle, dont la
              structure diffère.
            </p>
          </MqProse>
        </div>
        <div className="mt-8">
          {/* 05/09 — PHOTO REMPLACÉE. chPoutreAcierPlafondMurDegarni.jpeg et
              chPortiqueAcierAngleFenetre.jpeg sont le MÊME fichier (empreinte MD5 identique,
              0f35247f0161fa03e1e0caa2a5ec87dd) enregistré sous deux noms : le visiteur voyait donc
              la même photographie ici, sur /realisations, sur /gros-oeuvre-structure et dans un
              article de blog, sans qu'aucune recherche textuelle ne puisse le montrer. Elle est
              remplacée ici par chPoutreAcierMurDegarni.jpeg, une autre prise du même type d'ouvrage
              (poutre soudée sur poteau, mur dégarni jusqu'à la pierre), affichée sur une seule
              autre page du site. La scène en doublon passe ainsi de quatre pages à trois. */}
          <MqFig
            src="/photos/chantiers/chPoutreAcierMurDegarni.jpeg"
            alt="Poteau acier soudé sous une poutre de reprise de charge, mur dégarni jusqu'à la pierre et gaine électrique apparente"
            caption="Poteau acier soudé sous la poutre de reprise de charge, dans l'angle d'une ouverture : le mur est dégarni jusqu'à la pierre, la gaine électrique court à nu et le tableau n'est pas encore repris. C'est cet état-là que chiffre une ligne « ouverture de mur porteur ». Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PASSER DU REPÈRE AU BUDGET"
        title="Ce qu'il faut lire pour transformer une fourchette en enveloppe"
        lead="Une fourchette situe un ordre de grandeur. Le budget d'un projet, lui, se construit à partir du logement réel, du périmètre du devis et du mode d'achat des matériaux."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <h3 className="display t-base text-ivoire">Chiffrer et vérifier</h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/estimateur-travaux" className="text-orange-deep hover:underline t-sec">Estimer une enveloppe de travaux en quelques questions</Link></li>
              <li><Link href="/clinique-du-devis" className="text-orange-deep hover:underline t-sec">Lire un devis de travaux ligne à ligne</Link></li>
              <li><Link href="/modele-economique-transparence" className="text-orange-deep hover:underline t-sec">Qui facture quoi : le modèle économique détaillé</Link></li>
              <li><Link href="/achat-direct-materiaux" className="text-orange-deep hover:underline t-sec">Acheter les matériaux en direct, à votre nom</Link></li>
              <li><Link href="/aides-renovation-energetique" className="text-orange-deep hover:underline t-sec">Les aides mobilisables sur les travaux énergétiques</Link></li>
              <li><Link href="/services" className="text-orange-deep hover:underline t-sec">L&apos;index complet des prestations pilotées</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="display t-base text-ivoire">Articles du blog sur le budget et le devis</h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/blog/prix-renovation-maison-2026" className="text-orange-deep hover:underline t-sec">Ce que coûtent des travaux de rénovation de maison en 2026</Link></li>
              <li><Link href="/blog/devis-travaux-lignes-a-verifier" className="text-orange-deep hover:underline t-sec">Les lignes d&apos;un devis à vérifier avant de signer</Link></li>
              <li><Link href="/blog/cuisine-sur-mesure-ou-caissons-standards" className="text-orange-deep hover:underline t-sec">Cuisine sur mesure ou caissons standards : où se joue l&apos;économie</Link></li>
              <li><Link href="/blog/parquet-massif-contrecolle-stratifie" className="text-orange-deep hover:underline t-sec">Parquet massif, contrecollé ou stratifié : quel revêtement pour quel usage</Link></li>
              <li><Link href="/blog/maprimerenov-cee-2026" className="text-orange-deep hover:underline t-sec">MaPrimeRénov&apos; et CEE : ce qu&apos;il faut vérifier avant de compter sur une aide</Link></li>
              <li><Link href="/blog/ipn-hea-heb-choix-profile" className="text-orange-deep hover:underline t-sec">IPN, HEA ou HEB : ce que change le choix du profilé</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-muted t-petit leading-relaxed mt-8 max-w-2xl">
          Ces repères valent pour la zone dans laquelle les projets sont accompagnés :{" "}
          <Link href="/renovation-hauts-de-seine-92" className="text-orange-deep hover:underline">les Hauts-de-Seine (92)</Link>
          {" "}en priorité et, selon l&apos;ampleur du chantier,{" "}
          <Link href="/renovation-ile-de-france" className="text-orange-deep hover:underline">le reste de l&apos;Île-de-France</Link>.
          Le vocabulaire employé dans les devis est détaillé dans{" "}
          <Link href="/glossaire-renovation" className="text-orange-deep hover:underline">le glossaire technique</Link>.
        </p>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Ce que les porteurs de projet demandent sur ces prix">
        <MqFaq
          items={[
            {
              q: "Ces prix sont-ils garantis pour mon projet ?",
              a: "Non. Ces fourchettes sont indicatives et datées, établies à partir d'exemples représentatifs de projets accompagnés en Île-de-France. Le prix réel d'un poste dépend de l'état du bâti, de l'accès au chantier, de la gamme de matériaux choisie et des contraintes propres au logement.",
            },
            {
              q: "Pourquoi les fourchettes de prix sont-elles aussi larges ?",
              a: "Un même poste, comme l'ouverture d'un mur porteur, peut nécessiter un simple linteau ou une reprise de charge complexe avec étude d'ingénieur. La largeur de la fourchette reflète la diversité réelle des situations rencontrées, pas une imprécision de méthode.",
            },
            {
              q: "Ces prix incluent-ils la fourniture des matériaux ?",
              a: "Les fourchettes indiquées couvrent fourniture et pose telles que généralement facturées par une entreprise partenaire contractante. Lorsque le client achète les matériaux en direct, comme le permet notre modèle économique, le montant final peut être inférieur.",
            },
            {
              q: "Ces prix sont-ils valables en dehors de l'Île-de-France ?",
              a: "Non. Ces données concernent spécifiquement le marché francilien, où le coût de la main-d'œuvre et les contraintes d'accès diffèrent souvent d'autres régions. Utiliser ces fourchettes hors Île-de-France exposerait à des écarts importants.",
            },
            {
              q: "À quelle fréquence l'observatoire est-il mis à jour ?",
              a: "Les fourchettes sont revues périodiquement pour suivre l'évolution du coût des matériaux et de la main-d'œuvre. La période de référence est systématiquement indiquée pour que chaque donnée reste datée et vérifiable.",
            },
          ]}
        />
        <p className="text-muted t-petit leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqReadNext
        items={[
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyser un devis ligne à ligne" },
          { href: "/modele-economique-transparence", label: "Modèle économique & transparence", sub: "Achats en direct, au prix fournisseur" },
          { href: "/realisations", label: "Réalisations", sub: "Cas datés et documentés" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Une enveloppe en quelques questions" },
          { href: "/achat-direct-materiaux", label: "Achat direct des matériaux", sub: "Facture à votre nom, sans marge" },
          { href: "/guides", label: "Guides & conseils", sub: "Les articles classés par sujet" },
        ]}
      />

      <MqCta
        title="Obtenez un budget réaliste pour votre projet"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : budget établi à partir de votre logement, pas d'une moyenne générale."
      />
    </main>
  );
}
