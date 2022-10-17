import { defineConfig } from 'astro/config';
import eslint from 'vite-plugin-eslint';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [eslint()],
  },
});
