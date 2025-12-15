/// <reference path="../codecept-globals.d.ts" />

import { HomePage } from '../pages/HomePage'
import { SignupLoginPage } from '../pages/SignupLoginPage'

Feature('Auth')

Scenario('Signup/Login page opens', ({ I }) => {
  const home = new HomePage()
  const auth = new SignupLoginPage()

  home.open(I)
  home.goToSignupLogin(I)
  auth.seePage(I)
})

Scenario('Login shows error for invalid credentials', ({ I }) => {
  const home = new HomePage()
  const auth = new SignupLoginPage()

  home.open(I)
  home.goToSignupLogin(I)
  auth.login(I, 'fake_email_otus@example.com', 'wrong_password')
  auth.seeLoginError(I)
})
