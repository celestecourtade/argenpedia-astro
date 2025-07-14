import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  alias: {
    '@components': path.resolve('./src/components'),
    '@layouts': path.resolve('./src/layouts'),
    '@data': path.resolve('./src/data')
  }
});
