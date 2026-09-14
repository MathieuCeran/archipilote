import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/achat-direct-materiaux" },
  title: "Achat direct des matériaux : le client paie le prix fournisseur | ARCHI PILOTE RÉNOVATION",
  description:
    "Carrelage, robinetterie, parquet, cuisines et façades sur mesure achetés en direct par le client, sans marge d'intermédiation : le modèle économique d'ARCHI PILOTE RÉNOVATION à Paris et en Île-de-France.",
};

const POSTES = [
  {
    title: "Carrelage et faïence",
    text: "Grès cérame, zellige, travertin, pierre naturelle : le client achète, l'entreprise partenaire pose et reste responsable de l'étanchéité et de la planéité du support.",
  },
  {
    title: "Robinetterie et sanitaires",
    text: "Mitigeurs, colonnes de douche, vasques, receveurs et quincaillerie laiton : un poste où l'écart entre prix public négocié et prix revendu est parmi les plus élevés.",
  },
  {
    title: "Parquet et revêtements",
    text: "Chêne massif, contrecollé, plinthes et profils de seuil. La sous-couche acoustique et le ragréage, eux, restent fournis par l'entreprise.",
  },
  {
    title: "Cuisines équipées",
    text: "Caissons, façades, plans de travail et électroménager encastré, achetés en direct auprès du fabricant ou de l'atelier, montés par l'entreprise partenaire.",
  },
  {
    title: "Façades et menuiseries sur mesure",
    text: "Façades cannelées en chêne, dressings, bibliothèques, habillages : commande directe à l'atelier, pose et calage assurés par l'entreprise.",
  },
  {
    title: "Luminaires et appareillage de finition",
    text: "Appliques, suspensions, plaques et interrupteurs de finition. L'appareillage encastré et le câblage restent, eux, dans le périmètre de l'électricien.",
  },
];

const ETAPES = [
  {
    title: "Cadrage des postes achetés en direct",
    text: "Le devis est découpé en deux : fourniture posée par l'entreprise pour tout ce qui engage la décennale, fourniture achetée par le client pour le reste. Chaque ligne est identifiée dès le chiffrage.",
  },
  {
    title: "Validation technique des références",
    text: "Chaque référence pressentie est soumise à l'entreprise qui posera : classement d'usage, épaisseur, format, compatibilité avec le système de pose et le support. La validation est écrite.",
  },
  {
    title: "Calcul des quantités et des réserves",
    text: "Les surfaces sont relevées sur place et majorées d'une réserve de coupe et de casse, calculée avec l'entreprise selon le calepinage retenu, en particulier pour le point de Hongrie et le zellige.",
  },
  {
    title: "Négociation et commande",
    text: "Les commandes sont passées par le client auprès des fournisseurs identifiés, notamment Saint-Gobain via La Plateforme du Bâtiment, aux conditions obtenues grâce au volume du réseau.",
  },
  {
    title: "Calage des livraisons sur le planning des lots",
    text: "Les dates sont fixées puis ajustées selon l'avancement réel, documenté chaque jour par photographies, pour éviter la saturation du stockage comme l'immobilisation des équipes.",
  },
  {
    title: "Réception des matériaux et contrôle contradictoire",
    text: "À la livraison, quantités, références, teintes et lots de fabrication sont contrôlés avant déballage complet, pour permettre un recours fournisseur dans les délais.",
  },
];

const FAQ = [
  {
    q: "Quels matériaux le client achète-t-il en direct ?",
    a: "Les postes qui ne relèvent pas de la garantie décennale de l'entreprise qui les met en œuvre : carrelage et faïence, robinetterie et sanitaires, parquet, cuisines équipées, façades et menuiseries sur mesure, luminaires et quincaillerie. Sur ces postes, le client règle le fournisseur au prix obtenu, sans marge d'intermédiation ajoutée.",
  },
  {
    q: "L'achat direct réduit-il la garantie décennale ?",
    a: "Non. La garantie décennale de l'entreprise partenaire porte sur la mise en œuvre, qui reste intégralement de sa responsabilité. Le matériau acheté en direct reste couvert par la garantie du fabricant. C'est précisément pour cette raison que l'achat direct est réservé aux postes hors décennale.",
  },
  {
    q: "Quels matériaux restent fournis par l'entreprise ?",
    a: "Tout ce qui engage la décennale et l'étanchéité : câblage et appareillage électrique, canalisations, nattes et systèmes d'étanchéité sous carrelage, colles et mortiers techniques, isolants, plaques et ossatures, éléments de structure. Sur ces postes, la traçabilité du produit conditionne la couverture de l'ouvrage.",
  },
  {
    q: "Qui valide les références avant commande ?",
    a: "L'entreprise chargée de la pose valide chaque référence avant commande — format, épaisseur, classement d'usage, compatibilité avec le support et le système de pose. Cette validation écrite évite tout refus de pose une fois le matériau livré.",
  },
  {
    q: "Comment sont gérées les livraisons sur un chantier parisien ?",
    a: "Les dates de livraison sont calées sur l'avancement réel des lots, suivi quotidiennement par photographies, et non sur un calendrier théorique. En milieu urbain contraint, une livraison trop précoce sature le stockage, une livraison tardive immobilise l'équipe de pose.",
  },
  {
    q: "Où les matériaux sont-ils approvisionnés ?",
    a: "Principalement auprès du groupe Saint-Gobain via La Plateforme du Bâtiment pour les fournitures courantes, et auprès de fabricants et ateliers spécialisés pour les pièces sur mesure : cuisines, façades, menuiseries, moulures réalisées avec la maison Guimier.",
  },
];

export default function AchatDirectMateriauxPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Modèle économique"
        title="Achat direct des matériaux : le prix fournisseur, sans brider le choix du client"
        lead="ARCHI PILOTE RÉNOVATION fait acheter au client, en direct et sans marge d'intermédiation, tous les matériaux qui ne relèvent pas de la garantie décennale de l'entreprise : carrelage, robinetterie, parquet, cuisines équipées, façades et menuiseries sur mesure, luminaires. La pose reste intégralement assurée par les entreprises partenaires contractantes, couvertes par leur décennale. Ce modèle, issu de la pratique du chiffrage en foncière, sort les marges d'intermédiation du budget de ces postes et libère le choix des matériaux du catalogue d'une entreprise."
      />

      <MqSection
        kicker="Périmètre"
        title="Les six postes achetés en direct par le client"
        lead="Le critère est juridique avant d'être budgétaire : tout ce qui n'engage pas la décennale peut être acheté en direct."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {POSTES.map((p) => (
            <div key={p.title} className="flex flex-col gap-2">
              <span className="mq-mention mq-mention--accent">Hors décennale</span>
              <h3 className="display t-haut text-ivoire">{p.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Ce que l'entreprise continue de fournir, et pourquoi"
        lead="Sur les ouvrages couverts par la décennale, la traçabilité du produit conditionne la couverture."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              {"Un système d'étanchéité sous carrelage, un isolant, une ossature, un câble ou une canalisation engagent la responsabilité décennale de l'entreprise pendant dix ans. Sur ces produits, l'entreprise doit pouvoir justifier de la référence posée, de son avis technique et de sa compatibilité avec le reste du système."}
            </p>
            <p>
              {"Faire acheter ces produits par le client transférerait un risque que personne n'a intérêt à porter. C'est pourquoi la frontière est posée dès le chiffrage, ligne par ligne, plutôt que négociée en cours de chantier."}
            </p>
            <p>
              {"Cette frontière est aussi ce qui rend l'économie durable : le client gagne sur la fourniture visible sans jamais fragiliser la couverture de l'ouvrage caché."}
            </p>
          </MqProse>
          <MqFig
            src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
            alt="Entrepôt de matériaux de construction avec palettes de plaques de plâtre, laine minérale et sacs d'enduit"
            caption="Illustration de référence, hors chantier documenté : dépôt de matériaux de second œuvre (plaques de plâtre, laines, sacs d'enduit). Les matériaux achetés en direct sont facturés au client par le fournisseur, sans marge d'intermédiaire."
          />
          <MqChecklist
            items={[
              "Nattes, bandes et systèmes d'étanchéité sous carrelage : fournis par l'entreprise.",
              "Câblage, appareillage encastré et tableau électrique : fournis par l'électricien.",
              "Canalisations, raccords et organes de coupure : fournis par le plombier.",
              "Isolants, ossatures, plaques et enduits techniques : fournis par le plaquiste.",
              "Éléments de structure, poutres et scellements : fournis par l'entreprise de gros œuvre.",
              "Colles, mortiers et primaires : fournis pour garantir la compatibilité du système.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Méthode"
        title="Les six étapes de l'achat direct, du chiffrage à la réception"
        lead="L'économie ne vient pas de l'achat lui-même mais du cadrage qui le précède."
      >
        <div className="mb-10">
          <MqFig entier
            src="/photos/pedagogie/25-achat-direct-etapes.jpeg"
            alt="Six étapes de l'achat direct de matériaux : cadrage, validation technique, calcul des quantités, négociation, livraison, réception"
            caption="Étapes de l'achat direct des matériaux par le client. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
        <MqNumbered items={ETAPES} />
      </MqSection>

      <MqSection
        title="Ce que l'achat direct change concrètement pour le client"
        lead="Deux effets mesurables : un budget de fourniture réduit et un choix de matériaux libéré."
        wide
      >
        <div className="flex flex-col gap-8">
          <div className="max-w-4xl">
            <MqProse>
              <p>
                {"Premier effet : la marge d'intermédiation appliquée par une entreprise sur la fourniture disparaît des postes concernés. Sur une rénovation complète d'appartement parisien, ces postes représentent couramment 30 à 45 % du budget total."}
              </p>
              <p>
                {"Second effet, souvent plus déterminant : le client n'est plus bridé. Il peut viser un zellige artisanal, un chêne massif en point de Hongrie, une robinetterie en laiton patiné ou une cuisine à façades cannelées sur mesure, là où un devis classique l'aurait orienté vers l'équivalent industriel du catalogue de l'entreprise."}
              </p>
              <p>
                {"L'ampleur de l'écart de prix dépend des postes concernés, des gammes retenues et de la rigueur du cadrage réalisé en amont. Elle se constate devis en main, ligne à ligne : c'est une méthode de construction du budget, pas une remise annoncée à l'avance."}
              </p>
            </MqProse>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <MqFig
              src="/photos/maquette/tendance-zellige-credence.jpg"
              alt="Crédence de cuisine en zellige vert d'eau posé en pose verticale, plan de travail en pierre et façades en chêne clair"
              caption="Illustration de référence, hors chantier documenté : crédence en zellige émaillé, irrégularités de surface assumées, calepinage vertical et jointoiement fin sur support dressé."
            />
            <MqFig
              src="/photos/chantiers/chParquetChevronsPosePiece.jpeg"
              alt="Sol stratifié imitation chêne en cours de pose à bâtons rompus, lames clipsées sur sous-couche et chutes au sol"
              caption="Revêtement de sol acheté en direct : sol stratifié imitation chêne posé à bâtons rompus, lames clipsées sur sous-couche. Le client achète le revêtement et le calepinage retenus, l'entreprise partenaire assure la pose. Chantier réel des équipes partenaires."
            />
            <MqFig
              src="/photos/chantiers/chCuisineBlancheBrillanteMarbre.jpeg"
              alt="Cuisine laquée blanche brillante livrée avec sol en marbre, chantier réel"
              caption="Cuisine laquée blanche livrée : éléments, plan de travail et électroménager pouvant être achetés en direct par le client auprès du fournisseur, posés par l'entreprise partenaire. Chantier réel des équipes partenaires."
            />
          </div>
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Les questions posées sur l'achat direct">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqReadNext
        items={[
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Transparence, chiffrage et suivi quotidien" },
          { href: "/tendances-2026-2027", label: "Tendances 2026-2027", sub: "Chêne massif, zellige, pierre et chaux" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes constatées par poste" },
        ]}
      />

      <MqCta
        title="Décrivez votre projet, nous le structurons"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste."
      />
    </main>
  );
}
