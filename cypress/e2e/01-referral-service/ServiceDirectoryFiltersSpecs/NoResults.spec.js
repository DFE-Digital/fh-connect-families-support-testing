describe('valid post code - no results page',function(){
    it('Referral Service - valid post code - no results page ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.login('oneloginusername', 'oneloginpassword');
        cy.refServLanding();
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('ls6 1qa')
       // search results page
       cy.noResultsPage()
    })
})