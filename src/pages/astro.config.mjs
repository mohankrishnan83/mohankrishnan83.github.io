import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mohankrishnan83-github-io.vercel.app',

  integrations: [
    tailwind(),
    sitemap()
  ]
});