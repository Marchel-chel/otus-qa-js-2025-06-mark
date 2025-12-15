export class HomePage {
  open(I: CodeceptJS.I) {
    I.amOnPage('/')
  }

  seeHome(I: CodeceptJS.I) {
    I.seeElement('header')
    I.see('Home')
  }

  goToSignupLogin(I: CodeceptJS.I) {
    I.click('Signup / Login')
  }

  goToProducts(I: CodeceptJS.I) {
    I.click('Products')
  }

  goToContactUs(I: CodeceptJS.I) {
    I.click('Contact us')
  }
}
