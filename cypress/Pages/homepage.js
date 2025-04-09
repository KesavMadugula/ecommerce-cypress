
export class homepage{

weblocators={

searchinput:'.form-control.input-lg',
searchbutton:'.btn.btn-default.btn-lg',
product:'img[title="MacBook"]',
addtoCart:'.btn.btn-primary.btn-lg.btn-block',
success:'.alert.alert-success.alert-dismissible'
}

SearchProdName(Productname){
    cy.get(this.weblocators.searchinput).type(Productname)
    cy.get(this.weblocators.searchbutton).click()
}
selectproduct(){
cy.get(this.weblocators.product).click()
}
AddToCart1(){
    cy.get(this.weblocators.addtoCart).click()

}
Success(){
   return cy.get(this.weblocators.success)
}



}
