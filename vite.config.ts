import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "clientsApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ClientsApp": "./src/App.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
});
