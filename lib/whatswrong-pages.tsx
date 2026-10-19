import type { Metadata } from "next";
import {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { PageSection } from "@/app/components/page-kit";

/* ============================================================================
   WHATSWRONG : LES PAGES RÉÉCRITES PAR ELI

   Quand une page est publiée depuis WhatsWrong (« Publier sur mon site »),
   le site lit ses changements sur l'API au rendu : en ligne au plus une
   minute après, sans synchro ni redéploiement ; si l'API ne répond pas,
   la page garde son propre texte. Ils arrivent
   texte par texte : textes réécrits, retirés, blocs ajoutés à côté d'un
   texte ou d'une section. Ils sont posés ici dans l'arbre de la page, avant
   son rendu — dans les props des composants (titre, chapo, items…) comme
   dans le JSX — : le design ne bouge jamais, seuls les mots changent.
   Chaque texte se retrouve par sa clé (`wwKey`), tout se lit sur la page
   d'origine et s'applique d'un coup. Sans version publiée, rien ne change.
   ============================================================================ */

type Block =
  | { kind: "heading"; level: number; text: string }
  | { kind: "text"; html: string };

type Changes = {
  replace: { match: string; text: string; html: string }[];
  remove: { match: string; text: string }[];
  insert: {
    match: string;
    text: string;
    place: "before" | "after" | "end";
    blocks: Block[];
  }[];
};

type PageVersion = {
  path: string;
  title: string;
  description: string;
  changes: Changes | null;
};

/** La clé d'un texte : la même fonction que WhatsWrong, à l'identique. */
export function wwKey(value: string): string {
  return String(value)
    .replace(/\]\([^)]*\)/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/(\d)\s*[x×]\s*(?=\d)/g, "$1 ")
    .replace(/[^\p{L}\p{N}]+/gu, "");
}

function bare(p: string): string {
  return p.replace(/\/+$/, "") || "/";
}

// Une page publiée depuis WhatsWrong s'affiche au plus une minute après :
// une lecture partagée par toutes les pages (cache de données de Next).
const REVALIDATE_SECONDS = 60;
// Au-delà, le site n'attend pas : il affiche son propre texte.
const TIMEOUT_MS = 2000;

/* Les pages publiées, lues sur WhatsWrong au rendu ; rien si la clé
   manque ou si l'API ne répond pas : la page garde son propre texte. */
async function publishedPages(): Promise<PageVersion[]> {
  const key = process.env.WW_API_KEY || process.env.WHATSWRONG_API_KEY;
  if (!key) return [];
  try {
    const res = await fetch("https://www.whatswrong.io/api/v1/eli/pages", {
      headers: { Authorization: `Bearer ${key}` },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { pages?: PageVersion[] };
    return Array.isArray(data.pages) ? data.pages : [];
  } catch {
    return [];
  }
}

async function versionOf(path: string): Promise<PageVersion | null> {
  return (await publishedPages()).find((page) => bare(page.path) === bare(path)) ?? null;
}

/* Les props qui ne sont pas du texte affiché. */
const NOT_TEXT = new Set([
  "href",
  "src",
  "className",
  "id",
  "style",
  "image",
  "cadrage",
  "fond",
  "variant",
  "colonnes",
  "chemin",
  "type",
  "rel",
  "target",
  "key",
]);
// Les éléments qui font partie d'une phrase (un lien, du gras).
const INLINE = new Set(["a", "strong", "em", "b", "i", "span", "br", "small", "abbr"]);

const REMOVED = Symbol("removed");

/* Un composant client (marqué « use client ») : on ne l'exécute jamais ici. */
function isClientReference(type: unknown): boolean {
  return (type as { $$typeof?: symbol }).$$typeof === Symbol.for("react.client.reference");
}

/** Le texte visible d'un nœud React non rendu. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/* Une phrase : du texte et des éléments en ligne seulement (un lien, du
   gras) — elle se retrouve entière par sa clé. */
function isPhrase(node: ReactNode): boolean {
  if (typeof node === "string" || typeof node === "number" || node == null || typeof node === "boolean") return true;
  if (Array.isArray(node)) return node.every(isPhrase);
  if (!isValidElement<{ children?: ReactNode }>(node)) return false;
  const inline = typeof node.type !== "string" || INLINE.has(node.type);
  return inline && isPhrase(node.props.children);
}

function html(value: string): ReactNode {
  return <span dangerouslySetInnerHTML={{ __html: value }} />;
}

function newBlocks(blocks: Block[]): ReactNode {
  return blocks.map((block, index) =>
    block.kind === "heading" ? (
      <h3 key={index}>{block.text}</h3>
    ) : (
      <div key={index} className="pg-note" dangerouslySetInnerHTML={{ __html: block.html }} />
    ),
  );
}

/* Une nouvelle section (un H2 en tête), au dessin des autres. */
function newSections(blocks: Block[]): ReactNode {
  const groups: Block[][] = [];
  for (const block of blocks) {
    if ((block.kind === "heading" && block.level === 2) || groups.length === 0) groups.push([block]);
    else groups[groups.length - 1].push(block);
  }
  return groups.map((group, index) => {
    const [first, ...rest] = group;
    return first.kind === "heading" && first.level === 2 ? (
      <PageSection key={`ww-${index}`} titre={first.text}>
        {newBlocks(rest)}
      </PageSection>
    ) : (
      <Fragment key={`ww-${index}`}>{newBlocks(group)}</Fragment>
    );
  });
}

class Overlay {
  private replaced: Map<string, Changes["replace"][number]>;
  private removed: Set<string>;
  private inserts: Map<string, Changes["insert"]>;
  readonly missed = new Set<string>();

  constructor(changes: Changes) {
    this.replaced = new Map(changes.replace.map((c) => [wwKey(c.match), c]));
    this.removed = new Set(changes.remove.map((c) => wwKey(c.match)));
    this.inserts = new Map();
    for (const insert of changes.insert) {
      const key = wwKey(insert.match);
      this.inserts.set(key, [...(this.inserts.get(key) ?? []), insert]);
      this.missed.add(key);
    }
  }

  /** Une chaîne d'une prop : réécrite (texte seul), retirée, ou telle quelle. */
  private string(value: string): string | typeof REMOVED {
    const key = wwKey(value);
    if (this.removed.has(key)) return REMOVED;
    return this.replaced.get(key)?.text ?? value;
  }

  /** Toutes les données d'une prop : chaînes, listes, objets d'items. */
  private data(value: unknown): unknown {
    if (typeof value === "string") return this.string(value);
    if (Array.isArray(value)) {
      return value.map((item) => this.data(item)).filter((item) => item !== REMOVED);
    }
    if (isValidElement(value)) return this.node(value);
    if (value && typeof value === "object") {
      const entries = Object.entries(value).map(([k, v]) => [k, NOT_TEXT.has(k) ? v : this.data(v)] as const);
      const texts = entries.filter(([, v]) => typeof v === "string" || v === REMOVED);
      if (texts.length > 0 && texts.every(([, v]) => v === REMOVED)) return REMOVED;
      return Object.fromEntries(entries.map(([k, v]) => [k, v === REMOVED ? "" : v]));
    }
    return value;
  }

  /** Les ajouts ancrés sur l'un des textes de cet élément. */
  private anchored(element: ReactElement<Record<string, unknown>>): Changes["insert"] {
    const keys = new Set<string>();
    if (typeof element.type === "string" && isPhrase(element.props.children as ReactNode)) {
      keys.add(wwKey(textOf(element)));
    }
    for (const [name, value] of Object.entries(element.props)) {
      if (!NOT_TEXT.has(name) && typeof value === "string") keys.add(wwKey(value));
    }
    return [...keys].flatMap((key) => {
      const found = this.inserts.get(key) ?? [];
      if (found.length > 0) this.missed.delete(key);
      return found;
    });
  }

  node(node: ReactNode): ReactNode {
    if (typeof node === "string") {
      const value = this.string(node);
      if (value === REMOVED) return null;
      const change = this.replaced.get(wwKey(node));
      return change ? html(change.html) : value;
    }
    if (Array.isArray(node)) return node.map((child, index) => <Fragment key={index}>{this.node(child)}</Fragment>);
    if (!isValidElement<Record<string, unknown>>(node)) return node;
    const element = node;
    // Une phrase du JSX (un paragraphe avec un lien) : remplacée entière.
    if (typeof element.type === "string" && !INLINE.has(element.type) && isPhrase(element.props.children as ReactNode)) {
      const key = wwKey(textOf(element));
      if (this.removed.has(key)) return null;
      const change = this.replaced.get(key);
      if (change) return this.around(element, cloneElement(element, {}, html(change.html)));
    }
    // Un texte retiré d'une prop (une accroche, un chapô) : la prop part,
    // le composant reste.
    const props = Object.fromEntries(
      Object.entries(element.props).map(([name, value]) => {
        if (name === "children") return [name, this.node(value as ReactNode)];
        const next = NOT_TEXT.has(name) ? value : this.data(value);
        return [name, next === REMOVED ? undefined : next];
      }),
    );
    // Un composant serveur du site (une fonction, pas un composant client) :
    // exécuté, pour atteindre aussi les textes écrits en lui. Asynchrone
    // ou client, il reste tel quel.
    if (typeof element.type === "function" && !isClientReference(element.type)) {
      const output = (element.type as (p: Record<string, unknown>) => ReactNode)(props);
      if (!(output instanceof Promise)) {
        return this.around(element, <>{this.node(output)}</>);
      }
    }
    return this.around(element, cloneElement(element, props));
  }

  /* L'élément et ce qui s'ajoute avant, après ou à la fin de lui. */
  private around(original: ReactElement<Record<string, unknown>>, element: ReactElement): ReactNode {
    const inserts = this.anchored(original);
    if (inserts.length === 0) return element;
    const before = inserts.filter((i) => i.place === "before").flatMap((i) => i.blocks);
    const after = inserts.filter((i) => i.place === "after").flatMap((i) => i.blocks);
    const end = inserts.filter((i) => i.place === "end").flatMap((i) => i.blocks);
    const withEnd =
      end.length === 0
        ? element
        : cloneElement(element, {}, (element.props as { children?: ReactNode }).children, newBlocks(end));
    return (
      <>
        {before.length > 0 && newSections(before)}
        {withEnd}
        {after.length > 0 && newSections(after)}
      </>
    );
  }
}

/**
 * Une page du site avec sa version publiée depuis WhatsWrong, s'il y en a
 * une : `export default withWw("/chemin", Page)`.
 */
export function withWw<P extends object>(path: string, Page: (props: P) => ReactNode) {
  return async function WhatsWrongPage(props: P) {
    const changes = (await versionOf(path))?.changes ?? null;
    const tree = Page(props);
    if (changes === null) return tree;
    const overlay = new Overlay(changes);
    const out = overlay.node(tree);
    if (process.env.NODE_ENV !== "production" && overlay.missed.size > 0) {
      console.warn(`[whatswrong] ${path} : ancres introuvables`, [...overlay.missed]);
    }
    return out;
  };
}

/** Le titre et la description publiés depuis WhatsWrong, sinon ceux du site. */
export async function wwMetadata(path: string, metadata: Metadata): Promise<Metadata> {
  const version = await versionOf(path);
  if (version === null) return metadata;
  return {
    ...metadata,
    title: version.title || metadata.title,
    description: version.description || metadata.description,
    openGraph: metadata.openGraph && {
      ...metadata.openGraph,
      title: version.title || metadata.openGraph.title,
      description: version.description || metadata.openGraph.description,
    },
  };
}
