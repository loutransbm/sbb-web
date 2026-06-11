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
- **CSS:** [FILL IN]
- **Component library:** [FILL IN or none]

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

## Homepage Sections (current build — đã có)
1. Hero — split layout, double-exposure photo, floating stat cards, decorative "SBB" text
2. Mission statement — "MINDSET. CONDUCT. CAPABILITY." + partner logos rows
3. Results section — "RESULTS AREN'T A CLAIM FOR US..." + 3 big stats + headshot

## Homepage Sections (cần build tiếp — chưa confirm đầy đủ)
- Programs section (4 programs)
- Student success stories / case studies
- GRP highlight section
- Office Tour section
- FAQ
- CTA / Application form
- Footer

---

## Decisions Log
*(Cập nhật khi có quyết định mới trong session)*
- [ ] Exact hex values — chưa confirm từ file gốc
- [ ] Font family — chưa fill in
- [ ] CSS approach — chưa fill in
- [ ] Remaining pages beyond homepage — chưa scope
