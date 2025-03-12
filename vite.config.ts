import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-apps-shop/", // Исправляет пути для GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
