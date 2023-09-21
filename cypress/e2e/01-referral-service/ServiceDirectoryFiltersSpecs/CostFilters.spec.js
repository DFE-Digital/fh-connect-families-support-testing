describe('Cost filters',function(){
    it('filters - filter - cost  ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.login('oneloginusername', 'oneloginpassword', false);
        cy.visit('/');
        cy.refServLanding();
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('bs2 0sp')
       // search results page
       cy.searchResults('bs2 0sp')
       let costfilters = ['free','paid','both']
       for (let i=0;i<costfilters.length;i++)
       {// filter cost
       cy.costFilter(`${costfilters[i]}`)
       //clear filters
       cy.clearFilters()
    }
       
    })
})