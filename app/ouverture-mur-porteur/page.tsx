import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/ouverture-mur-porteur" },
  title: "Ouverture de mur porteur | ARCHI PILOTE RÉNOVATION",
  description: "Modifier un mur porteur engage la structure. Étude, plans, phasage, entreprise assurée et réception doivent être préparés avant démolition.",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ouverture de mur porteur : étude, autorisations, travaux",
    description: "Modifier un mur porteur engage la structure. Étude, plans, phasage, entreprise assurée et réception doivent être préparés avant démolition.",
    areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
    provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
      { "@type": "ListItem", position: 2, name: "Gros œuvre", item: "https://www.archipiloterenovation.com/services" },
      { "@type": "ListItem", position: 3, name: "Ouverture de mur porteur", item: "https://www.archipiloterenovation.com/ouverture-mur-porteur" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MqHero
        kicker="Gros œuvre"
        title="Ouverture de mur porteur : étude, autorisations, travaux"
        lead="Modifier un mur porteur engage la structure. Étude, plans, phasage, entreprise assurée et réception doivent être préparés avant démolition. Les schémas et photos ci-dessous proviennent d'un dossier réel piloté par nos équipes, anonymisé : nom du client et adresse précise retirés."
      />

      <MqSection
        kicker="Diagnostic"
        title="Identifier le mur à ouvrir, sur plan et sur site"
        lead="Le bureau d'études repère le mur concerné sur le plan existant avant de proposer une hypothèse de reprise de charge."
      >
        <MqFig
          src="/photos/etudes/schemaPlanMurPorteurIdentification.jpeg"
          alt="Plan existant d'un appartement avec le mur porteur à ouvrir repéré en rouge, et élévation du mur avec la largeur de l'ouverture"
          caption="Plan existant : le mur porteur concerné (« Mur M1 ») est repéré, avec les hauteurs sous plafond de part et d'autre et la largeur d'ouverture visée. Dossier réel anonymisé, bureau d'études structure partenaire."
          ratio="aspect-[6/5]"
          entier
        />
        <div className="mt-8">
          <MqProse>
            <p>
              Sur ce dossier, le mur séparait un dégagement d'un séjour. Le bureau d'études a relevé les hauteurs sous
              plafond de chaque côté du mur (2,36 m et 2,48 m selon la pièce) et la largeur d'ouverture visée
              (2,55 m), avant de calculer la reprise de charge nécessaire.
            </p>
            <p>
              Ce type d'ouverture, entre un dégagement et un séjour ou entre une cuisine et un séjour,
              revient régulièrement en{" "}
              <Link href="/renovation-appartement" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">rénovation d'appartement</Link>,
              où la copropriété ajoute ses propres contraintes.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Méthode, en trois étapes"
        title="De l'étaiement provisoire au portique acier définitif"
        lead="Chaque étape est validée avant de passer à la suivante : l'étaiement protège le bâtiment pendant que l'ancien mur est déposé, puis le portique acier reprend la charge de façon définitive."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/etudes/schemaEtaiementOuvertureMur.jpeg"
            alt="Schéma des étapes 1 et 2 : étaiement du plancher puis création de l'ouverture après dépose des montants bois existants"
            caption="Étape 1 — Étaiement du plancher : 2×3 étais posés de part et d'autre du mur avant toute démolition. Étape 2 — Ouverture créée après dépose contrôlée des montants du pan de bois existant."
            ratio="aspect-[8/5]"
            entier
          />
          <MqFig
            src="/photos/etudes/schemaPortiqueAcierRenforcement.jpeg"
            alt="Schéma de l'étape 3 : installation du portique acier, poutre IPE180 sur poteaux IPE160, avec détails de platines et boulonnage"
            caption="Étape 3 — Renforcement : portique acier (poutre IPE180 sur poteaux IPE160), platines soudées de 10 mm et boulonnage M12, calé et maté sur le plancher existant."
            ratio="aspect-[8/5]"
            entier
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Sur le chantier"
        title="Ce que ces étapes donnent une fois exécutées"
        lead="Photographies du même chantier : démolition contrôlée, puis portique acier posé et soudé."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/chantiers/chDemolitionLattisPlatreOuverture.jpeg"
            alt="Démolition contrôlée d'un mur porteur en pan de bois et plâtre, structure mise à nu, chantier réel"
            caption="Démolition contrôlée du mur en pan de bois : lattis et montants mis à nu, gravats et perforateur encore au sol, avant pose du portique. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chDemolitionDegagementVersSejour.jpeg"
            alt="Vue depuis l'embrasure vers la pièce voisine : murs décapés jusqu'au support, pan de bois dégarni sur la droite, alimentations en PER tirées en pied de mur"
            caption="Vu depuis l'embrasure : les murs sont décapés jusqu'au support, le pan de bois est dégarni sur toute la hauteur à droite et les alimentations neuves en PER sont déjà tirées en pied de mur. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chPoutreAcierAngleSoudeVue1.jpeg"
            alt="Angle soudé du portique acier en place, gaine électrique repassée le long du profilé, chantier réel"
            caption="Portique acier posé : angle soudé poutre-poteau, gaine électrique repassée le long du profilé avant habillage. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          {/*
            Emplacement retiré le 05/09/2026 (doublon visuel + surexposition).

            chPoutreAcierProfilVueLongue.jpeg occupait cette quatrième case. Ouverture des
            deux fichiers côte à côte : c'est le MÊME cordon de soudure poutre-poteau que
            chPoutreAcierAngleSoudeVue1.jpeg ci-dessus, photographié au même endroit à
            quelques minutes d'écart (mêmes plinthes, même reprise de plâtre, même angle
            soudé). Deux vues quasi identiques dans la même grille, c'est précisément le
            reproche du client. `scripts/surexposition.py` comptait par ailleurs cette scène
            sur QUATRE pages (/gros-oeuvre-structure, ici, /realisations et l'article
            IPN/HEA/HEB) ; le retrait la ramène à trois.
            La grille passe de quatre à trois photos, ce qui suffit à raconter la séquence :
            démolition, dégagement, portique posé.
          */}
        </div>
      </MqSection>

      <MqSection
        kicker="Ordre d'exécution"
        title="La description des travaux telle que rédigée par le bureau d'études"
        lead="Cinq étapes, dans un ordre qui ne se négocie pas une fois le chantier lancé."
        wide
      >
        <MqFig
          src="/photos/etudes/schemaDescriptionTravauxOuverture.jpeg"
          alt="Description des travaux : cinq étapes, mise en place des étaiements, démolition du mur, pose du portique, retrait des étais, finition"
          caption="Description des travaux extraite du dossier d'exécution, anonymisée : cinq étapes, de la mise en place des étaiements à la finition anticorrosion des profilés."
          ratio="aspect-[3/2]"
          entier
        />
        <div className="mt-8">
          <MqNumbered
            items={[
              { title: "Mise en place des étaiements", text: "Étaiement du plancher existant de part et d'autre du mur porteur : six étais au total, trois de chaque côté, calés et mis en charge progressivement." },
              { title: "Démolition du mur", text: "Une fois l'étaiement en place, démolition du mur à l'emplacement de l'ouverture et des montants bois, avec un retrait contrôlé pour ne pas endommager les zones adjacentes." },
              { title: "Pose du portique", text: "Validation des dimensions sur place, préparation des pièces soudées, mise en place de la poutre puis des poteaux, calage et matage entre le plancher et la poutre, puis boulonnage de l'ensemble." },
              { title: "Retrait des étais", text: "Une fois le portique installé et contrôlé, retrait progressif de l'étaiement provisoire." },
              { title: "Finition", text: "Rebouchage des parements, nettoyage du chantier et application d'une protection anticorrosion sur les profilés métalliques." },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Ce que l'étude structure conditionne"
        title="Pourquoi l'étude vient avant le prix"
        lead="Le dimensionnement et la méthode de reprise conditionnent le chiffrage. Faire chiffrer une ouverture avant d'avoir défini l'hypothèse structurelle produit des devis incomparables entre eux."
      >
        <MqProse>
          <p>
            Sur ce dossier, la note du bureau d'études a fixé la section exacte de la poutre et des poteaux (IPE180
            et IPE160), l'épaisseur des platines (10 mm) et le boulonnage (4 boulons M12 par platine) avant toute
            demande de devis à l'entreprise d'exécution. C'est cette hypothèse qui rend les devis comparables entre
            eux : sans elle, deux entreprises chiffrent deux ouvrages différents sans le savoir.
          </p>
          <p>
            La lecture ligne à ligne des devis reçus est détaillée dans la{" "}
            <Link href="/clinique-du-devis" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">clinique du devis</Link>.
            En copropriété, l'ouverture d'un élément porteur relève par ailleurs des{" "}
            <Link href="/demarches-administratives-renovation" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">autorisations à obtenir avant travaux</Link>.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            cols={1}
            items={[
              "Nature du mur, charges reprises, plancher, fondations, accès, mitoyenneté et finitions autour de l'ouverture — chacun de ces points change la méthode retenue.",
              "Protection, étaiement, démolition contrôlée, pose du renfort selon l'étude, reprises, contrôles et finitions : un ordre qui ne se négocie pas une fois le chantier lancé.",
              "Les attestations d'assurance de l'entreprise exécutante sont vérifiées avant tout démarrage.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ouverture de mur porteur : réponses directes">
        <MqFaq
          items={[
            { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", a: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité, avec un ingénieur structure partenaire indépendant pour la note de calcul." },
            { q: "Une visite technique est-elle nécessaire ?", a: "Oui, pour tout chiffrage sérieux : l'existant et l'accès changent fortement les hypothèses de chantier, comme le montre ce dossier où la largeur d'ouverture et les hauteurs sous plafond ont été relevées avant tout calcul." },
            { q: "Les prix affichés sont-ils garantis ?", a: "Non. Les fourchettes éventuellement publiées sont datées et indicatives ; le prix contractuel reste celui du devis remis par l'entreprise, établi sur la base de la note de calcul." },
            { q: "Intervenez-vous depuis La Garenne-Colombes ?", a: "Oui, avec une zone d'intervention plus large en Île-de-France selon la nature du projet." },
          ]}
        />
        <p className="mt-8 max-w-2xl border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
          <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta
        title="Un mur porteur à ouvrir ?"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bâti, hypothèse de reprise de charge et budget réaliste."
      />

      <MqReadNext
        items={[
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Le détail complet de la méthode" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Quand un ingénieur structure est mobilisé" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Fourchette de budget immédiate" },
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Bureau d'études structure et entreprises" },
          { href: "/garanties-assurances", label: "Garanties et assurances", sub: "Ce que couvre l'entreprise exécutante" },
          { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine", sub: "Le département d'où nous intervenons" },
        ]}
      />
    </main>
  );
}
