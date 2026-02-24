const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const playwright = require("eslint-plugin-playwright");

module.exports = defineConfig([
  {
    ignores: [
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "dist/**",
      "build/**"
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["tests/**/*.ts"],
    plugins: { playwright },
    rules: {
      ...playwright.configs.recommended.rules,
      semi: "error",
      "prefer-const": "error",
    },
  },
]);