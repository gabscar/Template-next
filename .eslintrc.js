module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'eslint quotes': ['error', 'double'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'global-require': 'off',
    'import/prefer-default-error': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
