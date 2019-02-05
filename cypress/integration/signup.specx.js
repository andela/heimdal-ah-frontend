/* eslint-disable no-undef */
const randomEmail = require('random-email');

describe('User Authentication - Sign up', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page and signs a user up', () => {
    cy.get('.header-button-group button').eq(0).should('be.visible');
    cy.get('.header-button-group button').eq(0).click();
    cy.get('.heimdal-signup-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type(`user${Math.floor(Math.random() * 1786906545013)}`);
    cy.get('.form-group').eq(1).find('.form-control').type(randomEmail({ domain: 'heimdal.com' }));
    cy.get('.form-group').eq(2).find('.form-control').type('password42');
    cy.get('.form-group').eq(3).find('.form-control').type('password42');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/heimdal-frontend.herokuapp.com/');
    cy.get('.active_user_logo').invoke('show').should('be.visible');
  });
});
