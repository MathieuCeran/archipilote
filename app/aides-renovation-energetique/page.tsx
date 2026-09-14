import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";
import { MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/aides-renovation-energetique" },
  title: "Guide des aides à la rénovation énergétique | ARCHI PILOTE RÉNOVATION",
  description: "Les dispositifs changent. Cette page renvoie vers les sources officielles et évite toute promesse d'éligibilité avant étude du dossier.",
};

const FAQ = [
  { q: "Pourquoi cette page reste-t-elle prudente ?", r: "Les dispositifs d'aide (MaPrimeRénov', CEE) et leurs plafonds évoluent régulièrement. Aucune promesse d'éligibilité ne peut être faite avant l'étude réelle de votre dossier." },
  { q: "Qui monte le dossier d'aide ?", r: "L'accompagnement dans les démarches fait partie du pilotage de projet, mais l'éligibilité et le versement dépendent des organismes officiels — MaPrimeRénov', les CEE, votre revenu fiscal de référence." },
  { q: "Où vérifier les montants à jour ?", r: "Sur les sites officiels (maprimerenov.gouv.fr, service-public.fr) au moment de votre projet — les montants ici ne sont jamais garantis ni contractuels." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Guide des aides"
        segments={[{ text: "Aides à la rénovation énergétique :" }, { text: "méthode de vérification.", serif: true, gradient: true }]}
        lead="Les dispositifs changent. Cette page renvoie vers les sources officielles, précise sa date de mise à jour et évite toute promesse d'éligibilité avant étude du dossier."
      />
      <section className="relative pb-16 md:pb-24">
        <div className="rf-wrap mq-mesure flex flex-col gap-6 text-ivoire/85 t-base leading-relaxed">
          <p>
            Deux dispositifs concernent la plupart des projets de rénovation énergétique : MaPrimeRénov&apos;,
            calculée selon vos revenus et le gain énergétique obtenu, et les Certificats d&apos;Économie
            d&apos;Énergie (CEE), versés par les fournisseurs d&apos;énergie. Ils peuvent se cumuler selon les
            travaux engagés. L&apos;ordre dans lequel vérifier leurs règles, qui évoluent d&apos;une année sur
            l&apos;autre, est détaillé dans notre article{" "}
            <Link href="/blog/maprimerenov-cee-2026" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              MaPrimeRénov&apos; et CEE : ce qu&apos;il faut vérifier avant de compter sur une aide
            </Link>
            .
          </p>
          <p>
            Le gain de classe DPE ne sert à rien si le dossier d&apos;aide n&apos;aboutit pas : les demandes
            doivent généralement être déposées avant le début des travaux, avec des entreprises certifiées
            RGE pour les postes concernés. Nous vous aidons à identifier les pièces à réunir, mais l&apos;étude
            d&apos;éligibilité et le versement relèvent des organismes officiels. Les travaux eux-mêmes — isolation,
            étanchéité à l&apos;air, ventilation, chauffage — et l&apos;ordre dans lequel les mener sont décrits sur la
            page{" "}
            <Link href="/renovation-energetique" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              rénovation énergétique
            </Link>
            , et les devis qui accompagnent le dossier peuvent être relus ligne à ligne grâce à la{" "}
            <Link href="/clinique-du-devis" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
              clinique du devis
            </Link>
            .
          </p>
          <p className="mq-mention">Page mise à jour — août 2026</p>
        </div>
      </section>
      <section className="relative pb-20 md:pb-28">
        <div className="rf-wrap mq-mesure flex flex-col gap-4">
          {FAQ.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
              <h2 className="display t-base text-ivoire normal-case mb-1.5">{f.q}</h2>
              <p className="text-muted t-sec leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>
      <MqReadNext
        items={[
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Isolation, ventilation, chauffage : l'ordre des travaux" },
          { href: "/blog/sortir-passoire-energetique", label: "DPE F ou G : comment sortir de la passoire énergétique", sub: "Diagnostic, priorités, démarches" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Syndic, urbanisme et pièces à réunir" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Cadrer un budget avant de monter un dossier" },
          { href: "/garanties-assurances", label: "Garanties et assurances", sub: "Qualifications et couvertures des entreprises" },
          { href: "/renovation-hauts-de-seine-92", label: "Rénovation en Hauts-de-Seine", sub: "Notre zone d'intervention" },
        ]}
      />
      <CtaFinal />
    </main>
  );
}
