describe('Product Details Test', () => {

    it('should navigate to product detail page and verify information', () => {
      // 1. Launch browser and navigate to URL
      cy.visit('http://automationexercise.com');
  
      // 2. Verify that home page is visible successfully
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('be.visible');
  
      // 3. Click on 'Products' button
      cy.contains('Products').click();
  
      // 4. Verify user is navigated to ALL PRODUCTS page successfully
      cy.url().should('include', '/products');
      cy.get('h2.title.text-center').should('have.text', 'All Products');
  
      // 5. Verify the products list is visible
      cy.get('.features_items').should('be.visible');
  
      // 6. Click on 'View Product' of first product
      cy.get('.features_items .product-image-wrapper').first().contains('View Product').click();
  
      // 7. User is landed to product detail page
      cy.url().should('include', '/product_details/');
  
      // 8. Verify that product details are visible
      cy.get('.product-information').within(() => {
        cy.get('h2').should('be.visible');                // Product Name
        cy.get('p').contains('Category').should('be.visible'); // Category
        cy.get('span > span').should('be.visible');        // Price
        cy.get('p').contains('Availability').should('be.visible'); // Availability
        cy.get('p').contains('Condition').should('be.visible');    // Condition
        cy.get('p').contains('Brand').should('be.visible');        // Brand
      });
  
    });
  
  });
  