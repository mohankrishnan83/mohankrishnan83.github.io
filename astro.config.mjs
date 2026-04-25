// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mohankrishnan83-github-io.vercel.app',

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});