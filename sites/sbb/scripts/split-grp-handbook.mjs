// Tách 6 "Cẩm nang sâu theo nước" (Lớp 3) -> src/content/grp3/{code}.md
// Nguồn: sites/learn/public/GRP/GRP_<Nuoc>_Handbook_DaoSau.md (handbook dài, có bảng + footnote).
// H1 mở đầu bằng emoji cờ -> tách bỏ emoji, lưu title sạch (trang dùng chip cờ SVG).
// Chạy: node scripts/split-grp-handbook.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '../../learn/public/GRP');
const OUT = join(__dirname, '../src/content/grp3');
mkdirSync(OUT, { recursive: true });

const COUNTRIES = [
  { file: 'GRP_My_Handbook_DaoSau.md',         code: 'my',         name: 'Mỹ',          enName: 'USA',       flag: '🇺🇸', order: 1 },
  { file: 'GRP_Uc_Handbook_DaoSau.md',         code: 'uc',         name: 'Úc',          enName: 'Australia', flag: '🇦🇺', order: 2 },
  { file: 'GRP_Anh_Handbook_DaoSau.md',        code: 'anh',        name: 'Anh',         enName: 'UK',        flag: '🇬🇧', order: 3 },
  { file: 'GRP_Canada_Handbook_DaoSau.md',     code: 'canada',     name: 'Canada',      enName: '',          flag: '🇨🇦', order: 4 },
  { file: 'GRP_NewZealand_Handbook_DaoSau.md', code: 'newzealand', name: 'New Zealand', enName: '',          flag: '🇳🇿', order: 5 },
  { file: 'GRP_Singapore_Handbook_DaoSau.md',  code: 'singapore',  name: 'Singapore',   enName: '',          flag: '🇸🇬', order: 6 },
];

const esc = (s) => s.replace(/"/g, '\\"');
// Bỏ emoji/ký tự không phải chữ-số ở đầu chuỗi (giữ lại từ "HANDBOOK ...").
const stripLeadEmoji = (s) => s.replace(/^[^\p{L}\p{N}]+/u, '').trim();

for (const c of COUNTRIES) {
  const raw = readFileSync(join(SRC, c.file), 'utf8');
  const lines = raw.split('\n');

  let title = '';
  let subtitle = '';
  let bodyStart = 0;

  // H1 = title (bỏ emoji cờ); subtitle = dòng ## / ### ngay sau; body = phần còn lại.
  for (let i = 0; i < lines.length; i++) {
    if (!title && /^#\s+/.test(lines[i])) {
      title = stripLeadEmoji(lines[i].replace(/^#\s+/, ''));
      bodyStart = i + 1;
      // tìm subtitle ở vài dòng kế
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        if (/^#{2,3}\s+/.test(lines[j])) { subtitle = stripLeadEmoji(lines[j].replace(/^#{2,3}\s+/, '')); bodyStart = j + 1; break; }
        if (lines[j].trim() && !/^#/.test(lines[j])) break;
      }
      break;
    }
  }

  // Handbook gốc có ~90 marker [^n] nhưng KHÔNG có phần định nghĩa -> bỏ cho sạch.
  let body = lines.slice(bodyStart).join('\n');
  body = body
    .replace(/\[\^[^\]]+\]/g, '')      // bỏ footnote ref cụt
    .replace(/ +([,.;:!?])/g, '$1')    // bỏ space trước dấu câu (do ref để lại)
    .replace(/[ \t]+$/gm, '')          // bỏ space cuối dòng
    .trim();
  const fm = [
    '---',
    `code: "${c.code}"`,
    `name: "${esc(c.name)}"`,
    `enName: "${esc(c.enName)}"`,
    `flag: "${c.flag}"`,
    `order: ${c.order}`,
    `title: "${esc(title)}"`,
    `subtitle: "${esc(subtitle)}"`,
    '---',
    '',
  ].join('\n');
  writeFileSync(join(OUT, `${c.code}.md`), fm + body + '\n', 'utf8');
  console.log(`✓ ${c.code}.md  — ${title}`);
}
console.log(`\nĐã tách ${COUNTRIES.length} cẩm nang (Lớp 3) vào src/content/grp3/`);
