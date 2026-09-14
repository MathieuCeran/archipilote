"use client";

import { useRef } from "react";
import { SITE } from "../data";

/* ============================================================================
   AVIS — cartes qui défilent.

   La section affichait trois citations anonymes (« Propriétaires, 92 »).
   Recueillies auprès de vrais clients, mais invérifiables pour un visiteur, et
   donc faibles comme preuve. La fiche Trustpilot du client porte désormais des
   avis nommés, datés et vérifiables : c’est à eux de passer devant.

   ⚠️ POURQUOI CES TEXTES SONT DANS LE CODE, ET CE QUE ÇA IMPLIQUE.

   La route propre était le widget officiel de Trustpilot. Elle a été essayée
   et elle échoue : les gabarits qui AFFICHENT des avis (« Micro Combo »,
   « Carousel ») se chargent — l’iframe est bien créée, l’identifiant de la
   fiche est bien transmis — mais ne rendent que le logo, sans données. Le
   gabarit « Review Collector » de l’ancien site, lui, s’affiche normalement.
   Le partage est donc net entre les gabarits gratuits et ceux qui nécessitent
   une offre Trustpilot payante.

   Conséquences à connaître :
   · ces textes sont figés au 10/09/2026 et ne se mettront pas à jour tout
     seuls. Un nouvel avis n’apparaîtra pas ici ;
   · le jour où le client passe sur une offre Trustpilot payante, ce composant
     doit être remplacé par le widget officiel, qui sera à jour en permanence ;
   · la note et le nombre d’avis affichés sont datés à l’écran, précisément
     pour ne pas se faire passer pour une donnée temps réel.

   Les textes sont repris mot pour mot de la fiche publique, avec le nom et la
   date de chaque auteur, et chaque carte renvoie à la fiche.
   ============================================================================ */

/* Relevé sur la fiche publique le 10/09/2026. */
const NOTE = "4,0";
const NOMBRE = 4;
const RELEVE_LE = "10 septembre 2026";

type Avis = { titre: string; texte: string; auteur: string; date: string; note: number };

const AVIS: Avis[] = [
  {
    titre: "Très belle expérience",
    texte:
      "Très belle expérience avec ARCHI PILOTE RENOVATION, pour la rénovation complète de notre appartement haussmannien à Paris. Le chantier était assez complexe mais ils ont vraiment su préserver le charme de l’ancien, notamment les moulures, tout en repensant complètement l’appartement : cuisine déplacée et ouverte sur le séjour, salles de bain refaites et création d’une suite parentale. Nous avons aussi beaucoup apprécié leurs conseils sur les détails techniques, notamment l’étanchéité des salles de bain et les joints époxy. L’accompagnement avait commencé avant même les travaux, avec des conseils dès notre achat et des visites chez les fournisseurs pour pouvoir choisir et acheter directement une partie des matériaux. C’était vraiment appréciable. Et surtout, nous sommes partis en vacances pendant le chantier. Nous recevions régulièrement des photos et des nouvelles, donc aucune mauvaise surprise et surtout aucun stress. On a vraiment pu profiter de nos vacances sereinement. Nous sommes ravis du résultat. Une de nos voisines a d’ailleurs suivi le chantier et souhaite maintenant refaire son appartement avec eux aussi.",
    auteur: "Océane Pinceloup",
    date: "10 août 2026",
    note: 5,
  },
  {
    titre: "Entreprise sérieuse et dynamique",
    texte:
      "En tant qu’Architecte DPLG, j’ai eu la chance de travailler avec cette entreprise sur un dossier complexe de rénovation d’une construction en zone ABF, elle m’a trouvé un charpentier MOF (Meilleur Ouvrier de France) pour traiter des détails que d’autres entreprises n’auraient pas pu réaliser. A conseiller !",
    auteur: "Minh-hoa Truong",
    date: "1er août 2026",
    note: 5,
  },
  {
    titre: "Collaboration, chantier complexe",
    texte:
      "C’est toujours un plaisir de collaborer en collaboration avec Archi pilote, Rénovation, dossier complexe comme les surélévation sur les extensions, avec de vrais professionnels que ça soit aussi dans les appartements en immeuble, haussmannien ou pierre Detaille, leur expertise en moulures ou un agencement sur-mesure comme la Menuiserie, les Clients sont toujours ravie. les devis sont détaillé et et leur modèle économique de faire passer les clients direct sur les Materiaux une organisation du tonnerre je recommande",
    auteur: "Ilia Pechkov",
    date: "10 août 2026",
    note: 5,
  },
  {
    titre: "Contact sympathique et digne de confiance",
    texte:
      "Contact sympathique et digne de confiance, Monsieur Atlan a su être force de proposition et faire preuve de pédagogie à chaque étape de mon projet.",
    auteur: "Myriam Hoppe",
    date: "25 août 2026",
    note: 5,
  },
];

function Etoiles({ note }: { note: number }) {
  return (
    <span className="rf-avis-etoiles" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} data-pleine={i < note} aria-hidden>
          <svg viewBox="0 0 20 20" width="11" height="11">
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

export function AvisTrustpilot() {
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
        <a className="rf-avis-score" href={SITE.trustpilotFiche} target="_blank" rel="noopener noreferrer">
          <span className="rf-avis-marque">
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden>
              <path fill="#00B67A" d="M10 1.5 12.4 7l6 .5-4.6 4 1.4 5.9L10 14.3 4.8 17.4l1.4-5.9-4.6-4 6-.5z" />
            </svg>
            Trustpilot
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

      <div className="rf-avis-piste" ref={piste} tabIndex={0} role="group" aria-label="Avis clients publiés sur Trustpilot">
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
            Les avis publiés ici viennent de Trustpilot, où chacun peut les vérifier.
          </p>
          <a className="rf-btn rf-btn--plein" href={SITE.trustpilotAvis} target="_blank" rel="noopener noreferrer">
            Déposer un avis
          </a>
        </article>
      </div>

      <p className="rf-avis-source">
        Avis publiés sur Trustpilot, repris mot pour mot avec leur auteur et leur date.{" "}
        <a href={SITE.trustpilotFiche} target="_blank" rel="noopener noreferrer" className="rf-lien">
          Les lire sur Trustpilot
        </a>
      </p>
    </div>
  );
}
