import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginJest from 'eslint-plugin-jest'

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.jest } },
    plugins: { jest: pluginJest },
    settings: { jest: {} }
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended
]
