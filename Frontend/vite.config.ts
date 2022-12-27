import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": "http://35.194.109.0",
    },
  },
  resolve: {
    // 절대경로 설정
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
