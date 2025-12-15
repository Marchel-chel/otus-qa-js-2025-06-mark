/// <reference path="../codecept-globals.d.ts" />

import { HomePage } from '../pages/HomePage'
import { ProductsPage } from '../pages/ProductsPage'

Feature('Products')

Scenario('Products page opens', ({ I }) => {
  const home = new HomePage()
  const products = new ProductsPage()

  home.open(I)
  home.goToProducts(I)
  products.seePage(I)
})

Scenario('Search products works', ({ I }) => {
  const home = new HomePage()
  const products = new ProductsPage()

  home.open(I)
  home.goToProducts(I)
  products.search(I, 'Dress')
  products.seeSearchedProducts(I)
})
