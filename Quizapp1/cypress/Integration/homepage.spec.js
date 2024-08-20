<reference types = "cypress"/>

describe('Homepage E2E Tests', () => {

    it('Should load the homepage successfully', () => {
      cy.visit('/');
      cy.get('.logo').should('be.visible');
    });
  
    it('Should display correct text in the intro section', () => {
      cy.visit('/');
      cy.get('h2').contains('Your guided path to programming enlightenment');
    });
  
    it('Should navigate to another page when BEGIN JOURNEY is clicked', () => {
      cy.visit('/');
      cy.get('.begin-button').click();
      cy.url().should('include', '/next-page'); // assuming `/next-page` is the route you navigate to
    });
  
    it('Should display all features with correct titles', () => {
      cy.visit('/');
      cy.get('.features .feature').should('have.length', 3);
      cy.get('.features .feature').first().within(() => {
        cy.get('h3').contains('Personalized Quizzes');
      });
    });
  
  });
  