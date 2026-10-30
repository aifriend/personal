import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    group: z.string(),
    kind: z.string(),
    status: z.enum(['draft', 'in-progress', 'published']).default('draft'),
    updated: z.coerce.date().optional(),
    summary: z.string().optional(),
    source: z.string().optional(),
    code: z.url().optional(),
    lang: z.string().default('en'),
  }),
});

export const collections = { research };
