describe('| e2e-RefServ-001 | Referral Service - valid post code - no results page |',function(){
    it('Referral Service - valid post code - no results page ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ig26fa')
       // search results page
       cy.noResultsPage()
    })
})