import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/react-apps-shop/", // <-- добавь это
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
