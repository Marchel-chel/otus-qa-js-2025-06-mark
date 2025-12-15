import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class SecurePage extends BasePage {
  title = this.page.locator('h2')
  logoutBtn = this.page.locator('a.button.secondary.radius')

  constructor(page: Page) {
    super(page)
  }

  async logout() {
    await this.logoutBtn.click()
  }
}
