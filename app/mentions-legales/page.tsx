import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero, PageSection } from "../components/page-kit";
import { SITE } from "../data";

export const metadata: Metadata = {
  alternates: { canonical: "/mentions-legales" },
  title: "Mentions légales — ARCHI PILOTE RÉNOVATION",
  description: "Mentions légales d'ARCHI PILOTE RÉNOVATION, piloté par IA RENOV (SASU) : éditeur, siège, RCS, hébergement, propriété intellectuelle et données personnelles.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Mentions légales — ARCHI PILOTE RÉNOVATION",
    description: "Mentions légales d'ARCHI PILOTE RÉNOVATION, piloté par IA RENOV (SASU) : éditeur, siège, RCS, hébergement, propriété intellectuelle et données personnelles.",
    url: "/mentions-legales",
    images: [{ url: "/og.jpg" }],
  },
};

/* Bloc de texte légal : le contenu est repris mot pour mot (validé
   juridiquement) ; seule la présentation passe au kit de page. */
function Texte({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4" style={{ maxWidth: "46rem", fontFamily: "var(--f-read)", lineHeight: 1.7, color: "var(--encre-2)" }}>
      {children}
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <main className="relative z-10">
      <PageHero fil={[{ nom: "Mentions légales", href: "#" }]} titre="Mentions légales" chapo="Qui édite ce site." actions={false} />

          {/* 04/10/2026 : informations reprises de la fiche Pappers d'IA RENOV
              (https://www.pappers.fr/entreprise/ia-renov-889976387), qui reproduit le
              registre du commerce. L'adresse est celle du siège au RCS (« 8 rue Gabriel
              Péri ») ; le reste du site affiche « 8 bis » — à faire trancher par le client. */}
          <PageSection titre="Éditeur du site">
            <Texte>
            <p>ARCHI PILOTE RÉNOVATION est piloté par <strong>IA RENOV</strong>.</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Forme juridique : société par actions simplifiée unipersonnelle (SASU)</li>
              <li>Capital social : 1 000,00 €</li>
              <li>Siège social : 8 rue Gabriel Péri, 92250 La Garenne-Colombes</li>
              <li>SIREN : 889 976 387 — SIRET du siège : 889 976 387 00023</li>
              <li>RCS : 889 976 387 R.C.S. Nanterre</li>
              <li>N° de TVA intracommunautaire : FR02 889976387</li>
              <li>Code NAF/APE : 74.10Z — Activités spécialisées de design</li>
              <li>Président et directeur de la publication : Ilann Atlan</li>
              <li>
                Contact : <a href={`mailto:${SITE.email}`}>{SITE.email}</a> — {SITE.telAffiche}
              </li>
            </ul>
            </Texte>
          </PageSection>

          <PageSection titre="Ce que la marque est, et n'est pas">
            <Texte>
            <p>
              ARCHI PILOTE RÉNOVATION est une marque de pilotage de projets de rénovation, pilotée par IA RENOV (SASU).
              ARCHI PILOTE RÉNOVATION n&apos;est pas une entreprise de travaux, n&apos;exécute aucun lot et ne facture aucun
              travaux. Les travaux présentés sur ce site sont réalisés et facturés par des entreprises partenaires
              indépendantes, qui contractent directement avec le client et portent chacune leurs propres assurances
              de responsabilité civile professionnelle et de garantie décennale.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Hébergement">
            <Texte>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis —{" "}
              <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Propriété intellectuelle">
            <Texte>
            <p>
              L&apos;ensemble des éléments de ce site (textes, structure, charte graphique) est protégé au titre du
              droit d&apos;auteur. Les photographies présentées comme chantiers réels et légendées « chantier réel des
              équipes partenaires » proviennent de projets effectivement pilotés par les équipes partenaires du
              groupe. Les autres visuels (schémas explicatifs, références de style, photographies de niveau de
              finition) sont des illustrations et sont signalés comme tels sur les pages concernées.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Données personnelles et cookies">
            <Texte>
            <p>
              Les informations transmises via le formulaire de contact de ce site sont utilisées
              uniquement pour traiter votre demande de projet. Ce site ne dépose aucun cookie de mesure d&apos;audience
              ni de publicité. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation et d&apos;opposition sur vos données, ainsi que d&apos;un droit de réclamation
              auprès de la CNIL. Le détail des données collectées, des durées de conservation et des modalités
              d&apos;exercice de ces droits figure dans la{" "}
              <Link href="/politique-confidentialite">politique de confidentialité</Link>.
            </p>
            </Texte>
          </PageSection>
    </main>
  );
}
