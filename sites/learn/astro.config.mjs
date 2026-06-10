import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://learn.sbb.vn',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
