import type { Metadata } from "next";
import { MqHero, MqSection, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/investisseurs-professionnels" },
  title: "Rénovation pour investisseurs et professionnels | ARCHI PILOTE",
  description:
    "Chiffrage avant acquisition, remise en état locative, sortie de passoire énergétique et pilotage à distance. Un modèle issu du secteur des foncières.",
};

const AVANT_ACQUISITION = [
  {
    title: "Lecture rapide de l'actif",
    resume: "Une première analyse est produite à partir des photos, du diagnostic de performance énergétique et du règlement de copropriété.",
    body: "Nous repérons les postes lourds : structure, réseaux vétustes, absence de ventilation, humidité, menuiseries, toiture. Ces postes conditionnent l'écart entre un rafraîchissement et une restructuration.",
  },
  {
    title: "Fourchette argumentée, pas un forfait au mètre carré",
    resume: "Le prix au mètre carré générique ne dit rien d'un actif précis.",
    body: "L'estimation est décomposée par lot, avec les hypothèses retenues et les points nécessitant une vérification complémentaire. Elle indique aussi ce qui reste incertain tant que les sondages n'ont pas été réalisés.",
  },
  {
    title: "Scénarios de niveau de prestation",
    resume: "Trois scénarios permettent d'ajuster l'investissement au rendement visé.",
    body: "Remise en état locative, rénovation intermédiaire ou restructuration complète : chaque scénario est chiffré avec son incidence sur le loyer envisageable et sur la durée d'immobilisation du bien.",
  },
];

const DECISION = [
  {
    title: "Acheter",
    resume: "Les travaux identifiés sont chiffrés et restent cohérents avec le rendement visé.",
    body: "Aucun désordre structurel majeur au diagnostic ; le montant des travaux, ajouté au prix d'acquisition, reste compatible avec le loyer ou la revente envisagés.",
  },
  {
    title: "Renégocier",
    resume: "Des travaux significatifs sont nécessaires, mais le bien reste pertinent.",
    body: "L'estimation chiffrée sert d'appui pour ajuster le prix d'acquisition à la baisse, à hauteur des postes réellement identifiés.",
  },
  {
    title: "Différer",
    resume: "Certains postes peuvent attendre sans aggraver le risque.",
    body: "Les travaux non urgents, de confort ou de finition, sont reportés après l'acquisition pour lisser l'investissement dans le temps.",
  },
  {
    title: "Abandonner",
    resume: "Le risque identifié dépasse ce que le rendement visé peut absorber.",
    body: "Structure compromise, non-conformité lourde ou incertitude majeure non levée par un diagnostic complémentaire : le dossier est écarté avant tout engagement.",
  },
];

const PRISE_EN_CHARGE = [
  {
    title: "Remise en état locative",
    text: "Intervention courte et calibrée entre deux locataires : reprise des sols, peinture, électricité mise en sécurité, sanitaires et menuiseries intérieures.",
  },
  {
    title: "Sortie de passoire énergétique",
    text: "Analyse du diagnostic, hiérarchisation des déperditions, isolation, menuiseries et ventilation mécanique contrôlée, avec cohérence entre étanchéité et renouvellement d'air.",
  },
  {
    title: "Restructuration lourde",
    text: "Redécoupage, ouverture de mur porteur, création de pièce d'eau, reprise de plancher, avec architecte DPLG ou ingénieur structure partenaire indépendant.",
  },
  {
    title: "Plusieurs lots en parallèle",
    text: "Descriptif standardisé, références répétables, calendrier d'approvisionnement commun et tableau de suivi unique pour l'ensemble du portefeuille.",
  },
  {
    title: "Locaux professionnels",
    text: "Cloisons, réseaux, ventilation, revêtements et remise en état de locaux tertiaires ou commerciaux, avec les partenaires compétents pour les obligations spécifiques.",
  },
  {
    title: "Pilotage à distance",
    text: "Photos datées transmises chaque jour, point écrit hebdomadaire, journal des décisions et de leur incidence budgétaire.",
  },
];

const FAQ = [
  {
    q: "Travaillez-vous avec des investisseurs et des bailleurs ?",
    a: "Oui. Notre modèle vient du secteur des foncières : lecture d'un actif, chiffrage rapide avant acquisition, hiérarchisation des travaux au regard du rendement visé et pilotage de l'exécution. Les entreprises partenaires contractantes exécutent et facturent les travaux.",
  },
  {
    q: "Pouvez-vous chiffrer des travaux avant l'acquisition d'un bien ?",
    a: "Oui. Nous produisons une estimation de travaux argumentée à partir des photos, du diagnostic de performance énergétique, du règlement de copropriété et, lorsque c'est possible, d'une visite. Cette estimation sert à négocier le prix d'acquisition en connaissance de cause.",
  },
  {
    q: "Comment traitez-vous plusieurs lots en parallèle ?",
    a: "Par un descriptif standardisé, des références de matériaux répétables, un calendrier commun d'approvisionnement et un tableau de suivi unique. La répétition fait baisser le prix unitaire et réduit les aléas.",
  },
  {
    q: "Prenez-vous en charge la sortie de passoire énergétique d'un logement locatif ?",
    a: "Oui. Nous analysons le diagnostic de performance énergétique, hiérarchisons les postes de déperdition, chiffrons les scénarios d'amélioration et pilotons les travaux d'isolation, de menuiseries et de ventilation mécanique contrôlée.",
  },
  {
    q: "Quel suivi est transmis au propriétaire à distance ?",
    a: "Un point écrit hebdomadaire et des photos datées transmises quotidiennement sur WhatsApp. Chaque décision et son incidence budgétaire sont consignées dans un journal accessible au propriétaire.",
  },
  {
    q: "Intervenez-vous sur les locaux professionnels ?",
    a: "Oui, sur les locaux tertiaires et commerciaux relevant du même savoir-faire technique : cloisons, réseaux, ventilation, revêtements et remise en état. Les obligations propres aux établissements recevant du public sont traitées avec les partenaires compétents.",
  },
];

export default function InvestisseursProfessionnelsPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Actifs immobiliers"
        title="Investisseurs et professionnels : le chiffrage avant la décision"
        lead={
          <>
            <p>{"Estimation avant acquisition, remise en état locative, sortie de passoire énergétique et pilotage à distance."}</p>
            <p className="mt-4">
              {"Pour un investisseur, la rénovation est une ligne du plan de financement, pas un projet de décoration. ARCHI PILOTE RÉNOVATION applique une méthode issue du secteur des foncières : lecture rapide de l'actif, estimation argumentée des travaux avant acquisition, hiérarchisation au regard du rendement visé, chiffrage comparable et pilotage de l'exécution. Les entreprises partenaires contractantes exécutent et facturent les travaux ; le suivi est transmis quotidiennement au propriétaire."}
            </p>
          </>
        }
      />

      <MqSection
        kicker="Avant l'acquisition"
        title="Estimer les travaux au moment où cela change le prix"
        lead="Une estimation produite après la signature ne sert plus à négocier. Nous intervenons pendant la phase de décision."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div
              role="img"
              aria-label="Arbre de décision pour intégrer les travaux dans une acquisition."
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 border border-line rounded-none bg-surface p-6"
            >
              {DECISION.map((d) => (
                <div key={d.title} className="flex flex-col gap-2">
                  <span className="mq-mention mq-mention--accent">{d.title}</span>
                  <p className="t-sec text-ivoire/85 leading-relaxed">{d.resume}</p>
                  <p className="text-muted t-petit leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
            <p className="text-muted t-petit leading-relaxed max-w-2xl">
              {"Quatre issues possibles selon les travaux identifiés et le risque qu'ils représentent : acheter, renégocier, différer ou abandonner le dossier."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {AVANT_ACQUISITION.map((b) => (
              <div key={b.title} className="flex flex-col gap-2">
                <h3 className="display t-haut text-ivoire">{b.title}</h3>
                <p className="text-muted t-sec leading-relaxed">{b.resume}</p>
                <p className="t-sec text-ivoire/85 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MqSection>

      <MqSection kicker="Exploitation" title="Ce que nous prenons en charge">
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-dpe-passoire.jpg"
            alt="Étiquettes du diagnostic de performance énergétique de A à G et postes de travaux associés sur une maison en coupe"
            caption="Étiquettes du diagnostic de performance énergétique et postes de travaux qui les influencent : isolation, menuiseries, ventilation, chauffage."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {PRISE_EN_CHARGE.map((b) => (
              <div key={b.title} className="flex flex-col gap-2">
                <h3 className="display t-haut text-ivoire">{b.title}</h3>
                <p className="text-muted t-sec leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Rendement"
        title="Le budget se maîtrise avant le démarrage"
        lead="Notre modèle sort les marges d'intermédiation du budget travaux, sans dégrader le niveau de prestation."
      >
        <div className="flex flex-col gap-8">
          {/*
            À GÉNÉRER (photo RÉELLE, jamais de génération IA pour un document de chiffrage) :
            cette photo était jusqu'ici chDressingLaqueBlancCouloirPlans.jpeg — déjà utilisée sur
            reseau-partenaires ET parcours-expertise (doublon strict retiré ici, gardée là où
            l'usage est le plus juste). Aucun autre candidat réel de "plans/devis examinés avant
            démarrage" n'existe dans /public/photos/chantiers/ sans dupliquer une page existante.
            Alt prévu : "Cas réel anonymisé de chiffrage avant rénovation d'un actif."
          */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <h3 className="display t-haut text-ivoire">Un mini cas, à partir d&apos;un chantier réel</h3>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              <span className="text-orange-deep font-semibold">{"État constaté — "}</span>
              {"un actif ancien présentant les postes lourds classiques identifiés au diagnostic : réseaux vétustes, ventilation absente, menuiseries à reprendre."}
            </p>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              <span className="text-orange-deep font-semibold">{"Budget engagé — "}</span>
              {"chaque poste a été chiffré et arrêté sur plan avant la signature, à partir de ce type de plans annotés directement sur chantier."}
            </p>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              <span className="text-orange-deep font-semibold">{"Arbitrage — "}</span>
              {"répartition entre postes traités immédiatement et postes différés, en fonction du rendement locatif visé pour le bien."}
            </p>
            <p className="t-sec text-ivoire/85 leading-relaxed">
              <span className="text-orange-deep font-semibold">{"Résultat — "}</span>
              {"un chantier démarré sur un budget déjà arrêté, sans avenant lié à un poste découvert en cours de travaux."}
            </p>
            <p className="text-muted t-petit leading-relaxed">
              {"Illustration à partir d'un chantier réel piloté pour un investisseur ; les montants précis relèvent de la confidentialité du dossier client et ne sont pas publiés ici."}
            </p>
          </div>
          <MqChecklist
            items={[
              "Achat des matériaux en direct par le propriétaire, au prix fournisseur.",
              "Analyse ligne à ligne des devis par un ancien expert en chiffrage.",
              "Suppression des doublons et des prestations facturées deux fois entre lots.",
              "Mise en concurrence documentée sur un descriptif identique.",
              "Arbitrages décidés avant le démarrage, pas en cours de chantier.",
              "Suivi de l'immobilisation du bien, poste par poste, semaine par semaine.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Investisseurs : réponses directes">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqCta
        title="Un actif à étudier avant acquisition ?"
        lead="Transmettez les photos, le diagnostic de performance énergétique et le règlement de copropriété : nous produisons une estimation argumentée des travaux."
      />

      <MqReadNext
        items={[
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Sortie de passoire énergétique" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse d'un chiffrage ligne à ligne" },
        ]}
      />
    </main>
  );
}
