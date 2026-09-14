import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/surelevation" },
  title: "Surélévation : étude et pilotage du projet | ARCHI PILOTE",
  description:
    "Surélévation : structure, faisabilité, partenaires et phasage. Un projet complexe nécessite des décisions documentées.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="SURÉLÉVATION"
        title="Surélévation : un projet de structure et de poids"
        lead="Une surélévation ajoute une charge nouvelle sur des fondations et des murs porteurs qui n'ont pas été conçus pour cela à l'origine. La question centrale n'est donc pas esthétique mais structurelle : la maison ou l'immeuble peut-il supporter ce poids supplémentaire ? ARCHI PILOTE RÉNOVATION cadre la faisabilité, mobilise les ingénieurs structure et architectes DPLG partenaires indépendants nécessaires, et pilote le projet de A à Z jusqu'à la livraison."
      />

      <div className="rf-wrap mq-mesure--large pb-4 mq-planche-ouverture">
        <MqFig
          src="/photos/pedagogie/21-surelevation-coupe.jpeg"
          alt="Coupe technique d'une surélévation légère à ossature bois : reprise de charges, trémie d'escalier, structure de toiture"
          caption="Principe structurel d'une surélévation de maison. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
      </div>

      <MqSection
        title="La question structurelle avant toute question esthétique"
        lead="Avant d'imaginer la nouvelle pièce, il faut vérifier que les fondations, les murs porteurs et la charpente existante peuvent recevoir la charge supplémentaire."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-haut text-ivoire">Étude de structure : une étape non négociable</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Aucun budget fiable ne peut être établi tant que l'étude de structure n'a pas déterminé la charge
              admissible réelle du bâtiment.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  La surélévation modifie profondément l'équilibre des charges d'un bâtiment. Un ingénieur ou un
                  bureau d'études structure partenaire indépendant doit analyser les fondations, la nature des
                  murs porteurs et l'état de la charpente pour déterminer si le poids supplémentaire envisagé est
                  compatible, et sous quelles conditions techniques.
                </p>
                <p>
                  Cette étude conditionne le choix du matériau de structure retenu pour la surélévation, et donc
                  une grande partie du budget final. Elle doit précéder tout chiffrage définitif : c'est le sujet
                  de notre article{" "}
                  <Link href="/blog/surelevation-etude-des-fondations" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                    pourquoi l&apos;étude des fondations vient avant le dessin
                  </Link>
                  .
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire">Structure légère ou structure lourde</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Le choix entre ossature bois, structure métallique ou maçonnerie traditionnelle dépend directement
              de la capacité portante réelle du bâtiment existant.
            </p>
            <div className="mt-4">
              <MqChecklist
                cols={1}
                items={[
                  "Ossature bois : solution la plus légère, souvent compatible avec des fondations limitées",
                  "Structure métallique : bon compromis poids/portée pour certaines configurations",
                  "Maçonnerie traditionnelle : nécessite le plus souvent un renforcement préalable des fondations",
                  "Renforcement ponctuel des murs porteurs existants selon les résultats de l'étude",
                  "Reprise éventuelle des fondations si la charge admissible est dépassée",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <MqFig
            src="/photos/maquette/schema-extension-surelevation.jpg"
            alt="Coupe technique d'une maison avec extension de plain-pied et surélévation, reprise de charges et chaînage"
            caption="Extension et surélévation : reprise des charges jusqu'aux fondations, chaînage et raccords d'étanchéité entre l'existant et le neuf."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/surelevation-ossature-bois.jpg"
            alt="Surélévation en ossature bois montée sur une maison enduite : ossature et panneaux OSB apparents, bandeaux de zinc déjà posés, échafaudage tout autour"
            caption="Surélévation en ossature bois montée sur une maison existante : ossature et panneaux OSB encore apparents, premiers bandeaux de couverture en zinc posés, échafaudage tout autour. Image d'illustration."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          Emplacement retiré le 05/09/2026 (surexposition).

          schema-mur-porteur.jpg figurait ici. `scripts/surexposition.py` la compte sur QUATRE
          pages (/gros-oeuvre-structure, /guides, /reseau-partenaires et celle-ci). Sa légende
          reconnaissait elle-même que le schéma ne montre PAS une surélévation mais « le type de
          vérification structurelle » qu'on y retrouve : c'est une analogie, pas une illustration
          du sujet de la page. C'est l'emplacement le plus faible des quatre. Le schéma reste sur
          /gros-oeuvre-structure, dont l'ouverture de mur porteur est le sujet direct.
        */}
      </MqSection>

      <MqSection
        title="Autorisations et démarches administratives"
        lead="Une surélévation modifie la hauteur et l'aspect du bâtiment : elle nécessite presque toujours un permis de construire, et parfois l'accord de la copropriété."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display t-haut text-ivoire">Permis de construire et architecte</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Dans la quasi-totalité des cas, une surélévation impose le dépôt d'un permis de construire, car
                  elle modifie la hauteur et souvent l'aspect extérieur du bâtiment. Le recours à un architecte
                  DPLG partenaire indépendant devient obligatoire dès que la surface de plancher totale du
                  bâtiment après travaux dépasse le seuil légal en vigueur.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display t-haut text-ivoire">Démarches auprès du syndic en copropriété</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Pour un immeuble en copropriété, la surélévation touche les parties communes que sont les
                  fondations, la toiture et la structure. Elle nécessite généralement un vote en assemblée
                  générale, avec des règles de majorité spécifiques. Le dossier technique complet doit être
                  présenté au syndic avant même le dépôt de la demande d'autorisation d'urbanisme. L'ordre de ces
                  formalités est détaillé sur la page{" "}
                  <Link href="/demarches-administratives-renovation" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
                    démarches administratives : permis, syndic et assemblée générale
                  </Link>
                  .
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Phasage : dépose de toiture, structure, mise hors d'eau"
        lead="La surélévation expose temporairement le bâtiment aux intempéries pendant la dépose de la toiture existante et la pose de la nouvelle structure : ce phasage se prépare minutieusement."
      >
        <MqFig
          src="/photos/pedagogie/22-surelevation-phasage.jpeg"
          alt="Phasage d'une surélévation en sept étapes : dépose de toiture, protection provisoire, ossature bois, couverture, isolation, raccords, finitions"
          caption="Phasage d'une surélévation jusqu'à la mise hors d'eau. Schéma pédagogique."
          ratio="aspect-[3/2]"
        />
        <div className="mt-10">
          <MqNumbered
            items={[
              {
                title: "Étude de structure",
                text: "Analyse des fondations, murs porteurs et charpente par un ingénieur partenaire indépendant.",
              },
              {
                title: "Dossier d'autorisation",
                text: "Permis de construire avec architecte DPLG, et vote en assemblée générale si copropriété.",
              },
              {
                title: "Protection et dépose de toiture",
                text: "Bâchage renforcé et dépose de la couverture existante, phase la plus exposée aux aléas météo.",
              },
              {
                title: "Structure nouvelle",
                text: "Montage de l'ossature retenue (bois, métal ou maçonnerie) par l'entreprise partenaire contractante.",
              },
              {
                title: "Mise hors d'eau, hors d'air",
                text: "Fermeture rapide de l'enveloppe pour limiter au maximum l'exposition du logement existant.",
              },
              {
                title: "Réseaux, isolation, finitions",
                text: "Extension des réseaux vers le nouveau niveau, isolation renforcée et finitions intérieures.",
              },
            ]}
          />
        </div>
        {/*
          06/09/2026 — deux photos posées ici. Cette page ne montrait que des schémas et des
          images d'illustration : aucune photo de chantier réel n'y figurait, alors que l'étape
          « structure nouvelle », entre la dépose de la couverture et la mise hors d'eau, est
          précisément celle que le texte décrit et que personne ne voit jamais.

          Les deux prises ont été ouvertes avant d'être légendées. Elles montrent une charpente
          neuve montée SUR DU BÂTI EXISTANT — mur mur pignon aveugle conservé et décroûté, plancher
          de planches ancien, mur enduit à l'arrière-plan —, ce qui les distingue des charpentes
          de construction neuve isolée présentes ailleurs sur le site. Ni la localisation, ni
          l'essence exacte des bois, ni la nature de l'opération (surélévation ou réfection de
          comble) ne sont certifiables à l'œil : les légendes n'en revendiquent aucune.

          Les deux prises ne viennent PAS du même chantier (mur mur pignon aveugle enduit et plancher
          de planches d'un côté, mur ancien couvert de végétation sèche et tête de mur béton de
          l'autre) : aucune légende ne les présente comme deux vues d'une même opération.
        */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/chantiers/chCharpenteNeuvePignonMitoyen.jpeg"
            alt="Charpente bois neuve montée contre un mur mur pignon aveugle enduit, bande de maçonnerie décroûtée jusqu'aux moellons sous la pente, échafaudage roulant et visseuse posée sur un chevron"
            caption="Structure nouvelle contre un mur pignon aveugle conservé : sous la nouvelle pente, une bande de maçonnerie a été décroûtée jusqu'aux moellons et garnie de tiges verticales ; les bois sont engravés dans le mur, les chevrons repris sur sabots métalliques. Le plancher de planches et l'échafaudage roulant sont ceux du chantier. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCharpenteFaitageArretiers.jpeg"
            alt="Vue plongeante sur le faîtage et les arêtiers d'une charpente bois neuve reposant sur une tête de mur en béton dont les armatures en attente dépassent encore"
            caption="Autre chantier, même étape, vu d'en haut : faîtage et arêtiers assemblés, posés sur une tête de mur en béton dont les armatures en attente ne sont pas encore recoupées. Derrière, le mur ancien enduit couvert de végétation sèche, l'échafaudage et les toitures voisines. La couverture n'est pas encore posée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Interfaces techniques entre l'existant et le niveau surélevé"
        lead="L'escalier d'accès, les réseaux verticaux et l'isolation entre les niveaux forment un ensemble d'interfaces à traiter avec la même rigueur que la structure elle-même."
      >
        <MqProse>
          <p>
            La création ou le renforcement de la cage d'escalier menant au niveau surélevé impose souvent une
            trémie dans le plancher existant, avec les mêmes précautions de reprise de charge qu'une{" "}
            <Link href="/ouverture-mur-porteur" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              ouverture de mur porteur
            </Link>
            . Les réseaux électriques, de plomberie et de chauffage doivent être prolongés
            verticalement, ce qui suppose parfois de repenser une partie de la distribution des étages inférieurs.
          </p>
          <p>
            L'isolation entre l'ancien plancher haut, désormais intérieur, et le nouveau niveau doit également
            être traitée avec soin, tant sur le plan thermique qu'acoustique.
          </p>
        </MqProse>
        {/*
          Déplacé ici le 31/08/2026 depuis la section "Gagner un étage" : ce schéma traite précisément
          de la trémie d'escalier décrite dans le paragraphe ci-dessus (chevêtre, linçoirs, sabots), et
          n'a pas de lien avec la maison spécifique montrée dans la section "avant/après" plus bas — il
          y créait une fausse impression de continuité avec ce projet précis.
        */}
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-tremie-plancher.jpg"
            alt="Schéma d'une trémie d'escalier dans un plancher bois : solives sectionnées, chevêtre, linçoirs, sabots métalliques et étaiement provisoire"
            caption="Trémie dans un plancher bois : le chevêtre et les linçoirs reprennent les charges des solives coupées, sur sabots métalliques dimensionnés."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Budget et délais : repères indicatifs"
        lead="Le coût d'une surélévation dépend fortement du type de structure retenu et de l'ampleur des renforcements nécessaires, mais quelques repères permettent de cadrer les attentes."
      >
        <MqStats
          items={[
            {
              dt: "6-10 mois",
              dd: "Durée moyenne — De l'étude de structure à la livraison, autorisations administratives comprises.",
            },
            {
              dt: "Coût au m²",
              dd: "Généralement plus élevé qu'une extension au sol, en raison de la dépose de toiture et du levage des matériaux.",
            },
            {
              dt: "Prix fournisseur",
              dd: "Matériaux achetés en direct — Sur les lots qui s'y prêtent, le client commande au fournisseur sans marge d'intermédiation.",
            },
          ]}
        />
        <p className="text-muted t-sec leading-relaxed mt-8 max-w-2xl">
          Ces projets de surélévation sont pilotés dans notre zone d'intervention, présentée sur la page{" "}
          <Link href="/renovation-hauts-de-seine-92" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            rénovation en Hauts-de-Seine
          </Link>
          .
        </p>
      </MqSection>

      <MqSection
        kicker="PÉDAGOGIE VISUELLE"
        title="Gagner un étage sans démolir : la surélévation en images"
        lead="La surélévation dépend de la portance des murs existants et du règlement d'urbanisme. Ce comparatif montre une maison francilienne avant et après création d'un étage à ossature bois — même façade, même angle de prise de vue."
        wide
      >
        {/*
          Vérifié le 31/08/2026 (ouverture des fichiers sources) : maison-avant-surelevation.jpg et
          maison-surelevee-apres.jpg montrent bien LA MÊME maison (même trame de façade, même
          appareillage brique, mêmes volets, même bâtiment mitoyen à gauche avec sa lucarne) — ce
          binôme avant/après est cohérent et conservé tel quel, avec une légende qui précise qu'il
          s'agit d'une photo d'illustration (photos stock, pas un chantier ARCHI PILOTE identifié).

          En revanche surelevation-ossature-bois.jpg, qui était présentée juste à côté comme la phase
          "chantier" de CE MÊME projet, montre un bâtiment différent (immeuble à étages avec balcons,
          gabarit et ferronnerie différents de la maison avant/après). Photo retirée de cette suite :
          la garder aurait reproduit le problème signalé par le client (mélange de plusieurs projets
          présentés comme un seul). Le schéma de trémie (schema-tremie-plancher.jpg), qui n'a pas de
          lien avec ce projet précis, a été déplacé dans la section "Interfaces techniques" ci-dessus,
          où il correspond réellement au texte.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/maison-avant-surelevation.jpg"
            alt="Maison de bourg de plain-pied à encadrements de brique et soubassement en pierre, toiture en tuiles percée de deux fenêtres de toit, avant surélévation"
            caption="Image d'illustration — avant : un seul niveau habitable sous une toiture en tuiles percée de deux fenêtres de toit. La faisabilité d'une surélévation dépend du PLU, de la portance des murs et du diagnostic de l'ingénieur structure."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/maison-surelevee-apres.jpg"
            alt="La même maison après surélévation : un niveau supplémentaire habillé d'un bardage clair à joint debout, grandes baies à menuiseries anthracite et toiture à faible pente"
            caption="Image d'illustration — la même maison, après : un niveau supplémentaire habillé d'un bardage clair à joint debout, grandes baies à menuiseries anthracite et toiture à faible pente. Le rez-de-chaussée, la porte et les volets d'origine sont inchangés."
            ratio="aspect-[10/7]"
          />
        </div>
        {/*
          À FOURNIR — photo RÉELLE manquante pour compléter la suite avant/chantier/après.
          Sujet demandé : chantier en cours de la MÊME maison que ci-dessus (structure bois), même
          façade et même angle. Vérifié le 31/08/2026 : /public/photos/chantiers/ ne contient aucune
          photo de chantier de surélévation correspondant à ce bâtiment précis (chSurelevationBrique.jpeg
          et surelevation-ossature-bois.jpg montrent chacun un bâtiment différent). Ce visuel a besoin
          d'une vraie photo de chantier prise sur CE bien pendant les travaux — pas d'une photo stock
          d'un autre bâtiment présentée comme la suite de celui-ci.
        */}
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Comment sait-on si une maison peut supporter une surélévation ?",
              a: "Seule une étude de structure réalisée par un ingénieur ou un bureau d'études partenaire indépendant permet de trancher. Elle analyse les fondations, les murs porteurs et la charpente existante pour déterminer la charge supplémentaire admissible. Cette étude doit précéder tout chiffrage définitif, faute de quoi le budget annoncé n'a pas de valeur fiable.",
            },
            {
              q: "Quelle est la différence entre une surélévation légère et lourde ?",
              a: "Une surélévation légère utilise une structure bois ou métallique peu chargée, compatible avec des fondations existantes limitées. Une surélévation lourde en maçonnerie traditionnelle impose souvent un renforcement des fondations et des murs porteurs. Le choix dépend de la capacité portante réelle du bâtiment, pas seulement du budget disponible.",
            },
            {
              q: "Faut-il quitter la maison pendant les travaux de surélévation ?",
              a: "Ce n'est généralement pas nécessaire pour la structure elle-même, mais certaines phases, notamment la dépose de toiture et la pose de la nouvelle structure, exposent temporairement le logement aux intempéries. Un phasage rigoureux avec bâchage et protections permet le plus souvent de rester sur place, sauf configuration particulière.",
            },
            {
              q: "Une surélévation nécessite-t-elle un permis de construire ?",
              a: "Dans la quasi-totalité des cas, oui, car une surélévation modifie la hauteur et souvent l'aspect extérieur du bâtiment. Le recours à un architecte DPLG partenaire indépendant est également requis dès que la surface de plancher totale après travaux dépasse le seuil légal en vigueur.",
            },
            {
              q: "Quel est le coût d'une surélévation par rapport à une extension au sol ?",
              a: "Le coût au mètre carré d'une surélévation est généralement plus élevé qu'une extension au sol, en raison de la complexité de la dépose de toiture, du renforcement structurel éventuel et des contraintes de levage des matériaux. Elle reste toutefois souvent pertinente quand le terrain ne permet pas d'extension latérale.",
            },
            {
              q: "Comment les démarches auprès de la copropriété sont-elles gérées pour un immeuble ?",
              a: "Pour une surélévation en copropriété, l'accord de l'assemblée générale est généralement requis, avec des règles de majorité spécifiques. Le dossier technique doit être présenté au syndic avant toute décision, en amont même du dépôt de la demande d'autorisation d'urbanisme.",
            },
            {
              q: "Qui garantit la solidité de la structure après surélévation ?",
              a: "La garantie décennale relève de l'entreprise partenaire contractante qui exécute la structure, ainsi que de l'ingénieur ou de l'architecte partenaire indépendant ayant réalisé l'étude. ARCHI PILOTE RÉNOVATION pilote la cohérence du projet sans se substituer à ces responsabilités techniques et assurantielles.",
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
          { href: "/blog/surelevation-etude-des-fondations", label: "Surélévation : l'étude des fondations avant le dessin", sub: "Le chemin des charges jusqu'au sol" },
          { href: "/blog/extension-ou-surelevation-maison", label: "Extension ou surélévation : choisir selon le terrain", sub: "Deux logiques de faisabilité différentes" },
          { href: "/extension-maison", label: "Extension de maison", sub: "L'alternative au sol quand le terrain le permet" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Permis de construire, syndic, assemblée générale" },
          { href: "/renovation-hauts-de-seine-92", label: "Rénovation en Hauts-de-Seine", sub: "Notre zone d'intervention pour ce type de projet" },
        ]}
      />
    </main>
  );
}
