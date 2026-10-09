"use client";

import { useRef } from "react";

/* ============================================================================
   AVIS — cartes qui défilent.

   10/2026 : les avis Trustpilot (4 avis, 4,0/5) sont remplacés par ceux de la
   fiche Google Business du client (« archipiloterenovation », 5,0/5, 23 avis),
   plus fournie et celle que les prospects voient en premier dans les résultats.

   ⚠️ CES TEXTES SONT FIGÉS DANS LE CODE : relevés le 9 octobre 2026, ils ne se
   mettent pas à jour tout seuls. La note et le nombre d'avis sont datés à
   l'écran pour ne pas se faire passer pour une donnée temps réel. À refaire
   régulièrement depuis la fiche (lien GOOGLE_FICHE ci-dessous).

   Les textes sont repris mot pour mot ; les avis longs sont coupés, coupe
   signalée par « … » ou « […] ». La date est le mois de publication, déduit de
   l'ancienneté affichée par Google au jour du relevé. L'intitulé de chaque
   carte résume le chantier décrit dans l'avis.
   ============================================================================ */

/* Fiche Google Maps du client (identifiant CID, stable). */
const GOOGLE_FICHE = "https://maps.google.com/?cid=8872482295185127204";

/* Relevé sur la fiche publique le 09/10/2026. */
const NOTE = "5,0";
const NOMBRE = 23;
const RELEVE_LE = "9 octobre 2026";

type Avis = { titre: string; texte: string; auteur: string; date: string; note: number };

const AVIS: Avis[] = [
  {
    titre: "Trois immeubles, Paris 11ᵉ",
    texte:
      "Après plusieurs chantiers menés avec ARCHI PILOTE RÉNOVATION à Paris et dans l’Ouest parisien, nous leur avons confié la rénovation de trois immeubles rue du Chemin-Vert, dans le 11ᵉ arrondissement. […] Nous avons particulièrement apprécié le suivi du chantier et le modèle économique. Les achats directs de matériaux nous ont permis de mieux maîtriser les coûts et de garder une bonne visibilité sur les budgets.",
    auteur: "Charles Boukris",
    date: "octobre 2026",
    note: 5,
  },
  {
    titre: "Pavillon, Suresnes",
    texte:
      "Nous avions un pavillon à Suresnes que nous souhaitions agrandir et rénover. ARCHI PILOTE RÉNOVATION nous a accompagnés sur l’ensemble du projet : extension, surélévation et aménagement des combles. …",
    auteur: "Sébastien Hassoun",
    date: "octobre 2026",
    note: 5,
  },
  {
    titre: "Appartement, passoire énergétique",
    texte:
      "Nous avons fait appel à Archipilote Rénovation pour reprendre entièrement notre appartement, qui était au départ une vraie passoire énergétique. Honnêtement, le chantier était loin d’être simple et le résultat dépasse vraiment nos attentes. …",
    auteur: "Nad U.",
    date: "septembre 2026",
    note: 5,
  },
  {
    titre: "Pavillon, Saint-Cloud",
    texte:
      "Nous avons fait appel à ARCHI PILOTE RÉNOVATION pour rénover notre pavillon rue de Crillon à Saint-Cloud. Le défi était important : préserver le charme de l’ancien, réaliser une surélévation pour aménager les combles et remettre à niveau …",
    auteur: "David Dray",
    date: "septembre 2026",
    note: 5,
  },
  {
    titre: "Maison avec surélévation, Sartrouville",
    texte:
      "J’ai fait appel à ARCHI PILOTE RÉNOVATION pour reprendre un chantier assez complexe à Sartrouville : rénovation complète de la maison avec un projet de surélévation. …",
    auteur: "Moustafa Rassifi",
    date: "septembre 2026",
    note: 5,
  },
  {
    titre: "Appartement de 179 m², place des Vosges",
    texte:
      "Nous avons confié à Archi Pilote Rénovation la rénovation complète de notre appartement de 179 m² proche de la place des Vosges, après avoir rencontré plusieurs entreprises. …",
    auteur: "Hannah Brami",
    date: "septembre 2026",
    note: 5,
  },
  {
    titre: "Une collaboration de longue date",
    texte:
      "Je travaille avec Mr Atlan depuis de nombreuses années et suis très contente de notre collaboration sur tous types de travaux qu’ils soient simples ou complexes. Les devis effectués sont toujours compétitifs, il accompagne les clients chez …",
    auteur: "Valérie Delmon",
    date: "septembre 2026",
    note: 5,
  },
  {
    titre: "Travail nickel",
    texte: "Travail nickel équipe dispo et à l'ecoute\nTrès satifait\nA recomender",
    auteur: "Erick Dagois",
    date: "septembre 2026",
    note: 4,
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" width="16" height="16" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function Etoiles({ note }: { note: number }) {
  return (
    <span className="rf-avis-etoiles" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} data-pleine={i < note} aria-hidden>
          <svg viewBox="0 0 20 20" width="15" height="15">
            <path
              fill="currentColor"
              d="M10 1.5 12.4 7l6 .5-4.6 4 1.4 5.9L10 14.3 4.8 17.4l1.4-5.9-4.6-4 6-.5z"
            />
          </svg>
        </span>
      ))}
    </span>
  );
}

export function AvisGoogle() {
  const piste = useRef<HTMLDivElement>(null);

  const glisser = (sens: 1 | -1) => {
    const el = piste.current;
    if (!el) return;
    const carte = el.querySelector<HTMLElement>(".rf-avis-carte");
    const pas = carte ? carte.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: pas * sens, behavior: "smooth" });
  };

  return (
    <div className="rf-avis">
      <div className="rf-avis-tete">
        <a className="rf-avis-score" href={GOOGLE_FICHE} target="_blank" rel="noopener noreferrer">
          <span className="rf-avis-marque">
            <GoogleLogo />
            Google
          </span>
          <span className="rf-avis-chiffre">{NOTE}</span>
          <span className="rf-avis-sur">sur 5</span>
          <span className="rf-avis-nombre">
            {NOMBRE} avis, au {RELEVE_LE}
          </span>
        </a>

        {/* Défilement piloté par le visiteur : aucune rotation automatique. */}
        <div className="rf-avis-nav">
          <button type="button" onClick={() => glisser(-1)} aria-label="Avis précédents">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
              <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => glisser(1)} aria-label="Avis suivants">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
              <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="rf-avis-piste" ref={piste} tabIndex={0} role="group" aria-label="Avis clients publiés sur Google">
        {AVIS.map((a) => (
          <article key={a.auteur} className="rf-avis-carte">
            <Etoiles note={a.note} />
            <h3 className="rf-avis-titre">{a.titre}</h3>
            <p className="rf-avis-texte">{a.texte}</p>
            <footer className="rf-avis-pied">
              <span className="rf-avis-auteur">{a.auteur}</span>
              <span className="rf-avis-date">{a.date}</span>
            </footer>
          </article>
        ))}

        {/* Dernière carte : l’invitation, pour que la piste se termine sur une
            action plutôt que sur un bord. */}
        <article className="rf-avis-carte rf-avis-carte--invite">
          <p className="rf-avis-titre">Vous avez travaillé avec nous ?</p>
          <p className="rf-avis-texte">
            Les avis publiés ici viennent de notre fiche Google, où chacun peut les vérifier.
          </p>
          <a className="rf-btn rf-btn--plein" href={GOOGLE_FICHE} target="_blank" rel="noopener noreferrer">
            Laisser un avis sur Google
          </a>
        </article>
      </div>

      <p className="rf-avis-source">
        Avis publiés sur Google, repris mot pour mot avec leur auteur et leur date.{" "}
        <a href={GOOGLE_FICHE} target="_blank" rel="noopener noreferrer" className="rf-lien">
          Les lire sur Google
        </a>
      </p>
    </div>
  );
}
