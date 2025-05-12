import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  jsonc: false,
  rules: {
    'no-console': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
  },
})
