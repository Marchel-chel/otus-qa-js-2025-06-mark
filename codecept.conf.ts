import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure'
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

export const config = {
  tests: './codecept/tests/*.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationexercise.com',
      show: true
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'otus-qa-js'
}

export default config
