/* eslint-disable no-undef */
describe('List all articles', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, navigate to all stories and click it', () => {
    cy.contains('All Stories').click();
    cy.url().should('include', '/all-stories');
  });
});
