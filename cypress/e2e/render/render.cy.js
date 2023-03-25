describe('Check that the app renders correctly.', () => {
  it('should navigate to the app', () => {
    cy.visit(Cypress.env('baseUrl'));
  });
});
