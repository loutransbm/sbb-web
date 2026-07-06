/**
 * i18n dùng chung cho toàn site SBB (song ngữ Việt–Anh).
 *
 * Nguyên tắc: tiếng Việt là ngôn ngữ mặc định (URL gốc `/…`), tiếng Anh nằm dưới
 * tiền tố `/en/…`. Bản VI của MỖI TRANG giữ nguyên file cũ (không đụng markup/CSS
 * -> desktop không thể vỡ); bản EN là file sao chép đã dịch đặt trong `src/pages/en/`.
 *
 * `EN_ROUTES` liệt kê những trang ĐÃ có bản tiếng Anh. Trang chưa dịch thì nút EN sẽ
 * fallback về bản tiếng Việt (không 404) — triển khai dần từng trang.
 */

export type Lang = 'vi' | 'en';
export const DEFAULT_LANG: Lang = 'vi';
export const LOCALES: Lang[] = ['vi', 'en'];

/** Chuẩn hoá locale mà Astro trả về (Astro.currentLocale) thành 'vi' | 'en'. */
export function toLang(locale?: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'vi';
}

/**
 * Các route (đường dẫn VI chuẩn, KHÔNG tiền tố) đã có bản tiếng Anh dưới /en/.
 * Thêm dòng vào đây MỖI KHI dựng xong một trang EN mới -> nút chuyển ngữ tự bật.
 */
export const EN_ROUTES = new Set<string>([
  '/',
  '/about',
  '/programs',
  '/programs/global-internship',
  '/programs/career-training',
  '/programs/internship-j1',
  '/programs/j1-trainee',
  '/programs/407',
  '/programs/office-tour',
  '/placements',
  '/apply',
  '/learn',
]);

/** Bỏ dấu `/` cuối (trừ gốc). */
function stripTrailing(path: string): string {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

/** Trả về đường dẫn VI chuẩn cho một pathname bất kỳ (bóc tiền tố /en, /vi). */
export function toViPath(pathname: string): string {
  const p = stripTrailing(pathname || '/');
  if (p === '/en') return '/';
  if (p.startsWith('/en/')) return p.slice(3); // '/en/about' -> '/about'
  if (p === '/vi') return '/';                 // trang chủ VI dời sang /vi ('/' -> redirect sang /en/)
  return p === '' ? '/' : p;
}

/**
 * Dựng URL cho một đường dẫn VI chuẩn theo ngôn ngữ yêu cầu.
 * - EN: thêm tiền tố /en khi trang đã có bản dịch, ngược lại giữ bản VI (fallback).
 * - VI: trang chủ ở /vi (vì '/' redirect sang tiếng Anh); các trang khác giữ ở gốc.
 */
export function localizePath(viPath: string, lang: Lang): string {
  const p = stripTrailing(viPath) || '/';
  if (lang !== 'en') return p === '/' ? '/vi' : p;
  if (!EN_ROUTES.has(p)) return p; // chưa dịch -> ở lại bản tiếng Việt
  return p === '/' ? '/en/' : `/en${p}`;
}

/** Trang hiện tại có bản dịch ở ngôn ngữ kia không (để bật/ẩn hreflang, nút chuyển ngữ). */
export function hasTranslation(viPath: string): boolean {
  return EN_ROUTES.has(stripTrailing(viPath) || '/');
}

/** Nhãn giao diện dùng chung (khung: nav, footer, nút…). */
export const ui = {
  vi: {
    'nav.home': 'Home',
    'nav.about': 'About SBB',
    'nav.programs': 'Programs',
    'nav.news': 'News',
    'nav.learn': 'Learn',
    'nav.placements': 'Placements',
    'nav.contact': 'Liên hệ',
    'lang.toggle': 'EN',
    'lang.toggleTitle': 'View in English',
    'menu.open': 'Mở menu',
    'menu.close': 'Đóng menu',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About SBB',
    'nav.programs': 'Programs',
    'nav.news': 'News',
    'nav.learn': 'Learn',
    'nav.placements': 'Placements',
    'nav.contact': 'Contact',
    'lang.toggle': 'VI',
    'lang.toggleTitle': 'Xem bản tiếng Việt',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
  },
} as const;

export type UIKey = keyof typeof ui['vi'];

/** t('nav.contact') theo ngôn ngữ; thiếu key EN thì rơi về VI. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui.vi[key];
  };
}
