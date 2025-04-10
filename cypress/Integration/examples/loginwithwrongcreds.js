describe('Login with incorrect credentials', () => {
    it('Displaying  error when logging in with wrong email/password', () => {
      // 1 & 2. Launch browser and visit the URL
      cy.visit('http://automationexercise.com');
  
      // 3. Verify home page is visible
      cy.get('body').should('contain.text', 'Home'); // Adjust if needed
  
      // 4. Click on 'Signup / Login' button
      cy.contains('Signup / Login').click();
  
      // 5. Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');
  
      // 6. Enter incorrect email address and password
      cy.get('input[data-qa="login-email"]').type('abcdefg@example.com');
      cy.get('input[data-qa="login-password"]').type('faltupassword');
  
      // 7. Click 'login' button
      cy.get('button[data-qa="login-button"]').click();
  
      // 8. Verify error message is visible
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });