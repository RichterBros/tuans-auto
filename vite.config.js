import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all", { prefix: "REACT_APP_" })],
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
