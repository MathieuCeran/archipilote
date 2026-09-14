import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/tendances-materiaux-francais" },
  title: "Tendances françaises 2026 : travertin, zellige et béton ciré en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Les trois matières qui structurent aujourd'hui l'esthétique française — travertin, zellige et béton ciré — sont exigeantes sur le support, jamais sur le style.",
};

const PANORAMA = [
  {
    src: "/photos/maquette/pedagogie-travertin-macro.jpg",
    alt: "Gros plan sur la texture du travertin naturel, alvéoles et veinage caractéristiques",
    caption: "Travertin : pierre naturelle alvéolée, jointée en grand format, traitement hydrofuge obligatoire avant mise en service.",
  },
  {
    src: "/photos/maquette/pedagogie-zellige-macro.jpg",
    alt: "Gros plan sur la texture du zellige émaillé vert d'eau, irrégularités de surface et joints fins",
    caption: "Zellige émaillé : irrégularités de surface assumées, calepinage et jointoiement fin sur support parfaitement dressé.",
  },
  {
    src: "/photos/maquette/pedagogie-beton-cire-macro.jpg",
    alt: "Gros plan sur la texture du béton ciré, surface minérale continue sans joint",
    caption: "Béton ciré : surface minérale continue sans joint, ragréage fibré et primaire d'accroche avant application des couches.",
  },
  {
    src: "/photos/maquette/detail-menuiserie-moulure.jpg",
    alt: "Gros plan sur un profil de moulure en chêne et une poignée en laiton patiné",
    caption:
      "Détail de menuiserie : profils de moulure relevés sur l'existant, chambranle reconstitué et quincaillerie laiton patiné posée à l'ancienne.",
  },
  {
    src: "/photos/maquette/pedagogie-chene-macro.jpg",
    alt: "Gros plan sur le grain et le veinage naturels d'un chêne massif huilé",
    caption: "Chêne massif huilé : grain et veinage naturels, la matière noble travaillée dans les volumes d'origine.",
  },
  {
    src: "/photos/maquette/pedagogie-chaux-macro.jpg",
    alt: "Gros plan sur la texture d'un enduit à la chaux beige rosé, relief mat de la taloche",
    caption: "Enduit à la chaux : texture mate et minérale, relief de la taloche, signature des intérieurs français 2026-2027.",
  },
];

/* 02/09 : cette grille montre LA MATIÈRE en gros plan, pas des pièces livrées.
   Trois vignettes avaient été remplacées par des photos de réalisations
   (chambres, cuisine) — hors sujet ici, signalé par le client : les
   réalisations ont leur place sur /realisations, pas dans un panorama de
   matériaux. Les macros de matière sont rétablies. */

const FAQ = [
  {
    q: "Le travertin convient-il à une salle d'eau en copropriété ?",
    a: "Oui, à condition que le support soit dressé, que l'étanchéité sous carrelage soit continue et que la pierre reçoive un traitement hydrofuge avant mise en service. Le travertin est poreux : sans protection, il se tache durablement.",
  },
  {
    q: "Le zellige peut-il être posé sur toute une crédence de cuisine ?",
    a: "Oui. Sa fabrication artisanale génère des irrégularités de teinte et d'épaisseur qu'il faut assumer esthétiquement et compenser par un support parfaitement plan, un calepinage anticipé et un joint fin adapté à la nuance choisie.",
  },
  {
    q: "Le béton ciré est-il compatible avec un plancher ancien en bois ?",
    a: "Sous conditions. Le plancher doit être stable et sa charge admissible vérifiée, avec un ragréage fibré et un primaire d'accroche. Sur un plancher trop souple, le risque de faïençage est réel : le diagnostic précède toujours l'application.",
  },
  {
    q: "Ces matières se marient-elles avec des moulures d'origine ?",
    a: "Oui, c'est même la signature de la rénovation française actuelle : matières contemporaines au sol et sur les plans, patrimoine restitué en plafond et en menuiserie. Les profils sont relevés sur l'existant et refaits en plâtre traditionnel avec la maison Guimier.",
  },
  {
    q: "Qui valide la faisabilité technique de ces finitions ?",
    a: "L'architecte partenaire Minh-Hoa Truong sur les partis pris de conception et de distribution, l'ingénieur structure Igli Braho, du bureau Tridenso, dès qu'une charge, une ouverture ou un plancher sont concernés.",
  },
];

export default function TendancesMateriauxFrancaisPage() {
  return (
    <main>
      <MqHero
        kicker="Matières et finitions"
        title="Travertin, zellige et béton ciré : les matières de la rénovation française, vues côté technique"
        lead="Les trois matières qui structurent aujourd'hui l'esthétique française — travertin, zellige et béton ciré — sont exigeantes sur le support, jamais sur le style. Chacune impose une préparation précise : planéité, étanchéité, charge admissible, traitement de protection. ARCHI PILOTE RÉNOVATION conçoit ces finitions avec l'architecte partenaire Minh-Hoa Truong, les valide avec l'ingénieur structure Igli Braho du bureau Tridenso lorsque la structure est concernée, et les fait exécuter par des entreprises partenaires contractantes, sous notre pilotage et notre accompagnement de A à Z."
      />

      <MqSection
        kicker="Panorama"
        title="Chaque matière, sa logique de mise en œuvre"
        lead="Chaque matière se juge sur son support avant de se juger sur son aspect. Trois de ces vues sont des photos de chantiers réels des équipes partenaires."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PANORAMA.map((f) => (
            <MqFig key={f.caption} src={f.src} alt={f.alt} caption={f.caption} />
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Le travertin : pierre naturelle en pièce d'eau"
        lead="Une pierre poreuse qui exige une étanchéité continue et un hydrofuge avant usage."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le travertin s'impose en salle d'eau pour sa matière chaude et ses veines irrégulières. Sa porosité en fait toutefois un
              matériau techniquement exigeant : sans hydrofuge, une eau calcaire ou un produit d'entretien acide marquent la pierre en
              quelques semaines.
            </p>
            <p>
              La mise en œuvre suppose un support dressé au millimètre, une natte d'étanchéité continue entre sol et murs, des bandes de
              renfort en angle et une pente d'évacuation régulière. Les découpes de grand format sont réalisées en atelier pour limiter les
              épaufrures.
            </p>
            <p>
              Fourchette constatée en Île-de-France : 180 à 320 euros le mètre carré posé selon le format, l'épaisseur et le calepinage
              retenu, hors étanchéité et hors préparation du support.
            </p>
          </MqProse>
          <MqFig
            src="/photos/maquette/schema-pose-travertin.jpg"
            alt="Schéma pédagogique de la pose de dalles de travertin en grand format : chape ragréée, double encollage, joint minéral et hydrofuge"
            caption="Coupe de pose du travertin : chape ragréée, double encollage au peigne, dalle grand format, joint minéral et traitement hydrofuge final."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Le zellige : artisanat émaillé et calepinage anticipé"
        lead="Ses irrégularités sont un parti pris esthétique qui se prépare en amont, pas une tolérance de pose."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le zellige, terre cuite émaillée façonnée à la main, apporte une vibration de lumière qu'aucun carreau industriel ne reproduit.
              Les nuances de teinte et les variations d'épaisseur sont inhérentes au produit : elles se répartissent en mélangeant les boîtes
              à la pose.
            </p>
            <p>
              Le support doit être parfaitement plan, faute de quoi les écarts d'épaisseur deviennent visibles en lumière rasante. Le
              calepinage — vertical, horizontal ou en chevrons — se décide avant commande, puisqu'il détermine les quantités et le taux de
              casse à prévoir.
            </p>
            <p>Fourchette constatée : 140 à 260 euros le mètre carré posé, joint compris, selon la teinte et la provenance des carreaux.</p>
          </MqProse>
          <MqFig
            src="/photos/maquette/schema-pose-zellige-etapes.jpg"
            alt="Schéma pédagogique des cinq étapes de pose du zellige : support dressé, calepinage, mélange des boîtes, pose au peigne et joint fin"
            caption="Les cinq étapes de pose du zellige : support dressé, calepinage à sec, mélange des boîtes pour répartir les nuances, pose au peigne et joint fin."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Le béton ciré : continuité visuelle et contrainte de support"
        lead="Sa réussite dépend entièrement de la stabilité du support et de la préparation du fond."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le béton ciré crée une surface continue sans joint, particulièrement recherchée dans les grands plateaux et les séjours
              haussmanniens où il contraste avec les moulures d'origine.
            </p>
            <p>
              Sur plancher bois ancien, la faisabilité se vérifie avant tout engagement : stabilité des solives, charge admissible, ragréage
              fibré et primaire d'accroche. Un support trop souple provoque un faïençage irréversible des couches de finition.
            </p>
            <p>
              Fourchette constatée : 110 à 200 euros le mètre carré selon la préparation nécessaire, la surface traitée et le nombre de
              couches de protection.
            </p>
          </MqProse>
          <MqFig
            src="/photos/pedagogie/01-beton-cire.jpeg"
            alt="Schéma pédagogique du béton ciré appliqué sur dalle béton et sur plancher bois ancien, avec ragréage fibré et primaire d'accroche"
            caption="Schéma pédagogique : préparation du support avant béton ciré, sur dalle béton comme sur plancher bois ancien où la stabilité des solives se vérifie en premier."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Menuiserie et moulures : le charme de l'ancien restitué"
        lead="Les profils sont relevés sur l'existant, jamais approchés par un profil standard du commerce."
      >
        <div className="flex flex-col gap-8">
          <MqChecklist
            cols={1}
            items={[
              "Relevé des profils de corniche, cimaise et rosace existants avant dépose.",
              "Moulures en plâtre traditionnel fournies par la maison Guimier, moulées d'après ces profils.",
              "Fenêtres reproduites à l'identique : petits bois, sections d'origine et crémones en laiton.",
              "Menuiseries sur mesure en chêne : portes à panneaux, chambranles profilés, plinthes hautes.",
              "Approvisionnement des matériaux courants via le groupe Saint-Gobain, à La Plateforme du Bâtiment, facturé au client sans marge.",
            ]}
          />
          <MqFig
            src="/photos/pedagogie/05-menuiserie-moulures.jpeg"
            alt="Schéma pédagogique de trois profils : corniche relevée, fenêtre à petits bois et crémone en laiton, menuiserie chêne à chambranle profilé"
            caption="Schéma pédagogique : trois profils relevés sur l'existant — corniche, fenêtre à petits bois et crémone en laiton, menuiserie chêne à chambranle profilé."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Compétences mobilisées"
        title="Les partenaires qui valident ces partis pris"
        lead="Conception et calcul sont assurés par des professionnels identifiés, mobilisés projet après projet."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Minh-Hoa Truong — architecte partenaire</h3>
            <p className="text-muted t-sec leading-relaxed">
              Collaboration régulière sur les projets de redistribution et de rénovation patrimoniale : partis pris de conception, cohérence
              des matières, dossiers d'autorisation d'urbanisme.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Igli Braho — ingénieur structure, Tridenso</h3>
            <p className="text-muted t-sec leading-relaxed">
              Collaboration régulière sur les dossiers structurels : notes de calcul d'ouverture de mur porteur, renforcement de plancher,
              création de trémie et vérification des charges admissibles avant finition.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Entreprises partenaires contractantes</h3>
            <p className="text-muted t-sec leading-relaxed">
              Exécutent et facturent les lots concernés : pierre, faïence, béton ciré, menuiserie et plâtrerie traditionnelle, sous notre
              pilotage et notre accompagnement du diagnostic à la réception.
            </p>
          </div>
        </div>
      </MqSection>

      <section className="py-8 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
            les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque
            nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises
            concernées.
          </p>
        </div>
      </section>

      <MqSection
        kicker="Preuve visuelle"
        title="Six détails de chantiers réels"
        lead="La matière se juge sur sa mise en œuvre, pas sur la mise en scène. Six détails vérifiés, issus de chantiers réels des équipes partenaires — les trois derniers montrent des pierres naturelles posées en grand format, dont une salle de bain photographiée en cours de pose."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chPorteCoulissanteClaustraChene3.jpeg"
            alt="Détail réel d'une porte coulissante à claustra en chêne massif, posée dans un appartement en rénovation"
            caption="Porte coulissante à claustra en chêne massif : lames verticales rainurées et rail dissimulé en linteau, réalisée sur mesure. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chSdbBaignoireTeck.jpeg"
            alt="Détail réel d'une salle de bain avec sol en grand format effet travertin et meuble vasque en teck massif"
            caption="Salle de bain en fin de chantier : carrelage grand format effet travertin, baignoire îlot et meuble vasque en teck massif. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chSdbCarreauxCiment.jpeg"
            alt="Détail réel d'une douche en carreaux de ciment à motifs patchwork, avec vasque en pierre et meuble en teck"
            caption="Douche en carreaux de ciment à motifs patchwork : calepinage anticipé pour aligner les dessins entre murs, vasque en pierre sur meuble bois. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chHdgDetailMarbreGrisVasque.jpeg"
            alt="Détail réel d'une salle d'eau en marbre gris veiné : vasque-auge taillée dans la masse et robinetterie murale en laiton patiné"
            caption="Marbre gris veiné en grand format : vasque-auge taillée dans la masse avec tablette en retour, robinetterie murale encastrée en laiton patiné, aucun meuble rapporté. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chHdgSdbMarbreProfilesLaitonPose.jpeg"
            alt="Salle de bain en cours de pose : marbre bréché beige-gris en grand format, profilés laiton sur les arêtes et plan vasque percé avant mise en place de la cuve"
            caption="Pose en cours, salle de bain non livrée : marbre bréché beige-gris en grand format, profilés laiton rapportés sur chaque arête, plan vasque percé en attente de la cuve. Chantier réel des équipes partenaires."
          />
        </div>
      </MqSection>

      <MqSection title="Questions fréquentes sur ces finitions">
        <MqFaq items={FAQ} />
      </MqSection>

      <MqReadNext
        items={[
          { href: "/savoir-faire-ancien", label: "Charme de l'ancien", sub: "Fenêtres à l'identique, moulures, crémones" },
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Architecte et ingénieur structure" },
          { href: "/realisations", label: "Réalisations", sub: "Comparatifs avant / après" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Fourchette de budget en une minute" },
        ]}
      />

      <MqCta
        title="Faire valider vos choix de matières avant chiffrage"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : faisabilité des finitions, contraintes de support et budget poste par poste."
      />
    </main>
  );
}
