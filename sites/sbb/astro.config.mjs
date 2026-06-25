import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sbb.edu.vn',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
