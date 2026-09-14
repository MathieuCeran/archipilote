import Link from "next/link";
import { SITE } from "../data";

/* ============================================================================
   LA CLÔTURE — montée par une trentaine de pages.

   Ce qu’elle était : une photographie en parallaxe sous un voile, du grain,
   un titre géant centré révélé mot par mot, et deux boutons au centre. Quatre
   effets pour dire « appelez-nous ».

   Ce qu’elle devient : le bloc de clôture de l’accueil. Un titre à gauche,
   et à droite une carte qui donne un nom, un numéro, des heures, puis les
   actions. Une maison ne termine pas sur deux boutons en l’air.

   05/09 : « se déplace sous 5 jours » avait été retiré, et le reste ici. Ce
   composant est monté par une trentaine de pages : la phrase engageait un
   délai de déplacement sur presque tout le site sans qu’aucun processus ne le
   garantisse — et un délai écrit sur une page commerciale s’oppose au
   professionnel en cas de litige. La prise de contact est maintenue, la
   promesse chiffrée ne l’est pas.
   ============================================================================ */

export function CtaFinal() {
  return (
    <section className="rf-dossier">
      <div className="rf-wrap rf-section">
        <div className="mq-cloture">
          <div>
            <p className="rf-repere">Visite technique sans engagement</p>
            <h2 className="rf-titre" style={{ fontSize: "var(--t-h2-l)" }}>
              Votre maison mérite un vrai chantier, pas un chantier vague.
            </h2>
            <p className="rf-chapo mt-6" style={{ color: "#c3c0b6", maxWidth: "34rem" }}>
              Racontez-nous votre projet — surface, budget, commune. Un chargé de projet vous rappelle pour convenir
              d’une visite du bien.
            </p>
          </div>

          <div className="rf-contact-carte">
            <p className="rf-contact-libelle">De vive voix</p>
            <p className="rf-contact-numero">
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`}>{SITE.telAffiche}</a>
            </p>
            <p className="rf-contact-heures">
              {SITE.horaires.map((h) => `${h.jours}, ${h.heures.toLowerCase()}`).join(" · ")}
            </p>
            <div className="rf-contact-actions">
              <Link href="/contact" className="rf-btn rf-btn--clair">
                Décrire mon projet
              </Link>
              <Link href="/estimateur-travaux" className="rf-btn rf-btn--fantome">
                Estimer mon budget
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
