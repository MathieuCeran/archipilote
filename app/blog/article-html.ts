/* ============================================================
   Mise en forme du corps HTML d'un article importé (WhatsWrong,
   anciennement Sedestral), au build — aucune exécution côté client.

   Le HTML est déjà assaini à la synchronisation. On ne fait ici que
   le restructurer pour la page « note technique » :
   · le sommaire importé sort du flux (le rail le reconstruit) ;
   · le bloc « L'essentiel » devient un encadré ;
   · chaque h2 reçoit un id, et le sommaire se lit sur les h2 ;
   · la FAQ devient une liste dépliable (et alimente le JSON-LD) ;
   · les tableaux sont enveloppés pour défiler sur mobile.
   ============================================================ */

export type Entree = { id: string; texte: string };
export type Question = { question: string; reponse: string };

const FAQ_TITRE = /questions?\s+fr[ée]quentes|foire\s+aux\s+questions|^\s*faq\s*$/i;

function texteBrut(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function slugifier(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Minutes de lecture, à 230 mots par minute, jamais moins d'une. */
export function minutesDeLecture(texte: string): number {
  const mots = texteBrut(texte).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(mots / 230));
}

/** Une liste qui ne contient QUE des liens d'ancre est un sommaire. */
function estSommaire(ulInterieur: string): boolean {
  const items = [...ulInterieur.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => m[1].trim());
  return items.length > 0 && items.every((li) => /^<a\b[^>]*href="#[^"]*"[^>]*>[\s\S]*?<\/a>$/i.test(li));
}

export function preparerArticle(source: string): { html: string; sommaire: Entree[]; faq: Question[] } {
  let html = source;

  // 1. Ancien sommaire Sedestral : « <h2>Sommaire</h2><ul>…</ul> ».
  html = html.replace(/<h2[^>]*>\s*Sommaire\s*<\/h2>\s*<ul[^>]*>[\s\S]*?<\/ul>/i, "");

  // 2. « L'essentiel » : titre en gras suivi d'une liste. Les entrées qui ne sont
  //    que des liens d'ancre (le sommaire glissé par Léa) en sont retirées.
  html = html.replace(
    /<p[^>]*>\s*<strong>\s*(L[’']essentiel)\s*<\/strong>\s*<\/p>\s*<ul[^>]*>([\s\S]*?)<\/ul>(\s*<ul[^>]*>([\s\S]*?)<\/ul>)?/i,
    (_m, titre: string, items: string, suite?: string, suiteItems?: string) => {
      const gardes = [...items.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((m) => m[1].trim())
        .filter((li) => !/^<a\b[^>]*href="#[^"]*"[^>]*>[\s\S]*?<\/a>$/i.test(li));
      const reste = suite && suiteItems !== undefined && !estSommaire(suiteItems) ? suite : "";
      return `<aside class="note-essentiel"><p class="note-essentiel-titre">${titre}</p><ul>${gardes
        .map((li) => `<li>${li}</li>`)
        .join("")}</ul></aside>${reste}`;
    },
  );

  // 3. Toute autre liste faite uniquement de liens d'ancre est un sommaire : dehors.
  html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (m, interieur: string) => (estSommaire(interieur) ? "" : m));

  // 4. Les h2 : un id chacun, et le sommaire se construit dessus.
  const sommaire: Entree[] = [];
  const pris = new Set<string>();
  html = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs: string, contenu: string) => {
    const texte = texteBrut(contenu);
    let id = attrs.match(/\bid="([^"]+)"/)?.[1] ?? slugifier(texte);
    if (!id) id = `section-${sommaire.length + 1}`;
    while (pris.has(id)) id = `${id}-2`;
    pris.add(id);
    sommaire.push({ id, texte });
    return `<h2 id="${id}">${contenu}</h2>`;
  });

  // 5. La FAQ : h3 + réponse jusqu'au h3 suivant, dans la section dont le h2
  //    porte un titre de FAQ, jusqu'au h2 suivant ou à la fin.
  const faq: Question[] = [];
  html = html.replace(
    /(<h2 id="[^"]+">([\s\S]*?)<\/h2>)([\s\S]*?)(?=<h2 |$)/gi,
    (bloc, h2: string, titreH2: string, corps: string) => {
      if (!FAQ_TITRE.test(texteBrut(titreH2))) return bloc;
      const parties = corps.split(/(?=<h3\b)/i);
      const avant = /<h3\b/i.test(parties[0]) ? "" : parties.shift() ?? "";
      const details = parties
        .map((p) => {
          const m = p.match(/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i);
          if (!m) return p;
          const reponse = m[2].trim();
          faq.push({ question: texteBrut(m[1]), reponse: texteBrut(reponse) });
          return `<details class="note-faq-item"><summary>${m[1]}</summary><div class="note-faq-reponse">${reponse}</div></details>`;
        })
        .join("");
      return `${h2}${avant}<div class="note-faq">${details}</div>`;
    },
  );

  // 6. Les tableaux défilent dans leur cadre plutôt que d'élargir la page.
  html = html.replace(/<table\b/gi, '<div class="note-tableau"><table').replace(/<\/table>/gi, "</table></div>");

  return { html, sommaire, faq };
}
