// Tách 6 bài "đào sâu theo nước" (Lớp 2) -> src/content/grp2/{code}.md
// Nguồn: sites/learn/public/GRP/GRP_BaiTheoNuoc/0X_*.md (mỗi file 1 nước, phủ 5 vùng).
// Chạy: node scripts/split-grp-nuoc.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '../../learn/public/GRP/GRP_BaiTheoNuoc');
const OUT = join(__dirname, '../src/content/grp2');
mkdirSync(OUT, { recursive: true });

const COUNTRIES = [
  { file: '01_My_USA.md',       code: 'my',         name: 'Mỹ',          enName: 'USA',        flag: '🇺🇸', order: 1 },
  { file: '02_Uc_Australia.md', code: 'uc',         name: 'Úc',          enName: 'Australia',  flag: '🇦🇺', order: 2 },
  { file: '03_Anh_UK.md',       code: 'anh',        name: 'Anh',         enName: 'UK',         flag: '🇬🇧', order: 3 },
  { file: '04_Canada.md',       code: 'canada',     name: 'Canada',      enName: '',           flag: '🇨🇦', order: 4 },
  { file: '05_NewZealand.md',   code: 'newzealand', name: 'New Zealand', enName: '',           flag: '🇳🇿', order: 5 },
  { file: '06_Singapore.md',    code: 'singapore',  name: 'Singapore',   enName: '',           flag: '🇸🇬', order: 6 },
];

const esc = (s) => s.replace(/"/g, '\\"');

for (const c of COUNTRIES) {
  const raw = readFileSync(join(SRC, c.file), 'utf8');
  const lines = raw.split('\n');
  // line 0 = "# GRP — Hướng dẫn theo nước: ...". Lấy subtitle ở dòng "### ..." kế tiếp.
  let subtitle = '';
  let bodyStart = 1;
  for (let i = 1; i < lines.length; i++) {
    if (/^###\s+/.test(lines[i])) { subtitle = lines[i].replace(/^###\s+/, '').trim(); bodyStart = i + 1; break; }
    if (lines[i].trim() && !/^#/.test(lines[i])) { bodyStart = i; break; }
  }
  const body = lines.slice(bodyStart).join('\n').trim();
  const fm = [
    '---',
    `code: "${c.code}"`,
    `name: "${esc(c.name)}"`,
    `enName: "${esc(c.enName)}"`,
    `flag: "${c.flag}"`,
    `order: ${c.order}`,
    `subtitle: "${esc(subtitle)}"`,
    '---',
    '',
  ].join('\n');
  writeFileSync(join(OUT, `${c.code}.md`), fm + body + '\n', 'utf8');
  console.log(`✓ ${c.code}.md  (${c.name} ${c.flag})`);
}
console.log(`\nĐã tách ${COUNTRIES.length} nước (Lớp 2) vào src/content/grp2/`);
