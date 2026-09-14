import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/nos-specialites" },
  title: "Nos spécialités rénovation en Île-de-France | ARCHI PILOTE RÉNOVATION",
  description: "Maison, appartement, structure, extension, surélévation, énergie, salle de bain, cuisine et lots techniques : découvrez les spécialités pilotées par ARCHI PILOTE RÉNOVATION.",
};

const STRUCTURE = [
  { titre: "Gros œuvre et structure", href: "/gros-oeuvre-structure", texte: "Murs porteurs, planchers, trémies et reprises de charge : la lecture du bâti avant toute décision de plan." },
  { titre: "Ouverture de mur porteur", href: "/ouverture-mur-porteur", texte: "Comprendre la structure avant de démolir : sondages, étude adaptée, appuis, étaiement, exécution et finitions." },
  { titre: "Extension de maison", href: "/extension-maison", texte: "Vérifier urbanisme, structure, fondations, réseaux, raccords de toiture et interface avec l'existant avant de figer le budget." },
  { titre: "Surélévation", href: "/surelevation", texte: "Étudier la capacité de l'existant, les contraintes de hauteur, les fondations, le poids ajouté et le phasage." },
  { titre: "Toiture et charpente", href: "/renovation-toiture-charpente", texte: "Distinguer réparation, traitement, reprise localisée ou remplacement, en intégrant zinguerie, isolation et ventilation." },
  { titre: "Chantiers complexes", href: "/chantiers-complexes", texte: "Structure, copropriété, aléas cachés : les projets qui demandent un pilotage renforcé et des compétences spécifiques." },
];

const PROJETS_COMPLETS = [
  { titre: "Rénovation complète", href: "/renovation-complete", texte: "Tous les lots repris et séquencés sur un même chantier, du diagnostic jusqu'à la levée des réserves." },
  { titre: "Rénovation de maison et de pavillon", href: "/renovation-maison-pavillon", texte: "Dix corps d'état ou davantage, dont l'ordre d'intervention pèse autant que la qualité de chaque lot." },
  { titre: "Rénovation d'appartement", href: "/renovation-appartement", texte: "Règlement de copropriété, colonnes, évacuations, accès et voisinage : l'immeuble contraint autant que le logement." },
];

const SECOND_OEUVRE = [
  { titre: "Second œuvre tous corps d'état", href: "/second-oeuvre", texte: "Cloisons, réseaux, menuiseries intérieures et finitions coordonnés par un seul pilote, dans l'ordre." },
  { titre: "Salle de bain", href: "/renovation-salle-de-bain-maison", texte: "Étanchéité, ventilation, supports, pentes, réseaux, équipements et maintenance future." },
  { titre: "Cuisine", href: "/renovation-cuisine-maison", texte: "Implantation, évacuations, alimentation électrique, ventilation, commandes et intégration du sur-mesure." },
  { titre: "Électricité et plomberie", href: "/electricite-plomberie-renovation", texte: "Réseaux, tableau, circuits, attentes, alimentations, évacuations et documentation avant fermeture." },
  { titre: "Rénovation énergétique", href: "/renovation-energetique", texte: "Isolation, ventilation et chauffage arbitrés ensemble plutôt qu'en additionnant des équipements." },
  { titre: "Sols et finitions", href: "/sols-finitions-renovation", texte: "Support, humidité, planéité, préparation et compatibilité des systèmes conditionnent le résultat final." },
  { titre: "Menuiserie et rangements sur-mesure", href: "/menuiserie-agencement-sur-mesure", texte: "Bibliothèques, dressings, lits cabane, claustras : dessinés pour le lieu, fabriqués en atelier, posés en accord avec l'ordre d'intervention des autres lots." },
  { titre: "Carrelage, zellige et travertin", href: "/expertise-carrelage-zellige-travertin", texte: "Calepinage, joints, points singuliers et pose des matières délicates, du choix du produit à la finition." },
  { titre: "Achat direct des matériaux", href: "/achat-direct-materiaux", texte: "Acheter carrelage, parquet, robinetterie et appareillage à votre nom, avec votre facture, sans marge intermédiaire." },
];

const A_EVITER = [
  "Un budget construit uniquement à partir d'un prix au mètre carré.",
  "Une ouverture structurelle chiffrée avant compréhension de l'existant.",
  "Une cuisine décidée après fermeture des réseaux.",
  "Une isolation améliorée sans réflexion sur la ventilation.",
  "Des devis incomparables parce que les périmètres ne sont pas les mêmes.",
  "Des points invisibles fermés sans photographie ou vérification prévue dans la mission.",
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Nos spécialités"
        segments={[{ text: "De la structure" }, { text: "aux finitions.", serif: true, gradient: true }]}
        lead="Une rénovation complète ne se résume pas à additionner des entreprises. Elle oblige à prendre les décisions dans le bon ordre : structure avant finitions, réseaux avant cloisons, ventilation avant amélioration de l'étanchéité à l'air, commandes longues avant que le planning ne devienne critique."
      />

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-6">
          <h2 className="display t-titre text-ivoire normal-case">Structure et transformations lourdes</h2>
          <p className="text-ivoire/85 t-base leading-relaxed">
            Ouverture de mur porteur, création de trémie, reprise de plancher, extension, surélévation, toiture ou
            charpente : ces sujets nécessitent une lecture de l&apos;existant et, selon les cas, l&apos;intervention d&apos;un
            bureau d&apos;études, d&apos;un architecte ou d&apos;autres professionnels compétents.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STRUCTURE.map((s) => (
              <Link key={s.href} href={s.href} className="card-e rounded-none p-5 group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="display t-base text-orange group-hover:text-ivoire transition-colors normal-case mb-1">→ {s.titre}</h3>
                <p className="text-muted t-petit leading-relaxed">{s.texte}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-6">
          <h2 className="display t-titre text-ivoire normal-case">Rénovation complète de maison et de pavillon</h2>
          <p className="text-ivoire/85 t-base leading-relaxed">
            Une rénovation de maison peut réunir dix corps d&apos;état ou davantage. Le point déterminant n&apos;est pas
            seulement la qualité de chaque lot, mais leur ordre d&apos;intervention.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJETS_COMPLETS.map((s) => (
              <Link key={s.href} href={s.href} className="card-e rounded-none p-5 group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="display t-base text-orange group-hover:text-ivoire transition-colors normal-case mb-1">→ {s.titre}</h3>
                <p className="text-muted t-petit leading-relaxed">{s.texte}</p>
              </Link>
            ))}
          </div>
          <p className="text-muted t-petit leading-relaxed">
            Pour situer l&apos;ordre des lots avant de commencer :{" "}
            <Link href="/blog/ordre-intervention-lots-renovation-complete" className="text-orange hover:underline">
              dans quel ordre faire intervenir les lots d&apos;une rénovation complète
            </Link>{" "}
            et{" "}
            <Link href="/blog/planning-chantier-commandes-a-lancer-en-premier" className="text-orange hover:underline">
              quelles commandes lancer en premier
            </Link>.
          </p>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-3">
          <h2 className="display t-titre text-ivoire normal-case">Appartement et copropriété</h2>
          <p className="text-ivoire/85 t-base leading-relaxed">
            En appartement, la difficulté vient autant du logement que de l&apos;immeuble : règlement de copropriété,
            parties communes, colonnes, évacuations, structure, ventilation, accès et voisinage. L&apos;objectif est
            d&apos;anticiper les décisions qui pourraient bloquer le chantier ou modifier le plan.
          </p>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <Link href="/renovation-appartement" className="text-orange hover:underline t-sec">
                Rénover un appartement : ce que l&apos;immeuble impose au logement
              </Link>
            </li>
            <li>
              <Link href="/demarches-administratives-renovation" className="text-orange hover:underline t-sec">
                Les démarches administratives à prévoir avant les travaux
              </Link>
            </li>
            <li>
              <Link href="/blog/coproprietaire-autorisations-avant-travaux" className="text-orange hover:underline t-sec">
                Les autorisations à obtenir en copropriété avant de lancer un chantier
              </Link>
            </li>
            <li>
              <Link href="/blog/ouvrir-mur-porteur-copropriete-assemblee" className="text-orange hover:underline t-sec">
                Les pièces à préparer avant l&apos;assemblée générale pour ouvrir un mur porteur
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-6">
          <h2 className="display t-titre text-ivoire normal-case">Second œuvre et lots techniques</h2>
          <p className="text-ivoire/85 t-base leading-relaxed">
            Électricité, plomberie, chauffage, ventilation, isolation, cloisons, salle de bain, cuisine, sols et
            finitions doivent être conçus comme un système. Une décision prise dans un lot peut créer une contrainte
            dans un autre.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECOND_OEUVRE.map((s) => (
              <Link key={s.href} href={s.href} className="card-e rounded-none p-5 group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="display t-base text-orange group-hover:text-ivoire transition-colors normal-case mb-1">→ {s.titre}</h3>
                <p className="text-muted t-petit leading-relaxed">{s.texte}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure">
          <div className="card-e rounded-none p-7">
            <h2 className="display t-haut text-ivoire normal-case mb-4">Ce que nous cherchons à éviter</h2>
            <ul className="flex flex-col gap-2.5">
              {A_EVITER.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-ivoire/85 t-sec">
                  <span className="mt-1.5 size-1.5 rounded-full bg-orange shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-muted t-petit mt-8">
            Vous ne savez pas dans quelle spécialité classer votre projet ? Décrivez le bien, la commune, votre objectif
            et les principales contraintes. La pré-analyse permet d&apos;identifier les sujets à traiter en premier.
          </p>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card-e rounded-none p-6 flex flex-col gap-3">
            <h2 className="display t-base text-ivoire normal-case">Cadrer avant de choisir une spécialité</h2>
            <ul className="flex flex-col gap-2">
              <li><Link href="/services" className="text-orange hover:underline t-petit">L&apos;index complet des prestations pilotées</Link></li>
              <li><Link href="/notre-methode" className="text-orange hover:underline t-petit">Les huit étapes de la méthode de pilotage</Link></li>
              <li><Link href="/clinique-du-devis" className="text-orange hover:underline t-petit">Lire un devis de travaux ligne à ligne</Link></li>
              <li><Link href="/observatoire-prix-renovation" className="text-orange hover:underline t-petit">Les fourchettes de prix par poste de travaux</Link></li>
              <li><Link href="/glossaire-renovation" className="text-orange hover:underline t-petit">Le vocabulaire employé dans les devis et diagnostics</Link></li>
            </ul>
          </div>
          <div className="card-e rounded-none p-6 flex flex-col gap-3">
            <h2 className="display t-base text-ivoire normal-case">Zone d&apos;intervention</h2>
            <p className="text-muted t-petit leading-relaxed">
              Ces spécialités sont pilotées depuis La Garenne-Colombes, en priorité dans les Hauts-de-Seine et, selon
              l&apos;ampleur du projet, ailleurs en Île-de-France.
            </p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/renovation-hauts-de-seine-92" className="text-orange hover:underline t-petit">Rénovation dans les Hauts-de-Seine (92)</Link></li>
              <li><Link href="/renovation-ile-de-france" className="text-orange hover:underline t-petit">La zone d&apos;intervention en Île-de-France</Link></li>
              <li><Link href="/reseau-partenaires" className="text-orange hover:underline t-petit">Les entreprises et compétences mobilisées</Link></li>
              <li><Link href="/guides" className="text-orange hover:underline t-petit">Les guides et articles classés par sujet</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
