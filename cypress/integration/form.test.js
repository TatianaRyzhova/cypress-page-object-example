import {onForm} from "../support/pages/form";

describe('Form Tests', () => {

  beforeEach(() => {
    cy.openFormPage();
  });

  it('Form has required fields', () => {
    cy.get(onForm.getNameField()).should('have.attr', 'required');
    cy.get(onForm.getEmailField()).should('have.attr', 'required');
    cy.get(onForm.getMessageField()).should('have.attr', 'required');
  });

  it('Input fields should be disabled when submitted', () => {
    onForm.fillTheForm('Tatiana', 'tatiana@gmail.com', 'Awesome message');
    onForm.submitTheForm();
    cy.get(onForm.getNameField()).should('be.disabled');
    cy.get(onForm.getEmailField()).should('be.disabled');
    cy.get(onForm.getMessageField()).should('be.disabled');
  });

  it('Loader is not visible when the form page opened', () => {
    cy.get(onForm.getLoader()).should('not.exist');
  });

  it('Loader is visible when the form submitted', () => {
    onForm.fillTheForm('Tatiana', 'tatiana@gmail.com', 'Awesome message');
    onForm.submitTheForm();
    cy.get(onForm.getLoader()).should('be.visible');
  });

  it('Loader is not visible after form submitting', () => {
    onForm.fillTheForm('Tatiana', 'tatiana@gmail.com', 'Awesome message');
    onForm.submitTheForm();
    cy.wait(5000);
    cy.get(onForm.getLoader()).should('not.exist');
  });

  it('Email field should have correct input type', () => {
    cy.get(onForm.getEmailField()).should('have.attr', 'type', 'email');
  });

})