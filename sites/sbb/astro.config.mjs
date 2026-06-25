import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sbb.edu.vn',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

// deploy: sbb.edu.vn production
// production deploy v2
