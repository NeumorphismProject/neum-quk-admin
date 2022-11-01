import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*'
    ],
    alias: {
      '~': r('./'),
      '@': r('./src/')
    },
    reporters: ['verbose'],
    coverage: {
      provider: 'c8',
      all: true,
      reporter: ['clover', 'cobertura', 'lcov', 'text'],
      include: ['src']
    },
    watch: false
  }
});
