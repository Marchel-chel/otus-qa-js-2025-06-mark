import type { Page } from 'playwright'

export const createAddRemovePage = (page: Page) => {
  const addBtn = () => page.locator('button:has-text("Add Element")')
  const deleteBtns = () => page.locator('button:has-text("Delete")')

  return {
    addElements: async (n: number) => {
      for (let i = 0; i < n; i++) await addBtn().click()
    },
    countDeleteButtons: async () => deleteBtns().count(),
    deleteFirst: async () => deleteBtns().first().click()
  }
}
