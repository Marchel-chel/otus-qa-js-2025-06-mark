/// <reference path="../codecept-globals.d.ts" />

import { HomePage } from '../pages/HomePage'
import { ContactUsPage } from '../pages/ContactUsPage'

Feature('Contact Us')

Scenario('Contact us page opens and form is fillable', ({ I }) => {
  const home = new HomePage()
  const contact = new ContactUsPage()

  home.open(I)
  home.goToContactUs(I)
  contact.seePage(I)

  contact.fillForm(I, 'Marchel', 'marchel@example.com', 'OTUS HW', 'Just testing Contact Us form')
  I.seeInField('input[data-qa="name"]', 'Marchel')
})
