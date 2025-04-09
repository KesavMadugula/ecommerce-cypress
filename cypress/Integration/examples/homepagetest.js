import { homepage } from "../../Pages/homepage"

const homePageobj= new homepage();

import testdata from '../../fixtures/homepaage.json'

describe('homepage',()=>{

    before(()=>{
cy.login(testdata.login.username, testdata.login.password)
    
    })

    it('add to cart',()=>{

        homePageobj.SearchProdName(testdata.product.ProductName);
        homePageobj.selectproduct(testdata.product)
        homePageobj.AddToCart1()
        homePageobj.Success().should('contain',testdata.message.SuccessMessage)


    })
})