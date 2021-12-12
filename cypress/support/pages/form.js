const NAME = '#name';
const EMAIL = '#email';
const MESSAGE = '#message';
const SUBMIT_BUTTON = '#submitButton';
const LOADER = '#loader';

export class Form {

  get nameField() {
    return cy.get(NAME);
  }

  get emailField() {
    return cy.get(EMAIL);
  }

  get messageField() {
    return cy.get(MESSAGE);
  }

  get loader() {
    return cy.get(LOADER);
  }

  visit() {
    cy.log('Visiting main page');
    cy.visit('/');
    return this;
  }

  fillTheForm(data) {
    cy.get(NAME).clear().type(data.name);
    cy.get(EMAIL).clear().type(data.email);
    cy.get(MESSAGE).clear().type(data.message);
  }

  submitTheForm() {
    cy.get(SUBMIT_BUTTON).click();
  }
}

export const onForm = new Form();