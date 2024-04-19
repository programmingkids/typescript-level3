module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // allow default import
    'import/prefer-default-export': 'off',
    // allow console
    'no-console': 'off',
    // single qoute for string
    '@typescript-eslint/quotes': ['error', 'single'],
    // allow ++
    'no-plusplus': 'off',
  },
};
