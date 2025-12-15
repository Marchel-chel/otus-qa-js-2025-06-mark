import { chromium, type Browser, type Page } from 'playwright'

const URL = 'https://www.saucedemo.com/'
const USER = 'standard_user'
const PASS = 'secret_sauce'

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

test('Login page открывается', async () => {
  await page.goto(URL)

  expect(await page.isVisible('[data-test="username"]')).toBeTruthy()
  expect(await page.isVisible('[data-test="password"]')).toBeTruthy()
})

test('Кнопка Login кликабельна', async () => {
  await page.goto(URL)
  await page.click('[data-test="login-button"]')
})

test('Неверный пароль -> появляется ошибка', async () => {
  await page.goto(URL)
  await page.fill('[data-test="username"]', USER)
  await page.fill('[data-test="password"]', 'wrong')
  await page.click('[data-test="login-button"]')

  expect(await page.isVisible('[data-test="error"]')).toBeTruthy()
})

test('Успешный логин -> URL содержит inventory', async () => {
  await page.goto(URL)
  await page.fill('[data-test="username"]', USER)
  await page.fill('[data-test="password"]', PASS)
  await page.click('[data-test="login-button"]')

  expect(page.url()).toContain('inventory')
})

test('После логина отображается заголовок Products', async () => {
  await page.goto(URL)
  await page.fill('[data-test="username"]', USER)
  await page.fill('[data-test="password"]', PASS)
  await page.click('[data-test="login-button"]')

  expect(await page.textContent('.title')).toContain('Products')
})
