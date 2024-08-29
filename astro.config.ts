import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import vercelStatic from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind(), compress()],
});
