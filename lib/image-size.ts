import fs from "node:fs";
import path from "node:path";

/* ============================================================================
   Dimensions réelles d'une photo du dossier public (JPEG, PNG, WebP), lues
   dans l'en-tête du fichier au rendu serveur : les galeries respectent le
   format de chaque photo au lieu de la recadrer. Une image distante ou
   illisible renvoie null (format par défaut côté appelant).
   ============================================================================ */

const cache = new Map<string, { width: number; height: number } | null>();

export function imageSize(src: string): { width: number; height: number } | null {
  if (cache.has(src)) return cache.get(src)!;
  let size: { width: number; height: number } | null = null;
  if (src.startsWith("/")) {
    try {
      size = parse(fs.readFileSync(path.join(process.cwd(), "public", decodeURIComponent(src.split("?")[0]))));
    } catch {
      size = null;
    }
  }
  cache.set(src, size);
  return size;
}

/** Vrai quand la photo, recadrée dans un cadre de ce format (largeur / hauteur),
    perdrait plus de 30 % de sa surface (une photo en hauteur dans un cadre en largeur, ou l'inverse) : le cadre la montre alors entière,
    sur un fond fait de la même photo floutée (classe .cadre-flou). */
export function horsCadre(src: string | undefined, cadre: number): boolean {
  const t = src ? imageSize(src) : null;
  if (!t) return false;
  const r = t.width / t.height;
  return 1 - Math.min(r, cadre) / Math.max(r, cadre) > 0.3;
}

/** Fond flou à poser sur le cadre (variable CSS lue par .cadre-flou). */
export const fondFlou = (src: string) => ({ "--fond": `url("${src}")` }) as Record<string, string>;

function parse(b: Buffer): { width: number; height: number } | null {
  // PNG : largeur et hauteur dans l'en-tête IHDR.
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  // WebP : trois variantes d'en-tête.
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const kind = b.toString("ascii", 12, 16);
    if (kind === "VP8X") return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    if (kind === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
    }
    if (kind === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  // JPEG : on parcourt les segments jusqu'au marqueur SOF.
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const length = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + length;
    }
  }
  return null;
}
