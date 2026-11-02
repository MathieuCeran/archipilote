import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero, PageSection } from "../components/page-kit";
import { SITE } from "../data";
import { withWw, wwMetadata } from "@/lib/whatswrong-pages";

export const generateMetadata = (): Promise<Metadata> => wwMetadata("/mentions-legales", {
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
});

/* Bloc de texte légal : le contenu est repris mot pour mot (validé
   juridiquement) ; seule la présentation passe au kit de page. */
function Texte({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4" style={{ maxWidth: "46rem", fontFamily: "var(--f-read)", lineHeight: 1.7, color: "var(--encre-2)" }}>
      {children}
    </div>
  );
}

function MentionsLegalesPage() {
  return (
    <main className="relative z-10">
      <PageHero fil={[{ nom: "Mentions légales", href: "#" }]} titre="Mentions légales" chapo="Qui édite ce site." actions={false} />

          {/* 04/10/2026 : informations reprises de la fiche Pappers d'IA RENOV
              (https://www.pappers.fr/entreprise/ia-renov-889976387), qui reproduit le
              registre du commerce. L'adresse est celle du siège au RCS (« 8 rue Gabriel
              Péri »). 22/10/2026 : le « 8 bis » affiché ailleurs est aligné sur ce « 8 »,
              majoritaire sur les quatre sites d'IA RENOV et seul inscrit au RCS. */}
          <PageSection titre="Éditeur du site">
            <Texte>
            <p>ARCHI PILOTE RÉNOVATION est piloté par <strong>IA RENOV</strong>.</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Forme juridique : société par actions simplifiée unipersonnelle (SASU)</li>
              <li>Capital social : 1 000,00 €</li>
              <li>Siège social : 8 rue Gabriel Péri, 92250 La Garenne-Colombes</li>
              <li>SIREN : 889 976 387 — SIRET du siège : 889 976 387 00023</li>
              <li>RCS : 889 976 387 R.C.S. Nanterre, immatriculée le 14 octobre 2020</li>
              <li>N° de TVA intracommunautaire : FR02889976387</li>
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
              Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
              États-Unis —{" "}
              <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Conception et réalisation du site">
            <Texte>
            <p>
              AJD Studio (entreprise individuelle) — SIREN 532 735 990, RCS Bourg-en-Bresse —{" "}
              <a href="https://ajdstudio.fr/" target="_blank" rel="noreferrer">ajdstudio.fr</a>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Propriété intellectuelle">
            <Texte>
            <p>
              L&apos;ensemble des éléments de ce site (textes, structure, charte graphique) est protégé au titre du
              droit d&apos;auteur. Les photographies présentées comme chantiers réels et légendées « chantier réel des
              équipes partenaires » proviennent de chantiers effectivement pilotés par ARCHI PILOTE RÉNOVATION et réalisés par des
              entreprises partenaires. Les autres visuels (schémas explicatifs, références de style, photographies de niveau de
              finition) sont des illustrations et sont signalés comme tels sur les pages concernées.
            </p>
            </Texte>
          </PageSection>

          {/* 29/10/2026 : aligné sur HÉRITAGE BÂTI, d'après ce que fait réellement le code
              (app/api/contact/route.ts, lib/mail.ts) : SMTP Hostinger, repli FormSubmit
              quand la messagerie n'est pas configurée, copie à LEAD_COPY. */}
          <PageSection titre="Données personnelles et cookies">
            <Texte>
            <p>
              Le responsable du traitement est IA RENOV, 8 rue Gabriel Péri, 92250 La Garenne-Colombes. Les
              informations transmises via le formulaire de contact de ce site sont utilisées uniquement pour traiter
              votre demande de projet. Elles sont traitées par les prestataires techniques suivants : Vercel Inc.
              (hébergement du site), Hostinger (messagerie qui reçoit les demandes envoyées depuis le formulaire) et,
              en secours lorsque cette messagerie n&apos;est pas en service, FormSubmit (service d&apos;envoi de formulaires, situé
              hors de l&apos;Union européenne). Une copie de chaque demande est adressée au prestataire technique du
              site, pour s&apos;assurer de sa bonne réception. Les transferts hors de l&apos;Union européenne sont
              encadrés par les garanties prévues par le règlement général sur la protection des données.
            </p>
            <p>
              Durées de conservation : demande sans suite, 3 ans à compter du dernier contact ; client, durée de la
              relation, puis archivage pendant les durées imposées par la loi.
            </p>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation du
              traitement, d&apos;opposition et de portabilité de vos données, ainsi que du droit de retirer votre
              consentement à tout moment et de définir des directives sur le sort de vos données après votre décès.
              Pour les exercer, écrivez à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Vous pouvez adresser une
              réclamation à la Commission nationale de l&apos;informatique et des libertés (CNIL), sur{" "}
              <a href="https://www.cnil.fr/" target="_blank" rel="noreferrer">cnil.fr</a>.
            </p>
            <p>
              Les cookies Google Ads, qui mesurent l&apos;efficacité de nos annonces, ne sont déposés qu&apos;avec
              votre accord, donné ou refusé dans le bandeau affiché à la première visite ; aucun autre cookie de
              mesure d&apos;audience n&apos;est utilisé. Refuser n&apos;empêche pas d&apos;utiliser le site. Votre
              choix est conservé six mois, puis vous est demandé à nouveau ; vous pouvez le modifier à tout moment
              avec le lien « Gérer les cookies » en bas de chaque page. Le détail figure dans la{" "}
              <Link href="/politique-confidentialite">politique de confidentialité</Link>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Médiation de la consommation">
            <Texte>
            <p>
              Conformément à l&apos;article L612-1 du Code de la consommation, tout consommateur a le droit de
              recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un
              litige. Avant de le saisir, le consommateur adresse une réclamation écrite au professionnel concerné.
            </p>
            <p>
              Pour les questions relatives au site et au pilotage d&apos;ARCHI PILOTE RÉNOVATION, la réclamation est
              adressée à IA RENOV, 8 rue Gabriel Péri, 92250 La Garenne-Colombes, ou à{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Les coordonnées du médiateur de la consommation sont
              communiquées sur simple demande à cette adresse.
            </p>
            <p>
              Pour les litiges relatifs aux travaux, le professionnel cocontractant est l&apos;entreprise partenaire
              qui a signé le devis ; son médiateur de la consommation est indiqué dans ses documents contractuels.
            </p>
            </Texte>
          </PageSection>
    </main>
  );
}

export default withWw("/mentions-legales", MentionsLegalesPage);
