export class ContactUsPage {
  seePage(I: CodeceptJS.I) {
    I.see('GET IN TOUCH')
  }

  fillForm(I: CodeceptJS.I, name: string, email: string, subject: string, message: string) {
    I.fillField('input[data-qa="name"]', name)
    I.fillField('input[data-qa="email"]', email)
    I.fillField('input[data-qa="subject"]', subject)
    I.fillField('textarea[data-qa="message"]', message)
  }
}
