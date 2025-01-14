import { defineConfig } from "vite";

export default defineConfig({
  base: "/desert/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  publicDir: "public",
});
