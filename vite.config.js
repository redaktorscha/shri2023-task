import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve:{
      alias:{
        '@': path.resolve(__dirname,)
      },
    },
  plugins: [react()],
  base: "/shri2023-task/",
});