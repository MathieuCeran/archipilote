import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { ServicesGrid } from "../components/services-grid";
import { ServicesRoadmap } from "../components/services-roadmap";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Travaux de rénovation : du gros œuvre au second œuvre — ARCHI PILOTE RÉNOVATION",
  description:
    "Ouverture de mur porteur, extension, surélévation, toiture, cuisine sur-mesure, salle de bain étanche, isolation & DPE. Tous les corps d'état pilotés sur un seul chantier, en Île-de-France.",
};

/* Index exhaustif des prestations du site : cette page carrefour doit mener à
   TOUTES les pages de travaux, pas seulement aux six domaines mis en avant
   par le bento et la feuille de route ci-dessus. Chaque href correspond à un
   dossier existant sous app/. */
const FAMILLES = [
  {
    titre: "Projets complets",
    intro:
      "Le périmètre d'ensemble : un chantier qui réunit plusieurs corps d'état et se pilote comme un seul projet.",
    liens: [
      { href: "/renovation-complete", label: "Rénovation complète", texte: "Tous les lots repris et séquencés sur un même chantier, du diagnostic à la réception." },
      { href: "/renovation-appartement", label: "Rénovation d'appartement", texte: "Copropriété, colonnes, évacuations et voisinage : les contraintes propres à l'immeuble." },
      { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon", texte: "Dix corps d'état ou davantage, dont l'ordre d'intervention détermine le budget final." },
      { href: "/chantiers-complexes", label: "Chantiers complexes", texte: "Structure, aléas cachés, copropriété : les dossiers qui exigent un pilotage renforcé." },
    ],
  },
  {
    titre: "Structure, extension et enveloppe",
    intro:
      "Les travaux qui touchent au bâti lui-même et qui, selon les cas, mobilisent un bureau d'études, un architecte ou un ingénieur structure.",
    liens: [
      { href: "/gros-oeuvre-structure", label: "Gros œuvre et structure", texte: "Murs porteurs, planchers, trémies, reprises de charge et fondations." },
      { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur", texte: "Sondages, étude adaptée, appuis, étaiement, exécution puis reprise des finitions." },
      { href: "/extension-maison", label: "Extension de maison", texte: "Urbanisme, fondations, réseaux et raccords avec l'existant avant de figer le budget." },
      { href: "/surelevation", label: "Surélévation", texte: "Capacité de l'existant, hauteurs autorisées, poids ajouté et phasage du chantier." },
      { href: "/renovation-toiture-charpente", label: "Toiture et charpente", texte: "Réparer, traiter, reprendre ou remplacer, zinguerie, isolation et ventilation comprises." },
    ],
  },
  {
    titre: "Second œuvre et lots techniques",
    intro:
      "Les réseaux, l'énergie et les pièces d'eau, conçus comme un système : une décision prise dans un lot contraint toujours un autre lot.",
    liens: [
      { href: "/second-oeuvre", label: "Second œuvre tous corps d'état", texte: "Cloisons, réseaux, menuiseries intérieures et finitions coordonnés par un seul pilote." },
      { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie", texte: "Tableau, circuits, attentes, alimentations et évacuations documentés avant fermeture." },
      { href: "/renovation-energetique", label: "Rénovation énergétique", texte: "Isolation, ventilation et chauffage arbitrés ensemble plutôt qu'ajoutés les uns aux autres." },
      { href: "/renovation-salle-de-bain-maison", label: "Rénovation de salle de bain", texte: "Étanchéité, ventilation, pentes, supports et maintenance future." },
      { href: "/renovation-cuisine-maison", label: "Rénovation de cuisine", texte: "Implantation, évacuations, alimentation électrique et intégration du sur-mesure." },
    ],
  },
  {
    titre: "Finitions et matières",
    intro:
      "Ce qui se voit à la fin dépend de ce qui a été préparé au début : support, humidité, planéité et compatibilité des systèmes.",
    liens: [
      { href: "/sols-finitions-renovation", label: "Sols et finitions", texte: "Ragréage, chape, revêtements et peintures : la préparation conditionne le rendu." },
      { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige et travertin", texte: "Calepinage, joints, points singuliers et pose des matières délicates." },
      { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie et agencement sur-mesure", texte: "Bibliothèques, dressings, claustras dessinés pour le lieu et posés au bon moment dans l'ordre des lots." },
      { href: "/achat-direct-materiaux", label: "Achat direct des matériaux", texte: "Acheter les matériaux à votre nom, avec votre facture, sans marge intermédiaire." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Nos services"
        segments={[{ text: "Tous les corps de métier," }, { text: "sous un même toit.", serif: true, gradient: true }]}
        lead="Du gros œuvre au second œuvre, nous pilotons chaque poste avec les mêmes entreprises partenaires et le même interlocuteur — du diagnostic à la réception."
      />
      <ServicesGrid />
      <ServicesRoadmap />

      <section className="relative py-16 md:py-24 border-t border-line">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="eyebrow">Toutes les prestations</span>
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)] text-ivoire text-balance normal-case">
              L&apos;index complet des travaux pilotés
            </h2>
            <p className="lead">
              Les six domaines présentés plus haut résument l&apos;offre. Le détail se lit page par page : chaque
              prestation ci-dessous dispose de sa page dédiée, avec ses contraintes techniques, ses points de
              vigilance et son ordre d&apos;intervention.
            </p>
          </div>

          {FAMILLES.map((f) => (
            <div key={f.titre} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="display t-fort text-ivoire normal-case">{f.titre}</h3>
                <p className="text-muted t-sec leading-relaxed">{f.intro}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {f.liens.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="card-e rounded-none p-5 group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <h4 className="display t-base text-orange group-hover:text-ivoire transition-colors normal-case mb-1">
                      → {l.label}
                    </h4>
                    <p className="text-muted t-petit leading-relaxed">{l.texte}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-e rounded-none p-7 flex flex-col gap-3">
            <h2 className="display t-haut text-ivoire normal-case">Avant de choisir une prestation</h2>
            <p className="text-muted t-sec leading-relaxed">
              Trois pages aident à cadrer le projet avant d&apos;entrer dans le détail d&apos;un lot : la manière dont
              un chantier est piloté, la façon dont un devis se lit et les repères de prix par poste.
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              <li>
                <Link href="/notre-methode" className="text-orange hover:underline t-sec">
                  Les huit étapes de la méthode de pilotage
                </Link>
              </li>
              <li>
                <Link href="/clinique-du-devis" className="text-orange hover:underline t-sec">
                  Lire un devis de travaux ligne à ligne
                </Link>
              </li>
              <li>
                <Link href="/observatoire-prix-renovation" className="text-orange hover:underline t-sec">
                  Les fourchettes de prix par poste de travaux
                </Link>
              </li>
              <li>
                <Link href="/estimateur-travaux" className="text-orange hover:underline t-sec">
                  Estimer une enveloppe de travaux en quelques questions
                </Link>
              </li>
              <li>
                <Link href="/glossaire-renovation" className="text-orange hover:underline t-sec">
                  Le glossaire des termes employés dans les devis
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-e rounded-none p-7 flex flex-col gap-3">
            <h2 className="display t-haut text-ivoire normal-case">Où ces prestations sont étudiées</h2>
            <p className="text-muted t-sec leading-relaxed">
              Ces travaux sont pilotés depuis La Garenne-Colombes. La zone d&apos;intervention couvre les
              Hauts-de-Seine en priorité et, selon l&apos;ampleur du projet, le reste de l&apos;Île-de-France.
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              <li>
                <Link href="/renovation-hauts-de-seine-92" className="text-orange hover:underline t-sec">
                  Rénovation dans les Hauts-de-Seine (92)
                </Link>
              </li>
              <li>
                <Link href="/renovation-ile-de-france" className="text-orange hover:underline t-sec">
                  La zone d&apos;intervention en Île-de-France
                </Link>
              </li>
              <li>
                <Link href="/nos-specialites" className="text-orange hover:underline t-sec">
                  Nos spécialités, de la structure aux finitions
                </Link>
              </li>
              <li>
                <Link href="/reseau-partenaires" className="text-orange hover:underline t-sec">
                  Les entreprises et compétences mobilisées
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-orange hover:underline t-sec">
                  Les guides et articles classés par sujet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
