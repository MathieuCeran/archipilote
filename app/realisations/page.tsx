import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { AvantApres } from "../components/avant-apres";

export const metadata: Metadata = {
  title: "Réalisations : cas de projets de rénovation accompagnés | ARCHI PILOTE RÉNOVATION",
  description:
    "Cas anonymisés de projets accompagnés : contexte, contraintes, décisions, résultat — et ce que chaque cas ne démontre pas. Photographies de chantiers réellement pilotés.",
  alternates: { canonical: "/realisations" },
};

const M = "/photos/maquette";

const CAS = [
  {
    titre: "Appartement ancien, Paris 11e — rénovation complète avec ouverture de mur porteur",
    contexte: "Appartement de 62 m² en immeuble ancien, cuisine fermée, installation électrique datée.",
    contraintes: "Mur porteur entre cuisine et séjour, copropriété exigeant un dossier technique avant travaux, accès par cage d'escalier étroite.",
    decisions: "Étude de structure confiée à un ingénieur partenaire indépendant, reprise de charge par IPN, achat direct par le client de la cuisine et du carrelage auprès des fournisseurs identifiés.",
    resultat: "Chantier livré dans le délai annoncé en phase d'étude, budget final proche du budget prévisionnel grâce à l'achat direct des matériaux les plus coûteux.",
    limite: "Ce cas ne démontre pas qu'une ouverture de mur porteur en maison individuelle suivrait le même calendrier ni le même budget : la structure et le contexte de copropriété diffèrent.",
  },
  {
    titre: "Maison de banlieue parisienne — rénovation énergétique et VMC",
    contexte: "Maison des années 1970, classée passoire énergétique, ventilation naturelle vétuste.",
    contraintes: "Combles difficiles d'accès, réseau électrique à reprendre en parallèle de l'isolation, budget contraint par le client.",
    decisions: "Priorisation de l'isolation des combles et de la pose d'une VMC double flux avant les postes de finition, arbitrage documenté entre indispensable et souhaitable.",
    resultat: "Amélioration mesurable du confort thermique rapportée par le client après une saison de chauffe, sans dépassement du budget arbitré en amont.",
    limite: "Ce cas ne permet pas de garantir un niveau de performance énergétique chiffré : aucun diagnostic de performance énergétique officiel n'a été produit dans le cadre de cet accompagnement.",
  },
  {
    titre: "Studio locatif, Hauts-de-Seine — second œuvre technique complet",
    contexte: "Studio de 28 m² destiné à la location, plomberie et électricité à refaire intégralement.",
    contraintes: "Délai serré imposé par une échéance locative, salle d'eau à repenser dans un espace réduit.",
    decisions: "Séquencement strict des lots pour tenir le délai, contrôle de l'étanchéité de la salle d'eau avant pose du carrelage, suivi quotidien par photos datées.",
    resultat: "Livraison dans le délai imposé par le client, avec dossier de fin de chantier remis avant la mise en location.",
    limite: "Ce cas ne démontre pas qu'un délai aussi serré soit systématiquement tenable : il dépendait de la disponibilité immédiate des entreprises partenaires sur cette période précise.",
  },
];

const CH = "/photos/chantiers";

/* 03/09/2026 — CARTE D'USAGE ET DÉDOUBLONNAGE DE LA GALERIE.
   Le client signale que les mêmes photos reviennent partout. Deux mesures ont été faites sur cette
   page. (a) Comptage `grep` sur app/ (commentaires exclus) du nombre de pages qui servent chaque
   image. (b) Comparaison PERCEPTUELLE des 140 images distinctes de la page deux à deux (empreinte
   32×32 en niveaux de gris, distance quadratique moyenne) : sept paires sont ressorties à une
   distance ≤ 0,005, c'est-à-dire le MÊME cliché enregistré sous deux noms de fichiers différents —
   la galerie les affichait donc deux fois, et trois de ces doublons portaient même la mention
   « autre vue » ou « autre chantier » dans leur légende, ce qui était faux. Chaque paire a été
   revérifiée à l'œil, côte à côte, avant suppression :
     chCuisineNoireBrillantePoigneesCuivrees ≡ chCuisineAnthraciteCarreauxVue2
     chEscalierBoisFlottantPalier            ≡ chEscalierOuvertConstruction
     chEscalierBoisFlottantVueBas            ≡ chEscalierBoisConstructionMarches
     chCuisineBleuCanardBrillante            ≡ chCuisineBleuCanardVueDeux
     chEnsembleRangementRadiateurClaustra    ≡ chRangementRadiateurEtageresOuvertes
     chCouloirParquetChevronsPortesOuvertes  ≡ chCouloirParquetChevronsPorteBois
     chPorteCoulissanteClaustraChene2        ≡ chPorteCoulissanteClaustraChene3
   Dans chaque paire, c'est l'exemplaire employé sur le MOINS de pages du site qui a été conservé.
   S'y ajoutent deux quasi-jumelles (distance 0,14 et 0,31) : chPortiqueAcierAngleGaine /
   chPoutreAcierAngleSoudeVue1 et chDemolitionMursDecapes / chDemolitionDegagementVersSejour, cadrées
   à quelques centimètres près sur le même ouvrage — une seule de chaque est conservée. */
const PHOTOS_CHANTIERS = [
  /* 07/09 — LES DEUX PORTIQUES ACIER RETIRÉS DE LA TÊTE DE GALERIE, à la demande du client
     (« les deux portiques à prise d'acier, tu me les enlèves au début, j'aime pas du tout »).
     Ils ouvraient la galerie sur deux gros plans sombres de profilés, ce qui est le sujet le
     plus aride du fonds : la première impression d'une page de réalisations se jouait sur de
     la structure brute plutôt que sur un ouvrage lisible. La structure acier reste présentée
     là où elle est le sujet — /gros-oeuvre-structure et /ouverture-mur-porteur. */
  /* chDemolitionCloisonBoisPlatre était employée sur 4 pages (demarches-administratives-renovation,
     gros-oeuvre-structure, renovation-appartement et ici) : c'est le mur éventré que le client voit
     revenir. Attention au piège : chDemolitionGravatsChantier, qui semblait un remplaçant idéal
     (employée nulle part), est en réalité LE MÊME cliché (distance 0,00) — le renommer n'aurait rien
     changé pour le visiteur. La remplaçante retenue, chDemolitionLattisPlatreChantier1, n'est employée
     sur aucune page et montre un autre ouvrage : une cloison en pan de bois dont le plâtre a été
     décroché, poteaux et lattes apparents. */
  /* 05/09 : chDemolitionLattisPlatreChantier1 retirée de la galerie. Elle illustre
     désormais la section démolition de /gros-oeuvre-structure, et elle reste employée par
     deux articles de blog — la garder ici en faisait une quatrième apparition. La galerie
     conserve une scène de démolition, chDemolitionMursDecapes, plus bas. */
  { src: `${CH}/chPlancherSolivesBeton1.jpeg`, alt: "Plancher ancien ouvert : solives et entretoises maçonnées formant un quadrillage d'alvéoles vides", cap: "Plancher ancien ouvert jusqu'à sa structure : solives et entretoises maçonnées forment un quadrillage d'alvéoles encore vides, avant remplissage, chape et pose du revêtement de sol. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* 06/09 — LOT WHATSAPP INÉDIT. Ces deux vues ont été ouvertes à l'écran avant rédaction, et
     agrandies l'une à côté de l'autre : on retrouve sur les DEUX la même fenêtre à volets
     persiennés blancs, le même tronc de vigne vierge noueux passant au-dessus de son appui, la
     même façade fissurée et le même mur mitoyen de brique peint en blanc. C'est donc la même cour,
     à deux étapes du chantier. C'est tout ce que la photographie démontre : la légende dit « la
     même cour », et surtout PAS « la même toiture avant et après », que le cadrage ne permet pas
     d'établir — l'une est prise de plain-pied, l'autre en plongée depuis un étage. Pour la même
     raison elles ne sont pas montées en comparateur avant/après plus bas. */
  { src: `${CH}/chToitureTerrasseDeposeeSolivage.jpeg`, alt: "Toiture d'un bâtiment de fond de cour déposée jusqu'au solivage bois, laine minérale dégradée entre les solives", cap: "Toiture de fond de cour déposée jusqu'à sa structure : le solivage bois ancien est mis à nu, la laine minérale tassée et noircie subsiste entre les solives et des morceaux de l'ancienne étanchéité restent accrochés sur les rives. Un échafaudage est en place au premier plan, le mur mitoyen de brique peinte en blanc ferme la cour. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chCouvertureZincTasseauxAppentis.jpeg`, alt: "Couverture neuve en zinc à tasseaux sur une petite toiture à deux versants de fond de cour, chatières près du faîtage et chéneau en pied de versant", cap: "Couverture neuve en zinc à tasseaux sur une petite toiture à deux versants, vue en plongée : les baguettes filent de l'égout au faîtage, deux chatières demi-lune ventilent la partie haute du versant visible, et le chéneau reçoit en pied une naissance de descente d'eau pluviale. Même cour que la vue précédente — on y reconnaît la fenêtre à volets persiennés et le pied de vigne vierge. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* chIsolationPhoniqueGranulesPlancher a été retirée d'ici pour deux raisons cumulées. (1) Elle est
     identique au bit près à chDemolitionBoiseriesHaussmannien, employée sur /renovation-complete et
     /savoir-faire-ancien : le visiteur voyait donc ce salon quatre fois sur le site. (2) Elle était
     affichée juste à côté de chSousCouchePanneauxOSB ci-dessous, qui est LE MÊME ANGLE DE LA MÊME
     PIÈCE à une étape plus tard (même boiserie panneautée, mêmes volets persiennés, même fenêtre sur
     cour, même câble blanc en travers) : deux vignettes voisines sur le même coin de pièce.
     La vue conservée est celle qui est employée sur le moins de pages.
     Légende de chSousCouchePanneauxOSB corrigée au passage : elle annonçait des panneaux posés « sur
     l'ancien parquet » et des boiseries « protégées », alors que la vue jumelle montre justement le
     parquet déposé jusqu'aux solives et qu'aucune protection n'est visible sur les boiseries. */
  { src: `${CH}/chSousCouchePanneauxOSB.jpeg`, alt: "Panneaux OSB posés sur toute la surface du plancher d'un salon haussmannien, boiseries panneautées et volets intérieurs persiennés en place", cap: "Plancher d'un salon haussmannien refait : panneaux OSB posés bord à bord sur toute la surface, prêts à recevoir le revêtement de sol. Les boiseries panneautées, les volets intérieurs persiennés et la porte-fenêtre sur cour sont restés en place pendant l'opération. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* 06/09 — LOT WHATSAPP INÉDIT, suite du même plancher : après la structure et le support,
     le revêtement. Les deux vues sont posées à leur ratio natif (4/3 et 3/4) : la seconde est un
     portrait, un cadre paysage lui aurait coupé le radiateur et l'embrasure qui datent la pièce. */
  { src: `${CH}/chCarrelageBoisBatonsRompusCroisillons.jpeg`, alt: "Carrelage effet bois en cours de pose en bâtons rompus, croisillons autonivelants à clips encore en place sur la partie fraîchement collée", cap: "Carrelage effet bois en cours de pose, calepiné en bâtons rompus — abouts droits, axe central décalé d'une rangée à l'autre : la partie fraîchement collée porte encore ses croisillons autonivelants à clips et cales bleues, la partie voisine en est déjà débarrassée. La pièce est sous rampant, les plaques de plâtre sont enduites, la poutre ancienne du plafond est laissée apparente et la fenêtre, neuve et encore sous film de protection, donne sur l'immeuble d'en face. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chParquetPinLargesLamesVitrifie.jpeg`, alt: "Parquet ancien à larges lames poncé et vitrifié, vu depuis l'embrasure d'une porte, radiateur à colonnes conservé au fond", cap: "Parquet ancien à larges lames poncé puis vitrifié, vu depuis l'embrasure d'une porte : le film brillant renvoie la lumière du jour en traînées franches, et les nœuds comme les jeux entre lames restent visibles — c'est un sol d'origine remis en état, pas un sol neuf. Murs, plinthes et embrasures sont repeints en blanc, le radiateur à colonnes existant est conservé et le raccord de sol à son pied n'est pas encore repris. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chEscalierBoisFlottantVueBas.jpeg`, alt: "Escalier en cours de finition vu depuis le niveau inférieur : marches et contremarches en panneau multiplis, chants lamellés apparents", cap: "Escalier en cours de finition vu depuis le bas : marches et contremarches sont en panneau multiplis, dont les chants lamellés restent apparents ; les sols sont encore bâchés et le compresseur du poseur est en place. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chEscalierBoisFlottantPalier.jpeg`, alt: "Escalier à paillasse maçonnée blanche desservant un palier ouvert, marches et contremarches en panneau multiplis", cap: "Le même escalier vu de côté : marches et contremarches en panneau multiplis posées sur une paillasse maçonnée peinte en blanc, palier ouvert sur la pièce. Chantier encore en cours. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chDressingLaqueBlancPoigneesBois.jpeg`, alt: "Dressing sur mesure toute hauteur peint en blanc, deux poignées bâton en bois rapportées sur les vantaux centraux", cap: "Dressing sur mesure monté du sol au plafond et peint en blanc : deux poignées bâton en bois sont rapportées sur les vantaux centraux, les vantaux latéraux en sont dépourvus. Le sol est encore protégé. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chPorteCoulissanteClaustraChene2.jpeg`, alt: "Porte coulissante claustra en chêne massif, lames verticales et rail de guidage haut", cap: "Porte coulissante à claustra de lames verticales en bois clair, montée dans un cadre : en partie haute, un bandeau de bois filant masque le rail sur toute la course de la porte. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chEnsembleRangementRadiateurClaustra.jpeg`, alt: "Ensemble de rangements sur mesure intégrant un habillage claustra pour le radiateur", cap: "Ensemble de rangements sur mesure occupant tout un mur : étagères ouvertes, portes pleines et deux panneaux à claire-voie superposés devant le radiateur. Le meuble est encore en panneau apprêté, avant peinture. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chDressingSousPenteVeluxPoigneesNoires.jpeg`, alt: "Dressing sur mesure adapté à une pente de toit avec fenêtre de toit intégrée", cap: "Dressing sur mesure dont les vantaux sont coupés au biais pour épouser la pente du toit : façades gris clair, poignées bâton noires, sol en lames stratifiées. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chBibliothequesMdfBrutOuvertes.jpeg`, alt: "Bibliothèques sur mesure en MDF brut, portes ouvertes avant mise en peinture", cap: "Bibliothèques sur mesure en MDF brut, portes ouvertes sur le compartimentage intérieur avant mise en peinture ; une prise a été conservée accessible en fond de casier. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chDressingBufetNoyerMoulures1.jpeg`, alt: "Dressing et enfilade en placage noyer posés dans un appartement ancien avec moulures d'origine", cap: "Dressing toute hauteur et enfilade basse en placage noyer foncé, posés dans une pièce ancienne dont la corniche moulurée est conservée. Le sol reste entièrement protégé. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  /* 05/09 — DÉFINITION INSUFFISANTE, SIGNALÉE ET CONSERVÉE. chGrilleAerationMdfSurMesure fait
     528 px de large : sous les 760 px nécessaires pour un affichage net sur écran à densité double.
     Elle est en revanche parfaitement piquée (381) et c'est la seule vue d'atelier de la photothèque
     — la fabrication d'une pièce sur mesure, avant sa pose. Son unique jumelle,
     chGrilleAerationMdfAtelier2, est exactement au même format. Conservée faute de mieux ;
     À POURVOIR : le même sujet réexporté en pleine définition. */
  { src: `${CH}/chGrilleAerationMdfSurMesure.jpeg`, alt: "Grille de ventilation sur mesure découpée en atelier pour habiller un caisson technique", cap: "Panneau de MDF ajouré en atelier : les fentes sont fraisées une à une pour former une grille de ventilation sur mesure, avant ponçage et mise en peinture. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  /* chPlacardCompteurElectriqueArrondi (3 pages : charte-qualite, renovation-complete, ici) laisse la
     place à chDressingArrondiCouloirParquet1, employée nulle part. Premier remplaçant envisagé et
     écarté : chBibliothequeRadiateurIntegre, également inemployée, mais la comparaison perceptuelle
     l'a située à 0,57 de chEnsembleRangementRadiateurClaustra déjà présente en tête de galerie, et la
     vérification à l'œil a confirmé qu'il s'agit du MÊME mur de rangements, photographié une porte
     ouverte : deux vignettes quasi jumelles sur la même page. La retenue est à 1,13 de sa plus proche
     voisine, soit franchement distincte. Le meuble technique arrondi reste visible sur /charte-qualite,
     et l'idée « le technique disparaît derrière la menuiserie » reste portée ici par
     chGrilleAerationMdfSurMesure et par toute la section « L'ouvrage caché ». */
  { src: `${CH}/chDressingArrondiCouloirParquet1.jpeg`, alt: "Volume de rangement toute hauteur à angle arrondi bordant un dégagement, ouvertures par gorge en creux, bandeau lumineux en couronnement et parquet chêne à chevrons", cap: "Volume de rangement toute hauteur à angle arrondi : ouverture par gorges en creux sans poignée apparente, bandeau lumineux encastré en couronnement. Il borde le dégagement entre l'escalier et la porte vitrée à châssis métallique de la cuisine, sur un parquet clair posé en bâtons rompus. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* Remplace chComptoirBarColonneFonteCarreauxAnciens, désormais réservée à /savoir-faire-ancien où
     les ouvrages anciens conservés sont le sujet. chComptoirBarMouluresFinition n'était employée nulle
     part et montre le même local en plan large. Légende refaite : l'ancienne annonçait des « carreaux
     de ciment anciens conservés en fond de niche » et un comptoir « en cours de finition » — à l'image,
     ce sont des carreaux émaillés à motif floral (le matériau ne s'identifie pas depuis la photo),
     ils courent le long du mur et non en fond de niche, et le comptoir est en MDF brut avant peinture. */
  { src: `${CH}/chComptoirBarMouluresFinition.jpeg`, alt: "Comptoir de bar en MDF brut à panneaux moulurés en cours de montage, panneau de carreaux anciens à motif floral au mur, pilier en pierre et colonne en fonte", cap: "Local commercial en travaux : le comptoir en MDF brut à panneaux moulurés attend sa peinture, tandis que le panneau de carreaux anciens à motif floral, le pilier en pierre et la colonne en fonte sont laissés apparents et servent de fond aux étagères. Chantier réel des équipes partenaires.", ratio: "aspect-[16/9]" },
  /* chCuisineBleuCanardBrillante était employée sur 3 pages (menuiserie-agencement-sur-mesure,
     second-oeuvre, ici) ET faisait doublon avec chCuisineBleuCanardVueDeux plus bas dans cette même
     galerie — même cliché, légendé « autre vue du même chantier ». C'est l'exemplaire le moins
     sollicité qui est conservé (voir plus bas), celui-ci est supprimé. */
  { src: `${CH}/chCuisineNoireBrillantePoigneesCuivrees.jpeg`, alt: "Cuisine laquée noire brillante avec filets de poignées cuivrées et sol en carreaux de ciment", cap: "Cuisine noire en U avec poignées bâton cuivrées, plan de travail et crédence clairs : le sol de la zone cuisine est en carreaux à motif géométrique losangé, et raccorde un parquet clair au premier plan. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  /* chCuisineSejourParquetChevrons était employée sur 3 pages (renovation-complete,
     temoignages-clients, ici). Remplacée par chCuisineTerracotta, employée nulle part, qui a de plus
     l'intérêt de montrer une cuisine posée sous une corniche moulurée ancienne. */
  { src: `${CH}/chCuisineTerracotta.jpeg`, alt: "Cuisine linéaire à façades terracotta et meubles hauts crème, plaque à induction, sol en carreaux de ciment à motif géométrique, corniche moulurée au plafond", cap: "Cuisine linéaire livrée dans une pièce ancienne : façades terracotta en partie basse, meubles hauts crème, plaque à induction encastrée et sol en carreaux de ciment à motif géométrique. La corniche moulurée du plafond court au-dessus des colonnes. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  // 01/09 : deux cuisines réelles reçues du client dans un nouvel export (dossier "mur-porteur") ont
  // été vérifiées avant ajout — comparaison visuelle directe, même angle, mêmes éléments au plan de
  // travail : il s'agit des mêmes deux chantiers que chCuisinePlanNoirFacadesCremeVelux.jpeg et
  // chCuisineBlancheBrillanteMarbre.jpeg (déjà utilisées sur second-oeuvre et achat-direct-materiaux),
  // simplement réexportées par le client sous un nouveau nom de fichier (hash MD5 différent, contenu
  // visuel quasi identique). Ajout des DEUX fichiers déjà vétés ici plutôt que doublons quasi-pixel des
  // mêmes cuisines, conformément au nettoyage du 31/08 documenté dans second-oeuvre/page.tsx.
  { src: `${CH}/chCuisinePlanNoirFacadesCremeVelux.jpeg`, alt: "Cuisine sous comble avec plan de travail noir mat, îlot central et fenêtre de toit, four et micro-ondes encastrés en colonne", cap: "Cuisine livrée sous rampant : plan de travail noir mat, îlot central, colonne de four et de micro-ondes encastrés, fenêtre de toit au-dessus du linéaire. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chCuisineBlancheBrillanteMarbre.jpeg`, alt: "Cuisine laquée blanche brillante avec bar en bois massif, sol en marbre et suspensions noires", cap: "Cuisine blanche brillante en U : le plan de travail en bois se prolonge en retour de bar, le sol de la zone cuisine est en grand format effet marbre et raccorde un sol bois dans la pièce voisine. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* Trois vignettes retirées ici :
     — chSdbVasquesPoseMeubleBeige était employée sur 3 pages (expertise-carrelage-zellige-travertin,
       renovation-appartement, ici). Aucune salle de bain inutilisée ne pouvait la remplacer : les deux
       candidates du dossier, chVasqueMarbreVanite et chVasqueBoisMuraleChantier, se sont révélées être
       (distances 0,00 et 0,01) les mêmes clichés que chSdbVasquesPoseMeubleBeige et que
       chVasqueDoubleBoisCannele, déjà employée plus bas. La vignette est donc simplement retirée ; la
       page compte par ailleurs toute la série de pièces d'eau « haut de gamme » et « ouvrage caché ».
     — chOptiqueComptoirCarcasseBrute et chOptiqueComptoirAccueilFini s'affichaient DEUX FOIS sur cette
       page : ici, puis en avant/après dans la section « Avant / après ». C'est le comparatif qui est
       conservé — c'est le seul de la page à porter un vrai avant/après du même ouvrage —, et le local
       reste illustré ici par chOptiquePresentoirsMuraux, chOptiqueAccueilFinition et
       chOssatureBoisComptoirLocalCommercial. */
  { src: `${CH}/chOptiquePresentoirsMuraux.jpeg`, alt: "Présentoirs muraux sur mesure pour un local commercial d'optique avec éclairage intégré", cap: "Magasin d'optique : mur habillé de tasseaux de bois recevant les rails de présentation des montures, sur un linéaire de tiroirs sur mesure surmonté d'un plan blanc. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chOptiqueAccueilFinition.jpeg`, alt: "Local commercial d'optique livré avec présentoirs muraux et espace d'accueil finis", cap: "Le même magasin d'optique livré, vu depuis la porte vitrée : vitrines rétroéclairées, table centrale, comptoir d'accueil et sol stratifié effet chêne terminés. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chOssatureBoisComptoirLocalCommercial.jpeg`, alt: "Ossature bois d'un comptoir en cours de montage dans un local commercial à structure métallique", cap: "Local commercial en gros œuvre, plafond en bac acier apparent : l'ossature en bois d'un comptoir est montée et partiellement remplie de panneaux, avant habillage et pose du plan de travail. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chOuvertureImposteVitreeDoubleParte.jpeg`, alt: "Cloison habillée de panneaux MDF bruts, double porte blanche surmontée d'une imposte encore ouverte sur la pièce voisine", cap: "Cloison habillée de panneaux MDF bruts avant peinture : la double porte blanche est posée et l'imposte qui la surmonte est encore une simple ouverture, non vitrée, par laquelle on voit la pièce voisine. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* chCouloirParquetChevronsPortesOuvertes et son doublon chCouloirParquetChevronsPorteBois (même
     cliché, distance 0,004) montraient tous deux ce couloir : la page l'affichait donc deux fois. Une
     seule occurrence est nécessaire, et elle est plus utile sur /savoir-faire-ancien, où le parquet à
     chevrons et les portes à panneaux moulurés d'un logement ancien sont le sujet même de la page.
     Les deux vignettes sont retirées ici ; la photo n'est plus employée que sur cette page-là. */
  { src: `${CH}/chPoutreAcierProfilVueLongue.jpeg`, alt: "Profil d'une poutre acier de reprise de charge soudée sur son appui, plafond ouvert avant habillage", cap: "Poutre acier de reprise de charge vue dans sa longueur, soudée sur le poteau qui la reçoit : le plafond et le tableau sont ouverts, avant habillage par le plaquiste. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },

  { src: `${CH}/chTerrassePiscineMaisonVue.jpeg`, alt: "Terrasse bois livrée devant une maison rénovée, chantier réel", cap: "Plage de terrasse en bois exotique posée au pourtour d'une piscine, le long d'une maison sur pilotis à galerie couverte. Le sable du terrain n'est pas encore aménagé. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chTerrasseBoisTransatsVue.jpeg`, alt: "Terrasse bois avec transats livrés, chantier réel", cap: "Terrasse en bois à plusieurs plateaux desservis par des emmarchements pleine largeur, bains de soleil et parasol installés. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chTerrasseBoisEscaliersMobilier.jpeg`, alt: "Terrasse bois avec escaliers et mobilier, chantier réel", cap: "La même terrasse vue depuis le niveau bas : emmarchements et banquettes filantes en bois, sur un terrain encore en terre, face à des bâtiments en pierre. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chTerrasseBoisPiscineChamps.jpeg`, alt: "Terrasse bois autour d'une piscine avec vue sur les champs, chantier réel", cap: "Terrasse en bois en surplomb, ouverte sur des champs cultivés : aucun aménagement de jardin n'est encore réalisé autour de la plate-forme. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  /* 03/09 : cette photo était légendée « parquet à chevrons » sur trois pages. Vérification à
     l'image : motif de veinage répétitif identique d'une lame à l'autre, about droits (pas de
     coupe d'onglet), lames posées flottantes sur mousse blanche, chutes clipsables au sol —
     c'est un sol stratifié imitation chêne posé en bâtons rompus, pas du chêne massif à
     chevrons. Légende corrigée ici et sur /achat-direct-materiaux et /renovation-appartement. */
  /* chParquetChevronsPosePiece (le sol stratifié imitation chêne) était employée sur 4 pages
     (achat-direct-materiaux, renovation-appartement, second-oeuvre et ici). Elle est retirée de cette
     galerie : la pose de sol y reste illustrée par chParquetChevronsCacheRadiateur et
     chParquetChevronsCouloirDeuxTeintes juste en dessous, qui sont du vrai chêne à chevrons. La
     correction de légende du 03/09 (stratifié, pas chêne massif) reste en place sur les trois autres
     pages, qui ne relèvent pas de ce passage. */
  { src: `${CH}/chParquetChevronsCacheRadiateur.jpeg`, alt: "Pièce livrée avec parquet chêne clair posé à chevrons et cache-radiateur sur mesure à claire-voie horizontale dans l'angle", cap: "Parquet chêne clair posé à chevrons jusqu'au pied d'un cache-radiateur sur mesure à claire-voie horizontale, intégré dans l'angle de la pièce. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chParquetChevronsCouloirDeuxTeintes.jpeg`, alt: "Raccord entre deux parquets à chevrons de teintes différentes à l'aplomb d'un passage de porte, dans un couloir", cap: "Raccord entre deux parquets à chevrons de teintes différentes : la jonction est calée à l'aplomb du passage de porte, sans barre de seuil rapportée. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* 05/09 — chCouloirDressingToilettes retirée : FLOUE (piqué 37, la plus molle des photos
     employées sur cette page). Sa jumelle chDressingProcheToilettes montre la même scène avec
     exactement le même piqué : la photothèque ne contient donc aucune version nette de ce couloir.
     L'emplacement est laissé vide plutôt que rempli par une image que le visiteur verra floue en
     grand format. À POURVOIR : un couloir livré, dressing toute hauteur, pris net. */
  { src: `${CH}/chCouloirBoisEscalierVue.jpeg`, alt: "Couloir habillé de bois avec vue sur un escalier, chantier réel", cap: "Placards sur mesure aménagés sous le rampant d'un escalier : les vantaux, encore en MDF brut, sont coupés au biais de la volée. Sols et marches sont protégés, le chantier n'est pas terminé. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chCouloirBibliothequeChaleureux.jpeg`, alt: "Couloir avec bibliothèque intégrée et éclairage chaleureux, chantier réel", cap: "Couloir doublé de placards et d'une bibliothèque à casiers décalés, montés et peints : le sol reste couvert de son papier de protection et l'éclairage est encore provisoire, sur douilles suspendues. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* Bloc de doublons supprimé. Ces six vignettes rejouaient six clichés déjà présents plus haut dans
     la même galerie, sous un autre nom de fichier et avec une légende qui annonçait à tort une
     nouveauté :
       chEscalierBoisConstructionMarches  = chEscalierBoisFlottantVueBas
       chCuisineBleuCanardVueDeux         = chCuisineBleuCanardBrillante  (« autre vue du même chantier »)
       chPorteCoulissanteClaustraChene3   = chPorteCoulissanteClaustraChene2 (« autre chantier »)
       chEscalierOuvertConstruction       = chEscalierBoisFlottantPalier
       chCouloirParquetChevronsPorteBois  = chCouloirParquetChevronsPortesOuvertes
       chCuisineAnthraciteCarreauxVue2    = chCuisineNoireBrillantePoigneesCuivrees (« autre vue »)
     Seule exception du bloc : la cuisine bleu canard. Là, c'est l'exemplaire du HAUT qui a été
     supprimé, parce qu'il portait le nom employé sur deux autres pages du site
     (menuiserie-agencement-sur-mesure et second-oeuvre) ; celui-ci n'est employé nulle part ailleurs
     et est donc conservé, avec une légende qui ne prétend plus être une seconde vue. */
  { src: `${CH}/chCuisineBleuCanardVueDeux.jpeg`, alt: "Cuisine laquée bleu canard sur toute la longueur d'une pièce, plan de travail en bois massif, meubles hauts brillants et niches ouvertes en bout de linéaire", cap: "Cuisine bleu canard en cours de pose : le plan de travail en bois est en place, l'évier et le four sont posés, mais la découpe de la plaque reste ouverte, les sols sont bâchés et une trémie est encore ouverte au premier plan. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chRangementChantierEncombre.jpeg`, alt: "Rangement sur mesure dans une pièce encore encombrée de chantier, chantier réel", cap: "Bibliothèque à casiers décalés montée dans l'épaisseur d'une cloison de couloir : peinture faite, mais sols encore protégés, aspirateur et cartons de chantier en place dans la pièce voisine. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chBoiserieCourbeNicheEtageres.jpeg`, alt: "Boiserie courbe sur mesure en placage chêne avec niche de rangement intégrée, chantier réel", cap: "Boiserie en placage bois clair suivant la courbe du mur, avec deux niches à casiers asymétriques à angles arrondis. Le plafond est encore en plaque brute et les câbles pendent : le chantier est en cours. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chVasqueDoubleBoisCannele.jpeg`, alt: "Meuble vasque suspendu à façade en bois cannelé, plan à deux vasques intégrées en matériau de synthèse blanc, devant un parement grand format effet marbre", cap: "Meuble vasque suspendu sur mesure : façade en bois cannelé, plan à deux cuves moulées d'un seul tenant en matériau de synthèse blanc, robinetterie dorée. Le parement mural est en grand format effet marbre ; la pose n'est pas terminée. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chBibliothequeChenePieceComplete.jpeg`, alt: "Bibliothèque sur mesure du sol au plafond en placage chêne occupant une pièce entière, chantier réel", cap: "Bibliothèque sur mesure occupant les trois murs d'une pièce, du sol au plafond, en placage bois clair. Le chantier est en cours : sol entièrement bâché, tréteaux et scie du menuisier au milieu de la pièce, plafond encore en cours de finition. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  /* chRangementRadiateurEtageresOuvertes supprimée : même cliché que
     chEnsembleRangementRadiateurClaustra en tête de galerie (distance 0,004). */

  /* 07/09 — TREIZE VUES INÉDITES ajoutées ici : le client trouvait la page encore pauvre en images,
     et le contrôle des clés de app/lib-photos.ts montrait que 86 fichiers déjà en ligne n'étaient
     employés sur AUCUNE page. Chaque fichier a été OUVERT avant d'être légendé, et non lu au nom :
     le tri a d'ailleurs écarté plusieurs candidats que seul l'œil pouvait recaler — chEtagereCoin-
     FenetreBrute et chDressingEscalierArriereplan sont deux autres angles de la boiserie courbe déjà
     en galerie (chBoiserieCourbeNicheEtageres), chDressingMdfBrutNiche est le même ouvrage que
     chBibliothequesMdfBrutOuvertes portes fermées, chIsolationPhoniqueGranulesPlancher2 est le même
     couloir que chPlancherSolivesBeton1 une étape plus tard, et chDressingBlancInterphone le même
     dressing laqué que chDressingLaqueBlancPoigneesBois. Les distances de scripts/memes-scenes.py
     les donnaient pourtant à 0,08–0,18, soit « scènes différentes ».
     Rien d'acier ici : la structure métallique reste sur /gros-oeuvre-structure et
     /ouverture-mur-porteur, le client n'en veut pas sur cette page. */
  { src: `${CH}/chDemolitionLattisPlatreChantier1.jpeg`, alt: "Cloison ancienne dont le plâtre a été piqué, lattis horizontal cloué sur poteaux de bois mis à nu, encadrement de porte conservé", cap: "Cloison ancienne mise à nu : le plâtre a été piqué jusqu'au lattis et l'on lit le squelette de la paroi — poteaux verticaux, lattes horizontales clouées. Le tableau de porte est conservé, le sol est couvert de gravats et la pièce voisine est protégée sous bâche. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chFacadeRavalementEchafaudage2.jpeg`, alt: "Immeuble ancien sous échafaudage pour un ravalement, toiture d'ardoise et souches de cheminée en brique conservées", cap: "Ravalement en cours sur un immeuble ancien : l'échafaudage et son filet enveloppent les deux façades d'angle, l'enduit est piqué par endroits avant reprise, la couverture en ardoise et les souches de cheminée en brique restent en place. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chEtagereBoisAssemblageAtelier.jpeg`, alt: "Bibliothèque sur mesure en bois clair dont les montants sont découpés en silhouettes de cactus, posée sur un sol protégé", cap: "Bibliothèque sur mesure posée avant finition : les montants sont découpés en silhouettes de cactus et les tablettes suivent un tracé ondulé d'un mur à l'autre. Le bois est encore brut et le sol reste protégé et scotché sur toute la surface de la pièce. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chVerriereInterieurePentagonale.jpeg`, alt: "Ouverture vitrée intérieure à encadrement de bois clair couronné en pignon, ouverte sur la pièce voisine", cap: "Ouverture vitrée percée entre deux pièces : l'encadrement en bois clair est monté et vitré, son couronnement dessine un pignon. Derrière, on aperçoit la fenêtre à garde-corps en fonte et la rampe d'escalier de la pièce voisine. La peinture est faite, mais l'appareillage électrique pend encore et les pots restent au sol. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chBibliothequePanneauxMoulures.jpeg`, alt: "Front de placards toute hauteur en MDF brut associant panneaux moulurés en bas et vitrages en haut, avant peinture", cap: "Front de rangements toute hauteur monté en MDF brut, prêt à peindre : chaque vantail associe un panneau mouluré en partie basse et deux vitrages en partie haute, l'ensemble étant recoupé jusqu'au plafond par un bandeau plein. Le sol neuf est protégé par bandes adhésives le temps de la finition. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chVasqueMarbreVanite.jpeg`, alt: "Salle d'eau en cours de finition : meubles en MDF brut, plan blanc à deux vasques rondes posées, carrelage grand format beige", cap: "Salle d'eau à l'avant-dernière étape : le carrelage grand format beige est posé au sol comme aux murs, le plan blanc et ses deux vasques rondes sont en place, mais les meubles hauts et bas sont encore en MDF brut et l'alimentation de l'éclairage pend au-dessus du plan. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chCouloirPorteAccordeonBois.jpeg`, alt: "Cloison habillée de tasseaux de bois verticaux dans laquelle une porte est dissimulée, vue depuis une grande ouverture", cap: "Cloison habillée de tasseaux verticaux sur toute sa hauteur : une porte y est dissimulée, repérable seulement à son joint creux et aux deux réservations rondes de la poignée, encore ouvertes. La vue est prise depuis la grande ouverture voisine, dont le rail est déjà posé ; le sol est bâché. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chDressingEscalierArriereplan2.jpeg`, alt: "Rangement toute hauteur en placage bois clair, deux portes ouvertes sur étagères et tiroirs, escalier bois à côté", cap: "Rangement toute hauteur monté à côté d'un escalier en bois clair : les caissons, les tablettes et les tiroirs sont en place, tandis que les vantaux hauts sont encore en MDF brut, en attente de finition. Le sol est protégé et les chutes de découpe sont restées au pied de l'ouvrage. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chCouloirPortesBoisJumelles.jpeg`, alt: "Palier desservant deux portes en bois foncé à vitrage vertical étroit, sol entièrement bâché et scotché", cap: "Palier de circulation en cours de rénovation : deux portes à vitrage vertical étroit sont posées et leur béquille montée, le plafond est en dalles démontables, et le sol existant est intégralement bâché puis scotché avant les travaux de peinture. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chDressingOuvertTiroirsEntrouverts.jpeg`, alt: "Intérieur d'un placard sur mesure en MDF brut : tablettes fixes en haut, tiroirs coulissants entrouverts en bas", cap: "Intérieur d'un placard sur mesure encore en MDF brut : tablettes fixes en partie haute, tiroirs coulissants en partie basse, charnières réglées. Derrière, la pièce est toujours en chantier — sol bâché, escabeau, outils et attentes électriques laissés en vrac. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
];

/* 02/09 — Lot « photo haut-de-gamme » transmis par le client : 30 vues de réalisations terminées.
   Chaque fichier a été ouvert et décrit visuellement avant rédaction de sa légende (les noms de
   fichiers n'ont pas été pris pour argent comptant). L'essentiel provient d'un même grand
   appartement ancien parisien livré ; deux vues (chHdgChambreLattes*) proviennent d'un autre
   chantier et une (chHdgDoucheMarbreLaitonProtection) montre une salle de bain ENCORE EN COURS DE
   POSE — film de protection au sol, éclairage provisoire —, ce que sa légende dit explicitement.
   Aucun de ces fichiers n'apparaît ailleurs dans cette page.

   03/09 — le lot passe de 30 à 27 vues. Les trois retirées étaient les trois images du lot employées
   sur 3 pages ou plus du site : chHdgSalonBoucleAppliquesBronze (3), chHdgDetailNicheOnyxCheminee (4)
   et chHdgSdbMarbreProfilesLaitonPose (4). Le détail de chaque suppression est en commentaire à
   l'endroit où elle a eu lieu. */
const PHOTOS_HDG = [
  /* Réception : séjour et salle à manger */
  { src: `${CH}/chHdgSalonSalleMangerMoulures.jpeg`, alt: "Séjour et salle à manger d'un appartement ancien parisien, boiseries panneautées, cheminée de marbre et parquet à chevrons", cap: "Séjour et salle à manger réunis dans un appartement ancien parisien : boiseries panneautées et corniches ornées restituées, trumeau et cheminée de marbre d'origine conservés, parquet chêne posé à chevrons. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  /* chHdgSalonBoucleAppliquesBronze retirée : employée sur 3 pages (la page d'accueil,
     tendances-2026-2027 et ici), c'est la seconde vue du salon déjà montré juste au-dessus. Garder
     deux vues d'un même salon sur une page qui en compte trente n'ajoutait rien et faisait revenir sur
     /realisations une image que le visiteur voit déjà en page d'accueil. */
  { src: `${CH}/chHdgSalleMangerTableDressee.jpeg`, alt: "Salle à manger ouverte sur le salon, portes-fenêtres à volets intérieurs persiennés et suspension en lames de verre", cap: "Salle à manger ouverte sur le salon : portes-fenêtres et volets intérieurs persiennés remis en état, garde-corps en fonte d'origine conservés, table en pierre naturelle claire sous une suspension à lames de verre. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSalleMangerSuspensionAlbatre.jpeg`, alt: "Suspension linéaire en lames de verre sur monture laiton au-dessus d'une table en pierre veinée, mur panneauté", cap: "Détail du même ensemble : suspension linéaire à lames de verre montées sur laiton, alignée sur l'axe de la table en pierre naturelle veinée, panneautage et cimaise moulurée en fond de pièce. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgDiptyqueSalonMiroirBalcon.jpeg`, alt: "Diptyque : salon reflété dans un trumeau à cadre de plâtre sculpté, et balcon filant sur une rue parisienne", cap: "Deux vues du même logement : le salon réfléchi dans le trumeau à cadre de plâtre sculpté conservé, et le balcon filant sur rue avec son garde-corps en fonte d'origine. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },

  /* Cuisine, entrée et détails de pierre */
  { src: `${CH}/chHdgCuisineOnyxParquetVersailles.jpeg`, alt: "Cuisine à façades bois clair, parement mural en pierre naturelle rubanée et parquet en panneaux de Versailles", cap: "Cuisine ouverte sur le couloir : parement mural en pierre naturelle rubanée monté du plan de travail au plafond, façades en placage bois clair sans poignée ouvrant par gorge en creux, retour de meuble arrondi et parquet chêne posé en panneaux de Versailles. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSejourCuisineOnyxBanquette.jpeg`, alt: "Pièce de vie avec cuisine intégrée en bois clair, plan en pierre rubanée et parquet en panneaux de Versailles", cap: "La même pièce de vie en enfilade : colonnes de rangement toute hauteur en placage bois clair, plan de travail et retour de comptoir taillés dans la même pierre rubanée que la crédence, parquet en panneaux de Versailles continu jusqu'à la porte d'entrée. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgEntreeCouloirCuisineOnyx.jpeg`, alt: "Entrée et couloir à soubassement mouluré ouvrant sur la cuisine, parquet en panneaux de Versailles", cap: "Entrée et couloir desservant la pièce de vie : soubassement mouluré et corniches restitués sur tout le linéaire, appliques posées en rythme régulier, parquet en panneaux de Versailles posé sans rupture entre le couloir et la cuisine. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  /* chHdgDetailNicheOnyxCheminee retirée : c'était l'image la plus recyclée de ce lot — 4 pages
     (menuiserie-agencement-sur-mesure, tendances-2026-2027, savoir-faire-ancien et ici). Le détail de
     pierre taillée reste illustré ici par chHdgDetailMarbreGrisVasque et chHdgSalleEauPierreDouche, et
     la cheminée en marbre sculpté par chHdgChambreChemineeMiroirMoulure et
     chHdgSuiteMarbreNoirBaignoire : aucun sujet n'est perdu. */

  /* Chambres */
  { src: `${CH}/chHdgChambreVeloursTaupeBalcon.jpeg`, alt: "Chambre avec mur de tête de lit en panneaux capitonnés taupe, portes-fenêtres sur balcon et parquet à chevrons", cap: "Chambre sur rue : mur de tête de lit habillé de panneaux capitonnés taupe sur soubassement en placage bois, appliques en laiton fixées à travers le capitonnage, radiateur en fonte d'origine conservé et parquet chêne à chevrons. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreVeloursNicheBureau.jpeg`, alt: "Chambre avec panneaux capitonnés, niche-bureau en bois clair encastrée et radiateur en fonte ancien", cap: "Autre chambre du même ensemble : mur de tête de lit habillé de quatre panneaux rembourrés taupe, niche-bureau en placage bois clair encastrée dans l'épaisseur de la cloison, appliques en laiton à globe opalin et radiateur en fonte ancien conservé dans l'angle de la pièce. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreCapitonneeSuspension.jpeg`, alt: "Chambre avec panneaux capitonnés crème, soubassement en chêne et porte-fenêtre ouverte sur balcon", cap: "Chambre livrée : panneautage capitonné crème descendant sur un soubassement en chêne qui se prolonge en tête de lit, profilé laiton en tableau, porte-fenêtre et volets intérieurs persiennés conservés. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreTeteVeloursMarbre.jpeg`, alt: "Chambre ouverte sur une salle de bain en marbre sombre, mur de tête de lit capitonné et parquet à chevrons", cap: "Chambre ouverte sur sa salle de bain : le capitonnage vient buter contre le retour de marbre sombre, le seuil de la pièce d'eau est traité en marche de marbre pleine masse et le parquet à chevrons s'arrête au nu de la pierre. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgDiptyqueChambreSdbBaignoire.jpeg`, alt: "Diptyque : chambre capitonnée avec applique en laiton, et salle de bain en pierre claire avec baignoire îlot", cap: "Deux vues d'une même suite : le capitonnage et l'applique en laiton côté chambre ; la salle de bain attenante entièrement doublée d'une pierre claire très mouvementée, baignoire îlot posée sur une estrade de pierre au raccord du parquet à chevrons. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreChemineeMiroirMoulure.jpeg`, alt: "Chambre avec cheminée de marbre et trumeau cintré d'origine conservés, dressing en placage bois clair", cap: "Chambre livrée : cheminée de marbre sculpté, foyer en fonte et trumeau cintré d'origine conservés, dressing toute hauteur en placage bois clair posé au nu du panneautage, corniche ornée reprise sur tout le pourtour. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreDressingChevrons.jpeg`, alt: "Même chambre vue depuis la salle d'eau, étagères en chêne sur le retour de cloison et parquet à chevrons", cap: "La même chambre vue depuis la salle d'eau attenante : étagères en chêne sur le retour de cloison, plan de la pièce d'eau en marbre gris au premier plan, parquet chêne à chevrons posé jusque sous le dressing. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreBalconApplique.jpeg`, alt: "Chambre d'angle à mur arrondi, deux portes-fenêtres sur balcons à garde-corps en fonte et applique en laiton", cap: "Chambre d'angle sous rotonde : le mur courbe est conservé, les deux portes-fenêtres ouvrent sur des balcons à garde-corps en fonte, applique en laiton et radiateur en fonte ancien maintenu en place. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambrePlacardMoulure.jpeg`, alt: "Chambre avec placard toute hauteur à façades moulurées et mur de tête de lit en enduit décoratif", cap: "Chambre livrée : placard toute hauteur dont les façades reprennent le dessin des panneaux moulurés de la pièce, corniche redescendue en retour sur le caisson, mur de tête de lit traité en enduit décoratif. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgChambreLustreSdbOuverte.jpeg`, alt: "Chambre avec salle de bain ouverte en niche de pierre claire, encadrée de deux dressings en placage bois clair", cap: "Chambre avec salle de bain ouverte : la pièce d'eau est logée dans une niche entièrement doublée de pierre claire, encadrée par deux volumes de dressing en placage bois clair qui montent jusqu'à la corniche. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSuiteMarbreNoirBaignoire.jpeg`, alt: "Suite parentale ouverte sur une salle de bain en marbre sombre, baignoire îlot et cheminée d'origine", cap: "Suite parentale ouverte sur sa salle de bain : parement de marbre sombre monté toute hauteur, baignoire îlot à finition bronze mat, cheminée de marbre d'origine conservée en limite de pièce d'eau et dressings en placage bois clair. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },

  /* Pièces d'eau livrées */
  { src: `${CH}/chHdgSdbMarbreNoirDoubleVasque.jpeg`, alt: "Salle de bain en marbre sombre veiné, baignoire îlot, deux vasques monolithes et cheminée d'origine", cap: "Salle de bain en marbre sombre veiné : baignoire îlot à finition bronze mat, deux vasques monolithes taillées pleine masse et robinetterie murale en bronze, cheminée de marbre d'origine conservée dans l'angle. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSdbMarbreClairBaignoire.jpeg`, alt: "Salle de bain doublée d'une pierre claire très mouvementée, baignoire îlot sable et vasque monolithe sur socle", cap: "Salle de bain doublée d'une pierre claire très mouvementée, murs et sol dans le même matériau : baignoire îlot à finition sable mat, vasque monolithe posée sur un socle en gradins taillé dans la même pierre, robinetterie murale en bronze. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSalleEauPierreDouche.jpeg`, alt: "Salle d'eau en pierre claire avec vasque-auge monolithe, miroir bandeau et douche à l'italienne cannelée", cap: "Salle d'eau en pierre claire : vasque-auge monolithe à bord biseauté, robinetterie murale en bronze sortant du parement, miroir bandeau pleine largeur et douche à l'italienne de plain-pied dont le fond est habillé d'une pierre à cannelures verticales. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgDetailMarbreGrisVasque.jpeg`, alt: "Détail d'une salle d'eau en marbre gris veiné : vasque-auge suspendue et robinetterie murale en bronze", cap: "Détail d'exécution en marbre gris veiné : vasque-auge suspendue taillée dans la même dalle que le parement, veinage raccordé d'un panneau à l'autre, robinetterie et prise encastrées directement dans la pierre. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgSdbMarbreGrisPassageChambre.jpeg`, alt: "Passage entre une salle d'eau en marbre gris et une chambre, encadrement habillé en placage bois clair", cap: "Passage entre la salle d'eau et la chambre : encadrement et cloison habillés en placage bois clair, marbre gris veiné monté du sol au plafond côté pièce d'eau, radiateur en fonte ancien conservé côté chambre. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chHdgDetailCeramiqueRobinetterie.jpeg`, alt: "Diptyque : étagère en bois clair sur fond strié, et commandes de douche encastrées en bronze sur pierre cannelée", cap: "Deux détails de finition : à gauche, une étagère en bois clair dont le fond est strié dans la masse ; à droite, les trois commandes de douche encastrées sur platines en bronze patiné dans un parement de pierre à cannelures verticales. Chantier réel des équipes partenaires.", ratio: "aspect-[3/2]" },

  /* Autre chantier : habillage en tasseaux de bois */
  { src: `${CH}/chHdgChambreLattesBoisTv.jpeg`, alt: "Chambre d'un autre chantier, mur en tasseaux de bois sur feutre noir et faux plafond incurvé", cap: "Autre chantier : chambre dont le mur de télévision est habillé de tasseaux de bois sur feutre noir, faux plafond incurvé intégrant les spots orientables, l'éclairage indirect et la reprise de ventilation. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chHdgChambreLattesCacheRadiateur.jpeg`, alt: "Cache-radiateur sur mesure en tôle perforée sous une niche habillée de tasseaux de bois", cap: "Même chantier : le radiateur est enfermé dans un coffrage laqué fermé par une tôle perforée sur mesure, surmonté d'une niche en tasseaux de bois qui reçoit la télévision ; la cloison voisine est habillée de textile tendu dans un encadrement cintré. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },

  /* Salle de bain encore en cours de pose — signalée comme telle */
  /* Des deux vues de cette salle de bain non livrée, une seule est conservée :
     chHdgSdbMarbreProfilesLaitonPose était employée sur 4 pages (renovation-appartement,
     tendances-2026-2027, tendances-materiaux-francais et ici), la vue conservée sur 3. Le propos —
     montrer un chantier NON LIVRÉ et le dire — tient avec une seule photographie, et sa légende a été
     réécrite pour ne plus renvoyer à une image qui n'est plus là. */
  { src: `${CH}/chHdgDoucheMarbreLaitonProtection.jpeg`, alt: "Douche en cours de pose, parement de pierre monté, sol et receveur couverts d'un film de protection, éclairage provisoire au plafond", cap: "Chantier en cours, non livré : le parement de pierre est monté et les profilés laiton sont déjà posés sur toutes les arêtes, mais le sol et le receveur de douche restent couverts d'un film de protection et l'éclairage est encore provisoire. Chantier réel des équipes partenaires." },

  /* 07/09 — DEUX VUES INÉDITES d'ouvrages LIVRÉS, prises sur d'AUTRES chantiers que l'appartement
     parisien : le chapô de la section prévoit déjà ce cas (« Quelques vues ont été prises sur
     d'autres chantiers »), et chaque légende le redit. Ouvertes avant rédaction, comme le reste du
     lot. Écartées au passage : chDressingProcheToilettes (exemplaire jumeau de la première, distance
     0,001) puis chDressingArrondiCouloirParquet2 et chNicheArrondieCouloirBacklight, qui montrent le
     même couloir laqué beige que chDressingArrondiCouloirParquet1 déjà en galerie — on y reconnaît la
     même cuisine sombre au fond et le même parquet à bâtons rompus. */
  { src: `${CH}/chCouloirDressingToilettes.jpeg`, alt: "Couloir livré : mur de placards toute hauteur en placage chêne à poignées bâton en acier, parquet clair, porte à panneaux ancienne repeinte", cap: "Autre chantier livré : le mur de placards court sur toute la longueur du couloir en placage chêne, poignées bâton en acier brossé et socle plus foncé, face à une porte à panneaux ancienne conservée et repeinte. Le parquet clair est posé et l'éclairage encastré raccordé. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chBibliothequeNicheGrisTaupe.jpeg`, alt: "Bibliothèque sur mesure peinte gris taupe garnie de livres, face à un mur de pierre apparente appareillée", cap: "Autre chantier livré : bibliothèque sur mesure déjà garnie — tablettes ouvertes en partie haute, placards à panneaux moulurés et petits boutons en partie basse, le tout peint dans un gris taupe. Le mur de pierre apparente appareillée lui fait face et le plancher bois ancien a été conservé. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
];

/* 01/09 — Lot de photos de chantier transmis par le client : ouvrages techniques (étanchéité et
   isolation de pièces d'eau, plomberie, électricité). Regroupés dans leur propre section plutôt
   qu'ajoutés à la galerie ci-dessus, qui documente surtout des ouvrages finis : la lecture reste
   possible et la démonstration « le budget part dans ce qu'on ne voit plus » devient explicite.
   Aucun de ces fichiers n'apparaît ailleurs dans cette page. */
const PHOTOS_TECHNIQUES = [
  /* Étanchéité et isolation des pièces d'eau */
  { src: `${CH}/chEtancheiteSolDoucheTrameArmee.jpeg`, alt: "Sol de douche à l'italienne en préparation, treillis d'armature déroulé sur la dalle et évacuation PVC en attente", cap: "Sol de douche à l'italienne en préparation : treillis d'armature déroulé sur la dalle, évacuation PVC raccordée en attente au droit de la réservation, cloisons en plaque hydrofuge déjà montées. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* 03/09 — chEtancheiteReceveurDoucheLaser retirée : employée sur 3 pages (renovation-appartement,
     second-oeuvre et ici) et redondante avec la vignette ci-dessus, qui montre la même préparation de
     sol de douche à une étape voisine. */
  { src: `${CH}/chIsolationLaineUrsaVarioSdb.jpeg`, alt: "Doublage isolé d'une salle de bain, laine minérale entre montants et bandes adhésives d'étanchéité à l'air sur chaque ossature", cap: "Doublage isolé d'une salle de bain : laine minérale posée entre montants, chaque ossature recouverte d'une bande adhésive d'étanchéité à l'air, attentes de robinetterie déjà sorties. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chIsolationFenetreSdbLaineVario.jpeg`, alt: "Même mur de salle de bain isolé, vu jusqu'au plafond, jonctions adhésivées autour de la fenêtre", cap: "Le même mur vu jusqu'au plafond : les jonctions sont adhésivées en continu autour de la fenêtre et en tête de cloison, là où les fuites d'air se logent en priorité. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chParVapeurSopremaFenetreSdb.jpeg`, alt: "Pare-vapeur déroulé sur l'isolant d'un mur de salle de bain, recouvrements et traversées adhésivés", cap: "Pare-vapeur déroulé par-dessus l'isolant : chaque lé est recouvert puis adhésivé, y compris au droit de la gaine électrique et des attentes de robinetterie qui le traversent. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chParVapeurFenetreSdbFinition.jpeg`, alt: "Pourtour d'une fenêtre de salle de bain entièrement traité au pare-vapeur avant pose des plaques", cap: "Traitement du pourtour de fenêtre : le pare-vapeur est raccordé et adhésivé sur tout le tableau, point le plus exposé à la condensation dans une pièce d'eau. Chantier réel des équipes partenaires.", ratio: "aspect-[16/9]" },
  { src: `${CH}/chParVapeurSopremaMuralSdb.jpeg`, alt: "Mur de salle de bain repris sous pare-vapeur, carrelage blanc existant conservé sur la paroi voisine", cap: "Rénovation partielle d'une salle de bain : seul le mur déposé est réisolé et repris sous pare-vapeur, le carrelage existant de la paroi voisine étant conservé. Chantier réel des équipes partenaires.", ratio: "aspect-[16/9]" },
  /* 05/09 — chPlacoHydroSopremaFenetreSdb retirée. Deux mesures la condamnaient : (a) elle est
     FLOUE — piqué 43 sur l'échelle de scripts/qualite-photos.py, où 60 est déjà la limite basse ;
     (b) scripts/memes-scenes.py la regroupe avec chParVapeurSopremaFenetreSdb, conservée juste
     au-dessus : c'est le même angle de la même salle de bain, à l'étape suivante. La série
     « pare-vapeur » garde donc quatre vues nettes et distinctes plutôt que cinq dont une floue et
     redondante. À POURVOIR : une photo nette de la fermeture en plaque hydrofuge. */

  /* Plomberie : distribution, nourrices, production d'eau chaude */
  { src: `${CH}/chPlomberieColonneCuivreVannes.jpeg`, alt: "Colonne montante en cuivre dans une gaine technique, piquages vannés et étiquettes de repérage numérotées", cap: "Colonne montante en cuivre dans une gaine technique : chaque piquage reçoit sa vanne d'arrêt en laiton et son étiquette numérotée, les départs étant protégés par gaine annelée. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  { src: `${CH}/chNourriceMulticoucheRadiateurs.jpeg`, alt: "Distribution de chauffage reprise avec raccords à sertir en laiton et nourrices en extrémité de ligne", cap: "Reprise d'une distribution de chauffage : antennes horizontales assemblées par raccords à sertir, descentes maintenues au collier et nourrices laiton en extrémité de ligne. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  /* 03/09 — chPlomberieMulticoucheDistributionMurale retirée : employée sur 3 pages
     (renovation-appartement, second-oeuvre et ici). La distribution en multicouche reste illustrée
     par les cinq autres vignettes de plomberie de cette série. */
  { src: `${CH}/chPlomberieDistributionVannesBeton.jpeg`, alt: "Tableau de distribution d'eau monté sur un voile béton brut, une vanne quart-de-tour rouge par départ", cap: "Distribution d'eau montée sur voile béton brut : chaque antenne part de sa propre vanne quart-de-tour, l'implantation ayant été tracée et repérée sur le béton avant la pose. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chPlomberieVannesRougesBetonDetail.jpeg`, alt: "Détail des vannes quart-de-tour et des raccords laiton d'une distribution d'eau sur mur béton", cap: "Détail du même ouvrage : une vanne d'arrêt par antenne permet d'isoler un logement ou une pièce sans couper toute la colonne. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chNourriceManometreEvacuationPvc.jpeg`, alt: "Nourrice de plomberie équipée d'un manomètre pour l'essai de mise en pression, réseau d'évacuation PVC monté à côté", cap: "Essai de mise en pression : manomètre monté sur la nourrice, départs repérés chaud en rouge et froid en bleu, réseau d'évacuation PVC assemblé à côté avant fermeture. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chPlomberieAlimentationEvacuationPlacoHydro.jpeg`, alt: "Alimentations en multicouche et évacuations PVC posées ensemble sur une cloison en plaque hydrofuge, attentes bouchonnées", cap: "Alimentations en multicouche et évacuations PVC posées ensemble sur cloison hydrofuge : chaque attente est bouchonnée et repérée avant l'essai de mise en pression et la pose des appareils sanitaires. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chNourriceLaitonDoubleDeparts.jpeg`, alt: "Deux nourrices laiton superposées, une vanne quart-de-tour par circuit et tubes multicouche fixés au collier", cap: "Deux nourrices laiton superposées : arrivée générale vannée, puis un robinet d'arrêt par circuit, l'ensemble fixé au collier sur la cloison hydrofuge avant habillage. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chNourriceLaiton12Departs.jpeg`, alt: "Nourrice laiton à douze départs multicouche, chaque circuit équipé de sa propre vanne d'arrêt", cap: "Nourrice laiton alimentant une rangée de départs en multicouche : chaque circuit est vanné individuellement, ce qui permet de couper un point d'eau sans priver le reste du logement. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  /* 05/09 — chNourriceLaitonVanneGenerale retirée de cette grille. Comparée à l'écran avec
     chNourriceLaiton12Departs qui la précédait, c'est le MÊME collecteur, sur le même mur, aux mêmes
     colliers, photographié à quelques secondes d'intervalle depuis un point de vue décalé de quelques
     degrés : sa légende annonçait « la même nourrice vue de face », ce qui était honnête mais revenait
     à afficher deux fois le même ouvrage dans une grille de vingt vignettes. C'est exactement le
     reproche du client. Une seule des deux est conservée. */
  { src: `${CH}/chNourriceDoubleAnglePlafond.jpeg`, alt: "Deux nourrices laiton implantées en tête de cloison sous plafond, circuits plongeant dans la trémie du plancher", cap: "Deux nourrices implantées en tête de cloison : les circuits plongent directement dans la trémie du plancher, où ils rejoignent les gaines déjà tirées. Chantier réel des équipes partenaires.", ratio: "aspect-[4/3]" },
  { src: `${CH}/chChaudiereMuraleSaunierDuval.jpeg`, alt: "Chaudière murale posée sur un mur de pierre en local technique, vannes d'arrêt et filtre en Y en pied d'appareil", cap: "Chaudière murale posée en local technique sur un mur de pierre : vanne d'arrêt sur chaque départ, filtre en Y en pied d'appareil et canalisations calorifugées. Chantier réel des équipes partenaires.", ratio: "aspect-[9/16]" },
  /* 06/09 — LOT WHATSAPP INÉDIT. Sa place est ici et pas dans la galerie : une fois la chape
     coulée, il ne reste plus rien à voir de cet ouvrage. Portrait natif 1200x1600, posé en 3/4. */
  { src: `${CH}/chPlancherChauffantPerEscargot.jpeg`, alt: "Pose d'un plancher chauffant : tubes orange déroulés en escargot et agrafés sur des panneaux isolants quadrillés, bande périphérique bleue en pied de cloison", cap: "Pose d'un plancher chauffant à eau : les tubes orange sont déroulés en escargot puis agrafés sur des panneaux isolants dont le quadrillage imprimé sert de trame d'espacement, et la bande périphérique bleue court en pied de cloison. Deux compagnons sont au travail sur la boucle ; les cloisons sont montées et la chape n'est pas encore coulée. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },

  /* Électricité */
  { src: `${CH}/chElectriciteFauxPlafondFaisceaux.jpeg`, alt: "Faux plafond en cours de montage, faisceaux de gaines tirés au-dessus de l'ossature métallique et attentes de câbles le long du voile béton", cap: "Faux plafond en cours de montage : ossature métallique posée, faisceaux de gaines tirés au-dessus et attentes de câbles descendues le long du voile béton avant plaquage. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  /* 03/09 — chElectriciteFauxPlafondRailsCablage retirée : employée sur 3 pages
     (renovation-appartement, second-oeuvre et ici) et très proche de la vignette ci-dessus, qui montre
     le même faux plafond avec ses faisceaux de gaines une étape plus tôt. */
  { src: `${CH}/chTableauElectriqueDisjoncteurs.jpeg`, alt: "Tableau électrique en cours de câblage dans une niche, rangées de disjoncteurs divisionnaires et borniers de répartition", cap: "Tableau électrique en cours de câblage : rangées de disjoncteurs alimentées par peignes, borniers de répartition repérés bleu et rouge, platine de comptage et disjoncteur de branchement en partie haute. Chantier réel des équipes partenaires." },
  /* 07/09 — DEUX VUES INÉDITES. Elles complètent la démonstration de la section par son autre bout :
     non plus le réseau nu, mais le moment où on le referme. La seconde n'est pas un doublon de
     chTableauElectriqueDisjoncteurs juste au-dessus : celle-ci est un tableau nu dans une niche de
     plaque, celle-là l'installation complète (compteur inclus) refermée par une menuiserie. */
  { src: `${CH}/chNicheArrondieBoisEclairage.jpeg`, alt: "Panneaux de MDF à bords arrondis présentés sur une cloison de plaque, gaine verticale, boîtiers et réservations encore apparents", cap: "Habillage en cours de fermeture : les panneaux de MDF découpés à bords arrondis sont présentés et vissés sur la cloison de plaque, mais la gaine verticale, ses boîtiers et deux réservations percées dans la plaque restent visibles — ils ne le seront plus une fois l'ouvrage terminé. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `${CH}/chPlacardCompteurElectriqueArrondi.jpeg`, alt: "Placard technique en MDF brut refermant un compteur et un tableau à deux rangées de disjoncteurs, tablettes d'angle arrondies", cap: "Placard technique sur mesure monté autour de l'installation électrique : compteur et tableau à deux rangées de disjoncteurs restent accessibles derrière les vantaux, et des tablettes d'angle arrondies récupèrent le reste du volume. L'ouvrage est encore en MDF brut, la porte voisine protégée à l'adhésif. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
];

/* 03/09 — Le « déroulé » passe de 10 à 5 vignettes. Cinq y étaient soit un doublon d'une image déjà
   présente ailleurs sur la page, soit l'un des visuels les plus recyclés du site :
   — chDemolitionDegagementVersSejour : quasi-jumelle de chDemolitionMursDecapes qui la suivait
     immédiatement (distance 0,31 : même couloir, même huisserie, même fenêtre au fond), et employée
     en plus sur /ouverture-mur-porteur. C'est celle qui n'est employée nulle part ailleurs qui reste.
   — chPoutreAcierAngleSoudeVue1 : quasi-jumelle de chPortiqueAcierAngleGaine, déjà en galerie
     ci-dessus (distance 0,14, même angle d'acier, même gaine annelée) ; sa légende annonçait pourtant
     « autre chantier réel ». Retirée ; elle reste sur /ouverture-mur-porteur.
   — chPlacardTableauElectriqueIntegre (3 pages) : gardée sur /savoir-faire-ancien, où « la mise aux
     normes invisible » est le sujet nommé, et retirée ici où le même propos est déjà tenu par
     chBibliothequeRadiateurIntegre en galerie et par chTableauElectriqueDisjoncteurs dans « L'ouvrage
     caché ».
   — chantier-vmc-caisson-gaines (4 pages) et chantier-carottage-facade (4 pages) : deux images de
     stock, employées sur trois autres pages chacune, dont la légende reconnaissait déjà qu'elles ne
     documentent aucun chantier de cette page. La légende du carottage affirmait de surcroît un
     « accord écrit du syndic » qu'aucune photographie ne peut montrer. Elles restent en place sur
     /renovation-energetique et /second-oeuvre, où la ventilation est le sujet. */
const DEROULE = [
  { src: `/photos/chantiers/chDemolitionMursDecapes.jpeg`, alt: "Pièce d'un logement ancien mise à nu après démolition : murs décapés jusqu'au support, lambeaux de papier peint ancien, cloison en pan de bois apparente et alimentations neuves en pied de mur", cap: "Pièce mise à nu après démolition : murs décapés jusqu'au support où subsistent des lambeaux de papier peint ancien, cloison en pan de bois et lattis apparente à droite, alimentations neuves repérées chaud et froid déjà tirées en pied de mur, huisserie conservée au premier plan. Chantier réel des équipes partenaires.", ratio: "aspect-[3/4]" },
  { src: `/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg`, alt: "Portique acier de reprise de charge posé après ouverture d'un mur porteur, avant habillage", cap: "Portique acier de reprise de charge (poutre et poteau) scellé sur ses appuis après ouverture du mur porteur, avant habillage par le plaquiste.", ratio: "aspect-[9/16]" },
  { src: `${M}/chantier-plomberie-encastree.jpg`, alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux", cap: "Illustration de référence (hors chantier documenté sur cette page) : principe de réseaux encastrés en multicouche depuis un collecteur, repérage chaud/froid avant fermeture.", ratio: "aspect-[3/2]" },
  { src: `${M}/moulures-corniches-pose.jpg`, alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant la rénovation", cap: "Illustration de référence (hors chantier documenté sur cette page) : restitution de corniches, rosace et boiseries en plâtre traditionnel d'après l'existant.", ratio: "aspect-[3/2]" },
  { src: `${CH}/chParquetVitrifie.jpeg`, alt: "Séjour livré avec parquet ancien poncé et vitrifié, cheminée et moulures d'origine conservées", cap: "Autre chantier réel des équipes partenaires, sans lien avec la photo de démolition en tête de série : parquet ancien à lames droites poncé et vitrifié, cheminée en marbre sombre et radiateurs conservés. La pièce ne comporte ni corniche ni moulure murale." },
];

/* 03/09 — Les avant/après passent de 15 à 8 paires. Sept ont été retirées, toutes pour des raisons de
   RÉPÉTITION, mesurées et non supposées :
   — « De l'état initial au plateau livré » et « Réseaux encastrés puis pièce d'eau livrée » affichaient
     une seconde fois, dans cette même page, chDemolitionDegagementVersSejour, chParquetVitrifie et
     chantier-plomberie-encastree, déjà présentes dans le « déroulé ». Le visiteur voyait donc trois
     images deux fois. (La note de la première reconnaissait d'ailleurs qu'il s'agissait de DEUX
     chantiers différents « présentés en progression type ».)
   — « Ouvrir un mur porteur » reposait sur chantier-ouverture-mur-etaiement (3 pages) et
     chantier-ipn-habillage, deux images de stock, alors que la page montre quatre photographies
     RÉELLES d'ouvertures de murs porteurs et de portiques acier : la démonstration était déjà faite,
     mieux, quelques écrans plus haut.
   — « Étanchéité sous carrelage » (chantier-nappe-etancheite-douche, 3 pages) et « Salle d'eau :
     condensation » (salle-eau-condensation-avant, 3 pages) faisaient double emploi avec la section
     « L'ouvrage caché », qui documente la même chose en photos réelles (trame armée, receveur au
     laser, pare-vapeur, plaque hydrofuge).
   — « Pavillon francilien » (2 images sur 3 pages) et « Combles » (2 images sur 4 pages) sont les
     paires les plus recyclées du site ; elles portent sur l'enveloppe d'une maison individuelle et ont
     chacune leur page dédiée (/renovation-maison-pavillon, /renovation-energetique), d'où elles
     restent accessibles.
   Les huit paires conservées sont celles qui montrent réellement le même ouvrage avant et après, sans
   image employée plus de deux fois sur le site. */
const COMPARAISONS = [
  /* 06/09 — DEUX PAIRES RÉELLEMENT APPARIÉES, placées en tête parce qu'elles sont les seules de
     cette liste à montrer le MÊME ouvrage avant et après. Le reste de la liste est composé
     d'illustrations, ce que chaque note dit. Rappel de l'incident à ne pas reproduire : le tableau
     a longtemps contenu une « paire » qui était en fait deux cuisines différentes. Chaque paire
     ci-dessous a donc été vérifiée à l'écran, les deux images ouvertes côte à côte, sur un détail
     invariant que les travaux n'ont pas déplacé :
       — azulejos / grand format : les trois baies en pavés de verre, le plafond en lambris de pin
         et l'escalier du fond à droite sont aux mêmes places sur les deux vues ;
       — façade : le boîtier blanc du branchement aérien, son faisceau de câbles et la gaine verte
         qui en redescend, sous la gouttière, sont identiques sur les deux vues (agrandissement
         comparé). Les deux jeux d'ouvertures et la descente d'eau pluviale concordent.
     Aucune de ces quatre images n'est employée ailleurs sur le site : elles n'ajoutent donc pas
     une répétition de plus. */
  { titre: "Une pièce entièrement recarrelée, des azulejos au grand format", texte: "Les trois baies en pavés de verre et le plafond en lambris ne bougent pas : seuls les murs et le sol changent. La faïence à motif andalou et son sol octogonal laissent place à un carrelage grand format poli à veinage gris, posé mur et sol, tableaux des baies compris.", avant: `${CH}/chAzulejosAvantTravaux.jpeg`, apres: `${CH}/chGresCerameMarbreApresTravaux.jpeg`, avantLabel: "Avant — murs en azulejos", apresLabel: "Après — grand format poli", note: "Chantier réel des équipes partenaires, la même pièce avant et après. Sur la vue « après », le mur du fond à droite est encore brut : la pièce n'est pas livrée." },
  { titre: "Ravalement d'une façade de maison de village", texte: "L'ancien enduit ciment tyrolien, tacheté de rebouchages, dont ceux qui entourent chaque menuiserie, est remplacé par un enduit de finition gratté, avec encadrements de baies rechampis en blanc.", avant: `${CH}/chFacadeAvantRavalementTyrolien.jpeg`, apres: `${CH}/chFacadeRavalementEnduitGratte.jpeg`, avantLabel: "Avant — enduit tyrolien", apresLabel: "Après — enduit gratté", note: "Chantier réel des équipes partenaires, la même façade avant et après. L'échafaudage est encore monté et la porte encore sous film : le chantier n'est pas réceptionné." },
  /* 06/09 — remontée de la fin de liste : c'est la troisième et dernière paire RÉELLE du
     tableau (même comptoir, même local, du montage à la livraison). Elle était reléguée
     derrière sept illustrations, alors que la section annonce des preuves. */
  { titre: "Local commercial : de la carcasse brute au comptoir d'accueil livré", texte: "Agencement d'un local commercial (opticien) : la carcasse du comptoir est montée sur site puis habillée en bois et laque avant réception.", avant: `/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg`, apres: `/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg`, avantLabel: "Avant — carcasse brute", apresLabel: "Après — comptoir livré", note: "Chantier réel des équipes partenaires, même local commercial du début à la fin des travaux." },
  { titre: "Doublage isolant d'une pièce ancienne", texte: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.", avant: `${M}/chantier-ossature-avant.jpg`, apres: `${M}/chantier-isolation-laine.jpg`, avantLabel: "Avant — ossature implantée", apresLabel: "Après — isolant posé", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "De l'ossature brute à la pièce livrée", texte: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.", avant: `${M}/chantier-ossature-placo-plafond.jpg`, apres: `${M}/chambre-livree-parquet-chene.jpg`, avantLabel: "Avant — ossature", apresLabel: "Après — chambre livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Pose du zellige, de la crédence brute à la cuisine livrée", texte: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.", avant: `${M}/chantier-pose-zellige-credence.jpg`, apres: `${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`, avantLabel: "Avant — pose du zellige", apresLabel: "Après — cuisine livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Caissons standards, façades sur mesure", texte: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.", avant: "/photos/pedagogie/35-realisations-cuisine-avant.jpeg", apres: "/photos/pedagogie/36-realisations-cuisine-apres.jpeg", avantLabel: "Avant — caissons optimisés", apresLabel: "Après — cuisine livrée", note: "Illustration pédagogique : DEUX cuisines différentes, rapprochées pour montrer le principe — caissons blancs standards d'un côté, façades cannelées sur mesure de l'autre. Ce n'est pas la même pièce avant et après, et ce n'est pas un chantier documenté sur cette page." },
  { titre: "Électricité : du tableau vétuste à l'installation conforme", texte: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.", avant: `${M}/tableau-electrique-vetuste-avant.jpg`, apres: `${M}/tableau-electrique-neuf-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Extension : du jardin encombré au volume contemporain", texte: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.", avant: `${M}/jardin-avant-extension.jpg`, apres: `${M}/extension-livree-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Surélévation : un étage gagné sans démolir", texte: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.", avant: `${M}/maison-avant-surelevation.jpg`, apres: `${M}/maison-surelevee-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
];

export default function RealisationsPage() {
  return (
    <main>
      <MqHero
        kicker="Preuves — cas documentés"
        title="Réalisations : des cas de projets accompagnés, présentés avec leurs limites"
        lead="Chaque réalisation présentée ici est un exemple anonymisé, choisi parce qu'il illustre un problème résolu et non pour servir de vitrine décorative. Contexte du logement, contraintes rencontrées, décisions prises et résultat obtenu sont détaillés, avec une mention explicite de ce que le cas ne permet pas de démontrer pour un autre projet."
      />

      <MqSection kicker="Méthode de présentation" title="Organiser les preuves par problèmes résolus, pas comme une galerie" lead="Un visuel ou un cas qui ne démontre rien de précis est écarté, quelle que soit sa qualité esthétique.">
        <MqProse>
          <p>
            Chaque cas suit la même trame : contexte du logement, contraintes rencontrées, décisions prises pendant le
            pilotage du projet, résultat constaté et, systématiquement, ce que ce résultat ne prouve pas pour un autre
            logement. Cette dernière mention est volontaire : elle évite de transformer un exemple représentatif en
            promesse générale.
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="Cas documentés" title="Trois exemples représentatifs de projets accompagnés" wide>
        <div className="flex flex-col gap-6">
          {CAS.map((c) => (
            <article key={c.titre} className="border border-line bg-surface rounded-none p-6 md:p-8">
              <h3 className="display t-fort text-ivoire text-balance">{c.titre}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-5">
                <div><p className="eyebrow !t-micro">Contexte</p><p className="t-sec text-ivoire/85 mt-1 leading-relaxed">{c.contexte}</p></div>
                <div><p className="eyebrow !t-micro">Contraintes</p><p className="t-sec text-ivoire/85 mt-1 leading-relaxed">{c.contraintes}</p></div>
                <div><p className="eyebrow !t-micro">Décisions</p><p className="t-sec text-ivoire/85 mt-1 leading-relaxed">{c.decisions}</p></div>
                <div><p className="eyebrow !t-micro">Résultat</p><p className="t-sec text-ivoire/85 mt-1 leading-relaxed">{c.resultat}</p></div>
              </div>
              <p className="text-muted t-petit mt-5 pt-4 border-t border-line leading-relaxed">
                <strong className="text-ivoire/75">Ce que ce cas ne démontre pas :</strong> {c.limite}
              </p>
            </article>
          ))}
        </div>
      </MqSection>

      {/* 07/09 : les trois galeries passent d'une GRILLE à des COLONNES. Motif : dans une
          grille, toutes les cartes d'une même rangée sont étirées à la hauteur de la plus
          haute. Comme les photos gardent ici leur ratio natif — et c'est voulu, un cadre
          uniforme amputerait les portraits de moitié —, une rangée mêlant un portrait 3/4 et
          un paysage 16/9 laissait un grand vide blanc sous la légende de la plus courte. Le
          client l'a vu tout de suite. Les colonnes CSS empilent chaque carte à sa hauteur
          réelle et remplissent le vide, sans recadrer une seule image. */}
      <MqSection kicker="Photographies de chantiers" title="Des photographies prises sur les chantiers, pendant et après les travaux" lead="Les images de cette grille proviennent toutes de chantiers réels, exécutés par les entreprises partenaires contractantes : aucune n'est une photographie d'illustration. Plus bas sur la page, en revanche, le « déroulé » et les avant/après recourent à des visuels de référence, signalés comme tels en légende." wide>
        <div className="columns-2 lg:columns-3 gap-3 sm:gap-5 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
          {PHOTOS_CHANTIERS.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} ratio={p.ratio} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Réalisations haut de gamme" title="Un appartement ancien parisien livré, pièce par pièce" lead="Ces photographies proviennent pour l'essentiel d'un même grand appartement ancien parisien, prises après travaux : ouvrages de pierre, menuiseries sur mesure et éléments d'origine conservés. Quelques vues ont été prises sur d'autres chantiers et l'une montre une salle de bain encore en cours de pose — la légende le précise à chaque fois." wide>
        <div className="columns-2 lg:columns-3 gap-3 sm:gap-5 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
          {PHOTOS_HDG.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} ratio={p.ratio} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="L'ouvrage caché" title="Étanchéité, plomberie, électricité : ce qui disparaît derrière les finitions" lead="Ces ouvrages ne se voient plus une fois le chantier livré, et ce sont pourtant eux qui décident de sa durabilité. Ils sont photographiés systématiquement avant fermeture : c'est la seule trace exploitable si un doute survient plus tard." wide>
        <div className="columns-2 lg:columns-3 gap-3 sm:gap-5 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
          {PHOTOS_TECHNIQUES.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} ratio={p.ratio} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Déroulé d'un chantier" title="De l'état initial à la livraison, étape par étape" lead="Étapes types d'un chantier de rénovation, illustrées en priorité par nos propres photographies de chantiers réels ; quelques schémas et visuels de référence complètent les phases les moins photogéniques (réseaux encastrés, carottage), signalés comme tels en légende." wide>
        <div className="columns-2 lg:columns-3 gap-3 sm:gap-5 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
          {DEROULE.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} ratio={p.ratio} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Avant / après" title="Ce que révèle la comparaison entre l'état initial et la livraison" lead="Les trois premières comparaisons portent sur un ouvrage réel photographié avant puis après travaux — même pièce, même façade, même local. Les suivantes sont des illustrations d'un chantier type, et la note sous chaque comparateur le précise." wide>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {COMPARAISONS.map((c) => (
            <div key={c.titre}>
              <h3 className="display t-base text-ivoire text-balance">{c.titre}</h3>
              <p className="text-muted t-petit mt-1 mb-3 leading-relaxed">{c.texte}</p>
              <AvantApres standalone={false} titre={c.titre} avant={c.avant} apres={c.apres} avantLabel={c.avantLabel} apresLabel={c.apresLabel} />
              <p className="mt-2 text-center mq-mention">{c.note}</p>
            </div>
          ))}
        </div>
      </MqSection>

      {/*
        03/09 : ces deux études de cas existaient depuis la mise en ligne mais AUCUNE page du
        site ne pointait vers elles — donc invisibles pour un visiteur comme pour un moteur.
        Détecté par le contrôle des pages orphelines. Elles sont désormais rattachées ici,
        d'où elles relèvent.
      */}
      <MqSection kicker="Cas détaillés" title="Deux chantiers suivis de bout en bout" lead="Ces deux dossiers sont racontés en entier : la contrainte de départ, les arbitrages, le déroulé et ce que le cas ne permet pas de généraliser.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/realisations/pavillon-annees-30-hauts-de-seine"
            className="border border-line bg-surface rounded-none p-6 flex flex-col gap-2 hover:border-orange-deep/40 transition-colors"
          >
            <span className="mq-mention">Hauts-de-Seine</span>
            <span className="display t-haut text-ivoire">Pavillon des années 30, rénovation complète</span>
            <span className="text-muted t-petit leading-relaxed">
              118 m², douze lots pilotés en dix-neuf semaines, avec un calendrier imposé par une date de fin de bail.
            </span>
          </Link>
          <Link
            href="/realisations/extension-yvelines"
            className="border border-line bg-surface rounded-none p-6 flex flex-col gap-2 hover:border-orange-deep/40 transition-colors"
          >
            <span className="mq-mention">Yvelines</span>
            <span className="display t-haut text-ivoire">Extension de plain-pied, 28 m² gagnés</span>
            <span className="text-muted t-petit leading-relaxed">
              Emprise au sol contrainte par le PLU, jardin en pente, vide sanitaire ventilé et raccordement de niveau avec le séjour existant.
            </span>
          </Link>
        </div>
      </MqSection>

      <MqSection kicker="Transparence méthodologique" title="Comment ces cas sont sélectionnés et anonymisés" lead="La sélection privilégie la représentativité d'un problème rencontré, pas la mise en scène d'un résultat exceptionnel.">
        <MqChecklist cols={1} items={[
          "Le nom, l'adresse précise et les caractéristiques identifiantes du client sont retirés.",
          "Le cas est choisi parce qu'il illustre une décision technique ou budgétaire reproductible.",
          "Les montants indiqués, lorsqu'ils existent, alimentent l'observatoire des prix sous forme agrégée.",
          "Une mention explicite précise systématiquement ce que le cas ne permet pas de conclure pour un autre projet.",
          "Aucun témoignage nominatif ni chiffre non vérifiable n'est associé à un cas présenté ici.",
        ]} />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les visiteurs demandent sur ces cas">
        <MqFaq items={[
          { q: "Pourquoi les réalisations présentées sont-elles anonymisées ?", a: "Par respect de la vie privée des clients et par prudence méthodologique : un cas anonymisé reste un exemple représentatif d'une catégorie de projets, pas une preuve individuelle transposable telle quelle à un autre logement." },
          { q: "Ces réalisations sont-elles réalisées par ARCHI PILOTE RÉNOVATION en tant qu'entreprise de travaux ?", a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote ces projets. Les travaux ont été exécutés et facturés par des entreprises partenaires contractantes, et les sujets de structure ont mobilisé un ingénieur ou un architecte partenaire indépendant lorsque le dossier l'exigeait." },
          { q: "Puis-je consulter les factures ou devis réels associés à ces cas ?", a: "Les documents individuels ne sont pas publiés pour préserver la confidentialité des clients. Les fourchettes de prix issues de ces projets alimentent en revanche l'observatoire des prix, présentées de façon agrégée et anonyme." },
          { q: "Ces exemples garantissent-ils un résultat identique sur mon projet ?", a: "Non. Chaque cas est présenté avec son contexte, ses contraintes et ses limites explicites. Un résultat obtenu sur un logement donné ne se transpose pas automatiquement à un autre bien, dont l'état, la structure et les contraintes diffèrent nécessairement." },
          { q: "Comment un nouveau projet est-il ajouté à cette page ?", a: "Un projet est ajouté lorsqu'il illustre un problème résolu de façon représentative, avec l'accord du client sur l'anonymisation retenue. Le quota de cas publiés reste volontairement limité pour privilégier la qualité de la démonstration." },
        ]} />
        <p className="t-mini text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Discutons du problème que votre projet doit résoudre" lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux et budget réaliste." />

      <MqReadNext items={[
        { href: "/temoignages-clients", label: "Témoignages clients", sub: "Retours anonymisés et méthode de recueil" },
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste de travaux" },
        { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
      ]} />
    </main>
  );
}
