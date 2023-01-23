describe('| smokeTest-RefServ | Referral Service - Valid post code + Filters cost |',function(){
    it('Referral Service - Valid post code + Filters - cost  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ig1 4bb')
       // search results page
       cy.searchResults('ig1 4bb')
       // filter cost
       cy.costFilter('paid')
       //clear filters
       cy.clearFilters()
       // filter free
       cy.costFilter('free')
        //clear filters
       cy.clearFilters()
       // filter all
       cy.costFilter('both')
    })
})