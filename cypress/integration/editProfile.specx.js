/* eslint-disable no-undef */
describe('Edit user Profile', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page, login and navigate to profile and click the edit button', () => {
    cy.get('.header-button-group button').eq(1).should('be.visible');
    cy.get('.header-button-group button').eq(1).click();
    cy.get('.heimdal-form').should('be.visible');
    cy.get('.form-group').eq(0).find('.form-control').type('azupatrick0@gmail.com');
    cy.get('.form-group').eq(1).find('.form-control').type('patrick42');
    cy.contains('Sign In').click();
    cy.wait(3000);
    cy.get('.active_user_logo').invoke('show').should('be.visible');
    cy.get('.dropdown-content').eq(1).invoke('show').contains('Profile')
      .click();
    cy.url().should('include', '/patrick42');
    cy.contains('Edit').click();
    cy.url().should('include', '/patrick42/edit');
    cy.get('form').eq(1).find('input').eq(2)
      .clear()
      .type('Patrick');
    cy.get('form').eq(1).find('input').eq(3)
      .clear()
      .type('Azu');
    cy.get('form').eq(1).find('input').eq(4)
      .clear()
      .type('Lagos');
    cy.get('.btn-save-profile').click();
    cy.get('.toastr').should('contain', 'Profile Updated');
  });
});
