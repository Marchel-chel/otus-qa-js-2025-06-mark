import type { Page, Locator } from 'playwright'

export const createCheckboxesPage = (page: Page) => {
  const checkbox1 = () => page.locator('#checkboxes input').nth(0)
  const checkbox2 = () => page.locator('#checkboxes input').nth(1)

  const set = async (loc: Locator, value: boolean) => {
    if (value) await loc.check()
    else await loc.uncheck()
  }

  return {
    checkbox1,
    checkbox2,
    set,
    isChecked: async (loc: Locator) => loc.isChecked()
  }
}
