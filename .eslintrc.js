module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 0,
    'jsx-quotes': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'prefer-const': 0,
    'no-useless-return': 0,
    'react/no-unused-state': 0,
  },
};
