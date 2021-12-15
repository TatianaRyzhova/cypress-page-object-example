const NAME_INPUT = '#name';
const EMAIL_INPUT = '#email';
const MESSAGE_INPUT = '#message';
const SUBMIT_BUTTON = '#submitButton';
const LOADER = '#loader';

export class Form {
  visit() {
    cy.log('Visiting main page');
    cy.visit('/');
    return this;
  }

  fillName(name) {
    cy.log('Filling name');
    cy.get(NAME_INPUT).clear().type(name);
    return this;
  }

  fillEmail(email) {
    cy.log('Filling email');
    cy.get(EMAIL_INPUT).clear().type(email);
    return this;
  }

  fillMessage(message) {
    cy.log('Filling message');
    cy.get(MESSAGE_INPUT).clear().type(message);
    return this;
  }

  fillTheForm(data) {
    this.fillName(data.name);
    this.fillEmail(data.email);
    this.fillMessage(data.message);
  }

  submitTheForm() {
    cy.log('Submitting form')
    cy.get(SUBMIT_BUTTON).click();
  }

  get nameField() {
    return cy.get(NAME_INPUT);
  }

  get emailField() {
    return cy.get(EMAIL_INPUT);
  }

  get messageField() {
    return cy.get(MESSAGE_INPUT);
  }

  get loader() {
    return cy.get(LOADER);
  }
}

export const onForm = new Form();