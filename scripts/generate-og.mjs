/**
 * Generates public/og-image.png (1200x630) — the social share card.
 * Run with: npm run og
 */
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/og-image.png");

const W = 1200;
const H = 630;
const BLUE = "#2563eb";
const BLUE_LIGHT = "#60a5fa";

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="${BLUE}" fill-opacity="0.18" />
    </pattern>
    <radialGradient id="glow" cx="28%" cy="32%" r="55%">
      <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.28" />
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#050505" />
  <rect width="${W}" height="${H}" fill="url(#dots)" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <rect x="0" y="0" width="${W}" height="6" fill="${BLUE}" />

  <!-- FR badge -->
  <rect x="90" y="96" width="96" height="96" rx="20" fill="${BLUE}" />
  <text x="138" y="164" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="800"
        fill="#ffffff" text-anchor="middle" letter-spacing="-1">FR</text>

  <!-- Eyebrow -->
  <text x="94" y="300" font-family="Consolas, 'Courier New', monospace" font-size="21" font-weight="700"
        fill="${BLUE_LIGHT}" letter-spacing="4">PORTAFOLIO · QUITO, EC · REMOTO</text>

  <!-- Name -->
  <text x="90" y="380" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="800"
        fill="#ffffff" letter-spacing="-2">FERNANDO RUEDA</text>

  <!-- Accent line -->
  <rect x="94" y="410" width="110" height="4" fill="${BLUE}" />

  <!-- Subtitle -->
  <text x="94" y="474" font-family="Arial, Helvetica, sans-serif" font-size="33" font-weight="600"
        fill="#cbd5e1">Product Owner &amp; Technical PM · Operaciones B2B</text>

  <!-- URL -->
  <text x="94" y="552" font-family="Consolas, 'Courier New', monospace" font-size="25" font-weight="700"
        fill="#94a3b8" letter-spacing="2">fdrueda.com</text>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });
const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
writeFileSync(OUT, png);
console.log(`Wrote ${OUT} (${(png.length / 1024).toFixed(1)} kB)`);
