import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
        svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
      },
    ),
    viteStaticCopy({
      targets: [{
        src: path.resolve(__dirname, "./src/assets/fonts/*"),
        dest: path.resolve(__dirname, "./dist/assets/")
      }]
    })
  ],
  base: '/t-dar/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
