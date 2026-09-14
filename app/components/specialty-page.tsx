import Link from "next/link";
import { PageHeader } from "./page-header";
import { CtaFinal } from "./cta-final";
import { MaillageInterne, type Maillage } from "./local-page";
import { PHOTOS, srcSetOf } from "../lib-photos";

type Segment = { text: string; serif?: boolean; gradient?: boolean };
/* 03/09 : `texte` accepte du JSX et plus seulement une chaîne. Sans cela, aucune page bâtie
   sur ce gabarit ne pouvait porter un lien dans son corps de texte — ce qui avait conduit à
   déplier tout le gabarit dans une page pour y glisser trois liens, donc à le dupliquer. */
type Section = { titre: string; texte: React.ReactNode };

/**
 * Gabarit commun aux pages de spécialité (gros œuvre, second œuvre, ressources).
 *
 * La FAQ reste commune et volontairement identique partout — cf. brief SEO :
 * "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ? Non, l'entreprise spécialisée réalise et
 * facture le lot" doit rester visible et cohérent, pas réécrit page à page.
 *
 * 03/09 : le maillage, lui, ne devait PAS être commun. Les 5 pages qui utilisent ce gabarit
 * affichaient les 4 mêmes liens (méthode, modèle, garanties, estimateur) — donc aucun maillage
 * réel : aucune ne renvoyait vers une prestation voisine ni vers un article de fond. Le prop
 * `maillage` est désormais obligatoire, sur le modèle de LocalPage : impossible d'ajouter une
 * page de spécialité sans lui écrire ses propres liens. La rangée générique est supprimée.
 */
/* Déduit la mention de provenance du CHEMIN du fichier, pas d'une prop qu'on pourrait
   oublier de passer ou renseigner de travers. Le dossier est décidé au moment où l'image
   entre dans le projet ; c'est l'information la plus difficile à falsifier par distraction. */
function mentionProvenance(chemin: string) {
  if (chemin.includes("/photos/chantiers/")) return "Chantier réel des équipes partenaires";
  if (chemin.includes("/photos/pedagogie/")) return "Schéma pédagogique";
  return "Illustration, non contractuelle";
}

/* La mention n'est ajoutée que si le texte alternatif ne la porte pas déjà.
   Plusieurs alt se terminent par « — chantier réel des équipes partenaires » :
   la légende affichait alors la phrase deux fois de suite. Le défaut existait
   avant, il ne se voyait pas tant que la légende courait sous l'image sur
   toute sa largeur ; passée en colonne latérale, elle l'a mis au jour. */
function legende(alt: string, chemin: string) {
  const mention = mentionProvenance(chemin);
  const normalise = (t: string) => t.toLowerCase().replace(/[^a-zà-ÿ ]/g, " ").replace(/\s+/g, " ");
  return normalise(alt).includes(normalise(mention)) ? alt : `${alt} — ${mention}`;
}

export function SpecialtyPage({
  eyebrow,
  segments,
  lead,
  sections,
  photo,
  photoAlt,
  faqExtra,
  slug,
  maillage,
}: {
  eyebrow: string;
  segments: Segment[];
  lead: string;
  sections: Section[];
  photo: keyof typeof PHOTOS;
  photoAlt: string;
  faqExtra?: { q: string; r: string }[];
  /** Chemin de la page (ex. "/ouverture-mur-porteur") — génère Service + BreadcrumbList. */
  slug?: string;
  /** Liens propres à cette page. Obligatoire : un maillage identique partout n'en est pas un. */
  maillage: Maillage;
}) {
  const pageTitle = segments.map((s) => s.text).join(" ");
  const jsonLd = slug && [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: pageTitle,
      description: lead,
      areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
      provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
        { "@type": "ListItem", position: 2, name: eyebrow, item: "https://www.archipiloterenovation.com/services" },
        { "@type": "ListItem", position: 3, name: pageTitle, item: `https://www.archipiloterenovation.com${slug}` },
      ],
    },
  ];

  const FAQ_COMMUNE = [
    { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", r: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité." },
    { q: "Une visite technique est-elle nécessaire ?", r: "Oui, pour tout chiffrage sérieux : l'existant et l'accès changent fortement les hypothèses de chantier." },
    { q: "Les prix affichés sont-ils garantis ?", r: "Non. Les fourchettes éventuellement publiées sont datées et indicatives ; le prix contractuel reste celui du devis remis par l'entreprise." },
    { q: "Intervenez-vous depuis La Garenne-Colombes ?", r: "Oui, avec une zone d'intervention plus large en Île-de-France selon la nature du projet." },
    ...(faqExtra ?? []),
  ];

  return (
    <main className="relative z-10 bg-carbone">
      {jsonLd && jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHeader eyebrow={eyebrow} segments={segments} lead={lead} />

      {slug && (
        <nav aria-label="Fil d'Ariane" className="rf-wrap mq-mesure--large -mt-6 mb-8">
          <ol className="flex flex-wrap items-center gap-2 mq-mention">
            <li><Link href="/" className="hover:text-orange transition-colors">Accueil</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/services" className="hover:text-orange transition-colors">{eyebrow}</Link></li>
            <li aria-hidden>›</li>
            <li className="text-ivoire/70">{pageTitle}</li>
          </ol>
        </nav>
      )}

      <section className="relative pb-10">
        <div className="rf-wrap">
          {/* Cette figure était écrite à la main : elle échappait donc au
              composant, et à la règle qui met la légende à côté quand la
              place le permet. Bridée à 58 rem dans une planche de 1408, elle
              laissait 382 px de vide à sa droite — une image seule de plus.
              Elle passe par l'hôte du système. */}
          <div className="mq-fig-hote">
          <figure className="rf-fig mq-fig">
            <div className="rf-cadre relative aspect-[16/8]">
              <img src={PHOTOS[photo]} srcSet={srcSetOf(PHOTOS[photo])} sizes="(min-width: 1024px) 896px, 100vw" alt={photoAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />
            </div>
            {/* 07/09 : la mention de provenance était écrite en dur — « Illustration, non
                contractuelle » était accolée à TOUTES les images de ce gabarit, y compris aux
                photographies de chantier réel. La ligne affichée se contredisait donc
                elle-même : « …chantier réel des équipes partenaires — Illustration, non
                contractuelle ». Elle se déduit maintenant du dossier d'origine du fichier,
                qui est la seule source fiable : /chantiers = une vraie photo de chantier,
                /pedagogie = un schéma, tout le reste = une illustration. */}
            <figcaption>
              {legende(photoAlt, PHOTOS[photo])}
            </figcaption>
          </figure>
          </div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-7 text-ivoire/85 t-base leading-relaxed">
          {sections.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display t-titre text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-4">
          {FAQ_COMMUNE.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
              <h3 className="display t-base text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted t-sec leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      <MaillageInterne {...maillage} />

      <CtaFinal />
    </main>
  );
}
