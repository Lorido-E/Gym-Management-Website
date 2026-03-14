import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // add this if using React
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // this makes @ point to src/
    },
  },
});
