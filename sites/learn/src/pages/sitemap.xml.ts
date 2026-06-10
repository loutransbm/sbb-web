import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const staticPages = [
    '',
    '/resources',
    '/parent-corner',
    '/search',
    '/paths',
    '/paths/chuan-bi-j1-my',
    '/paths/tu-duy-toan-cau',
    '/tu-duy-ra-the-gioi',
    '/reality-check',
    '/internship-j1',
    '/grp',
    '/office-tour'
  ];

  const allArticles = await getCollection('learn');
  const dynamicPages = allArticles.map(art => `/${art.data.cum_chinh}/${art.id}`);

  const pages = [...staticPages, ...dynamicPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://learn.sbb.vn${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('').trim()}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
