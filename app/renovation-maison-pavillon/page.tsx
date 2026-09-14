import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Rénovation de maison et pavillon | ARCHI PILOTE",
  description:
    "Une maison réunit dans un même volume l'enveloppe, la structure et les usages : un désordre visible dans une pièce peut avoir son origine ailleurs…",
  alternates: { canonical: "/renovation-maison-pavillon" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Maison & pavillon"
        title="Rénovation de maison et de pavillon : lire le bâtiment du sol au toit"
        lead="Une maison réunit dans un même volume l'enveloppe, la structure et les usages : un désordre visible dans une pièce peut avoir son origine ailleurs, en toiture ou en fondation. ARCHI PILOTE RÉNOVATION lit le bâtiment dans son ensemble avant de hiérarchiser les travaux, avec une attention particulière aux passoires énergétiques, à la ventilation et à l'isolation, pendant que les entreprises partenaires contractantes exécutent chaque lot."
      />

      <MqSection
        title="Lire la maison du sol à la toiture avant de chiffrer"
        lead="Les désordres d'une maison traversent souvent plusieurs niveaux : une humidité en cave peut expliquer une dégradation observée sous toiture, et inversement."
      >
        {/*
          08/09/2026 — infographie de la marque fournie par le client. Titre lu sur
          l'image : « Rénovation de maison : lire le bâtiment du sol à la toiture »,
          cohérent avec cette section. Planche composée (titre, légendes, logo) :
          `entier` obligatoire, un recadrage la décapiterait. 1448x1086 = 4/3 exact.
        */}
        <div className="max-w-4xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-renovation-maison.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : « Rénovation de maison : lire le bâtiment du sol à la toiture »"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Rénovation de maison : lire le bâtiment du sol à la toiture."
            ratio="aspect-[4/3]"
            entier
          />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-fort text-ivoire">Une lecture globale plutôt qu'une liste de travaux</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Traiter chaque pièce indépendamment conduit fréquemment à corriger un symptôme sans supprimer sa cause.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un pavillon des années 1960 à 1990, comme une maison plus ancienne, forme un système où l'humidité, la structure, l'isolation, la ventilation et les réseaux interagissent. Une tache d'humidité au plafond du premier étage peut provenir d'une toiture défaillante, d'une remontée capillaire ou d'une fuite de réseau : seule une lecture complète permet de trancher.
                </p>
                <p>
                  Cette lecture précède systématiquement toute demande de devis, afin d'éviter de faire chiffrer des travaux qui traiteraient un symptôme sans corriger sa cause réelle.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Points singuliers de toiture et de façade</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Un point singulier localisé, jonction de toiture ou fissure de façade, peut expliquer un problème apparemment global de confort ou d'humidité.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'expérience de terrain montre qu'un désordre présenté comme diffus a très souvent une origine précise et localisée : une jonction de toiture mal reprise, un raccord de façade fissuré, une évacuation d'eaux pluviales mal positionnée. Identifier ce point singulier évite des travaux généraux inutilement coûteux.
                </p>
                <p>
                  Lorsque l'origine se situe en partie haute, les reprises relèvent du lot{" "}
                  <Link href="/renovation-toiture-charpente" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">toiture et charpente</Link>,
                  traité à part car il conditionne tout ce qui sera isolé en dessous.
                </p>
              </MqProse>
            </div>
            {/*
              06/09/2026 — première photo de chantier réel de cette page, qui ne montrait
              jusqu'ici que des schémas et des images d'illustration. Ouverte avant légende :
              charpente neuve assemblée, faîtage et arêtiers, posée sur une tête de mur en béton
              aux armatures encore en attente, mur ancien enduit et échafaudage à l'arrière.
              Elle illustre la reprise en partie haute annoncée par le paragraphe ci-dessus.

              Ce qu'elle NE montre PAS, et que la légende ne dit donc pas : ni pavillon
              identifié, ni localisation, ni cause du désordre, ni couverture posée. On ne peut
              pas non plus certifier à l'œil qu'il s'agit d'une réfection plutôt que d'une
              construction d'annexe : la légende dit « intervention », pas « reprise ».
            */}
            <div className="mt-8">
              <MqFig
                src="/photos/chantiers/chCharpenteFaitageArretiers.jpeg"
                alt="Vue plongeante sur le faîtage et les arêtiers d'une charpente bois neuve posée sur une tête de mur en béton dont les armatures en attente dépassent, mur ancien enduit et échafaudage à l'arrière-plan"
                caption="Intervention en partie haute : charpente montée, faîtage et arêtiers assemblés sur une tête de mur en béton dont les armatures en attente ne sont pas encore recoupées. Le mur ancien enduit et l'échafaudage restent en place à l'arrière ; la couverture n'est pas encore posée. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
          {/*
            Emplacement retiré le 05/09/2026 (surexposition + schéma hors sujet).

            schema-vmc.jpg occupait la seconde case de cette rangée. C'est la scène la plus
            répétée du site après chCloisonsPlaco : `scripts/surexposition.py` la compte sur
            CINQ pages (/detail-invisible, /notre-methode, /renovation-appartement,
            /renovation-energetique et ici). Son propre attribut alt reconnaissait par
            ailleurs que le schéma représente un plan d'APPARTEMENT, sur une page consacrée
            aux maisons et pavillons. C'est l'emplacement le moins justifié des cinq : il est
            retiré. Le schéma reste sur /renovation-appartement, dont il montre littéralement
            le plan, et sur les deux pages hors de ce lot.
            Le schéma des origines de l'humidité passe en pleine largeur.
          */}
          <MqFig
            src="/photos/maquette/schema-humidite-origines.jpg"
            alt="Coupe d'un logement ancien illustrant remontées capillaires, infiltrations, condensation et ponts thermiques"
            caption="Origines de l'humidité dans un logement ancien et traitements associés : le diagnostic précède toujours le choix de la solution."
            ratio="aspect-[10/7]"
          />
          <div className="mt-8">
            <MqFig
              src="/photos/pedagogie/19-maison-pavillon-diagnostic.jpeg"
              alt="Coupe diagnostique d'une maison ancienne : fissure de façade, humidité, isolation dégradée, charpente fragilisée, fondations sans étanchéité"
              caption="Points de diagnostic d'une maison ancienne avant travaux. Schéma pédagogique."
              ratio="aspect-[3/2]"
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Traiter la passoire énergétique : ordre technique recommandé"
        lead="Isoler sans ventiler, ou ventiler sans isoler, produit rarement le résultat attendu : ces deux volets se traitent en même temps."
      >
        <MqProse>
          <p>
            Une maison classée passoire énergétique cumule généralement plusieurs faiblesses : toiture mal isolée, menuiseries anciennes laissant filer la chaleur, murs sans isolation ou avec une isolation dégradée, et absence de ventilation mécanique contrôlée adaptée. Traiter un seul de ces points sans les autres donne des résultats décevants.
          </p>
          <p>
            Une partie de ces postes peut relever de dispositifs de financement. Notre{" "}
            <Link href="/aides-renovation-energetique" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">guide des aides à la rénovation énergétique</Link>{" "}
            renvoie vers les sources officielles, sans promesse d'éligibilité avant étude du dossier.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Diagnostic complet des déperditions avant tout choix de matériau isolant",
              "Traitement prioritaire de la toiture, poste de déperdition souvent le plus important",
              "Isolation des murs par l'intérieur ou l'extérieur selon la configuration de façade",
              "Installation d'une ventilation mécanique contrôlée hygroréglable adaptée à l'étanchéité obtenue",
              "Remplacement des menuiseries les plus dégradées en priorité sur les autres",
              "Vérification de l'absence de pont thermique aux jonctions structurelles",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Le carottage, un outil de diagnostic sous-estimé"
        lead="Le carottage permet de vérifier concrètement la composition d'un mur ou d'un plancher avant de décider d'une solution technique."
      >
        {/*
          08/09/2026 — infographie de la marque fournie par le client. Titre lu sur
          l'image : « Le carottage : voir avant de décider », sous-titre « Un outil de
          diagnostic sous-estimé pour une rénovation réussie », cohérent avec cette
          section. Planche composée : `entier` obligatoire. 1223x1286, quasi carrée.
        */}
        <div className="max-w-3xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-carottage.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : « Le carottage : voir avant de décider »"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Le carottage : voir avant de décider."
            ratio="aspect-square"
            entier
          />
        </div>
        <div>
          <h3 className="display t-fort text-ivoire">À quoi sert le carottage en rénovation</h3>
          <div className="mt-4">
            <MqProse>
              <p>
                Avant de trancher sur une solution d'isolation ou de ventilation, un carottage permet de vérifier physiquement la composition d'un mur, l'épaisseur d'une dalle ou la présence d'une lame d'air. Cette vérification concrète évite de se fier uniquement à des plans anciens, parfois incomplets ou obsolètes.
              </p>
            </MqProse>
          </div>
        </div>
        {/*
          Emplacement retiré le 05/09/2026 (surexposition).

          schema-carottage-ventilation.jpg figurait ici. `scripts/surexposition.py` la compte
          sur QUATRE pages (/chantiers-complexes, /demarches-administratives-renovation,
          /gros-oeuvre-structure et celle-ci). Sa légende reconnaissait elle-même que le point
          qu'elle documente — l'autorisation de copropriété — « ne s'applique qu'en cas de mur
          mitoyen ou de secteur protégé », donc pratiquement jamais sur une page maison
          individuelle. C'est l'emplacement le plus faible des quatre : il est retiré plutôt
          que conservé pour meubler. Le texte de la section suffit à expliquer le carottage.
        */}
      </MqSection>

      <MqSection
        title="Construire le budget par familles de postes"
        lead="Le budget d'une rénovation de maison se décompose en familles homogènes, avec une réserve pour aléas systématiquement prévue."
      >
        <p className="mb-8 max-w-2xl t-sec leading-relaxed text-ivoire/85">
          Pour situer chaque famille avant même la visite technique, les fourchettes indicatives et datées
          poste par poste sont publiées dans{" "}
          <Link href="/observatoire-prix-renovation" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">l'observatoire des prix de rénovation</Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { title: "Diagnostics", text: "Lecture du bâtiment, éventuel carottage, diagnostic de performance énergétique." },
            { title: "Toiture et façade", text: "Reprise d'étanchéité, points singuliers, traitement des remontées d'humidité." },
            { title: "Structure", text: "Vérification et reprise éventuelle des éléments porteurs identifiés fragiles." },
            { title: "Réseaux techniques", text: "Électricité, plomberie, chauffage, ventilation mécanique contrôlée." },
            { title: "Isolation", text: "Traitement de la passoire énergétique par les murs, la toiture et les menuiseries." },
            { title: "Finitions", text: "Peintures, sols, équipements et derniers ajustements avant livraison." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display t-base text-ivoire">{f.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Documents et démarches à anticiper"
        lead="Certains documents doivent être réunis avant de lancer les travaux, en particulier pour les maisons anciennes."
      >
        {/*
          08/09/2026 — infographie de la marque fournie par le client. Titre lu sur
          l'image : « Documents et démarches anticipés : préparer le projet avant les
          travaux », cohérent avec cette section. Planche composée : `entier`
          obligatoire. 1448x1086 = 4/3 exact.
        */}
        <div className="max-w-4xl mb-10">
          <MqFig
            src="/photos/pedagogie/infographie-documents-demarches.jpg"
            alt="Infographie ARCHI PILOTE RÉNOVATION : « Documents et démarches anticipés : préparer le projet avant les travaux »"
            caption="Infographie ARCHI PILOTE RÉNOVATION — Documents et démarches anticipés : préparer le projet avant les travaux."
            ratio="aspect-[4/3]"
            entier
          />
        </div>
        <MqNumbered
          cols={2}
          items={[
            { title: "Diagnostic de performance énergétique", text: "Point de départ pour cadrer les priorités d'isolation et de ventilation." },
            { title: "Plans existants ou relevés", text: "Utiles pour situer les réseaux, la structure et les points singuliers identifiés." },
            { title: "Autorisation d'urbanisme si façade concernée", text: "Certaines modifications de toiture ou de façade nécessitent une déclaration préalable en mairie." },
            { title: "Devis détaillés par lot", text: "Comparaison ligne à ligne des entreprises partenaires contractantes avant validation." },
          ]}
        />
      </MqSection>

      <MqSection
        kicker="Pédagogie visuelle"
        title="Rénover un pavillon francilien : ce que l'on voit et ce que l'on ne voit pas"
        lead="Une rénovation de pavillon se juge sur l'enveloppe : isolation, menuiseries, couverture et ventilation. Voici le type de transformation visé, avant et après, puis les schémas techniques qui expliquent les ouvrages cachés."
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display t-fort text-ivoire">Pavillon francilien : de la façade fatiguée à l'enveloppe performante</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent. Ce type de pavillon est courant sur notre zone d'intervention en{" "}
              <Link href="/renovation-ile-de-france" className="text-orange-deep underline underline-offset-4 hover:text-orange transition-colors">Île-de-France</Link>.
            </p>
            {/*
              LIMITATION HONNÊTE — pavillon-facade-avant.jpg et pavillon-facade-apres.jpg sont
              deux images d'illustration (stock), pas la même maison photographiée avant et
              après un chantier ARCHI PILOTE. Vérifié à l'œil : silhouette de toiture et
              position de cheminée proches, mais matériau de couverture, fenêtres et
              ravalement diffèrent — ce sont deux visuels distincts. Aucune vraie séquence
              avant/après du même pavillon n'existe dans /photos/chantiers/ : les photos de
              ravalement réelles disponibles (chFacadeRavalementEchafaudage1.jpeg,
              chFacadeRavalementEchafaudage2.jpeg, chFacadeRavalementVillage.jpeg,
              chRavalementArdoise.jpeg) montrent des immeubles à étages sous échafaudage,
              jamais un pavillon de plain-pied ni un état "après" sans échafaudage. À
              remplacer par un vrai avant/après dès qu'un chantier client de pavillon est
              documenté en photos.
            */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/pavillon-facade-avant.jpg"
                alt="Façade d'un pavillon francilien des années 1970 avant rénovation, enduit fissuré, volets bois usés et menuiseries anciennes"
                caption="Avant : image d'illustration d'un pavillon francilien type — enduit fissuré, menuiseries simple vitrage, isolation extérieure absente et couverture en fin de vie."
              ratio="aspect-[10/7]"
              />
              <MqFig
                src="/photos/maquette/pavillon-facade-apres.jpg"
                alt="Pavillon francilien rénové avec isolation extérieure, enduit clair, menuiseries anthracite et terrasse en pierre"
                caption="Après : image d'illustration du résultat visé par une rénovation énergétique complète — isolation thermique par l'extérieur, menuiseries à rupture de pont thermique, couverture reprise, abords paysagers."
              ratio="aspect-[10/7]"
              />
            </div>
          </div>
          <div>
            <h3 className="display t-fort text-ivoire">Combles : de l'isolant tassé à la double couche croisée</h3>
            <p className="mt-2 text-muted t-sec leading-relaxed max-w-2xl">
              Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.
            </p>
            {/*
              LIMITATION HONNÊTE — combles-non-isoles-avant.jpg et combles-isoles-apres.jpg
              sont aussi deux images d'illustration distinctes (charpentes différentes, l'une
              visiblement ancienne, l'autre visiblement neuve), pas les mêmes combles
              avant/après un chantier réel. La seule vraie photo de combles disponible
              (chIsolationCombles.jpeg) montre une construction neuve en cours, pas la
              rénovation d'un comble ancien — ce n'est pas un remplacement honnête pour cette
              paire. À remplacer par un vrai avant/après dès qu'un chantier client est
              documenté en photos.
            */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/combles-non-isoles-avant.jpg"
                alt="Combles perdus avant intervention, isolant tassé et discontinu"
                caption="Avant : image d'illustration de combles perdus non isolés — isolant tassé et discontinu, ponts thermiques en périphérie, premier poste de déperdition d'une passoire énergétique."
              ratio="aspect-[10/7]"
              />
              <MqFig
                src="/photos/maquette/combles-isoles-apres.jpg"
                alt="Combles isolés avec deux couches croisées de laine minérale, pare-vapeur continu et chemin de circulation"
                caption="Après : image d'illustration du traitement visé — deux couches croisées de laine minérale, pare-vapeur continu jointoyé et chemin de circulation pour l'entretien des réseaux."
              ratio="aspect-[10/7]"
              />
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-isolation-combles.jpg"
            alt="Schéma en coupe de l'isolation des combles : charpente, deux couches croisées de laine minérale, pare-vapeur continu et ventilation de sous-toiture"
            caption="Principe d'isolation des combles : deux couches croisées, pare-vapeur continu côté chaud et lame d'air ventilée sous couverture."
          ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Par où commencer la rénovation d'une maison ancienne ?",
              a: "Par une lecture complète du bâtiment du sol à la toiture : humidité, structure, isolation, ventilation et réseaux. C'est cette lecture globale, et non le choix des finitions, qui détermine l'ordre réel des travaux et évite de traiter un symptôme visible sans corriger sa cause souvent invisible.",
            },
            {
              q: "Comment savoir si ma maison est une passoire énergétique ?",
              a: "Le diagnostic de performance énergétique donne une première indication, mais une lecture terrain complète les données chiffrées en identifiant les points singuliers responsables des déperditions : toiture mal isolée, menuiseries anciennes, ponts thermiques en façade ou absence de ventilation adaptée.",
            },
            {
              q: "Faut-il refaire la toiture avant l'isolation intérieure ?",
              a: "C'est très souvent le bon ordre. Une toiture en mauvais état laisse entrer l'humidité, qui dégrade ensuite toute isolation posée en dessous. Traiter la toiture et l'étanchéité avant l'isolation évite de devoir reprendre un ouvrage neuf quelques années plus tard.",
            },
            {
              q: "Quel est le rôle de la ventilation dans une rénovation de maison ?",
              a: "Une maison rendue plus étanche par l'isolation respire différemment. Sans ventilation mécanique contrôlée adaptée, l'humidité peut s'accumuler et dégrader les matériaux neufs. Isolation et ventilation doivent donc toujours être pensées ensemble, jamais l'une sans l'autre.",
            },
            {
              q: "Comment le budget d'une rénovation de pavillon est-il structuré ?",
              a: "Le budget est construit par familles de postes : diagnostics, structure, toiture et façade, réseaux techniques, isolation et ventilation, menuiseries, puis finitions. Une réserve pour aléas est systématiquement prévue, car le bâti ancien réserve fréquemment des découvertes en cours de chantier.",
            },
            {
              q: "Combien de temps dure une rénovation complète de maison ?",
              a: "Pour une maison avec traitement de l'enveloppe, des réseaux et de la structure, comptez généralement de 4 à 7 mois de travaux. Ce délai dépend de l'état réel découvert derrière les murs, du volume de la maison et de la disponibilité des entreprises partenaires contractantes.",
            },
            {
              q: "Qui décide des travaux à réaliser en priorité ?",
              a: "Le pilotage hiérarchise les travaux selon le niveau de risque et l'urgence technique : structure, humidité, isolation et ventilation en premier, puis menuiseries et finitions. Cette hiérarchisation est présentée au client, qui reste seul décisionnaire du budget final engagé.",
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
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Passoire énergétique, VMC, isolation" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Fissures, planchers, fondations" },
          { href: "/renovation-complete", label: "Rénovation complète", sub: "Le cadre général du pilotage" },
          { href: "/extension-maison", label: "Extension de maison", sub: "Ajouter de la surface sans désorganiser" },
          { href: "/surelevation", label: "Surélévation", sub: "Gagner un niveau : charges et fondations" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
        ]}
      />
    </>
  );
}
