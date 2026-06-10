import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: '../../content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
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
    read_next: z.array(z.string()).min(2).max(3), // array of slugs
    published: z.coerce.date(),
    featured: z.boolean().optional(),
  })
});

export const collections = { news };
