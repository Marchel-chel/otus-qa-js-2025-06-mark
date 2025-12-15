import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class AddRemovePage extends BasePage {
  addBtn = this.page.locator('button:has-text("Add Element")')
  deleteBtns = this.page.locator('button:has-text("Delete")')

  constructor(page: Page) {
    super(page)
  }

  async addElements(n: number) {
    for (let i = 0; i < n; i++) await this.addBtn.click()
  }

  async countDeleteButtons() {
    return this.deleteBtns.count()
  }

  async deleteFirst() {
    await this.deleteBtns.first().click()
  }
}
