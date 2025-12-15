import { chromium, type Browser, type Page } from 'playwright'
import { HomePage } from '../src/pages/HomePage.js'
import { LoginPage } from '../src/pages/LoginPage.js'
import { SecurePage } from '../src/pages/SecurePage.js'
import { CheckboxesPage } from '../src/pages/CheckboxesPage.js'
import { DropdownPage } from '../src/pages/DropdownPage.js'
import { AddRemovePage } from '../src/pages/AddRemovePage.js'

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

test('1) Login: неверные креды -> показывается ошибка', async () => {
  const home = new HomePage(page)
  await home.open()
  await home.openLink('Form Authentication')

  const login = new LoginPage(page)
  await login.login('wrong', 'wrong')

  expect(await login.getFlashText()).toContain('Your username is invalid!')
})

test('2) Login: валидные креды -> попадаем в Secure Area', async () => {
  const home = new HomePage(page)
  await home.open()
  await home.openLink('Form Authentication')

  const login = new LoginPage(page)
  await login.login('tomsmith', 'SuperSecretPassword!')

  const secure = new SecurePage(page)
  expect(await secure.title.textContent()).toContain('Secure Area')
})

test('3) Checkboxes: можем выставить состояния чекбоксов', async () => {
  const home = new HomePage(page)
  await home.open()
  await home.openLink('Checkboxes')

  const cb = new CheckboxesPage(page)
  await cb.setCheckbox(cb.checkbox1, true)
  await cb.setCheckbox(cb.checkbox2, false)

  expect(await cb.isChecked(cb.checkbox1)).toBe(true)
  expect(await cb.isChecked(cb.checkbox2)).toBe(false)
})

test('4) Dropdown: выбор Option 2 сохраняется', async () => {
  const home = new HomePage(page)
  await home.open()
  await home.openLink('Dropdown')

  const dd = new DropdownPage(page)
  await dd.select('2')

  expect(await dd.selectedValue()).toBe('2')
})

test('5) Add/Remove Elements: добавляем 3, удаляем 1 -> остаётся 2', async () => {
  const home = new HomePage(page)
  await home.open()
  await home.openLink('Add/Remove Elements')

  const ar = new AddRemovePage(page)
  await ar.addElements(3)
  expect(await ar.countDeleteButtons()).toBe(3)

  await ar.deleteFirst()
  expect(await ar.countDeleteButtons()).toBe(2)
})
