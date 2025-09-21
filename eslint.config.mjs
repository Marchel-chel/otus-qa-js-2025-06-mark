import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      jest // 👈 здесь объект, а не массив
    },
    rules: {
      ...jest.configs.recommended.rules // 👈 добавляем правила из recommended
    }
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended
]
