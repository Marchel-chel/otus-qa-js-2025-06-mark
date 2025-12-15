import type { Page } from 'playwright'

export const createLoginPage = (page: Page) => {
  const username = () => page.locator('#username')
  const password = () => page.locator('#password')
  const loginBtn = () => page.locator('button[type="submit"]')
  const flash = () => page.locator('#flash')

  return {
    login: async (user: string, pass: string) => {
      await username().fill(user)
      await password().fill(pass)
      await loginBtn().click()
    },
    flashText: async () => (await flash().textContent()) ?? ''
  }
}
