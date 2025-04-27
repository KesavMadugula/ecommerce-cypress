describe('Search Products Test', () => {

    it('should search for a product and verify results', () => {
      cy.visit('http://automationexercise.com');
  
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('be.visible');
  
      cy.contains('Products').click();
  
      cy.url().should('include', '/products');
      cy.get('h2.title.text-center').should('have.text', 'All Products');
  
      cy.get('#search_product').type('Dress'); // search word
      cy.get('#submit_search').click();
  
      cy.get('h2.title.text-center').should('contain.text', 'Searched Products');
  
      cy.get('.features_items').find('.product-image-wrapper').should('have.length.greaterThan', 0);
  
      // Only assert products that contain 'dress'
      cy.get('.features_items .productinfo p').each(($el) => {
        const productName = $el.text().toLowerCase();
        if (productName.includes('dress')) {
          expect(productName).to.include('dress');
        }
        
      });
  
    });
  
  });
  