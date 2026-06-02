import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import svgr from "vite-plugin-svgr"; // 1. استيراد الإضافة

// https://vite.dev/config/
export default defineConfig({
  base: "/Ceylan-Academic/",
  plugins: [
    react(),
    svgr({
      // هذا الخيار يضمن معاملة ملفات السيرفر الملحقة بـ ?react كمكونات ريأكت
      include: "**/*.svg?react",
    }),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: { port: 3000 },
});
