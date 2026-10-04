/* Arborescence de navigation — refonte 10/2026 « une page = une intention » :
   3 menus (Travaux, Méthode, Prix & ressources) + Blog + bouton Contact. */
export const NAV_GROUPS = [
  {
    label: "Travaux",
    links: [
      { href: "/renovation-appartement", label: "Rénovation d’appartement" },
      { href: "/renovation-maison-pavillon", label: "Rénovation de maison" },
      { href: "/renovation-complete", label: "Rénovation complète" },
      { href: "/renovation-salle-de-bain-maison", label: "Salle de bain" },
      { href: "/renovation-cuisine-maison", label: "Cuisine" },
      { href: "/renovation-electrique", label: "Rénovation électrique" },
      { href: "/renovation-energetique", label: "Rénovation énergétique" },
      { href: "/ouverture-mur-porteur", label: "Ouverture de mur porteur" },
      { href: "/surelevation", label: "Surélévation" },
      { href: "/extension-maison", label: "Extension de maison" },
      { href: "/menuiserie-agencement-sur-mesure", label: "Agencement sur mesure" },
    ],
  },
  {
    label: "Méthode",
    links: [
      { href: "/notre-methode", label: "Notre méthode" },
      { href: "/realisations", label: "Réalisations et avis" },
      { href: "/investisseurs-professionnels", label: "Investissement locatif" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Prix & ressources",
    links: [
      { href: "/observatoire-prix-renovation", label: "Prix de la rénovation au m²" },
      { href: "/estimateur-travaux", label: "Estimateur de travaux" },
      { href: "/demarches-administratives-renovation", label: "Démarches administratives" },
      { href: "/glossaire-renovation", label: "Glossaire" },
      { href: "/faq", label: "Questions fréquentes" },
    ],
  },
] as const;

/* Liens autonomes affichés directement dans la barre de navigation,
   hors des menus déroulants (ex. Blog, sorti de "Ressources" à la demande). */
export const NAV_STANDALONE = [
  { href: "/blog", label: "Blog" },
] as const;
