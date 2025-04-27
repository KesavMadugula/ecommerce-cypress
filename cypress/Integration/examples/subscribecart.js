describe('Automation Exercise Subscription Test', () => {
    it('Should successfully subscribe to the website', () => {
        // Step 1: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // Step 4: Click 'Cart' button
        cy.contains('Cart').click();

        // Step 5: Scroll down to footer
        cy.scrollTo('bottom');

        // Step 6: Verify text 'SUBSCRIPTION' is visible
        cy.contains('SUBSCRIPTION').should('be.visible');

        // Step 7: Enter email address in input and click arrow button
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('button[type="submit"]').click();

        // Step 8: Verify success message 'You have been successfully subscribed!' is visible
        cy.contains('You have been successfully subscribed!').should('be.visible');
    });
});
