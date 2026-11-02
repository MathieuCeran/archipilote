import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero, PageSection } from "../components/page-kit";
import { SITE } from "../data";
import { ReinitialiserCookies } from "../components/google-ads";
import { withWw, wwMetadata } from "@/lib/whatswrong-pages";

export const generateMetadata = (): Promise<Metadata> => wwMetadata("/politique-confidentialite", {
  alternates: { canonical: "/politique-confidentialite" },
  title: "Politique de confidentialité — ARCHI PILOTE RÉNOVATION",
  description: "Données collectées, finalités, durée de conservation, transferts hors Union européenne et droits RGPD des visiteurs et prospects.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    title: "Politique de confidentialité — ARCHI PILOTE RÉNOVATION",
    description: "Données collectées, finalités, durée de conservation, transferts hors Union européenne et droits RGPD des visiteurs et prospects.",
    url: "/politique-confidentialite",
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

function PolitiqueConfidentialitePage() {
  return (
    <main className="relative z-10">
      <PageHero fil={[{ nom: "Politique de confidentialité", href: "#" }]} titre="Politique de confidentialité" chapo="Données collectées, finalités, durée de conservation et droits RGPD des visiteurs et prospects." actions={false} />

          <PageSection titre="Responsable du traitement">
            <Texte>
            <p>{SITE.structure}</p>
            <p>
              Contact pour toute question relative à vos données personnelles :{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> — {SITE.telAffiche}.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Données collectées">
            <Texte>
            <p>
              Le formulaire de contact de ce site collecte : nom et prénom, coordonnées (téléphone, courriel
              facultatif), commune du bien, type de projet, surface, budget envisagé, horizon du projet et
              description libre. Ces champs sont ceux strictement nécessaires pour qualifier une demande d&apos;étude
              de projet. Votre demande indique aussi la provenance de votre visite (moteur de recherche, publicité ou site
              d&apos;origine, campagne, page d&apos;arrivée), relevée sans cookie et transmise uniquement avec le formulaire.
              L&apos;estimateur de travaux, lui, fonctionne entièrement dans votre navigateur : aucune
              donnée saisie n&apos;est transmise ni conservée par nos serveurs.
            </p>
            <p>
              Le site utilise la balise Google Ads (Google Ireland Ltd) pour mesurer l&apos;efficacité de ses annonces :
              une demande envoyée par le formulaire ou un clic sur le numéro de téléphone est comptée comme une
              conversion. Les cookies publicitaires correspondants ne sont déposés qu&apos;avec votre accord, donné ou
              refusé dans le bandeau affiché à la première visite. Sans accord, Google ne reçoit que des signaux sans
              cookie, qui ne permettent pas de vous identifier. Aucun autre outil d&apos;analytics tiers n&apos;est
              installé. Refuser n&apos;empêche pas d&apos;utiliser le site. Votre choix est conservé six mois, puis
              vous est demandé à nouveau ; vous pouvez le modifier à tout moment avec le lien « Gérer les cookies »
              en bas de chaque page. <ReinitialiserCookies />
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Finalité et base légale">
            <Texte>
            <p>
              Les données transmises via les formulaires sont utilisées exclusivement pour traiter votre demande
              d&apos;étude de projet de rénovation : vous recontacter, qualifier le projet et, le cas échéant,
              organiser une visite technique. Le traitement repose sur l&apos;exécution de mesures précontractuelles
              prises à votre demande (article 6.1.b du RGPD). La mesure de l&apos;efficacité des annonces par les
              cookies Google Ads repose sur votre consentement.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Destinataires">
            <Texte>
            <p>
              Vos données sont destinées à IA RENOV (SASU) et, lorsque votre projet est confié à une entreprise
              partenaire contractante pour l&apos;exécution des travaux, aux seules coordonnées nécessaires à la mise
              en relation avec cette entreprise. Aucune donnée n&apos;est vendue ni cédée à des tiers à des fins
              commerciales ou publicitaires.
            </p>
            <p>
              Le site est hébergé par Vercel Inc. (États-Unis) ; l&apos;hébergement d&apos;une page web implique un
              traitement technique minimal des requêtes (adresse IP, journaux serveur) nécessaire au fonctionnement
              du site. Les transferts hors de l&apos;Union européenne sont encadrés par les garanties prévues par le
              règlement général sur la protection des données.
            </p>
            {/* 05/09 : SOUS-TRAITANT DU FORMULAIRE DÉCLARÉ (article 13 du RGPD).
                29/10/2026 : aligné sur HÉRITAGE BÂTI et sur ce que fait réellement le code :
                app/api/contact/route.ts envoie la demande par le SMTP Hostinger (lib/mail.ts)
                dès que SMTP_USER/SMTP_PASS sont définis, en copie cachée à LEAD_COPY ; sinon
                repli sur FormSubmit (hors UE), avec la même copie (_cc). À METTRE À JOUR le
                jour où l'acheminement change : une politique qui décrit un sous-traitant qui
                n'est plus employé est aussi fausse qu'une politique qui en omet un. */}
            <p>
              Vos données peuvent être traitées par les prestataires techniques suivants : Vercel Inc. (hébergement
              du site), Hostinger (messagerie qui reçoit les demandes envoyées depuis le formulaire) et, en secours
              lorsque cette messagerie n&apos;est pas en service, FormSubmit (service d&apos;envoi de formulaires,
              situé hors de l&apos;Union européenne). Une copie de chaque demande est adressée au prestataire technique
              du site, pour s&apos;assurer de sa bonne réception. Ces prestataires agissent uniquement pour le compte
              d&apos;IA RENOV et n&apos;exploitent pas ces données pour leur propre compte. Si vous préférez ne pas
              passer par le formulaire, vous pouvez nous écrire directement à l&apos;adresse indiquée sur la page de
              contact, ou nous appeler.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Durée de conservation">
            <Texte>
            <p>
              Demande sans suite : 3 ans à compter du dernier contact. Client : durée de la relation, puis archivage
              pendant les durées imposées par la loi.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Vos droits">
            <Texte>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et
              Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation du
              traitement, d&apos;opposition et de portabilité de vos données, ainsi que du droit de retirer votre
              consentement à tout moment et de définir des directives sur le sort de vos données après votre décès.
            </p>
            <p>
              Pour exercer ces droits, écrivez à{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, en précisant
              votre identité. Une réponse vous sera apportée dans le délai légal d&apos;un mois.
            </p>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser
              une réclamation à la Commission nationale de l&apos;informatique et des libertés (CNIL), 3 place de
              Fontenoy, 75007 Paris — <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Médiation de la consommation">
            <Texte>
            <p>
              Conformément à l&apos;article L612-1 du Code de la consommation, tout consommateur a le droit de
              recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un
              litige, après une réclamation écrite adressée à IA RENOV, 8 rue Gabriel Péri, 92250 La
              Garenne-Colombes, ou à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Les coordonnées du médiateur
              sont communiquées sur simple demande à cette adresse ; le détail figure dans les{" "}
              <Link href="/mentions-legales">mentions légales</Link>.
            </p>
            </Texte>
          </PageSection>

          <PageSection titre="Mise à jour">
            <Texte>
            <p>
              Cette politique peut être adaptée pour refléter une évolution du site ou de la réglementation. La
              version en ligne fait foi. Pour toute question, voir aussi les{" "}
              <Link href="/mentions-legales">mentions légales</Link>.
            </p>
            </Texte>
          </PageSection>
    </main>
  );
}

export default withWw("/politique-confidentialite", PolitiqueConfidentialitePage);
