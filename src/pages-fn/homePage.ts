import type { Page } from 'playwright'

export const createHomePage = (page: Page) => {
  const url = 'https://the-internet.herokuapp.com/'

  return {
    open: async () => page.goto(url),
    openLink: async (name: string) => page.click(`a:has-text("${name}")`)
  }
}
