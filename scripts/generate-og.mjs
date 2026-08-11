// Gera as imagens OpenGraph (1200x630) das páginas principais com os
// tokens da marca: verde-900 #1A2A14, creme-100 #F7EBD5, gold-gradient.
// Rodar: node scripts/generate-og.mjs
import { createRequire } from "node:module";
import path from "node:path";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const OUT = path.join(process.cwd(), "public", "og");
fs.mkdirSync(OUT, { recursive: true });

const W = 1200;
const H = 630;

// gold-gradient do DS: linear-gradient(100deg, #8C6A28 0%, #D9B96A 40%, #A98336 70%, #E8CE8C 100%)
const goldGradient = `
  <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="17%">
    <stop offset="0%" stop-color="#8C6A28"/>
    <stop offset="40%" stop-color="#D9B96A"/>
    <stop offset="70%" stop-color="#A98336"/>
    <stop offset="100%" stop-color="#E8CE8C"/>
  </linearGradient>`;

function baseSvg(label) {
  const text = label
    ? `<text x="${W / 2}" y="560" text-anchor="middle"
         font-family="Georgia, 'Times New Roman', serif" font-size="46"
         fill="#F7EBD5">${label}</text>`
    : "";
  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>${goldGradient}</defs>
    <rect width="${W}" height="${H}" fill="#1A2916"/>
    <rect width="${W}" height="5" y="0" fill="url(#gold)"/>
    <rect width="${W}" height="5" y="${H - 5}" fill="url(#gold)"/>
    ${text}
  </svg>`);
}

const pages = [
  { file: "og-home.png", label: "Advocacia com atendimento próximo, em Goiânia e em todo o Brasil" },
  { file: "og-areas.png", label: "Áreas de Atuação" },
  { file: "og-blog.png", label: "Blog" },
  { file: "og-contato.png", label: "Contato" },
  { file: "og-sobre.png", label: "Sobre" },
];

const logo = await sharp(path.join(process.cwd(), "public", "logo", "logo-header.png"))
  .resize({ height: 340 })
  .png()
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

for (const page of pages) {
  const fontSize = page.label.length > 40 ? 36 : 46;
  const svg = baseSvg(page.label).toString().replace('font-size="46"', `font-size="${fontSize}"`);
  await sharp(Buffer.from(svg))
    .composite([
      {
        input: logo,
        left: Math.round((W - logoMeta.width) / 2),
        top: 110,
      },
    ])
    .png()
    .toFile(path.join(OUT, page.file));
  console.log("gerado:", page.file);
}
