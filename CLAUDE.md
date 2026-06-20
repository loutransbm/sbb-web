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
- Nền `--paper:#110806`, `--paper-2:#1a0d08`. **Accent `--accent:#E5510F`, `--accent-2:#FF7E34`** (định nghĩa: `packages/ui/tokens/colors.css`).
  `--ink:#fff`, `--ink-soft:#C5C5C7`, `--ink-muted:#747476`, `--line:#26262A`.
- ⚠️ **MÀU CAM CHUẨN TOÀN WEB = cam của card case-studies `.cs-card`, hue ≈18.5°** (user 2026-06-14: "lấy màu giống card case-studies, chỗ nào có cam đánh đúng màu này cho đồng bộ"). Card `.cs-card` ramp = `#1a0703→#571805 40%→#ad340a 72%→#E5510F 100%` + glow `rgba(255,126,52,.82)` + grain overlay .3 → đây là NGUỒN SỰ THẬT. **Đã chuẩn hoá 1 lượt toàn bộ literal cam** (script re-hue: hue→18.5°, sàn bão hoà .72, giữ lightness+alpha) trên ~15 file (tokens + index.astro 107 chỗ + components). Solid coral cũ (#FF5E3A/#FF8D60/#E05C1A) → `#E5510F`/`#FF7E34`; ~40 triple glow lệch hue (rgba(255,94,58), (230,74,25)…) → cùng hue 18.5° (vd coral glow `255,94,58`→`255,119,58`). GIỮ NGUYÊN: ramp card, glow card `255,126,52`, nền tối (`#110806`…), trắng/xám. **Card testimonials `.tm-body` = COPY Y HỆT gradient + grain của `.cs-card`** (KHÔNG còn dùng màu Omni `#bf5119` đã thử trước đó — bị lệch khỏi card SBB). Trang khác (about/programs/apply…) tự đồng bộ qua `var(--accent)`. Logo brand SVG KHÔNG đụng (là asset thương hiệu).
- ⚠️ **Card Program (`.service-card`) + FAQ (`.faq-item`) đã LÀM ĐẬM cam** (user 2026-06-14: "card Program & FAQ chưa đổi màu"). Lý do: 2 loại này là **kính tối + quầng cam góc** → tông đã đúng hue 18.5° nhưng cam NHẠT & ÍT, nên nhìn "chưa đổi" so với card case-studies cam đặc. Đã giữ thiết kế kính tối (icon 3D nổi, FAQ dễ đọc) NHƯNG đổi quầng cam sang **`#E5510F` đặc dâng mạnh**: `.service-card` glow chính = `radial(155% 132% at 86% 116%, rgba(229,81,15,.96)→rgba(173,52,10,.34)…)` (giữ nguồn sáng dưới-phải khớp bóng bake icon) + inset/halo đáy đổi sang `rgba(229,81,15,.42/.26)`; `.faq-item` 2 quầng góc trái → peak `rgba(229,81,15,.97/.82)` ramp `#ad340a`. KHÔNG đổi thành cam đặc kín thẻ (đã chào option đó, user chưa chọn).
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
- Case-studies = gốc. Moments tái dùng `.cs-header`/`.cs-line`/`.cs-glass-pill`, **KHÔNG override cỡ chữ** (đồng bộ tuyệt đối). Riêng (2026-06-12, theo user): `.mvh-line2 .mvh-fade { margin-right: 2.39em }` để **mép trái BORDERS thẳng hàng REAL GROWTH/LOOKS LIKE** (hết lùi phải); `.mvh-fade` = **trắng đặc** (đã bỏ gradient mờ vì làm chữ trông nhỏ/yếu hơn). **Đã bỏ đoạn mô tả `.mvh-desc`** (theo user). Coverflow `.mv-track` = **9 card clip TikTok** (@duyendao222). **Card = `<video>` PHÁT INLINE NGAY trong coverflow** (KHÔNG popup, theo yêu cầu user 2026-06-13): mỗi card `<div class="mv-card mv-card--video" data-tt=...>` chứa `<video src="/videos/clip-0N.mp4" poster="/images/tiktok/clip-0N.jpg" muted loop playsinline preload="none">`. **Chỉ card GIỮA (`.is-active`) phát** (`playActive()`), card khác giữ poster → chỉ 1 video chạy, nhẹ & mượt (0 nháy). Nút **"Bật tiếng"** `#mv-sound` đặt trong `.mv-stage` **NGOÀI `.mv-track`** (để click không vướng `setPointerCapture` của track) → toggle `soundOn`, bật/tắt tiếng card active; chuyển card thì giữ nguyên trạng thái sound. ⚠️ PHẢI bắt đầu CÂM: autoplay-CÓ-TIẾNG bị chặn trên mobile & khách mới (media engagement thấp); muted autoplay luôn chạy mọi nơi. ⚠️ Hiện/phát theo tầm nhìn dùng **`getBoundingClientRect` + poll (250–300ms)**, KHÔNG dùng `IntersectionObserver` — **smooth-scroll Lenis làm IO báo SAI** ('ngoài tầm' dù section đang hiện 100% → tự pause clip). ⚠️ Chrome trong coverflow 3D **đôi khi tự pause** video (không phải JS) → listener `pause` **tự phát lại** nếu còn `inView && .is-active`. **Auto-rotate ĐÃ TẮT** (`startAuto`=no-op) để xem trọn clip; điều hướng = kéo ngang / nút mũi tên (chuyển card → clip mới tự phát). **Chạm card GIỮA → play/pause**: tap-detect ở `pointerup` (`drag<10 && downOnActive`) gọi `toggleActive()` → overlay ▶ `.mv-pp` (trong `.mv-stage`, hiện khi `.mv-stage.is-paused`); cờ **`userPaused`** để resume-on-pause KHÔNG cướp lệnh pause của user (reset khi đổi clip / cuộn ra-vào). Tiếng: bỏ nút "Bật tiếng"; `muted=!soundOn`, `soundOn=true` ở tương tác đầu (`enableSound`, browser cấm autoplay-có-tiếng trước gesture). ⚠️ LỊCH SỬ (đã thử rồi BỎ): (1) **embed TikTok** (blockquote `.tiktok-embed`+`embed.js`) render player NHƯNG bấm play KHÔNG phát kể cả domain thật (giới hạn TikTok — embed chỉ là thẻ xem trước; verify bằng Chrome thật). (2) **lightbox popup** `<video>` (autoplay câm + nút Bật tiếng) → user muốn phát NGAY trong section + tap card trên mobile không ăn → bỏ popup, chuyển inline. **Self-host MP4**: tải `yt-dlp` rồi transcode `ffmpeg` → **H.264 (faststart, `-pix_fmt yuv420p` 8-bit)** chạy MỌI trình duyệt. ⚠️ ĐỪNG dùng `bytevc1` (=H.265: Firefox & nhiều Chrome KHÔNG phát `<video>`); 1080p/720p của TikTok chỉ có ở H.265 nên phải transcode. Chất lượng: clip-01 **1080p**, clip-04 720p, **7 clip còn lại chỉ 540p** (trần TikTok render sẵn — muốn 1080p cả 9 phải có file gốc của user). Thumbnail (poster) lấy qua oEmbed `…/oembed?url=…` rồi resize-local (PowerShell System.Drawing). JS coverflow = **virtual ring / VÒNG LẶP vô tận**: card `position:absolute` neo tâm (`left/top:50%`+`translate(-50%,-50%)`), định vị theo `off = wrap(i - pos)` (modulo N) → luôn cân 2 bên. `place()` render **ĐỒNG BỘ** (init+kéo); `frame()` chỉ dùng rAF để ease (mũi tên). Kéo ngang xoay vòng; nút mũi tên bỏ `backdrop-filter` (đắt khi cuộn). CSS card: `.mv-photo video { object-fit:cover }`, `.mv-card--video.is-active::after{opacity:0}` (bỏ lớp tối cho rõ clip). 17 ảnh cũ (`/images/moments/*`, 3 học sinh `/images/students/*`) còn trên disk nhưng KHÔNG dùng nữa. Testimonials cũng tái dùng `.cs-header` — **đồng bộ HỆT case-studies (2026-06-13)**: header dòng lớn `WHAT THEY` + pill `.cs-glass-pill` "REAL VOICES". ⚠️ Riêng dòng 2 theo **Omni của CHÍNH section này** (user đối chiếu): `SAY ABOUT US` = **MỘT DÒNG** (`.cs-line-2`, KHÔNG stack) + **văn bản phụ `.tm-desc`** canh trái ngay dưới nó (`.cs-right-block.tm-right`, gap:0, desc reset `letter-spacing:normal`/`line-height:1.65`, max-width 42ch, **font `Inter` 400** — KHÔNG `--font-body` Be Vietnam Pro vì render dày trông như in đậm; khớp font subtext pill `.cs-glass-sub`). KHÁC case-studies (stack 2 dòng `REAL GROWTH`/`LOOKS LIKE`, KHÔNG mô tả). Hiệu ứng "SAY" xám→"US" trắng là do **bóng pill `.cs-glass-pill` đổ xuống** (không phải gradient-text), trùng đẹp look Omni. **⚠️ ĐỒNG BỘ VỊ TRÍ với các section trên — chốt cuối (user, 2026-06-13, đã đo getBoundingClientRect):** TUYỆT ĐỐI KHÔNG tự chế transform/dịch tùy ý (đã thử kéo `.tm-right` sang trái + nâng pill → user gắt vì lệch khỏi chuẩn; ĐÃ GỠ). Quy tắc: testimonials phải dóng thẳng hàng case-studies/moments:
  - **Cỡ chữ dòng 2** "SAY ABOUT US" = **72.96px = HỆT `.cs-line-2`** REAL GROWTH (cùng class, KHÔNG đổi).
  - **Mép trái dòng 2 thẳng cột 916px** (= REAL GROWTH/LOOKS LIKE/BORDERS). SAY ABOUT US hẹp hơn REAL GROWTH → bù `#testimonials .cs-line-2 .cs-text-white { margin-right: 0.41em }` (cùng cơ chế moments `.mvh-fade`, em theo cỡ dòng 2 → co giãn). Đo: line2_left 917 ≈ 916 ✓.
  - **Pill + gap dòng1↔dòng2 = CHUẨN shared** (`.cs-glass-pill` translateY 2.6rem, `.cs-header-bottom` margin-top 1.25rem). KHÔNG override. Đo: gap=20 (=case-studies), pill top_vs_line1=67, bottom_vs_line1=+16 (=case-studies/moments). Pill chườm cuối WHAT THEY 40px như mọi section.
  - **Card nội dung `.tm-stage` PHẢI break-out** (đã thêm vào nhóm `@media(min-width:992px)` cùng `.cs-cards-wrapper`/`.mv-stage`) → left=32, width=1380 **HỆT** card case-studies/moments. Trước đó `.tm-stage` bị bó trong `.container` (left=114, thụt 82px) → user gắt "card trong phải thẳng hàng". Hàng dưới `.cs-header-bottom` để **3 chip tab `.tm-switch/.tm-tab`** (đã CHUYỂN từ `.tm-stage` lên header, BỎ `<p class="tm-lead">`), style **Y HỆT `.cs-tabs/.cs-tab`** (nền trong + viền `rgba(255,255,255,.2)` pill 100px, active = gradient `#D84A10→#681E02` + glow). ⚠️ KHÔNG set `font-family` cho `.tm-tab` — `.cs-tab` là `<button>` không có reset `font:inherit` nên render **font mặc định UA**, set Inter/Jakarta là LỆCH. **⚠️ NỘI DUNG = LỜI ĐỐI TÁC B2B (user, 2026-06-13), KHÔNG phải học sinh** (học sinh đã ở case-studies trên — tránh trùng). 3 chip + 3 card = **ABE / IKI GROUP / CAREER MATES**. Pill sub + `.tm-desc` đổi sang giọng đối tác ("Lời thật từ các đối tác đồng hành cùng SBB"). **Card = DẠNG OMNI 2 CỘT (user, 2026-06-13)** giống Omni "I HAD TO STOP MARKETING…": `.tm-card` = flex 2 cột — **cột trái `.tm-media`** (ảnh chân dung đại diện, `flex:0 0 33%`, radius 28px, `object-fit:cover`, tint cam đáy `::after`) + **cột phải `.tm-body`** (radius 28px, `flex-direction:column` + **`justify-content:space-between`** → quote ĐỈNH / stats GIỮA dọc / author ĐÁY; + **grain `::after`** feTurbulence). ⚠️ **Gradient = LẤY ĐÚNG MÀU CARD OMNI** (user 2026-06-14, "pha màu y hệt Omni, sang/mạnh/không xỉn"): card cam Omni thực ra là **ảnh AVIF `bg-case-studies.avif`** (grain nướng sẵn). Đã sample từng pixel cột x≈80% (box-average lọc grain) → tái dựng bằng CSS: `linear-gradient(180deg, #190f0d 0% → #1c100d 16% → #29130d 30% → #3b180c 41% → #56210c 51% → #732c0f 63% → #8d360f 73% → #a44312 84% → #b34b16 93% → #bf5119 100%)` + radial glow đáy rất nhẹ `radial(90% 60% at 50% 118%, rgba(196,84,30,.45), transparent 62%)`. **BÀI HỌC: "sang không xỉn" của Omni = cam BÃO HOÀ CAO + tương phản (đỉnh gần đen #190f0d → đáy cam cháy #bf5119), KHÔNG phải màu sáng.** Bản cũ xỉn vì radial `rgba(255,142,88)` là cam pastel/hồng → wash màu thành đục. Grain `::after` `opacity:.28` + `mix-blend:soft-light` (giống Omni, KHÔNG overlay — làm xỉn). Ảnh `.tm-media img` thêm `filter:saturate(1.08) contrast(1.03) brightness(1.04)` + tint đáy giảm còn `rgba(205,78,32,.2)`. `.tm-stage` thêm `box-shadow` quầng ấm `rgba(255,100,50,.42)` để card nổi khỏi nền tối. Chứa: `.tm-quote` (dấu **" "** curly, KHÔNG « »; headline 500, clamp 1.15–1.95rem, sentence-case — tiếng Việt KHÔNG uppercase), `.tm-stats` (**3 stat TO `clamp(1.9–2.9rem)` + `justify-content:space-between` dàn sát 2 mép card** như Omni 100%/&lt;$50/164), `.tm-author` (`<strong>— TÊN người</strong>` + `<span>` vai trò). **Tên đại diện thật (user):** ABE = **Trần Quang Sáu** (Đại diện); IKI Group = **Đặng Hòa** (Chủ tịch); Career Mates = **Nguyễn Tùng Dương** (Founder) — ⚠️ dấu tiếng Việt là phỏng đoán, nhờ user xác nhận chính tả. **Chiều cao card = ĐÚNG bằng card case-studies (user):** JS sync `.tm-card` `min-height` = chiều cao thực `#case-studies .cs-cards-wrapper` (≈666px, re-sync on load+resize, chỉ desktop ≥992px; CSS fallback `min-height:600px`). KHÔNG hard-code px vì card case-studies cao theo nội dung.
  - **(CẬP NHẬT 2026-06-14 — ĐỒNG BỘ THEO CASE-STUDIES)** `.tm-body` gradient + grain `::after` giờ = **COPY Y HỆT `.cs-card`** (nền `#1a0703→#571805→#ad340a→#E5510F` + glow `rgba(255,126,52,.82)` + grain overlay .3); ĐÃ BỎ màu Omni `#bf5119` mô tả phía trên. **Khoảng thở tiêu đề↔card đối tác: `.tm-stage { margin-top: clamp(1.25rem,2.4vw,2.25rem) }` = ĐÚNG BẰNG `.cs-cards-wrapper`** (case-studies) — 2 con số này PHẢI khớp, KHÔNG để lệch. `.tm-body` thêm **viền cam gradient** `linear-gradient(150deg,#ffc09a→#ff9d68→#ff8c50)` (= ĐÚNG viền `.cs-cards-wrapper`, giống Omni — đổi CẢ HAI cùng lúc cho khớp). ⚠️ Vẽ bằng **`.tm-body::before` ring qua mask** (`padding:1.5px` + `mask-composite:exclude`, `z-index:3`), KHÔNG dùng `border:transparent + border-box` — kỹ thuật cũ bị **mờ/ám màu + lộ 1px ảnh thẻ sau ở mạch carousel** (user báo lỗi 2026-06-14); ring đục vẽ ĐÈ mép nên sắc nét, che mạch sạch. ⚠️ **Gradient viền PHẢI sáng đều, KHÔNG kết thúc bằng cam tối** (`#c7440a` cũ): đáy card nền cam sáng `#E5510F` → viền tối ở đáy bị "tàng hình" trông như **viền cắt** (user báo 2026-06-14). Dùng dải sáng `#ffc09a→#ff8c50` (luôn sáng hơn nền) → viền nổi đều quanh thẻ. ⚠️ **Card ảnh `.tm-media` KHÔNG có viền** (đã thử thêm rồi user bảo bỏ — chỉ card chữ có viền). **Khe đen giữa 2 card + quầng cam dưới bị "chia cắt" + có "line cắt"** (user 2026-06-14): vì 2 card phủ KÍN stage edge-to-edge nên **chỉ KHE giữa lộ nền phía sau**. ⚠️ KHÔNG dùng `box-shadow` dưới `.tm-stage` (mép trên box-shadow sắc = tạo **"line cắt"** ngay đáy card) và KHÔNG để glow trên `.tm-stage` bg (bị `overflow:hidden` cắt cứng ở đáy stage). → Bỏ cả 2; đặt **MỘT quầng radial MỀM trên `.tm-section` background**: `radial-gradient(62% 30% at 41% 86%, rgba(229,81,15,.55)→rgba(180,55,15,.24)→transparent)` + `var(--paper)`. `.tm-stage` trong suốt nên quầng section hắt qua KHE giữa + lan xuống dưới LIỀN MẠCH, không mép cắt. → hết khoảng đen & line cắt, mượt. ⚠️ **Seam testimonials↔CTA** (user 2026-06-14 "xóa line giữa 2 section"): quầng đáy `.tm-section` bị `overflow:hidden` cắt ở ranh giới → thêm quầng ĐỈNH GƯƠNG cho `.cta-final` background `radial-gradient(62% 24% at 41% 0%, rgba(225,78,16,.22)→transparent)` (cùng x 41%, cùng tông, alpha khớp mép ~.2) → 2 nửa đối xứng, sáng liền qua ranh giới, hết line. (Theo hệ SEAM mục D.)
**CAROUSEL LƯỚT (user, 2026-06-13):** `.tm-panels#tm-track` = flex track, mỗi `.tm-card flex:0 0 100%` → JS `translateX(-index*100%)`. Điều hướng = **kéo/vuốt ngang** (pointer drag trên `.tm-stage`, axis-detect, ngưỡng 60px, `setPointerCapture`, `touch-action:pan-y`) + **nút `.tm-nav` ‹ ›** (hover-reveal: ẩn mặc định `opacity:0`, hiện khi `.tm-stage:hover`) + **3 chip `.tm-tab`** — cả 3 đồng bộ qua `goTo()`. CHỐT BIÊN (clamp 0..2, KHÔNG wrap; nút disable ở đầu/cuối). `.tm-stage` thêm `overflow:hidden`. Card hết dùng `display:none/is-active` để ẩn (tất cả nằm trong track); `is-active` giờ chỉ để chip active + marker. Đã bỏ animation `faqReveal` (thay = trượt track 0.55s). `.tm-card.is-active` min-height clamp(420–540px) → media portrait; <820px stack dọc. ⚠️ Ảnh = `/images/partners-rep/{abe,iki,career-mates}.jpg` — **user phải tự lưu file** (ảnh dán chat KHÔNG tải về disk được); chưa có file thì `onerror` hiện placeholder `.tm-media--empty` ("Ảnh đại diện"). Bỏ `.tm-quote-mark/.tm-foot/.tm-avatar/.tm-logo` cũ. Stats vẫn placeholder (Omni dùng SỐ lớn như 100%/164 — user thay số thật cho mạnh). ⚠️ Quote hiện là **placeholder trung tính** bám quan hệ THẬT (ABE kiểm định GRP; Career Mates đồng sáng lập Office Tour; IKI Group để generic) — theo nguyên tắc KHÔNG bịa testimonial, user thay bằng quote partner đã duyệt. `.tm-desc` size = `clamp(0.85rem,1vw,1rem)` (user yêu cầu nhỏ hơn). JS chuyển panel (`.tm-tab` toggle `.is-active`) vẫn chạy (đã test ABE/IKI/CM đều đổi card đúng). KHÔNG dùng class `.cs-tab` trực tiếp cho chip testimonials vì JS case-studies query `.cs-tab` toàn cục (sẽ cướp state).

### Tiêu đề FINAL CTA (`#get-started`) = kiểu Omni "READY TO GROW & SCALE" (user 2026-06-14)
Bỏ tiêu đề CŨ (centered, `.cta-final-title` 3 dòng có `.cta-stroke` viền chữ + `.cta-eyebrow`). Thay = **cascade trái + glass pill** giống Omni & các section khác: dòng 1 `cs-line-1` "READY TO" (trắng) + `.cs-glass-pill` ("BẮT ĐẦU" + sub); dòng 2 `.cta-line-2` = **động từ LỚN `.cta-verb` "SHINE"** (cỡ cs-line-1, trắng) + **đuôi XÁM `.cta-tail` "BEYOND / BORDERS?"** (cỡ cs-line-2, `.cs-text-gray` #777, 2 dòng) nằm sát phải, `align-items:flex-start`. Omni đo được: "READY TO"/"GROW" 186px, "& SCALE…" 86px (~½) → map đúng cs-line-1 / cs-line-2. Section đổi `text-align:left`, `.cta-final-inner align-items:flex-start`; sub + 2 nút (`.cta-final-actions`) canh TRÁI (thụt theo `.container`, hẹp hơn heading break-out — giống Omni form thụt dưới heading). Glow `::before` dời về trái (40% 60%). Giữ nội dung SBB (không copy chữ Omni).
  - **Căn chỉnh dòng 2 (user 2026-06-14):** `.cta-line-2` = `justify-content:space-between` + `align-items:flex-start`. **SHINE `margin-left:2.3em`** (đẩy SHINE sang phải nằm SÁT đuôi, chừa ~1 dấu cách — user yêu cầu "sát Beyond Borders"). **Đuôi `.cta-tail margin-right:1.85em`** → mép TRÁI "BEYOND/BORDERS?" thẳng **cột 916** = `cs-line-2` REAL GROWTH/SAY ABOUT US/BORDERS (đo: SHINE left 435 right 896, BEYOND left 917 = COL 916, gap 21px ✓). **Đuôi = `.cs-text-white` TRẮNG** (user: "đừng làm mờ, để trắng tự nhiên" — KHÔNG dùng `.cs-text-gray` #777 nữa). **Khoảng cách dòng 1↔2** `.cta-line-2 margin-top: 1.25rem` = ĐÚNG bằng `.cs-header-bottom` các section trên (đo gap = 20px y hệt case-studies/testimonials). **Đáy SHINE = đáy BORDERS?** nhờ `align-items: last baseline` (canh baseline dòng cuối — KHÔNG flex-end vì lệch descent theo cỡ chữ; bỏ `padding-top` của `.cta-tail`). **Pill CTA kéo xuống** `.cta-final .cs-glass-pill { transform: translateY(3.4rem) }` (mặc định 2.6rem, chỉ scope CTA). **Cỡ chữ ĐÃ KHỚP** section trên: `.cta-verb`=175px=`cs-line-1`, `.cta-tail`=73px=`cs-line-2`.

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

### F.1 ⭐ HERO trang ABOUT (`about.astro`) — chốt 2026-06-14 (KHỚP Omni "ABOUT OMNI DIGITAL & THE WAY WE WORK SMART")
Cascade 2×2 = **HỆT hệ tiêu đề section homepage** (KHÔNG tự chế cỡ riêng):
- Cụm lớn 2 dòng `ABOUT SBB` / `INSTITUTE` (`.cs-line-1` + `.about-verb`) = **cỡ DÒNG 1 homepage `.cs-line-1` `clamp(8.5rem,12vw,11rem)`**, Inter 500, tracking -0.085em, TRẮNG. ("INSTITUTE" = map chữ thứ 2 brand như Omni "DIGITAL"; user đã duyệt cụm "ABOUT SBB INSTITUTE".)
- Đuôi 2 dòng `& THE WAY WE` / `WORK SMART` (`.about-tail`) = **cỡ DÒNG 2 homepage `.cs-line-2` `clamp(3rem,5vw,6.5rem)`**, TRẮNG (= quy luật homepage CTA, user "để trắng tự nhiên" — KHÔNG xám). Canh phải; **`.about-line-2{align-items:center}`** → NÂNG "& THE WAY WE" lên ngang giữa INSTITUTE (user 2026-06-14; KHÔNG dùng baseline vì tụt xuống đáy), "WORK SMART" thả xuống dưới.
- Pill `.cs-glass-pill` ("CÁCH SBB LÀM") = card kính chuẩn, **chỉ chườm NHẸ ~8px cạnh chữ "B" cuối "ABOUT SBB"** (`margin-left:-2rem; transform:translateY(1rem)` — kéo xuống chút theo user 2026-06-14) — KHÔNG chườm sâu làm mất chữ (user 2026-06-14 "đừng chườm lên B nhiều quá, mất chữ"; KHÔNG -4rem, KHÔNG auto-đẩy-mép-phải). **Override `box-shadow` đổ BÓNG XUỐNG mạnh** (`0 66px 98px -16px rgba(0,0,0,.80)` + lớp -14px 44px…) → bóng phủ lên đuôi "& THE WAY WE" làm nó tối/xám đi, "WORK SMART" vẫn trắng = HỆT hiệu ứng Omni (user "bóng đánh xuống & the way we work smart").
- **2 mép tiêu đề = THẲNG ĐÚNG 2 mép thanh nav, mọi bề rộng:** wrapper `.about-hero-wrap` dùng **CSS y HỆT `.header-inner`** = `width:calc(100% - 4rem); max-width:120rem; margin-inline:auto`. (Đo: wrap/tail phải = nav phải = 1412; "ABOUT SBB" trái = nav trái = 32.) ⚠️ ĐÃ BỎ cách break-out cũ (cs-container + công thức `50% - 50vw + sbw/2`): nó **left-anchor**, lệch nav (vốn **center**) trên màn > ~1920px → tràn/lệch. Cách mới `100%` đã trừ scrollbar nên **KHÔNG cần `--sbw`** và khớp nav ở mọi width. (`--sbw` vẫn để ở BaseLayout, vô hại.)
- **Nền = COPY NGUYÊN ánh sáng hero homepage `.omni-hero`** (user 2026-06-14 "màu vẫn chưa giống hero, có mỗi copy paste" → ngừng chế tay, copy y nguyên): `.about-hero` background = HỆT 3 lớp của `.omni-hero` (`radial(56% 305px at 45% 100%, rgba(255,115,52,.20))` + `linear(to bottom … rgba(21,11,7,.35))` + `radial(circle at top center, rgba(255,79,0,.12)→#150b07 96%)`). `.about-hero::after` = noise HỆT `.omni-hero::after` (opacity .08, mix overlay, mask đáy). `.about-hero::before` = vignette HỆT `.omni-hero::before` (`radial 72% 88% at 50% 34%, transparent 44%→rgba(6,3,2,.34)`, mask đáy). **Element `.hero-glow-beam`** (đổi từ `.about-hero-glow`) = HỆT `.hero-glow-beam` homepage (cùng gradient `rgba(255,138,86,1)…` + `filter:blur(28px)`), đặt sát MÉP TRÁI rọi ngang vào "ABOUT SBB INSTITUTE": `top:4%; left:8%; rotate(-16deg); width:900px; height:90%` (user 2026-06-14 "ánh sáng đánh từ mép trái vào chữ"). Sáng trái → tối phải (như Omni). ⚠️ `height:90%` (KHÔNG 168%): hero có `overflow:hidden` (vì beam left:8% tràn mép trái) → nếu beam dài tới đáy sẽ bị cắt cứng = ĐƯỜNG CHIA CẮT với section dưới (user báo). Cho beam tắt TRƯỚC đáy hero → đáy hero = `#150b07`+quầng = đỉnh section logo (gương) → liền mạch. z-index: beam/noise=1, vignette=2, `.about-hero-wrap`=3 (chữ KHÔNG bị vignette làm tối). ⚠️ Base giờ là `#150b07` (= hero homepage, KHÔNG còn #110806) → có thể lệch nhẹ với section team `#110806` phía dưới (chưa làm seam-bridge; theo dõi). ⚠️ LỊCH SỬ alpha (đừng lặp): muted .30 "mờ nhạt"; vivid .66 + vignette .62 "tối quá"; tự-chế .95 vẫn "chưa giống" → CHỐT = COPY NGUYÊN homepage.
- **Spacing**: `align-items:flex-start` + `padding-block: clamp(9rem,12vw,13rem) clamp(3rem,5vw,5rem)` → cụm tiêu đề KHÔNG dính header (user 2026-06-14).
- **Lead (`.about-hero-lead`)**: BÉ + viết thường như Omni — `clamp(0.92rem,1.05vw,1.05rem)`, weight 400, `line-height:1.6`, `max-width:42ch`, color `--ink-soft`, `text-transform:none`. Canh dưới-phải (`margin-left:auto`).
- Mobile (`@media max-width:991px`): `.about-hero-wrap` width `calc(100% - 3rem)` (lề 1.5rem), dòng 2 xếp dọc canh trái, bỏ indent/auto của verb+pill, lead full-width.
- **Section 2 about = BÊ NGUYÊN partner-marquee từ homepage** (user 2026-06-14): copy verbatim cả markup (`.partner-marquee-section` + `.partner-text-block` heading "MINDSET. CONDUCT. CAPABILITY…" + 3 `.marquee-track` logo) lẫn CSS (`@keyframes marqueeScroll`…) vào `about.astro`, đặt NGAY dưới hero (trước MEET THE TEAM). Mạch nối hero→section2 LIỀN vì hero giờ base `#150b07` + section2 `background:linear(#150b07→#110806)` & `::before` quầng đỉnh gương với quầng đáy hero (HỆT cơ chế seam homepage mục D) + beam tắt trước đáy hero (xem trên). Ảnh `/images/partners/*` dùng chung public nên chạy luôn.
  - ⚠️ **`--sec-pad` ĐÃ ĐƯA THÀNH TOKEN GLOBAL** (`packages/ui/tokens/spacing.css` `:root`, = `clamp(4rem,8.5vw,7.5rem)` HỆT homepage). Trước đây chỉ định nghĩa trong `index.astro` `:global(:root)` → trang nội dung khác bị `var(--sec-pad)`=0 → section dính sát nhau (user báo "khoảng cách 2 section"). Giờ mọi trang có đúng nhịp giãn. (Homepage vẫn set lại trùng giá trị — vô hại.)
  - ⚠️ **HAIRLINE seam (user báo "vẫn còn đường line" dù MCP screenshot nhìn liền):** = vạch tóc thiết bị ở DPR 1.755 (boundary 2 lớp hero↔section), MCP screenshot ~1.07x KHÔNG hiện nhưng màn user CÓ. Fix = thêm **`.hero-seam-bridge` HỆT homepage** (1 khối `#150b07`+quầng `radial 56% 305px at 45% 50%`, mask fade 28-72%) NHƯNG đặt **TRONG `.partner-marquee-section`** (`top:-60px;height:120px`) — KHÔNG đặt trong hero vì hero `overflow:hidden` sẽ cắt nửa dưới. Bridge vắt qua ranh giới → 1 lớp duy nhất → hết hairline. (Beam hero cũng đã tắt trước đáy — xem mục beam.)

### F.2 Section "MEET THE TEAM" (about.astro) — chốt 2026-06-14
- Nội dung = **"MEET THE TEAM BEHIND YOUR JOURNEY"** (map TRÙNG số chữ Omni "MEET THE TEAM BEHIND THE GROWTH" → tái dùng y nguyên cascade hero, đỡ căn chỉnh). Pill = "ĐỘI NGŨ SBB" (giữ giọng SBB).
- Cấu trúc = HỆT hero: `.cs-line-1` "MEET THE"+pill / `.about-line-2` (`.about-verb` "TEAM" + `.about-tail` "BEHIND YOUR"/"JOURNEY").
- **Heading TÁCH khỏi `.container`** → break-out sát 2 mép nav (CSS `.about-team-head{width:calc(100% - 4rem);max-width:120rem;margin-inline:auto}`); team-grid vẫn trong `.container`. Căn chuẩn (user 2026-06-14, đo lệch 0px):
  - MEET mép trái = 32 = mép trái hero.
  - TEAM dịch phải `.about-team-head .about-verb{margin-left:1.9em}` (= hiệu bề rộng "MEET THE"−"TEAM") → mép phải M(TEAM) thẳng mép phải E(THE). Dùng `em` để co giãn theo cỡ chữ.
  - Đuôi "BEHIND YOUR/JOURNEY" nằm **ngay sau TEAM, có KHOẢNG THỞ ~25px** (giống Omni "TEAM BEHIND THE", user chốt: KHÔNG đẩy ra mép phải, KHÔNG dính/chườm): `.about-team-head .about-line-2{justify-content:flex-start;gap:0}` + đuôi `.about-tail--left{align-items:flex-start;text-align:left;margin-left:0.35em}` (hở ~25px sau M; em theo cỡ đuôi). Đuôi canh TRÁI → J(JOURNEY) thẳng B(BEHIND). (KHÁC hero: đuôi hero canh phải, space-between.)
  - **Bóng pill đổ xuống "BEHIND YOUR"**: pill team mặc định dùng box-shadow base (yếu) → phải override `.about-team-head .cs-glass-pill{box-shadow: 0 66px 98px -16px rgba(0,0,0,.80) + …}` = HỆT hero → "BEHIND YOUR" tối/xám, "JOURNEY" trắng (như Omni). Pill (đáy ~260) nằm ngay trên "BEHIND" (top ~264) nên bóng phủ đúng.
  - **Beam sáng từ MÉP PHẢI vào "BEHIND YOUR JOURNEY"** (user 2026-06-14, mirror hero nhưng đánh từ phải): `.team-glow-beam` = HỆT gradient `.hero-glow-beam` + blur 28px, đặt `top:-90px; left:80%; rotate(16deg); width:880px; height:840px; z-index:0`, **tâm sáng `at 50% 40%`** (hạ thấp → rọi đúng "BEHIND YOUR JOURNEY"). Heading+grid `z-index:1`. ⚠️ **Beam CHƯỜM LÊN partner section** (user "đừng cắt, để chườm lên cho thật"): `.about-team{overflow-x:clip; overflow-y:visible; z-index:2}` — clip ngang (chặn cuộn) + cho tràn dọc (beam top:-90 lên partner mờ dần). **PHẢI có `z-index:2`** (> partner section `z-index:1`) nếu không phần beam chườm lên bị **nền đục của partner section ĐÈ CHE** → vẫn thấy cắt/line (lỗi user báo lần đầu chỉ set overflow). Có cả 2 (overflow-y:visible + z-index:2) mới hết line. (KHÔNG dùng `overflow:hidden` của .o-section vì cắt cứng beam.)
- **Card member kiểu Omni** (user 2026-06-14 "card nhỏ lại người chồi lên, mỗi người 1 kiểu, ~6 card"): cấu trúc `.team-photo`(vùng CỐ ĐỊNH cao `clamp(230,19vw,300px)` → tên dóng đều) chứa `.team-blob`(cam, neo ĐÁY, nhỏ ~196px) + `.team-cutout`(ảnh nền-trong, `bottom:0` + `max-height:128%` → ĐẦU CHỒI lên trên blob) / placeholder `.team-photo-label`. **6 blob border-radius KHÁC NHAU + cỡ + translateX lệch** qua `:nth-child(1..6)` (không dập khuôn). Grid 3 cột `align-items:end`. ⚠️ Hiệu ứng chồi lên CHỈ hiện khi có **ảnh cut-out PNG nền trong** ở `team[].img` (chưa có → đang placeholder "ẢNH"). User sẽ gửi ảnh tách nền sau.

## G. "ĐỪNG" (lỗi đã mắc)
- ❌ Đổi font header (lỡ để Jakarta 800/300 thay Inter 500). ❌ Tự chế card khác card chuẩn (mục B).
- ❌ Quầng sáng một phía ở ranh giới → đường ray. ❌ Báo "xong" khi chưa zoom kiểm tra.
- ❌ Dựng hàng loạt trang mà không soi Omni từng trang.
- ❌ Quên `max-width:none` cho body text trong thanh/card → bị cap `<p>` toàn cục `--max-w-prose:672px`, chữ "bo vào góc" hẹp (đã dính ở `.faq-a p`).
- ❌ Lấy `.services-heading` "PROGRAMS" làm mẫu tiêu đề — nó là **ngoại lệ mảnh** (Plus Jakarta 300); chuẩn là Inter 500 theo `.cs-line-1`.

## H. ⭐ FAQ SECTION (`#faq`) — chốt 2026-06-13
Layout Omni: chữ **"FAQ" khổng lồ** → **danh sách thanh accordion FULL-WIDTH**. **KHÔNG lead text dưới tiêu đề, KHÔNG CTA banner cuối** (cả hai đã thử rồi BỎ theo user).
- **`.faq-mega`** = **Inter 500, `clamp(8.5rem,12vw,11rem)`, `letter-spacing:-.085em`, uppercase — KHỚP HỆT `.cs-line-1`** (REAL GROWTH/BORDERS). Từng lỡ để Plus Jakarta 800/300 → user phàn nàn lệch. `margin-bottom`≈94px (cách thanh đầu).
- **Căn mép:** `.faq-mega` + `.faq-list` break-out sát 2 mép **2rem (32px)** trùng thanh nav — rule `@media(min-width:992px)` dùng biến `--sbw` (= bề rộng scrollbar, set bằng JS cuối body) để trừ, tránh lệch vì `100vw` tính cả scrollbar. Mọi thanh trải 32↔32.
- **`.faq-item`** (thanh) = `border:1px solid rgba(255,122,64,.30)`, `border-radius:40px`, nền = **2 quầng cam (góc DƯỚI–TRÁI + TRÊN–TRÁI) loang trên `#1a0c08`** (sáng, không matte). Thanh CAO cho thoáng (`.faq-q` padding dọc ~66px). hover/`[open]` viền cam đậm hơn.
- **`.faq-q`** = font headline (Plus Jakarta) 600 uppercase `clamp(1.15–1.7rem)` **TRẮNG**. **`.faq-icon`** = dấu "+" 42px nét 2px accent; mở ra → "−" (`[open] .faq-icon::after{scaleY(0)}`).
- **`.faq-a p`** ⚠️ BẮT BUỘC `max-width:none` — `<p>` toàn cục bị cap `--max-w-prose:672px`; thiếu nó câu trả lời "bo vào góc" hẹp 672px thay vì trải full thanh. Lề trái khớp `.faq-q`, lề phải thoáng hơn.
- **JS:** mở 1 mục → các mục khác tự đóng (`.faq-item` toggle). Mục #1 `open` sẵn.
- **12 câu** xếp theo phễu chuyển đổi: định vị → đối tượng/điều kiện → tiếng Anh → ngành+điểm đến → lộ trình → chi phí → cam kết → visa/PR → việc làm/thu nhập → ROI (86/93/81%) → rủi ro/đổi ý → đồng hành sau khi sang. ⚠️ Câu giá/visa/hoàn phí **KHÔNG bịa số**, điều hướng về buổi tư vấn.
- **Ánh sáng lan MOMENTS→FAQ** (mục D): `.moments-section::before` quầng đáy (`at 50% 100%`, vươn 460px lên khu video) + `.faq-section::before` quầng đỉnh (`at 50% 0%`, tan ~300px xuống FAQ), **cùng đỉnh `rgba(255,114,54,.30)` + width 62% NGAY tại mép** → liền mạch không vạch. Đẩy cao/sâu = đổi bán kính dọc, GIỮ đỉnh+width khớp 2 bên.

## Decisions Log
- ✅ Tokens/hex: lấy từ `packages/ui/tokens/colors.css` (xem mục A). Font header lớn = Inter 500.
- ✅ CSS: tokens + omni-kit + bespoke `<style>`. ✅ learn+news gộp vào sbb (bỏ subdomain).
- ✅ Card chuẩn = glass hero (mục B). ✅ Seam = gương đối xứng (mục D).
- ⏳ Trang nội dung: cần soi Omni & tinh chỉnh từng trang. ⏳ Trang con learn/news chưa dựng.
- ✅ FAQ (2026-06-13): 12 câu, thanh full-width + quầng cam, answers full-width, BỎ lead & CTA (mục H). Ánh sáng MOMENTS lan xuống FAQ (seam-match `.30`).
