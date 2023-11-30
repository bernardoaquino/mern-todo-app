import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'
import svgr from "vite-plugin-svgr";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), babel({
    babelConfig: {
        babelrc: true,
        configFile: true,
    }
  })],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      atoms: path.resolve(__dirname, "./src/components/Atoms"),
      molecules: path.resolve(__dirname, "./src/components/Molecules"),
      organisms: path.resolve(__dirname, "./src/components/Organisms"),
      containers: path.resolve(__dirname, "./src/containers"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      public: path.resolve(__dirname, "./public"),
      providers: path.resolve(__dirname, "./src/providers"),
      types: path.resolve(__dirname, "./src/types"),
      localUtils: path.resolve(__dirname, "./src/utils")
    }
  }
})
