describe('Valid post code + Filters delivery method',function(){
    it('Referral Service - Valid post code + Filters - delivery method  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.login('oneloginusername', 'oneloginpassword', false);
        cy.visit('/');
        cy.refServLanding();
       // search by post code page
        cy.searchbypostcode('bs2 0sp')
       // search results page
        cy.searchResults('bs2 0sp')
       // filter delivery method - all
        cy.deliveryType({online:'1',telephone:'2'})
        cy.get('.govuk-grid-column-two-thirds').contains('Online')
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
       //clear filters
        cy.clearFilters()
       // filter delivery method - inperson
        cy.deliveryType({telephone:'2'})
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
        cy.clearFilters()
    // filter delivery method - inperson
        cy.deliveryType({online:'1'})
        cy.get('.govuk-grid-column-two-thirds').contains('Online')
      //clear filters
        cy.clearFilters()
      
       // filter delivery method - all
        cy.deliveryType({online:'1',telephone:'2'})
        cy.get('.govuk-grid-column-two-thirds').contains('Online')
        cy.get('.govuk-grid-column-two-thirds').contains('Telephone')
    })
})