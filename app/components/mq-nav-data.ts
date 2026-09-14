/* Arborescence de navigation — reprise exactement de la maquette Lovable
   (batir-optimale, 29/08/2026) : 4 groupes, 32 pages + accueil + contact. */
export const NAV_GROUPS = [
  {
    label: "Expertise",
    links: [
      { href: "/notre-methode", label: "Notre méthode" },
      { href: "/parcours-expertise", label: "Parcours & expertise" },
      { href: "/chantiers-complexes", label: "Chantiers complexes" },
      { href: "/savoir-faire-ancien", label: "Charme de l’ancien" },
      { href: "/tendances-materiaux-francais", label: "Tendances & matières" },
      { href: "/tendances-2026-2027", label: "Tendances 2026-2027" },
      { href: "/charte-qualite", label: "Charte qualité" },
    ],
  },
  {
    label: "Travaux",
    links: [
      { href: "/renovation-complete", label: "Rénovation complète" },
      { href: "/renovation-appartement", label: "Rénovation d’appartement" },
      { href: "/renovation-maison-pavillon", label: "Rénovation de maison" },
      { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure" },
      { href: "/second-oeuvre", label: "Second œuvre technique" },
      { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige & travertin" },
      { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie & agencement" },
      { href: "/renovation-energetique", label: "Rénovation énergétique" },
      { href: "/extension-maison", label: "Extension de maison" },
      { href: "/surelevation", label: "Surélévation" },
    ],
  },
  {
    label: "Preuves",
    links: [
      { href: "/clinique-du-devis", label: "Clinique du devis" },
      { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels" },
      { href: "/realisations", label: "Réalisations" },
      { href: "/temoignages-clients", label: "Témoignages clients" },
      { href: "/detail-invisible", label: "Le détail invisible" },
      { href: "/reseau-partenaires", label: "Réseau de partenaires" },
      { href: "/investisseurs-professionnels", label: "Investisseurs & professionnels" },
    ],
  },
  {
    label: "Ressources",
    links: [
      { href: "/modele-economique-transparence", label: "Modèle économique" },
      { href: "/achat-direct-materiaux", label: "Achat direct des matériaux" },
      { href: "/demarches-administratives-renovation", label: "Démarches administratives" },
      { href: "/glossaire-renovation", label: "Glossaire technique" },
      { href: "/guides", label: "Guides & conseils" },
      { href: "/estimateur-travaux", label: "Estimateur de travaux" },
      { href: "/faq", label: "Questions fréquentes" },
    ],
  },
] as const;

/* Liens autonomes affichés directement dans la barre de navigation,
   hors des menus déroulants (ex. Blog, sorti de "Ressources" à la demande). */
export const NAV_STANDALONE = [
  { href: "/blog", label: "Blog" },
] as const;
