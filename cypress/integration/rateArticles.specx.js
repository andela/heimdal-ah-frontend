/* eslint-disable no-undef */
describe('Rate an article', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, login and navigate to segun article to rate it', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.get('.active_user_logo').invoke('show').should('be.visible');
    cy.visit('/segun/articles/What-a-wonderful-world-time-to-say-hi-u87dsyths');
    cy.get('.__button').should('be.visible');
    cy.get('.__button').eq(0).click();
    cy.get('.toastr').should('contain', 'Article Rated');
  });
});
