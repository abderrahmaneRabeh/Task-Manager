import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});

/*
  - Any requests starting with /api will be proxied (forwarded) to the 
  backend server running on http://localhost:8000.

  - The changeOrigin: true option adjusts the request's origin header to 
  ensure compatibility with the backend server, 
  avoiding potential issues like CORS restrictions during development.
*/
