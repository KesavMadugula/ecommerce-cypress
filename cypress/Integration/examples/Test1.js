// first test case

describe('first suite',function(){

    it('',function(){

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
    })

})