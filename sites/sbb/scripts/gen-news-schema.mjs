// gen-news-schema.mjs
// Trích khối JSON-LD (FAQPage + HowTo) từ 38 file nguồn Blog_J1 -> src/data/news-schema/<slug>.json
// Article KHÔNG lấy ở đây: trang [slug].astro tự dựng Article từ frontmatter + news-author.ts
// (nên ngày/URL/tác giả/logo luôn khớp, không kẹt placeholder).
//
// Map nguồn -> slug bằng cách khớp Article.headline (trong JSON-LD) với `title` ở frontmatter content/news.
//
// Chạy:  node sites/sbb/scripts/gen-news-schema.mjs [--write]
//   không --write: chỉ in bảng map để rà, KHÔNG ghi file.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SBB = path.resolve(__dirname, '..');              // sites/sbb
const CONTENT = path.resolve(SBB, '../../content/news'); // content/news
const SOURCE = 'C:/Users/Admin/OneDrive/Documents/Claude/Projects/SBB X STAGE GLOBAL/OUTPUTS/Blog_J1';
const OUT = path.resolve(SBB, 'src/data/news-schema');

const WRITE = process.argv.includes('--write');

// Map tay cho các bài mà title bản content ĐÃ đổi khác headline trong JSON-LD nguồn
// (khớp tự động theo title không ra) — key = tiền tố mã nguồn J1_NN.
const SLUG_OVERRIDE = {
  J1_08: 'quy-trinh-xin-visa-j1',
  J1_19: 'chi-phi-sinh-hoat-thanh-pho-my-j1',
  J1_23: 'j1-mien-thue-fica',
  J1_28: '212e-anh-huong-h1b-the-xanh',
  J1_29: 'j1-co-phai-duong-dinh-cu',
};

// bỏ dấu tiếng Việt + hạ chữ + gọn khoảng trắng/nháy -> so khớp mềm
function norm(s) {
  return (s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[“”"'’‘.,?!:;()\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function readFrontmatterTitle(md) {
  const m = md.match(/^---\s*[\r\n]([\s\S]*?)[\r\n]---/);
  if (!m) return null;
  const t = m[1].match(/^title:\s*["']?(.*?)["']?\s*$/m);
  return t ? t[1] : null;
}

// tách JSON object đầu tiên bắt đầu tại vị trí dấu { (đếm ngoặc, bỏ qua chuỗi)
function sliceJson(text, from) {
  const start = text.indexOf('{', from);
  if (start < 0) return null;
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
    } else {
      if (c === '"') inStr = true;
      else if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) return text.slice(start, i + 1); }
    }
  }
  return null;
}

function extractGraph(md) {
  const marker = md.indexOf('SCHEMA JSON-LD');
  if (marker < 0) return null;
  const jsonStr = sliceJson(md, marker);
  if (!jsonStr) return null;
  let obj;
  try { obj = JSON.parse(jsonStr); }
  catch (e) { return { error: e.message }; }
  const graph = obj['@graph'] || (Array.isArray(obj) ? obj : [obj]);
  return { graph };
}

// --- Build title -> slug map từ content/news ---
const contentFiles = fs.readdirSync(CONTENT).filter(f => /\.md$/.test(f) && !f.startsWith('_'));
const titleToSlug = new Map();
for (const f of contentFiles) {
  const title = readFrontmatterTitle(fs.readFileSync(path.join(CONTENT, f), 'utf8'));
  if (title) titleToSlug.set(norm(title), f.replace(/\.md$/, ''));
}

// --- Duyệt nguồn Blog_J1 ---
const srcFiles = fs.readdirSync(SOURCE).filter(f => /^J1_\d+.*\.md$/.test(f)).sort();
if (WRITE) fs.mkdirSync(OUT, { recursive: true });

const rows = [];
let written = 0, howtoCount = 0, problems = 0;

for (const f of srcFiles) {
  const md = fs.readFileSync(path.join(SOURCE, f), 'utf8');
  const ex = extractGraph(md);
  if (!ex || ex.error) { rows.push([f, '—', 'JSON ERR: ' + (ex && ex.error || 'no block')]); problems++; continue; }

  const article = ex.graph.find(n => n['@type'] === 'Article');
  const faqPage = ex.graph.find(n => n['@type'] === 'FAQPage') || null;
  const howTo = ex.graph.find(n => n['@type'] === 'HowTo') || null;

  const headline = article && article.headline;
  const codeKey = (f.match(/^(J1_\d+)/) || [])[1];
  const slug = SLUG_OVERRIDE[codeKey] || (headline ? titleToSlug.get(norm(headline)) : null);

  if (!slug) { rows.push([f, '???', 'KHÔNG khớp title: ' + (headline || '(no headline)')]); problems++; continue; }

  const types = ex.graph.map(n => n['@type']).join('+');
  if (howTo) howtoCount++;
  rows.push([f, slug, types]);

  if (WRITE) {
    const data = { faqPage, howTo };
    fs.writeFileSync(path.join(OUT, slug + '.json'), JSON.stringify(data, null, 2) + '\n');
    written++;
  }
}

// --- In bảng ---
console.log('\n%-42s %-40s %s'.replace(/%-?\d*s/g, m => m)); // header spacer
const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);
console.log(pad('SOURCE', 42), pad('SLUG', 42), 'TYPES / NOTE');
console.log('-'.repeat(110));
for (const [a, b, c] of rows) console.log(pad(a, 42), pad(b, 42), c);
console.log('-'.repeat(110));
console.log(`Tổng nguồn: ${srcFiles.length} | HowTo: ${howtoCount} | Vấn đề: ${problems} | Ghi: ${WRITE ? written : '(dry-run, chưa ghi)'}`);
if (problems) console.log('⚠️  Có dòng chưa khớp/parse lỗi — xem ở trên trước khi --write.');
