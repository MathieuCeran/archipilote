import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/modele-economique-transparence" },
  title: "Rénovation : modèle économique transparent | ARCHI PILOTE RÉNOVATION",
  description:
    "Comprenez qui facture quoi, comment les partenaires interviennent et comment l'achat direct de matériaux au prix fournisseur allège le budget, poste par poste.",
};

const TABLEAU = [
  ["Matériaux (carrelage, sanitaires, menuiseries, peinture)", "Achat direct par le client au prix fournisseur, sur références validées par notre équipe.", "Les marges d'intermédiation sortent du budget"],
  ["Main-d'œuvre des entreprises partenaires", "Facturée directement par l'entreprise partenaire contractante, sans marge intermédiaire ajoutée.", "Prix de marché négocié"],
  ["Chiffrage et mise en concurrence", "Analyse ligne à ligne, comparaison de plusieurs devis sur périmètre identique.", "Doublons entre lots et postes omis identifiés avant signature"],
  ["Pilotage et accompagnement", "Mission distincte, rémunérée séparément, sans être mêlée au prix des matériaux ou des travaux.", "Visibilité totale sur ce qui est payé et pourquoi"],
  ["Architecte DPLG ou ingénieur structure", "Mission indépendante, facturée directement par le professionnel, mobilisée selon le dossier.", "Coût proportionné à la complexité réelle"],
];

const MISSIONS = [
  {
    title: "Mission de pilotage",
    resume: "Suivi d'ensemble du chantier, des décisions et des interfaces entre lots.",
    body: "Rémunérée séparément, formalisée dans un document distinct des devis de travaux.",
  },
  {
    title: "Mission d'accompagnement",
    resume: "Aide ponctuelle sur un point précis : lecture de devis, cadrage, arbitrage technique.",
    body: "Sollicitée à la demande, sans engagement de pilotage complet du chantier.",
  },
  {
    title: "Apport d'affaires",
    resume: "Mise en relation avec une entreprise partenaire ou un professionnel indépendant.",
    body: "Identifiée comme telle lorsqu'elle existe, sans être dissimulée dans un autre poste de facturation.",
  },
];

const FAQ = [
  {
    q: "Qui facture réellement les travaux ?",
    a: "Les entreprises partenaires contractantes retenues pour le projet. Elles restent responsables de leurs prestations, de leurs assurances et de leurs obligations légales.",
  },
  {
    q: "Quel est le rôle exact d'ARCHI PILOTE RÉNOVATION dans ce modèle ?",
    a: "La marque, exploitée par IA RENOV, structure le projet, analyse les devis, aide à la sélection des entreprises, pilote l'ensemble du chantier et, selon les dossiers, exerce une mission d'accompagnement ou d'apport d'affaires clairement distinguée.",
  },
  {
    q: "Pourquoi l'achat direct de matériaux par le client fait-il baisser le budget ?",
    a: "Parce qu'il supprime les marges en cascade appliquées lorsque les matériaux transitent par plusieurs intermédiaires avant d'arriver sur le chantier. Le client paie le prix fournisseur, sur des références validées techniquement.",
  },
  {
    q: "Comment sont distinguées les missions de pilotage, d'accompagnement et d'apport d'affaires ?",
    a: "Chaque mission fait l'objet d'un périmètre écrit et d'une rémunération identifiée séparément, avant tout engagement. Le client sait toujours ce qu'il paie et à quel titre.",
  },
  {
    q: "L'économie est-elle garantie sur tous les projets ?",
    a: "Non, et aucune économie n'est annoncée à l'avance. Ce qui est garanti, c'est la méthode : achat des matériaux au prix fournisseur sur les postes qui s'y prêtent, mise en concurrence documentée et chiffrage relu ligne à ligne. L'écart réel se constate devis en main et dépend de la nature du bien et des postes concernés.",
  },
  {
    q: "Que se passe-t-il si un poste dépasse le budget prévu ?",
    a: "L'écart est documenté, expliqué et soumis à validation avant exécution. La transparence du modèle économique vise justement à rendre ces écarts visibles avant qu'ils ne deviennent un sujet de litige.",
  },
];

export default function ModeleEconomiquePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Modèle économique"
        title="Comprendre qui facture quoi"
        lead="Une rénovation devient opaque lorsque le client ne sait plus qui facture le pilotage, qui exécute les travaux, qui fournit les matériaux et où se loge la marge. Notre modèle, inspiré du secteur des foncières, rend ces flux lisibles : achat des matériaux en direct par le client, missions de pilotage, d'accompagnement et d'apport d'affaires distinguées, et travaux exécutés et facturés par les entreprises partenaires contractantes elles-mêmes."
      />

      <div className="rf-wrap mq-mesure--large pb-4 mq-planche-ouverture">
          <MqFig entier
            src="/photos/pedagogie/07-modele-economique.jpeg"
            alt="Schéma pédagogique des trois flux de facturation : honoraires de pilotage, travaux facturés par les entreprises partenaires, matériaux achetés en direct par le client"
            caption="Schéma pédagogique : trois flux de facturation distincts et séparés, chacun rattaché à un interlocuteur identifiable."
            ratio="aspect-square"
          />
      </div>

      <MqSection
        kicker="Le problème posé"
        title="Pourquoi les budgets de rénovation deviennent opaques"
        lead="Dans un montage classique, un artisan sous-traite parfois une partie du chantier, les matériaux transitent par plusieurs intermédiaires et la marge de pilotage se dilue dans le prix global. Le client ne voit plus ce qu'il paie réellement."
      >
        <div className="flex flex-col gap-2 max-w-2xl">
          <h3 className="display t-haut text-ivoire">Trois flux financiers à distinguer systématiquement</h3>
          <p className="text-muted t-sec leading-relaxed">
            {"Matériaux, main-d'œuvre et pilotage ne doivent jamais être fondus dans un seul chiffre global."}
          </p>
          <p className="t-sec text-ivoire/85 leading-relaxed">
            {"Un devis global qui mélange fourniture et pose empêche toute vérification. Le client ne peut ni comparer un prix de matériau au marché, ni évaluer si le coût de main-d'œuvre est cohérent avec la prestation réellement fournie."}
          </p>
          <p className="t-sec text-ivoire/85 leading-relaxed">
            {"Notre approche sépare ces trois flux dès le chiffrage initial, afin que chaque ligne du budget puisse être expliquée et, si besoin, discutée séparément."}
          </p>
        </div>
      </MqSection>

      <MqSection
        kicker="Les entreprises contractantes"
        title="Qui exécute et qui facture réellement les travaux"
        lead="Les travaux sont exécutés et facturés par les entreprises partenaires contractantes retenues pour le projet. Elles restent responsables de leurs prestations, de leurs assurances et de leurs obligations légales, notamment la garantie décennale et la responsabilité civile professionnelle."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Le rôle d&apos;ARCHI PILOTE RÉNOVATION</h3>
            <p className="text-muted t-sec leading-relaxed">
              {"Structuration du projet, analyse du chiffrage, aide à la sélection des entreprises, pilotage d'ensemble et, selon les dossiers, apport d'affaires clairement distingué du pilotage."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Le rôle des entreprises partenaires</h3>
            <p className="text-muted t-sec leading-relaxed">
              {"Exécution technique des lots, facturation directe de leur prestation, engagement de leurs propres assurances et garanties."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display t-haut text-ivoire">Le rôle des professionnels indépendants</h3>
            <p className="text-muted t-sec leading-relaxed">
              {"Architectes DPLG et ingénieurs structure interviennent, lorsque nécessaire, sous leur propre responsabilité professionnelle et facturent leur mission séparément."}
            </p>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Les économies expliquées poste par poste"
        title="D'où vient l'économie, poste par poste"
        lead="L'économie ne repose pas sur une remise commerciale globale, mais sur l'addition de plusieurs mécanismes vérifiables, détaillés poste par poste dans le tableau suivant."
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div
              role="img"
              aria-label="Comparaison entre achat traditionnel et achat direct des matériaux."
              className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-line rounded-none bg-surface p-6"
            >
              <div className="flex flex-col gap-3">
                <span className="mq-mention">Achat classique</span>
                <div className="flex flex-col gap-1.5">
                  {["Fabricant", "Grossiste", "Négoce ou distributeur", "Entreprise", "Client"].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="flex-1 border border-line rounded-none px-3 py-2 t-petit text-ivoire/85">{step}</span>
                      {i < arr.length - 1 && <span className="text-muted t-micro whitespace-nowrap">+ marge ↓</span>}
                    </div>
                  ))}
                </div>
                <p className="text-muted t-mini leading-relaxed">
                  {"Chaque intermédiaire ajoute sa propre marge avant que le matériau n'atteigne le chantier."}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="mq-mention mq-mention--accent">Achat direct</span>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="flex-1 border border-orange-deep/40 rounded-none px-3 py-2 t-petit text-ivoire/85">
                      {"Fournisseur (ex. Saint-Gobain, Guimier)"}
                    </span>
                    <span className="text-orange-deep t-micro whitespace-nowrap">prix fournisseur ↓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex-1 border border-orange-deep/40 rounded-none px-3 py-2 t-petit text-ivoire/85">Client</span>
                  </div>
                </div>
                <p className="text-muted t-mini leading-relaxed">
                  {"Le client règle directement le fournisseur, sur des références validées techniquement par l'entreprise partenaire."}
                </p>
              </div>
            </div>
            <p className="text-muted t-petit leading-relaxed max-w-2xl">
              {"Comparaison de principe entre un circuit d'achat classique et l'achat direct par le client : c'est le nombre d'intermédiaires qui diminue, pas un pourcentage garanti sur chaque projet."}
            </p>
          </div>
          <div className="overflow-x-auto border border-line rounded-none bg-surface">
            <table className="w-full text-left t-sec">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-4 py-3 font-semibold text-ivoire">Poste de dépense</th>
                  <th className="px-4 py-3 font-semibold text-ivoire">Circuit de facturation</th>
                  <th className="px-4 py-3 font-semibold text-ivoire">Ce que cela change pour le budget</th>
                </tr>
              </thead>
              <tbody>
                {TABLEAU.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-b-0 align-top">
                    <td className="px-4 py-3 text-ivoire font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-ivoire/85">{row[1]}</td>
                    <td className="px-4 py-3 text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Les effets décrits ci-dessus dépendent de la nature du bien, des postes concernés et du niveau de finition retenu. Ils se constatent devis en main, ligne à ligne, et ne font l'objet d'aucune promesse chiffrée en amont."}
          </p>
        </div>
      </MqSection>

      <MqSection kicker="Achat direct" title="Le mécanisme central : le client achète ses matériaux">
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/chantiers/chPlacagesNoyerEnAttente.jpeg"
            alt="Exemple anonymisé d'un achat direct de matériaux."
            caption="Panneaux et chants en placage noyer livrés et rangés contre le mur d'une pièce ancienne, sols protégés, avant mise en œuvre par le menuisier. Chantier réel des équipes partenaires."
          />
          <MqProse>
            <p>
              {"Les matériaux techniques proviennent du groupe Saint-Gobain et sont retirés à La Plateforme du Bâtiment, où le client peut disposer de son propre compte. Les moulures, corniches et rosaces sont commandées auprès de la maison Guimier, sur relevé du profil existant. Dans les deux cas, la facture est au nom du client et aucune marge n'est prise sur la fourniture."}
            </p>
          </MqProse>
          <MqChecklist
            cols={1}
            items={[
              "Le client règle directement les fournisseurs, sur des références validées techniquement.",
              "Les marges en cascade appliquées par des intermédiaires successifs disparaissent du budget.",
              "Les factures restent au nom du client, ce qui facilite la revente ou une éventuelle garantie.",
              "Le niveau de gamme reste maîtrisé, car les références sont choisies avec le client, pas imposées.",
              "Les délais de livraison sont suivis pour éviter qu'un matériau manquant n'immobilise une équipe.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Services inclus"
        /* 06/09 : l'intitulé revendiquait encore une flotte en propre alors que le corps du
           texte avait été corrigé la veille. Une marque qui n'exécute aucun lot ne détient
           pas de moyens logistiques : ce qui est vrai, c'est qu'elle ORGANISE le retrait et
           la livraison, et ne les facture pas séparément. */
        title="Logistique des matériaux et nettoyage de fin de chantier : deux services que nous ne facturons pas à part"
        lead="L'achat en direct n'a de sens que si la logistique suit, et une rénovation haut de gamme ne se livre pas poussiéreuse."
        wide
      >
        <div className="flex flex-col gap-8">
          <div className="max-w-4xl">
            <MqProse>
              <p>
                {"Faire acheter le client en direct crée une contrainte logistique réelle : commandes dispersées chez plusieurs fournisseurs, créneaux de retrait, palettes volumineuses et accès parisiens difficiles. Nous l'absorbons en organisant les retraits et les livraisons, avec le transporteur ou l'entreprise concernée."}
              </p>
              <p>
                {"Nos équipes retirent les commandes chez les fournisseurs et les livrent sur le chantier au moment utile, ce qui évite le stockage prématuré, la casse, les vols et les immobilisations d'équipe. Le client n'a ni location d'utilitaire, ni frais de livraison à supporter."}
              </p>
              <p>
                {"À la fin du chantier, nous faisons intervenir une équipe de nettoyage professionnelle, un standard hérité de notre expérience avec des conciergeries de location courte durée : vitrages, sanitaires, sols, plinthes, intérieurs de placards et menuiseries. Le logement est remis prêt à vivre, pas seulement prêt à réceptionner."}
              </p>
            </MqProse>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <MqFig
              src="/photos/maquette/flotte-camions-retrait-materiaux.jpg"
              alt="Camions et fourgons utilitaires chargeant des palettes de carrelage et des colis de cuisine dans un dépôt de matériaux"
              caption="Illustration de référence, hors chantier documenté : chargement de matériaux sur une plateforme de distribution. Les enlèvements et livraisons des commandes achetées en direct par le client sont organisés avec le fournisseur et l'entreprise partenaire."
            />
            <MqFig
              src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
              alt="Entrepôt de matériaux de construction avec palettes de plaques de plâtre, laine minérale et sacs d'enduit"
              caption="Illustration de référence, hors chantier documenté : dépôt de matériaux de second œuvre (plaques de plâtre, laines, sacs d'enduit). Les matériaux achetés en direct sont facturés au client par le fournisseur, sans marge d'intermédiaire."
            />
            <MqFig
              src="/photos/maquette/nettoyage-fin-de-chantier.jpg"
              alt="Équipe de nettoyage professionnelle en fin de chantier dans un appartement haussmannien rénové au parquet point de Hongrie"
              caption="Illustration de référence, hors chantier documenté : nettoyage de fin de chantier d'un appartement ancien. Le logement est remis prêt à vivre, pas seulement prêt à réceptionner."
            />
          </div>
        </div>
      </MqSection>

      <MqSection kicker="Distinction des missions" title="Pilotage, accompagnement et apport d'affaires ne se confondent jamais">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {MISSIONS.map((m) => (
            <div key={m.title} className="flex flex-col gap-2">
              <h3 className="display t-haut text-ivoire">{m.title}</h3>
              <p className="text-muted t-sec leading-relaxed">{m.resume}</p>
              <p className="t-sec text-ivoire/85 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur le modèle économique">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="rf-wrap mq-mesure--large">
          <p className="text-muted t-petit leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqCta
        title="Demandez une lecture transparente de votre budget"
        lead="Nous détaillons chaque poste avant tout engagement, matériaux compris."
      />

      <MqReadNext
        items={[
          { href: "/notre-methode", label: "Notre méthode", sub: "Comment le chiffrage est construit" },
          { href: "/parcours-expertise", label: "Parcours & expertise", sub: "L'origine de la rigueur de chiffrage" },
          { href: "/charte-qualite", label: "Charte qualité", sub: "Nos engagements vérifiables" },
        ]}
      />

      <section className="pb-16">
        <div className="rf-wrap mq-mesure--large">
          <p className="t-petit">
            <Link href="/clinique-du-devis" className="font-semibold text-orange-deep underline underline-offset-4">
              Faire analyser un devis existant
            </Link>
            {" · "}
            <Link href="/contact" className="font-semibold text-orange-deep underline underline-offset-4">
              Décrire mon projet
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
