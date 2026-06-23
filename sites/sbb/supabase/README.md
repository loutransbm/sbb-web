# Đồng bộ tiến độ học GRP qua Supabase (hybrid)

Mặc định web chạy bằng **localStorage** (không tài khoản). Khi cấu hình Supabase, học viên có thể
**đăng nhập bằng magic-link** để lưu tiến độ trên server, đồng bộ đa thiết bị, và SBB theo dõi được
"ai học đến đâu". Không cấu hình thì mọi thứ vẫn chạy như cũ (thanh đăng nhập tự ẩn).

## Thiết lập (1 lần)

1. **Tạo project** tại https://supabase.com (free).
2. **Tạo bảng + RLS**: mở **SQL Editor**, dán toàn bộ [`grp_progress.sql`](./grp_progress.sql), bấm **Run**.
3. **Bật đăng nhập email**: **Authentication > Providers > Email** → bật. (Magic-link dùng "Email OTP/Magic Link", không cần mật khẩu.)
4. **Redirect URLs**: **Authentication > URL Configuration** → thêm domain web (vd `http://localhost:4321`
   khi dev, và domain thật khi deploy) vào *Site URL* + *Redirect URLs*.
5. **Lấy key**: **Project Settings > API** → copy **Project URL** và **anon public** key.
6. **Điền vào web**: sao chép `sites/sbb/.env.example` thành `sites/sbb/.env` rồi điền:
   ```
   PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...   (anon public — KHÔNG dùng service_role)
   ```
7. Build/deploy lại (`pnpm build`). Hai biến này nhúng vào client lúc build; bảo vệ thật là RLS ở bước 2.

## Xem "ai học đến đâu"

- **Table Editor > `grp_progress`**: từng dòng (user_id, lesson_id, passed_at).
- **`grp_progress_summary`** (view): mỗi user + số bài đã đạt + lần học cuối.
- Email học viên: **Authentication > Users** (khớp theo `user_id`).

## Lưu ý

- `anon` key vốn để công khai (nhúng client là bình thường). **Đừng** đưa `service_role` key lên web.
- `.env` đã được gitignore — không commit key.
- Đây là dữ liệu cá nhân học viên (email + tiến độ): cân nhắc thông báo/đồng ý theo quy định.
