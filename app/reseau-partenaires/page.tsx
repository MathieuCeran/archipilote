import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/reseau-partenaires" },
  title: "Réseau d'entreprises partenaires et compétences mobilisées | ARCHI PILOTE RÉNOVATION",
  description:
    "Réseau d'entreprises partenaires d'ARCHI PILOTE RÉNOVATION : architecte DPLG Minh-Hoa Truong, ingénieur structure Igli Braho (Tridenso), géotechnicien Geo2Mo, critères de sélection et transparence.",
};

const FAQ = [
  {
    q: "Les entreprises partenaires sont-elles salariées d'ARCHI PILOTE RÉNOVATION ?",
    a: "Non. Les entreprises partenaires sont des sociétés indépendantes qui contractent directement avec le client, exécutent les travaux et les facturent en leur nom propre.",
  },
  {
    q: "Comment une entreprise est-elle sélectionnée pour rejoindre le réseau ?",
    a: "Elle est évaluée sur ses attestations d'assurance, ses références de chantiers comparables, sa capacité à respecter un descriptif détaillé et son sérieux dans le suivi administratif.",
  },
  {
    q: "Qui sont l'architecte et l'ingénieur structure mobilisés sur les projets lourds ?",
    a: "L'architecte partenaire Minh-Hoa Truong intervient sur la conception et les dossiers d'urbanisme ; l'ingénieur structure Igli Braho, du bureau Tridenso, réalise les notes de calcul dès qu'une charge ou un plancher est concerné. Ces collaborations sont régulières et documentées projet après projet.",
  },
  {
    q: "Quel rôle joue le bureau d'études géotechniques Geo2Mo dans vos projets ?",
    a: "Geo2Mo intervient dès qu'une reprise de structure, une extension, une surélévation ou une reprise en sous-œuvre remet en cause les fondations ou les sols portants. Son étude de reconnaissance des sols et son diagnostic de fondation sont indispensables pour dimensionner les reprises de manière fiable. Le bureau se distingue par son sérieux dans la préparation des dossiers, sa réactivité, sa capacité à mobiliser rapidement les bons partenaires et ses échanges réguliers pour valider les décisions techniques complexes.",
  },
  {
    q: "ARCHI PILOTE RÉNOVATION touche-t-elle une commission sur les devis des entreprises ?",
    a: "Le modèle économique est présenté en toute transparence avant l'engagement du client, dans une page dédiée. Les modalités de facturation des entreprises partenaires leur restent propres.",
  },
  {
    q: "Que se passe-t-il si une entreprise partenaire ne respecte pas ses engagements ?",
    a: "Un dossier documenté (compte rendu, photos datées) permet d'objectiver un manquement et d'orienter la suite, y compris le remplacement de l'entreprise si nécessaire.",
  },
];

export default function ReseauPartenairesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Réseau de partenaires"
        title="Les compétences mobilisées selon le risque et le besoin du projet"
        lead="ARCHI PILOTE RÉNOVATION mobilise un réseau d'entreprises partenaires contractantes sélectionnées sur des critères précis, ainsi que des architectes DPLG et ingénieurs structure partenaires indépendants pour les dossiers lourds. Les entreprises exécutent et facturent les travaux ; la marque structure et pilote le projet de A à Z."
      />

      <div className="rf-wrap mq-mesure--large pb-12 md:pb-16 mq-planche-ouverture">
        <MqFig entier
          src="/photos/pedagogie/29-reseau-partenaires-organigramme.jpeg"
          alt="Organigramme : Client relié à ARCHI PILOTE RÉNOVATION (pilotage), puis Entreprises partenaires, Architecte DPLG et Ingénieur structure"
          caption="Rôles des entreprises, architectes et ingénieurs partenaires. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        title="Critères de sélection des entreprises partenaires"
        lead="Chaque entreprise est évaluée avant d'intégrer le réseau."
      >
        <MqChecklist
          cols={1}
          items={[
            "Attestations d'assurance à jour, notamment la garantie décennale",
            "Références de chantiers comparables au type de projet",
            "Capacité à travailler à partir d'un descriptif détaillé et non d'un forfait opaque",
            "Respect des délais annoncés et du calendrier de chantier",
            "Sérieux dans le suivi administratif : devis, situations de travaux, réception",
          ]}
        />
      </MqSection>

      <MqSection title="Documents exigés avant intervention" lead="Un dossier réuni avant tout démarrage de chantier.">
        <div className="flex flex-col gap-8">
          {/*
            Image retirée : le schéma électrique affiché ici auparavant n'avait aucun
            rapport avec les documents exigés (Kbis, assurance, devis) — un reliquat de
            copier-coller entre sections. Il reste correctement utilisé ailleurs sur le
            site (clinique-du-devis, detail-invisible, second-oeuvre).
            LIMITATION HONNÊTE : nous n'avons pas de vraie photo d'un dossier anonymisé
            (Kbis, attestation d'assurance, devis) et il ne faut pas en fabriquer un —
            un faux document, même flouté, serait une pièce trompeuse. À défaut : soit
            laisser la section sans visuel (la checklist ci-dessous suffit à elle
            seule), soit commander une illustration éditoriale non documentaire.
            À GÉNÉRER (optionnel) — prompt FR : « Illustration éditoriale plate (fond
            ivoire, traits encre carbone, accent orange laiton) : une pochette de
            dossier fermée par un ruban, posée sur une table, entourée de trois
            pictogrammes simples — un tampon (assurance décennale), un sceau (Kbis) et
            une feuille lignée (devis) — sans aucun texte lisible ni logo, pour éviter
            toute confusion avec un vrai document. Style sobre, sans photo, format
            4:3. »
          */}
          <MqChecklist
            cols={1}
            items={[
              "Attestation d'assurance décennale en cours de validité",
              "Extrait K-bis ou équivalent pour vérifier l'existence légale de l'entreprise",
              "Devis descriptif détaillé, poste par poste",
              "Références de chantiers antérieurs de nature comparable",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Nos partenaires de conception et de calcul"
        lead="Deux professionnels identifiés, mobilisés régulièrement sur nos dossiers techniques."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/chantiers/chDressingLaqueBlancCouloirPlans.jpeg"
            alt="Plans d'exécution affichés sur le chantier, à côté d'un dressing laqué blanc en cours de finition"
            caption="Plans d'exécution du dressing affichés au mur, à côté de l'ouvrage en cours de pose : les vantaux sont montés et le sol est encore protégé. Chantier réel des équipes partenaires."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Minh-Hoa Truong — architecte partenaire</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Collaboration régulière sur les projets de redistribution, d'extension et de rénovation patrimoniale : conception, plans d'exécution et dossiers d'autorisation d'urbanisme déposés en mairie."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Igli Braho — ingénieur structure, bureau Tridenso</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Collaboration régulière sur les dossiers structurels : notes de calcul d'ouverture de mur porteur, renforcement de plancher, création de trémie et reprise en sous-œuvre, validées avant exécution."}
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Partenaire géotechnicien : Geo2Mo"
        lead="Études de sols et diagnostics de fondation pour les reprises structurelles et le gros œuvre technique."
      >
        <div className="flex flex-col gap-8">
          <MqFig entier
            src="/photos/maquette/geo2mo-etude-geotechnique.jpg"
            alt="Schéma d'une étude géotechnique avec forage de reconnaissance des sols, prélèvement d'échantillon et fondations d'un bâti ancien"
            caption="Schéma pédagogique : principe d'une reconnaissance géotechnique — sondage carotté à côté d'un mur ancien et d'une fondation neuve, couches de sol relevées avant toute reprise structurelle. Dessin d'illustration, pas la photographie d'un sondage réel."
            ratio="aspect-square"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Geo2Mo — bureau d&apos;études de sols et fondations</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Partenaire mobilisé sur les projets où la stabilité des fondations ou la nature des sols conditionne la faisabilité technique. L'étude géotechnique apporte les données nécessaires au dimensionnement des reprises en sous-œuvre, des extensions et des surélévations."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Sérieux et réactivité</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Geo2Mo fait preuve d'un grand sérieux dans la préparation des dossiers, d'une forte réactivité et d'une capacité à mobiliser rapidement les bons partenaires pour respecter les échéances des études."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Échanges réguliers et décisions techniques</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Les équipes d'ARCHI PILOTE RÉNOVATION et de Geo2Mo maintiennent des échanges réguliers tout au long de l'étude pour valider ensemble les hypothèses de calcul et les décisions techniques complexes."}
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Rôle des architectes DPLG et ingénieurs structure"
        lead="Des compétences mobilisées uniquement lorsque le dossier l'exige."
      >
        <div className="flex flex-col gap-8">
          <MqFig entier
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge"
            caption="Schéma pédagogique : ouverture de mur porteur, la charge étant reprise par une poutre dimensionnée par un ingénieur structure puis descendue jusqu'aux appuis."
            ratio="aspect-[10/7]"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Architecte partenaire</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Intervient sur les projets d'extension, de surélévation ou de modification de structure, en particulier lorsqu'une autorisation d'urbanisme l'impose."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Ingénieur structure</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Réalise les notes de calcul et valide les modifications touchant murs porteurs, planchers ou fondations avant exécution."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">Entreprises par lot</h3>
              <p className="t-sec text-ivoire/85 leading-relaxed">
                {"Exécutent les travaux (gros œuvre, second œuvre, énergie) et facturent directement le client selon leur devis."}
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection title="Transparence sur la facturation" lead="Chaque acteur facture ce qu'il exécute.">
        <MqProse>
          <p>
            {"Les entreprises partenaires contractantes facturent directement le client pour les travaux qu'elles réalisent. Les architectes et ingénieurs partenaires facturent leur mission spécifique. Le modèle économique du pilotage assuré par ARCHI PILOTE RÉNOVATION est détaillé sur une page dédiée, présentée avant tout engagement."}
          </p>
        </MqProse>
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqSection title="Questions fréquentes">
        <MqFaq items={FAQ} />
      </MqSection>

      <MqCta
        title="Décrivez votre projet, nous le structurons"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste."
      />

      <MqReadNext
        items={[
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Achats en direct, transparence" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Syndic, urbanisme, copropriété" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Structure, copropriété, aléas" },
        ]}
      />
    </main>
  );
}
