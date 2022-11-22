describe('| mobile-e2ejourney-RefServ | Referral Service - Valid post code + Filters cost |',function(){
    let device = ['iphone-x','ipad-mini','samsung-s10']
        for(let i=0;i<device.length;i++){
    it(`${device[i]} - Referral Service - Valid post code + Filters - cost`,function(){
        
        cy.viewport(`${device[i]}`);
       
        cy.visit('/', {failOnStatusCode: false})
       
       // landing page
        cy.refServLanding()
       //sign on page 
       cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('BS20SP')
       // search results page
       cy.searchResults('BS20SP')
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
}
})