# joselopez.es — a personal index

Personal site of Jose Lopez (Madrid): photographs, places, a marginal essay,
and long-form reading notes on minds — brains, attention, and machines that try
to think. Built with [Astro](https://astro.build) + Tailwind CSS v4, fully
static, no client-side framework.

## Commands

| Command           | What it does                                        |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Install dependencies (Node ≥ 22.12)                 |
| `npm run dev`     | Dev server at `localhost:4321`                      |
| `npm run build`   | Production build to `./dist/`                       |
| `npm run preview` | Serve the production build locally                  |
| `npm run check`   | Type-check all `.astro` / `.ts` files               |
| `npm run gen-og`  | Regenerate `public/og-image.png` (social card)      |

## Layout

```text
site.config.mjs          ← single source of truth for the production domain
src/
├── assets/photos/       ← the photographs (photo-1.jpg … photo-14.jpg)
├── components/          ← Hero, Works, Photography, Research, Contact, Nav, SectionHeader
├── content/research/    ← the long-form pieces (Markdown + frontmatter)
├── layouts/Base.astro   ← <head>, meta/OG/Twitter tags, fonts
├── lib/plates.ts        ← the photo list: image, number, title, optional caption
├── lib/research-rows.ts ← canonical order of the research index
├── pages/               ← index, photos, research/[slug], rss.xml, robots.txt
└── styles/global.css    ← Tailwind theme tokens + editorial prose styles
```

## Editing content

- **Research pieces** live in `src/content/research/*.md`. Frontmatter schema
  (`title`, `group`, `kind`, `status`, `updated`, `summary`, `lang`) is defined
  in `src/content.config.ts`. Order on the index page comes from
  `src/lib/research-rows.ts`, not the filesystem.
- **Photos** go in `src/assets/photos/` and are listed in `src/lib/plates.ts`:
  import the image, then add an entry with `no`, `title`, `serifSize` and an
  optional `caption`. That one list feeds both the homepage
  (`src/components/Photography.astro`) and the `/photos` gallery page (Astro
  generates responsive WebP at build).
- **Before deploying:** set the real domain in `site.config.mjs` and flip
  `IS_PLACEHOLDER_DOMAIN` to `false`, then run `npm run gen-og` to re-stamp the
  social card. The domain drives sitemap, RSS, canonical URLs, OG meta, and
  `robots.txt`.

## Deploy

Live preview: **https://aifriend.github.io/personal/** — a GitHub Pages project
site served from the `gh-pages` branch of `github.com/aifriend/personal`.

- `npm run deploy` rebuilds with `ASTRO_BASE=/personal` (all internal links are
  base-aware via `src/lib/base.ts`) and force-pushes `dist/` to `gh-pages`.
  Live in about a minute.
- Canonical/OG/sitemap URLs still point at the placeholder domain until
  `site.config.mjs` is set to the real one. With a real domain, deploy at the
  domain root (Netlify/Cloudflare) and the base path becomes unnecessary.

**Content policy:** every user-facing string is real and in Jose's voice —
nothing AI-invented. (The working authenticity audit is kept private, outside
this repo.)
