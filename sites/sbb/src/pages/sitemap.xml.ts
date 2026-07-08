import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://sbb.edu.vn';

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string };

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  // Trang tĩnh (VN canonical) — chỉ liệt kê route CÓ THẬT.
  const staticPaths: Array<[string, string, string]> = [
    // [path, changefreq, priority]
    ['', 'daily', '1.0'],
    ['/vi', 'daily', '0.9'],
    ['/about', 'monthly', '0.7'],
    ['/programs', 'weekly', '0.8'],
    ['/programs/global-internship', 'weekly', '0.8'],
    ['/programs/internship-j1', 'weekly', '0.8'],
    ['/programs/career-training', 'weekly', '0.8'],
    ['/programs/j1-trainee', 'weekly', '0.8'],
    ['/programs/407', 'weekly', '0.8'],
    ['/programs/grp', 'weekly', '0.7'],
    ['/programs/office-tour', 'monthly', '0.5'],
    ['/learn', 'weekly', '0.7'],
    ['/placements', 'daily', '0.8'],
    ['/news', 'daily', '0.8'],
    ['/news/j1-series', 'weekly', '0.7'],
    ['/apply', 'monthly', '0.9'],
    // Bản tiếng Anh (trang marketing đã dịch)
    ['/en/', 'weekly', '0.6'],
    ['/en/about', 'monthly', '0.5'],
    ['/en/programs', 'weekly', '0.6'],
    ['/en/learn', 'weekly', '0.5'],
    ['/en/placements', 'weekly', '0.6'],
    ['/en/apply', 'monthly', '0.6'],
  ];

  const entries: Entry[] = staticPaths.map(([p, changefreq, priority]) => ({
    loc: `${SITE}${p}`,
    lastmod: today,
    changefreq,
    priority,
  }));

  // Bài news (gồm cả cụm J-1) — lastmod = ngày đăng.
  const news = await getCollection('news');
  for (const e of news) {
    const pub = e.data.published instanceof Date ? e.data.published : new Date(e.data.published);
    entries.push({
      loc: `${SITE}/news/${e.id}`,
      lastmod: pub.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  // Việc làm (placements) — mỗi tin 1 URL nếu có trang chi tiết; hiện /placements là trang tổng nên bỏ qua chi tiết.

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
