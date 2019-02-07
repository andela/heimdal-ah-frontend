/* eslint-disable no-undef */
describe('Landing Page', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page', () => {
    cy.url().should('include', '/heimdal-frontend.herokuapp.com');
  });
});
