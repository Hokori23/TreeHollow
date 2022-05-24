import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  server: {
    port: 8000,
  },
  assetsInclude: ['**/*.ttf'],
});
