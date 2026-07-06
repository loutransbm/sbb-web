import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sbb.edu.vn',
  output: 'static',
  // Song ngữ: tiếng Việt mặc định (giữ URL gốc `/…`), tiếng Anh có tiền tố `/en/…`.
  // prefixDefaultLocale:false -> bản VI KHÔNG đổi URL, chỉ EN mới thêm /en.
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    assets: '_assets'
  }
});

// deploy: sbb.edu.vn production
// production deploy v2
