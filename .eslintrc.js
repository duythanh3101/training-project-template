module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-typescript-prettier'],
  plugins: ['prettier'],
  globals: {
    $: true,
    document: true,
    window: true,
    fetch: true,
  },
  ignorePatterns: ['/dist/js/**.js', 'webpack.config.js'],
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "no-alert": "off",
    "no-array-constructor": "off",
    "no-bitwise": "off",
    "no-caller": "off",
    "no-case-declarations": "error",
    "no-catch-shadow": "off",
    "no-class-assign": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "off",
    "no-console": "off",
    'func-names': 'off',
    "no-unused-vars": 0,
  },
};
