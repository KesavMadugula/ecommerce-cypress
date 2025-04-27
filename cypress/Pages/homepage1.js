class HomePage {
    visit() {
        cy.visit('http://automationexercise.com');
    }

    verifyHomePageVisible() {
        cy.url().should('include', 'automationexercise');
        cy.get('body').should('be.visible');
    }

    clickContactUs() {
        cy.contains('Contact us').click();
    }

    clickHomeButton() {
        cy.contains('Home').click();
    }
}

export default HomePage;
