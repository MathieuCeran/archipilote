import type { Metadata } from "next";
import { MqHero, MqSection, MqChecklist, MqNumbered, MqFaq, MqReadNext } from "../components/mq";
import { ContactForm } from "./contact-content";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: "Contact — Étude de projet sans engagement, sous 48 heures ouvrées | ARCHI PILOTE RÉNOVATION",
  description:
    "Décrivez votre projet de rénovation : commune, type de travaux, surface et budget envisagé. Première lecture et budget indicatif sous 48 heures ouvrées, sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <MqHero
        kicker="Contact"
        title="Décrivez votre projet, recevez une étude sans engagement sous 48 heures ouvrées"
        lead="Le formulaire ci-dessous permet de qualifier votre projet de rénovation : commune, type de travaux, surface et budget envisagé. ARCHI PILOTE RÉNOVATION lit votre demande, hiérarchise les travaux et revient vers vous sous 48 heures ouvrées avec une première lecture et un budget indicatif, sans engagement de votre part."
      />

      {/*
        À GÉNÉRER — image éditoriale manquante (aucun visuel équivalent dans
        public/photos/chantiers ni public/photos/pedagogie).
        Prompt FR : "Vue verticale en légère plongée sur une table en bois ivoire :
        plans d'architecte déroulés, un mètre ruban, des échantillons de bois (chêne,
        noyer) et de pierre (travertin, marbre) disposés avec soin, et un téléphone
        posé affichant une galerie de photos de suivi de chantier, sans aucune donnée
        personnelle ni visage visible. Lumière naturelle douce, ambiance éditoriale
        sobre, palette ivoire et bois, aucun texte incrusté, aucune marque visible."
        Alt prévu : "Préparation d'une étude de projet de rénovation avec plans et
        échantillons."
        Une fois générée : <MqFig src="/photos/pedagogie/etude-projet-plans-echantillons.jpg"
        alt="Préparation d'une étude de projet de rénovation avec plans et échantillons"
        ratio="aspect-[3/4]" /> dans un <div className="max-w-md my-4">.
      */}

      <MqSection kicker="Ce qu'il faut préparer" title="Quatre informations suffisent pour démarrer">
        <MqChecklist items={[
          "Adresse ou commune du bien concerné",
          "Quelques photos si elles sont disponibles",
          "Objectifs du projet et priorités",
          "Calendrier souhaité et budget indicatif",
        ]} />
      </MqSection>

      <MqSection kicker="Formulaire de contact" title="Renseigner le projet" wide>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-8 items-start">
          <ContactForm />
          <div className="flex flex-col gap-4">
            <div className="border border-line bg-surface rounded-none p-6">
              <p className="eyebrow">Par téléphone</p>
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="display t-fort text-ivoire hover:text-orange-deep transition-colors block mt-1">{SITE.telAffiche}</a>
              <p className="text-muted t-petit mt-1">Du lundi au vendredi, 8h30 – 19h</p>
            </div>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="border border-line bg-surface rounded-none p-6 block group">
              <p className="eyebrow">Le plus rapide</p>
              <span className="display t-haut text-ivoire group-hover:text-orange-deep transition-colors block mt-1">Écrire sur WhatsApp</span>
              <p className="text-muted t-petit mt-1">Photos du projet, réponse rapide</p>
            </a>
            <div className="border border-line bg-surface rounded-none p-6">
              <p className="eyebrow">Siège</p>
              {/* 05/09 : « IA RENOV SASU » retiré de ce bloc. La règle du projet, écrite dans
                  app/layout.tsx, réserve la dénomination sociale aux mentions légales et à
                  UNE ligne du pied de page. Le visiteur d'une page de contact cherche une
                  adresse, pas une raison sociale ; et faire apparaître la structure à côté
                  de la marque brouille précisément la séparation que le reste du site
                  s'attache à tenir. L'adresse, elle, est conservée telle quelle. */}
              <p className="text-ivoire/85 t-petit mt-1 leading-relaxed">8 bis rue Gabriel Péri<br />92250 La Garenne-Colombes</p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection kicker="Ce qui se passe après votre demande" title="Trois temps, sans surpromesse de délai non tenable" wide>
        <MqNumbered items={[
          { title: "Réception", text: "Le message est reçu et horodaté ; un accusé de lecture peut être envoyé par courriel." },
          { title: "Qualification", text: "Le projet est relu au regard de la commune, du type de travaux et des contraintes visibles (structure, copropriété, ventilation)." },
          { title: "Proposition de suite", text: "Retour sous 48 heures ouvrées : demande de précisions, rendez-vous téléphonique ou visite selon la nature du projet." },
        ]} />
      </MqSection>

      <MqSection kicker="Nos engagements" title="Un cadre clair avant tout échange">
        <MqChecklist items={[
          "Étude de projet sans engagement et sans engagement",
          "Réponse sous 48 heures ouvrées",
          "Aucune donnée transmise sans votre accord",
          "Un interlocuteur identifié pour le suivi du dossier",
        ]} />
        <p className="t-mini text-muted mt-8 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Avant de nous écrire">
        <MqFaq items={[
          { q: "L'étude de projet est-elle facturée ?", a: "La première lecture du projet, la hiérarchisation des travaux et une estimation de budget indicative ne vous sont pas facturées, et n'engagent à rien : vous les recevez sous 48 heures ouvrées après un dossier suffisamment renseigné. Au-delà, dès qu'il s'agit de monter un dossier d'autorisation, de consulter les entreprises ou de suivre un chantier, la mission fait l'objet d'une proposition écrite dont les conditions vous sont indiquées avant tout engagement." },
          { q: "Que se passe-t-il après l'envoi du formulaire ?", a: "Le message est reçu, le projet est qualifié (nature des travaux, zone géographique, contraintes visibles), puis une proposition de suite est envoyée par courriel ou par téléphone : rendez-vous, visite ou demande de pièces complémentaires." },
          { q: "Quelles informations sont utiles avant de contacter ARCHI PILOTE RÉNOVATION ?", a: "Adresse ou commune du bien, quelques photos si possible, objectifs du projet, calendrier souhaité et un budget envisagé même approximatif. Ces éléments accélèrent la première lecture." },
          { q: "ARCHI PILOTE RÉNOVATION intervient-il partout en France ?", a: "L'accompagnement est concentré sur Paris, les Hauts-de-Seine et l'Île-de-France, territoire sur lequel le réseau d'entreprises partenaires est le mieux structuré." },
          { q: "Un premier échange engage-t-il à démarrer les travaux ?", a: "Non. L'étude de projet permet de clarifier la faisabilité et le budget avant toute décision, sans vous engager. Le passage aux devis puis au chantier reste au libre choix du client." },
        ]} />
      </MqSection>

      <MqReadNext items={[
        { href: "/notre-methode", label: "Notre méthode", sub: "Les étapes du pilotage" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un devis reçu" },
        { href: "/faq", label: "Questions fréquentes", sub: "Toutes les réponses classées" },
      ]} />
    </main>
  );
}
