module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: { "legacyDecorators": true },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
