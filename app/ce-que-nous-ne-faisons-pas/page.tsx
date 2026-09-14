import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/ce-que-nous-ne-faisons-pas" },
  title: "Ce que nous ne faisons pas — ARCHI PILOTE RÉNOVATION",
  description: "La différence entre un pilote de travaux et une entreprise générale, dite clairement.",
};

const NE_FAIT_PAS = [
  { titre: "Nous n'exécutons aucun lot", texte: "Aucun de nos collaborateurs ne pose de carrelage, ne tire de câble ou ne monte de cloison. Chaque lot est réalisé par une entreprise partenaire spécialisée." },
  { titre: "Nous n'émettons aucun devis de travaux", texte: "Les devis viennent des entreprises, en leur nom, chiffrés sur leur propre responsabilité. Nous ne facturons aucun chantier." },
  { titre: "Nous ne vendons aucun matériau", texte: "Vous achetez carrelage, parquet, robinetterie et cuisine en direct chez les fournisseurs, à votre nom, sans marge de notre part." },
  { titre: "Nous ne nous substituons à aucune assurance", texte: "Chaque entreprise porte sa propre garantie décennale, biennale et de parfait achèvement. Notre accompagnement ne remplace aucune d'entre elles." },
  { titre: "Nous ne prononçons pas la réception du chantier", texte: "C'est un acte du maître d'ouvrage — donc le vôtre. Nous vous accompagnons ce jour-là et suivons les levées de réserves auprès des entreprises." },
];

export default function CeQueNousNeFaisonsPasPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Ce que nous ne faisons pas"
        segments={[{ text: "La différence avec" }, { text: "une entreprise générale.", serif: true, gradient: true }]}
        lead="Cette clarté est le socle de notre modèle, pas une réserve en petits caractères."
      />

      <section className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure flex flex-col gap-5">
          {NE_FAIT_PAS.map((item) => (
            <div key={item.titre} className="card-e rounded-none p-6 flex flex-col gap-1.5">
              <h2 className="display t-haut text-ivoire normal-case">{item.titre}</h2>
              <p className="text-muted t-sec leading-relaxed">{item.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
