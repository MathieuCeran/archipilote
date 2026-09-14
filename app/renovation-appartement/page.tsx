import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Rénovation d'appartement à Paris et en Île-de-France | ARCHI PILOTE",
  description:
    "Rénover un appartement en Île-de-France demande de traiter trois sujets avant l'esthétique : ce que la structure autorise, ce que les évacuations permettent…",
  alternates: { canonical: "/renovation-appartement" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Paris · Hauts-de-Seine · Île-de-France"
        title="Rénovation d'appartement : la copropriété fixe une partie des règles"
        lead={
          <>
            <p>Évacuations, structure, ventilation, accès et horaires : dans un immeuble, les contraintes se vérifient avant de dessiner le plan.</p>
            <p className="mt-3">
              Rénover un appartement en Île-de-France demande de traiter trois sujets avant l'esthétique : ce que la structure autorise, ce que les évacuations permettent et ce que la copropriété accepte. ARCHI PILOTE RÉNOVATION relève le logement, vérifie ces contraintes, arrête le plan, rend les devis comparables et pilote l'exécution jusqu'à la levée des réserves. Les entreprises partenaires contractantes exécutent et facturent les travaux.
            </p>
          </>
        }
      />

      <MqSection
        kicker="Contraintes"
        title="Ce qui décide réellement du plan"
        lead="Dans un appartement, trois familles de contraintes commandent l'aménagement. Les ignorer conduit à un plan séduisant mais irréalisable."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            {
              title: "La structure",
              dek: "Un mur épais n'est pas automatiquement porteur, un mur fin n'est pas automatiquement sans rôle structurel.",
              text: "L'ouverture entre une cuisine et un séjour peut relever d'une simple cloison ou d'une reprise de charges avec poutre et poteaux d'appui. Dans le second cas, une étude structure et une autorisation de copropriété sont nécessaires.",
            },
            {
              title: "Les évacuations",
              dek: "La pente disponible entre l'appareil et la chute détermine la faisabilité d'un déplacement.",
              text: "Déplacer une salle d'eau ou une cuisine dépend des diamètres, des pentes, des distances et de l'accessibilité des chutes. Un rehaussement de sol ou un système de relevage modifie les niveaux, donc les portes et les seuils.",
            },
            {
              title: "La ventilation",
              dek: "Une rénovation plus étanche sans renouvellement d'air maîtrisé produit de la condensation.",
              text: "Remplacer les menuiseries et isoler modifie le comportement du logement. Les entrées d'air, le transit sous les portes et l'extraction en pièces techniques se traitent dans le même mouvement que l'isolation.",
            },
          ].map((c) => (
            <div key={c.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display t-haut text-ivoire">{c.title}</h3>
              <p className="text-ivoire/90 font-medium t-sec leading-relaxed">{c.dek}</p>
              <p className="text-muted t-sec leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl t-sec leading-relaxed text-ivoire/85">
          Lorsque l'ouverture envisagée relève d'une reprise de charges et non d'une simple cloison, la
          démarche complète — étude, étaiement, portique, réception — est décrite sur la page{" "}
          <Link href="/ouverture-mur-porteur" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">ouverture de mur porteur</Link>.
        </p>

        {/*
          06/09 : les trois encarts ci-dessus (structure, évacuations, ventilation) étaient
          jusqu'ici du texte seul. Cette illustration les met en volume : elle sépare
          l'appartement en quatre plateaux empilés — l'existant en haut, la structure au
          milieu, les réseaux en dessous — ce qui est très exactement la hiérarchie décrite
          par la section. Image OUVERTE et vérifiée avant écriture de la légende : on y lit
          bien les trois libellés EXISTANT / STRUCTURE / RÉSEAUX, les trois alertes OMISSION,
          INTERFACE et REPRISE, et le parcours en huit repères qui l'entoure — celui de
          /notre-methode, pas les sept étapes listées plus bas sur cette page ; la légende ne
          les confond donc pas. Les trois blocs CERTAIN / PROBABLE / OPTIONNEL sont VIDES sur
          cette version : aucun montant à commenter, donc aucun budget inventé.
          C'est un dessin de marque, pas une photo : `entier` l'affiche en entier et la
          légende l'annonce comme un schéma. Native en 1672×941, d'où le cadre 16/9.
        */}
        <div className="mt-10">
          <MqFig entier
            src="/photos/pedagogie/schema-appartement-plateaux-pilotage.jpg"
            alt="Vue éclatée d'un appartement en quatre plateaux superposés — l'existant, la structure, les réseaux — entourée d'un parcours en huit repères et de trois alertes : omission, interface, reprise"
            caption="Le même appartement décomposé en quatre plateaux : l'existant qu'on voit, la structure qui commande les ouvertures, les réseaux qui commandent les points d'eau. C'est entre ces plateaux que se logent les oublis, les interfaces mal réparties et les reprises. Illustration de principe, pas le relevé d'un logement précis. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />
        </div>

        {/*
          03/09 : un bloc de trois photos de pièces livrées (cuisine, salle d'eau, salon) avait été
          ajouté ici sous l'intitulé « Ce que ces contraintes donnent une fois le logement livré ».
          Retiré : les trois intitulés au-dessus sont techniques (structure, évacuations, ventilation)
          et aucune de ces photos ne montre la contrainte — ni chute, ni reprise de charge, ni débit
          d'air. Illustrer une contrainte technique par une pièce décorée est incohérent, et
          l'avertissement qui accompagnait le bloc ne rattrapait pas le décalage.
          Ces trois photos restent visibles sur /realisations, où elles sont à leur place.
          Les ouvrages techniques de cette page sont illustrés plus bas (schéma VMC, carottage de
          façade, démolitions, réseaux mis à nu).
        */}
      </MqSection>

      <MqSection
        kicker="Ventilation"
        title="Immeuble sans installation : nous montons le dossier"
        lead="De nombreux immeubles anciens ne disposent d'aucune ventilation mécanique contrôlée. Nous constituons alors un dossier technique complet : constat de l'existant, solution proposée, incidence sur les parties communes, chiffrage et calendrier."
      >
        <MqProse>
          <p>
            Ce dossier est adressé au syndic avec une demande d'inscription à l'ordre du jour de l'assemblée générale. Lorsqu'une traversée de façade ou de plancher est nécessaire, le carottage est réalisé par une entreprise spécialisée, après validation.
          </p>
          <p>
            Le détail de ces{" "}
            <Link href="/demarches-administratives-renovation" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">démarches administratives en copropriété</Link>{" "}
            — syndic, assemblée générale, déclaration préalable en mairie — fait l'objet d'une page dédiée.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Constat écrit et photographique de l'installation existante.",
              "Solution individuelle ou collective, avec variantes chiffrées.",
              "Note d'incidence sur les parties communes.",
              "Demande d'inscription à l'ordre du jour de l'assemblée générale.",
              "Carottage réalisé après autorisation, par une entreprise spécialisée.",
              "Réglage et vérification des débits après mise en service.",
            ]}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma de principe d'une ventilation mécanique contrôlée hygroréglable en appartement : entrées d'air en menuiseries, transit sous les portes, extraction en cuisine et salle de bains, gaines vers le caisson et carottage de traversée de mur"
            caption="Principe de ventilation hygroréglable : entrées d'air, transit et extraction forment un ensemble indissociable de l'isolation."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/chantier-carottage-facade.jpg"
            alt="Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation"
            caption="Carottage de façade pour ventilation : bâti fixé sur le mur, carottage à l'eau, carotte extraite posée au sol — après accord écrit du syndic sur la partie commune. Image d'illustration."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Déroulé" title="Les sept étapes d'une rénovation d'appartement">
        {/*
          08/09 : infographie de la marque fournie par le client, ouverte et vérifiée avant pose —
          titre imprimé « Les sept étapes d'une rénovation d'appartement », kicker « Déroulé »,
          mêmes sept étapes que la liste ci-dessous. Planche composée (logo, légendes, pied) :
          `entier`, jamais recadrée, jamais légendée « chantier réel ».
        */}
        <div className="max-w-4xl mb-12">
          <MqFig
            src="/photos/pedagogie/infographie-sept-etapes-appartement.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : Les sept étapes d'une rénovation d'appartement"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Les sept étapes d'une rénovation d'appartement."
            ratio="aspect-[4/3]"
            entier
          />
        </div>
        <MqNumbered
          cols={2}
          items={[
            {
              title: "Relevé du logement et lecture de l'immeuble",
              text: "Relevé des dimensions réelles, repérage des murs porteurs et des gaines techniques, lecture du règlement de copropriété et des contraintes d'accès à l'étage.",
            },
            {
              title: "Vérification des évacuations et des réseaux",
              text: "Position des chutes, pentes disponibles, diamètres, tableau électrique, arrivée de gaz et ventilation existante. Ces données conditionnent le plan avant toute décision d'aménagement.",
            },
            {
              title: "Plan d'aménagement contraint par la technique",
              text: "Le plan est arrêté après les vérifications techniques : déplacement de cuisine ou de salle d'eau, création d'une chambre, ouverture entre pièces.",
            },
            {
              title: "Autorisations de copropriété",
              text: "Demande écrite au syndic pour les travaux touchant aux parties communes, à la structure, aux menuiseries sur rue ou à la ventilation, avec inscription à l'ordre du jour de l'assemblée générale.",
            },
            {
              title: "Chiffrage comparable et achats en direct",
              text: "Descriptif détaillé transmis à plusieurs entreprises partenaires, analyse ligne à ligne, puis achat des matériaux en direct par le client au prix fournisseur.",
            },
            {
              title: "Exécution pilotée et suivi quotidien",
              text: "Protection des parties communes, gestion des horaires autorisés, points de contrôle avant fermeture des cloisons et photos datées transmises chaque jour au client.",
            },
            {
              title: "Réception et levée des réserves",
              text: "Liste des réserves écrite, reprise par les entreprises concernées, remise des notices, garanties et justificatifs d'assurance des entreprises exécutantes.",
            },
          ]}
        />
        <p className="mt-8 max-w-2xl t-sec leading-relaxed text-ivoire/85">
          Ce déroulé ne change pas d'un immeuble à l'autre : il s'applique de la même manière sur toute
          notre zone d'intervention, dont les{" "}
          <Link href="/renovation-hauts-de-seine-92" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">Hauts-de-Seine (92)</Link>.
        </p>
        <div className="mt-10 max-w-3xl">
          <MqFig
            src="/photos/maquette/schema-demarches-copropriete.jpg"
            alt="Démarches de copropriété avant une rénovation d'appartement."
            caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire."
            ratio="aspect-[10/7]"
          />
        </div>

        {/*
          Huit photos réelles ci-dessous, chacune vérifiée individuellement (chantiers des
          équipes partenaires). Honnêteté : la bibliothèque de photos ne permet pas de
          prouver qu'elles documentent un seul et même appartement du relevé à la livraison
          (pas de métadonnées EXIF exploitables, fichiers copiés en batch, plusieurs noms de
          fichiers renvoyant à la même photo) — chaque image est réelle et associée au type
          d'étape qu'elle illustre, sans affirmer qu'il s'agit du même chantier suivi en
          continu.

          Corrections du 31/08/2026 après vérification image par image :
          1) chDemolitionCloisonBoisPlatre.jpeg était légendée comme un état "avant travaux"
             avec "boiseries d'origine relevées avant tout chiffrage" — la photo montre en
             réalité une cloison déjà ouverte jusqu'au lattis bois, gravats au sol : c'est une
             photo de démolition, pas un relevé avant travaux. Légende corrigée en conséquence.
          2) chCuisineSejourParquetChevrons.jpeg (dernière vignette, "Réception") s'est révélée
             être la même pièce que chCuisineNoireSejourFinie.jpeg utilisée en photo d'ouverture
             de cette page (même cuisine, même agencement, même angle) : la page affichait deux
             fois la même scène sous deux légendes différentes. Remplacée par
             chCuisineCremeIlot.jpeg (cuisine livrée distincte, non utilisée ailleurs sur le
             site).

          Correction du 03/09/2026 — DÉFAUT SIGNALÉ PAR LE CLIENT (« tu mets 14 fois les mêmes
          photos de démolition et de structure mise à nu »). Vérification visuelle fichier par
          fichier : la séquence affichait QUATRE fois le même mur.
          a) chDemolitionCloisonBoisPlatre.jpeg et chDemolitionLattisPlatreOuverture.jpeg sont
             la MÊME prise de vue (md5 différents — recadrage de 1200 à 1186 px de large — mais
             perforateur posé au même endroit sur le tas de gravats, câble enroulé à l'identique,
             même fenêtre bleutée derrière le lattis). Elles étaient légendées comme deux moments
             distincts (« Structure mise à nu » puis « Quelques jours plus tard ») : c'était faux.
          b) chDemolitionGravatsChantier.jpeg, dans la bibliothèque, est un troisième exemplaire
             de cette même prise de vue. Écarté.
          c) chDemolitionOuvertureCouloir.jpeg est le MÊME mur et le MÊME couloir vus de plus
             loin (même lattis en pan de bois, même huisserie à gauche, même fenêtre au fond).
          Une seule de ces vues est conservée (vignette 1). Les trois autres sont remplacées par
          des étapes qui apportent chacune une information nouvelle : réseaux d'eau, électricité
          et faux plafond, plancher isolé, implantation de la salle d'eau.

          Même traitement pour les salles de bains, second point signalé par le client :
          chHdgSdbMarbreProfilesLaitonPose.jpeg et chHdgDoucheMarbreLaitonProtection.jpeg sont
          la même salle d'eau à la même phase (mêmes dalles de marbre, mêmes profilés laiton,
          même plan vasque découpé visible dans les deux cadrages). Les deux sont retirées d'ici
          — elles restent visibles sur /realisations et /tendances-2026-2027 — et remplacées par
          deux stades réellement différents d'une salle d'eau : l'implantation avant carrelage
          (chEtancheiteReceveurDoucheLaser) puis l'équipement posé (chSdbVasquesPoseMeubleBeige).

          Enfin, chaque vignette reçoit désormais le ratio natif de son fichier (aspect-[3/4]
          pour les portraits 1200×1600, aspect-[4/3] pour les paysages 1600×1200). Le cadre
          paysage par défaut de MqFig amputait les portraits de près de la moitié de leur
          hauteur. La grille passe en items-start pour rester alignée avec des hauteurs mixtes.
        */}
        <p className="eyebrow mt-10">Étapes réelles d'une rénovation d'appartement pilotée de A à Z</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
          {/* 05/09 : chDemolitionCloisonBoisPlatre retirée d'ici — même prise de vue que
              celle affichée sur quatre autres pages (cf. scripts/surexposition.py). La
              remplaçante montre une AUTRE pièce du même appartement, à la même étape :
              murs décapés jusqu'au support, alimentations neuves déjà tirées en pied de
              mur. Elle illustre donc mieux ce que « dépose » veut dire au début d'une
              rénovation d'appartement — la pièce vidée, pas seulement un mur cassé. */}
          <MqFig
            src="/photos/chantiers/chDemolitionLattisPlatreChantier2.jpeg"
            alt="Pièce d'appartement ancien vue depuis une embrasure : murs décapés jusqu'au support, lambeaux de papier peint, alimentations d'eau chaude et froide tirées en pied de mur, fenêtre au fond"
            caption="Dépose : la pièce est vidée et les murs décapés jusqu'au support, lambeaux de papier peint encore visibles, alimentations neuves déjà tirées en pied de mur. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chPlomberieMulticoucheDistributionMurale.jpeg"
            alt="Distribution d'eau neuve sur un mur nu : tubes sertis sur raccords laiton, fixés par colliers, descentes en gaines et attente d'évacuation en PVC"
            caption="Réseaux d'eau : distribution tracée au crayon sur le mur, tubes sertis sur raccords laiton et maintenus par colliers, attente d'évacuation laissée ouverte. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chElectriciteFauxPlafondRailsCablage.jpeg"
            alt="Plafond d'appartement équipé de fourrures métalliques, gaines annelées et conducteurs électriques apparents avant pose des plaques, doublage et pare-vapeur en fond"
            caption="Électricité et faux plafond : fourrures posées, gaines et conducteurs tirés avant la fermeture des plaques — c'est le moment où tout se vérifie. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chIsolationPhoniqueGranulesPlancher.jpeg"
            alt="Plancher ancien mis à nu dans une pièce à boiseries, granulés isolants blancs versés entre les bois du plancher, fenêtres anciennes et volets intérieurs en bois, immeuble en vis-à-vis"
            caption="Plancher mis à nu : granulés isolants versés entre les bois du plancher ancien avant repose d'un revêtement, boiseries de la pièce encore en place. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chEtancheiteReceveurDoucheLaser.jpeg"
            alt="Salle d'eau en préparation : plaques de plâtre hydrofuges vertes, ligne laser verte projetée au niveau, bâti du receveur de douche et attentes d'évacuation en PVC noir"
            caption="Salle d'eau : emplacement du receveur repéré au laser, attentes d'évacuation et réservations de robinetterie tracées sur les plaques hydrofuges, avant carrelage. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chParquetChevronsPosePiece.jpeg"
            alt="Pose d'un sol stratifié imitation chêne à bâtons rompus, lames clipsées sur sous-couche, chutes et outils au sol"
            caption="Sols : pose du revêtement à bâtons rompus (stratifié imitation chêne), lames clipsées sur sous-couche, chutes et outils encore au sol. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chSdbVasquesPoseMeubleBeige.jpeg"
            alt="Salle d'eau équipée : meuble sur mesure beige, plan blanc et deux vasques rondes posées, câble électrique pendant au-dessus de la crédence, robinetterie absente"
            caption="Équipements : meuble sur mesure, plan blanc et vasques en place ; le câble reste pendant au-dessus de la crédence et la robinetterie n'est pas posée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineCremeIlot.jpeg"
            alt="Cuisine ouverte en fin de chantier sous velux, îlot central et plan de travail noir, façades crème sur mesure, four et micro-ondes encastrés"
            caption="Fin de chantier : cuisine posée sous velux, îlot et plan de travail noir en place, four et micro-ondes encastrés ; un câble reste en attente de raccordement au-dessus du plan de travail. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
      </MqSection>

      {/*
        07/09 : section ajoutée. Motif — la page traite la structure, les réseaux, la
        ventilation et le déroulé, mais jamais la contrainte la plus visible d'un appartement
        ancien : des circulations étroites et des volumes perdus qu'aucun meuble du commerce
        ne rattrape. Quatre photos du fonds documentent exactement cela ; chacune a été ouverte
        avant d'écrire sa légende, et aucune n'atteint la limite de trois pages fixée par
        `scripts/surexposition.py`.

        Écartées après ouverture :
        — chDressingBlancInterphone : c'est le même dressing laqué blanc à quatre vantaux,
          poignées bâton et plans punaisés au mur, que chDressingLaqueBlancCouloirPlans déjà
          publiée sur /menuiserie-agencement-sur-mesure.
        — chCouloirDressingToilettes : même dégagement que chDressingProcheToilettes retenue
          ci-dessous.
        — chIsolationPhoniqueGranulesPlancher2 : même salon aux granulés que la vignette
          « Plancher mis à nu » déjà affichée plus haut sur cette page.
        — chCouloirParquetChevronsPorteBois, d'abord retenue puis retirée : la scène qu'elle
          forme avec chCouloirParquetChevronsPortesOuvertes est déjà comptée sur trois pages
          (/savoir-faire-ancien, /sols-finitions-renovation et un article de blog) ; l'ajouter
          ici l'aurait portée à quatre. Remplacée par chNicheArrondieCouloirBacklight, qui
          n'était publiée nulle part.
        — chCouloirPorteBoisModerne : couloir trop sombre, sujet illisible.

        Deux de ces quatre photos sont en cours de chantier (bâches, boîtiers en attente, murs
        décapés) et deux sont livrées ; les légendes le disent image par image.
      */}
      <MqSection
        kicker="Circulations"
        title="Le couloir, la surface la moins exploitée d'un appartement"
        lead="Dans un logement ancien, les mètres carrés ne se gagnent pas en poussant les murs : ils se récupèrent dans les dégagements, les angles perdus et les recoins techniques."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chPlacardCompteurElectriqueArrondi.jpeg"
            alt="Placard technique en panneau brut monté dans un dégagement : porte haute ouverte sur le compteur, le disjoncteur et le tableau à deux rangées de protections, étagères d'angle arrondies à droite, caisson bas ouvert en dessous, serre-joints accrochés à la porte voisine"
            caption="Le tableau habillé plutôt que déplacé : compteur, disjoncteur et tableau restent où ils sont, un caisson vient les enfermer derrière une porte, et l'angle perdu à côté est récupéré en étagères arrondies. Panneaux encore bruts, serre-joints encore en place. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chDressingMiroirCouloir.jpeg"
            alt="Placard toute hauteur en panneau brut à deux portes, monté dans un couloir étroit dont le sol est protégé par des bâches, boîtier électrique rouge en attente sur le mur de gauche, câble sorti du plafond, pièce aux murs décapés visible à droite"
            caption="Un couloir étroit devenu rangement : le placard prend toute la largeur disponible, du sol au plafond, en panneaux encore bruts. Le boîtier d'attente est fixé au mur, le câble sort du plafond, le sol est bâché ; à droite, une pièce dont les murs sont encore décapés. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chDressingProcheToilettes.jpeg"
            alt="Dégagement livré bordé sur toute sa longueur de placards toute hauteur en placage bois, poignées bâton en inox, porte à panneaux blanche conservée au fond, parquet clair à larges lames et pouf en tissu bouclé"
            caption="Le même principe une fois livré : le dégagement est bordé sur toute sa longueur de placards toute hauteur en placage bois à poignées bâton, jusqu'à la porte à panneaux conservée du fond. Parquet clair à larges lames, plinthe assortie au meuble. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chNicheArrondieCouloirBacklight.jpeg"
            alt="Entrée d'appartement livrée : mur entier de rangements toute hauteur laqués beige à ouverture par pression, se terminant en angle arrondi, corniche d'éclairage indirect au plafond, niche habillée de bois foncé avec assise et tiroir, parquet clair en chevrons"
            caption="Le même volume traité jusqu'au bout : un mur entier de rangements toute hauteur, sans poignée apparente, dont le retour est arrondi pour ne pas buter dans le passage ; une niche habillée de bois foncé ménage une assise et un tiroir, et l'éclairage est repris en corniche au plafond. Un carton emballé attend encore à gauche. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <p className="mt-8 max-w-2xl t-sec leading-relaxed text-ivoire/85">
          Le dessin de ces rangements, l&apos;arbitrage entre sur-mesure intégral et façades sur
          caissons standards et les fourchettes constatées au mètre linéaire sont détaillés sur la
          page{" "}
          <Link href="/menuiserie-agencement-sur-mesure" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">menuiserie et agencement sur mesure</Link>.
        </p>
      </MqSection>

      <MqSection
        kicker="Budget"
        title="Où se gagnent les économies"
        lead="Le prix se construit avant le chantier. Une fois les entreprises engagées, la marge de manœuvre devient marginale."
      >
        {/*
          08/09 : infographie de la marque fournie par le client, ouverte et vérifiée avant pose —
          titre imprimé « Où se gagnent les économies », kicker « Budget », sous-titre identique au
          lead de cette section, mêmes trois leviers que la liste ci-dessous. `entier`, jamais recadrée.
        */}
        <div className="max-w-4xl mb-12">
          <MqFig
            src="/photos/pedagogie/infographie-ou-se-gagnent-les-economies.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : Où se gagnent les économies"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Où se gagnent les économies."
            ratio="aspect-[4/3]"
            entier
          />
        </div>
        <p className="mb-8 max-w-2xl t-sec leading-relaxed text-ivoire/85">
          Le premier de ces trois leviers,{" "}
          <Link href="/achat-direct-materiaux" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">l'achat direct des matériaux</Link>,
          est détaillé poste par poste sur sa propre page.
        </p>
        <MqNumbered
          cols={3}
          items={[
            {
              title: "Achats de matériaux en direct",
              text: "Carrelage, parquet, sanitaires, robinetterie, menuiseries et appareillage électrique achetés par le client au prix fournisseur, sans marge intermédiaire.",
            },
            {
              title: "Devis rendus comparables",
              text: "Même descriptif transmis à toutes les entreprises, mêmes quantités, mêmes hypothèses. La comparaison porte alors sur le prix réel, pas sur le périmètre.",
            },
            {
              title: "Arbitrages décidés en amont",
              text: "Chaque modification en cours de chantier coûte plus cher que la même décision prise avant le démarrage. Le calendrier de décisions est écrit dès le départ.",
            },
          ]}
        />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Rénovation d'appartement : réponses directes">
        <MqFaq
          items={[
            {
              q: "Combien de temps dure la rénovation complète d'un appartement ?",
              a: "À titre indicatif, un appartement de 50 à 80 m² rénové intégralement demande généralement de dix à seize semaines de travaux, hors délais d'études, d'autorisations de copropriété et d'approvisionnement. Les immeubles anciens avec ascenseur limité ou horaires restreints allongent le calendrier.",
            },
            {
              q: "Peut-on déplacer une cuisine ou une salle de bains dans un appartement ?",
              a: "C'est possible lorsque les évacuations le permettent. Le point déterminant est la pente disponible entre le nouvel appareil et la chute existante. Sans pente suffisante, il faut prévoir un rehaussement de sol, un système de relevage ou renoncer au déplacement.",
            },
            {
              q: "Quelles autorisations demander au syndic de copropriété ?",
              a: "Toute intervention sur un élément porteur, sur une partie commune, sur les menuiseries visibles depuis l'extérieur ou sur la ventilation nécessite une autorisation de l'assemblée générale. Nous constituons le dossier technique, la demande d'inscription à l'ordre du jour et les pièces justificatives.",
            },
            {
              q: "Que faire si l'immeuble n'a aucune ventilation mécanique contrôlée ?",
              a: "Nous documentons l'absence d'installation, proposons une solution individuelle ou collective, chiffrons les travaux et engageons les démarches auprès du syndic. Lorsqu'une traversée est nécessaire, le carottage est réalisé après validation par la copropriété.",
            },
            {
              q: "Peut-on habiter le logement pendant les travaux ?",
              a: "C'est déconseillé pour une rénovation complète : la dépose des réseaux coupe l'eau et l'électricité, la poussière est permanente et le phasage devient plus long et plus coûteux. Un phasage pièce par pièce reste possible pour une rénovation partielle.",
            },
            {
              q: "Comment faites-vous baisser le budget sur ce type de projet ?",
              a: "Par l'achat des matériaux en direct par le client au prix fournisseur, l'analyse du chiffrage ligne à ligne par un ancien expert en chiffrage, la suppression des doublons entre lots et des arbitrages décidés avant le démarrage plutôt qu'en cours de chantier.",
            },
          ]}
        />
        <p className="mt-8 max-w-2xl border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
          <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta />

      <MqReadNext
        items={[
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Cloisons, étanchéité, finitions" },
          { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie", sub: "Les réseaux qui commandent le plan" },
          { href: "/renovation-salle-de-bain-maison", label: "Rénovation de salle de bain", sub: "Évacuations, pentes, étanchéité" },
          { href: "/renovation-cuisine-maison", label: "Rénovation de cuisine", sub: "Implantation arrêtée avant les réseaux" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes constatées en Île-de-France" },
          { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France", sub: "Notre zone d'intervention" },
        ]}
      />
    </>
  );
}
