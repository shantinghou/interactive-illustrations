/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // ← this is the key line
    globals: true,
    setupFiles: ['./vitest.setup.ts'], // optional if you want to polyfill more
  },
});
