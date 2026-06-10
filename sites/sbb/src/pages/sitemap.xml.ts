import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const pages = [
    '',
    '/about',
    '/programs',
    '/programs/internship-j1',
    '/programs/office-tour',
    '/programs/grp',
    '/programs/407',
    '/community',
    '/apply'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://sbb.vn${page}</loc>
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
