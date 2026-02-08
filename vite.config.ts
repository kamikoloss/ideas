import { defineConfig } from 'vite';
import { readdirSync } from 'fs';
import { resolve, extname, basename } from 'path';

const inputs = Object.fromEntries(
  readdirSync(__dirname)
    .filter(file => extname(file) === '.html')
    .map(file => [
      basename(file, '.html'),
      resolve(__dirname, file),
    ])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
});
