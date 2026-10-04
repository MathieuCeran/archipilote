import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-yvelines-78" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation de maison dans les Yvelines (78) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes dans les Yvelines. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation de maison dans les Yvelines (78) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes dans les Yvelines. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-yvelines-78",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Yvelines (78)"
      segments={[{ text: "Rénovation dans les Yvelines :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans les Yvelines, ARCHI PILOTE RÉNOVATION cible en priorité les maisons et projets suffisamment structurants : rénovation complète, extension, surélévation, toiture, charpente, redistribution intérieure et rénovation énergétique. La page met davantage l'accent sur la maison et le pavillon que sur l'appartement."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
      maillage={{
        titre: "Maison, extension, surélévation : par où commencer",
        intro:
          "Sur une maison, gagner de la surface se décide avant tout le reste : extension au sol, surélévation ou simple redistribution ne mobilisent ni les mêmes autorisations ni les mêmes corps de métier. Et le régime d'autorisation change encore si la parcelle relève d'une servitude de protection — cela se vérifie au dossier, jamais par déduction.",
        groupes: [
          {
            titre: "Gagner de la surface",
            liens: [
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/surelevation", label: "Surélévation d'une maison" },
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon" },
              { href: "/demarches-administratives-renovation", label: "Permis et déclaration préalable" },
              { href: "/demarches-administratives-renovation", label: "Si le bien est en périmètre protégé" },
            ],
          },
          {
            titre: "Enveloppe et lots techniques",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Toiture et charpente" },
              { href: "/renovation-energetique", label: "Rénovation énergétique" },
              { href: "/renovation-electrique", label: "Redistribution et réseaux" },
              { href: "/renovation-complete", label: "Rénovation complète de maison" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-rueil-malmaison", label: "Rueil-Malmaison, commune limitrophe" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine (92)" },
              { href: "/renovation-val-doise-95", label: "Val-d'Oise (95)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
