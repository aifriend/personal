// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { SITE_URL, IS_PLACEHOLDER_DOMAIN } from './site.config.mjs';

if (IS_PLACEHOLDER_DOMAIN) {
  console.warn(
    '\n⚠️  site.config.mjs still has the PLACEHOLDER domain (' + SITE_URL + ').\n' +
    '   Set the real domain there before deploying — it drives sitemap, RSS,\n' +
    '   canonical URLs, OG meta, and robots.txt.\n',
  );
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
