// Remove o fundo verde do logotipo, gerando:
//   public/logo/logo-header.png  → logo completo com fundo transparente (sobrescreve)
//   public/logo/logo-v.png       → só o monograma "V", recortado e transparente
// Rodar: node scripts/make-logo-transparent.mjs
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const LOGO = path.join(process.cwd(), "public", "logo");
const src = path.join(LOGO, "logo-fundo-verde.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Cor do fundo = média dos 4 cantos.
const corner = (x, y) => {
  const i = (y * width + x) * channels;
  return [data[i], data[i + 1], data[i + 2]];
};
const corners = [
  corner(2, 2),
  corner(width - 3, 2),
  corner(2, height - 3),
  corner(width - 3, height - 3),
];
const bg = [0, 1, 2].map((c) =>
  Math.round(corners.reduce((s, p) => s + p[c], 0) / corners.length),
);

// Alfa proporcional à distância da cor de fundo, com desmistura do RGB
// (remove o halo verde nas bordas anti-aliased).
const T0 = 0.09;
const T1 = 0.32;
const out = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const s = i * channels;
  const d = i * 4;
  const r = data[s];
  const g = data[s + 1];
  const b = data[s + 2];
  const dist =
    Math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2) / 441.673;
  let a = (dist - T0) / (T1 - T0);
  a = Math.max(0, Math.min(1, a));
  if (a === 0) {
    out[d + 3] = 0;
  } else {
    out[d] = Math.max(0, Math.min(255, Math.round((r - (1 - a) * bg[0]) / a)));
    out[d + 1] = Math.max(0, Math.min(255, Math.round((g - (1 - a) * bg[1]) / a)));
    out[d + 2] = Math.max(0, Math.min(255, Math.round((b - (1 - a) * bg[2]) / a)));
    out[d + 3] = Math.round(a * 255);
  }
}

const full = sharp(out, { raw: { width, height, channels: 4 } });

// Bounding box geral do conteúdo e faixas horizontais ocupadas
// (1ª faixa = monograma "V"; as demais são o texto do logotipo).
const rowHasInk = new Array(height).fill(false);
let minX = width;
let maxX = -1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (out[(y * width + x) * 4 + 3] > 16) {
      rowHasInk[y] = true;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }
  }
}
const bands = [];
for (let y = 0; y < height; y++) {
  if (rowHasInk[y] && (y === 0 || !rowHasInk[y - 1])) bands.push({ top: y });
  if (rowHasInk[y] && (y === height - 1 || !rowHasInk[y + 1]))
    bands[bands.length - 1].bottom = y;
}
const vBand = bands[0];

// Logo completo aparado (margem de 8px) — sobrescreve logo-header.png.
const top = Math.max(0, bands[0].top - 8);
const bottom = Math.min(height - 1, bands[bands.length - 1].bottom + 8);
await full
  .clone()
  .extract({
    left: Math.max(0, minX - 8),
    top,
    width: Math.min(width, maxX + 8) - Math.max(0, minX - 8),
    height: bottom - top + 1,
  })
  .png()
  .toFile(path.join(LOGO, "logo-header.png"));

// Monograma "V": bbox só da 1ª faixa.
let vMinX = width;
let vMaxX = -1;
for (let y = vBand.top; y <= vBand.bottom; y++) {
  for (let x = 0; x < width; x++) {
    if (out[(y * width + x) * 4 + 3] > 16) {
      if (x < vMinX) vMinX = x;
      if (x > vMaxX) vMaxX = x;
    }
  }
}
await full
  .clone()
  .extract({
    left: vMinX,
    top: vBand.top,
    width: vMaxX - vMinX + 1,
    height: vBand.bottom - vBand.top + 1,
  })
  .png()
  .toFile(path.join(LOGO, "logo-v.png"));

console.log("fundo:", `rgb(${bg.join(",")})`);
console.log("faixas:", bands.map((b) => `${b.top}-${b.bottom}`).join(" | "));
console.log("gerados: logo-header.png (transparente) e logo-v.png");
