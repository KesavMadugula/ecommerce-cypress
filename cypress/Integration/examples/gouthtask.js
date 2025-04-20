describe('API Testing Menu', () => {
    it('Click API Testing using .each()', () => {

      
      cy.visit('https://automationexercise.com/');
      cy.wait(2000);
      cy.get('ul.nav.navbar-nav > li').each(($el) => {
        const menuText = $el.text().trim();
        if (menuText.includes('API Testing')) {
          cy.wrap($el).click();
          cy.wait(3000)
        }
      });
      cy.url().should('include', '/api_list');
    });
  });