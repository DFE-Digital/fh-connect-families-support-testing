describe('| mobile-e2ejourney-RefServ | Referral Service - show filters / return to results |',function(){
    let device = ['iphone-x','samsung-s10']
        for(let i=0;i<device.length;i++){
    it.skip(`${device[i]} - Referral Service - Valid post code + Filters - cost`,function(){
        
        cy.viewport(`${device[i]}`);
       
        cy.visit('/', {failOnStatusCode: false})
       
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
        cy.searchbypostcode('bs2 0sp')
       // search results page
        cy.searchResults('bs2 0sp')
        cy.mobOpenCloseFilters()
        cy.get('[data-testid="button-apply-filters"]').should('be.visible')
        cy.returnToResults()
        cy.get('[data-testid="button-apply-filters"]').should('not.be.visible')
        cy.mobOpenCloseFilters()
        // filter cost
        cy.costFilter('paid')
        //clear filters
        cy.showHideFiltersMob()
        cy.clearFilters()
        // filter free
        cy.showHideFiltersMob()
        cy.costFilter('free')
        //clear filters
        cy.showHideFiltersMob()
        cy.clearFilters()
        // filter all
        cy.showHideFiltersMob()
        cy.costFilter('both')
        
    })
}
})