const vue = require("@vitejs/plugin-vue");
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue3-feather-icons",
      fileName: (format) => `vue3-feather-icons.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
