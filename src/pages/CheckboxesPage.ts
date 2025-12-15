import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class CheckboxesPage extends BasePage {
  checkbox1 = this.page.locator('#checkboxes input').nth(0)
  checkbox2 = this.page.locator('#checkboxes input').nth(1)

  constructor(page: Page) {
    super(page)
  }

  async setCheckbox(locator: any, value: boolean) {
    if (value) await locator.check()
    else await locator.uncheck()
  }

  async isChecked(locator: any) {
    return locator.isChecked()
  }
}
