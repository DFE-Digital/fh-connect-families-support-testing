describe('Referral Service - Service details page',function(){
    //https://dfedigital.atlassian.net/browse/FHG-2371
    it('Referral Service - service details page ',function(){
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
       cy.contains('Wellspring Settlement Universal and Targeted Parenting support for parents with children under 5 years').click()
       cy.contains('Wellspring Settlement Universal and Targeted Parenting support for parents with children under 5 years')
    })
})