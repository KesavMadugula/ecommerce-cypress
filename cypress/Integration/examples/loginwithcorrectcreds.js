describe('Login User with Correct Credentials', () => {
    it('should register, logout, login and delete the account successfully', () => {
      const userData = {
        name: 'TestUser1',
        email: `madugulakeshav@gmail.com`,
        password: 'Password123'
      };
  
      // Step 1 & 2: Launch browser and navigate to site
      cy.visit('http://automationexercise.com');
  
      // Step 3: Verify homepage is visible
      cy.get('body').should('contain', 'Home');
  
      // Step 4: Click on 'Signup / Login'
      cy.contains('Signup / Login').click();
  
      // Register the user (Steps before login)
      cy.get('input[data-qa="signup-name"]').type(userData.name);
      cy.get('input[data-qa="signup-email"]').type(userData.email);
      cy.get('button[data-qa="signup-button"]').click();
  
      // Fill account info
      cy.get('#id_gender1').check();
      cy.get('#password').type(userData.password);
      cy.get('#days').select('1');
      cy.get('#months').select('May');
      cy.get('#years').select('1995');
      cy.get('#newsletter').check();
      cy.get('#optin').check();
      cy.get('#first_name').type('uma');
      cy.get('#last_name').type('mahesh');
      cy.get('#company').type('Test Company');
      cy.get('#address1').type('paris Street');
      cy.get('#address2').type('eifel tower');
      cy.get('#country').select('India');
      cy.get('#state').type('UK');
      cy.get('#city').type('paris');
      cy.get('#zipcode').type('M5V2T6');
      cy.get('#mobile_number').type('9850061732');
      cy.get('button[data-qa="create-account"]').click();
  
      // Confirm account created
      cy.contains('Account Created!').should('be.visible');
      cy.get('a[data-qa="continue-button"]').click();
  
      // Log out
      cy.contains('Logout').click();
  
      // Re-visit home and go to login
      cy.visit('http://automationexercise.com');
      cy.contains('Signup / Login').click();
  
      // Step 5: Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');
  
      // Step 6: Enter correct email and password
      cy.get('input[data-qa="login-email"]').type(userData.email);
      cy.get('input[data-qa="login-password"]').type(userData.password);
  
      // Step 7: Click 'login'
      cy.get('button[data-qa="login-button"]').click();
  
      // Step 8: Verify 'Logged in as username' is visible
      cy.contains(`Logged in as ${userData.name}`).should('be.visible');
  
      // Step 9: Click 'Delete Account'
      cy.contains('Delete Account').click();
  
      // Step 10: Verify that 'ACCOUNT DELETED!' is visible
      cy.contains('Account Deleted!').should('be.visible');
    });
  });