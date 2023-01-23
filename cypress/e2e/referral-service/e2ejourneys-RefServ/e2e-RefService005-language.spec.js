describe('| e2e-RefServ-001 | Referral Service - Filters language |',function(){
    it('Referral Service - Valid post code + Filters - language  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ig1 4bb')
       // search results page
       cy.searchResults('ig1 4bb')
       // filter language
       let languages = ['english','french','hindi','afrikaans']
       for (let i=0; i< languages.length; i++){

       cy.languageSelection(`${languages[i]}`)
       cy.get('.govuk-grid-column-two-thirds').contains(`${languages[i]}`)
       //clear filters
       cy.clearFilters()
    }
    })
})