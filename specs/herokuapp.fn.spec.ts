import { chromium, type Browser, type Page } from 'playwright'
import { createHomePage } from '../src/pages-fn/HomePage.js'
import { createLoginPage } from '../src/pages-fn/LoginPage.js'
import { createSecurePage } from '../src/pages-fn/SecurePage.js'

let browser: Browser
let page: Page

beforeAll(async () => {
  browser = await chromium.launch({ headless: true })
})

afterAll(async () => {
  await browser.close()
})

beforeEach(async () => {
  page = await browser.newPage()
})

afterEach(async () => {
  await page.close()
})

test('function-POM: успешный логин -> Secure Area', async () => {
  const home = createHomePage(page)
  await home.open()
  await home.openLink('Form Authentication')

  const login = createLoginPage(page)
  await login.login('tomsmith', 'SuperSecretPassword!')

  const secure = createSecurePage(page)
  expect(await secure.titleText()).toContain('Secure Area')
})
