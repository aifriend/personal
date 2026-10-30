// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the production domain.
//
// ⚠️  TODO before going live: replace the placeholder below with the real
//     domain, then run `node scripts/gen-og.mjs` to re-stamp the OG image.
//
// Everything derives from this one constant:
//   - astro.config.mjs  → sitemap, RSS, canonical URLs, OG meta (via Astro.site)
//   - src/pages/robots.txt.ts → Sitemap: line
//   - scripts/gen-og.mjs → footer text on the social-preview card
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://joselopez.es'; // ← PLACEHOLDER, not yet registered
export const IS_PLACEHOLDER_DOMAIN = true;      // ← flip to false when SITE_URL is real
