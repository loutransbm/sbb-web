import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Khóa GRP — 15 bài trụ (tách từ Giao_trinh_GRP_Master). Xem scripts/split-grp.mjs
const grp = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/grp' }),
  schema: z.object({
    module: z.string(),      // "1.1"
    zone: z.number(),        // 1..5
    zoneTitle: z.string(),
    title: z.string(),
    subtitle: z.string().optional().default(''),
    order: z.number(),       // 1..15
  }),
});

export const collections = { grp };
