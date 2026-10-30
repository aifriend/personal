// Prefix for root-absolute links so the site also works when deployed under a
// subpath (e.g. GitHub Pages at user.github.io/<repo>). Driven by ASTRO_BASE at
// build time (see astro.config.mjs); defaults to '' so local URLs stay '/...'.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path: string): string =>
  `${base}${path.startsWith('/') ? path : `/${path}`}`;
