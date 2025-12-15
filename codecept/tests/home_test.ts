/// <reference path="../codecept-globals.d.ts" />

import { HomePage } from '../pages/HomePage'

Feature('Home')

Scenario('Home page opens', ({ I }) => {
  const home = new HomePage()
  home.open(I)
  home.seeHome(I)
})
