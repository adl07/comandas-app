import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  // Config base de JS
  js.configs.recommended,

  // Config base de TypeScript
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Prettier
      "prettier/prettier": "error",
      
      // React
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
      "react/react-in-jsx-scope": "off", // no hace falta en React 17+
      "react/prop-types": "off", // TypeScript maneja esto
      "react/require-default-props": "off",
      
      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Import
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off", // TypeScript maneja esto
      "import/extensions": "off",
      
      // General
      "no-console": "warn",
      "no-debugger": "error",
    },
    settings: { 
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
      },
    },
  },
  {
    ignores: ["dist", "node_modules", "build", "coverage"],
  },
];
