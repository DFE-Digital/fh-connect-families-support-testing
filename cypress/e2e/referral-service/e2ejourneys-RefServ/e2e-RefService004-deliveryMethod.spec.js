describe('| e2e-RefServ-003 | Referral Service - Valid post code + Filters delivery method |',function(){
    it('Referral Service - Valid post code + Filters - delivery method  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       // search by post code page
        cy.searchbypostcode('ig1 4bb')
       // search results page
        cy.searchResults('ig1 4bb')
       // filter delivery method - all
        cy.deliveryType({inperson:'1',online:'2',telephone:'3'})
        cy.get('.govuk-grid-column-two-thirds').contains('In Person')
        cy.get('.govuk-grid-column-two-thirds').contains('Online')
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
       //clear filters
        cy.clearFilters()
       // filter delivery method - inperson
        cy.deliveryType({inperson:'1'})
        cy.get('.govuk-grid-column-two-thirds').contains('In Person')
       //clear filters
        cy.clearFilters()
       // filter delivery method - inperson
        cy.deliveryType({telephone:'3'})
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
        cy.clearFilters()
    // filter delivery method - inperson
        cy.deliveryType({online:'2'})
        cy.contains('1 services found')
      //clear filters
        cy.clearFilters()
      
       // filter delivery method - all
        cy.deliveryType({inperson:'1',telephone:'3'})
        cy.get('.govuk-grid-column-two-thirds').contains('In Person')
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
    })
})