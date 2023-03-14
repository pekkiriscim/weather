import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: "/src/index.html",
      },
    },
  },
  server: {
    open: "/src/index.html",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/img",
          dest: "src/",
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
