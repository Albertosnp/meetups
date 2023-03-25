///<reference types="Cypress" />

describe('Check that when selecting a meetiup as a favourite it is saved correctly.', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('should show in the favourites view the selected item and in the navigation it should add up to 1.', () => {
    cy.get('[data-cy="add-favourite"]').as('favouriteButton');

    cy.get('@favouriteButton').first().click();

    cy.get('[data-cy="number-favourites"]').should('contain.text', '1');

    cy.get('[data-cy="favourite-link"]')
      .should('contain.text', 'My Favorites')
      .click();

    cy.get('[data-test="meet-up-item"]').contains(
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    );
  });
});
