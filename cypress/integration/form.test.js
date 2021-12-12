import {onForm} from "../support/pages/form";

describe('Initial Form Tests', () => {

  beforeEach(() => {
    onForm.visit();
  });

  it('Form fields should be available', () => {
    onForm.nameField.should('not.be.disabled');
    onForm.emailField.should('not.be.disabled');
    onForm.messageField.should('not.be.disabled');
  })

  it('Form has required fields', () => {
    onForm.nameField.should('have.attr', 'required');
    onForm.emailField.should('have.attr', 'required');
    onForm.messageField.should('have.attr', 'required');
  });

  it('Loader is not visible when the form page opened', () => {
    onForm.loader.should('not.exist');
  });

  it('Email field should have correct input type', () => {
    onForm.emailField.should('have.attr', 'type', 'email');
  });
});

describe('Submission Form Tests', () => {

  let testInput;

  before("Prepare test data", () => {
    cy.fixture('input').then(testData => {
      testInput = testData
    });
  })

  beforeEach(() => {
    onForm.visit().fillTheForm(testInput);
  });

  it('Form should allow to fill user data', () => {
    onForm.nameField.should("contain.value", testInput.name);
    onForm.emailField.should("contain.value", testInput.email);
    onForm.messageField.should("contain.value", testInput.message);
  });

  it('Input fields should be disabled when submitted', () => {
    onForm.submitTheForm();
    onForm.nameField.should('be.disabled');
    onForm.emailField.should('be.disabled');
    onForm.messageField.should('be.disabled');
  });

  it('Loader is visible when the form submitted', () => {
    onForm.submitTheForm();
    onForm.loader.should('be.visible');
  });

  it('Loader is not visible after form submitting', () => {
    onForm.submitTheForm();
    cy.wait(5000);
    onForm.loader.should('not.exist');
  });
});