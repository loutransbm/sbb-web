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

// Lớp 3 — 6 "cẩm nang sâu theo nước" (tách từ GRP_*_Handbook_DaoSau). Xem scripts/split-grp-handbook.mjs
const grp3 = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/grp3' }),
  schema: z.object({
    code: z.string(),        // "my"
    name: z.string(),        // "Mỹ"
    enName: z.string().optional().default(''),
    flag: z.string(),        // "🇺🇸"
    order: z.number(),       // 1..6
    title: z.string(),       // tiêu đề handbook (đã bỏ emoji)
    subtitle: z.string().optional().default(''),
  }),
});

// News — bài blog/tin (bê chung từ /content/news, dùng schema build spec mục 7)
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: '../../content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),   // thumbnail (card)
    hero: z.string().optional(),    // ảnh đầu bài
    cum_chinh: z.enum([
      'tu-duy-ra-the-gioi', 'reality-check', 'internship-j1',
      'grp', 'office-tour', 'tieng-noi-hanh-trinh'
    ]),
    lang_kinh: z.enum(['sinh-vien', 'phu-huynh']).default('sinh-vien'),
    loai: z.enum([
      'story', 'reality-check', 'guide', 'explainer',
      'path-step', 'resource', 'update', 'voice'
    ]),
    chuong_trinh: z.array(
      z.enum(['j1', 'trainee', '407', 'office-tour', 'grp'])
    ).max(2).optional(),
    giai_doan: z.enum([
      'kham-pha', 'hieu', 'chuan-bi', 'hanh-dong'
    ]).optional(),
    hub: z.string(),
    read_next: z.array(z.string()).min(2).max(3),
    published: z.coerce.date(),
    featured: z.boolean().optional(),
  })
});

export const collections = { grp, grp2, grp3, news };
