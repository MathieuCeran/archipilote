import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/savoir-faire-ancien" },
  title: "Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées | ARCHI PILOTE RÉNOVATION",
  description:
    "Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux normes pensée pour rester invisible.",
};

const OUVRAGES = [
  {
    title: "Fenêtres reproduites à l'identique",
    text: "Relevé du châssis existant, report des sections de montants et de petits bois, dépose soignée puis repose de la crémone en laiton d'origine sur un châssis neuf à double vitrage feuilleté.",
  },
  {
    title: "Crémones, espagnolettes et quincaillerie",
    text: "La quincaillerie ancienne est démontée, décapée, remise en fonctionnement et reposée. Lorsqu'une pièce manque, elle est refaite en laiton sur modèle plutôt que remplacée par un modèle courant.",
  },
  {
    title: "Moulures, corniches et rosaces",
    text: "Les profils sont moulés d'après un fragment prélevé sur place, puis fournis par la maison Guimier. Les raccords entre partie conservée et partie restituée sont retouchés au plâtre traditionnel.",
  },
  {
    title: "Parquets et boiseries",
    text: "Parquets point de Hongrie et bâtons rompus déposés lame par lame, purgés, recalés puis complétés en chêne de récupération. Boiseries repeintes en laque après rebouchage et égrenage.",
  },
  {
    title: "Cheminées et pierre",
    text: "Trumeaux et cheminées en marbre conservés, nettoyés et rejointoyés. Les conduits sont contrôlés avant tout habillage ou obturation.",
  },
  {
    title: "Mise aux normes invisible",
    text: "Réseaux électriques et de ventilation intégrés dans les doublages et faux plafonds pour éviter la saignée destructrice dans un décor d'origine.",
  },
];

/*
  Légendes reprises une à une le 03/09/2026, chaque image ayant été rouverte. Sont retirés tous les
  faits qu'une photographie ne peut pas établir : « relevé », « trié », « conformément à la note de
  calcul », « essai de mise en pression », « selon la norme NF C 15-100 », « pentes maîtrisées »,
  « accord écrit du syndic », « support ragréé », ainsi que la restitution de corniches attribuée à
  la maison Guimier. Correction de fond sur la plomberie : les tubes visibles cheminent en apparent,
  aucun collecteur n'est dans le cadre — la légende ne peut pas annoncer des « réseaux encastrés ».

  Carte d'usage établie le 03/09/2026 (comptage `grep` sur app/, hors commentaires) : trois des douze
  vignettes de stock ci-dessous étaient parmi les images les plus recyclées du site —
  chantier-ouverture-mur-etaiement (3 pages : gros-oeuvre-structure, realisations, ici),
  chantier-vmc-caisson-gaines (4 pages : realisations, renovation-energetique, second-oeuvre, ici) et
  chantier-carottage-facade (4 pages : realisations, renovation-appartement, renovation-energetique,
  ici). Elles sont remplacées par trois visuels de /photos/maquette/ jusque-là employés nulle part
  (vérifié fichier par fichier), et choisis parce qu'ils parlent d'un chantier DANS L'ANCIEN, ce qui
  est le sujet de la page : reprise d'un plancher bois ancien, entrée-galerie à boiseries, séjour
  haussmannien livré. Le carottage de façade et le caisson de VMC restent illustrés sur les pages
  énergie et second œuvre, où ils sont à leur place.
*/
const DEROULE = [
  {
    src: "chantier-etat-initial",
    alt: "Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé, cheminée ancienne et radiateur en fonte",
    caption: "État initial : murs jaunis et fissurés, parquet ancien usé, cheminée et corniche moulurée en place, radiateur en fonte sous la fenêtre.",
  },
  {
    src: "chantier-demolition",
    alt: "Phase de démolition d'un logement ancien, plafond ouvert jusqu'aux solives, gravats conditionnés en big bags avant évacuation",
    caption: "Démolition en cours : plafond ouvert jusqu'aux solives, gravats conditionnés en big bags et en sacs avant évacuation.",
  },
  {
    src: "tremie-chevetre-chantier",
    alt: "Plancher bois ancien ouvert : trémie bordée d'un chevêtre en bois neuf assemblé sur ferrures métalliques, étais réglables sous le solivage et murs en pierre apparents",
    caption: "Reprise d'un plancher bois ancien : trémie ouverte dans le solivage, chevêtre en bois neuf assemblé sur ferrures métalliques et étais réglables en place sous l'ouverture.",
  },
  {
    src: "chantier-ipn-habillage",
    alt: "Poutre de reprise de charge apparente au-dessus d'une ouverture entre deux pièces, habillage métallique à fixations apparentes, pièce encore en cours de finition",
    caption: "Poutre de reprise habillée d'un coffrage métallique à fixations apparentes au-dessus de l'ouverture : la pièce attend encore son revêtement de sol et ses finitions électriques.",
  },
  {
    src: "chantier-plomberie-encastree",
    alt: "Tubes multicouche rouges et bleus et évacuations cheminant en apparent dans une salle d'eau en travaux",
    caption: "Alimentations en tubes multicouche repérés chaud et froid et évacuations raccordées, encore apparentes avant habillage, dans une pièce d'eau en travaux.",
  },
  {
    src: "chantier-tableau-electrique-neuf",
    alt: "Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 40 A 30 mA et circuits étiquetés",
    caption: "Tableau électrique neuf : un interrupteur différentiel 40 A / 30 mA en tête de chaque rangée, circuits séparés et étiquetés poste par poste.",
  },
  {
    src: "chantier-isolation-laine",
    alt: "Chantier d'isolation intérieure : laine minérale entre rails métalliques sur murs et plafond avant pose du placo",
    caption: "Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre.",
  },
  {
    src: "chantier-ossature-placo-plafond",
    alt: "Ossature métallique de plafond suspendu et doublage mural en plaques de plâtre sur un chantier de rénovation",
    caption: "Plafond suspendu sur ossature métallique et doublage périphérique en plaques de plâtre, avant traitement des joints.",
  },
  {
    src: "moulures-corniches-pose",
    alt: "Salon haussmannien en cours de travaux : corniche à modillons, rosace de plafond, panneaux moulurés et échafaudage roulant devant la fenêtre",
    caption: "Décors en plâtre d'un salon en cours de travaux : corniche à modillons, rosace de plafond et panneaux moulurés, échafaudage roulant en place et sols protégés.",
  },
  {
    src: "entree-galerie-boiseries",
    alt: "Entrée-galerie aux murs entièrement panneautés et moulurés, banquette encastrée dans la boiserie, quincaillerie en laiton et sol en damier noir et blanc posé en diagonale",
    caption: "Entrée-galerie : murs panneautés et moulurés du sol au plafond, banquette encastrée dans la boiserie, patère et quincaillerie en laiton, sol en damier noir et blanc posé en diagonale.",
  },
  {
    src: "plateau-livre-parquet-chene",
    alt: "Grand plateau livré après rénovation avec parquet chêne à lames droites, éclairage sur rails et embrasures de fenêtres cintrées habillées de bois",
    caption: "Plateau livré : parquet chêne à lames droites, rails d'éclairage fixés au plafond et embrasures de fenêtres cintrées habillées de bois.",
  },
  {
    src: "sejour-haussmannien-renove",
    alt: "Séjour haussmannien livré : corniche sculptée, murs à panneaux moulurés, cheminée en marbre blanc surmontée d'une glace à cadre doré, parquet chêne à chevrons et enfilade vers la salle à manger",
    caption: "Séjour livré : corniche sculptée courant sur tout le pourtour, murs à panneaux moulurés, cheminée en marbre blanc surmontée d'une grande glace à cadre doré, parquet chêne posé à chevrons et enfilade ouverte sur la salle à manger.",
  },
];

const FAQ = [
  {
    q: "Peut-on remplacer des fenêtres anciennes sans perdre le cachet du logement ?",
    a: "Oui, à condition de reproduire le châssis à l'identique : mêmes sections de montants, mêmes petits bois, même partition des vantaux. Le double vitrage feuilleté se loge dans un profil traditionnel, et la crémone en laiton d'origine est remontée sur le nouveau châssis lorsqu'elle est récupérable.",
  },
  {
    q: "D'où proviennent les moulures et corniches posées sur vos chantiers ?",
    a: "Les profils sont fournis par la maison Guimier, à partir d'un relevé ou d'un fragment prélevé sur place. Cela permet de restituer une corniche disparue avec le même profil que celle conservée dans la pièce voisine.",
  },
  {
    q: "Qui achète les matériaux et auprès de qui ?",
    a: "Le client achète en direct. Les matériaux techniques proviennent du groupe Saint-Gobain et sont retirés à La Plateforme du Bâtiment. Cette organisation supprime la marge habituellement appliquée sur la fourniture et contribue à l'économie constatée sur le budget travaux.",
  },
  {
    q: "Une mise aux normes électrique abîme-t-elle nécessairement les décors anciens ?",
    a: "Non. Les réseaux sont majoritairement passés dans les doublages, les faux plafonds et les plinthes techniques. Les saignées sont réservées aux zones sans décor, et les traversées de corniche sont proscrites.",
  },
  {
    q: "Faut-il une autorisation pour modifier des fenêtres sur rue ?",
    a: "En copropriété, la façade est une partie commune : la modification d'aspect d'une menuiserie sur rue relève d'une autorisation de l'assemblée générale, et parfois d'une déclaration préalable en mairie, notamment en secteur protégé.",
  },
];

export default function SavoirFaireAncienPage() {
  return (
    <main>
      <MqHero
        kicker="Savoir-faire"
        title="Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées"
        lead={
          <>
            <p>
              Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux
              normes pensée pour rester invisible.
            </p>
            <p className="mt-4">
              Préserver le charme de l'ancien consiste à relever l'existant avant toute dépose, puis à reproduire les ouvrages disparus à
              l'identique : sections de petits bois, crémones en laiton, profils de corniche, hauteurs de plinthe. ARCHI PILOTE RÉNOVATION
              fait mouler les moulures et corniches par la maison Guimier et fait approvisionner les matériaux techniques du groupe
              Saint-Gobain à La Plateforme du Bâtiment, achetés en direct par le client. Les mises aux normes contemporaines — électricité,
              ventilation, étanchéité — sont intégrées sans dénaturer le décor d'origine.
            </p>
          </>
        }
      />

      <MqSection
        kicker="Ce que nous préservons"
        title="Les ouvrages qui font le cachet d'un logement ancien"
        lead="Six familles d'ouvrages concentrent l'essentiel du caractère d'un appartement haussmannien ou d'une maison de ville ancienne."
      >
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {OUVRAGES.map((o) => (
              <div key={o.title} className="flex flex-col gap-2">
                <h3 className="display t-haut text-ivoire">{o.title}</h3>
                <p className="text-muted t-sec leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
          {/* 07/09 : cette grille d'images passe en COLONNES. En grille, toutes les
              cartes d'une rangée sont étirées à la hauteur de la plus haute ; comme les
              images gardent désormais leur ratio natif — trois portraits y perdaient
              jusqu'à 58 % de leur sujet dans le cadre paysage par défaut —, cela créait des
              vides blancs. Les colonnes empilent chaque carte à sa hauteur réelle. */}
            <div className="columns-2 gap-3 md:gap-5 [&>*]:mb-3 md:[&>*]:mb-5 [&>*]:break-inside-avoid">
            {/*
              Grille revue le 03/09/2026 : chaque vignette a été rouverte et son recadrage réel
              simulé (aspect-[4/3] + object-cover) avant d'être jugée. Quatre vignettes ont été
              retirées ou remplacées parce que l'ouvrage ancien n'y était pas le sujet, ou parce que
              la légende affirmait ce que l'image ne montre pas :
              — chHdgChambreBalconApplique : chambre meublée (lit, téléviseur au centre du cadre) ;
                la légende annonçait des portes-fenêtres « à petits bois », or les vantaux sont à
                grands carreaux avec panneau plein en partie basse, et elle qualifiait les persiennes
                d'« intérieures » alors qu'elles sont repliées dans le tableau. Remplacée par la
                photo de dépose ci-dessous, où boiseries et volets sont réellement le sujet.
              — chBibliotheque : le sujet est une bibliothèque neuve ; la légende renvoyait à un
                « parquet ancien conservé » que le recadrage 4/3 supprime presque entièrement
                (350 px rognés en haut et en bas sur une source portrait). Retirée ; cette photo
                reste à sa place sur /menuiserie-agencement-sur-mesure.
              — chParquetChevronsCacheRadiateur : cache-radiateur contemporain devant une baie
                coulissante en aluminium noir — menuiserie d'aujourd'hui, et second parquet à
                chevrons redondant avec celui conservé ci-dessous. Retirée.
              — chHdgChambreLustreSdbOuverte : la grille de ventilation encastrée y est réelle mais
                occupe moins de 3 % du cadre dans une chambre meublée avec baignoire ; la légende
                décrivait en outre une « porte ancienne à panneaux moulurés » alors que la porte
                visible est un panneau lisse à rainure. Remplacée par le tableau électrique logé en
                placard, où la mise aux normes invisible est le sujet.
              Les mentions « conservé », « maintenu » et « restitué » ont été retirées partout où la
              photographie ne documente pas l'opération elle-même.

              03/09/2026 — CARTE D'USAGE. Comptage `grep` sur app/ (commentaires exclus) de chaque
              photo de cette grille, pour répondre au reproche du client « les mêmes photos reviennent
              partout ». Trois vignettes étaient employées sur 3 pages ou plus et sont remplacées par
              des clichés jusqu'ici employés nulle part (0 page), tous rouverts avant d'être retenus,
              et tous recadrés mentalement en 4/3 + object-cover pour vérifier que le sujet survit :
              — chHdgChambrePlacardMoulure (3 pages : menuiserie-agencement-sur-mesure, realisations,
                ici) → chCouloirPorteBleueNoyer (0 page). Même démonstration — une menuiserie neuve
                posée dans un décor ancien — mais la corniche, la porte à panneaux peinte en bleu et
                le garde-corps en ferronnerie y sont réellement dans le cadre.
              — chParquetChevronsCouloirDeuxTeintes (3 pages : realisations, tendances-2026-2027, ici,
                + la clé `detailParquet` de lib-photos.ts qui la sert encore ailleurs) →
                chCouloirParquetChevronsPortesOuvertes, qui n'était employée que sur /realisations et
                en est retirée en contrepartie : elle ne sert donc plus que sur cette page.
              — chHdgDetailNicheOnyxCheminee (4 pages : menuiserie-agencement-sur-mesure, realisations,
                tendances-2026-2027, ici) → chEncadrementBoisPorteMiroirAtelier (0 page). La cheminée
                en marbre sculpté reste illustrée par la vignette voisine, il n'y avait donc pas de
                perte de sujet.
              Deux photos restent employées sur cette page ET sur /realisations
              (chHdgSalonSalleMangerMoulures, chHdgChambreChemineeMiroirMoulure) : 2 pages chacune,
              sous le seuil, et ce sont les seuls clichés du dossier où le décor ancien restitué et la
              cheminée en marbre sculpté sont franchement le sujet.
              chDemolitionBoiseriesHaussmannien est conservée ici alors qu'elle est identique au bit
              près à chIsolationPhoniqueGranulesPlancher : ce jumeau a été retiré de /realisations dans
              le même passage, de sorte que l'image vue par le visiteur passe de 4 pages à 3.
              chPlacardTableauElectriqueIntegre passe de 3 à 2 pages, retirée du « Déroulé » de
              /realisations et gardée ici, où « la mise aux normes invisible » est justement le sujet.
            */}
            {/* 07/09 — IMAGE 1 REMPLACÉE à la demande du client. L'ancienne
              (chIsolationPhoniqueGranulesPlancher) montrait surtout un plancher déposé et des
              granulés d'isolation : un ouvrage de chantier, pas le cachet d'un logement
              ancien, alors que c'est le sujet de la section. Elle était en outre le même
              fichier que chDemolitionBoiseriesHaussmannien, servi sous deux noms, et
              apparaissait déjà sur trois pages.
              La remplaçante montre exactement ce que la section annonce : une menuiserie
              NEUVE insérée dans un décor ANCIEN conservé. */}
          <MqFig
            src="/photos/chantiers/chFenetreBoisDecorativeChantier.jpeg"
            alt="Ouverture vitrée intérieure à châssis bois et petits bois, au couronnement pentagonal, percée dans une cloison peinte ; au-dessus, corniche moulurée et plafond à caissons conservés ; au travers, une fenêtre ancienne et sa grille en ferronnerie ouvragée"
            caption="Une verrière intérieure en bois insérée dans un décor conservé : la corniche moulurée et le plafond à caissons courent au-dessus sans être interrompus, et l'on aperçoit au travers la fenêtre ancienne avec sa grille en ferronnerie. Les fils sont encore en attente et les pots de peinture au sol : la pièce n'est pas livrée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
            <MqFig
              src="/photos/chantiers/chHdgSalonSalleMangerMoulures.jpeg"
              alt="Salon et salle à manger d'un appartement haussmannien livré, rosace de plafond et corniche sculptée, murs à panneaux moulurés et parquet chêne à chevrons"
              caption="Salon-salle à manger livré : rosace de plafond, corniche sculptée et murs à panneaux moulurés, grande glace à cadre mouluré encastrée dans le lambris, parquet chêne posé à chevrons. Chantier réel des équipes partenaires."
              ratio="aspect-[3/2]"
            />
            {/*
              Déplacé ici le 03/09/2026 depuis la section « Plâtrerie décorative » : cette vignette
              montre une menuiserie neuve raccordée au décor mouluré, pas une restitution de plâtre
              par la maison Guimier — sujet de cette section-là. Elle est à sa place ici, parmi les
              ouvrages qui font le cachet. « Conservés » retiré : rien à l'image ne prouve que le
              radiateur et la persienne sont d'origine.
            */}
            <MqFig
              src="/photos/chantiers/chCouloirPorteBleueNoyer.jpeg"
              alt="Pièce d'appartement ancien en cours de finition : rangement en placage noyer monté jusque sous la corniche moulurée, porte à panneaux moulurés peinte en bleu, fenêtre sur rue à garde-corps en ferronnerie"
              caption="Raccord du neuf au décor existant : le rangement en placage noyer monte jusque sous la corniche moulurée du plafond et vient buter contre la porte à panneaux moulurés peinte en bleu. La fenêtre sur rue garde son garde-corps en ferronnerie, face aux façades en pierre de taille du vis-à-vis. Chantier réel des équipes partenaires."
              ratio="aspect-[16/9]"
            />
            <MqFig
              src="/photos/chantiers/chHdgChambreChemineeMiroirMoulure.jpeg"
              alt="Chambre d'appartement haussmannien livrée, cheminée en marbre blanc sculpté avec foyer en fonte, trumeau mouluré au-dessus, corniche sculptée et parquet chêne à chevrons"
              caption="Cheminée en marbre blanc sculpté et son foyer en fonte, surmontés d'un trumeau à cadre mouluré ; corniche sculptée, panneaux muraux moulurés et parquet chêne posé à chevrons. Une armoire en bois clair est ajustée contre le mur. Chantier réel des équipes partenaires."
              ratio="aspect-[3/2]"
            />
            {/*
              Photo réelle fournie par le client. Le motif de pose et la coupe de raccord sont
              vérifiables à l'image (lames abouties en pointe, joint continu au faîte = pose à
              chevrons, point de Hongrie), mais ce parquet est un ouvrage NEUF : la légende
              n'affirme donc ni dépose lame par lame ni complément en chêne de récupération
              (ce que décrit le texte de l'ouvrage) — aucune photo du dossier ne documente cette
              reprise-là.
            */}
            {/* 07/09 — IMAGE 5 (le parquet) REMPLACÉE à la demande du client. À noter pour
              mémoire : la légende de l'ancienne était JUSTE — c'était bien du point de
              Hongrie, lames coupées d'onglet et axe continu, vérifié à l'agrandissement. Le
              motif du remplacement est éditorial, pas factuel.
              La remplaçante répond à une demande que le client avait formulée par écrit pour
              cette page : montrer des moulures et des immeubles en pierre de taille. */}
            {/* 07/09 (2e passe) — le client voulait le parquet remplacé par un MEILLEUR
                parquet, pas par un autre sujet. Ma première tentative avait mis des
                rangements à la place : hors sujet. Celle-ci est bien un parquet, et elle vaut
                mieux que l'ancienne — l'ancienne était un couloir sombre avec un sac de
                chantier au sol, celle-ci est un gros plan net où le calepinage EST le sujet.
                Calepinage vérifié à l'agrandissement ×3 avant d'écrire la légende : lames
                coupées d'onglet, axe central en ligne continue, c'est bien du point de
                Hongrie. Aucune essence annoncée, elle n'est pas certifiable à l'œil. */}
            <MqFig
              src="/photos/chantiers/chParquetChevronsCouloirDeuxTeintes.jpeg"
              alt="Parquet posé en point de Hongrie vu en plongée depuis une embrasure de porte : lames coupées d'onglet se rejoignant sur un axe central continu, plinthes et huisseries peintes en blanc de part et d'autre"
              caption="Parquet posé en point de Hongrie : les lames sont coupées d'onglet et se rejoignent sur un axe central qui file en ligne continue, sans décrochement d'une rangée à l'autre — c'est ce qui distingue ce calepinage des bâtons rompus, où les abouts restent droits. La lumière rasante traverse le couloir en diagonale et fait varier la teinte du bois d'un bout à l'autre. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            {/*
              Légende revue le 03/09/2026 après ouverture de l'image : les carreaux anciens visibles
              sont des carreaux émaillés à motif floral et non des « carreaux de ciment » (matériau
              non identifiable à l'image), et ils courent le long des murs — pas « en fond de niche ».
              La seconde vue de ce même local (chComptoirBarMouluresFinition) reste écartée d'ICI : deux
              vignettes du même bar sur la même page seraient des quasi-jumelles. Elle a en revanche été
              placée sur /realisations le 03/09/2026, en remplacement de cette photo-ci qui y faisait
              double emploi avec la présente page ; sa légende y a été refaite, l'ancienne annonçant un
              comptoir « fini » alors qu'il y est en MDF brut, avant peinture. Résultat : ce cliché-ci
              n'est plus employé que sur cette page, et le local reste montré sur les deux, sous deux
              angles différents.
            */}
            <MqFig
              src="/photos/chantiers/chComptoirBarColonneFonteCarreauxAnciens.jpeg"
              alt="Colonne en fonte et carreaux anciens à motif floral conservés autour d'un comptoir en cours de construction, chantier réel"
              caption="Colonne en fonte et carreaux anciens à motif floral conservés en place, autour d'un comptoir neuf encore en bois brut. Chantier réel des équipes partenaires."
              ratio="aspect-[9/16]"
            />
            {/*
              03/09/2026 — remplace le diptyque chHdgDetailNicheOnyxCheminee, employé sur 4 pages
              (menuiserie-agencement-sur-mesure, realisations, tendances-2026-2027 et ici). Ce cliché-ci
              n'était employé nulle part. Il a été ouvert puis recadré en 4/3 : la source est en portrait
              (1200 × 1599), mais le recadrage centré garde l'essentiel — l'encadrement en chêne, la porte
              à panneaux, le radiateur en fonte et les corniches de la pièce du fond. Aucune mention de
              « conservation » : la légende ne dit que ce qui est dans le cadre, à savoir que ces ouvrages
              sont encore en place au milieu d'un chantier en cours.
            */}
            <MqFig
              src="/photos/chantiers/chEncadrementBoisPorteMiroirAtelier.jpeg"
              alt="Ouverture entre deux pièces habillée d'un encadrement en chêne massif à angles coupés, pièce du fond en travaux avec porte à panneaux, radiateur en fonte à colonnes et corniches moulurées"
              caption="Ouverture entre deux pièces habillée d'un encadrement en bois clair à pans coupés, posé sur toute la hauteur. Dans la pièce du fond, encore en travaux — sols bâchés, pots de peinture, escabeau —, la porte à panneaux, le radiateur en fonte à colonnes et les corniches moulurées du plafond sont toujours en place. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            {/*
              Ajouté le 03/09/2026 pour l'ouvrage « Mise aux normes invisible », à la place de la
              chambre meublée qui l'illustrait jusqu'ici. Ici l'ouvrage EST le sujet : compteur et
              tableau logés derrière une porte de placard. Photo ouverte et recadrage 4/3 simulé
              (source portrait : le tableau reste entièrement dans le cadre).
            */}
            <MqFig
              src="/photos/chantiers/chPlacardTableauElectriqueIntegre.jpeg"
              alt="Compteur et tableau électriques logés derrière une porte de placard sur mesure en MDF brut, à côté de la porte d'entrée, chantier réel"
              caption="Mise aux normes logée dans la menuiserie : compteur et tableau électriques placés derrière une porte de placard sur mesure, à l'entrée, plutôt que posés en applique dans la pièce. Placard encore en MDF brut avant peinture. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Menuiseries"
        title="Reproduire une fenêtre à l'identique, crémone comprise"
        lead="Une fenêtre reproduite à l'identique conserve les proportions d'origine tout en atteignant les performances thermiques et acoustiques attendues aujourd'hui."
      >
        <div className="flex flex-col gap-8">
          {/*
            Revu le 03/09/2026.
            — La légende de la photo de fenêtre affirmait une reproduction « à l'identique », une
              section « relevée sur l'existant » et une crémone « restaurée et remontée » : trois
              opérations qu'aucune image ne peut montrer, sur un visuel de stock de surcroît. Elle ne
              décrit plus que ce qui est visible.
            — Le schéma des déperditions thermiques qui l'accompagnait a été retiré de cette section :
              il traite de l'enveloppe complète d'un logement (toiture, murs, plancher), pas de la
              reproduction d'une menuiserie ; il reste en place sur les pages énergie et sur l'accueil.
            — Le schéma pédagogique passe en aspect-[3/2], sa dimension réelle (1536×1024) : en 16/9,
              object-cover coupait en deux la dernière ligne des trois légendes (« en laiton »,
              « profilé »).
          */}
          <MqFig
            src="/photos/maquette/fenetre-identique-cremone-laiton.jpg"
            alt="Fenêtre en bois à petits bois dans un appartement haussmannien, crémone en laiton, vue vers une façade en pierre de taille et des toits en zinc"
            caption="Fenêtre en bois à petits bois et crémone en laiton, dans une embrasure à panneautage mouluré."
            ratio="aspect-[10/7]"
          />
          <MqFig entier
            src="/photos/pedagogie/05-menuiserie-moulures.jpeg"
            alt="Trois relevés de menuiserie : profil de corniche, fenêtre à petits bois avec crémone en laiton, chambranle en chêne profilé"
            caption="Schéma pédagogique : les trois relevés qui précèdent une commande — profil de corniche, fenêtre à petits bois et crémone en laiton, chambranle en chêne profilé."
            ratio="aspect-[3/2]"
          />
          <MqProse>
            <h3 className="display t-fort text-ivoire">Le relevé précède toujours la dépose</h3>
            <p>Chaque châssis est mesuré et photographié avant démontage, quincaillerie comprise.</p>
            <p>
              Sont relevés : la section des montants et traverses, le dessin et l'épaisseur des petits bois, la profondeur de feuillure, la
              hauteur d'allège, le sens d'ouverture et le modèle de crémone. Ce relevé constitue le cahier des charges transmis au menuisier.
            </p>
            <p>
              Sans ce relevé, la menuiserie neuve arrive avec des montants plus larges : la surface vitrée diminue, les proportions se
              déséquilibrent et le cachet disparaît, même avec un matériau noble.
            </p>
            <h3 className="display t-fort text-ivoire mt-4">Crémones et espagnolettes : réemploi avant remplacement</h3>
            <p>La quincaillerie ancienne est remise en service chaque fois qu'elle est récupérable.</p>
            <p>
              Les crémones en laiton sont déposées, décapées, lubrifiées et reposées sur le châssis neuf après adaptation des gâches. Une
              pièce manquante est refaite sur modèle plutôt que remplacée par une poignée courante.
            </p>
            <h3 className="display t-fort text-ivoire mt-4">Performance sans dénaturation</h3>
            <p>Double vitrage feuilleté, joints d'étanchéité et calfeutrement se logent dans un profil traditionnel.</p>
            <p>
              Le gain acoustique est souvent le premier bénéfice ressenti en front de rue. Le gain thermique n'a de sens que combiné à la
              ventilation : une menuiserie étanche sans extraction correcte déplace le problème vers la condensation.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Plâtrerie décorative"
        title="Moulures, corniches et rosaces : profils moulés par la maison Guimier"
        lead="Les décors en plâtre disparus sont restitués à partir d'un fragment prélevé sur place, non choisis sur catalogue."
      >
        <div className="flex flex-col gap-8">
          {/*
            Revu le 03/09/2026. Cette section ne porte plus qu'UNE image, et c'est voulu :
            — la vignette du placard mouluré a été déplacée dans la grille « Ce que nous préservons ».
              Elle montre une menuiserie neuve raccordée à un décor existant, pas de la plâtrerie
              décorative restituée : sous ce titre-ci, elle annonçait autre chose que ce qu'elle montre.
            — le cliché conservé est le seul du dossier où un décor en plâtre sculpté est réellement le
              sujet (gros plan du cadre de glace). Il est affiché seul, en pleine largeur, à son ratio
              d'origine (1600×1064 ≈ 3/2, aucun rognage).
            HONNÊTETÉ : il documente un décor mouluré existant, PAS une restitution de profil par la
            maison Guimier (relevé du fragment, moulage, pose au plâtre) — aucune photo du dossier ne
            montre cette séquence, ce que détaille le commentaire ci-dessous. La légende ne lui
            attribue donc aucun ouvrage restitué.
          */}
          <MqFig
            src="/photos/chantiers/chHdgDiptyqueSalonMiroirBalcon.jpeg"
            alt="Diptyque : à gauche le gros plan d'un cadre de glace mouluré en plâtre reflétant un salon haussmannien et sa cheminée en marbre, à droite le balcon parisien en ferronnerie et les immeubles en pierre de taille en vis-à-vis"
            caption="À gauche, cadre de glace mouluré en gros plan — rang de perles, rais-de-cœur et coquille — le salon et sa cheminée en marbre se reflétant dans le miroir. À droite, le balcon sur rue du même appartement : garde-corps en ferronnerie et façades en pierre de taille en vis-à-vis. Chantier réel des équipes partenaires."
            ratio="aspect-[3/2]"
          />
          {/*
            À GÉNÉRER — Visual 3 (brief original, jamais traité) : séquence RÉELLE du MÊME profil de
            corniche/moulure/rosace — avant, prise d'empreinte ou relevé, reproduction, pose et finition.
            Alt prévu : "Étapes de restitution d'une moulure ancienne."

            Vérification faite dans /public/photos/chantiers/ (~200 fichiers) : aucune photo ne documente
            cette continuité sur un seul profil. Les seuls fichiers contenant "Moulures" dans leur nom
            (chDressingNoyerMoulures2.jpeg, chDressingNoyerMouluresAngle1.jpeg,
            chDressingBufetNoyerMoulures1.jpeg, chDressingNoyerBufetMoulures4.jpeg,
            chDressingBufetNoyerMoulures3.jpeg, chDressingNoyerMouluresFenetre.jpeg,
            chBibliothequePanneauxMoulures.jpeg) montrent des moulures de dressings/bibliothèques en
            menuiserie (portes de placard) et non une restitution de corniche/rosace en plâtre relevée
            puis moulée par la maison Guimier — sujet hors-propos, à ne pas réutiliser ici pour ne pas
            présenter une fausse séquence.

            Contrôle MD5 complémentaire (01/09/2026) sur ce lot : il ne contient en réalité que 3 clichés
            distincts, chacun enregistré deux fois sous un nom différent —
            chDressingBufetNoyerMoulures1.jpeg ≡ chDressingNoyerBufetMoulures4.jpeg,
            chDressingNoyerMoulures2.jpeg ≡ chDressingNoyerMouluresAngle1.jpeg, et
            chDressingBufetNoyerMoulures3.jpeg ≡ chDressingNoyerMouluresFenetre.jpeg (l'ancien hero de
            cette page, remplacé depuis par le schéma généré /photos/pedagogie/41-savoir-faire-fenetre-hero.jpeg).
            chBibliothequePanneauxMoulures.jpeg a un hash distinct des 6 autres et sert déjà sur
            /menuiserie-agencement-sur-mesure. Aucun des 6 noms dupliqués n'est utilisé comme src sur la
            présente page : pas de doublon visible pour le visiteur ici, ce lot entier reste hors-sujet
            et à ne pas réutiliser.

            Réel à privilégier : demander aux équipes partenaires de photographier, sur un seul et même
            chantier, le fragment avant dépose, la prise d'empreinte/le relevé du profil, le moule ou le
            gabarit, la pose au plâtre et la finition peinte.

            À défaut, prompt de génération (macro réaliste, PAS un rendu illustratif) :
            "Photographie macro documentaire en 5 vignettes contiguës, format triptyque large, lumière
            naturelle de chantier, grain photo réel (pas de style aquarelle ni schématique) : (1) fragment
            de corniche en plâtre ancienne, encore en place au plafond d'un appartement haussmannien,
            partiellement dégradé ; (2) prise d'empreinte au silicone ou relevé au calibre sur ce même
            fragment ; (3) moule en plâtre du profil reproduit, posé sur un établi d'atelier ; (4) pose du
            nouveau profil au plâtre traditionnel, calage au cordeau, angle de pièce ; (5) même corniche
            finie et peinte en blanc mat, raccord invisible avec la partie ancienne conservée. Cohérence de
            lumière, de teinte et de profil entre les 5 vignettes pour bien montrer qu'il s'agit du même
            ouvrage du début à la fin."
          */}
          <MqChecklist
            cols={1}
            items={[
              "Prélèvement d'un fragment de corniche conservée et relevé du développé.",
              "Commande du profil correspondant auprès de la maison Guimier.",
              "Pose au plâtre traditionnel, calage au cordeau et raccord des angles à la main.",
              "Retouche des jonctions entre partie ancienne conservée et partie restituée.",
              "Peinture après séchage complet, en finition mate pour révéler le relief.",
              "Réservation des réseaux en amont pour éviter toute traversée du décor.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Approvisionnement"
        title="Matériaux du groupe Saint-Gobain, retirés à La Plateforme du Bâtiment"
        lead="Le client achète ses matériaux en direct : la fourniture n'est jamais une source de marge cachée."
      >
        <div className="flex flex-col gap-8">
          {/*
            03/09/2026 — les deux visuels de cette section ont été retirés, et c'est voulu.
            — approvisionnement-materiaux-plateforme.jpg était employée sur 4 pages
              (achat-direct-materiaux, menuiserie-agencement-sur-mesure, modele-economique-transparence
              et ici). C'est une photo de stock d'entrepôt, sans enseigne dans le cadre : elle ne prouve
              rien de l'approvisionnement décrit ci-dessous, et /public/photos/maquette/ ne contient
              aucune autre vue de dépôt qui pourrait la remplacer sans être, elle aussi, déjà employée
              ailleurs (flotte-camions-retrait-materiaux est sur 3 pages).
            — schema-repartition-budget.jpg est un camembert de répartition BUDGÉTAIRE, hors sujet dans
              une section consacrée à l'achat des matériaux, et déjà présent sur /guides,
              /clinique-du-devis et /estimateur-travaux.
            Les engagements d'approvisionnement sont portés par la liste ci-dessous, qui est leur place.
          */}
          <MqChecklist
            cols={1}
            items={[
              "Les matériaux techniques — plaques de plâtre, isolants, enduits, chapes, colles — proviennent du groupe Saint-Gobain.",
              "Le retrait s'effectue à La Plateforme du Bâtiment, avec un compte ouvert au nom du client lorsqu'il le souhaite.",
              "Le client achète en direct et conserve les factures : aucune marge n'est prise sur la fourniture.",
              "Les quantités sont calculées par ouvrage et vérifiées avant commande pour limiter les chutes et les reliquats.",
              "Les moulures, corniches et rosaces sont commandées auprès de la maison Guimier sur relevé du profil existant.",
              "Le calendrier d'approvisionnement est aligné sur le planning des lots pour éviter le stockage sur chantier.",
            ]}
          />
          <MqProse>
            <p>
              Cette organisation, héritée des méthodes d'achat des foncières, explique une part importante de l'économie constatée sur le
              budget travaux.
            </p>
          </MqProse>
        </div>
      </MqSection>

      {/*
        Titre et chapeau corrigés le 03/09/2026. Le chapeau annonçait « douze étapes documentées par
        photographies datées, transmises au client au fil du chantier » : il présentait donc comme des
        photos de chantier transmises au client une grille entièrement composée d'images de stock, et
        le titre au singulier laissait croire à un chantier unique suivi du début à la fin. Le
        commentaire ci-dessous rappelle qu'aucune séquence réelle complète n'existe dans le dossier.
      */}
      <MqSection
        kicker="Déroulé"
        title="Les étapes d'un chantier dans l'ancien, de l'état initial à la livraison"
        lead="Douze étapes types, de la lecture de l'existant à la livraison. Sur nos chantiers, chacune est documentée par des photographies datées transmises au client ; les vues ci-dessous sont des illustrations."
        wide
      >
        {/*
          À GÉNÉRER — Visual 4 (brief original, jamais traité) : séquence RÉELLE du MÊME appartement ancien —
          relevé, protection, travaux techniques, finition, livraison.
          Alt prévu : "Rénovation d'un appartement ancien sans perdre son cachet."

          Vérification faite dans /public/photos/chantiers/ : chDemolitionOuvertureCouloir.jpeg,
          chDemolitionLattisPlatreChantier2.jpeg, chDemolitionGravatsChantier.jpeg et
          chDemolitionCloisonBoisPlatre.jpeg montrent bien le même couloir d'un appartement haussmannien
          (même papier peint ancien, même fenêtre à volets, même garde-corps) à des instants rapprochés
          d'une seule phase de démolition — mais aucune photo de protection des sols/menuiseries, de
          travaux techniques (électricité, plomberie, VMC) ni de finition/livraison de CE MÊME appartement
          n'a été retrouvée dans le dossier. Impossible de compléter honnêtement les 5 étapes du brief sans
          mélanger des chantiers différents (ce serait fabriquer une fausse continuité). La grille ci-dessous
          reste donc composée de photos stock génériques de /public/photos/maquette/, jamais présentées
          comme réelles (légendes sans la mention "Chantier réel des équipes partenaires").

          Réel à privilégier : demander aux équipes de reprendre en photo, sur UN SEUL chantier d'appartement
          ancien suivi du début à la fin, les 5 étapes ci-dessous.

          À défaut, prompt de génération (macro réaliste, PAS un rendu illustratif) :
          "Photographie macro documentaire en 5 vignettes contiguës, même appartement ancien haussmannien du
          relevé à la livraison, grain photo réel (pas de style aquarelle ni schématique) : (1) relevé au
          mètre et à l'appareil photo d'une pièce ancienne avant travaux, cheminée et moulures d'origine
          visibles ; (2) protection intégrale du sol et des menuiseries conservées par bâches et cartons
          avant démolition ; (3) réseaux techniques (électricité, plomberie ou VMC) posés et encore apparents
          avant fermeture des doublages ; (4) finition en cours : enduit, ponçage, peinture autour des
          moulures restituées ; (5) même pièce livrée, meublée sobrement, moulures et parquet ancien mis en
          valeur. Cohérence de lumière, de couleur de mur et de profil de moulure entre les 5 vignettes pour
          bien montrer qu'il s'agit du même chantier du début à la fin."
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEROULE.map((f) => (
            <MqFig key={f.caption} src={`/photos/maquette/${f.src}.jpg`} alt={f.alt} caption={f.caption} />
          ))}
        </div>
      </MqSection>

      {/*
        03/09/2026 — DEUX SECTIONS SUPPRIMÉES ICI, en réponse au reproche du client (« les mêmes
        photos reviennent partout ») et au critère propre à cette page (une photo doit y illustrer un
        ouvrage ANCIEN préservé).

        1) « Comparatifs — Avant / après sur les ouvrages déterminants » (4 paires, 8 images de stock).
           Comptage `grep` sur app/ : combles-non-isoles-avant et combles-isoles-apres étaient sur
           4 pages chacune ; pavillon-facade-avant/apres, jardin-avant-extension, extension-livree-apres,
           maison-avant-surelevation et maison-surelevee-apres sur 3 pages chacune. Aucune de ces huit
           images ne montre un ouvrage ancien préservé : ravalement et isolation par l'extérieur d'un
           pavillon, isolation de combles, extension à bardage bois à claire-voie, surélévation à
           bardage à joints debout — ce sont des ouvrages d'enveloppe contemporains, et chacune de ces
           quatre paires a déjà sa page dédiée (/renovation-maison-pavillon, /renovation-energetique,
           /extension-maison, /surelevation), d'où elles sont recopiées telles quelles. Il n'existe pas
           dans /public/photos/maquette/ d'autre paire avant/après portant sur un même bâtiment : la
           section ne pouvait donc pas être « rechargée » avec des visuels moins sollicités, seulement
           retirée. Les paires restent en place sur leurs pages d'origine.

        2) « Pédagogie — Trois schémas pour comprendre les arbitrages techniques ».
           schema-mur-porteur.jpg (7 pages) et schema-vmc.jpg (6 pages) sont les deux visuels les plus
           recyclés de tout le site ; schema-etancheite-salle-eau.jpg est sur 3 pages. Une ouverture de
           mur porteur, un principe de VMC et une étanchéité de salle d'eau ne relèvent pas du sujet de
           cette page, et la section « Pédagogie » qui suit immédiatement porte déjà un schéma dessiné
           POUR elle (32-savoir-faire-trois-schemas.jpeg, employé nulle part ailleurs) qui traite
           exactement les trois arbitrages de l'ancien : fenêtre à crémone, corniche, réseau derrière
           doublage. Les trois schémas généraux restent en place sur /detail-invisible, /second-oeuvre,
           /gros-oeuvre-structure, /renovation-energetique et les autres pages qui les portaient.
      */}

      <MqSection
        kicker="Pédagogie"
        title="Arbitrages techniques pour préserver le charme d'un logement ancien"
        lead="Fenêtre, corniche et réseau derrière doublage : trois arbitrages qui reviennent systématiquement dans un logement ancien."
        wide
      >
        <MqFig entier
          src="/photos/pedagogie/32-savoir-faire-trois-schemas.jpeg"
          alt="Trois coupes techniques : fenêtre ancienne avec crémone laiton, corniche en plâtre, réseau derrière doublage"
          caption="Arbitrages techniques pour préserver le charme d'un logement ancien. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Rénover l'ancien sans le dénaturer">
        <MqFaq items={FAQ} />
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

      <MqCta
        title="Un bien ancien à rénover sans perdre son cachet ?"
        lead="Envoyez-nous quelques photographies des décors existants : nous identifions ce qui doit être conservé, restitué ou remplacé, et nous chiffrons les ouvrages correspondants."
      />

      <MqReadNext
        items={[
          { href: "/renovation-appartement", label: "Rénovation d'appartement", sub: "Copropriété, évacuations, ventilation" },
          { href: "/detail-invisible", label: "Le détail invisible", sub: "Ce qui se joue avant les finitions" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Achats en direct, transparence" },
        ]}
      />
    </main>
  );
}
