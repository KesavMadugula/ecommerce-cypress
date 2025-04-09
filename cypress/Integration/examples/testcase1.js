// describe('register user',function(){

// it('regster user',function(){

//     cy.visit('http://automationexercise.com')

// })


// })
describe('Register User', () => {
    const userData = {
        name: 'TestUser',
        email: `madugulakesav@gmail.com`,
        password: 'Password123',
        firstName: 'kesav',
        lastName: 'madugula',
        company: 'Test Company',
        address1: '319 A,sector 11',
        address2: 'test address',
        country: 'India',
        state: 'Andhra',
        city: 'vskp',
        zipcode: 'vskp 5300325',
        mobileNumber: '7032371996'
    }
  
    it('register a new user successfully', () => {
      // 1. Launch browser and 2. Navigate to URL
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible
      cy.get('body').should('contain', 'Home');
  
      // 4. Click on 'Signup / Login' button
      cy.contains('Signup / Login').click();
  
      // 5. Verify 'New User Signup!' is visible
      cy.contains('New User Signup!').should('be.visible');
  
      // 6. Enter name and email address
      cy.get('input[data-qa="signup-name"]').type(userData.name);
      cy.get('input[data-qa="signup-email"]').type(userData.email);
  
      // 7. Click 'Signup' button
      cy.get('button[data-qa="signup-button"]').click();
  
      // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
      cy.contains('Enter Account Information').should('be.visible');
  
      // 9. Fill details: Title, Name, Email, Password, Date of birth
      cy.get('#id_gender1').check(); // Title - Mr
      cy.get('#password').type(userData.password);
      cy.get('#days').select('1');
      cy.get('#months').select('November');
      cy.get('#years').select('1996');
  
      // 10. Select checkbox 'Sign up for our newsletter!'
      cy.get('#newsletter').check();
  
      // 11. Select checkbox 'Receive special offers from our partners!'
      cy.get('#optin').check();
  
      // 12. Fill address details
      cy.get('#first_name').type(userData.firstName);
      cy.get('#last_name').type(userData.lastName);
      cy.get('#company').type(userData.company);
      cy.get('#address1').type(userData.address1);
      cy.get('#address2').type(userData.address2);
      cy.get('#country').select(userData.country);
      cy.get('#state').type(userData.state);
      cy.get('#city').type(userData.city);
      cy.get('#zipcode').type(userData.zipcode);
      cy.get('#mobile_number').type(userData.mobileNumber);
  
      // 13. Click 'Create Account' button
      cy.get('button[data-qa="create-account"]').click();
  
      // 14. Verify that 'ACCOUNT CREATED!' is visible
      cy.contains('Account Created!').should('be.visible');
  
      // 15. Click 'Continue' button
      cy.get('a[data-qa="continue-button"]').click();
  
      // 16. Verify that 'Logged in as username' is visible
      cy.contains(`Logged in as ${userData.name}`).should('be.visible');
  
      // 17. Click 'Delete Account' button
      cy.contains('Delete Account').click();
  
      // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
      cy.contains('Account Deleted!').should('be.visible');
      cy.contains('Continue').click();
    });

    
  });