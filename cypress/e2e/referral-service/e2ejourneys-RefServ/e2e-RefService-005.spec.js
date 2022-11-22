describe('| e2e-RefServ-001 | Referral Service - Valid post code + Filters language |',function(){
    it('Referral Service - Valid post code + Filters - language  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('BS20SP')
       // search results page
       cy.searchResults('BS20SP')
       // filter language
       cy.languageSelection('English')
       cy.contains('3 services found')
       //clear filters
       cy.clearFilters()
       cy.languageSelection('Hindi')
       cy.contains('0 services found')
       //clear filters
       cy.clearFilters()
       cy.languageSelection('Afrikaans')
       cy.contains('1 services found')
       cy.languageSelection('All languages')
       cy.contains('4 services found')
    })
})