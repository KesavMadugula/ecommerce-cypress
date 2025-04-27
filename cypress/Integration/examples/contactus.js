import HomePage from '../../Pages/homepage1';
import ContactUsPage from '../../Pages/contactuspage';
//import contactUsData from '../../fixtures/contactusform.json'

describe('Contact Us Form Test Using POM and Fixtures', () => {
  const homePage = new HomePage();
  const contactUsPage = new ContactUsPage();

  beforeEach(() => {
    cy.fixture('contactusform').then(function (data) {
      this.data = data;
    });
  });

  it('should submit contact us form successfully', function () {
    // Launch and navigate
    homePage.visit();

    // Verify Home Page
    homePage.verifyHomePageVisible();

    // Click Contact Us
    homePage.clickContactUs();

    // Verify Get In Touch
    contactUsPage.verifyGetInTouchVisible();

    // Fill form
    contactUsPage.fillContactForm(this.data.name, this.data.email, this.data.subject, this.data.message);

    // Upload file
    contactUsPage.uploadFile(this.data.fileName);

    // Submit the form
    contactUsPage.clickSubmit();

    // Handle alert
    contactUsPage.handleAlert();

    // Verify success message
    contactUsPage.verifySuccessMessage();

    // Click Home and verify Home Page
    homePage.clickHomeButton();
    homePage.verifyHomePageVisible();
  });
});
