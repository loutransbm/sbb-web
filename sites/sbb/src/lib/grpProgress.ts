// Lớp tiến độ học GRP: localStorage là nguồn cho UI; nếu đăng nhập thì đồng bộ Supabase.
// Mọi nơi đang đọc localStorage trực tiếp vẫn chạy bình thường (markDone giữ localStorage cập nhật).
import { getSupabase } from './supabase';

const KEY = 'sbb:grp:done';
const TABLE = 'grp_progress';

const readLocal = (): Set<string> => {
  try { return new Set<string>(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { return new Set<string>(); }
};
const writeLocal = (s: Set<string>) => { try { localStorage.setItem(KEY, JSON.stringify([...s])); } catch {} };

// userId/inited để trên window để dùng chung dù bundler có tách script.
const W = globalThis as unknown as { __sbbUid?: string | null; __sbbInited?: boolean };
const getUid = (): string | null => W.__sbbUid ?? null;
const setUid = (v: string | null) => { W.__sbbUid = v; };

export type AuthUser = { id: string; email: string | null };
type AuthCb = (u: AuthUser | null) => void;
const authCbs = new Set<AuthCb>();
export const onAuthChange = (cb: AuthCb): (() => void) => { authCbs.add(cb); return () => authCbs.delete(cb); };
const emitAuth = (u: AuthUser | null) => authCbs.forEach((cb) => cb(u));

// Đánh dấu 1 bài đã đạt: localStorage ngay (UI), Supabase nền (nếu đã đăng nhập).
export function markDone(id: string): void {
  const s = readLocal(); s.add(id); writeLocal(s);
  const sb = getSupabase(); const uid = getUid();
  if (sb && uid) {
    sb.from(TABLE).upsert({ user_id: uid, lesson_id: id }, { onConflict: 'user_id,lesson_id' }).then(() => {}, () => {});
  }
}

// Xóa nhiều bài (nút Đặt lại): localStorage + Supabase.
export function clearDone(ids: string[]): void {
  if (!ids.length) return;
  const s = readLocal(); ids.forEach((id) => s.delete(id)); writeLocal(s);
  const sb = getSupabase(); const uid = getUid();
  if (sb && uid) {
    sb.from(TABLE).delete().eq('user_id', uid).in('lesson_id', ids).then(() => {}, () => {});
  }
}

export async function signInWithEmail(email: string): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: 'Chưa cấu hình Supabase' };
  const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.href } });
  return { error: error ? error.message : null };
}

export async function signOut(): Promise<void> {
  const sb = getSupabase(); if (!sb) return;
  await sb.auth.signOut();
  setUid(null); emitAuth(null);
}

// Kéo tiến độ server -> hợp nhất (union) với local -> đẩy phần local-only lên server.
// Trả về true nếu localStorage có thay đổi.
async function pullMerge(): Promise<boolean> {
  const sb = getSupabase(); const uid = getUid();
  if (!sb || !uid) return false;
  const local = readLocal();
  const { data, error } = await sb.from(TABLE).select('lesson_id').eq('user_id', uid);
  if (error) return false;
  const server = new Set<string>((data || []).map((r: { lesson_id: string }) => r.lesson_id));
  const merged = new Set<string>([...local, ...server]);
  const localOnly = [...local].filter((id) => !server.has(id));
  if (localOnly.length) {
    await sb.from(TABLE).upsert(localOnly.map((id) => ({ user_id: uid, lesson_id: id })), { onConflict: 'user_id,lesson_id' });
  }
  const changed = merged.size !== local.size;
  if (changed) writeLocal(merged);
  return changed;
}

// Gọi 1 lần khi vào trang Learn (AuthBar lo việc này). onMerged: chạy khi localStorage đổi sau merge.
export async function initProgressSync(onMerged?: () => void): Promise<void> {
  if (W.__sbbInited) return;
  W.__sbbInited = true;
  const sb = getSupabase();
  if (!sb) return;
  const { data } = await sb.auth.getSession();
  setUid(data.session?.user?.id ?? null);
  emitAuth(getUid() ? { id: getUid() as string, email: data.session?.user?.email ?? null } : null);
  if (getUid()) { const changed = await pullMerge(); if (changed && onMerged) onMerged(); }

  sb.auth.onAuthStateChange(async (_evt, session) => {
    const next = session?.user?.id ?? null;
    const was = getUid();
    setUid(next);
    emitAuth(next ? { id: next, email: session?.user?.email ?? null } : null);
    if (next && next !== was) { const changed = await pullMerge(); if (changed && onMerged) onMerged(); }
  });
}
