import type { ReactNode } from "react";
import { Tirage } from "./tirage";

type Segment = { text: string; serif?: boolean; gradient?: boolean };

type PageHeaderProps = {
  eyebrow: string;
  segments: Segment[];
  lead?: string;
};

/* ============================================================================
   EN-TÊTE DE PAGE INTERNE — quatorze pages.

   Ce qu’il était : un titre géant CENTRÉ, jusqu’à 89 px — plus gros que le
   titre de la page d’accueil elle-même —, révélé mot par mot au chargement,
   sur un halo flouté. Trois effets superposés pour annoncer un titre.

   Le système de la refonte tient l’inverse : un titre se pose à gauche, à la
   largeur de sa planche, et il n’a pas besoin d’être révélé pour être lu. Il
   prend donc le degré de la manchette — un cran au-dessus d’un titre de
   section, un cran en dessous du titre d’accueil — et le halo disparaît.

   L’API ne change pas : les quatorze pages passent les mêmes props.
   ============================================================================ */

export function PageHeader({ eyebrow, segments, lead }: PageHeaderProps) {
  return (
    <header className="rf-dossier mq-ouverture-bloc">
      <Tirage className="rf-tirage--ouverture" />
      <div className="rf-wrap pt-36 md:pt-44 pb-14 md:pb-20">
        <p className="rf-repere">{eyebrow}</p>
        <div className="mq-ouverture">
          <h1 className="rf-titre rf-titre--manchette">
            {segments.map((s, i): ReactNode => {
              const espace = i > 0 ? " " : "";
              return s.serif || s.gradient ? (
                <span key={i}>
                  {espace}
                  <em className="serif-accent">{s.text}</em>
                </span>
              ) : (
                <span key={i}>
                  {espace}
                  {s.text}
                </span>
              );
            })}
          </h1>
          {lead && <p className="mq-chapo">{lead}</p>}
        </div>
      </div>
    </header>
  );
}
