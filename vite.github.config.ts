import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/valuefinder-site/",
  plugins: [react()],
  build: {
    outDir: "github-pages",
    emptyOutDir: true,
  },
});
