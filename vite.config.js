import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react()],
  define: {
    __GOOGLE_MAPS_API_KEY__: `"${process.env.GOOGLE_MAPS_API_KEY}"`, 
  },
});
