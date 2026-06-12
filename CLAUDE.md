# SBB Institute – Website Project

## Identity
- **Full name:** Công ty Cổ phần Giáo dục và Đào tạo Quốc tế SBB (Shine Beyond Borders)
- **Category:** Global Career Development Organization — không phải agency, không phải trường học
- **Mission:** Kiến tạo thế hệ người trẻ Việt được tin và được trọng dụng
- **Core tagline pillars:** MINDSET. CONDUCT. CAPABILITY.
- **Brand spokesperson:** Lou Tran — CEO & Founder của SBB. Xuất hiện trong Results section (headshot). Đây là gương mặt đại diện chính thức của tổ chức.

---

## Stack & Deploy
- **Framework:** Astro
- **Deploy:** Vercel
- **CSS:** Design tokens (`packages/ui/tokens/*.css`) + **omni-kit** (`omni-kit.css`, class `.o-*`) + `<style>` bespoke trong từng `.astro`. KHÔNG framework CSS.
- **Component library:** Không. Layout/Header/Footer ở `packages/ui`. Homepage = bespoke `<style>`; trang nội dung = omni-kit.
- **Dev server:** `http://localhost:4323/`. ⚠️ Sửa file ở bản được serve: `C:\Users\Admin\Downloads\New-folder-main (6)\sbb-web` (KHÔNG phải worktree).

---

## Design System

### Reference
Clone + improve: https://omnidigital.com.sg/
Same visual DNA — dark theme, bold typography, large proof numbers, section storytelling.
**Goal: equal or better than Omni. Not a cheap imitation.**

### Colors
- **Exact match:** Omni Digital (https://omnidigital.com.sg/)
- **→ Lấy hex values từ CSS hiện có trong project, không đoán**
- Khi cần reference nhanh: inspect element trên omnidigital.com.sg để lấy giá trị chính xác
- Text primary: #FFFFFF / Text secondary: ~#A0A0A0 (safe defaults)

### Typography
- **Headline style:** ALL CAPS, very heavy weight, large tracking — English
- **Subtext:** Sentence case, Vietnamese — lighter weight
- **Decorative:** Oversized brand name "SBB" as background element — semi-transparent white
- **Contrast pattern:** English headline lớn + Vietnamese subtext nhỏ = visual hierarchy chủ đạo
- **Font:** Check `src/` hoặc layout file trong project — dùng đúng font đang import, không thay đổi

### Photography Style
- Double-exposure: nhân vật + cityscape overlay
- Hero subject: người trẻ Việt Nam, professional, confident
- Section với người thật (headshot): dark blazer, professional, không cần cười gượng

### UI Patterns
- Floating stat cards (rounded dark background, số lớn trắng)
- Large decorative brand text as background layer
- Radial orange glow behind hero subject
- Partner logos: rows, desaturated/white tinted
- Social icons bottom-right hero: LinkedIn, Instagram, Facebook, TikTok
- CTA button: orange pill, text "LIÊN HỆ"

---

## Navigation Structure
HOME · ABOUT SBB · PROGRAMS · NEWS · LEARN · COMMUNITY · [LIÊN HỆ button]

---

## Programs (4 chương trình chính)
- **Global Internships** — Thực tập quốc tế, J-1 USA
- **Career Training Global** — Đào tạo nghề quốc tế, J-1 USA + 407 Australia (Hospitality, Aged Care, Childcare)
- **GRP – Global Readiness Programme** — Chuẩn hóa năng lực hội nhập toàn cầu. Xây dựng theo tiêu chí UNESCO, SDG4 + SDG8. Kiểm định bởi ABE. Giảng dạy bởi alumni thạc sĩ/tiến sĩ UK, là chủ doanh nghiệp và giảng viên top universities Việt Nam.
- **Office Tour** — Đồng sáng lập với Career Mates. Trải nghiệm làm việc thực tế tại top global companies (JP Morgan, v.v.), mỗi doanh nghiệp 2 ngày. Kết hợp du lịch. Có các gói thời gian khác nhau.

---

## Proof Points (dùng đúng số, không làm tròn tùy tiện)

### SBB's own metrics
- **86%** — Học viên đạt tăng trưởng thu nhập >50% trong 12 tháng, HOẶC thăng tiến lên quản lý quốc tế
- **81%** — Học viên tiếp tục gắn bó với mạng lưới toàn cầu của SBB sau 18 tháng
- **5,000+** — Cơ hội thực tập & làm việc thực chất tại các tập đoàn đối tác quốc tế
- **89%** — Tỷ lệ visa approval
- **~20 năm** — Kinh nghiệm ngành

### Partner metrics (từ đối tác, ghi rõ nguồn khi dùng)
- **16,531** Internship Programs Arranged
- **90+** Nationalities
- **1,308** Active Candidates
- **12,000+** Active Host Organisations
- **24** Australian Cities

---

## Partner Organizations (visible in current design)
Hospitality: Westin, Hyatt, The Ritz-Carlton, St Regis, Sonesta
Healthcare/Aged Care: Deaconess, MetroHealth
Education/Research: University of Minnesota, Argonne National Laboratory
Sponsorship/Placement: Alliance Abroad, Metox, Armada
[+ others visible but partially cropped]

---

## Copy Rules
- **Bilingual structure:** English headline (impact) + Vietnamese subtext (context/emotion)
- Tone: Confident, direct, outcome-focused — nói bằng kết quả, không bằng lời hứa
- Lead với transformation: "We build globally-ready professionals" không phải "We help you apply for visas"
- Section headers: bold statement tiếng Anh ("RESULTS AREN'T A CLAIM FOR US — THEY'RE A PATTERN.")
- **Tuyệt đối không:** fabricate testimonials, bịa số liệu, hứa hẹn visa guarantee

---

## Homepage Sections — thứ tự hiện tại ↔ Omni (đã build đủ)
HERO → PARTNERS (marquee) → RESULTS (`#results`) → SERVICES (`#services`) → CASE STUDIES (`#case-studies` "THIS IS WHAT / REAL GROWTH" + carousel học viên) → MOMENTS (`#moments` "LIFE BEYOND / BORDERS" = Omni "AD CREATIVES / THAT CONVERT", coverflow) → FAQ → TESTIMONIALS ("WHAT THEY SAY ABOUT US") → CTA ("READY TO SHINE BEYOND BORDERS") → FOOTER.
Học viên thật xuyên suốt: **Khánh Trọng Giang** (Culinary, Melbourne), **My Linh Le** (Business, Melbourne), **Victoria Tran** (Marketing, Úc).

---

# ⭐ IMPLEMENTATION MEMORY — đọc kỹ trước khi làm section/trang mới

> Mục tiêu: bám sát Omni, **đồng bộ tuyệt đối** mọi thành phần. Quy trình bắt buộc:
> **soi Omni → soi SBB (zoom, đọc CSS) → sửa (tái dùng class sẵn có) → zoom verify → mới báo xong.**
> Người dùng rất khó tính về tiểu tiết; KHÔNG được ẩu, KHÔNG tự chế gây lệch.

## A. Tokens & font
- Nền `--paper:#110806`, `--paper-2:#1a0d08`. Accent `--accent:#FF5E3A`, `--accent-2:#FF8D60`.
  `--ink:#fff`, `--ink-soft:#C5C5C7`, `--ink-muted:#747476`, `--line:#26262A`.
- Header KHỔNG LỒ homepage dùng **`'Inter'` weight 500** (xem `.cs-header`), letter-spacing âm. KHÔNG đổi sang Plus Jakarta.
- ⚠️ `global.css` còn rule **neo-brutalist** (`!important` trên `.btn/.path-card`…) — KHÔNG tái dùng cho look Omni; dùng omni-kit.

## B. ⭐ CARD KÍNH CHUẨN (glass) — dùng MỌI nơi (gốc từ hero `.stat-card`; đã áp `.cs-glass-pill`)
```css
background: linear-gradient(165deg, rgba(80,52,42,.40), rgba(34,20,15,.46) 34%, rgba(17,10,7,.50) 72%, rgba(30,16,12,.47));
backdrop-filter: blur(14px); border:1px solid transparent; border-radius:20px;
box-shadow: nhiều lớp tối + 0 0 70px rgba(255,84,24,.12) + inset 0 1px 1px rgba(255,255,255,.16);
::before { inset:0; padding:1px; border-radius:inherit;          /* viền gradient mảnh */
  background: linear-gradient(135deg, rgba(255,255,255,.38), rgba(255,255,255,.06) 42%, rgba(255,255,255,.02));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; }
```
→ Card mới PHẢI theo công thức này (kính tối glossy ấm + viền gradient). KHÔNG card mờ phẳng.
**⚠️ Card header `.cs-glass-pill` (case-studies / moments / testimonials) — LỊCH SỬ + CHỐT mới (2026-06-12):**
- Bối cảnh: hero `.stat-card` "trong & bóng" vì **nền hero là vùng cam rực sáng**. Lo ngại copy y hệt sang section tối sẽ ra **đục/matte** → từng có giai đoạn đổi `.cs-glass-pill` sang "kính trong suốt" (alpha thấp `rgba(255,255,255,.12)…`, `backdrop-filter:none`). Nhưng trên vùng đen, bản trong suốt lại hiện ra **hộp xám phẳng** → user KHÔNG thích.
- 🔑 Thủ phạm "đục" thật sự KHÔNG phải do copy hero, mà do **lớp grain matte `::after`** (feTurbulence fractalNoise) từng áp lên `.cs-glass-pill` — hero `.stat-card` KHÔNG có lớp này. Gỡ nó đi là hết đục.
- ✅ CHỐT mới (user duyệt): `.cs-glass-pill` = **Y HỆT hero `.stat-card`** → nền gradient nâu ấm `rgba(80,52,42,.40) … rgba(30,16,12,.47)` + `backdrop-filter: blur(14px)` + viền gradient `::before` + box-shadow hero (đã có quầng ấm `0 0 70px rgba(255,84,24,.12)` TRONG shadow — KHÔNG thêm quầng-sau-card rời). **Đã gỡ `.cs-glass-pill` khỏi nhóm grain `::after`** (chỉ còn `.service-card`/`.cs-card`). Giữ nguyên size/vị trí pill cho bố cục header.

## C. ⭐ HEADER SECTION LỚN (Omni "AD CREATIVES / THAT CONVERT")
Cascade chéo 2 dòng: **dòng 1 trái (chữ lớn) + card kính** kéo sát cuối chữ (`margin-left:-4rem`) hạ xuống (`translateY(2.6rem)`, `z-index:20`) **đổ bóng đè lên dòng 2**; **dòng 2 lùi phải, chữ cuối mờ dần trắng→xám** (gradient text); mô tả ở phải dưới dòng 2. Font Inter 500.
Classes dùng chung: `.cs-header .cs-line .cs-line-1 .cs-glass-pill .cs-glass-title .cs-glass-sub`.
- Case-studies = gốc. Moments tái dùng `.cs-header`/`.cs-line`/`.cs-glass-pill`, **KHÔNG override cỡ chữ** (đồng bộ tuyệt đối). Riêng (2026-06-12, theo user): `.mvh-line2 .mvh-fade { margin-right: 2.39em }` để **mép trái BORDERS thẳng hàng REAL GROWTH/LOOKS LIKE** (hết lùi phải); `.mvh-fade` = **trắng đặc** (đã bỏ gradient mờ vì làm chữ trông nhỏ/yếu hơn). **Đã bỏ đoạn mô tả `.mvh-desc`** (theo user). Coverflow `.mv-track` = **9 card clip TikTok** (@duyendao222). Kiểu **facade cho nhẹ**: card = thumbnail `/images/tiktok/clip-01..09.jpg` + nút `.mv-play`, `data-tt`=video id. **Bấm card → lightbox `#mv-lightbox`** chèn `<video class="mv-lb-video">` **tự host** từ `/videos/clip-01..09.mp4` (autoplay **CÂM** + loop + controls + playsinline + nút **"Bật tiếng"** `.mv-lb-sound`; poster = thumbnail). ⚠️ PHẢI bắt đầu CÂM: autoplay-CÓ-TIẾNG bị chặn trên mobile & khách mới (media engagement thấp) → clip đứng im, user tưởng "không phát". muted autoplay luôn chạy mọi nơi; chạm "Bật tiếng" (hoặc nút loa của controls) để bỏ câm. `openLightbox(card)` suy src từ thumbnail (`/images/tiktok/clip-0N.jpg` → `/videos/clip-0N.mp4`), giữ `data-tt` cho link dự phòng **"Mở trên TikTok"** (`.mv-lb-tt`). ⚠️ LỊCH SỬ (ĐÃ BỎ): từng dùng embed TikTok chính thức (blockquote `.tiktok-embed` + `embed.js`) — render được player NHƯNG **bấm play KHÔNG phát, KỂ CẢ trên domain thật** (đã verify bằng Chrome thật: player hiện đủ nút nhưng frame đứng yên). Đây là **giới hạn của TikTok** (embed chỉ là thẻ xem trước, phát thật phải nhảy sang app/web TikTok) — KHÔNG phải lỗi localhost. → CHỐT: **tự host MP4**. Tải clip bằng **yt-dlp** `-f "b[format_id^=h264]" -S "+br"` → bản **H.264 540p (576×1024), bitrate thấp, KHÔNG watermark, FASTSTART** (~56MB/9 clip, phát ngay không chờ tải hết). ⚠️ ĐỪNG lấy `bytevc1` (= H.265, Firefox & nhiều Chrome KHÔNG phát trong `<video>`). ⚠️ Video tạo động bằng JS `innerHTML` → **KHÔNG nhận `<style>` scoped của Astro** (chỉ phần tử TĨNH trong template mới được gắn `data-astro-cid`) → ép size bằng **inline style** + rule **`:global(.mv-lb-video)`** (`max-width:96vw; max-height:86vh; width/height:auto` → vừa khung, đúng tỉ lệ 9:16, không méo/cắt). Đóng (nút/backdrop/Esc) → `lbFrame.innerHTML=''` gỡ video & dừng tiếng → **chỉ tải video khi bấm xem, trang vẫn nhẹ**. Thumbnail lấy qua oEmbed `https://www.tiktok.com/oembed?url=...` rồi resize-về-local (PowerShell System.Drawing, UA browser). JS coverflow = **virtual ring / VÒNG LẶP vô tận**: `.mv-track` `position:relative` cao cố định (560px; mobile 138vw), card `position:absolute` neo tâm (`left/top:50%` + `translate(-50%,-50%)`), mỗi card định vị theo `off = wrap(i - pos)` (modulo N) → **luôn cân 2 bên, không trống**. ⚠️ `place()` render **ĐỒNG BỘ** (init + kéo) — KHÔNG được chỉ dựa vào `requestAnimationFrame` cho lần render đầu vì **tab preview ẩn làm rAF NGỪNG** (frame không chạy → card trắng); `frame()` chỉ dùng rAF để ease (autoplay 4.2s / mũi tên). Kéo ngang xoay vòng, chạm mở clip; nút mũi tên đã bỏ `backdrop-filter` (đắt khi cuộn). 17 ảnh cũ (`/images/moments/*`, 3 học sinh `/images/students/*`) còn trên disk nhưng KHÔNG dùng nữa. Testimonials cũng tái dùng `.cs-header`.

## D. ⭐ SEAM 2 section — xóa "đường ray"
2 section cùng `--paper`. Vạch xuất hiện khi 1 bên có quầng sáng đột ngột ở ranh giới. Fix (gương đối xứng):
- Section trên `::after` quầng đáy `radial-gradient(ellipse 60% 305px at 50% 100%, rgba(255,108,50,.10), transparent 62%)`.
- Section dưới `::before` quầng đỉnh `…at 50% 0%…` **cùng màu/độ đậm/bán kính 305px** → ranh giới giữa vũng sáng liền, hết vạch.
- ⚠️ DPR 1.755: screenshot MCP ~1.07x nên hairline thiết bị KHÔNG hiện → chẩn đoán bằng logic + zoom, nhờ user xác nhận.

## E. omni-kit (`packages/ui/tokens/omni-kit.css`) — trang nội dung (`.o-*`)
`.o-hero`(eyebrow+`.o-mega`+`.o-lead`) · `.o-section`(`--tint/--glow`) · `.o-head`(`.o-head-title`+`.o-stroke`) · `.o-card`(`__tag/__title/__body/__num`) · `.o-grid`(`--2/3/4`) · `.o-rows/.o-row` · `.o-split` · `.o-statement` · `.o-stats/.o-stat__num` · `.o-deny`(gạch ngang) · `.o-checks`(✓) · `.o-pill` · `.o-btn`(`--primary/--ghost`) · `.o-cta`. Accent `.o-accent`/`.o-stroke`.
> Cần card "xịn" trên trang nội dung → dùng **card kính chuẩn (mục B)** thay `.o-card` nhạt để đồng bộ homepage.

## F. Trang & nav (đã gộp learn+news vào sbb, BỎ subdomain)
Nav nội bộ: `/ /about /programs /news /learn /community /apply`. Đã dựng first-pass (omni-kit): about, programs + `programs/{grp,internship-j1,office-tour,407}`, community, apply, `learn/index`, `news/index`. Cấu trúc: `.o-hero` → 2–4 section kit → `.o-cta`.
⚠️ **Còn nợ:** trang con sâu learn/news (bài viết, danh mục, lộ trình, `/learn/parent-corner`) — link tạm về hub. Các trang nội dung **chưa soi Omni kỹ từng trang** → khi quay lại phải soi lại.

## G. "ĐỪNG" (lỗi đã mắc)
- ❌ Đổi font header (lỡ để Jakarta 800 thay Inter 500). ❌ Tự chế card khác card chuẩn (mục B).
- ❌ Quầng sáng một phía ở ranh giới → đường ray. ❌ Báo "xong" khi chưa zoom kiểm tra.
- ❌ Dựng hàng loạt trang mà không soi Omni từng trang.

## Decisions Log
- ✅ Tokens/hex: lấy từ `packages/ui/tokens/colors.css` (xem mục A). Font header lớn = Inter 500.
- ✅ CSS: tokens + omni-kit + bespoke `<style>`. ✅ learn+news gộp vào sbb (bỏ subdomain).
- ✅ Card chuẩn = glass hero (mục B). ✅ Seam = gương đối xứng (mục D).
- ⏳ Trang nội dung: cần soi Omni & tinh chỉnh từng trang. ⏳ Trang con learn/news chưa dựng.
