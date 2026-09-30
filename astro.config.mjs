import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aurantium-47.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
