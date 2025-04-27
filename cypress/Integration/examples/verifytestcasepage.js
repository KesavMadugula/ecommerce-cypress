describe('Test Cases Page Navigation', () => {

    it('should navigate to Test Cases page successfully', () => {
      // 1. Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');
  
      // 2. Verify that home page is visible successfully
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('be.visible');
  
      // 3. Click on 'Test Cases' button
      cy.contains('Test Cases').click();
  
      // 4. Verify user is navigated to Test Cases page successfully
      cy.url().should('include', '/test_cases');
      cy.get('h2.title.text-center').should('have.text', 'Test Cases');
    });
  
  });
  