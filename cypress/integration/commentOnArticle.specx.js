/* eslint-disable no-undef */
describe('Comment on article', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, login and navigate to wale article to comment on it', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.wait(1000);
    cy.get('.active_user_logo').invoke('show').should('be.visible');
    cy.visit('/wale/articles/this-is-a-post-title-l78hgybf');
    cy.get('form').find('textarea').eq(0).type('New article comment');
    cy.contains('Add Comment').click();
    // cy.get('.toastr');
    // .should('contain', 'Article Commented');
  });
});
