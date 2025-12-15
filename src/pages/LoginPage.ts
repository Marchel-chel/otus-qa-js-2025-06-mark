import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class LoginPage extends BasePage {
  username = this.page.locator('#username')
  password = this.page.locator('#password')
  loginBtn = this.page.locator('button[type="submit"]')
  flash = this.page.locator('#flash')

  constructor(page: Page) {
    super(page)
  }

  async login(user: string, pass: string) {
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginBtn.click()
  }

  async getFlashText() {
    return (await this.flash.textContent()) ?? ''
  }
}
