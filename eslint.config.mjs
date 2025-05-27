import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort'; // 👈 importa o plugin como objeto

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ['.next', 'node_modules', 'dist', 'coverage'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort, // 👈 registrado corretamente
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      'import/first': 'off',
      'import/newline-after-import': 'off',
    },
  },
];
