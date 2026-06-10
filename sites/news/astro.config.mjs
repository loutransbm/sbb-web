import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://news.sbb.vn',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
