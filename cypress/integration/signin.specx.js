/* eslint-disable no-undef */
describe('User Authentication - Sign in', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page and signs in a user', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.url().should('include', '/heimdal-frontend.herokuapp.com/');
    cy.get('.active_user_logo').invoke('show').should('be.visible');
  });

  it('.should() - visit heimdal home page and signs in a user via facebook or twitter or google', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    const filters = [
      {
        params: '.btn-facebook',
        url: 'https://heimdal-ah-staging.herokuapp.com/api/v1/auth/facebook',
      },
      {
        params: '.btn-google',
        url: 'https://heimdal-ah-staging.herokuapp.com/api/v1/auth/google',
      },
      {
        params: '.btn-twitter',
        url: 'https://heimdal-ah-staging.herokuapp.com/api/v1/auth_twitter/twitter',
      },
    ];
    cy.wrap(filters).each((filter) => {
      cy.get('.heimdal-form').should('be.visible');
      cy.get(filter.params).should('be.visible').should('have.prop', 'href').and('equal', filter.url);
    });
  });
});
