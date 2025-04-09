describe('Login and Logout Test on AutomationExercise', () => {
    it('should login and logout successfully', () => {


    const userData = {
        name: 'king'}
      // 1. Launch browser & 2. Navigate to URL
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible successfully
      cy.get('body').should('be.visible');
      cy.get('a').contains('Home').should('be.visible');
  
      // 4. Click on 'Signup / Login' button
      cy.contains('Signup / Login').click();
  
      // 5. Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');
  
      // 6. Enter correct email address and password
      cy.get('input[data-qa="login-email"]').type('king123@gmail.com');
      cy.get('input[data-qa="login-password"]').type('123123');
  
      // 7. Click 'login' button
      cy.get('button[data-qa="login-button"]').click();

      cy.wait(4000)
  
      // 8. Verify that 'Logged in as username' is visible
      cy.contains(`Logged in as ${userData.name}`).should('be.visible');
  
      // 9. Click 'Logout' button
      cy.contains('Logout').click();
  
      // 10. Verify that user is navigated to login page
      cy.contains('Login to your account').should('be.visible');
    });
  });