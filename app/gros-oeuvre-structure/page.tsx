import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Gros œuvre & structure en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Avant de parler cloisons, cuisine ou peinture, tout projet de rénovation doit répondre à une question simple : quels murs portent le bâtiment…",
  alternates: { canonical: "/gros-oeuvre-structure" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Gros œuvre & structure"
        title="Gros œuvre en rénovation : la structure d'abord"
        lead="Avant de parler cloisons, cuisine ou peinture, tout projet de rénovation doit répondre à une question simple : quels murs portent le bâtiment, et que devient la descente de charges si on les modifie ? Le gros œuvre traite l'ouverture de murs porteurs, la création de trémies, les reprises de plancher et les désordres du bâti existant. ARCHI PILOTE RÉNOVATION structure ce diagnostic en amont et pilote l'intervention des entreprises partenaires contractantes et, pour les dossiers lourds, d'un ingénieur structure ou d'un architecte DPLG partenaire indépendant."
      />

      <div className="rf-wrap mq-mesure--large pb-12 md:pb-16 mq-planche-ouverture">
        <MqFig
          src="/photos/maquette/schema-mur-porteur.jpg"
          alt="Coupe technique d'une ouverture de mur porteur montrant la poutre de reprise, les poteaux d'appui aux extrémités, l'étaiement provisoire pendant les travaux et le principe de descente de charges vers les fondations."
          caption="Principe d'une ouverture de mur porteur : poutre de reprise, poteaux d'appui, étaiement provisoire et descente de charges vers les fondations."
          ratio="aspect-[10/7]"
        />
      </div>

      <MqSection
        title="Identifier un mur porteur avant tout devis"
        lead="Une erreur d'appréciation sur la nature d'un mur peut compromettre la stabilité du bâtiment ou faire annuler un devis déjà engagé."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-fort text-ivoire">Les indices à recouper, jamais un seul critère isolé</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Épaisseur, alignement vertical entre étages, sens des solives et matériau donnent une présomption, jamais une certitude absolue.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un mur épais n'est pas automatiquement porteur, et un mur fin en briques ou en carreaux de plâtre n'est pas automatiquement sans rôle structurel. La présomption se construit en recoupant plusieurs indices : l'épaisseur du mur, son alignement avec un mur de l'étage du dessous ou du dessus, le sens de pose des solives ou des poutrelles du plancher, et la position du mur par rapport aux façades et aux refends principaux du bâtiment.
                </p>
                <p>
                  Ces indices orientent le diagnostic mais ne remplacent jamais une vérification directe lorsque l'enjeu est réel. La rigueur d'ancien expert en chiffrage appliquée à ce diagnostic consiste précisément à ne jamais valider un devis d'ouverture avant d'avoir confirmé la nature exacte du mur concerné.
                </p>
              </MqProse>
            </div>
            {/*
              06/09/2026 — infographie de la marque posée ici. Cette sous-section portait tout
              le raisonnement « épaisseur ≠ portance » sans aucune image, alors que le fichier
              existait déjà sur le disque sans être déclaré. Ouvert et vérifié : elle oppose un
              mur de maçonnerie de 20 à 60 cm à une cloison sur ossature de 5 à 10 cm, trace la
              descente de charges du plancher haut aux fondations, et porte en pied la mention
              « l'épaisseur et le son au tapotement sont des indices, pas des preuves » — soit
              exactement le paragraphe ci-dessus.

              C'est une ILLUSTRATION générée au logo ARCHI PILOTE RÉNOVATION, pas une
              photographie : `entier` (object-contain) pour ne pas décapiter son titre ni sa
              signature de pied, et légende terminée par « Schéma pédagogique. » — jamais par
              « Chantier réel des équipes partenaires. ».
            */}
            <div className="mt-8">
              <MqFig
                src="/photos/pedagogie/schema-nature-des-murs.jpg"
                alt="Infographie ARCHI PILOTE RÉNOVATION : coupe d'un immeuble ancien opposant un mur de maçonnerie potentiellement porteur de 20 à 60 cm et une cloison légère sur ossature de 5 à 10 cm, avec la descente de charges du plancher haut jusqu'aux fondations et cinq points de vérification"
                caption="Vérifier la nature des murs avant tout devis : un mur épais n'est pas toujours porteur, un mur fin peut avoir un rôle structurel. La descente de charges va du plancher haut au mur, à la poutre ou solive, puis aux fondations. L'épaisseur et le son au tapotement restent des indices, pas des preuves. Schéma pédagogique."
                ratio="aspect-[3/2]"
                entier
              />
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Sondages et plans manquants : comment lever le doute</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              En l'absence de plans d'origine fiables, un sondage ponctuel dans une cloison ou un doublage permet d'observer la structure réelle.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  En habitat ancien, les plans d'origine sont souvent introuvables, incomplets ou ne correspondent plus à l'état réel du bien après des décennies de travaux successifs. Un sondage ponctuel, réalisé à un endroit choisi avec soin, permet d'observer directement la maçonnerie, son épaisseur et son appareillage, sans engager une ouverture complète.
                </p>
                <p>
                  Lorsque le doute persiste malgré le sondage, notamment pour les ouvrages engageant la stabilité de plusieurs niveaux, l'avis d'un ingénieur structure partenaire indépendant est sollicité avant toute validation de devis. Cette étape, souvent perçue comme une dépense évitable, protège en réalité le budget global du chantier.
                </p>
                <p>
                  Un dossier réel, anonymisé, montre l'enchaînement complet une fois le mur confirmé
                  porteur : plans, étaiement, portique acier et finitions, sur la page{" "}
                  <Link href="/ouverture-mur-porteur" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">ouverture de mur porteur</Link>.
                </p>
              </MqProse>
            </div>
            {/*
              07/09 — chVerriereInterieurePentagonale avait été posée ici (ouverture de jour
              percée dans un mur intérieur, refermée par un châssis vitré, corniche conservée),
              puis retirée : `scripts/surexposition.py` la regroupe avec
              chFenetreBoisDecorativeChantier, et cette scène est déjà comptée sur trois pages
              (/realisations, /second-oeuvre et un article de blog). L'ajouter ici l'aurait
              portée à quatre, c'est-à-dire à la répétition que le client signale.
              Cette sous-section reste donc sans photographie : le fonds ne contient aucune
              image de sondage ou de repérage de mur qui ne soit pas déjà publiée trois fois.
            */}
          </div>
        </div>
      </MqSection>

      <MqSection title="Ouverture de mur porteur, trémie et reprise de charges">
        {/*
          03/09 : chantier-etat-initial.jpg retirée de cette section. La photo (stock) montre une
          pièce ancienne vide avant travaux — ni ouverture, ni trémie, ni reprise de charges : elle
          n'illustrait donc pas l'intitulé sous lequel elle était placée. À sa place, trois photos
          réelles de structure acier, qui correspondent une à une aux trois développements de la
          section : la poutre sur ses appuis, l'assemblage soudé poutre-poteau, puis le pied de
          poteau sur platine. Les trois fichiers sont nativement en 900×1600 : ils partagent donc
          le même cadrage 9/16 sans qu'aucun ne soit amputé, là où ils étaient auparavant affichés
          en 4/3 paysage (chPoutreAcierMurDegarni perdait près de la moitié de sa hauteur).

          03/09 (bis) — retour client « les trois photos acier se ressemblent ». Vérifié en ouvrant
          les 12 fichiers ch*Acier* de la photothèque : par empreinte MD5 ils ne comptent que
          6 images réellement distinctes (chPoutreAcierMurDegarni = chPoutreAcierMurPierreApparente,
          chPoutreAcierSoudure = chPoutreAcierSoudureAngle2, chPoteauAcierPlatinePied =
          chPoteauAcierScelleGravats, chPortiqueAcierAngleFenetre = chPoutreAcierPlafondMurDegarni,
          chPortiqueAcierAngleGaine = chPortiqueAcierAngleMurDegarni2), et à l'œil ces 6 images se
          ramènent à un seul et même portique photographié de près, plus le pied de poteau.
          chPoutreAcierMurDegarni (ex-« La poutre ») et chPoutreAcierSoudure (« L'assemblage »)
          étaient effectivement deux cadrages voisins du même profilé sombre : même barre verticale
          occupant toute la hauteur, même soudure en tête. Le premier est remplacé par
          chPortiqueAcierAngleFenetre, qui est la vue LARGE du même mur (on y retrouve le même
          papier peint à motifs et la même gaine grise que sur le gros plan supprimé) : on y lit la
          poutre filant sous le plafond, le poteau à l'about et l'ouverture qu'ils encadrent. La
          grille enchaîne donc désormais trois échelles différentes — ensemble clair / détail de
          soudure / pied de poteau au sol — et non trois gros plans sombres.

          Légende de la photo d'étaiement corrigée le même jour : elle affirmait « conformément à la
          note de calcul de l'ingénieur structure », qui n'est pas quelque chose qu'une photo peut
          montrer, et « avant percement » alors que l'ouverture est déjà faite et la poutre déjà
          posée en tête sur l'image.
        */}
        <div className="mb-5">
          <MqFig
            src="/photos/maquette/chantier-ouverture-mur-etaiement.jpg"
            alt="Ouverture pratiquée dans un mur en briques, trois étais métalliques réglables en appui sous la poutre posée en tête d'ouverture"
            caption="Ouverture pratiquée dans un mur en briques : trois étais réglables soutiennent la poutre posée en tête d'ouverture, gravats encore au sol. Image d'illustration."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          07/09 — rangée laissée à TROIS vignettes, après avoir ouvert une à une les six photos
          d'acier encore disponibles dans la bibliothèque. Résultat de la vérification :
          chPoutreAcierSoudureAngle2 est le fichier EXACTEMENT identique à chPoutreAcierSoudure
          ci-dessous ; chPoteauAcierScelleGravats est identique à chPoteauAcierPlatinePied ;
          chPoutreAcierPlafondMurDegarni est identique à chPortiqueAcierAngleFenetre ;
          chPoutreAcierMurPierreApparente est le même portique au même mur, cadré de plus près
          (et ne montre aucune pierre apparente, contrairement à son nom).
          Restait chPortiqueAcierAngleGaine / chPortiqueAcierAngleMurDegarni2 (deux fichiers
          pour une seule prise de vue) : intéressante — la gaine descend le long du poteau —
          mais `scripts/surexposition.py` la compte déjà sur trois pages
          (/electricite-plomberie-renovation, /ouverture-mur-porteur et un article de blog).
          L'ajouter ici l'aurait portée à quatre. Elle est donc laissée où elle est.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg"
            alt="Portique acier vu en angle : poutre horizontale filant sous le plafond et poteau vertical à l'about de l'ouverture, mur voisin dégarni et gaine électrique apparente"
            caption="Le portique : poutre acier filant sous le plafond et poteau vertical à l'about, encadrant l'ouverture vers la pièce voisine ; mur dégarni jusqu'au support, gaine électrique encore apparente. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chPoutreAcierSoudure.jpeg"
            alt="Gros plan sur la jonction soudée entre une poutre et un poteau acier, cordons de soudure visibles, plafond ouvert au-dessus"
            caption="L'assemblage : gros plan sur la jonction soudée entre la poutre et le poteau, cordons de soudure apparents, plafond ouvert au-dessus. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chPoteauAcierPlatinePied.jpeg"
            alt="Pied de poteau acier soudé sur sa platine rectangulaire, posé au fond d'un plancher ouvert et entouré de gravats"
            caption="L'appui : pied de poteau soudé sur sa platine, posé au fond du plancher ouvert, gravats encore en place tout autour. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
        </div>
        <div className="mt-12 flex flex-col gap-10">
          <div>
            <h3 className="display t-fort text-ivoire">Poutre métallique ou poutre bois : un choix technique, pas esthétique</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Le choix du matériau de la poutre dépend de la portée à franchir, de la charge à reprendre et de la hauteur disponible sous plafond.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une poutre métallique en profilé acier offre une résistance élevée pour un encombrement réduit, ce qui la rend adaptée aux portées importantes ou aux charges lourdes, notamment sur les niveaux inférieurs d'un immeuble. Une poutre bois, lamellé-collé ou massive, convient à des portées plus modestes et s'intègre parfois plus facilement dans un habillage apparent.
                </p>
                <p>
                  Dans les deux cas, le dimensionnement résulte d'un calcul de descente de charges, jamais d'une estimation visuelle. Ce calcul détermine aussi la nature des appuis nécessaires à chaque extrémité de la poutre.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Poteaux, appuis et semelles : où va la charge reprise</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Une poutre ne vaut que par ses appuis : la charge reprise doit être transmise jusqu'aux fondations sans point faible intermédiaire.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une fois la poutre posée, la charge qu'elle reprend doit être conduite jusqu'au sol par des poteaux ou des murs d'appui suffisamment dimensionnés, eux-mêmes reposant sur une semelle capable de répartir cette charge sur le sol ou sur un plancher inférieur. Un appui mal positionné, par exemple au milieu d'une portée de plancher non renforcée, peut créer un désordre à l'étage inférieur.
                </p>
                <p>
                  C'est pourquoi la descente de charges est vérifiée sur l'ensemble du cheminement, du point d'ouverture jusqu'aux fondations, et non uniquement au droit de l'ouverture elle-même.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Reprise en sous-œuvre : intervenir sous un ouvrage existant</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              La reprise en sous-œuvre consiste à renforcer une fondation ou un appui existant sans interrompre la stabilité du bâtiment pendant les travaux.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Cette technique s'impose lorsqu'une fondation existante doit être approfondie, élargie ou renforcée, par exemple pour créer un niveau supplémentaire ou reprendre un appui fragilisé. Elle se réalise par plots successifs, jamais sur toute la longueur en une seule fois, afin de ne jamais priver le bâtiment de son appui au sol au même instant.
                </p>
                <p>
                  Ce type d'intervention relève systématiquement d'une étude technique préalable et d'un phasage écrit précis, en raison du risque direct pour la stabilité du bâtiment en cas d'erreur de séquence.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Étaiement provisoire : protéger la structure pendant le chantier"
        lead="L'étaiement reprend temporairement les charges pendant que l'ancien appui est déposé et que le nouvel ouvrage n'est pas encore solidarisé."
      >
        <MqProse>
          <p>
            Entre le moment où un ancien linteau ou un ancien mur porteur est déposé et celui où la poutre définitive est posée, calée puis solidarisée aux appuis, le bâtiment traverse une phase de fragilité maîtrisée. Un système d'étaiement provisoire, dimensionné selon la charge réelle à reprendre, assure la continuité de la stabilité pendant toute cette période.
          </p>
          <p>
            Cet étaiement n'est jamais retiré tant que l'ouvrage définitif n'a pas atteint sa résistance et n'a pas été vérifié. Sa durée, généralement de quelques jours à quelques semaines selon l'ampleur de l'ouvrage, fait partie intégrante du planning transmis avant le démarrage du chantier.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Planchers bois, poutrelles-hourdis et mise à niveau"
        lead="Un plancher ancien en bois et un plancher en poutrelles-hourdis se traitent différemment selon la déformation constatée et l'usage futur de la pièce."
      >
        <MqProse>
          <p>
            Un plancher bois ancien, souvent constitué de solives et d'un platelage, peut présenter un fléchissement naturel dû à l'âge, à une surcharge historique ou à une section de bois initialement sous-dimensionnée. Selon l'ampleur du fléchissement, un renfort ponctuel, un doublement de solives ou une reprise plus complète est envisagé.
          </p>
          <p>
            Un plancher en poutrelles-hourdis, plus fréquent dans les constructions de la seconde moitié du vingtième siècle, présente une meilleure régularité mais peut nécessiter une trémie pour le passage d'un escalier ou d'une gaine technique, ce qui implique alors une reprise de continuité structurelle autour de l'ouverture créée.
          </p>
          <p>
            La mise à niveau d'un plancher, lorsqu'un ressaut existe entre deux pièces, se traite par ragréage ou par une chape rapportée, mais seulement après avoir vérifié que la surépaisseur ajoutée reste compatible avec la charge admissible du plancher existant.
          </p>
        </MqProse>
        {/*
          Séquence resserrée à un avant/pendant/après unique (29/08 : la page comportait 7 photos
          de plancher, dont deux paires de doublons exacts — chSousCouchePanneauxOSB.jpeg /
          chSousCouchePanneauxOSB2.jpeg et chIsolationPhoniqueGranulesPlancher.jpeg /
          chIsolationPhoniqueGranulesPlancher2.jpeg sont pixel pour pixel la même photo, alors que
          les légendes affirmaient à tort "autre chantier" / "autre angle". chPlancherSolivesBoisRangees.jpeg
          a aussi été retiré : malgré son nom de fichier, l'image montre le même corps creux béton
          que chPlancherSolivesBeton2.jpeg, pas des solives bois — la légende "solives bois rangées"
          ne correspondait pas au contenu réel de la photo. chDemolitionBoiseriesHaussmannien.jpeg
          retiré car hors-sujet plancher (boiseries murales).

          01/09 : correctif sur le pairage de doublons décrit ci-dessus (29/08), qui était inexact.
          Empreinte MD5 vérifiée sur toute la photothèque + confirmation visuelle œil nu :
          chIsolationPhoniqueGranulesPlancher.jpeg (utilisée juste en dessous, légende "Pendant")
          est en réalité identique au bit près à chDemolitionBoiseriesHaussmannien.jpeg — pas à
          chIsolationPhoniqueGranulesPlancher2.jpeg comme indiqué le 29/08. Et chPlancherSolivesBeton2.jpeg
          (utilisée juste en dessous, légende "Avant") est identique à chIsolationPhoniqueGranulesPlancher2.jpeg.
          chSousCouchePanneauxOSB.jpeg et chSousCouchePanneauxOSB2.jpeg restent bien identiques entre elles.
          Dans les 3 cas, l'autre moitié de la paire avait déjà été retirée de cette page le 29/08 :
          aucun doublon visuel n'est donc actuellement affiché ici pour ces 3 paires, et les légendes des
          deux photos utilisées ci-dessous correspondent bien à ce qu'elles montrent réellement (granulés
          blancs en vrac sur plancher / corps creux béton entre solives dans un couloir). Vérification
          élargie : les 22 images utilisées sur cette page entière (chantiers + schémas + pédagogie) ont
          chacune un MD5 distinct — aucun autre doublon détecté sur cette page.
        */}
        {/*
          03/09 : le troisième volet de cette séquence était chParquetVitrifie.jpeg, légendée
          « Après : parquet ancien poncé et vitrifié, plancher livré prêt à l'usage ». Deux
          problèmes vérifiés en ouvrant les fichiers. (1) La photo montre un séjour d'un AUTRE
          immeuble (parquet à lames droites, cheminée en marbre foncé), sans rapport avec les
          deux premières : la séquence « Avant / Pendant / Après » laissait croire à un même
          plancher suivi de bout en bout. (2) Un parquet vitrifié est une finition, pas un
          ouvrage de gros œuvre. Remplacée par chSousCouchePanneauxOSB.jpeg, qui montre la
          MÊME pièce que le volet « Pendant » (mêmes boiseries à panneaux ocre, mêmes volets
          intérieurs, même câble blanc au plafond) une fois le plancher refermé en panneaux
          OSB : la séquence devient une vraie reprise de plancher suivie jusqu'à sa fermeture.
        */}
        {/*
          03/09 (bis) : ratio du volet « Isolation » corrigé. chIsolationPhoniqueGranulesPlancher.jpeg
          est nativement en 1600×1200, c'est-à-dire un PAYSAGE, alors qu'il était affiché en 3/4
          portrait comme ses deux voisines : le recadrage supprimait environ 44 % de sa largeur,
          donc les boiseries de gauche et la fenêtre de droite — précisément les repères qui
          permettent de vérifier que le volet « Fermeture » montre bien la même pièce. Chaque photo
          reprend donc son ratio natif (3/4, 4/3, 3/4) et la grille passe en items-start, comme le
          diptyque escalier plus bas sur cette page.
        */}
        {/*
          07/09 — chPlancherSolivesBoisRangees ajoutée EN TÊTE de cette séquence, qui assume
          depuis le début de montrer le MÊME couloir à trois moments (décaissement, isolation,
          fermeture). Image ouverte et comparée à chPlancherSolivesBeton2 avant d'écrire la
          légende : même couloir, même porte ancienne à imposte grillagée au fond, même
          canalisation peinte à droite — mais les lambourdes ne sont pas encore reposées et
          tout est sous une couche de poussière uniforme. C'est donc un quatrième moment RÉEL,
          antérieur au premier, et la légende le dit au lieu de le faire passer pour un autre
          chantier. Grille passée à quatre colonnes ; native en 1200×1600, donc 3/4.
        */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chPlancherSolivesBeton2.jpeg"
            alt="Plancher ancien ouvert dans un couloir d'immeuble : caissons de remplissage dégagés entre les solives, lambourdes neuves posées par-dessus sur toute la longueur"
            caption="Décaissement : le plancher est ouvert sur toute la longueur du couloir, les caissons de remplissage sont dégagés entre les solives et des lambourdes neuves sont reposées par-dessus. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chIsolationPhoniqueGranulesPlancher.jpeg"
            alt="Granulés isolants versés entre les lambourdes d'un plancher ancien, boiseries d'origine et fenêtres encore en place"
            caption="Isolation : granulés versés entre lambourdes pour le traitement phonique, avant fermeture du plancher. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chSousCouchePanneauxOSB.jpeg"
            alt="Panneaux OSB posés sur le plancher de la même pièce, refermant les lambourdes et les granulés"
            caption="Fermeture : la même pièce une fois le plancher refermé en panneaux OSB, support prêt à recevoir son revêtement. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Étude géotechnique et diagnostic des fondations"
        lead="Avant de reprendre une fondation ou d'ajouter une charge, la nature du sol et l'état des fondations existantes doivent être vérifiés."
      >
        <MqFig
          src="/photos/maquette/geo2mo-etude-geotechnique.jpg"
          alt="Schéma d'une étude géotechnique avec forage de reconnaissance des sols, prélèvement d'échantillon et fondations d'un bâti ancien"
          caption="Étude géotechnique : forage de reconnaissance, couches de sol identifiées et fondations existantes analysées avant toute reprise structurelle."
          ratio="aspect-square"
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display t-fort text-ivoire">Quand une étude de sol est indispensable</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Extension, surélévation, reprise en sous-œuvre ou bâti ancien sur sols incertains : le dimensionnement repose sur des données réelles.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  La reprise en sous-œuvre, l'{""}
                  <Link href="/extension-maison" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">extension d'une maison</Link>{" "}
                  ou la{" "}
                  <Link href="/surelevation" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">surélévation d'un étage</Link>{" "}
                  modifient la charge transmise aux fondations. Sans une étude géotechnique, on dimensionne à l'aveugle et on expose le chantier à des tassements différentiels ou à des désordres futurs. ARCHI PILOTE RÉNOVATION fait appel au bureau d'études Geo2Mo pour reconnaître les sols, analyser les fondations existantes et fournir les paramètres de calcul utilisés par l'ingénieur structure.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Un partenaire réactif et rigoureux</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Geo2Mo se distingue par la qualité de ses dossiers, sa réactivité et sa capacité à mobiliser rapidement les bons intervenants.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Les études de sols sont préparées avec le même soin que les dossiers de structure : forages, sondages, interprétation des couches et recommandations de fondation. Les échanges réguliers entre Geo2Mo, l'ingénieur structure et notre équipe permettent de valider chaque hypothèse avant de l'intégrer au chiffrage et au phasage.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Fissures, désordres et humidité : distinguer le superficiel du structurel"
        lead="Toutes les fissures ne se valent pas : leur forme, leur localisation et leur évolution dans le temps orientent le diagnostic."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-fort text-ivoire">Lecture d'une fissure avant tout ravalement esthétique</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Une fissure fine et stable diffère radicalement d'une fissure ouverte, évolutive ou traversante en termes de gravité.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une fissure capillaire, fine et superficielle, relève généralement d'un simple traitement de finition. Une fissure plus large, en escalier sur un mur en maçonnerie, ou traversant l'épaisseur du mur, peut en revanche signaler un mouvement du bâtiment, un tassement différentiel ou un désordre en cours d'évolution.
                </p>
                <p>
                  Dans ce second cas, l'avis d'un professionnel spécialisé est sollicité avant toute reprise esthétique, car masquer une fissure active sans en traiter la cause ne fait que reporter et aggraver le désordre.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Remontées capillaires et humidité en pied de mur</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Une humidité en pied de mur oriente vers une origine capillaire, une infiltration ou une condensation, chacune appelant un traitement différent.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une remontée capillaire se manifeste typiquement par une auréole en pied de mur, un enduit qui se décolle et parfois un salpêtre visible en surface. Elle se distingue d'une infiltration ponctuelle, liée à une étanchéité défaillante en toiture ou en façade, et d'une condensation, liée à un défaut de ventilation.
                </p>
                <p>
                  Ce diagnostic conditionne directement le traitement engagé : une reprise structurelle inutile ne résoudra jamais un problème de ventilation, et inversement, une simple peinture anti-humidité ne traite jamais une remontée capillaire active.
                </p>
              </MqProse>
            </div>
          </div>
          {/*
            07/09 — le schéma d'humidité était seul à illustrer cette section : un dessin, et
            aucun désordre réel. Deux photographies l'accompagnent désormais, ouvertes et
            vérifiées avant rédaction des légendes.
            — chToitureTerrasseDeposeeSolivage montre exactement ce dont parle le paragraphe
              « infiltration liée à une étanchéité défaillante en toiture » : une
              toiture-terrasse déposée jusqu'à son solivage, isolant ancien tassé et noirci
              entre les bois. Native en 2048×1536, donc 4/3.
            — chFacadeAvantRavalementTyrolien illustre le paragraphe « lecture d'une fissure
              avant tout ravalement esthétique » : l'enduit tyrolien est constellé de
              rebouchages clairs, notamment autour de chaque menuiserie neuve. Elle sert déjà
              d'image « avant » dans la paire avant/après de /realisations ; la légende ci-dessous
              décrit la même chose sans la contredire. Native en 1600×1200, donc 4/3.
            Aucun visage, aucune plaque, aucune enseigne lisible dans les deux cadres.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            <MqFig
              src="/photos/maquette/schema-humidite-origines.jpg"
              alt="Coupe d'un logement ancien illustrant remontées capillaires, infiltrations, condensation et ponts thermiques"
              caption="Origines de l'humidité dans un logement ancien et traitements associés : le diagnostic précède toujours le choix de la solution."
              ratio="aspect-[10/7]"
            />
            <MqFig
              src="/photos/chantiers/chToitureTerrasseDeposeeSolivage.jpeg"
              alt="Toiture-terrasse déposée jusqu'à son solivage entre deux murs de cour : solives apparentes, isolant ancien tassé et noirci entre les bois, mur mitoyen en brique peint en blanc, vigne vierge et volets persiennés sur le mur de gauche, garde-corps d'échafaudage au premier plan"
              caption="Un désordre d'étanchéité ne se lit qu'une fois le complexe déposé : ici, la toiture-terrasse est retirée jusqu'à son solivage, l'isolant ancien apparaît tassé et noirci entre les bois, et l'état réel des solives peut enfin être constaté avant de décider ce qui se répare et ce qui se remplace. Chantier réel des équipes partenaires."
              ratio="aspect-[4/3]"
            />
            <MqFig
              src="/photos/chantiers/chFacadeAvantRavalementTyrolien.jpeg"
              alt="Façade de maison de village avant ravalement : ancien enduit ciment tyrolien gris constellé de rebouchages clairs, notamment autour de chaque menuiserie, fenêtres et porte en bois neuves calées à la mousse dans leurs tableaux, palettes de matériaux et seaux au pied du mur"
              caption="Avant ravalement, la façade dit tout : l'ancien enduit tyrolien est constellé de rebouchages clairs, en particulier autour de chaque menuiserie neuve reposée. C'est à cet état — et non après l'enduit de finition — que se lisent les reprises de tableaux et l'éventuelle fissuration du support. Chantier réel des équipes partenaires."
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Démolition, carottage et sciage : les gestes techniques du gros œuvre"
        lead="Le carottage et le sciage de béton permettent des découpes précises et contrôlées, indispensables dès qu'un ouvrage béton armé est concerné."
      >
        {/*
          03/09 : cette grille mélangeait un schéma paysage (1280×896) et trois photos portrait
          (1200×1600) dans un même cadre 4/3, qui amputait chacune des trois photos d'environ
          44 % de sa hauteur. Le schéma de carottage passe en pleine largeur à son ratio natif,
          les trois photos de démolition forment une grille homogène en 3/4, leur ratio réel.
        */}
        <div className="mb-5">
          <MqFig
            src="/photos/maquette/schema-carottage-ventilation.jpg"
            alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
            caption="Carottage de façade pour ventilation : diamètre, gaine et bouche d'extraction, avec accord préalable du syndic lorsque la façade est concernée."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          03/09 (bis) — retour client « c'est trois fois presque la même chose ». Il avait raison :
          les trois photos affichées ici (chDemolitionCloisonBoisPlatre, chDemolitionLattisPlatreChantier1,
          chDemolitionLattisPlatreChantier2) sont le MÊME mur en pan de bois du MÊME appartement,
          pris à trois distances — même lattis, même poussière beige, même huisserie. Les 9 fichiers
          chDemolition* de la photothèque ont été ouverts un par un : ils se réduisent à trois prises
          de vue de cette unique cloison (chDemolitionGravatsChantier et chDemolitionLattisPlatreOuverture
          sont des recadrages de chDemolitionCloisonBoisPlatre ; chDemolitionOuvertureCouloir est
          chDemolitionLattisPlatreChantier1 ; chDemolitionMursDecapes et chDemolitionDegagementVersSejour
          sont chDemolitionLattisPlatreChantier2), plus chDemolitionBoiseriesHaussmannien qui est
          hors sujet ET identique au bit près à chIsolationPhoniqueGranulesPlancher, déjà utilisée
          plus haut sur cette page.
          Aucune autre photo du dossier ne documente honnêtement un carottage, un sciage de béton ou
          un tri de gravats. La grille passe donc de 3 à 1 : mieux vaut une image juste que trois
          quasi-identiques. La photo conservée est la plus explicite des trois (ossature entièrement
          dégagée + tas de gravats + perforateur au sol). Elle est native en 1200×1600, donc affichée
          en 3/4 et bornée en largeur : à pleine largeur de colonne, un portrait ferait près de
          1 200 px de haut.
          À GÉNÉRER si un second visuel est souhaité pour cette section : un carottage de mur béton
          en cours (couronne diamantée, collerette d'eau) et/ou des gravats triés en sacs prêts à
          l'évacuation — deux gestes cités dans le texte mais non documentés par la photothèque.
        */}
        <div className="max-w-md">
          {/* 05/09 : chDemolitionCloisonBoisPlatre retirée d'ici. Mesure faite avec
              scripts/surexposition.py : cette prise de vue (le mur éventré avec le tas de
              gravats et le perforateur au sol) était affichée sur CINQ pages — ici,
              /demarches-administratives-renovation, /ouverture-mur-porteur,
              /renovation-appartement et l'article « signes-mur-porteur-avant-travaux » —
              sous trois noms de fichiers différents qui masquaient la répétition.
              Elle est conservée là où elle est la plus justifiée : l'article sur le mur
              porteur (le lattis à nu EST le sujet) et /ouverture-mur-porteur (où elle
              ouvre une séquence démolition → portique acier du même chantier).
              La remplaçante montre la même cloison à une étape plus tardive : plâtre
              décroché, sol balayé, embrasure dégagée — donc un autre moment, pas un
              autre cadrage du même instant. */}
          <MqFig
            src="/photos/chantiers/chDemolitionOuvertureCouloir.jpeg"
            alt="Cloison en pan de bois dégarnie de son plâtre, poteaux et lattes clouées apparents sur toute la hauteur, embrasure dégagée vers la pièce voisine"
            caption="Cloison ancienne dégarnie de son plâtre : poteaux et lattes clouées apparents sur toute la hauteur, embrasure dégagée vers la pièce voisine, sol balayé après évacuation des gravats. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {[
            { title: "Démolition et évacuation", text: "Dépose sélective des éléments non porteurs, tri des matériaux et évacuation organisée, en particulier en immeuble occupé." },
            { title: "Carottage de précision", text: "Perçage circulaire propre pour le passage de réseaux ou de gaines à travers un plancher ou un mur béton, sans fissuration périphérique." },
            { title: "Sciage de béton armé", text: "Découpe nette d'une ouverture dans un mur ou un plancher béton, préalable indispensable avant la pose d'un linteau ou d'une poutre." },
            { title: "Protection du bâti conservé", text: "Bâchage, calage et protection des ouvrages voisins non concernés par l'intervention en cours." },
          ].map((g) => (
            <div key={g.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display t-base text-ivoire">{g.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Copropriété, immeuble occupé et autorisations"
        lead="Un chantier de gros œuvre en immeuble collectif ou occupé impose des contraintes d'horaires, de nuisances et d'autorisation qui s'ajoutent aux contraintes techniques."
      >
        <MqProse>
          <p>
            En copropriété, le règlement encadre les interventions touchant des éléments communs, l'aspect extérieur du bâtiment ou la structure porteuse commune. Selon la nature exacte des travaux, une simple information au syndic peut suffire, ou au contraire une autorisation formelle votée en assemblée générale peut être nécessaire avant tout démarrage.
          </p>
          <p>
            En immeuble occupé, qu'il s'agisse des voisins d'un même bâtiment ou des occupants du logement en cours de travaux, les horaires de nuisances sonores respectent généralement un cadre fixé par arrêté municipal, et l'accès aux parties communes est organisé pour limiter la gêne pendant les phases les plus bruyantes, comme le carottage ou la démolition.
          </p>
        </MqProse>
        {/*
          03/09 : la troisième photo de ravalement (chFacadeRavalementEchafaudage1.jpeg) a été
          retirée. Elle faisait double emploi avec les deux autres — trois façades sous
          échafaudage disent la même chose une fois — et c'était la seule en portrait
          (1200×1600) dans une grille affichée en 4/3, donc la seule à être amputée. Les deux
          photos conservées sont nativement en 4/3 : la grille est homogène et sans recadrage.

          03/09 (bis) — retour client « ce sont les deux mêmes photos ». Les deux fichiers ont été
          ouverts et comparés : chFacadeRavalementEchafaudage2 et chFacadeRavalementVillage sont le
          MÊME bâtiment, le même jour (même toiture d'ardoise en mansarde, même souche de cheminée
          en brique à trois abouts, même échafaudage bâché, mêmes volets gris, même ciel gris uni) —
          l'un est un gros plan du haut de la façade, l'autre la vue large depuis la rue. La légende
          « Autre ravalement, sur un bâtiment ancien de centre-village » était donc fausse : ce n'est
          pas un autre chantier. La paire passe à une seule image, et c'est la vue large qui est
          gardée : elle montre l'immeuble entier, l'échafaudage du sol au toit et la rue — c'est-à-dire
          exactement ce dont parle la section (aspect extérieur, voie publique, copropriété), là où
          le gros plan ne montrait qu'un fragment de corniche. Elle est native en 1600×1200, donc
          affichée en 4/3 pleine largeur sans recadrage.
        */}
        <div className="mt-8">
          <MqFig
            src="/photos/chantiers/chFacadeRavalementVillage.jpeg"
            alt="Immeuble ancien de centre-bourg dont deux faces sont montées en échafaudage avec filet de protection pendant un ravalement, vu depuis la rue en contrebas"
            caption="Ravalement de façade : deux faces de l'immeuble sont montées en échafaudage avec filet de protection, depuis la rue. En copropriété, modifier l'aspect extérieur relève du règlement. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Vérification du règlement de copropriété avant tout devis engageant une partie commune",
              "Constitution du dossier technique nécessaire à une présentation en assemblée générale si requis",
              "Information écrite préalable des occupants voisins pour les phases bruyantes",
              "Protection systématique des circulations communes pendant l'évacuation des gravats",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Ingénieur structure, architecte DPLG et assurances des exécutants"
        lead="Le pilotage mobilise un ingénieur structure ou un architecte DPLG partenaire indépendant dès que le dossier l'exige, sans jamais se substituer à leur responsabilité propre."
      >
        <MqProse>
          <p>
            Pour les ouvertures importantes, les trémies sur plusieurs niveaux ou les reprises en sous-œuvre, une note de calcul et parfois un avis technique formalisé sont nécessaires. Ces documents sont produits par un ingénieur structure ou un architecte DPLG partenaire indépendant, professionnel distinct de l'entreprise qui exécute physiquement les travaux.
          </p>
          <p>
            Avant tout démarrage de chantier, les attestations d'assurance en cours de validité de l'entreprise partenaire contractante retenue sont vérifiées. Cette vérification fait partie du pilotage, mais la garantie elle-même reste propre à chaque entreprise exécutante, seule responsable de son ouvrage.
          </p>
          <p>
            Ce que couvrent précisément ces protections — décennale, biennale, parfait achèvement — est
            expliqué sur la page{" "}
            <Link href="/garanties-assurances" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">garanties et assurances</Link>.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Ordre des opérations et délais indicatifs du gros œuvre"
        lead="Le gros œuvre suit une séquence stricte : diagnostic, étaiement, dépose, pose de l'ouvrage définitif, puis seulement reprise des finitions périphériques."
      >
        <MqNumbered
          cols={2}
          items={[
            { title: "Diagnostic et sondages", text: "Lecture des plans disponibles, sondages ciblés et, si nécessaire, avis d'un ingénieur structure partenaire indépendant." },
            { title: "Étude de descente de charges", text: "Dimensionnement de la poutre, des appuis et vérification de la compatibilité avec les fondations existantes." },
            { title: "Démarches d'autorisation", text: "Constitution du dossier pour le syndic ou l'urbanisme lorsque l'ouvrage l'exige, avant tout engagement de chantier." },
            { title: "Mise en place de l'étaiement", text: "Reprise provisoire des charges avant toute dépose de l'ancien élément porteur." },
            { title: "Dépose, carottage ou sciage", text: "Ouverture contrôlée de l'élément existant, gravats évacués au fur et à mesure." },
            { title: "Pose et solidarisation de l'ouvrage définitif", text: "Poutre, poteaux et appuis mis en place, calés puis solidarisés selon la note de calcul." },
            { title: "Retrait de l'étaiement et reprise des finitions", text: "L'étaiement n'est retiré qu'après validation de l'ouvrage ; les finitions périphériques sont reprises en dernier." },
          ]}
        />
        <div className="mt-8">
          <MqProse>
            <p>
              À titre indicatif, une ouverture simple avec pose de poutre métallique se déroule généralement sur une à deux semaines. Une reprise en sous-œuvre ou une trémie sur plusieurs niveaux s'étale sur plusieurs semaines, notamment en immeuble occupé où les phases bruyantes sont réparties dans le temps.
            </p>
          </MqProse>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/pedagogie/12-gros-oeuvre-ordre-operations.jpeg"
            alt="Frise en sept étapes de l'ordre d'un chantier de gros œuvre avec points d'arrêt de validation"
            caption="Ordre des opérations d'un chantier de gros œuvre. Schéma pédagogique."
            ratio="aspect-[3/2]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Pédagogie technique"
        title="Comprendre une intervention structurelle, étape par étape"
        lead="Chaque ouvrage structurel suit la même logique : diagnostic, note de calcul de l'ingénieur structure, étaiement, exécution, contrôle. Les schémas ci-dessous détaillent la trémie de plancher et la reprise en sous-œuvre."
      >
        {/*
          03/09 : chPoutreAcierSoudure.jpeg occupait la troisième case de cette grille de schémas.
          Le fichier est un portrait 900×1600 affiché en 4/3 paysage, qui en supprimait plus de la
          moitié de la hauteur. La photo n'est pas perdue : elle est remontée dans la section
          « Ouverture de mur porteur », au droit du texte sur les assemblages, où elle est affichée
          à son ratio. Restent ici les deux schémas, tous deux en 10/7, donc homogènes et complets.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/schema-tremie-plancher.jpg"
            alt="Schéma d'une trémie d'escalier dans un plancher bois : solives sectionnées, chevêtre, linçoirs, sabots métalliques et étaiement provisoire"
            caption="Trémie dans un plancher bois : le chevêtre et les linçoirs reprennent les charges des solives coupées, sur sabots métalliques dimensionnés."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/schema-reprise-sous-oeuvre.jpg"
            alt="Schéma en coupe d'une reprise en sous-œuvre : plots bétonnés par passes alternées, bon sol porteur, sondage géotechnique et étaiement"
            caption="Reprise en sous-œuvre : excavation et bétonnage par passes alternées jusqu'au bon sol identifié par le sondage géotechnique."
            ratio="aspect-[10/7]"
          />
        </div>
        <div className="mt-12">
          {/*
            29/08 : les deux photos qui occupaient cet emplacement (tremie-chevetre-chantier.jpg
            et escalier-duplex-tremie.jpg, toutes deux dans public/photos/maquette/ donc des
            stocks, non des chantiers réels) posaient un problème de fidélité : la seconde était
            explicitement légendée "Référence de style", c'est-à-dire un autre escalier que celui
            montré en "avant" — présentées côte à côte en avant/après, elles laissaient croire à
            tort à la même intervention. Remplacées par deux vraies photos de chantier (dossier
            public/photos/chantiers/) montrant la même trémie d'escalier réelle à deux stades de
            construction. Ces photos ne montrent pas de finition livrée (marches encore en
            contreplaqué brut) : le titre et le texte ont été ajustés en conséquence pour rester
            honnêtes sur ce que montrent réellement les images, plutôt que de parler d'un
            "escalier livré" non documenté par une photo réelle.
          */}
          <h3 className="display t-fort text-ivoire">Trémie d'escalier : du plancher ouvert à la structure posée</h3>
          <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
            Étaiement, découpe des solives puis chevêtre sur sabots métalliques : la structure d'escalier sur mesure n'est posée dans la trémie qu'après validation de la note de calcul.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <MqFig
              src="/photos/chantiers/chEscalierBoisConstructionMarches.jpeg"
              alt="Escalier vu de face depuis le bas, marches en contreplaqué brut montant vers une trémie ouverte dans le plancher"
              caption="Vue depuis le bas : marches en contreplaqué brut montant vers la trémie ouverte dans le plancher, sols encore protégés. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            <MqFig
              src="/photos/chantiers/chEscalierBoisFlottantPalier.jpeg"
              alt="Escalier vu de profil, volée et palier intermédiaire en contreplaqué brut portés par un limon plein enduit en blanc"
              caption="Vue de profil : volée et palier intermédiaire en place, marches encore en contreplaqué brut sur un limon plein enduit, avant habillage définitif. Chantier réel des équipes partenaires."
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Comment sait-on si un mur est porteur avant de le percer ?",
              a: "Aucun indice unique ne suffit : l'épaisseur, l'alignement avec les murs des étages inférieurs et supérieurs, le sens de pose du plancher et les plans d'origine du bâtiment sont recoupés. Quand un doute subsiste, un sondage ponctuel ou l'avis d'un ingénieur structure partenaire indépendant permet de trancher avant tout engagement financier sur le lot maçonnerie.",
            },
            {
              q: "Que se passe-t-il si les plans d'origine de l'immeuble sont introuvables ?",
              a: "C'est une situation fréquente en habitat ancien. À défaut de plans, la lecture se fait par sondages directs dans la cloison ou le doublage, par observation depuis les étages voisins lorsque c'est possible, et par la logique constructive du bâtiment. Cette prudence supplémentaire allonge parfois le délai d'étude, mais elle évite une erreur d'appréciation coûteuse.",
            },
            {
              q: "Un architecte est-il obligatoire pour ouvrir un mur porteur ?",
              a: "Pas systématiquement, mais le recours à un architecte DPLG ou à un ingénieur structure partenaire indépendant devient pertinent dès que l'ouverture dépasse une portée modeste, qu'une trémie est créée dans un plancher, ou que le dossier doit être présenté à une copropriété ou à un service d'urbanisme. Le pilotage identifie ce besoin dès l'étude de faisabilité.",
            },
            {
              q: "Faut-il étayer avant de commencer les travaux ?",
              a: "Dès qu'un élément porteur est concerné, un étaiement provisoire reprend les charges le temps que la poutre ou le linteau définitif soit posé et solidarisé. Cette étape n'est jamais optionnelle : elle protège la structure existante pendant la phase la plus vulnérable du chantier, entre la dépose de l'ancien appui et la mise en charge du nouveau.",
            },
            {
              q: "Comment se passe un chantier de gros œuvre en copropriété ?",
              a: "Le règlement de copropriété et l'accord du syndic encadrent les interventions touchant des éléments communs ou l'aspect extérieur, et les horaires de nuisances sonores sont généralement limités par arrêté municipal. Le pilotage prépare le dossier technique nécessaire à l'assemblée générale lorsque l'ouvrage l'exige, et organise les protections des parties communes pendant les travaux.",
            },
            {
              q: "Quelles preuves demander avant de valider une entreprise de gros œuvre ?",
              a: "Les attestations d'assurance en cours de validité de l'entreprise partenaire contractante concernée, une note de calcul ou un avis technique pour les ouvrages structurels, et un phasage écrit précisant l'ordre des opérations et la durée de l'étaiement. Ces justificatifs sont vérifiés avant tout démarrage de chantier.",
            },
            {
              q: "Combien de temps dure une intervention sur mur porteur ?",
              a: "Pour une ouverture simple avec pose de poutre métallique, comptez indicativement une à deux semaines incluant étaiement, dépose, pose et reprise des finitions périphériques. Une reprise en sous-œuvre ou la création d'une trémie sur plusieurs niveaux allonge sensiblement ce délai, notamment en immeuble occupé où les nuisances sont limitées dans le temps.",
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
          { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur", sub: "Un dossier réel, des plans à la réception" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Structure, copropriété, aléas" },
          { href: "/savoir-faire-ancien", label: "Savoir-faire de l'ancien", sub: "Pan de bois, plâtre, moulures, crémones" },
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Ce qui vient une fois la structure réglée" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Syndic, assemblée générale, mairie" },
          { href: "/renovation-hauts-de-seine-92", label: "Rénovation dans les Hauts-de-Seine", sub: "Le département d'où nous intervenons" },
        ]}
      />
    </>
  );
}
