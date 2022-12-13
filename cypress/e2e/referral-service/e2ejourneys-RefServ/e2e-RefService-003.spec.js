describe('| e2e-RefServ-003 | Referral Service - Valid post code + Filters delivery method |',function(){
    it('Referral Service - Valid post code + Filters - delivery method  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('BS20SP')
       // search results page
       cy.searchResults('BS20SP')
       // filter delivery method - all
      cy.deliveryType({inperson:'1',online:'2',telephone:'3'})
      cy.contains('4 services found')
       //clear filters
       cy.clearFilters()
       // filter delivery method - inperson
      cy.deliveryType({inperson:'1'})
      cy.contains('2 services found')
       //clear filters
       cy.clearFilters()
    // filter delivery method - inperson
      cy.deliveryType({online:'2'})
      cy.contains('1 services found')
      //clear filters
       cy.clearFilters()
      // filter delivery method - inperson
      cy.deliveryType({telephone:'3'})
      cy.contains('1 services found')
       cy.clearFilters()
       // filter delivery method - all
      cy.deliveryType({inperson:'1',telephone:'3'})
      cy.contains('3 services found')
    })
})