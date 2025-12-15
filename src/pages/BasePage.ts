import type { Page } from 'playwright'

export class BasePage {
  constructor(protected page: Page) {}
}
