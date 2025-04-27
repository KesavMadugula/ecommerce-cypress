class ContactUsPage {
    verifyGetInTouchVisible() {
        cy.contains('Get In Touch').should('be.visible');
    }

    fillContactForm(name, email, subject, message) {
        cy.get('input[data-qa="name"]').type(name);
        cy.get('input[data-qa="email"]').type(email);
        cy.get('input[data-qa="subject"]').type(subject);
        cy.get('textarea[data-qa="message"]').type(message);
    }

    uploadFile(fileName) {
        cy.get('input[name="upload_file"]').attachFile(fileName);
    }

    clickSubmit() {
        cy.get('input[data-qa="submit-button"]').click();
    }

    handleAlert() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Press OK to proceed!');
        });
    }

    verifySuccessMessage() {
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    }
}

export default ContactUsPage;