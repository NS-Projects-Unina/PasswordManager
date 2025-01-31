import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Run frontend on port 5000
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend is running on port 5000
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
