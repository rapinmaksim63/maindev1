import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/stubs": {
        "target": "https://smshub.org",
        changeOrigin: true,
        secure: false,
        "headers": {
          "origin": null
        },
        "withCredentials": true
      }
    },
  },

  plugins: [react()],
});
