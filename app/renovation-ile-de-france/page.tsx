import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";
import { MaillageInterne } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-ile-de-france" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation en Île-de-France : maison, appartement, structure | ARCHI PILOTE RÉNOVATION",
  description: "ARCHI PILOTE RÉNOVATION étudie les projets de rénovation complète, structure, extension, surélévation et copropriété dans toute l'Île-de-France selon leur ampleur et leurs contraintes.",
};

const DEPARTEMENTS = [
  { nom: "Hauts-de-Seine (92)", href: "/renovation-hauts-de-seine-92", texte: "Le premier bassin d'intervention. Mix maison / appartement en copropriété, extension, ouverture structurelle, rénovation énergétique." },
  { nom: "Yvelines (78)", href: "/renovation-yvelines-78", texte: "Particulièrement adapté aux projets de maison : rénovation globale, extension, surélévation, toiture, redistribution." },
  { nom: "Val-de-Marne (94)", href: "/renovation-val-de-marne-94", texte: "Mix d'appartements, maisons et opérations de transformation complète — Saint-Maur, Nogent, Le Perreux, Vincennes." },
  { nom: "Val-d'Oise (95)", href: "/renovation-val-doise-95", texte: "Nombreux projets pavillonnaires et de maisons : rénovation complète, énergie, toiture, extension." },
  { nom: "Essonne (91)", href: "/renovation-essonne-91", texte: "Étudié de façon sélective, lorsque l'ampleur et la complexité justifient un pilotage d'ensemble." },
  { nom: "Seine-et-Marne (77)", href: "/renovation-seine-et-marne-77", texte: "Réservé aux projets d'ensemble : maison à reprendre intégralement, enveloppe, toiture, création de surface." },
  { nom: "Seine-Saint-Denis (93)", href: "/renovation-seine-saint-denis-93", texte: "Pavillons à l'est, maisons de ville et restructurations d'appartement plus près de Paris." },
  { nom: "Paris", href: "/renovation-complexe-paris", texte: "Dossiers à angle technique : structure, copropriété, redistribution, réseaux, transformation complexe." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Île-de-France"
        segments={[{ text: "Une stratégie adaptée au bien," }, { text: "pas seulement à l'adresse.", serif: true, gradient: true }]}
        lead="ARCHI PILOTE RÉNOVATION étudie les projets à Paris, dans les Hauts-de-Seine et plus largement en Île-de-France. La distance n'est pas le seul critère : plus un projet est complet, technique ou structurant, plus un déplacement régulier peut être justifié."
      />
      <section className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure--large grid grid-cols-1 md:grid-cols-2 gap-5">
          {DEPARTEMENTS.map((d) => (
            <Link key={d.nom} href={d.href} className="card-e rounded-none p-6 flex flex-col gap-2 group hover:-translate-y-1 transition-transform duration-300">
              <h2 className="display t-haut text-ivoire group-hover:text-orange transition-colors normal-case">{d.nom}</h2>
              <p className="text-muted t-petit leading-relaxed">{d.texte}</p>
            </Link>
          ))}
        </div>
        <p className="text-center text-muted t-petit mt-8 max-w-xl">
          Votre commune n&apos;est pas citée ? Envoyez l&apos;adresse ou la commune, le type de bien, la surface et votre
          projet. Nous vous indiquons si le dossier entre dans notre zone et notre niveau d&apos;intervention.
        </p>
      </section>

      <MaillageInterne
        titre="Descendre à la commune ou au type de travaux"
        intro="Sept communes des Hauts-de-Seine disposent d'une page dédiée, écrite depuis notre base de La Garenne-Colombes. Les pages de spécialité, elles, valent pour toute la région : c'est le bien et ses contraintes qui commandent, pas l'adresse. La dernière rangée répond à la question qui vient toujours en premier au téléphone — qui pilote, qui exécute, qui facture."
        groupes={[
          {
            titre: "Communes documentées dans le 92",
            liens: [
              { href: "/renovation-la-garenne-colombes", label: "La Garenne-Colombes" },
              { href: "/renovation-courbevoie", label: "Courbevoie" },
              { href: "/renovation-asnieres-sur-seine", label: "Asnières-sur-Seine" },
              { href: "/renovation-bois-colombes", label: "Bois-Colombes" },
              { href: "/renovation-colombes", label: "Colombes" },
              { href: "/renovation-nanterre", label: "Nanterre" },
              { href: "/renovation-rueil-malmaison", label: "Rueil-Malmaison" },
            ],
          },
          {
            titre: "Rénover selon le type de bien",
            liens: [
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon" },
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/surelevation", label: "Surélévation" },
            ],
          },
          {
            titre: "Structure, technique et énergie",
            liens: [
              { href: "/gros-oeuvre-structure", label: "Gros œuvre et structure" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/second-oeuvre", label: "Lots de second œuvre" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/chantiers-complexes", label: "Chantiers complexes" },
            ],
          },
          {
            titre: "Cadrer le projet avant les travaux",
            liens: [
              { href: "/parcours-expertise", label: "Le parcours d'expertise" },
              { href: "/demarches-administratives-renovation", label: "Démarches administratives et urbanisme" },
              { href: "/travaux-perimetre-abf", label: "Travaux en périmètre ABF" },
              { href: "/clinique-du-devis", label: "Faire relire un devis" },
              { href: "/estimateur-travaux", label: "Estimer un budget travaux" },
            ],
          },
          {
            titre: "Savoir à qui l'on a affaire",
            liens: [
              { href: "/notre-methode", label: "Notre méthode de pilotage" },
              { href: "/modele-economique-transparence", label: "Comment nous sommes rémunérés" },
              { href: "/reseau-partenaires", label: "Les entreprises partenaires contractantes" },
              { href: "/charte-qualite", label: "Charte qualité" },
              { href: "/garanties-assurances", label: "Garanties et assurances" },
              { href: "/ce-que-nous-ne-faisons-pas", label: "Ce que nous ne faisons pas" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
