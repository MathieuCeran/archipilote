import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqNumbered, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/expertise-carrelage-zellige-travertin" },
  title: "Zellige, travertin et joint époxy : notre expertise pose et étanchéité | ARCHI PILOTE RÉNOVATION",
  description:
    "Étanchéité sous carrelage, natte et bandes d'angle, pose du zellige, du travertin et joint époxy : étapes détaillées, schémas techniques, prix constatés et galeries avant / après en Île-de-France.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="SAVOIR-FAIRE TECHNIQUE"
        title="Zellige, travertin et joint époxy : l'expertise se joue sous le carrelage"
        lead="Un revêtement haut de gamme ne tient que par ce qui se trouve dessous : support dressé, primaire d'accroche, natte d'étanchéité continue, bandes de renfort en angle et pente maîtrisée. ARCHI PILOTE RÉNOVATION photographie et fait valider chacune de ces étapes avant recouvrement, puis fait poser le zellige, le travertin et les joints époxy par des entreprises partenaires contractantes, sous notre pilotage et notre accompagnement de A à Z."
      />

      <MqSection
        kicker="LE PRINCIPE"
        title="L'étanchéité est un ouvrage, le joint n'est qu'une finition"
        lead="La natte d'étanchéité et ses bandes d'angle assurent la barrière d'eau ; le joint époxy assure la résistance aux taches et à l'entretien."
      >
        <MqProse>
          <p>
            La grande majorité des désordres en pièce d'eau vient d'une étanchéité absente ou interrompue, jamais
            d'un carreau mal choisi. Une natte posée en continuité entre le sol et les murs, renforcée dans tous
            les angles et aux traversées de canalisation, est la seule barrière durable.
          </p>
          <p>
            Le joint époxy intervient ensuite : il ne s'imprègne pas d'eau, ne noircit pas, supporte les produits
            d'entretien et convient particulièrement aux douches, aux crédences de cuisine et aux plans de travail
            carrelés.
          </p>
          <p>
            Sa pose demande de la méthode : nettoyage immédiat à l'éponge et à l'eau claire, faute de quoi un
            voile époxy figé reste en surface et devient très difficile à retirer.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-etancheite-joint-epoxy.jpg"
            alt="Coupe pédagogique d'une douche à l'italienne : support, primaire d'accroche, natte d'étanchéité, bande d'angle de renfort, colle, zellige et joint époxy"
            caption="Composition d'une douche à l'italienne, du support au joint époxy : chaque couche a une fonction, et l'étanchéité se joue sous le carrelage, jamais dans le joint seul."
          />
        </div>
      </MqSection>

      <MqSection
        kicker="MÉTHODE PÉDAGOGIQUE"
        title="Les six étapes d'une pose maîtrisée, expliquées au client"
        lead="Chaque étape est photographiée et transmise dans le suivi quotidien : le client comprend ce qu'il paie et ce qui disparaît sous la finition."
      >
        <MqNumbered
          items={[
            {
              title: "Diagnostic et préparation du support",
              text: "Contrôle de la planéité au réglet, reprise des faux aplombs, ragréage ou enduit d'aplanissement. Aucun revêtement fin n'est posé sur un support non dressé : les écarts se lisent ensuite en lumière rasante.",
            },
            {
              title: "Réseaux, pentes et siphon",
              text: "Positionnement de l'évacuation, forme de pente de 1 à 2 % vers le siphon, contrôle au niveau laser et essai de mise en pression des alimentations avant fermeture.",
            },
            {
              title: "Primaire d'accroche et natte d'étanchéité",
              text: "Application du primaire, puis natte d'étanchéité continue entre sol et murs, avec bandes de renfort dans tous les angles et manchons aux traversées. Étape photographiée et datée avant recouvrement.",
            },
            {
              title: "Calepinage tracé à sec",
              text: "Le calepinage est tracé avant la première colle : centrage du dessin, position des coupes, alignement sur les points de vue principaux. C'est là que se décide la qualité perçue du résultat.",
            },
            {
              title: "Pose : zellige, travertin ou grand format",
              text: "Zellige posé au peigne fin après mélange des boîtes ; travertin en double encollage pour supprimer les vides ; grands formats découpés en atelier pour limiter les épaufrures.",
            },
            {
              title: "Joint époxy et protection",
              text: "Joint époxy dans les zones humides et les crédences de cuisine pour sa résistance aux taches et aux produits d'entretien, puis hydrofuge sur les pierres poreuses avant mise en service.",
            },
          ]}
        />
        <div className="mt-10 max-w-2xl">
          <MqFig
            src="/photos/maquette/chantier-pose-zellige-credence.jpg"
            alt="Carreleur encollant au peigne le haut d'une crédence en carreaux émaillés vert foncé, croisillons de calage en place et boîtes de carreaux ouvertes sur le plan de travail"
            caption="Mélange des boîtes et pose au peigne : le carreleur répartit les nuances avant l'encollage final. Carreaux émaillés de série, calés aux croisillons — pas un zellige artisanal, qui se pose sans croisillon. Image d'illustration."
            ratio="aspect-[10/7]"
          />
          {/*
            À PHOTOGRAPHIER (chantiers réels, pas d'infographie générée ici — le client
            demande six détails réels pour cette section) : quatre gros plans à compléter
            en plus du cliché ci-dessus (mélange des boîtes + pose) —
            1) support dressé au réglet avant pose,
            2) calepinage tracé à sec avec croix ou taquets de calage,
            3) application du joint époxy à la raclette caoutchouc,
            4) nettoyage à l'éponge humide juste après jointoiement, avant voile figé.
            Les deux schémas génériques précédemment ici
            (/photos/maquette/schema-pose-zellige-etapes.jpg et schema-pose-travertin.jpg)
            ont été retirés : la brief demande du RÉEL pour cette section, pas des schémas.
          */}
        </div>
      </MqSection>

      <MqSection
        kicker="ZELLIGE"
        title="Le zellige : une matière vivante qui se prépare avant de se poser"
        lead="Ses nuances et ses variations d'épaisseur sont un parti pris, à condition d'être réparties volontairement."
      >
        <MqChecklist
          items={[
            "Support dressé et sec : les écarts d'épaisseur du zellige deviennent visibles en lumière rasante sur un mur non plan.",
            "Mélange systématique de plusieurs boîtes pour répartir les nuances de teinte sur toute la surface.",
            "Calepinage tracé à sec : vertical, horizontal, en chevrons ou en écaille, décidé avant la commande.",
            "Taux de casse de 10 à 15 % à prévoir : un produit artisanal se coupe moins docilement qu'un carreau industriel.",
            "Joint fin de 1 à 2 mm, en époxy dans les zones humides, nettoyé immédiatement après tirage.",
          ]}
        />
        {/*
          Emplacement retiré le 05/09/2026 (doublon dans la même page + légende fausse).

          chantier-pose-zellige-credence.jpg apparaissait TROIS FOIS sur cette seule page
          (section pose, ici, et galerie technique). C'est la répétition signalée par le client,
          à l'échelle d'une page. Une seule occurrence est conservée, plus haut.
          La légende était en outre fausse : ouverture du fichier, les carreaux sont des
          carreaux émaillés de série, réguliers, posés aux CROISILLONS. Un zellige est un
          carreau artisanal irrégulier, qui se pose précisément sans croisillon. Parler de
          « pose de zellige » devant des croisillons décrit l'inverse de ce qu'on voit.
        */}
      </MqSection>

      <MqSection
        kicker="TRAVERTIN ET PIERRE NATURELLE"
        title="Le travertin : pierre poreuse, mise en œuvre exigeante"
        lead="Sans hydrofuge, une pierre naturelle se tache durablement dès les premières semaines d'usage."
      >
        <MqChecklist
          items={[
            "Chape ragréée et parfaitement plane : un grand format ne pardonne aucun défaut de support.",
            "Double encollage systématique pour supprimer les vides sous la dalle et éviter les cassures ponctuelles.",
            "Joint minéral de 2 à 3 mm adapté à la pierre, jamais un joint standard coloré.",
            "Traitement hydrofuge appliqué avant la mise en service, puis renouvelé selon l'usage de la pièce.",
            "Découpes de grand format réalisées en atelier pour limiter les épaufrures sur les arêtes visibles.",
          ]}
        />
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/chantier-nappe-etancheite-douche.jpg"
            alt="Salle d'eau avant carrelage : étanchéité liquide verte appliquée en plein sur les murs et le sol, bandes de renfort dans tous les angles, siphon de sol au centre"
            caption="Étanchéité sous carrelage, avant pose du travertin ou du zellige : résine appliquée en plein sur les murs et le sol, bandes de renfort dans tous les angles et autour du siphon de sol. Image d'illustration."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="GALERIE TECHNIQUE"
        title="Matières et finitions de pièce d'eau"
        lead="Une photo de chantier des équipes partenaires et deux images d'illustration, pour situer le rendu des matières dont parlent les sections précédentes."
        wide
      >
        {/*
          Rangée revue le 05/09/2026.

          1. Le chapô annonçait « photographies issues de chantiers réellement pilotés, prises
             aux mêmes points de vue avant et après ». Sur les cinq images, QUATRE venaient de
             /photos/maquette/ (banque d'illustrations) et AUCUNE paire n'était prise au même
             point de vue avant/après. Le chapô est réécrit pour dire ce que la rangée est.
          2. Deux emplacements sont retirés : chantier-nappe-etancheite-douche.jpg et
             chantier-pose-zellige-credence.jpg figuraient déjà l'un et l'autre plus haut dans
             la page. Ils sont conservés une seule fois, dans les sections dont ils sont le
             sujet.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <MqFig
            src="/photos/chantiers/chSdbVasquesPoseMeubleBeige.jpeg"
            alt="Salle d'eau en cours de finition : meubles hauts et bas en MDF brut, plan blanc et deux vasques rondes posées, faïence et sol en grand format beige, câble électrique encore pendant"
            caption="Salle d'eau en cours de finition : faïence et sol en grand format beige déjà posés, meubles encore en MDF brut avant peinture, vasques posées et câble en attente de raccordement. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/maquette/tendance-travertin-salle-bain.jpg"
            alt="Salle d'eau beige : plan-vasque monolithe taillé dans la pierre, murs en enduit minéral ton pierre sans joint apparent, robinetterie et barre de laiton"
            caption="Pierre claire en salle d'eau : plan-vasque monolithe taillé dans la masse, murs en enduit minéral ton pierre et robinetterie en laiton. Une pierre poreuse exige un hydrofuge avant mise en service. Image d'illustration."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/maquette/tendance-zellige-credence.jpg"
            alt="Crédence de cuisine en carreaux émaillés vert d'eau à surface ondulée, posés verticalement, plan de travail en pierre claire et façades en bois clair"
            caption="Carreaux émaillés à surface ondulée en crédence : irrégularités de cuisson assumées, calepinage vertical et joint fin sur support parfaitement dressé. Image d'illustration."
            ratio="aspect-[4/3]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="SUR LE CHANTIER"
        title="Ce que la finition recouvre"
        lead="L'ouvrage caché explique la durabilité et une bonne part du budget. Il n'est visible qu'avant la pose du revêtement."
        wide
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display t-fort text-ivoire">Cabine de douche en fin de pose</h3>
            <p className="text-muted t-sec leading-relaxed mt-2 max-w-2xl">
              Cabine d&apos;angle carrelée en grand format effet pierre, parois coulissantes à profilés noirs,
              photographiée en fin de pose : la protection du siphon est encore en place.
            </p>
            {/*
              Faux avant/après corrigé le 05/09/2026.

              Cette paire était présentée comme « avant livraison » / « après livraison » de la
              MÊME cabine. Ouverture des deux fichiers : c'est bien la même douche, mais les DEUX
              images montrent le même état de fin de pose — protection de bonde encore collée,
              joint de plafond non repris, vitrages non nettoyés. Il n'y a pas de « après
              livraison » à montrer, seulement une vue large et un gros plan de la robinetterie.
              Le gros plan (salle-eau-douche-italienne.jpg) est retiré : il n'apporte que la
              robinetterie, déjà lisible sur la vue large, et servait uniquement à fabriquer une
              seconde moitié à un avant/après qui n'existe pas.

              À FOURNIR PAR LE CLIENT : la vraie photo de livraison de cette cabine (même angle,
              protections retirées, vitrages nettoyés) pour reconstituer un avant/après honnête.
            */}
            <div className="mt-5 max-w-sm">
              <MqFig
                src="/photos/maquette/salle-eau-cabine-douche-angle.jpg"
                alt="Cabine de douche d'angle à parois coulissantes et profilés noirs, murs carrelés en grand format effet pierre beige, receveur blanc dont la bonde est encore protégée"
                caption="Fin de pose : cabine d'angle à parois coulissantes noires, murs en carrelage grand format effet pierre, colonne de douche raccordée ; la protection de bonde est encore en place sur le receveur. Image d'illustration."
                ratio="aspect-[1/2]"
              />
            </div>
          </div>
        </div>
        {/*
          Les trois comparatifs précédemment ici (extension jardin, surélévation, trémie
          d'escalier) provenaient visiblement d'une autre page (gros œuvre / extension) et
          n'avaient aucun rapport avec le carrelage, le zellige ou l'étanchéité : retirés
          conformément au diagnostic client ("supprimer les images hors sujet").
          Limite honnête : la paire ci-dessus montre la même cabine de douche à deux
          instants (juste posée → livrée), pas littéralement "avant étanchéité" (nappe à nu)
          → "après livraison" comme décrit dans le brief idéal — aucune photo de nappe
          d'étanchéité et de salle d'eau livrée montrant avec certitude LA MÊME pièce n'a
          été trouvée dans la bibliothèque actuelle. À vérifier avec Yanis / le client si un
          couple plus littéral existe ailleurs.
        */}
      </MqSection>

      <MqSection
        kicker="MODÈLE ÉCONOMIQUE"
        title="Carrelage, pierre et robinetterie : achetés en direct par le client"
        lead="Ces postes ne relèvent pas de la garantie décennale de pose : le client achète au prix fournisseur, sans marge intermédiaire."
      >
        <MqProse>
          <p>
            Le carrelage, le zellige, la pierre naturelle, la robinetterie et les meubles de salle d'eau sont
            achetés en direct par le client, sur des références que nous validons techniquement avant commande :
            format, épaisseur, classement d'usage, compatibilité avec le support et avec le système d'étanchéité
            retenu.
          </p>
          <p>
            Nous organisons le retrait des commandes chez les fournisseurs et leur livraison sur le chantier au
            moment utile, ce qui évite le stockage prématuré, la casse et les immobilisations d'équipe. Aucune
            marge n'est prise sur la fourniture.
          </p>
        </MqProse>
        {/*
          Emplacement retiré le 05/09/2026 (légende contraire au rôle d'ARCHI PILOTE +
          surexposition).

          flotte-camions-retrait-materiaux.jpg était légendée « notre flotte de camions ».
          ARCHI PILOTE RÉNOVATION PILOTE, elle n'exécute pas : les travaux et la logistique
          sont assurés par les entreprises partenaires contractantes, comme le rappelle
          l'encadré « Rôle et responsabilités » juste en dessous. Présenter une image de banque
          comme « notre flotte » contredit frontalement cette mention. L'image apparaissait par
          ailleurs sur TROIS pages (celle-ci, /menuiserie-agencement-sur-mesure,
          /modele-economique-transparence).

          À ARBITRER AVEC LE CLIENT : le paragraphe ci-dessus dit lui aussi « notre flotte de
          camions retire les commandes chez les fournisseurs ». Si la logistique est bien celle
          des entreprises partenaires, la formulation du texte est à reprendre également.
        */}
        <p className="text-muted t-petit leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Zellige, travertin, joint époxy : les questions posées">
        <MqFaq
          items={[
            {
              q: "Pourquoi utiliser un joint époxy plutôt qu'un joint ciment ?",
              a: "Le joint époxy ne se charge pas d'eau, résiste aux produits d'entretien et ne se salit pas comme un joint ciment. Il est recommandé en douche, en crédence de cuisine et sur les plans exposés. Sa mise en œuvre est plus technique : le nettoyage doit être fait immédiatement, sinon le voile époxy reste sur le carreau.",
            },
            {
              q: "Le joint époxy remplace-t-il l'étanchéité ?",
              a: "Non, jamais. L'étanchéité est assurée par la natte posée sous le carrelage, avec ses bandes d'angle. Le joint époxy est une finition résistante, pas une barrière d'eau. Une douche sans natte d'étanchéité finira par créer un désordre, quelle que soit la qualité du joint.",
            },
            {
              q: "Combien coûte la pose de zellige ou de travertin en Île-de-France ?",
              a: "Fourchettes constatées : 140 à 260 euros le mètre carré posé pour le zellige, 180 à 320 euros pour le travertin, selon le format, le calepinage et l'état du support. L'étanchéité, le ragréage et le joint époxy se chiffrent séparément.",
            },
            {
              q: "Peut-on acheter soi-même le carrelage et la pierre ?",
              a: "Oui, c'est même notre recommandation : le carrelage, la pierre et la robinetterie ne relèvent pas de la garantie décennale de pose. Le client achète en direct, sur des références validées techniquement par notre équipe, et nous organisons le retrait de la commande pour la livrer sur le chantier.",
            },
            {
              q: "Quel délai prévoir pour une salle d'eau complète ?",
              a: "Trois à quatre semaines en moyenne pour une salle d'eau complète en appartement ancien : dépose, réseaux, étanchéité et temps de séchage, pose, joints, puis pose des équipements et mise en service.",
            },
          ]}
        />
      </MqSection>

      <MqReadNext
        items={[
          { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie et agencement sur mesure", sub: "Dressings, cuisines et façades sur mesure" },
          { href: "/tendances-materiaux-francais", label: "Tendances & matières", sub: "Travertin, zellige, béton ciré" },
          { href: "/achat-direct-materiaux", label: "Achat direct des matériaux", sub: "Postes hors décennale, au prix fournisseur" },
          { href: "/realisations", label: "Réalisations", sub: "Comparatifs avant / après documentés" },
        ]}
      />

      <MqCta
        title="Un projet de salle d'eau ou de crédence en matière noble ?"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : faisabilité du support, système d'étanchéité, calepinage et budget réaliste."
      />
    </main>
  );
}
