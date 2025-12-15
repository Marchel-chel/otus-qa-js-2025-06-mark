import type { Page } from 'playwright'
import { BasePage } from './BasePage.js'

export class DropdownPage extends BasePage {
  dropdown = this.page.locator('#dropdown')

  constructor(page: Page) {
    super(page)
  }

  async select(optionValue: string) {
    await this.dropdown.selectOption(optionValue)
  }

  async selectedValue() {
    return this.dropdown.inputValue()
  }
}
