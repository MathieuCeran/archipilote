import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { CtaFinal } from "../../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/realisations/extension-yvelines" },
  title: "Extension de plain-pied, Yvelines — 28 m² gagnés | ARCHI PILOTE RÉNOVATION",
  description: "Extension de 28 m² sur un jardin en pente : emprise au sol contrainte par le PLU, vide sanitaire ventilé, raccordement de niveau avec le séjour existant.",
  robots: { index: false, follow: true },
};

export default function EtudeDeCasPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisation — visuel d'illustration"
        segments={[{ text: "Extension de plain-pied," }, { text: "Yvelines.", serif: true, gradient: true }]}
        lead="28 m² gagnés sur un jardin en pente, entre contrainte de PLU et raccordement au séjour existant."
      />

      <section className="relative pb-6">
        <div className="rf-wrap mq-mesure--large">
          {/* 05/09 — CADRE ET CLÉ CORRIGÉS. Le fichier est chSurelevationBrique.jpeg, en 1050x1400
              (portrait) : affiché dans un cadre 16/9, il perdait près des deux tiers de sa hauteur,
              c'est-à-dire précisément la charpente et le solivage qui font le sujet. Le cadre passe
              au ratio natif 3/4. La clé PHOTOS.grosOeuvre était par ailleurs un ALIAS du même
              fichier : elle est remplacée par le chemin explicite, pour que le comptage de
              réemploi du site voie l'image. Le sujet — volume neuf en briques monomur, charpente
              et solivage bois posés — est cohérent avec une extension, qui est une construction
              neuve, et la mention ci-dessous rappelle qu'il s'agit d'un visuel d'illustration. */}
          <div className="relative aspect-[3/4] max-w-md rounded-none overflow-hidden card-e mb-4">
            <img src="/photos/chantiers/chSurelevationBrique.jpeg" alt="Volume neuf en briques monomur, charpente et solivage bois posés, échafaudage roulant en place" className="absolute inset-0 size-full object-cover" />
          </div>
          <p className="text-center mq-mention">Chantier réel des équipes partenaires, pris à titre d&apos;illustration : ce n&apos;est pas le chantier décrit ci-dessous</p>
        </div>
      </section>

      <article className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure flex flex-col gap-7 text-ivoire/85 t-base leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">La situation</h2>
            <p>
              Une maison de 92 m² avec un séjour de 21 m² jugé trop petit, et un jardin en pente descendant de
              80 cm sur la profondeur de la parcelle. Projet : une extension en prolongement du séjour, ouverte sur
              le jardin.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">La contrainte</h2>
            <p>
              Deux contraintes se sont croisées. Le PLU communal limitait l&apos;emprise au sol à un pourcentage qui
              laissait exactement 31 m² disponibles — l&apos;extension a donc été dimensionnée à 28 m² pour garder
              une marge, et non l&apos;inverse. Et la pente imposait soit un terrassement important, soit une
              extension sur vide sanitaire ventilé. Le vide sanitaire a été retenu : moins de terres à évacuer,
              meilleure gestion de l&apos;humidité, et raccordement de niveau avec le séjour existant.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Ce qui a été fait</h2>
            <p>
              Déclaration préalable (surface créée inférieure au seuil du permis de construire, emprise vérifiée
              avant dépôt), fondations et vide sanitaire ventilé, murs en blocs isolés, charpente traditionnelle en
              prolongement de la toiture existante, couverture raccordée à l&apos;existant avec traitement de la
              noue, baie coulissante de 3,60 m, chape isolée avec plancher chauffant raccordé sur l&apos;installation
              existante, sol continu entre le séjour d&apos;origine et l&apos;extension.
            </p>
          </div>
          {/* 06/09 — SECONDE PHOTOGRAPHIE. La page ne portait qu'un seul visuel. Celle-ci vient du
              lot WhatsApp inédit et a été ouverte à l'écran avant d'être légendée : on y voit des
              tubes orange déroulés en escargot et agrafés sur des panneaux isolants quadrillés,
              bande périphérique bleue en pied de cloison, deux compagnons au travail, chape non
              coulée. Elle est posée ici parce que le paragraphe ci-dessus nomme précisément cet
              ouvrage (« chape isolée avec plancher chauffant »). Portrait natif 1200x1600, affiché
              en 3/4 et en largeur limitée pour ne rien recadrer. Comme le visuel de tête, ce n'est
              pas le chantier décrit : la mention sous l'image le dit. */}
          <figure className="flex flex-col gap-3 mt-1">
            <div className="relative aspect-[3/4] max-w-sm w-full rounded-none overflow-hidden card-e">
              <img
                src="/photos/chantiers/chPlancherChauffantPerEscargot.jpeg"
                alt="Pose d'un plancher chauffant : tubes orange déroulés en escargot et agrafés sur des panneaux isolants quadrillés, bande périphérique bleue en pied de cloison"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <figcaption className="text-center leading-relaxed mq-mention">
              Plancher chauffant à eau en cours de pose, avant coulage de la chape — chantier réel des équipes partenaires, pris à titre d&apos;illustration : ce n&apos;est pas le chantier décrit ci-dessus
            </figcaption>
          </figure>

          <div className="flex flex-col gap-2">
            <h2 className="display t-titre text-ivoire normal-case">Le calendrier réel</h2>
            <p>
              Trois semaines d&apos;étude et de vérification d&apos;emprise. Un mois d&apos;instruction de la
              déclaration préalable, plus le délai de recours des tiers. Neuf semaines de travaux. La reprise de la
              toiture existante au droit de la jonction a représenté à elle seule deux semaines : c&apos;est toujours
              le point le plus délicat d&apos;une extension accolée.
            </p>
          </div>

          <dl className="card-e rounded-none p-6 grid grid-cols-2 gap-4 mt-2">
            <div><dt className="mq-mention">Surface créée</dt><dd className="text-ivoire">28 m²</dd></div>
            <div><dt className="mq-mention">Autorisation</dt><dd className="text-ivoire">Déclaration préalable</dd></div>
            <div><dt className="mq-mention">Durée de chantier</dt><dd className="text-ivoire">9 semaines</dd></div>
            <div><dt className="mq-mention">Budget</dt><dd className="text-ivoire">Indicatif, communiqué sur demande</dd></div>
          </dl>
        </div>
      </article>

      <CtaFinal />
    </main>
  );
}
