describe('Referral Service - Filters language',function(){
    it('Referral Service - Valid post code + Filters - language  ',function(){
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
       // filter language
       let languages = ['English','French','Somali','Afrikaans']
       for (let i=0; i< languages.length; i++){

       cy.languageSelection(`${languages[i]}`)
       cy.get('button[name="removeSelectedLanguage"]').should('be.visible').invoke('text').should('contain', `${languages[i]}`);
       //clear filters
       cy.clearFilters()
    }
    })
})