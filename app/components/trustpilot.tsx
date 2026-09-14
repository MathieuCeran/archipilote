import Script from "next/script";
import { SITE } from "../data";

/* BADGE TRUSTPILOT.

   Deux règles tiennent tout ce fichier, et elles pèsent plus que l'apparence.

   1. L'URL n'est écrite qu'à un seul endroit, dans SITE, et elle a été VÉRIFIÉE en la
      chargeant (réponse 200, titre « Evaluer Archipiloterenovation », identifyingName
      correspondant). Le lien précédent avait été DÉDUIT du nom de la marque et envoyait
      les visiteurs noter une fiche inexistante.

   2. AUCUNE NOTE N'EST AFFICHÉE, ET C'EST DÉLIBÉRÉ. La fiche compte zéro avis au
      05/09/2026. En particulier, ce badge ne montre PAS la rangée de cinq étoiles vertes
      du badge Trustpilot classique : sur une page commerciale, cinq étoiles pleines se
      lisent comme une note de 5/5, ce qui serait faux aujourd'hui. On affiche la marque
      Trustpilot et une invitation, pas une réputation.

   LE WIDGET OFFICIEL EST DÉSORMAIS POSÉ (06/09/2026), et voici d'où viennent ses deux
   identifiants — aucun n'est deviné :

   · data-businessunit-id = 6a9bdfd6294e62e75676d053
     Relevé dans le JSON de la page publique de dépôt d'avis de la fiche du client.

   · data-template-id = 56278e9abfbbba0bdcd568bc
     Relevé sur RENOVINTERIEURS.FR, marque sœur du même dirigeant, que le client nous a
     lui-même désignée en référence : « rajouter un lien avec Trustpilot sur le site comme
     sur Archi Renov, va voir au Renovinterieurs » (WhatsApp, 30/08/2026 14:01).
     C'est le modèle « Review Collector ». Il a été choisi pour une raison de fond : c'est
     le seul widget Trustpilot qui n'affiche PAS de note. Il invite à déposer un avis. Avec
     une fiche à zéro avis, tout autre modèle afficherait soit un vide, soit une note
     inventée. Celui-ci est exact aujourd'hui, et le restera quand les avis arriveront.

   NE PAS remplacer ce template-id par celui d'un widget à étoiles tant que la fiche est
   vide. Le jour où elle ne le sera plus, changer de modèle est un choix éditorial légitime
   — mais il se fera en connaissance de cause, pas par inadvertance.

   Le <a> à l'intérieur du widget n'est pas décoratif : c'est le repli affiché quand le
   script de Trustpilot ne se charge pas (bloqueur de contenu, réseau coupé). Il doit donc
   toujours rester un lien réel.

   DEUX URL, DEUX USAGES — ne pas les confondre (07/09) :
   · SITE.trustpilotFiche  = /review/…  → la page qui MONTRE les avis. C'est celle vers
     laquelle pointent le badge et les liens de lecture : un visiteur qui clique sur un
     badge Trustpilot veut lire des avis, pas en écrire un.
   · SITE.trustpilotAvis   = /evaluate/… → le formulaire de DÉPÔT d'avis. Réservé aux
     boutons qui invitent explicitement un client à témoigner.
   Jusqu'au 07/09 tout pointait sur /evaluate/, ce que le client a fait corriger : on
   envoyait un prospect venu chercher de la réputation directement dans un formulaire. */

const VERT_TRUSTPILOT = "#00B67A";

/* Marque Trustpilot : l'étoile blanche sur pastille verte, puis le mot-symbole.
   `aria-hidden` sur le dessin, le texte du lien porte déjà l'information. */
function MarqueTrustpilot({ taille = 20 }: { taille?: number }) {
  return (
    <span className="inline-flex items-center gap-2 shrink-0">
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-none"
        style={{ background: VERT_TRUSTPILOT, width: taille, height: taille }}
      >
        <svg width={taille * 0.72} height={taille * 0.72} viewBox="0 0 24 24" fill="#fff" focusable="false">
          <path d="M12 1.9l2.94 7.35 7.9.5-6.06 5.09 1.94 7.68L12 18.3l-6.72 4.22 1.94-7.68L1.16 9.75l7.9-.5z" />
        </svg>
      </span>
      <span className="font-semibold tracking-tight" style={{ color: "inherit" }}>Trustpilot</span>
    </span>
  );
}

/* Variante « discret » : une ligne dans le pied de page. Elle hérite de la couleur du
   pied de page pour ne pas trouer la maquette, seule la pastille reste verte. */
export function TrustpilotBouton({ variante = "principal" }: { variante?: "principal" | "discret" }) {
  if (variante === "discret") {
    return (
      <a
        href={SITE.trustpilotFiche}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <MarqueTrustpilot taille={16} />
        <span className="hidden sm:inline">— voir nos avis</span>
        <span className="sm:hidden">— nos avis</span>
      </a>
    );
  }
  return (
    <a
      href={SITE.trustpilotAvis}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary inline-flex items-center gap-2.5"
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-none"
        style={{ background: VERT_TRUSTPILOT, width: 18, height: 18 }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" focusable="false">
          <path d="M12 1.9l2.94 7.35 7.9.5-6.06 5.09 1.94 7.68L12 18.3l-6.72 4.22 1.94-7.68L1.16 9.75l7.9-.5z" />
        </svg>
      </span>
      Déposer un avis sur Trustpilot
    </a>
  );
}


/* WIDGET OFFICIEL TRUSTPILOT.

   Il lit les données réelles de la fiche : rien n'est saisi à la main, donc rien ne peut
   devenir faux avec le temps. Le script est chargé une seule fois pour toute la page via
   next/script ; le composant peut donc être monté plusieurs fois sans le recharger.

   `lazyOnload` est délibéré : ce widget est une invitation, pas un contenu essentiel. Il
   ne doit pas retarder l'affichage du texte ni la première interaction. */
export function TrustpilotWidget({ largeur = "100%", hauteur = "52px", repli }: { largeur?: string; hauteur?: string; repli?: React.ReactNode }) {
  return (
    <>
      <div
        className="trustpilot-widget"
        data-locale="fr-FR"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6a9bdfd6294e62e75676d053"
        data-style-height={hauteur}
        data-style-width={largeur}
        data-theme="light"
      >
        {/* Contenu de repli. Trustpilot le remplace par son widget dès que son script est
            chargé ; il reste affiché si le script est bloqué (bloqueur de contenu, réseau
            coupé, script indisponible). Ce n'est donc pas du décor : pour une partie des
            visiteurs, c'est CE bloc qu'ils verront, et il doit tenir tout seul. */}
        {repli ?? (
          <a href={SITE.trustpilotFiche} target="_blank" rel="noopener noreferrer">
            Voir nos avis sur Trustpilot
          </a>
        )}
      </div>
      <Script
        id="trustpilot-bootstrap"
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}

/* Ligne compacte, pour le PREMIER ÉCRAN.

   Elle existe pour une raison précise : le client veut le badge visible dès l'ouverture,
   et l'encart complet y serait trop lourd — il pousserait le contenu utile sous la ligne
   de flottaison, ce qui est exactement ce qu'on ne veut pas d'un badge.

   Le mot employé est « Évaluez-nous », pas une note. À cet endroit, le visiteur n'a encore
   rien lu : si on lui montrait des étoiles, il les prendrait pour un score, et le score
   serait faux. Une invitation, elle, est vraie dès le premier jour — et c'est aussi la
   seule chose qu'on puisse honnêtement afficher avec zéro avis. */
export function TrustpilotLigne() {
  return (
    <a
      href={SITE.trustpilotFiche}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 border border-line bg-surface rounded-none pl-3 pr-4 py-2.5 hover:border-line-strong transition-colors"
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-none shrink-0"
        style={{ background: VERT_TRUSTPILOT, width: 22, height: 22 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" focusable="false">
          <path d="M12 1.9l2.94 7.35 7.9.5-6.06 5.09 1.94 7.68L12 18.3l-6.72 4.22 1.94-7.68L1.16 9.75l7.9-.5z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-ivoire font-semibold t-petit group-hover:text-orange-deep transition-colors">
          Nos avis sur Trustpilot
        </span>
        <span className="text-muted t-micro">
          Plateforme indépendante — nous ne pouvons ni modifier ni supprimer un avis
        </span>
      </span>
    </a>
  );
}

/* Encart complet, pour les pages où la preuve est le sujet.
   Le texte dit explicitement que la plateforme est indépendante et que nous n'avons pas
   la main sur le contenu : c'est ce qui donne sa valeur à un avis, et cela évite de
   laisser croire que les retours seraient filtrés avant publication. */
export function TrustpilotEncart() {
  return (
    <div className="border border-line bg-surface rounded-none overflow-hidden">
      <div aria-hidden style={{ background: VERT_TRUSTPILOT, height: 3 }} />
      <div className="p-6 md:p-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-ivoire">
          <MarqueTrustpilot taille={26} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="display t-fort text-ivoire">Vous avez fait appel à nous&nbsp;?</h3>
          <p className="text-muted t-sec leading-relaxed max-w-2xl">
            Votre retour aide les prochains propriétaires à savoir à qui ils confient leur chantier. L&apos;avis est
            déposé et publié sur Trustpilot, une plateforme indépendante&nbsp;: nous n&apos;avons pas la main sur son
            contenu, et nous ne pouvons ni le modifier ni le supprimer.
          </p>
        </div>
        <div>
          <TrustpilotBouton />
        </div>
        {/* Dit franchement où en est la fiche. Un badge sans note fait naître la question ;
            mieux vaut y répondre que laisser le visiteur supposer qu'on cache une note. */}
        <p className="text-muted t-mini leading-relaxed border-t border-line pt-4">
          Notre fiche vient d&apos;être ouverte et ne comporte pas encore d&apos;avis. Aucune note n&apos;est donc
          affichée&nbsp;: nous préférons une page vide à une réputation empruntée.
        </p>
      </div>
    </div>
  );
}
