import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/extension-maison" },
  title: "Extension de maison : cadrage et pilotage | ARCHI PILOTE",
  description:
    "Structure, autorisations, interfaces et budget : sécurisez les décisions d'une extension avant le démarrage des travaux.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="EXTENSION DE MAISON"
        title="Extension de maison : ajouter sans désorganiser"
        lead="Une extension réussie n'est pas seulement une surface supplémentaire : elle doit fonctionner avec la maison existante sur le plan de la circulation, de la structure, de la lumière, des réseaux, de l'isolation et de l'esthétique. ARCHI PILOTE RÉNOVATION cadre la faisabilité, structure le budget et pilote le projet de A à Z, tandis que les entreprises partenaires contractantes exécutent les travaux et les architectes ou ingénieurs indépendants interviennent sur les dossiers qui l'exigent."
      />

      <div className="rf-wrap mq-mesure--large pb-4 mq-planche-ouverture">
        <MqFig
          src="/photos/pedagogie/20-extension-interface.jpeg"
          alt="Coupe technique de l'interface entre une maison ancienne et son extension : fondations, rupture de pont thermique, isolation continue, jonction de toiture, réseaux"
          caption="Interface technique entre une maison existante et son extension. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        title="La faisabilité avant tout budget définitif"
        lead="Un chiffrage précis ne vaut rien tant que les contraintes d'urbanisme, d'emprise, d'accès et de structure existante n'ont pas été vérifiées."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-haut text-ivoire">Règles d'urbanisme et emprise au sol</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Le plan local d'urbanisme fixe des règles de distance, de hauteur et d'emprise qui déterminent la
              forme même de l'extension possible.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Avant d'imaginer la disposition intérieure de l'extension, il faut vérifier ce que le document
                  d'urbanisme de la commune autorise réellement : distance par rapport aux limites de propriété,
                  hauteur maximale, emprise au sol restante, coefficient éventuel. Ces règles varient fortement
                  d'une commune à l'autre et parfois d'une rue à l'autre. Le contenu du dossier à déposer est
                  décrit sur la page{" "}
                  <Link href="/demarches-administratives-renovation" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                    démarches administratives : déclaration préalable et permis de construire
                  </Link>
                  .
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire">Accès chantier et structure existante</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              L'accès pour les engins et matériaux, ainsi que la nature de la structure existante, conditionnent
              la méthode constructive retenue.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un terrain difficile d'accès impose souvent des matériaux plus légers ou un phasage de livraison
                  différent, avec un impact direct sur le budget. La structure existante de la maison doit
                  également être vérifiée avant de définir le mode de liaison entre l'ancien et le neuf : ces
                  vérifications relèvent du{" "}
                  <Link href="/gros-oeuvre-structure" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                    gros œuvre et de la reprise de structure
                  </Link>
                  .
                </p>
                <p>
                  Un budget précis annoncé avant ces vérifications peut donc être trompeur. C'est pourquoi l'étude
                  de faisabilité précède systématiquement tout chiffrage engageant.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-deperditions.jpg"
            alt="Schéma des déperditions thermiques d'une maison avec extension, points de vigilance à l'interface entre l'existant et le neuf"
            caption="Les déperditions thermiques se concentrent souvent aux interfaces entre bâti existant et extension neuve."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          À FOURNIR — photo RÉELLE manquante (ce n'est pas un visuel "à générer par IA").
          Sujet demandé : terrain et façade avant travaux, avec implantation de l'extension ajoutée
          en surimpression sobre. Alt prévu : "Étude d'implantation d'une extension de maison."
          Vérifié le 31/08/2026 : aucun candidat honnête dans /public/photos/chantiers/ (pas de photo
          de terrain/jardin avant travaux avec superposition d'implantation) et aucun schéma dans
          /public/photos/pedagogie/. Ce visuel suppose une vraie photo de terrain d'un chantier
          ARCHI PILOTE réel + un calque d'implantation sobre ajouté dessus — impossible à fabriquer
          honnêtement ici sans une photo de terrain authentique fournie par le client/les équipes
          partenaires. Ne pas combler avec une photo stock présentée comme réelle.
        */}
      </MqSection>

      <MqSection
        title="L'interface existant / extension, la zone la plus sensible"
        lead="Toiture, étanchéité, isolation, niveaux de sol et reprises de façade doivent être traités comme un ensemble et non comme deux chantiers indépendants."
      >
        <MqProse>
          <p>
            C'est à la jonction entre l'ancien et le neuf que se concentrent la majorité des désordres constatés
            plusieurs années après la livraison d'une extension : infiltration au raccord de toiture, pont
            thermique à la jonction des murs, différence de niveau de sol créant une marche non prévue,
            fissuration au droit de la reprise de façade.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            cols={1}
            items={[
              "Raccord de toiture étanché et vérifié avant la pose de la couverture définitive",
              "Continuité de l'isolation entre l'existant et l'extension, sans rupture de pont thermique",
              "Niveaux de sol harmonisés ou traités par une transition maîtrisée",
              "Reprise de façade réalisée avec des matériaux compatibles avec l'existant",
              "Étanchéité à l'air vérifiée avant la fermeture des cloisons",
            ]}
          />
        </div>
        {/*
          Emplacement retiré le 05/09/2026 (doublon dans la même page).

          extension-verre-meuliere.jpg figurait ici ET plus bas dans la rangée « références de
          style A / B » : la même image, deux fois sur une seule page. Sa légende affirmait de
          surcroît une « reprise des fondations » et une « étanchéité de jonction » qui ne sont
          pas visibles sur une photo de façade finie. L'occurrence est supprimée ici ; celle de
          la rangée A / B est conservée, où elle est correctement présentée comme une
          illustration d'un projet distinct.
        */}
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-extension-surelevation.jpg"
            alt="Coupe technique d'une maison avec extension de plain-pied et surélévation, reprise de charges et chaînage"
            caption="Extension et surélévation : reprise des charges jusqu'aux fondations, chaînage et raccords d'étanchéité entre l'existant et le neuf."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          Deux emplacements sur trois retirés le 05/09/2026 (légendes fausses, sujet hors
          périmètre). Cette rangée alignait trois photos légendées « Chantier réel des équipes
          partenaires ». Ouverture des trois fichiers :

          - chCharpenteToitureOSBChantier.jpeg était légendée « panneaux OSB de toiture posés
            avant couverture définitive ». Il n'y a AUCUN panneau sur la toiture : la charpente
            est nue, l'OSB est sur les murs. La scène est de surcroît une ossature bois isolée
            en pleine forêt sous la neige — ni une extension, ni un chantier d'Île-de-France.
          - chCharpenteMaisonEchafaudage.jpeg montre une construction neuve en pierre calcaire
            claire avec des chiens-assis en OSB, vernaculaire étranger, à nouveau sans aucun
            bâti existant auquel se greffer. `scripts/qualite-photos.py` la signale en plus en
            1080 px de large avec 6 % de hautes lumières brûlées.

          Aucune des deux ne peut porter la mention « chantier réel des équipes partenaires ».
          Conformément à docs/EMPLACEMENTS-PHOTO-A-POURVOIR.md, les emplacements sont retirés
          plutôt que rhabillés d'une légende vague.

          À FOURNIR PAR LE CLIENT : deux photos de chantier d'extension réelle en Île-de-France
          montrant la jonction avec le bâti existant (fondations en attente contre le mur
          existant, jonction de toiture entre l'ancien et le neuf).

          06/09/2026 — CETTE DEMANDE EST POURVUE. L'export WhatsApp du client contenait deux
          prises qui montrent exactement cette jonction, ouvertes et vérifiées avant légende :
          une charpente neuve dont un appui est un mur en blocs de béton monté pour l'occasion
          et l'autre un mur ancien enduit conservé, percé d'une ouverture. Elles sont posées
          ci-dessous, en tête de rangée. La localisation n'est pas certifiable sur l'image :
          aucune des deux légendes ne revendique l'Île-de-France.

          La troisième photo est conservée et passe en pleine largeur, avec une légende qui ne
          dit plus « extension » : le bâtiment photographié est une construction neuve isolée.
        */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/chantiers/chCharpenteExtensionBlocsBeton.jpeg"
            alt="Charpente résineuse neuve, pannes et chevrons encore nus, montée entre un mur en blocs de béton fraîchement monté à droite et un mur ancien enduit conservé à gauche, échafaudage en pied"
            caption="La jonction vue de l'extérieur : la charpente neuve prend appui d'un côté sur un mur en blocs de béton monté pour l'occasion, de l'autre sur le mur ancien enduit conservé, dans lequel une ouverture a été percée. Échafaudage encore en place, dalle coulée et blocs stockés au sol. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chCharpenteExtensionDepuisOuverture.jpeg"
            alt="Vue prise depuis une ouverture percée dans un mur ancien en pierre, sur une charpente neuve à chevrons et arêtiers posée sur des murs en blocs de béton"
            caption="La jonction vue depuis l'intérieur du bâti ancien : l'ouverture percée dans le mur de pierre cadre la charpente neuve posée sur les murs en blocs de béton. Blocs empilés à même la dalle, planchers d'échafaudage posés au sol et trémie encore ouverte sur le niveau inférieur. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
        <div className="mt-5">
          <MqFig
            src="/photos/chantiers/chCharpenteParpaingConstruction.jpeg"
            alt="Construction neuve en parpaings avec charpente bois posée, hélicoptère à béton posé sur le terrain devant la dalle fraîchement talochée"
            caption="Gros œuvre d'une construction neuve : murs en parpaings montés, charpente bois posée et dalle intérieure talochée à l'hélicoptère. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
        {/*
          Rangée supprimée le 31/08/2026 (vérification image par image) : les 3 photos qui figuraient
          ici (chTerrassePiscineBoisVue1.jpeg, chTerrasseBoisPiscineCourbe.jpeg,
          chLivraisonPanneauPrefabGrue.jpeg) montrent des terrasses/piscine — hors-sujet dans une
          section consacrée à l'interface maison existante/extension. La 3e photo était en plus
          légendée à tort "Panneau préfabriqué livré par grue sur un chantier d'extension" alors
          qu'elle montre une coque de piscine préfabriquée livrée par camion-grue. C'est exactement
          le mélange de projets signalé par le client : la rangée est retirée plutôt que corrigée
          par une légende approximative.
        */}
      </MqSection>

      <MqSection
        title="Réseaux techniques : ce que l'extension impose souvent"
        lead="Ajouter des mètres carrés habitables sollicite presque toujours les réseaux existants, qui doivent être vérifiés avant d'être prolongés."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-haut text-ivoire">Tableau électrique et chauffage</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'extension peut imposer une adaptation du tableau électrique existant, devenu insuffisant pour
                  alimenter de nouveaux circuits, ainsi qu'un dimensionnement complémentaire du système de
                  chauffage pour couvrir la surface supplémentaire sans dégrader le confort du reste de la maison.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire">Ventilation, eau et évacuations</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une extension plus étanche que le bâti ancien modifie l'équilibre de ventilation de l'ensemble
                  de la maison. L'installation ou l'extension d'une ventilation mécanique contrôlée hygroréglable
                  est fréquemment nécessaire. L'alimentation en eau et les évacuations doivent également être
                  vérifiées, en particulier si l'extension accueille une cuisine ou une salle d'eau. Le lien entre
                  isolation, étanchéité à l'air et ventilation est développé sur la page{" "}
                  <Link href="/renovation-energetique" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                    rénovation énergétique
                  </Link>
                  .
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Phasage : protéger la vie quotidienne pendant les travaux"
        lead="Si la maison reste occupée pendant le chantier, le phasage devient une contrainte à part entière et doit être anticipé dès le planning initial."
      >
        <MqProse>
          <p>
            Protections des circulations, accès dédié au chantier, coupures ponctuelles de réseaux et périodes
            d'indisponibilité de certaines pièces doivent être identifiées et communiquées aux occupants avant le
            démarrage. Une extension bien phasée limite les nuisances au strict nécessaire.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
            caption="Enchaînement des lots d'un chantier de rénovation : chaque phase conditionne la suivante, d'où l'importance du séquencement."
            ratio="aspect-[10/7]"
          />
        </div>
        <div className="mt-10">
          <MqNumbered
            items={[
              {
                title: "Étude de faisabilité",
                text: "Vérification des règles d'urbanisme, de l'emprise disponible, de l'accès chantier et de la structure existante.",
              },
              {
                title: "Dossier d'autorisation",
                text: "Constitution du dossier de déclaration préalable ou de permis de construire, avec architecte si le seuil légal l'impose.",
              },
              {
                title: "Fondations et structure",
                text: "Réalisation des fondations et de la structure porteuse de l'extension par l'entreprise partenaire contractante.",
              },
              {
                title: "Hors d'eau, hors d'air",
                text: "Couverture, étanchéité et fermeture de l'enveloppe, avec traitement prioritaire de l'interface avec l'existant.",
              },
              {
                title: "Réseaux et isolation",
                text: "Extension des réseaux électriques, plomberie, chauffage et ventilation, puis pose de l'isolation.",
              },
              {
                title: "Finitions et raccords",
                text: "Finitions intérieures et extérieures, avec vérification finale de la continuité entre ancien et neuf.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Partenaires mobilisés selon la nature du projet"
        lead="Selon l'ampleur de l'extension, un architecte ou un bureau d'études structure peut être nécessaire, tandis que les entreprises exécutantes restent seules contractantes de leurs travaux."
      >
        <MqProse>
          <p>
            ARCHI PILOTE RÉNOVATION structure et pilote le projet d'extension : lecture du terrain,
            hiérarchisation des travaux, mise en relation avec les architectes DPLG ou ingénieurs structure
            partenaires indépendants lorsque le dossier l'exige, et suivi quotidien par photos datées jusqu'à la
            livraison. Ces projets sont pilotés dans notre zone d'intervention, présentée sur la page{" "}
            <Link href="/renovation-ile-de-france" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              rénovation en Île-de-France
            </Link>
            .
          </p>
        </MqProse>
        <div className="mt-8">
          <MqStats
            items={[
              {
                dt: "4-8 mois",
                dd: "Durée moyenne — De l'étude de faisabilité à la livraison, autorisations administratives comprises.",
              },
              {
                dt: "Prix fournisseur",
                dd: "Matériaux achetés en direct — Lorsque le lot s'y prête, le client commande au fournisseur sans marge d'intermédiation.",
              },
              {
                dt: "Documents attendus",
                dd: "Titre de propriété, plan cadastral, règlement du plan local d'urbanisme, éventuel accord de copropriété.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PÉDAGOGIE VISUELLE"
        title="Ce qui se joue avant et pendant une extension"
        lead="Une extension réussie se joue avant le terrassement : étude de sol, autorisation d'urbanisme et fondations adaptées. Les photos ci-dessous sont des exemples d'illustration à chaque étape type — elles ne documentent pas un unique chantier de bout en bout (voir note ci-dessous)."
        wide
      >
        {/*
          Corrigé le 31/08/2026 après vérification visuelle des fichiers sources : cette section
          présentait jardin-avant-extension.jpg et extension-livree-apres.jpg comme le "avant" et
          "après" d'UN MÊME projet (légendes "Avant :" / "Après :" répétées deux fois sur la page).
          Ouverture des deux fichiers : ce sont deux maisons différentes (pierre/toiture/jardin/
          extension tous différents) — exactement le problème signalé par le client ("les visuels
          actuels mélangent plusieurs projets"). La fausse paire "avant/après" dupliquée est retirée
          et les légendes ci-dessous ne prétendent plus qu'il s'agit du même bien.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/jardin-avant-extension.jpg"
            alt="Pignon en meulière d'une maison francilienne et son jardin avant extension : dalles béton, appentis et abris en tôle ondulée le long du mur mitoyen"
            caption="Exemple d'illustration — terrain avant travaux : le relevé, l'étude de sol et la déclaration préalable précèdent tout terrassement."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/chantiers/chIsolationCombles.jpeg"
            alt="Laine minérale posée entre les chevrons sous une toiture neuve, compagnon sur échafaudage roulant vissant les premières plaques de plafond, murs en briques encore nus"
            caption="Isolation en laine minérale posée entre les chevrons et premières plaques de plafond vissées sur l'ossature ; la maçonnerie en briques est encore nue. Construction neuve — une extension en est une par définition. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/maquette/extension-verre-meuliere.jpg"
            alt="Extension contemporaine vitrée à menuiseries acier noir greffée sur une maison ancienne en meulière d'Île-de-France, terrasse en dalles de pierre"
            caption="Référence de style A (image d'illustration, projet distinct) : extension vitrée à menuiseries acier noir sur maison en meulière."
            ratio="aspect-[3/2]"
          />
          <MqFig
            src="/photos/maquette/extension-livree-apres.jpg"
            alt="Extension contemporaine en bardage bois vertical et grandes baies d'angle à menuiseries noires, accolée à une maison de meulière"
            caption="Référence de style B (image d'illustration, projet distinct) : extension en bardage bois vertical et baies d'angle à menuiseries noires."
            ratio="aspect-[3/2]"
          />
        </div>
        <div className="mt-5">
          <MqFig
            src="/photos/maquette/schema-reprise-sous-oeuvre.jpg"
            alt="Schéma en coupe d'une reprise en sous-œuvre : plots bétonnés par passes alternées, bon sol porteur, sondage géotechnique et étaiement"
            caption="Reprise en sous-œuvre : excavation et bétonnage par passes alternées jusqu'au bon sol identifié par le sondage géotechnique."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          À FOURNIR — la vraie séquence demandée par le client n'existe pas encore comme actif.
          Sujet demandé : suite RÉELLE et cohérente d'UNE SEULE extension, du début à la fin —
          terrassement, structure, hors d'eau, second œuvre, livraison. Alt prévu : "Étapes réelles
          de construction d'une extension de maison."
          Vérifié le 31/08/2026 : /public/photos/chantiers/ (~200 fichiers) contient de vraies photos
          de chantier mais aucune suite documentée d'un seul et même projet d'extension du terrassement
          à la livraison — ce sont des chantiers différents (cuisines, dressings, charpentes de
          maisons distinctes, etc.). Fabriquer une continuité à partir de ces photos séparées
          reproduirait le problème signalé par le client. Ce visuel a donc besoin d'un vrai reportage
          photo (5 étapes) sur UN chantier ARCHI PILOTE réel et identifié, pas d'une génération IA
          ni d'un montage de photos d'origines diverses.
        */}
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Quelle surface d'extension nécessite un architecte ?",
              a: "Dès que la surface de plancher totale du bien après travaux dépasse le seuil légal en vigueur, le recours à un architecte devient obligatoire. Même en dessous de ce seuil, un architecte DPLG ou un ingénieur structure partenaire indépendant reste recommandé dès que l'extension touche à la structure porteuse de la maison existante.",
            },
            {
              q: "Faut-il un permis de construire ou une déclaration préalable ?",
              a: "Cela dépend de la surface créée et de la zone d'urbanisme. Une extension de faible emprise peut relever d'une simple déclaration préalable, tandis qu'une extension plus importante impose un permis de construire. Ce point est vérifié dès l'étude de faisabilité, avant tout engagement budgétaire.",
            },
            {
              q: "Peut-on vivre dans la maison pendant la construction de l'extension ?",
              a: "Dans la majorité des cas oui, à condition que le phasage sépare clairement les zones de chantier des zones habitées. Les périodes les plus perturbantes sont l'ouverture de la façade existante pour créer la liaison et les coupures ponctuelles de réseaux, qui sont anticipées et annoncées à l'avance.",
            },
            {
              q: "Combien coûte réellement une extension de maison ?",
              a: "Le coût dépend fortement du type de structure retenu, du niveau de finition et de la complexité des raccordements aux réseaux existants. Une fourchette précise ne peut être donnée qu'après visite technique, mais l'achat de certains matériaux en direct par le client peut réduire le coût de certains postes, dans une proportion qui s'évalue projet par projet sur le budget global.",
            },
            {
              q: "Comment se passe le raccord entre l'existant et l'extension ?",
              a: "C'est le point le plus sensible du projet. Toiture, étanchéité, isolation, niveaux de sol et reprises de façade doivent être traités comme un ensemble cohérent, et non comme deux chantiers juxtaposés. Un défaut à cette interface est la première cause de désordre constatée plusieurs années après la livraison.",
            },
            {
              q: "Qui est responsable de la structure de l'extension ?",
              a: "La responsabilité technique et les garanties légales relèvent de l'entreprise partenaire contractante qui exécute la structure, ainsi que de l'ingénieur ou de l'architecte partenaire indépendant lorsqu'une étude a été réalisée. ARCHI PILOTE RÉNOVATION pilote la cohérence globale du projet sans se substituer à ces responsabilités.",
            },
            {
              q: "Comment le chantier est-il suivi si je ne peux pas être présent ?",
              a: "Chaque étape clé, en particulier la structure et les raccords qui seront ensuite recouverts, fait l'objet de photos datées transmises sur WhatsApp. Ce suivi quotidien permet de conserver une preuve visuelle des ouvrages avant qu'ils ne disparaissent derrière l'isolation ou les finitions.",
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

      <MqCta lead="Étude de projet sans engagement, sous 48 heures ouvrées : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste." />

      <MqReadNext
        items={[
          { href: "/blog/extension-ou-surelevation-maison", label: "Extension ou surélévation : choisir selon votre terrain", sub: "Le terrain tranche avant le budget" },
          { href: "/surelevation", label: "Surélévation", sub: "L'alternative à l'extension au sol" },
          { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie", sub: "Tableau, réseaux et évacuations à prolonger" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Déclaration préalable, permis de construire, PLU" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes constatées avant chiffrage" },
          { href: "/renovation-ile-de-france", label: "Rénovation en Île-de-France", sub: "Notre zone d'intervention pour les extensions" },
        ]}
      />
    </main>
  );
}
