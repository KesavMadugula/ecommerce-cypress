describe('Subscription Test', () => {

    it('should subscribe to the newsletter successfully', () => {
      // 1 & 2. Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible successfully
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('be.visible');
  
      // 4. Scroll down to footer
      cy.scrollTo('bottom');
  
      // 5. Verify text 'SUBSCRIPTION'
      cy.contains('Subscription').should('be.visible');
  
      // 6. Enter email address in input and click arrow button
      cy.get('#susbscribe_email') // Typo in the website: it's 'susbscribe_email' not 'subscribe_email'
        .type('testemail@example.com');
      cy.get('#subscribe').click(); // Click on the arrow button
  
      // 7. Verify success message
      cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!');
    });
  
  });
  