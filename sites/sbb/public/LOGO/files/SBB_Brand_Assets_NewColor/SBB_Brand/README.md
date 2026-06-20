# SBB — Shine Beyond Borders | Bộ Brand Assets đầy đủ (bộ màu mới)

## Bảng màu

| Màu | HEX | Vai trò |
|-----|-----|---------|
| Cam | `#ff6824` | nhấn / nền nổi bật |
| Xanh dương | `#014aac` | màu cấu trúc chính |
| Trắng | `#fefefe` | trên nền tối / nền cam |

## Cấu trúc thư mục

```
SBB_Brand/
├── 01_Logo/           Logo đầy đủ (icon + chữ)
│   ├── SVG/             5 bản: light, orange, blue, dark, mono-blue
│   └── PNG/             bản 2000px + 800px
├── 02_Icon/           Chỉ icon (không chữ)
│   ├── SVG/
│   └── PNG/             1024px
├── 03_Avatar/         Avatar mạng xã hội (đã căn an toàn khung tròn)
│   ├── avatar-orange / blue / white (.svg)
│   └── mỗi nền: 400 / 800 / 1080px PNG
├── 04_Favicon/        favicon.svg, favicon.ico, các size PNG, apple-touch-icon
├── 05_Social_Share/   Ảnh share link (OG) 1200×630 — bản cam & xanh
├── CONTACT_SHEET.png  Bảng xem nhanh tất cả
└── README.md
```

## Dùng bản nào ở đâu

**Logo (01_Logo)**
- Nền trắng/sáng → `sbb-logo-light.svg` (B xanh, S cam)
- Nền cam → `sbb-logo-orange.svg` (B trắng, S xanh)
- Nền xanh → `sbb-logo-blue.svg`
- Nền tối/ảnh tối → `sbb-logo-dark.svg` (nền trong suốt)
- In 1 màu → `sbb-logo-mono-blue.svg`

**Avatar (03_Avatar)** — dùng cho ảnh đại diện Facebook, Instagram, TikTok, YouTube, LinkedIn, Threads
- Mặc định khuyên dùng bản **cam** (`avatar-orange`) — nổi bật, khớp nhận diện mới.
- Đã chừa lề an toàn nên khi nền tảng cắt thành hình tròn vẫn không bị cụt.
- Chọn size: 400px cho hầu hết nền tảng, 800px cho YouTube, 1080px nếu cần nét cao.

**Favicon (04_Favicon)** — biểu tượng tab trình duyệt (xem mục web bên dưới).

**Ảnh share (05_Social_Share)** — ảnh hiện ra khi dán link web lên mạng xã hội. Dùng `og-image-orange_1200x630.png`.

## Cho website (Astro)

Nếu cập nhật web, dùng gói riêng `SBB_web_assets_NEWCOLOR.zip` (đã đặt tên file đúng
chuẩn để thay thẳng vào `public/`). Bộ Brand đầy đủ này thiên về dùng ngoài web
(mạng xã hội, in ấn, hồ sơ).

> Nhắc lại: sau khi đổi màu, nhớ cập nhật biến màu trong `Layout.astro`:
> `--sbb-orange: #ff6824; --sbb-blue: #014aac; --sbb-white: #fefefe;`
> và thay mọi chỗ dùng `--sbb-black` / `#1A1A1A` thành `--sbb-blue`.

## Quy tắc dùng

- Không bóp méo tỉ lệ, không đổi màu ngoài bảng trên, không thêm đổ bóng/viền.
- Logo đầy đủ không hiển thị nhỏ hơn ~120px chiều rộng — nhỏ hơn thì dùng bản chỉ-icon.
- Chừa khoảng trống quanh logo tối thiểu bằng chiều cao chữ "S".

## Ghi chú kỹ thuật

- File SVG được **vector hóa từ ảnh**, không phải vẽ lại từ font. Icon nét; phần chữ
  khi phóng cực đại có rung rất nhẹ — kích thước thường không thấy. Bản in khổ lớn
  (biển hiệu, backdrop) nên gõ lại chữ bằng font gốc cho tuyệt đối sắc.
- Favicon ở 16px hơi nhỏ (giới hạn chung của favicon nhiều chi tiết); màn retina
  hiển thị 32px nên thực tế nhìn rõ.
