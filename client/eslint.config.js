import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import airbnbConfig from 'eslint-config-airbnb-typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  // Ignorar carpeta de build
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    // Extender configuraciones recomendadas + Airbnb + Prettier
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      airbnbConfig,
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',
      // Reglas custom que podés ajustar según tu proyecto:
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'import/prefer-default-export': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
