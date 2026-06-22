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

// Lớp 2 — 6 bài "đào sâu theo nước" (tách từ GRP_BaiTheoNuoc). Xem scripts/split-grp-nuoc.mjs
const grp2 = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/grp2' }),
  schema: z.object({
    code: z.string(),        // "my"
    name: z.string(),        // "Mỹ"
    enName: z.string().optional().default(''),
    flag: z.string(),        // "🇺🇸"
    order: z.number(),       // 1..6
    subtitle: z.string().optional().default(''),
  }),
});

export const collections = { grp, grp2 };
