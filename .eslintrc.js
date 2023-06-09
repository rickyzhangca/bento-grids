module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:primer-react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'filenames/match-regex': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
