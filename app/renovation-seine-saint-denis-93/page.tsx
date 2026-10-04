import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-seine-saint-denis-93" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation complexe en Seine-Saint-Denis (93) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-Saint-Denis. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation complexe en Seine-Saint-Denis (93) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-Saint-Denis. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-seine-saint-denis-93",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Seine-Saint-Denis (93)"
      segments={[{ text: "Rénovation en Seine-Saint-Denis :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="En Seine-Saint-Denis, la stratégie est sélective : maisons et pavillons à l'est, maisons de ville, appartements ou projets de restructuration plus proches de Paris. Les pages locales ne s'ouvrent que lorsqu'un vrai potentiel et une vraie matière locale existent."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
      maillage={{
        titre: "Deux profils de biens, deux entrées",
        intro:
          "Le département n'appelle pas la même approche selon qu'on rénove un pavillon à l'est ou une maison de ville proche de Paris. Les pages ci-dessous séparent les deux logiques, puis rappellent ce qu'il faut vérifier sur une entreprise avant de lui confier un lot.",
        groupes: [
          {
            titre: "Pavillon et maison de ville",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Maison de ville et pavillon" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/renovation-maison-pavillon", label: "Toiture et charpente" },
              { href: "/renovation-complete", label: "Second œuvre et finitions" },
            ],
          },
          {
            titre: "Appartement et restructuration",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/ouverture-mur-porteur", label: "Restructuration et gros œuvre" },
              { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
              { href: "/renovation-complete", label: "Rénovation complète" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-complexe-paris", label: "Projets complexes à Paris" },
              { href: "/renovation-val-de-marne-94", label: "Val-de-Marne (94)" },
              { href: "/renovation-seine-et-marne-77", label: "Seine-et-Marne (77)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
          {
            titre: "Sécuriser le choix des entreprises",
            liens: [
              { href: "/notre-methode", label: "Garanties, décennale et attestations à exiger" },
              { href: "/blog/devis-travaux-lignes-a-verifier", label: "Faire relire un devis avant de signer" },
            ],
          },
        ],
      }}
    />
  );
}
