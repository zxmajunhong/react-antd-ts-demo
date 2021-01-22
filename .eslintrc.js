module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'alloy', 'alloy/react', 'alloy/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  globals: {
    // 定义全局变量
  },
  rules: {
    // 自定义的一些规则
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts'],
      },
    },
    'import/extensions': [
      '.ts',
      '.tsx',
    ],
  },
};
