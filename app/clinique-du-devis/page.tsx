import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/clinique-du-devis" },
  title: "Clinique du devis : lire un devis de rénovation ligne à ligne | ARCHI PILOTE RÉNOVATION",
  description:
    "Méthode d'analyse d'un devis de travaux : quantités, unités, hypothèses, exclusions, doublons entre lots et pièges classiques, avec grille de contrôle et procédure en étapes.",
};

const GRILLE = [
  {
    critere: "Intitulé du lot",
    risque: "Regroupement flou de plusieurs métiers sous un seul intitulé",
    controle: "Chaque lot nommé et rattaché à une pièce ou une zone précise",
  },
  {
    critere: "Quantités",
    risque: "Surface ou linéaire estimé sans relevé réel",
    controle: "Quantités vérifiées au mètre sur plan ou sur site",
  },
  {
    critere: "Unité de facturation",
    risque: "Confusion entre m², mètre linéaire et forfait",
    controle: "Unité cohérente avec la nature de la prestation",
  },
  {
    critere: "Hypothèses techniques",
    risque: "Support sain, accès facile ou réseau existant supposés sans vérification",
    controle: "Hypothèses écrites et confrontées à l'état réel du logement",
  },
  {
    critere: "Exclusions",
    risque: "Évacuation, dépose ou mise aux normes non chiffrées",
    controle: "Liste des exclusions demandée par écrit à chaque entreprise",
  },
  {
    critere: "Interfaces entre lots",
    risque: "Prestation absente des deux devis voisins (réservation, raccord, protection)",
    controle: "Vérification croisée systématique entre lots limitrophes",
  },
  {
    critere: "Doublons",
    risque: "Même prestation facturée par deux corps de métier différents",
    controle: "Repérage ligne à ligne des prestations qui se recoupent",
  },
  {
    critere: "Délai et conditions de règlement",
    risque: "Échéancier flou, avances disproportionnées",
    controle: "Échéancier lié à des étapes de chantier vérifiables",
  },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="PREUVES — MÉTHODE"
        title="Clinique du devis : apprendre à lire un devis de rénovation avant de signer"
        lead="Un devis de rénovation ne se juge pas sur son total mais sur ce qu'il décrit ligne à ligne. Notre clinique du devis applique une méthode issue du chiffrage en foncière : vérification des quantités, des unités, des hypothèses, des exclusions et des interfaces entre lots. Objectif : transformer un document commercial en outil de décision comparable, avant tout engagement financier."
      />

      <div className="rf-wrap mq-mesure--large pb-4 mq-planche-ouverture">
        <MqFig entier
          src="/photos/pedagogie/13-clinique-devis-hero.jpeg"
          alt="Devis de rénovation anonymisé avec six zones mises en évidence : quantité, unité, fourniture, pose, exclusion, hypothèse"
          caption="Éléments à contrôler dans un devis de rénovation. Document fictif et anonymisé, schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        kicker="POURQUOI LE TOTAL NE SUFFIT PAS"
        title="Le montant global masque presque toujours l'essentiel"
        lead="Deux devis au même total peuvent couvrir des périmètres très différents. La comparaison n'a de sens qu'après remise à niveau ligne à ligne."
      >
        {/*
          Image générique retirée (schema-repartition-budget.jpg) : répartition
          budgétaire par poste, réutilisée telle quelle sur 9 autres pages du
          site (estimateur-travaux, renovation-complete, guides...). Elle ne
          montre rien de ce qu'est cette page (lire un devis ligne à ligne) et
          correspondait exactement au diagnostic client « images trop générales ».
        */}
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display t-haut text-ivoire">Le montant total est une addition, pas une preuve</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Un total identique peut cacher des écarts de quantités, de qualité ou de prestations incluses.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un devis à 42 000 € pour une rénovation de salle de bains peut inclure la dépose complète,
                  l'étanchéité et l'évacuation des gravats, quand un autre au même montant exclut ces trois postes
                  et les facturera en avenant. Sans lecture ligne à ligne, l'écart n'apparaît qu'en cours de
                  chantier.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire">Le risque se loge entre les lots, pas dans les lots</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Les prestations qui manquent ou qui se répètent se trouvent aux interfaces entre corps de métier.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une ouverture de mur porteur qui déplace une arrivée d'eau, une isolation qui modifie le débit
                  de ventilation, une cuisine dessinée avant le plan électrique : ces jonctions entre lots sont le
                  terrain le plus fertile pour les oublis et les surcoûts imprévus.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        {/*
          Image générique retirée (schema-mur-porteur.jpg) : schéma d'ouverture
          de mur porteur, sans rapport avec la lecture d'un devis. Ce schéma est
          réutilisé sur 10 autres pages (chantiers-complexes, surelevation,
          gros-oeuvre-structure...) où il est réellement à sa place ; ici, il ne
          faisait qu'ajouter du bruit visuel hors-sujet.
        */}
      </MqSection>

      <MqDark
        kicker="MÉTHODE"
        title="La procédure d'analyse en huit étapes"
        lead="Chaque devis reçu suit la même trame de vérification, quel que soit le corps de métier concerné."
      >
        <div className="mb-10">
          <MqFig entier
            src="/photos/pedagogie/14-clinique-devis-8-etapes.jpeg"
            alt="Huit contrôles numérotés pour analyser un devis de travaux de rénovation"
            caption="Méthode en huit étapes pour analyser un devis de travaux. Schéma pédagogique."
            /* 03/09 : le fichier est en 1536x1024 (paysage). Il était affiché en aspect-[3/4]
               (portrait) : object-cover rognait les deux côtés et coupait le titre et la
               colonne de droite. Ratio aligné sur le ratio natif de l'image. */
            ratio="aspect-[3/2]"
          />
        </div>
        <MqDarkSteps
          steps={[
            {
              title: "Vérifier l'identité des lots et leur périmètre",
              text: "Chaque lot (démolition, plomberie, électricité, cloisons, carrelage, peinture, menuiseries) doit être nommé sans ambiguïté et rattaché à des pièces précises. Un devis qui regroupe plusieurs lots sous un intitulé vague empêche toute comparaison sérieuse.",
            },
            {
              title: "Contrôler les quantités et les unités",
              text: "Mètres carrés de sol, mètres linéaires de plinthe, nombre de points électriques, unités de robinetterie : chaque quantité doit correspondre à un relevé réel du logement, pas à une estimation forfaitaire. Une unité mal choisie (le m² facturé au lieu du mètre linéaire, par exemple) fausse tout le calcul.",
            },
            {
              title: "Lire les hypothèses posées par l'entreprise",
              text: "Un devis sérieux précise ses hypothèses : état du support supposé sain, absence d'amiante, accès normal au chantier, alimentation électrique existante suffisante. Ces hypothèses conditionnent le prix ; si elles sont fausses, un avenant suit presque toujours.",
            },
            {
              title: "Repérer les exclusions écrites noir sur blanc",
              text: "Évacuation des gravats, dépose de l'existant, mise aux normes électriques, raccordements en attente, protection des parties communes : ces postes sont fréquemment exclus sans que le client le remarque avant la facture finale.",
            },
            {
              title: "Chercher les prestations manquantes par comparaison croisée",
              text: "En superposant les devis des différents corps de métier, certaines prestations n'apparaissent nulle part : réservation pour une gaine, réseau de ventilation, reprise d'enduit après percement. Ce vide entre deux lots est le point de rupture budgétaire le plus fréquent.",
            },
            {
              title: "Identifier les doublons entre lots",
              text: "À l'inverse, deux entreprises facturent parfois la même prestation : dépose d'un sanitaire comptée à la fois en plomberie et en démolition, protection de sol facturée deux fois par des corps de métier différents. Chaque doublon repéré est signalé et rediscuté avec les entreprises concernées avant signature.",
            },
            {
              title: "Classer chaque ligne selon un code couleur de vigilance",
              text: "Vert pour une ligne précise et complète, orange pour une ligne à clarifier avant signature, rouge pour une ligne absente ou contradictoire avec une autre pièce du dossier. Cette grille de lecture rapide évite de signer sur la seule confiance dans le total.",
            },
            {
              title: "Formaliser les questions à poser avant signature",
              text: "La clinique du devis se termine par une liste écrite de questions précises adressées à l'entreprise : quantités à confirmer, hypothèses à vérifier sur site, exclusions à chiffrer séparément. Rien ne doit rester à l'oral.",
            },
          ]}
        />
      </MqDark>

      <MqSection
        kicker="GRILLE DE CONTRÔLE"
        title="Les points à vérifier avant de signer un devis"
        lead="Cette grille sert de check-list rapide pour une première lecture, avant l'analyse détaillée."
      >
        <div className="overflow-x-auto border border-line rounded-none">
          <table className="w-full min-w-[40rem] text-left t-sec">
            <thead>
              <tr className="border-b border-line">
                <th className="px-4 py-3 font-semibold text-ivoire">Critère</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Risque fréquent</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Point de contrôle</th>
              </tr>
            </thead>
            <tbody>
              {GRILLE.map((r) => (
                <tr key={r.critere} className="border-b border-line last:border-b-0 align-top">
                  <td className="px-4 py-3 font-medium text-ivoire whitespace-nowrap">{r.critere}</td>
                  <td className="px-4 py-3 text-muted leading-relaxed">{r.risque}</td>
                  <td className="px-4 py-3 text-ivoire/85 leading-relaxed">{r.controle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*
          Image générique retirée (schema-electricite-nfc15100.jpg) : schéma de
          tableau électrique (circuits, différentiel 30 mA), réutilisé sur
          /second-oeuvre et /detail-invisible. Sans rapport avec une grille de
          contrôle de devis — présence purement coïncidente ici.

          06/09 : le vide laissé par ce retrait est comblé par une image qui, elle,
          parle du sujet de la section. Image ouverte et vérifiée avant écriture de la
          légende. Elle ne fait pas doublon avec celle de l'en-tête de page
          (13-clinique-devis-hero) : celle-ci annote les COLONNES d'un devis (quantité,
          unité, fourniture, pose, exclusion, hypothèse), la nouvelle annote six BLOCS
          du document, dont deux absents de l'autre — l'identité et les assurances de
          l'entreprise, et les délais et l'échéancier de paiement. Native en 1600×900,
          donc cadre 16/9 et `entier` pour ne pas rogner les six encarts qui touchent
          les bords. Les montants du modèle sont laissés vides sur l'image : rien à
          inventer dans la légende, et aucun risque qu'on la prenne pour le devis d'un
          client réel.
        */}
        <div className="mt-10">
          <MqFig entier
            src="/photos/pedagogie/schema-devis-six-loupes.jpg"
            alt="Modèle de devis de travaux vierge, examiné par six points de contrôle numérotés : entreprise et assurances, prestations détaillées, matériaux définis, prix et TVA, délais et paiements, inclus et exclus"
            caption="Un modèle de devis dont les montants restent en pointillés, passé à la loupe en six points : identité et assurances de l'entreprise, prestations ligne à ligne, matériaux définis, prix et TVA, délais et échéancier, inclus, exclus et imprévus. Exemple pédagogique construit pour la démonstration — ce n'est le devis d'aucun client. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PIÈGES CLASSIQUES"
        title="Les erreurs de lecture les plus coûteuses"
        lead="Certaines formulations reviennent d'un devis à l'autre. Les reconnaître évite la majorité des mauvaises surprises."
      >
        <div className="mb-10">
          <MqFig entier
            src="/photos/pedagogie/15-clinique-devis-comparatif.jpeg"
            alt="Comparaison de trois devis de rénovation : forfait opaque, devis incomplet, devis comparable et détaillé"
            caption="Comparaison entre un devis opaque, incomplet et détaillé. Documents fictifs, schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
        <MqChecklist
          cols={1}
          items={[
            "Un forfait « tout compris » sans détail des quantités ni des unités de mesure.",
            "Une mention « selon état du support » sans définition de ce que recouvre un support sain.",
            "L'absence de ligne dédiée à l'évacuation des gravats, souvent facturée en supplément après coup.",
            "Une prestation de reprise après percement absente à la fois du devis de gros œuvre et de celui des cloisons.",
            "Deux devis qui facturent chacun la protection des sols communs sur la même période de chantier.",
            "Un délai d'exécution indiqué sans date de démarrage ferme, qui laisse la durée réelle indéterminée.",
          ]}
        />
      </MqSection>

      <MqSection
        kicker="CE QUE CHANGE UNE LECTURE RIGOUREUSE"
        title="Un devis clarifié devient un outil de négociation, pas un pari"
        lead="La rigueur de lecture, héritée du chiffrage en foncière, sert directement le budget du client."
      >
        <MqProse>
          <p>
            Cette méthode s'appuie sur l'expérience d'un ancien expert en chiffrage issu du secteur des foncières,
            habitué à comparer des offres à périmètre strictement identique avant tout engagement. Appliquée à un
            projet de rénovation, elle permet de renégocier en connaissance de cause, d'écarter les lignes
            ambiguës et de garder la maîtrise du budget avant le démarrage des travaux plutôt qu'en cours de
            chantier.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        kicker="POURSUIVRE L'ANALYSE"
        title="Les pages et les articles qui prolongent la lecture d'un devis"
        lead="Un devis clarifié se compare ensuite à des repères de prix, à une enveloppe estimée et à la façon dont les matériaux et le pilotage sont facturés."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <h3 className="display t-base text-ivoire">Chiffrer et comparer</h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/estimateur-travaux" className="text-orange-deep hover:underline t-sec">Estimer une enveloppe de travaux en quelques questions</Link></li>
              <li><Link href="/observatoire-prix-renovation" className="text-orange-deep hover:underline t-sec">Les fourchettes de prix par poste de travaux en Île-de-France</Link></li>
              <li><Link href="/modele-economique-transparence" className="text-orange-deep hover:underline t-sec">Qui facture quoi : le modèle économique détaillé</Link></li>
              <li><Link href="/achat-direct-materiaux" className="text-orange-deep hover:underline t-sec">Acheter les matériaux en direct, à votre nom</Link></li>
              <li><Link href="/glossaire-renovation" className="text-orange-deep hover:underline t-sec">Le vocabulaire employé dans les devis et les diagnostics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="display t-base text-ivoire">Articles du blog sur le devis et le budget</h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li><Link href="/blog/devis-travaux-lignes-a-verifier" className="text-orange-deep hover:underline t-sec">Les lignes d&apos;un devis à vérifier avant de signer</Link></li>
              <li><Link href="/blog/prix-renovation-maison-2026" className="text-orange-deep hover:underline t-sec">Ce que coûtent des travaux de rénovation de maison en 2026</Link></li>
              <li><Link href="/blog/cuisine-sur-mesure-ou-caissons-standards" className="text-orange-deep hover:underline t-sec">Cuisine sur mesure ou caissons standards : où se joue l&apos;économie</Link></li>
              <li><Link href="/blog/maprimerenov-cee-2026" className="text-orange-deep hover:underline t-sec">MaPrimeRénov&apos; et CEE : ce qu&apos;il faut vérifier avant de compter sur une aide</Link></li>
              <li><Link href="/blog/planning-chantier-commandes-a-lancer-en-premier" className="text-orange-deep hover:underline t-sec">Quelles commandes lancer en premier pour tenir le planning</Link></li>
              <li><Link href="/blog/ordre-intervention-lots-renovation-complete" className="text-orange-deep hover:underline t-sec">Dans quel ordre faire intervenir les lots d&apos;une rénovation complète</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-muted t-petit leading-relaxed mt-8 max-w-2xl">
          Les devis analysés portent sur des projets situés dans notre zone d&apos;intervention :{" "}
          <Link href="/renovation-hauts-de-seine-92" className="text-orange-deep hover:underline">les Hauts-de-Seine (92)</Link>
          {" "}en priorité et, selon l&apos;ampleur du chantier,{" "}
          <Link href="/renovation-ile-de-france" className="text-orange-deep hover:underline">le reste de l&apos;Île-de-France</Link>.
          Les prestations concernées sont détaillées dans{" "}
          <Link href="/services" className="text-orange-deep hover:underline">l&apos;index complet des travaux pilotés</Link>.
        </p>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Ce que les porteurs de projet demandent le plus souvent">
        <MqFaq
          items={[
            {
              q: "Combien coûte une analyse de devis chez ARCHI PILOTE RÉNOVATION ?",
              a: "L'analyse d'un devis s'inscrit dans l'étude de projet réalisée en amont d'un accompagnement. Le montant et les modalités sont communiqués lors du premier échange, en fonction du nombre de devis et de la complexité du projet.",
            },
            {
              q: "L'analyse remplace-t-elle l'avis d'un architecte ou d'un ingénieur structure ?",
              a: "Non. L'analyse porte sur la lecture économique et technique d'un devis de travaux courants. Lorsque le dossier touche à la structure du bâtiment, un architecte DPLG ou un ingénieur structure partenaire indépendant est mobilisé pour les points relevant de sa responsabilité professionnelle.",
            },
            {
              q: "Faut-il déjà avoir reçu plusieurs devis pour bénéficier de cette analyse ?",
              a: "Un seul devis suffit pour commencer la lecture ligne à ligne. La comparaison à périmètre égal devient possible dès qu'un deuxième devis est disponible, ce qui est recommandé avant toute décision.",
            },
            {
              q: "Que faire si une entreprise refuse de détailler ses hypothèses ou ses exclusions ?",
              a: "Un refus de clarification par écrit est en soi un signal à prendre au sérieux. La méthode consiste à formuler des questions précises et à conserver les réponses par écrit, avant tout engagement financier.",
            },
            {
              q: "Cette méthode s'applique-t-elle à un devis de rénovation complète comme à un devis de peinture seule ?",
              a: "Oui, la logique de vérification (quantités, unités, hypothèses, exclusions, interfaces, doublons) s'applique à tout devis de travaux, qu'il porte sur un seul lot ou sur l'ensemble d'un chantier.",
            },
            {
              q: "Les pièges identifiés donnent-ils lieu à une renégociation du devis ?",
              a: "L'analyse fournit les éléments factuels permettant au client de rouvrir la discussion avec l'entreprise concernée. La décision de renégocier, de faire réviser le devis ou de consulter une autre entreprise reste toujours celle du client.",
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
          { href: "/modele-economique-transparence", label: "Modèle économique & transparence", sub: "Comment l'achat direct de matériaux réduit le budget" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste de travaux" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Une enveloppe en quelques questions" },
          { href: "/achat-direct-materiaux", label: "Achat direct des matériaux", sub: "Facture à votre nom, sans marge" },
          { href: "/garanties-assurances", label: "Garanties & assurances", sub: "Ce qui doit être remis avant démarrage" },
        ]}
      />

      {/*
        LIMITATION HONNÊTE — Visuel 4 (réel anonymisé), requis avant le CTA.
        Sujet demandé : extrait réel avant/après clarification d'un devis,
        chiffres et identités masqués.
        Alt prévu : "Exemple anonymisé d'un devis clarifié avant signature."
        Constat : aucun extrait réel de devis n'existe dans /public (recherche
        "devis" sur l'ensemble du dossier public : aucun résultat, ni dans
        /photos/chantiers ni ailleurs).
        Règle explicite du client : jamais de faux document/devis fabriqué —
        ne pas combler ce vide avec un montage ou une reconstitution. Il faut
        un vrai devis client (avec son accord), scanné puis flouté sur les
        montants et identités, avant de pouvoir remplir ce bloc honnêtement.
      */}

      <MqCta
        title="Faites analyser votre devis avant de signer"
        lead="Transmettez votre devis, nous le passons ligne à ligne : quantités, hypothèses, exclusions et interfaces entre lots."
      />
    </main>
  );
}
