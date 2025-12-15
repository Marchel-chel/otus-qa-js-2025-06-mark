/// <reference path="../codecept-globals.d.ts" />

import { HomePage } from '../pages/HomePage'

Feature('Navigation')

Scenario('Header navigation links are clickable', ({ I }) => {
  const home = new HomePage()
  home.open(I)

  I.see('Products')
  I.see('Signup / Login')
  I.see('Contact us')
})
