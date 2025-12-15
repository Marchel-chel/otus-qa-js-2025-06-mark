export class SignupLoginPage {
  seePage(I: CodeceptJS.I) {
    I.see('Login to your account')
    I.see('New User Signup!')
  }

  login(I: CodeceptJS.I, email: string, password: string) {
    I.fillField('input[data-qa="login-email"]', email)
    I.fillField('input[data-qa="login-password"]', password)
    I.click('button[data-qa="login-button"]')
  }

  seeLoginError(I: CodeceptJS.I) {
    I.see('Your email or password is incorrect!')
  }
}
