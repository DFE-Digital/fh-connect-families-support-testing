describe('| e2e-RefServ-008 | Referral Service - Valid post code + Filters age |',function(){
    it('Referral Service - Valid post code + Filters - age  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('bs2 0sp')
       // search results page
       cy.searchResults('bs2 0sp')
       // filter age
       cy.ageFilter('2')
       cy.contains('2 services found')
       //clear filters
       cy.clearFilters()
        cy.contains('4 services found')
         // filter free
       cy.ageFilter('25')
       cy.contains('0 services found')
        //clear filters
       cy.clearFilters()
        cy.contains('4 services found')
    })
})