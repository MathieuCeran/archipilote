import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/travaux-perimetre-abf" },
  title: "Travaux en périmètre ABF : avis simple ou conforme | ARCHI PILOTE RÉNOVATION",
  description:
    "Périmètre de protection, abords de monument historique, site patrimonial remarquable : ce qui passe devant l'architecte des Bâtiments de France, ce que change un avis conforme, et comment un dossier se prépare.",
};

/*
  Page créée le 04/09/2026 — territoire « Périmètre ABF et bâti protégé » du dossier T5.
  Aucune page ne couvrait ce sujet, alors que le maillage prévu depuis l'accueil comporte
  un lien « Travaux en périmètre ABF : avis simple ou conforme » sans cible.

  Angle imposé par le dossier : LE DOSSIER, PAS LE GESTE TECHNIQUE. La page traite de
  l'autorisation, de la séquence, de l'arbitrage et du calendrier. La manière de poser une
  menuiserie relève de /savoir-faire-ancien et de /menuiserie-agencement-sur-mesure, où elle
  est déjà traitée.

  Prudence juridique. Aucun article de code, aucun délai en jours, aucune statistique n'est
  cité ici. Les deux seuls faits chiffrables évoqués — la majoration du délai d'instruction
  (« en pratique un mois de plus », formulation déjà employée dans la FAQ de l'accueil) et le
  sens de l'avis selon la protection — sont donnés comme relevant du régime général, avec un
  renvoi explicite au service urbanisme de la commune et à l'architecte partenaire. Le régime
  applicable à une parcelle précise (abords, site patrimonial remarquable, périmètre délimité)
  et le sens de l'avis qui en découle ne se déduisent pas d'une page web : ils se lisent au
  dossier. La page le dit à trois endroits.

  Image. Une seule, chFacadeRavalementVillage.jpeg : immeuble ancien de centre-bourg ceinturé
  d'un échafaudage pour un ravalement, c'est-à-dire exactement le type d'intervention qui
  déclenche l'examen quand le bien est en périmètre protégé. La légende ne prétend PAS que ce
  chantier-là est en périmètre ABF — rien sur la photo ne l'établit. Le fonds
  public/photos/chantiers/ est entièrement employé par ailleurs ; aucune autre photo n'aurait
  été plus juste sur ce sujet, et une page sans photo valait mieux qu'une photo hors sujet.
*/

const SOUMIS = [
  "Remplacement ou modification des menuiseries extérieures : fenêtres, portes-fenêtres, portes d'entrée, matériau, profil, teinte, découpage des vitrages",
  "Volets, persiennes et stores : dépose, remplacement, changement de type ou de coloris",
  "Garde-corps, ferronneries, appuis de fenêtre et éléments rapportés en façade",
  "Ravalement : nature de l'enduit, granulométrie, finition, teinte, traitement des modénatures",
  "Verrière, châssis de toit, lucarne : création, agrandissement, déplacement",
  "Sortie de toiture : souche, conduit, ventilation, extraction, antenne, climatiseur ou pompe à chaleur visible",
  "Couverture : matériau, teinte, forme et pente lorsqu'elles sont modifiées",
  "Devanture, enseigne, store banne et tout élément visible depuis l'espace public",
];

const REPERAGE = [
  "L'annexe des servitudes d'utilité publique du plan local d'urbanisme, consultable auprès de la commune",
  "Le service urbanisme de la mairie, qui répond sur une parcelle précise et dont la réponse fait foi",
  "L'unité départementale de l'architecture et du patrimoine (UDAP), service dont relève l'architecte des Bâtiments de France",
  "Les pièces du bien : acte de vente, note de renseignements d'urbanisme, procès-verbaux d'assemblée générale mentionnant d'anciens dossiers",
  "Les autorisations obtenues par les voisins immédiats, souvent le meilleur indicateur de ce qui est accepté dans la rue",
];

const PREPARATION = [
  {
    title: "Relever l'existant avant de dessiner",
    text: "Sections des montants, dimensions des petits bois, profils des moulures, teintes en place, nature de l'enduit. Un dossier qui décrit précisément ce qui existe est un dossier qui se discute ; un dossier qui ne montre que le projet ne se discute pas.",
  },
  {
    title: "Arrêter matériaux, profils et teintes",
    text: "Le débat porte rarement sur le principe des travaux et presque toujours sur ces trois points. Ils se fixent avant le dépôt, avec des références de teintes identifiables et des coupes de menuiseries lisibles.",
  },
  {
    title: "Justifier la cohérence avec l'existant",
    text: "Ce qui est demandé est la cohérence avec le bâtiment et avec la rue, pas l'imitation systématique. Une note courte qui explique pourquoi tel profil, telle teinte et tel matériau ont été retenus pèse plus que dix pages de photographies.",
  },
  {
    title: "Échanger en amont plutôt que déposer à l'aveugle",
    text: "Un contact préalable avec le service urbanisme, et le cas échéant avec l'UDAP, permet de connaître les points bloquants avant le dépôt. C'est le point sur lequel se joue la différence entre un dossier qui passe et un dossier qui repart.",
  },
  {
    title: "Constituer les pièces graphiques attendues",
    text: "Plans, façades avant et après, insertion depuis l'espace public, photographies de l'environnement proche et lointain. Une pièce manquante suffit à déclencher une demande complémentaire, donc à faire repartir le délai.",
  },
  {
    title: "Suivre l'instruction jusqu'à la décision",
    text: "Le dossier est déposé au nom du propriétaire, puis suivi : accusé de réception, demandes de pièces, sens de l'avis, décision. Nous montons ces dossiers et nous suivons leur instruction ; lorsque la loi impose un architecte, le dossier est signé par ce professionnel, qui intervient sous sa propre responsabilité.",
  },
];

const REFUS = [
  "Lire les motifs plutôt que la conclusion : un refus porte presque toujours sur des points identifiés — un matériau, une teinte, un découpage, un élément rapporté — et non sur l'ensemble du projet",
  "Demander un échange avec le service instructeur pour faire préciser ce qui serait recevable",
  "Reprendre le projet sur les seuls points en cause, puis redéposer un dossier corrigé : c'est la voie la plus courte dans la majorité des situations",
  "Vérifier le sens de l'avis rendu, car il détermine la marge dont dispose l'autorité qui délivre l'autorisation",
  "Un recours administratif reste possible ; sa forme, son destinataire et son délai dépendent du régime applicable et se vérifient au cas par cas auprès du service urbanisme",
  "Ne pas engager les travaux dans l'intervalle : des travaux exécutés sans autorisation en secteur protégé exposent à une remise en état",
];

const FAQ = [
  {
    q: "Comment je sais si mon logement est en périmètre ABF ?",
    a: "La réponse ne se devine pas depuis une carte approximative : elle se demande au service urbanisme de la commune, sur la parcelle précise, et sa réponse fait foi. Les servitudes annexées au plan local d'urbanisme, l'acte de vente et la note de renseignements d'urbanisme donnent une première indication. La proximité visuelle d'une église ou d'un monument est un signal, pas une preuve : un bien peut être concerné sans que le monument soit visible depuis la rue, et l'inverse existe aussi.",
  },
  {
    q: "Je change juste mes fenêtres, est-ce que ça compte vraiment ?",
    a: "Oui, dès lors que l'aspect extérieur change. Le matériau, le profil des montants, le découpage des vitrages et la teinte sont précisément les points regardés. C'est d'ailleurs le motif de refus le plus fréquent sur des travaux que le propriétaire considérait comme un simple remplacement à l'identique. Le point se vérifie au cas par cas auprès du service urbanisme avant de commander les menuiseries.",
  },
  {
    q: "Quelle différence entre un avis simple et un avis conforme ?",
    a: "C'est la distinction qui décide de tout. Un avis simple est consulté puis peut être écarté par l'autorité qui délivre l'autorisation, généralement le maire. Un avis conforme s'impose à elle : un avis conforme défavorable conduit en principe au refus, et un avis conforme assorti de prescriptions les fait entrer dans l'autorisation. Le régime applicable dépend de la protection en cause et se vérifie au cas par cas.",
  },
  {
    q: "Est-ce que ça retarde beaucoup mon chantier ?",
    a: "Le délai d'instruction est majoré par rapport à un dossier ordinaire ; en pratique, il faut compter environ un mois de plus. Ce n'est pas le retard le plus coûteux : celui qui coûte vraiment, c'est la demande de pièces complémentaires ou le refus qui fait repartir le délai une deuxième fois, six semaines avant le démarrage prévu, quand les entreprises ont déjà réservé leurs équipes. La durée exacte dépend du régime applicable et se vérifie auprès du service urbanisme.",
  },
  {
    q: "Est-ce que l'ABF a son mot à dire sur ma cuisine ou ma salle de bain ?",
    a: "En principe non. L'intérieur du logement n'est pas concerné, sauf protection particulière du bâtiment lui-même. Refaire une cuisine, une salle de bain, une électricité ou un sol reste un projet ordinaire. La limite se déplace dès que l'intervention se voit depuis l'espace public — une fenêtre déposée, une grille de ventilation percée en façade, un conduit sorti en toiture — ou dès que le bâtiment fait l'objet d'une protection propre, auquel cas le point se vérifie avant toute démolition.",
  },
  {
    q: "Et si l'avis est défavorable, mon projet est mort ?",
    a: "Rarement. Un avis défavorable porte le plus souvent sur des points précis, pas sur le principe du projet. Faire préciser ce qui serait recevable, reprendre les points en cause et redéposer un dossier corrigé règle la majorité des situations. Un recours administratif reste possible, mais sa forme et son délai dépendent du régime applicable : c'est un point à vérifier au cas par cas, et non à trancher depuis une page web.",
  },
];

export default function TravauxPerimetreAbfPage() {
  const lien = "font-semibold text-orange-deep hover:underline";

  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Périmètre ABF et bâti protégé"
        title="Travaux en périmètre ABF : avis simple ou conforme"
        lead="En périmètre de protection, la faisabilité d'un projet ne se joue pas sur la technique mais sur l'autorisation. Toute modification de l'aspect extérieur passe devant l'architecte des Bâtiments de France, et le sens de son avis décide de ce qui est possible. ARCHI PILOTE RÉNOVATION prend ces dossiers par cet endroit-là : le régime applicable d'abord, le calendrier ensuite, le chiffrage après."
      />

      <MqSection
        title="Ce qu'est un périmètre de protection, et comment savoir si vous êtes dedans"
        lead="Un périmètre de protection n'est pas une zone floue autour d'un monument : c'est une servitude qui s'attache à une parcelle et qui conditionne les autorisations d'urbanisme délivrées sur cette parcelle."
      >
        <MqProse>
          <p>
            Deux situations reviennent le plus souvent. Les <strong>abords d&apos;un monument historique</strong> :
            l&apos;immeuble se trouve dans le périmètre de protection attaché à un édifice classé ou inscrit. Ce périmètre
            peut avoir été délimité spécifiquement, ou correspondre à un rayon défini autour du monument. Le{" "}
            <strong>site patrimonial remarquable</strong> : c&apos;est un secteur entier — un centre ancien, un front de
            fleuve, un quartier — protégé pour sa cohérence, avec ses propres règles écrites.
          </p>
          <p>
            La conséquence pratique est la même dans les deux cas : les travaux qui touchent à l&apos;aspect extérieur
            sont examinés par l&apos;architecte des Bâtiments de France avant que l&apos;autorisation ne soit délivrée.
            Ce qui change d&apos;une situation à l&apos;autre, c&apos;est le poids de cet examen — et c&apos;est tout le
            sujet de la section suivante.
          </p>
          <p>
            Un point mérite d&apos;être dit clairement : <strong>être proche d&apos;un monument ne suffit pas à conclure,
            et ne pas le voir depuis sa fenêtre ne suffit pas à s&apos;en dispenser.</strong> Le seul repère fiable est la
            réponse du service urbanisme de la commune sur la parcelle concernée.
          </p>
        </MqProse>

        <div className="mt-8">
          <h3 className="display t-haut text-ivoire">Où la réponse se trouve</h3>
          <div className="mt-4">
            <MqChecklist cols={1} items={REPERAGE} />
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Ce qui est soumis à l'avis : tout ce qui modifie l'aspect extérieur"
        lead="La règle de lecture est simple, et elle explique la plupart des mauvaises surprises : ce n'est pas l'ampleur des travaux qui déclenche l'examen, c'est le fait que le résultat se voie."
      >
        <MqChecklist cols={1} items={SOUMIS} />
        <p className="mt-8 max-w-2xl text-muted t-sec leading-relaxed">
          {"Un propriétaire qui remplace ses fenêtres à l'identique, dans le même matériau et la même teinte, considère rarement qu'il modifie l'aspect extérieur. Du point de vue du dossier, il le modifie : le profil d'un châssis contemporain n'est pas celui d'un châssis ancien, et c'est ce détail-là qui est regardé. La façon de reproduire une fenêtre ancienne, elle, relève d'un autre sujet — celui du "}
          <Link href="/savoir-faire-ancien" className={lien}>savoir-faire sur le bâti ancien</Link>
          {"."}
        </p>
      </MqSection>

      <MqSection
        kicker="Le point central"
        title="Avis simple, avis conforme : la distinction qui décide de tout"
        lead="Deux régimes portent le même nom dans le langage courant et n'ont pas du tout la même portée. Savoir lequel s'applique à votre parcelle change la manière de monter le dossier, et parfois la faisabilité même du projet."
        wide
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse t-sec">
            <thead>
              <tr>
                <th className="border border-line bg-surface px-4 py-3 text-left font-semibold text-ivoire">&nbsp;</th>
                <th className="border border-line bg-surface px-4 py-3 text-left font-semibold text-ivoire">Avis simple</th>
                <th className="border border-line bg-surface px-4 py-3 text-left font-semibold text-ivoire">Avis conforme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-line px-4 py-3 align-top text-ivoire/85">Portée</td>
                <td className="border border-line px-4 py-3 align-top text-muted">L&apos;autorité qui délivre l&apos;autorisation le consulte, mais peut s&apos;en écarter.</td>
                <td className="border border-line px-4 py-3 align-top text-muted">Il s&apos;impose à l&apos;autorité qui délivre l&apos;autorisation.</td>
              </tr>
              <tr>
                <td className="border border-line px-4 py-3 align-top text-ivoire/85">Si l&apos;avis est défavorable</td>
                <td className="border border-line px-4 py-3 align-top text-muted">L&apos;autorisation reste possible, la décision appartenant à l&apos;autorité compétente.</td>
                <td className="border border-line px-4 py-3 align-top text-muted">La demande est en principe refusée.</td>
              </tr>
              <tr>
                <td className="border border-line px-4 py-3 align-top text-ivoire/85">Si l&apos;avis est assorti de prescriptions</td>
                <td className="border border-line px-4 py-3 align-top text-muted">Elles peuvent être reprises, aménagées ou écartées par l&apos;autorité compétente.</td>
                <td className="border border-line px-4 py-3 align-top text-muted">Elles entrent en principe dans l&apos;autorisation et s&apos;imposent au chantier.</td>
              </tr>
              <tr>
                <td className="border border-line px-4 py-3 align-top text-ivoire/85">Ce que ça change pour le dossier</td>
                <td className="border border-line px-4 py-3 align-top text-muted">L&apos;argumentation se construit d&apos;abord vers le service instructeur de la commune.</td>
                <td className="border border-line px-4 py-3 align-top text-muted">L&apos;essentiel se joue en amont, avec le service du patrimoine, avant le dépôt.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 max-w-3xl">
          <MqProse>
            <p>
              La question à poser en premier n&apos;est donc pas « faut-il un dossier » mais{" "}
              <strong>« l&apos;avis sera-t-il simple ou conforme »</strong>. Dans le premier cas, un désaccord se plaide
              devant la commune. Dans le second, un désaccord se règle avant le dépôt ou ne se règle pas. C&apos;est la
              raison pour laquelle, sur ces dossiers, nous cherchons à connaître le régime applicable avant de dessiner
              quoi que ce soit.
            </p>
            <p>
              Le régime applicable dépend de la protection en cause et n&apos;est pas identique partout : il se vérifie
              au cas par cas auprès du service urbanisme de la commune et, lorsque le projet le justifie, avec
              l&apos;architecte partenaire indépendant qui signera le dossier.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        title="L'effet sur le calendrier"
        lead="Un périmètre de protection ne rend pas un projet impossible. Il le rend plus long, et surtout moins tolérant à l'improvisation."
      >
        <MqProse>
          <p>
            Le délai d&apos;instruction d&apos;une déclaration préalable ou d&apos;un permis de construire est{" "}
            <strong>majoré</strong> lorsque la consultation de l&apos;architecte des Bâtiments de France est requise. En
            pratique, il faut compter environ un mois de plus qu&apos;un dossier ordinaire. La durée exacte dépend du
            régime applicable et de la nature de la demande : elle se vérifie auprès du service urbanisme.
          </p>
          <p>
            Ce mois-là n&apos;est pas le vrai risque. Le vrai risque, c&apos;est le <strong>deuxième</strong> délai :
            celui qui repart après une demande de pièces complémentaires ou un refus, alors que les entreprises ont déjà
            positionné leurs équipes et que la saison est engagée. Un dossier déposé incomplet ne coûte pas quelques
            jours, il coûte un trimestre. C&apos;est pourquoi nous plaçons la question administrative avant le chiffrage
            des finitions, et non l&apos;inverse — la même logique que celle exposée sur la page{" "}
            <Link href="/demarches-administratives-renovation" className={lien}>démarches administratives</Link>.
          </p>
          <p>
            Dernier point de calendrier, souvent oublié en immeuble : lorsque la façade ou la toiture sont des parties
            communes, l&apos;autorisation de la copropriété suit son propre rythme, celui des assemblées générales. Les
            deux calendriers — urbanisme et copropriété — se préparent ensemble, faute de quoi l&apos;un attend
            l&apos;autre pendant une année.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Ce qui n'est pas concerné"
        lead="La confusion la plus répandue consiste à croire qu'un périmètre de protection gèle l'intérieur du logement. Ce n'est en principe pas le cas."
      >
        <MqProse>
          <p>
            L&apos;intérieur du logement n&apos;est en principe <strong>pas concerné</strong> par l&apos;avis de
            l&apos;architecte des Bâtiments de France, <strong>sauf protection particulière du bâtiment</strong>
            {" "}lui-même. Une cuisine, une salle de bain, une reprise d&apos;électricité, un changement de sol, une
            redistribution de cloisons non porteuses restent, de ce point de vue, des projets ordinaires.
          </p>
          <p>
            La limite se déplace dans trois cas. Lorsque l&apos;intervention <strong>se voit depuis
            l&apos;extérieur</strong> : une grille percée en façade, un conduit sorti en toiture, un climatiseur posé sur
            un balcon. Lorsque le bâtiment est <strong>lui-même protégé</strong>, auquel cas des éléments intérieurs
            peuvent l&apos;être aussi, et le point se vérifie impérativement avant toute démolition. Et lorsque le
            projet touche à la <strong>structure ou aux parties communes</strong>, qui relèvent alors du règlement de
            copropriété et, le cas échéant, d&apos;une note d&apos;ingénieur — sujet traité sur la page{" "}
            <Link href="/gros-oeuvre-structure" className={lien}>gros œuvre et structure</Link>.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        kicker="Méthode"
        title="Comment un dossier se prépare pour passer"
        lead="Un dossier en périmètre protégé ne se dépose pas en espérant. Il se construit dans le sens de ce que ces services acceptent habituellement, et il se discute avant d'être déposé."
        wide
      >
        <MqNumbered items={PREPARATION} cols={3} />
      </MqSection>

      <MqSection
        title="En cas d'avis défavorable ou de refus"
        lead="Un refus est rarement définitif. Il est presque toujours motivé sur des points identifiables, et c'est sur ces points que le projet se reprend."
      >
        <MqChecklist cols={1} items={REFUS} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large flex flex-col gap-5">
          <p className="max-w-3xl border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Portée de ces informations.</strong> Les régimes,
            procédures et délais décrits sur cette page sont ceux du régime général. Ils comportent des exceptions
            locales et évoluent. Ils se vérifient au cas par cas auprès du service urbanisme de la commune et de
            l&apos;architecte partenaire indépendant, avant tout engagement. Cette page ne remplace ni une consultation
            du service instructeur, ni l&apos;avis d&apos;un professionnel compétent sur un dossier précis.
          </p>
          <p className="max-w-3xl border border-line bg-surface rounded-none px-5 py-4 t-petit leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION
            structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises
            partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants.
            Les travaux sont exécutés et facturés par les entreprises concernées. Lorsque la loi impose un architecte,
            le dossier est signé par ce professionnel, qui intervient sous sa propre responsabilité.
          </p>
        </div>
      </section>

      <MqSection kicker="Questions fréquentes" title="Ce que les propriétaires demandent avant de déposer">
        <MqFaq items={FAQ} />
      </MqSection>

      <MqCta
        title="Un bien en périmètre protégé ? Commençons par le régime applicable"
        lead="Étude de projet sans engagement, sous 48 heures ouvrées : identification du périmètre, sens de l'avis attendu, pièces à réunir et effet réel sur le calendrier avant tout chiffrage."
      />

      <MqReadNext
        items={[
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Déclaration préalable, permis, syndic, assemblée générale" },
          { href: "/savoir-faire-ancien", label: "Savoir-faire sur le bâti ancien", sub: "Fenêtres à l'identique, moulures, quincaillerie" },
          { href: "/surelevation", label: "Surélévation", sub: "Hauteur, PLU, copropriété, note de structure" },
          { href: "/extension-maison", label: "Extension de maison", sub: "Les seuils qui décident du calendrier" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre et structure", sub: "Façade, mur porteur, reprise de charge" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Les projets où le dossier compte autant que le chantier" },
        ]}
      />
    </main>
  );
}
