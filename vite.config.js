import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";

export default defineConfig({
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
