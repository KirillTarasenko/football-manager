module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'import', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-shadow': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-shadow': 1,
        '@typescript-eslint/no-unused-vars': 2,
      },
    },
  ],
  rules: {
    // NO everything
    'no-console': 0,
    'no-sequences': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-new-wrappers': 2,
    'no-with': 2,
    'no-var': 2,

    // React
    'react/no-access-state-in-setstate': 2,
    'react/no-array-index-key': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/jsx-no-bind': 1,
    'react/prop-types': 2,
    'react/require-default-props': 1,
    'react/jsx-boolean-value': 2,
    'react-native/no-raw-text': 1,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-native/sort-styles': ['error', 'asc', {ignoreStyleProperties: true}],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'import/imports-first': ['error', 'absolute-first'],
  },
};
