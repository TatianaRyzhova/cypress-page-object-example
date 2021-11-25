const NAME = '#name';
const EMAIL = '#email';
const MESSAGE = '#message';
const SUBMIT_BUTTON = '#submitButton';
const LOADER = '#loader';

export class Form {

  getNameField() {
    return NAME;
  }

  getEmailField() {
    return EMAIL;
  }

  getMessageField() {
    return MESSAGE;
  }

  getLoader() {
    return LOADER;
  }

  fillTheForm(name, email, message) {
    cy.get(NAME).clear().type(name);
    cy.get(EMAIL).clear().type(email);
    cy.get(MESSAGE).clear().type(message);
  }

  submitTheForm() {
    cy.get(SUBMIT_BUTTON).click();
  }

}

export const onForm = new Form();