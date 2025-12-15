import type { Page } from 'playwright'

export const createDropdownPage = (page: Page) => {
  const dropdown = () => page.locator('#dropdown')

  return {
    select: async (value: string) => dropdown().selectOption(value),
    selectedValue: async () => dropdown().inputValue()
  }
}
