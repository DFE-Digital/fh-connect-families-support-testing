describe('| e2e-RefService011-noResults.spec | Referral Service - valid post code - no results page |',function(){
    it('Referral Service - valid post code - no results page ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ig2 6fa')
       // search results page
       cy.noResultsPage()
    })
})