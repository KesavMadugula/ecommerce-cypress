export class reregister{

    webLocators={
        register: '.list-group-item',

        FirstName:'#input-firstname',
        LastName:'#input-lastname',
        Email:'#input-email',
        Telephone:'#input-telephone',
        Password:'#input-password',
        confirmPassword:'#input-confirm',
        subscribe:'input[value="0"]',
        privacypolicy:'input[type="checkbox"]',
        submit:'input[type="submit"]',
        warning:'.alert.alert-danger.alert-dismissible'
    }
    
    openUrl(){
        cy.visit(Cypress.env('URL'))
    }

    clickonregister(){
        cy.get(this.webLocators.register).eq(1).click()
    }
    enterfirstname(FName){
        cy.get(this.webLocators.FirstName).type(FName)
    }
    enterlastname(LName){
        cy.get(this.webLocators.LastName).type(LName)
    }
    enterEmail(Mail){
        cy.get(this.webLocators.Email).type(Mail)
    }
    enterphone(Phone){
        cy.get(this.webLocators.Telephone).type(Phone)
    }
    enterPassword(Password){
        cy.get(this.webLocators.Password).type(Password)
    }
    enterConfPassword(confPass){
        cy.get(this.webLocators.confirmPassword).type(confPass)
    }
    enterSubscribe(){
        cy.get(this.webLocators.subscribe).click()
    }
    enterPrivacyPolicy(){
        cy.get(this.webLocators.privacypolicy).check()
    }
    entersubmit(){
        cy.get(this.webLocators.submit).click()
    }
    warningmessage(){
        cy.get(this.webLocators.warning).should('be.visible').and('contain', "Warning: E-Mail Address is already registered!")
    }
    }



    







