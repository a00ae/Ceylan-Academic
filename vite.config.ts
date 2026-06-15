import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/Ceylan-Academic/",
  plugins: [
    react(),
    tsconfigPaths(), 
    svgr({
      include: "**/*.svg?react",
    }),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: { port: 3000 },
});