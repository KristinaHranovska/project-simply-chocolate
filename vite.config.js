import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globalStylesOptions } from './global.styles';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Змініть абсолютні шляхи на псевдоніми або абсолютні шляхи відносно кореневого каталогу
      '@modules': '/src/modules',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@helpers': '/src/helpers',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
      },
    },
  },
});
