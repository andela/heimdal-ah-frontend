/* eslint-disable no-undef */
describe('Reset Password', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page and navigate to password reset link', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.p-2').eq(1).should('be.visible');
    cy.get('.p-2').eq(1).click();
    cy.url().should('include', '/reset-password');
    cy.get('.input-reset-password').type('azupatrick0@gmail.com');
    // cy.get('.login2')
    // .click()
  });
});
