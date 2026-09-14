"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* ============================================================================
   ZONE D’INTERVENTION — « intervenez-vous chez moi ? »

   Le plan dessiné qui occupait cette place était une image de plus : joli à
   regarder, inutile à un visiteur qui n’a qu’une question en tête. Celle-ci.

   Il tape ou désigne sa commune, il obtient une réponse — et un bouton. Pour
   une entreprise locale, c’est le seul endroit de la page d’accueil où l’on
   peut lever une objection en un geste.

   Les communes restent toutes visibles sous le champ : rien n’est caché
   derrière une recherche, et les noms restent dans le HTML pour le
   référencement local, ce qu’une carte en image ne permettait pas.
   ============================================================================ */

type Zone = { nom: string; dep: string; alias?: string[]; base?: true };

/* Reprises une à une du paragraphe d’origine. Aucune commune ajoutée. */
const ZONES: Zone[] = [
  { nom: "Paris", dep: "75", alias: ["paris intra-muros", "75001", "75116"] },
  { nom: "La Garenne-Colombes", dep: "92", base: true },
  { nom: "Neuilly-sur-Seine", dep: "92", alias: ["neuilly"] },
  { nom: "Levallois-Perret", dep: "92", alias: ["levallois"] },
  { nom: "Courbevoie", dep: "92" },
  { nom: "Asnières-sur-Seine", dep: "92", alias: ["asnieres"] },
  { nom: "Boulogne-Billancourt", dep: "92", alias: ["boulogne"] },
  { nom: "Issy-les-Moulineaux", dep: "92", alias: ["issy"] },
  { nom: "Nanterre", dep: "92" },
  { nom: "Rueil-Malmaison", dep: "92", alias: ["rueil"] },
  { nom: "Saint-Cloud", dep: "92", alias: ["st cloud"] },
  { nom: "Yvelines", dep: "78", alias: ["versailles", "saint-germain"] },
  { nom: "Val-de-Marne", dep: "94", alias: ["vincennes", "saint-maur"] },
];

const aplatir = (t: string) =>
  t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/g, "");

export function ZoneIntervention() {
  const [saisie, setSaisie] = useState("");
  const [choisie, setChoisie] = useState<Zone | null>(null);

  const filtrees = useMemo(() => {
    const q = aplatir(saisie);
    if (!q) return ZONES;
    return ZONES.filter((z) => [z.nom, z.dep, ...(z.alias ?? [])].some((v) => aplatir(v).includes(q)));
  }, [saisie]);

  const rienTrouve = saisie.trim().length > 1 && filtrees.length === 0;

  /* Quand la saisie ne laisse plus qu’une commune, on répond sans attendre le
     clic : c’est le geste que le visiteur allait faire de toute façon. */
  const evidente = saisie.trim().length >= 3 && filtrees.length === 1 ? filtrees[0] : null;
  const reponse = choisie ?? evidente;

  return (
    <div className="rf-zone">
      {/* Deux colonnes dans un même cadre : la question et sa réponse à gauche,
          la liste des communes à droite. Le champ posé nu sur la page, avec des
          pastilles grises en dessous, ressemblait à un formulaire d’administration
          déposé sur une page éditoriale. */}
      <div className="rf-zone-champ-col">
        <label htmlFor="zone-commune" className="rf-zone-label">
          Votre commune
        </label>
        <input
          id="zone-commune"
          type="search"
          className="rf-champ"
          placeholder="Courbevoie, Boulogne, 92…"
          value={saisie}
          autoComplete="off"
          onChange={(e) => {
            setSaisie(e.target.value);
            setChoisie(null);
          }}
        />

        <div className="rf-zone-reponse" data-repondu={!!reponse} role="status" aria-live="polite">
          {reponse ? (
            <>
              <p className="rf-zone-oui">
                Oui, nous intervenons à<strong>{reponse.nom}</strong>
                <span className="rf-zone-dep">{reponse.dep}</span>
              </p>
              {reponse.base && <p className="rf-zone-note">C’est là que nous sommes établis.</p>}
              <Link href="/contact" className="rf-btn rf-btn--plein rf-zone-cta">
                Décrire un projet sur cette commune
              </Link>
            </>
          ) : rienTrouve ? (
            <>
              <p className="rf-zone-oui rf-zone-oui--hors">Hors de notre zone habituelle.</p>
              <p className="rf-zone-note">Nous regardons au cas par cas selon la nature du projet.</p>
              <Link href="/contact" className="rf-btn rf-btn--contour rf-zone-cta">
                Nous dire où et quoi
              </Link>
            </>
          ) : (
            <p className="rf-zone-note">
              Tapez votre commune, ou choisissez-la dans la liste. Treize zones couvertes.
            </p>
          )}
        </div>
      </div>

      <ul className="rf-zone-liste" aria-label="Communes et départements couverts">
        {filtrees.map((z) => (
          <li key={z.nom}>
            <button
              type="button"
              className="rf-zone-ligne"
              data-active={reponse?.nom === z.nom}
              data-base={z.base}
              onClick={() => setChoisie(choisie?.nom === z.nom ? null : z)}
            >
              <span>{z.nom}</span>
              <span className="rf-zone-num">{z.dep}</span>
            </button>
          </li>
        ))}
        {filtrees.length === 0 && <li className="rf-zone-rien">Aucune correspondance.</li>}
      </ul>
    </div>
  );
}
