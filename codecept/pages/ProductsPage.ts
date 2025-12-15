export class ProductsPage {
  seePage(I: CodeceptJS.I) {
    I.see('All Products')
  }

  search(I: CodeceptJS.I, text: string) {
    I.fillField('#search_product', text)
    I.click('#submit_search')
  }

  seeSearchedProducts(I: CodeceptJS.I) {
    I.see('Searched Products')
  }

  openFirstProduct(I: CodeceptJS.I) {
    I.click('View Product', locate('.product-overlay').first())
  }

  seeProductDetails(I: CodeceptJS.I) {
    I.seeElement('.product-information')
  }
}
