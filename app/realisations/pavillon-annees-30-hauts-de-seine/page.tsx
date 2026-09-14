import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { CtaFinal } from "../../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/realisations/pavillon-annees-30-hauts-de-seine" },
  title: "Pavillon des années 30, Hauts-de-Seine — Rénovation complète | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète d'un pavillon de 118 m² avant emménagement : douze lots pilotés en 19 semaines, calendrier imposé par une date de fin de bail.",
  robots: { index: false, follow: true },
};

export default function EtudeDeCasPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisation — visuel d'illustration"
        segments={[{ text: "Pavillon des années 30," }, { text: "Hauts-de-Seine.", serif: true, gradient: true }]}
        lead="Rénovation complète avant emménagement, 118 m², douze lots pilotés en 19 semaines."
      />

      <section className="relative pb-6">
        <div className="rf-wrap mq-mesure--large">
          {/* 05/09 — IMAGE REMPLACÉE. Le visuel affiché ici était PHOTOS.chantierIsolation,
              c'est-à-dire chIsolationCombles.jpeg : elle ne montre PAS une rénovation mais une
              CONSTRUCTION NEUVE — murs en briques monomur rouges encore nues, charpente neuve,
              aucun ouvrage existant — alors que la page raconte la rénovation complète d'un pavillon
              des années 30. L'alt affirmait de surcroît « pavillon en rénovation ». La clé employée
              était par ailleurs un alias (chantierIsolation) qui masquait le fait que le même fichier
              était affiché sur quatre pages du site. Remplacée par une vue de façade de pavillon
              rénové, cohérente avec le sujet, déjà signalée comme visuel d'illustration par la
              mention qui suit. Le fichier est en 1264x848 : le cadre 16/9 ne le recadre presque pas,
              alors que l'image précédente, en 1050x1400 (portrait), y perdait les deux tiers de sa
              hauteur. */}
          <div className="relative aspect-[3/2] rounded-none overflow-hidden card-e mb-4">
            <img src="/photos/maquette/pavillon-facade-apres.jpg" alt="Façade de pavillon rénovée : enduit clair, menuiseries anthracite, garde-corps et perron refaits" className="absolute inset-0 size-full object-cover" />
          </div>
          <p className="text-center mq-mention">Visuel d&apos;illustration — nouvelle marque, premiers chantiers à venir</p>
        </div>
      </section>

      <article className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure flex flex-col gap-7 text-ivoire/85 t-base leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">La situation</h2>
            <p>
              118 m² sur deux niveaux plus combles, acquis en l&apos;état, aucun travaux depuis 1978. Électricité en
              fils sous moulures, chaudière fioul, aucune isolation, salle de bain unique à l&apos;étage. Les
              propriétaires emménageaient dans cinq mois, date de fin de bail non négociable.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">La contrainte</h2>
            <p>
              La contrainte n&apos;était pas technique, elle était calendaire. Cinq mois pour douze lots signifie
              que rien ne peut prendre de retard sans décaler tout le reste. Le point critique était le délai de
              livraison des menuiseries extérieures sur mesure : onze semaines annoncées. Elles ont donc été
              commandées en semaine deux, avant même que la dépose des anciennes soit planifiée.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Ce qui a été fait</h2>
            <p>
              Curage complet, reprise des planchers bois au premier, isolation des combles et des murs par
              l&apos;intérieur, réfection totale de l&apos;électricité avec tableau neuf aux normes NF C 15-100,
              dépose de la cuve fioul et installation d&apos;une pompe à chaleur air-eau avec radiateurs basse
              température, VMC hygroréglable, deux salles d&apos;eau dont une créée au rez-de-chaussée, cuisine sur
              caissons standards habillés de façades sur mesure, parquet contrecollé à l&apos;étage, carrelage
              grand format au rez-de-chaussée, peintures.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Le calendrier réel</h2>
            <p>
              Dix-neuf semaines de chantier, livré avec quatre jours d&apos;avance sur la date de fin de bail. Deux
              semaines de tampon avaient été réservées dans le calendrier prévisionnel : elles ont été consommées à
              70 %, sur un retard d&apos;approvisionnement de carrelage.
            </p>
          </div>

          <dl className="card-e rounded-none p-6 grid grid-cols-2 gap-4 mt-2">
            <div><dt className="mq-mention">Surface</dt><dd className="text-ivoire">118 m²</dd></div>
            <div><dt className="mq-mention">Lots intervenus</dt><dd className="text-ivoire">12</dd></div>
            <div><dt className="mq-mention">Durée de chantier</dt><dd className="text-ivoire">19 semaines</dd></div>
            <div><dt className="mq-mention">Budget</dt><dd className="text-ivoire">Indicatif, communiqué sur demande</dd></div>
          </dl>
        </div>
      </article>

      <CtaFinal />
    </main>
  );
}
