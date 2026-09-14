import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqNumbered, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/menuiserie-agencement-sur-mesure" },
  title: "Dressing, cuisine et façades sur mesure : menuiserie d'agencement | ARCHI PILOTE RÉNOVATION",
  description:
    "Dressings en chêne, cuisines sur mesure, façades sur mesure sur caissons standards, bibliothèques et rangements intégrés : méthode, schémas techniques, prix constatés et réalisations en Île-de-France.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="MENUISERIE ET AGENCEMENT"
        title="Dressings, cuisines et façades sur mesure : le rendu d'ébéniste, au juste prix"
        lead="Dans un logement ancien, aucun volume n'est droit : le mobilier standard laisse des jours, des rives disgracieuses et de la surface perdue. ARCHI PILOTE RÉNOVATION dessine l'agencement sur le relevé réel, arbitre entre sur-mesure intégral et façades sur mesure posées sur caissons standards, puis fait fabriquer et poser par des entreprises partenaires contractantes, sous notre pilotage et notre accompagnement de A à Z."
      />

      <MqSection
        kicker="NOTRE ARBITRAGE"
        title="Ce qui se voit est sur mesure, ce qui ne se voit pas reste standard"
        lead="Le caisson est invisible une fois posé : c'est la façade, la plinthe et le retour d'habillage qui font le rendu."
      >
        <MqProse>
          <p>
            Un ensemble intégralement sur mesure coûte cher parce que chaque caisson est fabriqué à l'unité. Or
            le caisson disparaît derrière la façade et n'intervient ni dans l'esthétique, ni dans la perception
            de la qualité.
          </p>
          <p>
            Nous conservons donc des caissons standards de bonne facture, aux dimensions normalisées, et faisons
            fabriquer sur mesure ce qui est vu et touché : façades en chêne massif ou en laqué, plinthes, joues
            d'habillage, corniches, retours contre murs biais et plans de travail.
          </p>
          <p>
            L'écart de budget se mesure devis en main, projet par projet, sur le poste mobilier, sans écart
            visible sur le résultat livré. Cet arbitrage est détaillé dans notre article{" "}
            <Link href="/blog/cuisine-sur-mesure-ou-caissons-standards" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              cuisine sur mesure ou caissons standards : où se joue l&apos;économie
            </Link>
            , et la façon dont il est répercuté au client sur la page{" "}
            <Link href="/modele-economique-transparence" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              modèle économique et transparence
            </Link>
            .
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-facade-sur-mesure-caisson.jpg"
            alt="Vue éclatée d'un caisson standard équipé d'une façade sur mesure en chêne, charnière réglable, plinthe ajustée et jeu de 3 mm"
            caption="Caisson standard, façade sur mesure : le caisson industriel reste, la façade en chêne, la plinthe et les jeux de 3 mm sont fabriqués et réglés sur mesure."
          />
        </div>
      </MqSection>

      <MqSection
        kicker="MÉTHODE"
        title="Les six étapes d'un agencement sur mesure"
        lead="Chaque étape est documentée et photographiée dans le suivi quotidien transmis au client."
      >
        <MqNumbered
          items={[
            {
              title: "Relevé du volume existant",
              text: "Mesures au télémètre, relevé des faux aplombs, des retours de cheminée, des coffres et des passages de gaines. En logement ancien, aucun mur n'est droit : le sur-mesure part du réel, pas du plan théorique.",
            },
            {
              title: "Dessin de l'agencement",
              text: "Plans et élévations cotés, hauteurs de tablettes, sens d'ouverture, réservations pour l'électroménager et l'éclairage intégré, validés avec le client avant toute commande.",
            },
            {
              title: "Arbitrage caisson standard ou tout sur mesure",
              text: "Nous comparons systématiquement les deux solutions chiffrées. Dans la majorité des cas, un caisson standard de bonne facture équipé d'une façade sur mesure donne un rendu identique pour un budget nettement inférieur.",
            },
            {
              title: "Fabrication en atelier",
              text: "Façades, plinthes, joues d'habillage, corniches et retours réalisés en atelier par l'entreprise partenaire, en chêne massif, en placage ou en laqué, avec finition huilée ou vernie.",
            },
            {
              title: "Pose, calage et réglage",
              text: "Fixation sur ossature ou sur mur, calage des faux aplombs, réglage des charnières, jeux réguliers de 3 mm entre façades et habillage des rives contre les murs biais.",
            },
            {
              title: "Réception et nettoyage complet",
              text: "Contrôle des ouvertures, des alignements et des finitions, puis nettoyage professionnel de fin de chantier avant remise des clés.",
            },
          ]}
        />
        <div className="mt-10">
          <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
            Cinq photos d'un même chantier de dressing sur mesure, de la matière première à la livraison.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <MqFig
              src="/photos/chantiers/chPlacagesNoyerEnAttente.jpeg"
              alt="Panneaux à parement bois foncé livrés et appuyés contre le mur d'une pièce sous corniche moulurée, sol protégé, avant montage"
              caption="Matière : panneaux à parement bois foncé livrés sur le chantier et rangés contre le mur, avant montage. Chantier réel des équipes partenaires."
              ratio="aspect-[2/3]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerCarcassesVides.jpeg"
              alt="Carcasses de dressing à parement bois foncé montées sur vérins de réglage, étagères en place, avant pose des façades"
              caption="Fabrication : carcasses à parement bois foncé montées sur vérins de réglage, étagères déjà posées, avant pose des façades. Chantier réel des équipes partenaires."
              ratio="aspect-[2/3]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerCarcasseTringle.jpeg"
              alt="Carcasse de dressing à parement bois foncé équipée de tringles de penderie, d'étagères et de blocs-tiroirs, en cours de montage"
              caption="Assemblage : tringles de penderie, étagères et blocs-tiroirs posés avant les façades. Chantier réel des équipes partenaires."
              ratio="aspect-[2/3]"
            />
            <MqFig
              src="/photos/chantiers/chDetailTiroirCoulisses.jpeg"
              alt="Main d'un compagnon sortant un tiroir en MDF brut sur ses coulisses, à l'intérieur d'un caisson non encore habillé"
              caption="Détail : tiroir en MDF brut essayé sur ses coulisses pendant le montage du caisson. Chantier réel des équipes partenaires."
              ratio="aspect-[2/3]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerMoulures2.jpeg"
              alt="Deux volumes de dressing à parement bois foncé montés jusqu'à la corniche moulurée d'une pièce ancienne, sol encore sous protection"
              caption="Pose terminée : les volumes à parement bois foncé montent jusqu'à la corniche moulurée conservée, sol encore sous protection. Chantier réel des équipes partenaires."
              ratio="aspect-[2/3]"
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="FABRICATION"
        title="Ce qui se passe avant la pose"
        lead="Découpes, usinages et assemblages occupent l'essentiel du temps : la pose n'est que la dernière étape, et c'est la seule que le client voit d'habitude."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chClaustraMdfUsinageDefonceuse.jpeg"
            alt="Long panneau de MDF à face blanche posé sur tréteaux, ajouré d'un motif de cellules irrégulières usinées à la défonceuse, machine posée sur le panneau et sciure tout autour"
            caption="Usinage d'un claustra : les cellules sont fraisées une à une dans un panneau de MDF à face blanche, à la défonceuse et à l'affleureuse ; le brun du MDF apparaît dans chaque évidement. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chPanneauClaustraLaqueBlanc.jpeg"
            alt="Vantail blanc à claustra ajouré posé debout contre un mur habillé de tasseaux de bois, chants bruns du MDF visibles dans les découpes et paumelles déjà posées"
            caption="Le même motif sur un vantail : panneau blanc ajouré, chants bruns du MDF laissés apparents dans les découpes, paumelles déjà posées. Il attend d'être monté contre le mur en tasseaux. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chChassisVitresBouleauAvantPose.jpeg"
            alt="Deux châssis menuisés en contreplaqué clair, chants multiplis apparents, stockés debout contre un mur sur un sol protégé par un géotextile"
            caption="Châssis menuisés en contreplaqué clair, chants multiplis laissés apparents : assemblés avant la pose, ils patientent debout sur un sol protégé, au milieu des menuiseries encore sous adhésif. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="NOS DOMAINES"
        title="Quatre familles d'agencement régulièrement réalisées"
        lead="Toutes s'appuient sur le même principe : relevé du réel, dessin coté, fabrication en atelier, pose et réglage."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Dressings et suites parentales</h3>
            <p className="text-muted t-sec leading-relaxed">
              Dressings toute hauteur en chêne huilé, îlots à tiroirs, façades cannelées, éclairage intégré et
              penderies dimensionnées sur les usages réels du foyer.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chEnsembleRangementRadiateurClaustra.jpeg"
                alt="Dressing toute hauteur à six vantaux avec poignées bâton en bois, prolongé par des rangements ouverts et un cache-radiateur à claire-voie, avant peinture de finition"
                caption="Un seul ensemble mené d'un mur à l'autre : étagères ouvertes et placards bas à gauche, cache-radiateur à claire-voie au centre, dressing à six vantaux à poignées bâton en bois à droite. Monté et sous-couché, avant peinture de finition. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Cuisines et façades sur mesure</h3>
            <p className="text-muted t-sec leading-relaxed">
              Caissons standards optimisés, façades en chêne massif, en placage ou en laqué, plinthes ajustées,
              joues d'habillage et plans en pierre naturelle ou en stratifié compact.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chHdgCuisineOnyxParquetVersailles.jpeg"
                alt="Cuisine à façades en placage bois clair sans poignée apparente, colonnes toute hauteur montées sous la corniche et plan de travail en pierre naturelle rubanée"
                caption="Cuisine sur mesure : colonnes toute hauteur en placage bois clair ouvrant par gorge en creux, sans poignée apparente, retour de meuble arrondi et plan de travail taillé dans la même pierre rubanée que la crédence. Chantier réel des équipes partenaires."
                ratio="aspect-[3/2]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Bibliothèques et rangements de couloir</h3>
            <p className="text-muted t-sec leading-relaxed">
              Rangements intégrés du sol au plafond dans les circulations et les retours de cheminée : de la
              surface récupérée sans réduire visuellement le volume.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chBibliothequeChenePieceComplete.jpeg"
                alt="Pièce entièrement doublée de bibliothèques en placage bois clair montant du sol au plafond, retournées dans l'angle et prolongées par un placard toute hauteur, en cours de finition"
                caption="Bibliothèque en placage bois clair montée du sol au plafond sur deux murs, retournée dans l'angle et prolongée par un placard toute hauteur ; chantier photographié avant finition, tréteaux et pièces en attente encore en place. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Menuiseries patrimoniales</h3>
            <p className="text-muted t-sec leading-relaxed">
              Portes à panneaux, chambranles profilés, plinthes hautes, fenêtres reproduites à l'identique avec
              crémones en laiton et moulures en plâtre traditionnel de la maison Guimier.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chHdgChambrePlacardMoulure.jpeg"
                alt="Placard toute hauteur à façades blanches moulurées dans le dessin des menuiseries anciennes, avec imposte au-dessus des vantaux et corniche redescendue en retour sur le caisson"
                caption="Menuiserie accordée à l'existant : placard toute hauteur à façades moulurées dans le dessin des menuiseries anciennes, imposte au-dessus des vantaux, corniche redescendue en retour sur le caisson et radiateur en fonte ancien conservé. Chantier réel des équipes partenaires."
                ratio="aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="GALERIE"
        title="Réalisations et chantiers d'agencement"
        lead="Trente-cinq vues d'ouvrages d'agencement — les unes livrées, les autres photographiées en cours de montage — regroupées par cuisine, dressing, bibliothèque, chambre d'enfant, sous-pente et sous-escalier, carcasse en panneau brut, circulation, habillage mural, espace commercial, appartement ancien et cache-radiateur."
        wide
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Cuisines sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chCuisineBlancheFinieIlot.jpeg"
                alt="Cuisine blanche laquée brillante en L avec îlot central, colonnes four et micro-ondes, réfrigérateur américain encore protégé et colonne de rangement laissée ouverte"
                caption="Cuisine blanche laquée avec îlot central : colonnes four et micro-ondes en place, la colonne de rangement reste ouverte et l'électroménager encore sous protection d'usine. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
              <MqFig
                src="/photos/chantiers/chCuisineAnthraciteCarreauxCiment.jpeg"
                alt="Cuisine anthracite en L, plan de travail et retour de crédence noirs, sol en carreaux à motif géométrique gris raccordé au sol bois clair de la pièce voisine"
                caption="Cuisine anthracite livrée en L, plan de travail et retour de crédence noirs assortis, sol en carreaux à motif géométrique raccordé au sol bois clair de la pièce voisine. Chantier réel des équipes partenaires."
                ratio="aspect-[9/16]"
              />
              {/*
                Emplacement retiré le 05/09/2026 (surexposition).

                chCuisineBleuCanardBrillante.jpeg occupait la troisième case.
                `scripts/surexposition.py` compte cette scène (avec sa jumelle
                chCuisineBleuCanardVueDeux.jpeg) sur QUATRE pages : ici, /realisations,
                /second-oeuvre et l'article « cuisine sur mesure ou caissons standards ». Sa
                légende affirmait par ailleurs des « façades sur mesure sur caissons standards »
                qu'aucune photo de façade fermée ne permet de vérifier.
                Elle est conservée sur /second-oeuvre, où le plancher ouvert au premier plan
                illustre le propos technique de la page (les réseaux restent accessibles), et
                retirée d'une galerie qui compte déjà dix-huit autres vues.

                06/09 : la case est reprise par chCuisineBleuCielIlotLaque, inédite, dont le
                plan de travail assemblé à chevrons relève bien de la menuiserie.
              */}
              <MqFig
                src="/photos/chantiers/chCuisineBleuCielIlotLaque.jpeg"
                alt="Cuisine ouverte en fin de chantier : linéaire de façades bleu ciel brillantes toute hauteur et îlot blanc coiffé d'un plan de travail en bois foncé assemblé à chevrons"
                caption="Ce qui est fabriqué sur mesure ici, c'est le plan : îlot coiffé d'un plan de travail en bois foncé assemblé à chevrons, assemblé à chevrons — un assemblage qui ne se trouve pas en longueur standard. Derrière, le linéaire de façades bleu ciel brillantes monte jusqu'au plafond ; les plans de pose sont encore scotchés sur la crédence. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Dressings sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chDressingLaqueBlancCouloirPlans.jpeg"
                alt="Dressing laqué blanc à quatre vantaux avec deux longues poignées bâton en bronze, plans d'exécution punaisés au mur, sol encore sous protection"
                caption="Dressing laqué blanc à quatre vantaux, longues poignées bâton en bronze ; plans d'exécution encore affichés au mur et sol sous protection. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chDressingSousPenteBlancTiroirs.jpeg"
                alt="Dressing blanc en trois volumes avec colonnes de tiroirs et étagères ouvertes, recoupé en biais par la pente du comble sur la gauche"
                caption="Dressing sous pente de toit : les volumes et les colonnes de tiroirs sont recoupés sur la pente réelle du comble. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
              <MqFig
                src="/photos/chantiers/chDressingBufetNoyerPorteBleue.jpeg"
                alt="Dressing toute hauteur et enfilade basse à parement bois foncé, poignées bâton noires, dans un appartement ancien à corniche moulurée et porte peinte en bleu"
                caption="Dressing toute hauteur et enfilade basse à parement bois foncé, poignées bâton noires ; corniche moulurée d'origine et porte bleue conservées. Chantier réel des équipes partenaires."
                ratio="aspect-[16/9]"
              />
              <MqFig
                src="/photos/chantiers/chDressingBeigeAngleLumineux.jpeg"
                alt="Angle de dressing sur mesure laqué taupe avec éclairage intégré en corniche, chantier réel"
                caption="Dressing d'angle laqué taupe, éclairage intégré en corniche et poignée creusée sans ferrure apparente. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chDressingPortesCoulissantesMiroir.jpeg"
                alt="Dégagement bordé de deux enfilades de placards toute hauteur à portes coulissantes, cadres bois et remplissage miroir, ouvrant au fond sur une chambre meublée"
                caption="Dressing de passage livré : deux enfilades de placards toute hauteur à portes coulissantes, cadre bois et remplissage miroir, spots doubles orientables et parquet ton miel à larges lames. Le couloir dessert une chambre déjà occupée, dont on aperçoit le lit et le bureau. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Bibliothèques sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chBibliotheque.jpeg"
                alt="Bibliothèque sur mesure peinte en rose pâle montée dans un angle, étagères garnies de livres au-dessus d'un caisson bas à portes moulurées, à côté d'un mur en pierre de taille laissé apparent"
                caption="Bibliothèque sur mesure montée dans un angle, étagères ouvertes au-dessus d'un caisson bas fermé à portes moulurées, à côté d'un mur en pierre de taille laissé apparent. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chBibliothequeCouloirTrappe.jpeg"
                alt="Rangement de couloir sur mesure peint en blanc, étagères ouvertes en retour dans l'angle, trappe de visite technique réservée dans le plafond juste au-dessus, sol encore sous protection"
                caption="Rangement de couloir du sol au plafond, étagères ouvertes en retour dans l'angle et trappe de visite technique réservée dans le plafond juste au-dessus. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              {/*
                Emplacement retiré le 05/09/2026 (photo affichée de travers + légende fausse).

                chBibliothequePanneauxMoulures.jpeg est stockée COUCHÉE : le fichier n'a pas
                d'orientation EXIF et l'image apparaît pivotée d'un quart de tour sur le site
                (les spots du plafond se retrouvent sur un bord latéral). Vérifié en rouvrant le
                fichier redressé.
                La légende était en outre fausse : une fois l'image remise d'aplomb, on voit une
                enfilade de caissons en MDF BRUT, avant peinture, dont les « parties vitrées »
                sont en réalité des réservations encore ouvertes — un rail de guidage d'outil est
                visible à l'intérieur de l'une d'elles. Ce n'est pas une « bibliothèque à portes
                moulurées et parties vitrées, style traditionnel » livrée.

                À FAIRE : faire pivoter le fichier de 90° dans /public/photos/chantiers/ (hors
                du périmètre de cette page), puis réintégrer l'emplacement avec une légende
                décrivant un chantier de menuiserie en MDF brut avant peinture.
              */}
              <MqFig
                src="/photos/chantiers/chEtagereCactusSurMesure.jpeg"
                alt="Mur entier d'étagères sur mesure en bois clair brut, dont les montants verticaux sont découpés en silhouettes de cactus de hauteurs différentes, sol sous protection"
                caption="Découpe sur mesure : un mur entier d'étagères dont chaque montant est découpé en silhouette de cactus, en bois brut avant finition — la liberté de forme permise par la fabrication en atelier. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
          {/* 07/09 — chBibliothequeNicheGrisTaupe RETIRÉE de cette grille. C'est la MÊME
              bibliothèque que chBibliotheque.jpeg, deux cases plus haut dans la même rangée :
              mêmes livres, même piano-jouet rouge, même pouf gris, même mur en pierre de
              taille, même parquet. Deux vues du même meuble dans une grille censée montrer la
              variété du savoir-faire, c'est très exactement le « toujours les mêmes photos »
              que le client reproche. La vue conservée est la plus large et la mieux éclairée.
              Au passage : son nom annonçait un « gris taupe » alors que le meuble est d'un
              beige rosé — un nom de fichier de plus qui décrit mal ce qu'il contient. */}
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Chambres d&apos;enfant sur mesure</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Lits mezzanine, lits-cabane, escaliers intégrés et bureaux dessinés dans le même
              ouvrage que les rangements : trois vues prises avant la pose des sols et le
              raccordement de l&apos;électricité.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chChambreLitMezzanineSurMesure.jpeg"
                alt="Chambre d'enfant en fin d'agencement : lit mezzanine en bois clair à garde-corps barreaudé, escalier à marches rayonnantes intégré, placard toute hauteur brun à gauche, sol en chape brute"
                caption="Lit mezzanine sur mesure : garde-corps à barreaudage, escalier à marches rayonnantes intégré et bureau logé en dessous, face à un placard toute hauteur en panneaux teintés brun. La chape n'est pas encore revêtue et le point de centre reste nu. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chLitMezzanineStructureEscalier.jpeg"
                alt="Dessous d'un lit mezzanine sur mesure : bureau d'angle à plateau galbé, bloc de deux tiroirs, étagères et placard à porte ouverte sur une penderie, en panneaux plaqués bois clair"
                caption="Le dessous de la même mezzanine : bureau d'angle à plateau galbé, bloc de deux tiroirs, étagères et penderie dont la porte ouverte laisse voir le fond en MDF brut. Prise d'attente fils sortis, sol encore en chape. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
              <MqFig
                src="/photos/chantiers/chChambreLitCabaneCheneClair.jpeg"
                alt="Chambre d'enfant en cours d'agencement : lit-cabane à pignon en panneaux de bois clair monté sur une estrade, niches à claire-voie en forme de maison au mur, bureau à casiers, sol entièrement bâché"
                caption="Lit-cabane monté sur son estrade : pignon ajouré à claire-voie, garde-corps à barreaux droits et emmarchement d'accès, prolongé au mur par deux niches en forme de maison et un bureau à casiers. Sol entièrement bâché, prises et point de centre non raccordés. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          {/*
            07/09 — deux groupes ajoutés ici. Trois des six photos ne figuraient jusqu'ici sur
            aucune page du site (chRangementSousPenteCombles, chBibliothequeBlancheVitreeChantier,
            chNicheBoisAlcoveFinie) ; les trois autres (chHabillageMdfSousPente,
            chDressingEscalierArriereplan2, chNicheArrondieBoisEclairage) n'étaient publiées que
            sur une page et restent, après cet ajout, sous le plafond de trois pages contrôlé
            par `scripts/surexposition.py`. Chaque image a été ouverte AVANT
            d'écrire sa légende, et chacune a en plus été comparée aux vingt-sept vues déjà
            présentes sur cette page pour éviter la répétition reprochée par le client :

            — chEtagereBoisAssemblageAtelier écartée : c'est le MÊME mur d'étagères à montants
              découpés en cactus que chEtagereCactusSurMesure, deux groupes plus haut, vu de
              face au lieu de trois quarts.
            — chEtagereChantierEchelle écartée : fichier identique à
              chBibliothequeChenePieceComplete (section « Quatre familles »), à la définition
              près.
            — chDressingEscalierArriereplan, chEtagereCoinCableApparent et
              chEtagereCoinFenetreBrute écartées : ce sont trois angles de la MÊME pièce cintrée
              en placage clair, déjà montrée deux fois sur cette page
              (chPieceHabillagePanneauxBoisClair et chBibliothequeNicheContreplaque).
            — chBibliothequeRadiateurIntegre écartée : même mur que
              chEnsembleRangementRadiateurClaustra (section « Quatre familles »), porte à
              persiennes ouverte.
            — chNicheBibliothequeCouloir écartée par prudence : rangement blanc en couloir très
              proche de chBibliothequeCouloirTrappe.
            — chArmoireVitreeVerreDepoli écartée : le fichier est stocké COUCHÉ, comme
              chBibliothequePanneauxMoulures ; il s'afficherait pivoté d'un quart de tour.
            — chOptiquePresentoirsVitrine et chCouloirBoisGaleriesBanc écartées : la première
              porte l'enseigne et les horaires du magasin, lisibles sur la vitrine ; la seconde
              est un second angle du mur de présentoirs déjà visible dans « Espaces
              commerciaux ».
            — chMenuiserieInstallationPanneauMural écartée : visage d'ouvrier parfaitement
              identifiable en gros plan.
          */}
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Sous pente et sous escalier</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Deux volumes qu&apos;aucun meuble du commerce ne sait occuper : la pente d&apos;un
              comble et la volée d&apos;un escalier. L&apos;ouvrage est recoupé sur la ligne
              réelle, relevée sur place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              <MqFig
                src="/photos/chantiers/chRangementSousPenteCombles.jpeg"
                alt="Carcasse de dressing en panneaux bruts montée sous un rampant de comble, montants recoupés en escalier sur la pente, penderie à gauche, colonne de trois tiroirs blancs et casiers à droite, fenêtre de toit au fond"
                caption="Sous rampant : la carcasse est recoupée en escalier sur la pente réelle du comble — penderie d'un côté, colonne de tiroirs et casiers de l'autre. Panneaux encore bruts, façades non posées, fenêtre de toit au fond. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chHabillageMdfSousPente.jpeg"
                alt="Enfilade de portes de placard en panneau brut montée sous la volée d'un escalier, recoupée en biais sur la pente, marches protégées à droite, sol entièrement bâché"
                caption="Sous escalier : une enfilade de portes en panneau brut recoupée en biais sur la volée, de la plus haute à la plus basse. Les panneaux sont posés avant peinture, les marches sont protégées et le sol entièrement bâché. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Carcasses et façades en panneau brut, avant peinture</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              L&apos;état dans lequel un agencement quitte l&apos;atelier et arrive sur le
              chantier : les volumes sont justes, les jeux sont réglés, mais rien n&apos;est
              peint. C&apos;est le moment où les reprises coûtent encore peu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              <MqFig
                src="/photos/chantiers/chBibliothequeBlancheVitreeChantier.jpeg"
                alt="Grande bibliothèque en panneau brut montée du sol au plafond, portes battantes ouvertes sur des casiers à tablettes, fond clair, prise de courant conservée au fond d'un casier bas, parquet ancien à lames droites"
                caption="Bibliothèque montée sur place, portes ouvertes sur les casiers : le fond est laissé clair, les tablettes sont déjà à leur cote et une prise existante est conservée au fond d'un casier bas. La peinture vient après. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chNicheBoisAlcoveFinie.jpeg"
                alt="Mur entier de placards en panneau brut du sol au plafond, portes pleines sans poignée apparente, une seule niche ouverte à droite au-dessus d'un caisson bas, parquet ancien à larges lames"
                caption="Un mur entier devenu rangement : portes pleines sans poignée apparente, du sol au plafond, avec une seule niche ouverte réservée à droite. Le parquet ancien à larges lames est conservé ; les façades attendent leur finition. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chDressingEscalierArriereplan2.jpeg"
                alt="Dressing en panneaux bruts portes ouvertes : penderie à gauche, colonne de tiroirs au centre, colonne de petits casiers à droite, caissons hauts au-dessus, escalier en bois clair à barreaudage à droite du cadre"
                caption="Aménagement intérieur d'un dressing avant pose des façades : penderie, colonne de tiroirs et colonne de petits casiers, surmontées de caissons hauts. À droite, l'escalier en bois clair et son barreaudage montent au niveau suivant. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chNicheArrondieBoisEclairage.jpeg"
                alt="Deux panneaux découpés à bords arrondis et un disque, présentés à blanc contre une cloison en plaques de plâtre percée de deux réservations, boîtiers et câbles électriques encore apparents, seuil de porte protégé au sol"
                caption="Présentation à blanc : deux panneaux à bords arrondis et un disque sont posés contre la cloison avant toute fixation, à l'endroit où passent encore boîtiers et câbles. La forme se règle sur place, sur le mur réel, avant d'être vissée. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Placards de couloir et circulations</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Le couloir est la surface la moins exploitée d&apos;un logement : montés du sol au
              plafond et affleurés au doublage, ces placards ne se lisent plus comme des meubles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              <MqFig
                src="/photos/chantiers/chCouloirPlacardsChenePoigneeGorge.jpeg"
                alt="Couloir livré bordé de placards toute hauteur en panneaux plaqués bois clair à poignées-gorge noires encastrées, porte pleine plaquée assortie et parquet ton miel"
                caption="Couloir livré : placards toute hauteur en panneaux plaqués bois clair, poignées-gorge noires encastrées, porte pleine plaquée assortie à béquille noire, spots orientables en enfilade et parquet ton miel ; au fond, un dressing à façades plus foncées. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chCouloirPlacardsCheneDoublageBlanc.jpeg"
                alt="Couloir livré : placard toute hauteur blanc mat sans poignée le long du passage, placard plaqué bois clair à poignée-gorge noire verticale au fond, parquet à larges lames"
                caption="Autre passage : placard toute hauteur blanc mat sans poignée le long du couloir, placard plaqué bois clair à poignée-gorge noire verticale au fond, spot double orientable et parquet à larges lames. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Habillages muraux et niches menuisées</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Quand la menuiserie ne se contente plus du meuble et prend tout le mur : panneaux
              plaqués du sol au plafond, niches et bureaux dessinés dans la continuité du parement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chPieceHabillagePanneauxBoisClair.jpeg"
                alt="Petite pièce entièrement habillée de panneaux plaqués bois clair du sol au plafond, niche à tablettes en cours de montage, spots percés au plafond et câble d'attente pendant"
                caption="Pièce habillée de panneaux plaqués bois clair du sol au plafond : la niche à tablettes est en cours de montage, les spots sont percés et le câble d'attente pend encore au plafond. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chBibliothequeNicheContreplaque.jpeg"
                alt="Bibliothèque-niche en contreplaqué clair aux tablettes à angles arrondis et caissons décalés, encastrée dans un habillage mural en panneaux plaqués bois clair, sol en chape brute"
                caption="Bibliothèque-niche en contreplaqué clair, tablettes à angles arrondis et caissons décalés, encastrée dans l'habillage mural qui se retourne dans l'angle. Sol encore en chape, câbles d'éclairage en attente. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chBureauConsoleChenePlateauGalbe.jpeg"
                alt="Bureau-console sur mesure en panneaux plaqués bois clair à plateau galbé, trois tiroirs sortis sur leurs coulisses, étagères en zigzag posées au mur en attente de fixation"
                caption="Bureau-console en cours de pose : plateau galbé, trois tiroirs essayés sur leurs coulisses et étagères en zigzag encore en attente de fixation. Les tracés d'implantation sont au crayon sur la cloison et les prises pendent au bout de leurs fils. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Espaces commerciaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg"
                alt="Carcasse d'un comptoir d'accueil montée sur place en panneaux blancs, chants bruts encore apparents, chutes et visseuse au sol dans un local commercial en travaux"
                caption="Comptoir d'accueil monté sur place : carcasse en panneaux blancs, chants bruts encore apparents, chutes et outillage au sol. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
              <MqFig
                src="/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg"
                alt="Comptoir d'accueil livré dans un magasin d'optique : façade en tasseaux de bois, plan et joncs de finition laiton, présentoirs à lunettes et échelle d'acuité visuelle au mur"
                caption="Le comptoir livré : façade en tasseaux de bois, plan et joncs de finition laiton, dans un magasin d'optique équipé. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chOptiqueAccueilFinition.jpeg"
                alt="Magasin d'optique vu depuis la porte vitrée : présentoirs à lunettes rétroéclairés le long des deux murs, meubles bas à tiroirs et comptoir d'accueil au fond"
                caption="Le magasin vu depuis la porte : présentoirs rétroéclairés sur les deux murs, meubles bas à tiroirs et comptoir d'accueil au fond. Chantier réel des équipes partenaires."
                ratio="aspect-[4/3]"
              />
              {/*
                07/09 — deux vues d'un AUTRE local commercial ajoutées ici, pour que ce groupe
                ne repose plus sur un seul chantier. Les deux fichiers ont été ouverts avant
                d'écrire les légendes.
                chComptoirBarEtageresOutils, qui montre le même comptoir de bar depuis
                l'établi, est écartée : un compagnon y apparaît de trois quarts, le visage
                lisible. La vue conservée est prise de face, sans personne dans le champ, et
                montre mieux l'ouvrage (le plan qui contourne la colonne de fonte).
              */}
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Agencements d'un appartement ancien parisien</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Trois ouvrages d'un appartement ancien parisien livré : rangements toute hauteur, niche menuisée et
              détails d'exécution, tous dessinés sur le relevé de volumes anciens jamais d'équerre.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chHdgSejourCuisineOnyxBanquette.jpeg"
                alt="Pièce de vie avec colonnes de rangement toute hauteur en placage bois clair et retour de comptoir arrondi sur piètement cannelé"
                caption="Pièce de vie : colonnes de rangement toute hauteur en placage bois clair alignées sous la corniche, retour de comptoir arrondi porté par un piètement à cannelures, plan taillé dans la même pierre que la crédence. Chantier réel des équipes partenaires."
                ratio="aspect-[3/2]"
              />
              <MqFig
                src="/photos/chantiers/chHdgDetailNicheOnyxCheminee.jpeg"
                alt="Diptyque : niche de crédence encadrée de menuiserie cannelée au-dessus de tiroirs à façades cannelées, et tablette de cheminée en marbre sculpté"
                caption="Niche menuisée : à gauche, une niche de crédence encadrée de menuiserie cannelée, fond et tablette taillés dans la même pierre, posée sur des tiroirs à façades cannelées ; à droite, la cheminée en marbre sculpté conservée. Chantier réel des équipes partenaires."
                ratio="aspect-[3/2]"
              />
              <MqFig
                src="/photos/chantiers/chHdgDetailCeramiqueRobinetterie.jpeg"
                alt="Diptyque : étagères en bois massif clair encastrées sur un fond de menuiserie strié, et commandes de douche encastrées en bronze patiné"
                caption="Détail d'exécution : à gauche, étagères en bois massif clair encastrées sur un fond de menuiserie strié ; à droite, les commandes de douche en bronze patiné encastrées dans un parement à cannelures. Chantier réel des équipes partenaires."
                ratio="aspect-[3/2]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire mb-5">Habillages bois et cache-radiateurs</h3>
            <p className="text-muted t-petit leading-relaxed max-w-2xl mb-5">
              Deux vues d'un autre chantier : là où le radiateur et l'écran ne peuvent pas être déplacés, c'est
              l'habillage qui est fabriqué sur mesure autour d'eux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              <MqFig
                src="/photos/chantiers/chHdgChambreLattesCacheRadiateur.jpeg"
                alt="Cache-radiateur sur mesure en coffrage laqué fermé par une tôle perforée, surmonté d'une niche habillée de tasseaux de bois recevant un écran"
                caption="Cache-radiateur sur mesure : coffrage laqué fermé par une tôle perforée, surmonté d'une niche en tasseaux de bois qui reçoit l'écran ; la cloison voisine est habillée de textile tendu dans un encadrement cintré. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chHdgChambreLattesBoisTv.jpeg"
                alt="Mur habillé de tasseaux de bois sur fond sombre du sol au plafond, sous un faux plafond incurvé à éclairage indirect et reprise de ventilation"
                caption="Même chantier : mur habillé de tasseaux de bois sur fond sombre du sol au plafond, faux plafond incurvé intégrant spots orientables, éclairage indirect et reprise de ventilation. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="MODÈLE ÉCONOMIQUE"
        title="Achat en direct, logistique intégrée et livraison nettoyée"
        lead="Le mobilier, la quincaillerie et l'électroménager ne relèvent pas de la garantie décennale de pose : le client les achète au prix fournisseur."
      >
        <MqChecklist
          items={[
            "Références validées techniquement par notre équipe avant toute commande du client.",
            "Retrait des commandes et livraison sur le chantier au moment utile, organisés avec le transporteur ou l'entreprise concernée.",
            "Aucune marge prise sur la fourniture : le client conserve l'intégralité de l'écart de prix.",
            "Écart de prix constaté poste par poste sur les devis, jamais annoncé comme une remise forfaitaire.",
            "Nettoyage professionnel de fin de chantier systématique, hérité de nos standards de conciergerie.",
          ]}
        />
        <p className="text-muted t-sec leading-relaxed mt-8 max-w-2xl">
          Le fonctionnement de ces commandes est décrit sur la page{" "}
          <Link href="/achat-direct-materiaux" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            achat direct des matériaux
          </Link>
          . Ces agencements sont fabriqués et posés dans notre zone d'intervention, présentée sur la page{" "}
          <Link href="/renovation-ile-de-france" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            rénovation en Île-de-France
          </Link>
          .
        </p>
        {/*
          Emplacement retiré le 05/09/2026 (légende contraire au rôle d'ARCHI PILOTE +
          surexposition).

          flotte-camions-retrait-materiaux.jpg occupait la case centrale, légendée « notre
          flotte de camions ». ARCHI PILOTE RÉNOVATION PILOTE, elle n'exécute pas : les travaux
          et la logistique sont assurés par les entreprises partenaires contractantes.
          Présenter une image de banque comme « notre flotte » contredit cette mention, répétée
          en pied de plusieurs pages. L'image apparaissait par ailleurs sur TROIS pages (ici,
          /expertise-carrelage-zellige-travertin, /modele-economique-transparence) ; elle est
          également retirée de la première.

          Les deux images restantes sont des images de banque : leurs légendes le disent
          désormais, et celle de l'entrepôt ne nomme plus une enseigne qu'aucune signalétique
          ne permet d'identifier sur la photo.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <MqFig
            src="/photos/maquette/nettoyage-fin-de-chantier.jpg"
            alt="Équipe de nettoyage en fin de chantier dans un appartement haussmannien rénové : aspirateur, lavage des vitres, parquet point de Hongrie, cheminée en marbre et moulures"
            caption="Nettoyage de fin de chantier systématique : le logement est remis prêt à vivre, pas seulement prêt à réceptionner. Image d'illustration."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
            alt="Entrepôt de négoce de matériaux : palettes de plaques de plâtre standard et hydrofuges, rouleaux de laine minérale, sacs d'enduit et chariot élévateur"
            caption="Approvisionnement en direct : plaques standard et hydrofuges, laine minérale et sacs d'enduit retirés au négoce et facturés au client sans marge. Image d'illustration."
            ratio="aspect-[10/7]"
          />
        </div>
        <p className="text-muted t-petit leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Dressing, cuisine et façades : les questions posées">
        <MqFaq
          items={[
            {
              q: "Faut-il une cuisine entièrement sur mesure pour un beau rendu ?",
              a: "Non. Le rendu visible tient aux façades, aux plinthes, aux joues d'habillage et au plan de travail, pas au caisson qui reste invisible. Associer des caissons standards de bonne qualité à des façades sur mesure permet d'obtenir un résultat d'ébéniste tout en réduisant le coût par rapport à un ensemble intégralement sur mesure. L'écart réel dépend des références retenues et se lit sur les devis, il ne se chiffre pas à l'avance.",
            },
            {
              q: "Peut-on habiller des meubles de grande distribution avec des façades sur mesure ?",
              a: "Oui, et c'est une solution que nous utilisons régulièrement. Les caissons de grande distribution ont des dimensions standardisées et des quincailleries fiables ; nous faisons fabriquer les façades, les plinthes et les habillages latéraux sur mesure, en chêne ou en laqué, puis nous les faisons poser et régler par l'entreprise partenaire.",
            },
            {
              q: "Combien coûte un dressing sur mesure en Île-de-France ?",
              a: "Fourchettes constatées : 900 à 1 800 euros le mètre linéaire pour un dressing sur mesure en chêne, façades et aménagement intérieur compris ; 500 à 1 100 euros le mètre linéaire en solution mixte caissons standards et façades sur mesure. Ces montants dépendent de la hauteur, du taux de tiroirs et de la finition retenue.",
            },
            {
              q: "Qui achète les meubles et les façades ?",
              a: "Le client achète en direct la fourniture qui ne relève pas de la garantie décennale de pose : caissons, façades, quincaillerie, plans de travail, électroménager. Nous validons techniquement les références, puis nous organisons le retrait des commandes et leur livraison sur le chantier au moment utile.",
            },
            {
              q: "Le chantier est-il nettoyé à la fin ?",
              a: "Un nettoyage de fin de chantier par une équipe professionnelle est prévu au périmètre chaque fois que le projet le permet, et il figure alors noir sur blanc dans le devis de l'entreprise concernée. Le logement est remis prêt à vivre, pas seulement prêt à réceptionner.",
            },
          ]}
        />
      </MqSection>

      <MqReadNext
        items={[
          { href: "/blog/escalier-bois-massif-structure-ouverte-fermee", label: "Escalier bois : structure ouverte ou fermée", sub: "Limon, parement et budget" },
          { href: "/renovation-cuisine-maison", label: "Rénovation de cuisine", sub: "Implantation, réseaux et pose des meubles" },
          { href: "/savoir-faire-ancien", label: "Charme de l'ancien", sub: "Fenêtres, moulures, crémones" },
          { href: "/expertise-carrelage-zellige-travertin", label: "Expertise carrelage et pierre", sub: "Zellige, travertin, joint époxy" },
          { href: "/renovation-appartement", label: "Rénovation d'appartement", sub: "Volumes anciens, murs non droits, rangements intégrés" },
          { href: "/renovation-hauts-de-seine-92", label: "Rénovation en Hauts-de-Seine", sub: "Notre zone d'intervention pour l'agencement" },
        ]}
      />

      <MqCta
        title="Un dressing, une cuisine ou une bibliothèque à dessiner ?"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : relevé du volume, arbitrage sur-mesure ou façades sur caissons, et budget comparé."
      />
    </main>
  );
}
