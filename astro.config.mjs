// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.dustinmartinka.com',
  integrations: [mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Serif',
      cssVariable: '--font-serif',
      fallbacks: ['Georgia', 'serif'],
      weights: [400, 600, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Work Sans',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      weights: [400, 500, 600, 800, 900],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});