// Tách giáo trình GRP master (1 file 15 module) -> 15 file .md trong src/content/grp/
// Chạy 1 lần: node scripts/split-grp.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MASTER = join(__dirname, '../../learn/public/GRP/Giao_trinh_GRP_Master.md');
const OUT = join(__dirname, '../src/content/grp');
mkdirSync(OUT, { recursive: true });

const zoneTitles = {
  1: 'Tư duy toàn cầu và phản tư',
  2: 'Liên văn hóa và cảm xúc xã hội',
  3: 'Giao tiếp và ngoại ngữ chức năng',
  4: 'Học tập và làm việc trong môi trường quốc tế',
  5: 'Sống tự chủ và hành động trách nhiệm ở nước ngoài',
};

const src = readFileSync(MASTER, 'utf8');
const lines = src.split('\n');

// Tìm vị trí các heading "# Module X.Y — Title"
const marks = [];
const re = /^# Module (\d)\.(\d+)\s*—\s*(.+)$/;
lines.forEach((ln, i) => {
  const m = ln.match(re);
  if (m) marks.push({ i, zone: +m[1], sub: +m[2], title: m[3].trim() });
});

const esc = (s) => s.replace(/"/g, '\\"');
let order = 0;
marks.forEach((mk, idx) => {
  order += 1;
  const start = mk.i;
  const end = idx + 1 < marks.length ? marks[idx + 1].i : lines.length;
  let block = lines.slice(start + 1, end); // bỏ dòng "# Module..."
  // dòng đầu thường là "### English subtitle" -> lấy làm subtitle
  let subtitle = '';
  if (block[0] && /^###\s+/.test(block[0])) {
    subtitle = block[0].replace(/^###\s+/, '').trim();
    block = block.slice(1);
  }
  // gỡ separator "---" cuối khối (tránh nhầm frontmatter) + dòng trống dư
  let body = block.join('\n').replace(/\n+---\s*$/,'').trim();
  const slug = `grp-${mk.zone}-${mk.sub}`;
  const fm = [
    '---',
    `module: "${mk.zone}.${mk.sub}"`,
    `zone: ${mk.zone}`,
    `zoneTitle: "${esc(zoneTitles[mk.zone])}"`,
    `title: "${esc(mk.title)}"`,
    subtitle ? `subtitle: "${esc(subtitle)}"` : `subtitle: ""`,
    `order: ${order}`,
    '---',
    '',
  ].join('\n');
  writeFileSync(join(OUT, `${slug}.md`), fm + body + '\n', 'utf8');
  console.log(`✓ ${slug}.md  (zone ${mk.zone} · ${mk.title})`);
});
console.log(`\nĐã tách ${marks.length} bài vào src/content/grp/`);
