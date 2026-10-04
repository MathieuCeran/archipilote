import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  /* Migration vers l'arborescence du DOSSIER UNIQUE FINAL V3 (26/08/2026) —
     anciennes URLs redirigées en 301 pour ne perdre aucun lien existant. */
  async redirects() {
    /* 03/09 : le domaine accentué répondait 200 en parallèle du domaine ASCII, sans jamais
       rediriger vers lui — deux versions vivantes du même site, donc du contenu dupliqué et
       une autorité coupée en deux. Les quatre variantes accentuées (.com/.fr, avec et sans
       www, servies en punycode xn--archipiloternovation-m2b) sont désormais redirigées en
       301 vers https://www.archipiloterenovation.com, qui est déjà le canonique déclaré. */
    const DOMAINES_ACCENTUES = [
      "xn--archipiloternovation-m2b.com",
      "www.xn--archipiloternovation-m2b.com",
      "xn--archipiloternovation-m2b.fr",
      "www.xn--archipiloternovation-m2b.fr",
      "archipiloterenovation.com",
    ];

    return [
      ...DOMAINES_ACCENTUES.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `https://www.archipiloterenovation.com/:path*`,
        permanent: true,
      })),
      { source: "/notre-modele", destination: "/notre-methode", permanent: true },
      { source: "/renovation-complete-maison", destination: "/renovation-complete", permanent: true },
      { source: "/structure-fondations-maison", destination: "/ouverture-mur-porteur", permanent: true },
      { source: "/extension-maison-ile-de-france", destination: "/extension-maison", permanent: true },
      { source: "/surelevation-maison-ile-de-france", destination: "/surelevation", permanent: true },
      { source: "/renovation-energetique-maison", destination: "/renovation-energetique", permanent: true },
      { source: "/qui-sommes-nous", destination: "/notre-methode", permanent: true },
      { source: "/devis", destination: "/estimateur-travaux", permanent: true },
      { source: "/glossaire-renovation-maison", destination: "/glossaire-renovation", permanent: true },
      { source: "/menuiserie-sur-mesure", destination: "/menuiserie-agencement-sur-mesure", permanent: true },
      { source: "/nos-partenaires-experts", destination: "/notre-methode", permanent: true },
      { source: "/bareme-prix-renovation", destination: "/observatoire-prix-renovation", permanent: true },
      { source: "/avant-apres-renovation-maison", destination: "/realisations", permanent: true },
      { source: "/expertises-et-cas-par-specialite", destination: "/realisations", permanent: true },

      /* 10/2026 — REFONTE « une page = une intention ». Les pages qui se disputaient
         le même mot-clé sont fusionnées dans la page qui porte l'intention, et leur
         ancienne adresse redirige en 301 vers elle (aucun lien cassé, autorité
         transmise). Lot 1 : pages de travaux. */
      ...[
        ["/services", "/renovation-complete"],
        ["/nos-specialites", "/renovation-complete"],
        ["/chantiers-complexes", "/renovation-complete"],
        ["/second-oeuvre", "/renovation-complete"],
        ["/sols-finitions-renovation", "/renovation-complete"],
        ["/gros-oeuvre-structure", "/ouverture-mur-porteur"],
        ["/electricite-plomberie-renovation", "/renovation-electrique"],
        ["/aides-renovation-energetique", "/renovation-energetique"],
        ["/expertise-carrelage-zellige-travertin", "/renovation-salle-de-bain-maison"],
        ["/renovation-toiture-charpente", "/renovation-maison-pavillon"],
        // Pages « dictionnaire » sans intention commerciale : leur sujet relève du blog.
        ["/tendances-materiaux-francais", "/blog"],
        ["/tendances-2026-2027", "/blog"],
        ["/guides", "/blog"],
        // Lot 2 : méthode, preuves, ressources.
        ["/parcours-expertise", "/notre-methode"],
        ["/charte-qualite", "/notre-methode"],
        ["/detail-invisible", "/notre-methode"],
        ["/modele-economique-transparence", "/notre-methode"],
        ["/achat-direct-materiaux", "/notre-methode"],
        ["/garanties-assurances", "/notre-methode"],
        ["/reseau-partenaires", "/notre-methode"],
        ["/ce-que-nous-ne-faisons-pas", "/notre-methode"],
        ["/temoignages-clients", "/realisations"],
        ["/travaux-perimetre-abf", "/demarches-administratives-renovation"],
        ["/clinique-du-devis", "/blog/devis-travaux-lignes-a-verifier"],
        ["/savoir-faire-ancien", "/renovation-appartement"],
        // Études de cas non vérifiables (mention d'origine : « premiers chantiers à venir »).
        ["/realisations/pavillon-annees-30-hauts-de-seine", "/realisations"],
        ["/realisations/extension-yvelines", "/realisations"],
      ].map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
