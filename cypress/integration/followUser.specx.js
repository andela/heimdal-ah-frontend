/* eslint-disable no-undef */
describe('Follow/Unfollow a user', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, login, and navigate to profile and click the follow/unfollow button', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.wait(1000);
    cy.get('.active_user_logo').invoke('show').should('be.visible');
    cy.visit('/wale');
    cy.get('.btn-follow').should('be.visible');
    cy.get('.btn-follow').click();
  });
});
