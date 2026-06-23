import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Client Supabase cho trình duyệt. Trả về null nếu CHƯA cấu hình env
// -> toàn bộ tính năng đồng bộ tắt êm, web vẫn chạy bằng localStorage.
let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
  cached = url && key
    ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
    : null;
  return cached;
}

export const isSupabaseConfigured = (): boolean => !!getSupabase();
