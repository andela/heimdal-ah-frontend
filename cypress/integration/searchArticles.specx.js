/* eslint-disable no-undef */
describe('Search for Articles', () => {
  beforeEach(() => cy.visit('/'));
  it('.should() - visit heimdal home page and search for articles with tag nodejs and author john', () => {
    const filters = [
      {
        params: 'nodejs',
        url: '/joe/articles/this-is-trd-post-title-u87ddsa',
      },
      { params: 'john', url: '/john/articles/hello-world-u87ddd' },
    ];

    cy.wrap(filters).each((filter) => {
      cy.get('.fas').click();
      cy.get('.myf').type(filter.params).should('have.value', filter.params);
      cy.get('table').should('have.length', 1);
      cy.get('table tbody tr th').should('contain', 'Articles');
      cy.get('table tbody tr td a').eq(0).should('be.visible');
      cy.wait(1000);
      cy.get('table tbody tr td a').eq(0).invoke('show').click();
      cy.url().should('include', filter.url);
    });
  });

  it('.should() - visit heimdal home page and search for article with title what', () => {
    cy.get('.fas').click();
    cy.get('.form-control').type('what').should('have.value', 'what');
    cy.get('table').should('have.length', 1);
    cy.get('table tbody tr th').should('contain', 'Articles');
    cy.wait(1000);
    cy.contains('View More').click();
    cy.url().should('include', '/search?query=what');
    cy.get('table tbody tr td a').eq(1).should('be.visible');
    cy.wait(1000);
    cy.get('table tbody tr td a').eq(1).click();
    cy.url().should('include', '/segun/articles/What-a-wonderful-world-time-to-say-hi-u87dsyths');
  });
});
