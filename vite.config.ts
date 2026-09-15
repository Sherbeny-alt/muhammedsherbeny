import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // زودنا هنا إعداد الـ base عشان يظبط مسارات الملفات للـ static build على Vercel
  vite: {
    base: './',
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});