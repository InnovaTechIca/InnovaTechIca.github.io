// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://innovatech-ica.com', // Agrega la URL de tu sitio web aquí
  vite: {
    plugins: [tailwindcss()]
  }
});