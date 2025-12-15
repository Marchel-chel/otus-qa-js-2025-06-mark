import type { Page } from 'playwright'

export const createBasePage = (page: Page) => ({ page })
export type BasePage = ReturnType<typeof createBasePage>
