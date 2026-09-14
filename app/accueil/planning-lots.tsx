"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================================
   PLANNING DES LOTS — construit, pas photographié.

   Cette section affichait jusqu’ici une image du document PDF : neuf cent
   quatre-vingts pixels de haut, un plein écran pour une capture d’écran, et
   une plaque crème posée au milieu d’une section graphite. Le même contenu,
   écrit en HTML, tient en quatre cents pixels, se lit à toutes les tailles,
   reste sélectionnable, et parle enfin la même langue graphique que le reste
   de la page.

   ⚠️ Les semaines ci-dessous sont relevées à l’œil sur le diagramme d’origine
   (public/photos/maquette/schema-planning-lots.jpg). Elles respectent la durée
   totale annoncée par le document — vingt semaines — et l’enchaînement des
   lots, mais elles sont à faire confirmer sur le document source avant mise en
   ligne définitive.
   ============================================================================ */

type Lot = { num: string; nom: string; detail: string; debut: number; duree: number };

const SEMAINES = 20;

const LOTS: Lot[] = [
  { num: "01", nom: "Dépose", detail: "Dépose des éléments existants, évacuation", debut: 1, duree: 2 },
  { num: "02", nom: "Gros œuvre", detail: "Maçonnerie, renforts, ouvertures", debut: 3, duree: 4 },
  { num: "03", nom: "Réseaux", detail: "Plomberie, électricité, ventilation", debut: 5, duree: 4 },
  { num: "04", nom: "Cloisons", detail: "Cloisons, doublages, plafonds", debut: 7, duree: 4 },
  { num: "05", nom: "Chapes", detail: "Préparation des supports, réalisation des chapes", debut: 10, duree: 3 },
  { num: "06", nom: "Carrelage", detail: "Pose des revêtements carrelés", debut: 12, duree: 3 },
  { num: "07", nom: "Peinture", detail: "Préparation, enduits, peintures", debut: 15, duree: 3 },
  { num: "08", nom: "Cuisine", detail: "Pose des meubles, plans de travail, équipements", debut: 17, duree: 3 },
  { num: "09", nom: "Réception", detail: "Contrôles, levée des réserves, réception des travaux", debut: 20, duree: 1 },
];

export function PlanningLots() {
  const [actif, setActif] = useState<number | null>(null);
  const lot = actif === null ? null : LOTS[actif];

  /* Les barres se construisent en cascade à la première apparition. Ce n’est
     pas un ornement : c’est le propos de la section. « Les lots se chevauchent,
     un retard sur le gros œuvre pousse les sept suivants » se démontre en une
     seconde et demie, alors qu’il faut lire deux phrases pour le comprendre.
     Une seule fois — on n’observe plus après. */
  const grille = useRef<HTMLDivElement>(null);
  const [construit, setConstruit] = useState(false);

  useEffect(() => {
    const el = grille.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setConstruit(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setConstruit(true);
          obs.disconnect();
        }
      },
      /* `rootMargin` négatif en bas : l’animation ne part pas quand
         l’élément effleure le bas de l’écran — elle attend qu’il soit
         réellement dans la zone de lecture. Sans ça, elle était finie avant
         que le visiteur ait les yeux dessus. */
      { threshold: 0.1, rootMargin: "0px 0px -28% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <figure className="rf-planning">
      {/* Ligne de lecture : ce que le lot survolé recouvre exactement. */}
      <div className="rf-planning-tete" role="status" aria-live="polite">
        {lot ? (
          <p>
            <span className="rf-planning-lot">
              Lot {lot.num} · {lot.nom}
            </span>
            <span className="rf-planning-detail">{lot.detail}</span>
            <span className="rf-planning-duree">
              semaines {lot.debut} à {lot.debut + lot.duree - 1}
            </span>
          </p>
        ) : (
          <p className="rf-planning-invite">
            Neuf lots, vingt semaines. Désignez un lot pour voir ce qu’il recouvre.
          </p>
        )}
      </div>

      <div className="rf-planning-cadre">
        <div
          className="rf-planning-grille"
          ref={grille}
          data-construit={construit}
          style={{ "--semaines": SEMAINES } as React.CSSProperties}
        >
          {/* En-tête des semaines */}
          <div className="rf-planning-coin" aria-hidden />
          {Array.from({ length: SEMAINES }, (_, i) => (
            <span key={i} className="rf-planning-semaine" aria-hidden>
              {i + 1}
            </span>
          ))}

          {LOTS.map((l, i) => (
            <div
              key={l.num}
              className="rf-planning-ligne"
              data-actif={actif === i}
              onMouseEnter={() => setActif(i)}
              onMouseLeave={() => setActif(null)}
            >
              <button
                type="button"
                className="rf-planning-etiquette"
                onFocus={() => setActif(i)}
                onBlur={() => setActif(null)}
                onClick={() => setActif(actif === i ? null : i)}
                aria-label={`Lot ${l.num}, ${l.nom} : ${l.detail}. Semaines ${l.debut} à ${l.debut + l.duree - 1}.`}
              >
                <span className="rf-planning-num">{l.num}</span>
                <span className="rf-planning-nom">{l.nom}</span>
              </button>

              <span
                className="rf-planning-barre"
                style={{ gridColumn: `${l.debut + 1} / span ${l.duree}`, "--rang": i } as React.CSSProperties}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>

      <figcaption className="rf-planning-legende">
        Planning type indicatif, sous réserve des aléas de chantier. Les lots se chevauchent volontairement : un retard
        sur le gros œuvre pousse les sept suivants — c’est la raison pour laquelle les arbitrages se prennent à
        l’étape 03, et pas en cours de chantier.
      </figcaption>
    </figure>
  );
}
