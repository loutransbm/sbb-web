# BRAND_USAGE.md — Hướng dẫn dùng logo SBB cho website

> File này dành cho cả người code và AI coding assistant. Đọc trước khi đặt logo vào bất kỳ trang nào.

## Quy tắc vàng: chọn logo theo MÀU NỀN, không theo trang

- Nền **sáng** (trắng/kem/xám nhạt) → dùng bản **light** (icon đen + chữ, "BEYOND" cam).
- Nền **tối** (đen/xanh đậm/ảnh tối) → dùng bản **dark** (icon trắng + chữ trắng, "BEYOND" cam).
- In 1 màu / không có màu → dùng bản **mono-black**.

## Bảng tra: file nào dùng ở đâu

| Vị trí trên web | File dùng |
|---|---|
| Header/navbar nền sáng | `brand/sbb-logo-light.svg` |
| Header/navbar nền tối | `brand/sbb-logo-dark.svg` |
| Footer (thường nền tối) | `brand/sbb-logo-dark.svg` |
| Logo thu gọn trên mobile / menu | `brand/sbb-icon-light.svg` (nền sáng) hoặc `brand/sbb-icon-dark.svg` (nền tối) |
| Favicon (tab trình duyệt) | `/favicon.ico` (đã có sẵn ở thư mục gốc) |
| Apple touch icon / PWA | `brand/sbb-icon-256.png` |
| Ảnh share mạng xã hội (OG) | `brand/og-image.png` (1200×630, nền tối) |
| Loading / splash screen | `brand/sbb-icon-dark.svg` hoặc `sbb-icon-light.svg` |

**Ưu tiên dùng file `.svg`** cho mọi chỗ hiển thị logo (nét, nhẹ, không vỡ). File `.png`
chỉ là phương án dự phòng khi môi trường không nhận SVG.

## Màu thương hiệu (dùng làm CSS variables)

```css
:root {
  --sbb-orange: #E05C1A;  /* nhấn: chữ S, chữ "BEYOND" */
  --sbb-black:  #1A1A1A;  /* nền tối, chữ chính */
  --sbb-white:  #FFFFFF;
}
```

## Đặt favicon + OG vào `<head>` (HTML)

```html
<!-- Favicon: SVG cho trình duyệt mới, .ico fallback. Cả hai là tile nền tối,
     đọc rõ trên tab sáng lẫn tối -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png">

<!-- Social share -->
<meta property="og:image" content="https://TÊN-MIỀN-CỦA-BẠN/brand/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```
> Lưu ý: `og:image` phải là **URL tuyệt đối** (có https://...), không dùng đường dẫn tương đối.
> Trong Astro nên dùng `new URL("/brand/og-image.png", Astro.site)` để tự sinh URL tuyệt đối.

## Favicon cho PWA (nếu có file manifest)

```json
{
  "icons": [
    { "src": "/brand/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/brand/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

## Ví dụ chèn logo (React/HTML)

```jsx
{/* Header nền trắng */}
<img src="/brand/sbb-logo-light.svg" alt="Shine Beyond Borders" height={40} />

{/* Footer nền đen */}
<img src="/brand/sbb-logo-dark.svg" alt="Shine Beyond Borders" height={36} />
```

## Vùng an toàn & kích thước tối thiểu

- Chừa khoảng trống quanh logo tối thiểu = chiều cao chữ "S".
- Logo đầy đủ: không hiển thị nhỏ hơn **120px chiều rộng** (chữ sẽ khó đọc) — nhỏ hơn thì dùng bản chỉ-icon.
- Không bóp méo tỉ lệ, không đổi màu, không thêm đổ bóng/viền.

## Ghi chú kỹ thuật (quan trọng)

- File SVG được **vector hóa từ ảnh**, không phải vẽ lại từ font. Phần chữ khi phóng cực
  đại có rung rất nhẹ — ở kích thước web bình thường không thấy. Nếu sau này làm bản in
  khổ lớn, nên gõ lại chữ bằng font gốc.
- Nếu cần đặt logo trên **ảnh nền** (không phải màu phẳng), dùng bản `dark` (chữ trắng)
  và đảm bảo ảnh đủ tối ở vùng đặt logo.
