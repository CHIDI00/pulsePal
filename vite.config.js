import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pulsepal.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            // Add CORS headers
            proxyReq.setHeader("Access-Control-Allow-Origin", "*");
            proxyReq.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            proxyReq.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
          });
        },
      },
    },
  },
  // Add this if you're building for production
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
