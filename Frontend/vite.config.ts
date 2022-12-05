import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    // 절대경로 설정
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
