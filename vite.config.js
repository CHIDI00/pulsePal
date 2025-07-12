// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://pulsepal.vercel.app",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//         secure: false,
//         configure: (proxy) => {
//           proxy.on("proxyReq", (proxyReq) => {
//             // Add CORS headers
//             proxyReq.setHeader("Access-Control-Allow-Origin", "*");
//             proxyReq.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//             proxyReq.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//           });
//         },
//       },
//     },
//   },
//   // Add this if you're building for production
//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // default is 5173
    open: true, // automatically open browser
    strictPort: true, // exit if port is in use
  },
  preview: {
    port: 3000, // preview server port
  },
  build: {
    outDir: "dist", // output directory
    emptyOutDir: true, // empty output directory before build
    sourcemap: true, // generate source maps
    rollupOptions: {
      output: {
        manualChunks: {
          // split vendor chunks if needed
          react: ["react", "react-dom"],
          // add other vendor libraries as needed
        },
      },
    },
  },
  resolve: {
    alias: {
      // set up path aliases if needed
      "@": "/src",
      "@components": "/src/components",
      // add more aliases as needed
    },
  },
  css: {
    modules: {
      // configure CSS modules behavior
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        // global SCSS variables/mixins
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
