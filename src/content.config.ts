import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(), description: z.string(), jurisdiction: z.string(),
    status: z.enum(['draft', 'reviewed']),
    lastVerified: z.iso.date().nullable(), reviewer: z.string().nullable(),
    sources: z.array(z.object({ name: z.string(), url: z.url(), type: z.enum(['government', 'nonprofit']) })),
    steps: z.array(z.string()).min(1),
  }).superRefine((guide, ctx) => {
    if (guide.status === 'reviewed' && (!guide.lastVerified || !guide.reviewer)) {
      ctx.addIssue({ code: 'custom', message: 'Reviewed guides require a reviewer and verification date.' });
    }
  }),
});
export const collections = { guides };
