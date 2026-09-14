import Link from "next/link";
import { SITE } from "./../data";
import { NAV_GROUPS } from "./mq-nav-data";

/* Pied de page — registre « dossier ». C’est le cartouche de la planche :
   qui, où, sous quelle responsabilité. Les mentions légales et la répartition
   des rôles y sont dites une fois, proprement, et pas répétées. */

export function PiedRefonte() {
  return (
    <footer className="rf-dossier rf-pied">
      {/* Le monogramme en grand : c’est le cartouche de fin de planche. */}
      <span className="rf-filigrane rf-filigrane--pied" aria-hidden>
        <img src="/photos/maquette/monogramme-archi-pilote.png" alt="" width={1024} height={1024} loading="lazy" />
      </span>

      <div className="rf-wrap py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_repeat(4,1fr)] gap-10 lg:gap-8">
          <div style={{ maxWidth: "22rem" }}>
            <div className="flex items-center gap-2.5">
              <img
                src="/photos/maquette/monogramme-archi-pilote.png"
                alt=""
                aria-hidden
                width={34}
                height={34}
                className="size-[34px] object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span style={{ fontFamily: "var(--f-display)", fontWeight: 600, fontSize: "var(--t-base)", letterSpacing: "-0.03em", color: "var(--craie)" }}>
                Archi Pilote Rénovation
              </span>
            </div>

            <p className="rf-secondaire mt-5" style={{ color: "var(--papier-2)" }}>
              Structuration, chiffrage et pilotage de projets de rénovation à Paris, dans les Hauts-de-Seine et en
              Île-de-France.
            </p>

            <div className="mt-6 flex flex-col gap-1.5">
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`}>{SITE.telAffiche}</a>
              <a href={`mailto:${SITE.email}`} style={{ overflowWrap: "anywhere" }}>
                {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          {NAV_GROUPS.map((g) => (
            <div key={g.label}>
              <p className="rf-pied-groupe">{g.label}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rf-reglet mt-14" />

        <div className="mt-6 flex flex-col gap-4">
          <p className="rf-secondaire" style={{ color: "var(--papier-2)", maxWidth: "58rem" }}>
            ARCHI PILOTE RÉNOVATION structure et pilote les projets. Les travaux sont exécutés, facturés et garantis par
            les entreprises partenaires, sous leur propre responsabilité et leurs propres assurances. Les architectes et
            ingénieurs partenaires interviennent en leur nom.
          </p>
          <p className="rf-secondaire" style={{ color: "#6f746f" }}>
            IA RENOV SASU — RCS Nanterre 889 976 387 — 8 bis rue Gabriel Péri, 92250 La Garenne-Colombes.{" "}
            <Link href="/mentions-legales" style={{ fontSize: "inherit" }}>
              Mentions légales
            </Link>{" "}
            ·{" "}
            <Link href="/politique-confidentialite" style={{ fontSize: "inherit" }}>
              Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
