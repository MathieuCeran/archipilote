import { Picto, type ClePicto } from "./pictos";

/* ============================================================================
   LES POSTES D’UNE RÉNOVATION — l’infographie, devenue interface.

   CE QUE ÇA REMPLACE. Une planche de 1 222 × 1 287 px fournie par le client,
   posée seule au-dessus du contenu : douze cents pixels de haut pour une image
   qu’on ne peut ni sélectionner, ni traduire, ni lire à l’écran d’un
   téléphone, ni corriger le jour où un poste change.

   CE QU’ELLE CONTENAIT, ET CE QUI EN RESTE. La planche portait quatre choses :
   les huit postes, la méthode en six étapes, quatre engagements, et un
   bandeau de contact. Trois sur quatre sont DÉJÀ sur la page en toutes
   lettres — la méthode a sa propre section, les engagements leur bandeau, le
   contact sa clôture. Seuls les huit postes n’y figuraient nulle part.

   C’est donc eux, et eux seuls, qui sont transcrits. Mot pour mot, y compris
   l’ordre : rien n’est reformulé, rien n’est ajouté. Le reste de la planche
   n’est pas perdu, il était déjà écrit ailleurs.

   Les pictogrammes sont dessinés dans la langue du site — petites coupes et
   plans au trait — et non repris des icônes dorées de la planche, qui
   appartiennent à l’ancien système graphique.
   ============================================================================ */

export type Poste = { cle: ClePicto; titre: string; texte: string };

export function Postes({ postes, titre }: { postes: Poste[]; titre?: string }) {
  return (
    <div className="mq-postes-bloc">
      {titre && <p className="mq-postes-titre">{titre}</p>}
      <ul className="mq-postes">
        {postes.map((p) => (
          <li key={p.titre}>
            <Picto cle={p.cle} />
            <h3 className="rf-h3 mt-4">{p.titre}</h3>
            <p className="rf-secondaire mt-2">{p.texte}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
