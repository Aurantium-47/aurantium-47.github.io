// Collection structure adapted from Astro Nano, migrated to Astro's glob loader.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['随记', '日记', '分享']),
    draft: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['作品', '工作流', '研究']),
    status: z.enum(['已完成', '部分实测', '调研记录', '待补证据']),
    role: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    cover: z.enum(['lorenz', 'julia', 'reaction', 'gravity', 'flock', 'chladni']).optional(),
    demoURL: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { notes, projects };
