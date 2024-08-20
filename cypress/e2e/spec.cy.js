it('should display the correct title on the homepage', () => {
  cy.visit('http://localhost:3000/');
  cy.get('h2').contains('Your guided path to programming enlightenment').should('be.visible');
});