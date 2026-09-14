"use client";

import { useState } from "react";
import Link from "next/link";

/* ============================================================================
   DÉMARCHES — le tableau devient un diagnostic.

   La version précédente était un tableau à double entrée : six situations,
   six conséquences, à lire en entier. Or personne ne veut savoir ce que
   déclenchent les six ; chacun veut savoir ce que déclenche LE SIEN.

   Le visiteur coche ce que son projet prévoit, et la page assemble la liste
   des démarches, puis le délai d’instruction correspondant. Il repart avec sa
   réponse et un bouton, au lieu d’un tableau.

   Rien n’est inventé et rien n’est caché : les six situations restent
   affichées en permanence (donc dans le HTML, donc indexables), et les délais
   sont ceux que la page énonce déjà dans ses questions fréquentes — un à deux
   mois pour une déclaration préalable, deux à quatre pour un permis, et le
   calendrier de l’assemblée générale lorsqu’un vote est nécessaire.
   ============================================================================ */

type Acte = { nom: string; note?: string; delai?: [number, number]; assemblee?: true };

type Situation = { num: string; titre: string; detail?: string; actes: Acte[] };

const SITUATIONS: Situation[] = [
  {
    num: "01",
    titre: "Modifier l’aspect extérieur",
    detail: "Menuiseries, volets, garde-corps, ravalement.",
    actes: [
      { nom: "Déclaration préalable", delai: [1, 2] },
      { nom: "Avis de l’architecte des Bâtiments de France", note: "en périmètre protégé" },
    ],
  },
  {
    num: "02",
    titre: "Agrandir, surélever, changer la destination",
    detail: "Extension au-delà des seuils de surface, surélévation, changement de destination avec travaux sur la façade ou la structure.",
    actes: [{ nom: "Permis de construire", delai: [2, 4] }],
  },
  {
    num: "03",
    titre: "Dépasser 150 m² de surface de plancher",
    detail: "Surface totale après travaux, pour un particulier.",
    actes: [{ nom: "Recours obligatoire à un architecte inscrit à l’Ordre" }],
  },
  {
    num: "04",
    titre: "Toucher une partie commune",
    detail: "Ou l’aspect extérieur de l’immeuble.",
    actes: [{ nom: "Autorisation votée en assemblée générale des copropriétaires", assemblee: true }],
  },
  {
    num: "05",
    titre: "Ouvrir, déposer ou percer un élément porteur",
    actes: [{ nom: "Étude d’un ingénieur structure et note de calcul", note: "avant tout devis de finition" }],
  },
  {
    num: "06",
    titre: "Occuper le domaine public",
    detail: "Échafaudage, benne, camion-grue, emprise sur trottoir.",
    actes: [{ nom: "Autorisation d’occupation du domaine public auprès de la commune" }],
  },
];

export function Demarches() {
  const [coches, setCoches] = useState<string[]>([]);

  const basculer = (num: string) =>
    setCoches((c) => (c.includes(num) ? c.filter((n) => n !== num) : [...c, num]));

  const retenues = SITUATIONS.filter((s) => coches.includes(s.num));
  const actes = retenues.flatMap((s) => s.actes);

  /* Le délai retenu est le plus long des délais déclenchés : les instructions
     ne s’additionnent pas, elles se recouvrent. */
  const delais = actes.map((a) => a.delai).filter(Boolean) as [number, number][];
  const delai = delais.length
    ? ([Math.max(...delais.map((d) => d[0])), Math.max(...delais.map((d) => d[1]))] as [number, number])
    : null;
  const vote = actes.some((a) => a.assemblee);

  return (
    <>
      {/* La consigne portait seule une ligne entière ; elle partage désormais
          son rang avec le compteur. Le compteur n’est pas un ornement : c’est
          le seul endroit où l’on voit d’un coup d’œil combien de situations
          sont retenues, sans relire les six cases. */}
      <p className="rf-demarches-consigne">
        <span>Cochez ce que votre projet prévoit. Les démarches apparaissent au fur et à mesure.</span>
        <span className="rf-demarches-compteur" data-actif={coches.length > 0}>
          {coches.length} <em>/ {SITUATIONS.length}</em>
        </span>
      </p>

      {/* Six situations sur deux colonnes plutôt qu’une seule. La liste en
          colonne unique faisait sept cent soixante-cinq pixels face à un
          panneau de deux cent soixante : cinq cents pixels de vide, par
          construction. Un panneau court posé à côté d’une liste longue en
          laissera toujours. */}
      <ul className="rf-situations">
        {SITUATIONS.map((sit) => {
          const coche = coches.includes(sit.num);
          return (
            <li key={sit.num}>
              <button
                type="button"
                className="rf-situation"
                data-coche={coche}
                aria-pressed={coche}
                onClick={() => basculer(sit.num)}
              >
                <span className="rf-situation-case" aria-hidden>
                  <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
                    <path
                      d="M2.5 7.5 5.5 10.5 11.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="rf-situation-num">{sit.num}</span>

                <span className="rf-situation-corps">
                  <span className="rf-situation-titre">{sit.titre}</span>
                  {sit.detail && <span className="rf-situation-detail">{sit.detail}</span>}
                  {/* Le volet reste dans le HTML en permanence — il est donc
                      lu par les moteurs et par les lecteurs d’écran — mais il
                      ne prend de la hauteur qu’une fois la case cochée.

                      C’était le vrai poids de la section : six conséquences
                      affichées d’office alors que personne ne veut savoir ce
                      que déclenchent les six. Et c’est aussi ce qui rendait le
                      diagnostic inerte, puisque cocher ne produisait rien
                      qu’on voie sur la ligne elle-même. */}
                  <span className="rf-situation-volet" data-ouvert={coche}>
                    <span className="rf-situation-actes">
                      {sit.actes.map((a, i) => (
                        <span key={a.nom} className="rf-acte" style={{ "--i": i } as React.CSSProperties}>
                          {a.nom}
                          {a.note && <em> — {a.note}</em>}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Le résultat en bandeau horizontal, sur toute la largeur : il se remplit
          sans jamais creuser de colonne vide. */}
      <div className="rf-bandeau" data-rempli={retenues.length > 0} role="status" aria-live="polite">
        {retenues.length === 0 ? (
          <p className="rf-bandeau-vide">
            Rien de coché. Un projet qui ne déclenche aucune de ces six situations peut démarrer sans autorisation à
            obtenir&nbsp;: quelques semaines de préparation suffisent.
          </p>
        ) : (
          <>
            <p className="rf-bandeau-compte">
              <span className="rf-bandeau-chiffre" key={actes.length}>
                {actes.length}
              </span>
              <span>
                démarche{actes.length > 1 ? "s" : ""}
                <br />à porter
              </span>
            </p>

            <ul className="rf-bandeau-liste">
              {actes.map((a) => (
                <li key={a.nom}>{a.nom}</li>
              ))}
            </ul>

            <p className="rf-bandeau-delai">
              {delai ? (
                <>
                  Instruction <strong>{delai[0]} à {delai[1]} mois</strong> avant le premier coup de pioche.
                </>
              ) : (
                <>Pas d’instruction d’urbanisme à attendre, mais des pièces à produire avant les devis.</>
              )}
              {vote && (
                <>
                  {" "}Le vote en assemblée générale dépend de la date de l’assemblée annuelle — souvent le vrai facteur
                  limitant.
                </>
              )}
            </p>
          </>
        )}

        <div className="rf-bandeau-action">
          <Link href="/contact" className="rf-btn rf-btn--plein">
            Faire vérifier mon cas
          </Link>
          {retenues.length > 0 && (
            <button type="button" className="rf-bandeau-reset" onClick={() => setCoches([])}>
              Tout décocher
            </button>
          )}
        </div>
      </div>
    </>
  );
}
