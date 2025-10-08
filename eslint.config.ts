import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import jestPlugin from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Базовые правила для всего проекта
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,cts}'],
    ignores: ['node_modules', 'dist', 'reports', 'allure-results'],

    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin
    },

    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  },

  // Оверрайд для тестов (jest)
  {
    files: ['**/*.{test,spec}.{js,ts,tsx}'],

    languageOptions: {
      // Глобалы Jest, чтобы не ругался на test/expect/describe
      globals: {
        ...globals.jest
      },
      parser: tseslint.parser
    },

    plugins: {
      jest: jestPlugin
    },

    // Подключаем рекомендуемые правила Jest для flat-config:
    // (плагин экспортирует набор правил — применим их явно)
    rules: {
      ...(jestPlugin.configs?.recommended?.rules ?? {}),
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error'
    }
  }
])
