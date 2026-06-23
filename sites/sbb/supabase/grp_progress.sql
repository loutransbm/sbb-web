-- ============================================================================
-- Bảng tiến độ học GRP + Row-Level Security.
-- Chạy: Supabase Dashboard > SQL Editor > New query > dán toàn bộ > Run.
-- An toàn chạy lại nhiều lần (idempotent).
-- ============================================================================

create table if not exists public.grp_progress (
  user_id   uuid        not null references auth.users(id) on delete cascade,
  lesson_id text        not null,                 -- vd "l1-1-1"
  passed_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table public.grp_progress enable row level security;

-- Mỗi học viên chỉ ĐỌC/GHI tiến độ của CHÍNH MÌNH.
drop policy if exists "grp read own"   on public.grp_progress;
drop policy if exists "grp insert own" on public.grp_progress;
drop policy if exists "grp update own" on public.grp_progress;
drop policy if exists "grp delete own" on public.grp_progress;

create policy "grp read own"   on public.grp_progress for select using (auth.uid() = user_id);
create policy "grp insert own" on public.grp_progress for insert with check (auth.uid() = user_id);
create policy "grp update own" on public.grp_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "grp delete own" on public.grp_progress for delete using (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- (Tùy chọn) "Ai học đến đâu" — bảng tổng hợp cho admin.
-- Xem trong Supabase > Table Editor (service role bỏ qua RLS), hoặc query ở SQL Editor.
-- Email học viên nằm ở Authentication > Users (khớp theo user_id).
-- ----------------------------------------------------------------------------
create or replace view public.grp_progress_summary as
  select user_id,
         count(*)        as bai_da_dat,
         max(passed_at)  as lan_cuoi
  from public.grp_progress
  group by user_id;
