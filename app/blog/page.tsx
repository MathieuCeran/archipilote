import type { Metadata } from "next";
import { MqHero, MqSection, MqFig, MqReadNext } from "../components/mq";
import { BlogGrid, type Fiche } from "./blog-grid";
import { allArticles, photoSrc } from "../lib-articles";
import { withWw, wwMetadata } from "@/lib/whatswrong-pages";
import { horsCadre } from "@/lib/image-size";

export const generateMetadata = (): Promise<Metadata> => wwMetadata("/blog", {
  alternates: { canonical: "/blog" },
  title: "Magazine de la rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Prix au m², matériaux, isolation, DPE : nos guides pratiques pour comprendre et réussir votre projet de rénovation en Île-de-France.",
});

const fichesDe = (articles: Awaited<ReturnType<typeof allArticles>>): Fiche[] => articles.map((a) => ({
  slug: a.slug,
  titre: a.titre,
  excerpt: a.excerpt,
  categorie: a.categorie,
  date: a.date,
  dateISO: a.dateISO,
  minutes: a.minutes,
  image: photoSrc(a.photo),
  schema: Boolean(a.schema),
  entiere: !a.schema && horsCadre(photoSrc(a.photo), 3 / 2),
}));

async function BlogPage() {
  const fiches = fichesDe(await allArticles());
  return (
    <main>
      <MqHero
        kicker="Magazine de la rénovation"
        title="Tout savoir avant de rénover"
        lead="Prix, matériaux, isolation : nos analyses techniques pour aborder votre projet avec des chiffres réels, pas des estimations vagues."
      />
      <BlogGrid articles={fiches} />
      <MqSection
        kicker="Avant de commencer"
        title="Les six étapes clés pour préparer votre projet"
        lead="Budget et priorités, faisabilité technique, devis et comparatifs, planning et délais, matériaux et finitions, entreprises et assurances : l'ordre dans lequel ces six sujets sont traités décide de la maîtrise du chantier."
        wide
      >
        <MqFig
          src="/photos/pedagogie/52-tout-savoir-avant-de-renover.jpeg"
          alt="Infographie ARCHI PILOTE RÉNOVATION « Tout savoir avant de rénover » : les six étapes clés pour préparer un projet — budget et priorités, faisabilité technique, devis et comparatifs, planning et délais, matériaux et finitions, entreprises et assurances — disposées autour d'une vue axonométrique d'un logement en cours de rénovation"
          caption="Les six étapes clés pour préparer un projet de rénovation. Infographie ARCHI PILOTE RÉNOVATION."
          ratio="aspect-[16/9]"
        />
      </MqSection>
      <MqReadNext items={[
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Un budget indicatif en une minute" },
      ]} />
    </main>
  );
}

export default withWw("/blog", BlogPage);
