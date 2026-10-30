// Generates public/og-image.png (1200×630) from an inline SVG.
//
// Why a script instead of just shipping the SVG: social scrapers
// (Facebook, X, LinkedIn, iMessage, Slack, Discord, WhatsApp) do NOT
// render SVG og:image — they require raster PNG/JPEG. This rasterizes
// the branding card at build-quality once.
//
// Uses generic `serif`/`monospace` font families so it renders
// deterministically on any machine (incl. Linux CI) without network fonts.
//
// Run with:  node scripts/gen-og.mjs

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SITE_URL } from '../site.config.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');
const siteHost = new URL(SITE_URL).host; // footer text on the card

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#faf3e8"/>
      <stop offset="100%" stop-color="#ede2cd"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <text x="80" y="100" font-family="serif" font-size="32" font-style="italic" fill="#241e2a">Jose Lopez<tspan fill="#9a7bb8" dx="14" font-style="normal">·</tspan><tspan font-family="monospace" font-size="14" letter-spacing="2.5" fill="#241e2a" opacity="0.6" dx="14" font-style="normal">A PERSONAL INDEX</tspan></text>

  <line x1="80" y1="220" x2="120" y2="220" stroke="#241e2a" stroke-width="1" opacity="0.4"/>
  <text x="135" y="225" font-family="monospace" font-size="13" letter-spacing="2.5" fill="#241e2a" opacity="0.65">MADRID &#183; AUTUMN &#183; MMXXVI</text>

  <text x="80" y="340" font-family="serif" font-size="96" font-weight="bold" fill="#241e2a" letter-spacing="-3">Serenity, courage,</text>
  <text x="80" y="452" font-family="serif" font-size="96" font-weight="bold" fill="#241e2a" letter-spacing="-3">and the <tspan font-style="italic" fill="#9a7bb8">wisdom</tspan> between.</text>

  <line x1="80" y1="540" x2="1120" y2="540" stroke="#241e2a" stroke-width="1" opacity="0.13"/>
  <text x="80" y="585" font-family="monospace" font-size="13" letter-spacing="2" fill="#241e2a" opacity="0.55">PHOTOGRAPHS &#183; PLACES &#183; STORY &#183; RESEARCH</text>
  <text x="1120" y="585" font-family="serif" font-size="20" font-style="italic" text-anchor="end" fill="#241e2a" opacity="0.7">${siteHost}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
