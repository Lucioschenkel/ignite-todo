/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ignite-todo/',
  test: {
    environment: 'jsdom',
    // eslint-disable-next-line no-useless-escape
    include: ['src\/**/*.test.tsx'],
    globals: true,
    css: true,
    setupFiles: ['./src/utils/setupVitest.ts']
  },
});
