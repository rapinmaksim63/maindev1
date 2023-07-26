import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
    proxy: {
      "/stubs": "https://smshub.org",
    },
  },

  plugins: [react()],
});
