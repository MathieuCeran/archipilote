"use client";

import { useState } from "react";

/* ============================================================================
   LES MATIÈRES — la respiration tactile de la page.

   Après deux sections d’expertise administrative, le visiteur a besoin de
   toucher quelque chose. Cinq macros de matériaux, en bande : le nom est
   toujours lisible, l’usage se découvre quand on désigne le panneau. Le geste
   est le même à la souris, au doigt et au clavier.

   C’est aussi ce qui manquait au discours : on parle beaucoup de dossiers et
   de délais, et jamais de ce qu’on pose réellement chez les gens.
   ============================================================================ */

const MATIERES = [
  {
    nom: "Chêne massif",
    usage: "Parquet à chevrons ou à bâtons rompus, plinthes et agencement, dans l’épaisseur qui autorise un ponçage futur.",
    img: "/photos/maquette/pedagogie-chene-macro.jpg",
    alt: "Macro d’un parquet en chêne massif : veinage, nœuds et joint entre deux lames",
  },
  {
    nom: "Chaux",
    usage: "Enduit respirant sur murs anciens, là où un enduit ciment enfermerait l’humidité dans la maçonnerie.",
    img: "/photos/maquette/pedagogie-chaux-macro.jpg",
    alt: "Macro d’un enduit à la chaux : grain, reliefs de taloche et nuances de blanc",
  },
  {
    nom: "Travertin",
    usage: "Sols et salles de bain. Pierre poreuse : le bouchage et le traitement décident de sa tenue.",
    img: "/photos/maquette/pedagogie-travertin-macro.jpg",
    alt: "Macro d’une dalle de travertin : cavités naturelles et veines beiges",
  },
  {
    nom: "Zellige",
    usage: "Crédences et faïences posées à la main. Ses irrégularités sont le produit, pas un défaut de pose.",
    img: "/photos/maquette/pedagogie-zellige-macro.jpg",
    alt: "Macro de carreaux de zellige émaillés : irrégularités de surface et reflets",
  },
  {
    nom: "Béton ciré",
    usage: "Sols continus et plans de travail. Sans joint, donc sans rattrapage : le support doit être sain avant.",
    img: "/photos/maquette/pedagogie-beton-cire-macro.jpg",
    alt: "Macro d’un béton ciré : nuages de teinte et surface satinée",
  },
];

export function Matieres() {
  const [actif, setActif] = useState<number | null>(null);

  return (
    <div className="rf-echantillons">
      {MATIERES.map((m, i) => (
        <button
          key={m.nom}
          type="button"
          className="rf-echantillon"
          data-actif={actif === i}
          onMouseEnter={() => setActif(i)}
          onMouseLeave={() => setActif(null)}
          onFocus={() => setActif(i)}
          onBlur={() => setActif(null)}
          onClick={() => setActif(actif === i ? null : i)}
          aria-expanded={actif === i}
        >
          <img src={m.img} alt={m.alt} loading="lazy" />
          <span className="rf-echantillon-fond" aria-hidden />
          <span className="rf-echantillon-texte">
            <span className="rf-echantillon-nom">{m.nom}</span>
            <span className="rf-echantillon-usage">{m.usage}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
