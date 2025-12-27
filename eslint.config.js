import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.ts"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {},
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
