import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change these two values before your first GitHub Pages deployment.
export default defineConfig({
  site: 'https://sunmoonalterant.github.io',
  base: '/Personal-blog',
  integrations: [sitemap()],
});
