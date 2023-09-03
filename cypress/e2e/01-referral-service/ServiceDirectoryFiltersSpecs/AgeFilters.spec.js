describe('Age filters',function(){
  // age filter
       let subcategories = ['0 to 12 months','1 year old','2 years old','3 years old','4 years old','5 years old','6 years old','7 years old','8 years old','9 years old','10 years old','11 years old','12 years old','13 years old','14 years old','15 years old','16 years old','17 years old','18 years old','19 years old','20 years old','21 years old','22 years old','23 years old','24 years old','25 years old']
       let allAges = ['0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+','0 to 25+']
      //  let excludedAges = ['null','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5']
       for (let i=0; i< subcategories.length; i++){
     it(`${subcategories[i]} - Children and young people - clear filters - validation ${allAges[i]}`,function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
         cy.login('oneloginusername', 'oneloginpassword');
         cy.refServLanding();
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('pr1 0ls')
       // search results page
       cy.searchResults('pr1 0ls')
       // filter age
       cy.ageFilter(`${subcategories[i]}`)
       cy.get('#SearchAge option:selected').should('have.text', `${subcategories[i]}`)
       cy.get('button[name="removeSearchAge"]').should('be.visible').invoke('text').should('contain', `Age ${subcategories[i].charAt(0)}`);
       cy.clearFilters()

    });
  }
})