import { defineConfig, buildOptions } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://jackandrewg.github.io/',
  base: './dist',
  // build: {
    // assetsPrefix: '\dist',
    // outDir: '/dist',
  // },
  // include: ['/dist/_astro/*.css'],
  integrations: [mdx(), sitemap(), tailwind(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )],
});