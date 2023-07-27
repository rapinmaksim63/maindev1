import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import http from "https";
// https://vitejs.dev/config/
export default defineConfig({
  server: { 
    proxy: {
      "/stubs": {
        "target": "https://www.smshub.org",
        changeOrigin: true,
        secure: false,
        agent: new http.Agent(),
        "headers": {
          "origin": "*"
        }
        //,"withCredentials": true
      }
    },
  },

  plugins: [react()],
});
