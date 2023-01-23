describe('| e2e-RefServ-001 | Referral Service - cost filters|',function(){
    it('filters - valid post code - cost  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ig1 4bb')
       // search results page
       cy.searchResults('ig1 4bb')
       let costfilters = ['both','free','paid']
       for (let i=0;i<costfilters.length;i++)
       {// filter cost
       cy.costFilter(`${costfilters[i]}`)
       //clear filters
       cy.clearFilters()
    }
       
    })
})