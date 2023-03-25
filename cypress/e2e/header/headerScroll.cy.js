///<reference types="Cypress" />

describe('Check the functioning of the navigation menu', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('The navigation menu should disappear when you scroll down and appear when you scroll up.', () => {
    cy.scrollTo(0, 200);
    cy.get('[data-test="navigation-header"]').should('not.be.visible');

    cy.scrollTo(0, -50);
    cy.get('[data-test="navigation-header"]').should('be.visible');
    cy.get('[data-test="navigation-header"]').should('contain.text', 'React');
  });

  it('should redirect to the new meetup page when you click on the link.', () => {
    cy.get('[data-cy="new-meetup-link"]')
      .should('have.text', 'Add New Meetup')
      .click();

    cy.contains('Meetup Image');
  });
});
