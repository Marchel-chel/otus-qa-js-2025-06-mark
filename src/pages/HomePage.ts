import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class HomePage extends BasePage {
  readonly url = 'https://the-internet.herokuapp.com/'

  constructor(page: Page) {
    super(page)
  }

  async open() {
    await this.page.goto(this.url)
  }

  async openLink(name: string) {
    await this.page.click(`a:has-text("${name}")`)
  }
}
