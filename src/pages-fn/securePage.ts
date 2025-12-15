import type { Page } from 'playwright'

export const createSecurePage = (page: Page) => {
  const title = () => page.locator('h2')
  const logoutBtn = () => page.locator('a.button.secondary.radius')

  return {
    titleText: async () => (await title().textContent()) ?? '',
    logout: async () => logoutBtn().click()
  }
}
