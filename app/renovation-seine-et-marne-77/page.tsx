import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-seine-et-marne-77" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation de maison en Seine-et-Marne (77) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-et-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Rénovation de maison en Seine-et-Marne (77) | ARCHI PILOTE RÉNOVATION",
    description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-et-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
    url: "/renovation-seine-et-marne-77",
    images: [{ url: "/og.jpg" }],
  },
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Seine-et-Marne (77)"
      segments={[{ text: "Rénovation en Seine-et-Marne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="En Seine-et-Marne, l'éloignement impose de privilégier les projets suffisamment importants : maison à rénover intégralement, extension, toiture, structure, énergie et opérations complexes. La page reste transparente sur ce critère plutôt que de prétendre couvrir chaque petit chantier."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
      maillage={{
        titre: "Ce qui justifie un déplacement en Seine-et-Marne",
        intro:
          "À cette distance, seuls les projets d'ensemble tiennent la route : maison à reprendre intégralement, enveloppe à refaire, création de surface. Deux questions reviennent alors systématiquement — qui intervient sur place, et le bien est-il soumis à une servitude de protection. Les pages ci-dessous y répondent.",
        groupes: [
          {
            titre: "Projets d'ensemble",
            liens: [
              { href: "/renovation-complete", label: "Rénovation intégrale d'une maison" },
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et de pavillon" },
              { href: "/extension-maison", label: "Extension de maison" },
              { href: "/renovation-appartement", label: "Savoir-faire du bâti ancien" },
              { href: "/demarches-administratives-renovation", label: "Bâti protégé et avis des Bâtiments de France" },
              { href: "/notre-methode", label: "Qui exécute réellement les travaux" },
            ],
          },
          {
            titre: "Enveloppe, énergie et budget",
            liens: [
              { href: "/renovation-maison-pavillon", label: "Toiture et charpente" },
              { href: "/renovation-energetique", label: "Isolation et rénovation énergétique" },
              { href: "/renovation-energetique", label: "Aides à la rénovation énergétique" },
              { href: "/observatoire-prix-renovation", label: "Observatoire des prix de la rénovation" },
            ],
          },
          {
            titre: "Territoires voisins",
            liens: [
              { href: "/renovation-seine-saint-denis-93", label: "Seine-Saint-Denis (93)" },
              { href: "/renovation-val-de-marne-94", label: "Val-de-Marne (94)" },
              { href: "/renovation-ile-de-france", label: "Toute l'Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
