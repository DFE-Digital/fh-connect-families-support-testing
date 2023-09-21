describe('Pregnancy Birth and Early Years filter - category filters',function(){
   
    //Pregnancy Birth and Early Years filter
       let subcategories = ['Early years language and learning','Health visiting','Infant feeding support (including breastfeeding)','Midwife and maternity','Perinatal mental health support (pregnancy to one year post birth)']
        let activities = ['earlyyearslanguageandlearning','healthvisiting','infantfeedingsupport(includingbreastfeeding)','midwifeandmaternity','perinatalmentalhealthsupport(pregnancytooneyearpostbirth)']
       let subcatcode = ['2','3','4','5','6']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Pregnancy Birth and Early Years filter - clear filters`,function(){
          cy.visit('/', {failOnStatusCode: false})
       // landing page
         cy.login('oneloginusername', 'oneloginpassword', false);
         cy.visit('/');
         cy.refServLanding();
        cy.searchbypostcode('bs2 0sp')
        cy.activitiesSelection(`${activities[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`)
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`)
     
    });
}
})