import type { APIContext } from 'astro';

// Generated at build time so the Sitemap URL always matches `site` in
// astro.config.mjs (single source of truth: site.config.mjs).
export function GET(context: APIContext) {
  const sitemap = new URL('/sitemap-index.xml', context.site).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
