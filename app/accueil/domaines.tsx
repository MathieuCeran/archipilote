"use client";

import { useState } from "react";
import Link from "next/link";
import { Picto, type ClePicto } from "../components/pictos";

/* ============================================================================
   NOS DOMAINES — la photographie à cheval sur deux sections.

   Ce bloc alignait trois cartes identiques : photo, titre, paragraphe, lien.
   Trois fois la même chose, dans la même largeur que les seize autres
   sections. C’était le dernier endroit vraiment conventionnel de la page.

   Ce qui change :

   1. UNE GRANDE PHOTOGRAPHIE VERTICALE, à gauche, qui MONTE DANS LA SECTION
      SOMBRE au-dessus d’elle. C’est le seul élément de la page qui franchit
      une limite de section, et c’est ce qui casse l’empilement de bandes
      horizontales — le défaut que rien d’autre ne corrige.

   2. ELLE CHANGE QUAND ON DÉSIGNE UNE FAMILLE DE LOTS. Les trois
      photographies de chantier existaient déjà : au lieu d’être posées
      côte à côte comme trois vignettes, elles occupent tour à tour un grand
      format. Rien n’est perdu, tout est plus grand, et l’image devient une
      pièce active du bloc au lieu d’un ornement.

      Le mouvement répond à un geste — désigner —, jamais au défilement.
      C’est la seule animation qui se justifie sans discussion.

   3. Un PICTOGRAMME remplace la vignette dans chaque colonne : une petite
      coupe technique dessinée de la même main que le calque de fond.
   ============================================================================ */

export type Domaine = {
  titre: string;
  texte: string;
  img: string;
  alt: string;
  href: string;
  label: string;
  picto: ClePicto;
  /* La mention portée sur la tranche de la photographie. */
  ruban: string;
};

export function Domaines({
  domaines,
  tel,
  telAffiche,
  entete,
}: {
  domaines: Domaine[];
  tel: string;
  telAffiche: string;
  /* L’en-tête entre DANS la grille, en haut de la colonne de droite.

     Laissé au-dessus en pleine largeur, il repoussait la photographie vers
     le bas : le débord aurait dû franchir le titre et le chapô avant
     d’atteindre la limite de section, et il serait passé par-dessus le
     texte. Ici, la photographie n’a plus que le retrait haut de la section
     à remonter. */
  entete: React.ReactNode;
}) {
  const [actif, setActif] = useState(0);

  return (
    <div className="rf-avancee">
      {/* Ordre de source = ordre de lecture au téléphone : titre, image,
          colonnes. Sur grand écran, la grille replace la photographie à
          gauche, sur les deux rangées. */}
      <div className="rf-avancee-entete">{entete}</div>

      <figure className="rf-avancee-photo">
        <div className="rf-cadre">
          {/* Les trois images sont montées d’emblée et se relaient par
              l’opacité : un changement de `src` ferait clignoter un blanc le
              temps du chargement, la première fois sur chacune. */}
          {domaines.map((d, i) => (
            <img
              key={d.img}
              src={d.img}
              alt={i === actif ? d.alt : ""}
              aria-hidden={i !== actif}
              loading="lazy"
              width={1280}
              height={960}
              className="rf-avancee-vue"
              data-visible={i === actif}
            />
          ))}
          <span className="rf-ruban" aria-hidden>
            {domaines[actif].ruban}
          </span>
          <span className="rf-plaque" aria-hidden>
            <span className="rf-plaque-chiffre">
              {String(actif + 1).padStart(2, "0")}
              <em>/ {String(domaines.length).padStart(2, "0")}</em>
            </span>
            <span className="rf-plaque-label">{domaines[actif].titre}</span>
          </span>
        </div>
      </figure>

      <div className="rf-avancee-corps">
        <div className="rf-domaines">
          {domaines.map((d, i) => (
            <article
              key={d.titre}
              data-actif={i === actif}
              onMouseEnter={() => setActif(i)}
              onFocusCapture={() => setActif(i)}
              /* Le clic double le survol : au doigt et sur une tablette, il
                 n’y a pas de pointeur à poser sur la colonne. Le lien qu’elle
                 contient navigue comme avant — poser l’état avant de partir
                 ne coûte rien. */
              onClick={() => setActif(i)}
            >
              <Picto cle={d.picto} />
              <h3 className="rf-h3 mt-4">{d.titre}</h3>
              <p className="rf-secondaire mt-2.5">{d.texte}</p>
              <p className="rf-lien-bas">
                <Link
                  href={d.href}
                  className="rf-lien"
                  style={{ fontFamily: "var(--f-display)", fontSize: "0.9rem", fontWeight: 500 }}
                >
                  {d.label}
                </Link>
              </p>
            </article>
          ))}
        </div>

        {/* La ligne d’appel ferme le bloc sur une action plutôt que sur un
            bord. Le numéro est cliquable, y compris au téléphone. */}
        <p className="rf-appel">
          <span>Un doute sur le lot qui vous concerne ?</span>
          <a href={`tel:${tel}`}>{telAffiche}</a>
        </p>
      </div>
    </div>
  );
}
