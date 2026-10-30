import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { researchRows } from '../lib/research-rows';
import { href } from '../lib/base';

export async function GET(context: APIContext) {
  const entries = await getCollection('research');

  // Order entries by canonical research index order so the feed mirrors the site.
  const orderMap = new Map(researchRows.map((row, i) => [row.slug, i]));
  const ordered = [...entries].sort(
    (a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999),
  );

  return rss({
    title: 'Jose Lopez · Research',
    description:
      'Research notes on minds, brains, and machines that try to think — with sources and open code. Jose Lopez, Madrid.',
    site: context.site!,
    items: ordered.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.updated ?? new Date(),
      description:
        entry.data.summary ??
        `${entry.data.group} · ${entry.data.kind}`,
      link: href(`/research/${entry.id}/`),
      categories: [entry.data.group, entry.data.kind],
    })),
    customData: '<language>en-us</language>',
  });
}
