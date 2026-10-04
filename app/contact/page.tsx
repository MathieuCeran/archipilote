import type { Metadata } from "next";
import { PageHero, PageSection, PageEtapes, PageCoches, PageFaq, PageLiens, JsonLdPage } from "../components/page-kit";
import { ContactForm } from "./contact-content";
import { SITE } from "../data";

/* Intention unique : décrire son projet et demander une étude sans engagement.
   Le formulaire (./contact-content.tsx, branché sur /api/contact) est inchangé.
   Retiré : lien vers /clinique-du-devis (page redirigée). Pas de CtaFinal ni de BarreProjet :
   les deux renvoient vers cette même page. */

const CHEMIN = "/contact";
const TITRE = "Contact : étude de projet sans engagement";
const DESCRIPTION =
  "Décrivez votre projet de rénovation : commune, type de travaux, surface et budget. Première lecture et budget indicatif sous 48 h ouvrées, sans engagement.";
const FIL = [{ nom: "Contact", href: CHEMIN }];

export const metadata: Metadata = {
  title: "Contact : étude de projet sans engagement sous 48 h ouvrées | ARCHI PILOTE RÉNOVATION",
  description: DESCRIPTION,
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Contact : étude de projet sans engagement sous 48 h ouvrées | ARCHI PILOTE RÉNOVATION",
    description: DESCRIPTION,
    url: CHEMIN,
    images: [{ url: "/og.jpg" }],
  },
};

const FAQ = [
  {
    question: "L'étude de projet est-elle facturée ?",
    reponse:
      "Non. La première lecture du projet, la hiérarchisation des travaux et une estimation de budget indicative ne vous sont pas facturées et n'engagent à rien. Dès qu'il s'agit de monter un dossier d'autorisation, de consulter les entreprises ou de suivre un chantier, la mission fait l'objet d'une proposition écrite, présentée avant tout engagement.",
  },
  {
    question: "Que se passe-t-il après l'envoi du formulaire ?",
    reponse:
      "Le message est reçu, le projet est qualifié (nature des travaux, zone, contraintes visibles), puis nous revenons vers vous par courriel ou par téléphone : rendez-vous, visite ou demande de précisions.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    reponse:
      "Non. L'accompagnement est concentré sur Paris, les Hauts-de-Seine et l'Île-de-France, où le réseau d'entreprises partenaires est le mieux structuré.",
  },
  {
    question: "Un premier échange engage-t-il à démarrer les travaux ?",
    reponse:
      "Non. L'étude de projet clarifie la faisabilité et le budget avant toute décision. Le passage aux devis puis au chantier reste votre libre choix.",
  },
];

const tel = `tel:${SITE.tel.replace(/\s/g, "")}`;

export default function Page() {
  return (
    <main className="relative z-10">
      <JsonLdPage chemin={CHEMIN} nom={TITRE} description={DESCRIPTION} fil={FIL} faq={FAQ} />

      <PageHero
        fil={FIL}
        titre="Contact : décrivez votre projet de rénovation"
        chapo="Commune, type de travaux, surface et budget envisagé : nous lisons votre demande et revenons vers vous sous 48 heures ouvrées avec une première lecture et un budget indicatif, sans engagement."
        actions={false}
      />

      <PageSection
        id="formulaire"
        titre="Votre demande d'étude"
        accroche="Quelques informations suffisent. Vous pouvez aussi nous appeler ou nous écrire sur WhatsApp."
      >
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-8 items-start">
          <ContactForm />
          <aside className="pg-carte-engagements">
            <p className="pg-carte-titre">Nous joindre</p>
            <dl className="flex flex-col gap-5">
              <div>
                <dt className="font-semibold">Téléphone</dt>
                <dd>
                  <a href={tel}>{SITE.telAffiche}</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">WhatsApp</dt>
                <dd>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    Écrire sur WhatsApp
                  </a>{" "}
                  — photos du projet, réponse rapide
                </dd>
              </div>
              <div>
                <dt className="font-semibold">E-mail</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Horaires</dt>
                {SITE.horaires.map((h) => (
                  <dd key={h.jours}>
                    {h.jours} : {h.heures}
                  </dd>
                ))}
              </div>
              <div>
                <dt className="font-semibold">Siège</dt>
                <dd>
                  8 bis rue Gabriel Péri
                  <br />
                  92250 La Garenne-Colombes
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </PageSection>

      <PageSection
        titre="Ce qu'il est utile de préparer"
        accroche="Ces éléments accélèrent la première lecture, mais aucun n'est obligatoire pour nous écrire."
      >
        <PageCoches
          items={[
            "L'adresse ou la commune du bien",
            "Quelques photos, si vous en avez",
            "Vos objectifs et vos priorités",
            "Le calendrier souhaité et un budget, même approximatif",
          ]}
        />
      </PageSection>

      <PageSection
        titre="Ce qui se passe après votre demande"
        accroche="Trois temps, sans promesse de délai que nous ne tiendrions pas."
      >
        <PageEtapes
          items={[
            { titre: "Réception", texte: "Votre message est reçu et horodaté." },
            { titre: "Qualification", texte: "Le projet est relu au regard de la commune, du type de travaux et des contraintes visibles : structure, copropriété, ventilation." },
            { titre: "Proposition de suite", texte: "Retour sous 48 heures ouvrées : demande de précisions, rendez-vous téléphonique ou visite technique sur place." },
          ]}
        />
      </PageSection>

      <PageSection titre="Questions fréquentes avant de nous contacter">
        <PageFaq items={FAQ} />
      </PageSection>

      <PageSection titre="Pour aller plus loin">
        <PageLiens
          items={[
            { href: "/notre-methode", titre: "Notre méthode", texte: "Les étapes du pilotage." },
            { href: "/estimateur-travaux", titre: "Estimateur de travaux", texte: "Une fourchette de budget en une minute." },
            { href: "/faq", titre: "Questions fréquentes", texte: "Toutes les réponses, classées par thème." },
          ]}
        />
      </PageSection>

    </main>
  );
}
