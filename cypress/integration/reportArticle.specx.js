/* eslint-disable no-undef */
describe('Report an article', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, login and navigate to segun article to report it', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.wait(1000);
    cy.get('.active_user_logo').invoke('show').should('be.visible');
    cy.visit('/segun/articles/What-a-wonderful-world-time-to-say-hi-u87dsyths');
    cy.contains('Report Article').click();
    cy.get('form').find('textarea').eq(1).type('spam article');
    cy.contains('Submit Report').click();
    cy.get('.toastr').should('contain', 'Article Reported');
  });
});
