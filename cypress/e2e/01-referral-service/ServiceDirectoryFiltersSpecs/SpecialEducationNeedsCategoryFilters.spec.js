describe('Special educational needs and disabilities (SEND) - category filters',function(){
   
    // Special educational needs and disabilities (SEND)
       let subcategories = ['Autistic Spectrum Disorder (ASD)','Breaks and respite','Early years support','Hearing impairment','Multi-sensory impairment','Other difficulties or disabilities','Physical disabilities','Social, emotional and mental health support','Speech, language and communication needs','Visual impairment','Learning difficulties and disabilities']
       let activities = ['autisticspectrumdisorder(asd)','breaksandrespite','earlyyearssupport','hearingimpairment','multi-sensoryimpairment','otherdifficultiesordisabilities','physicaldisabilities','social,emotionalandmentalhealthsupport','speech,languageandcommunicationneeds','visualimpairment','learningdifficultiesanddisabilities']
       let subcatcode = ['1','2','3','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Special educational needs and disabilities (SEND) - clear filters`,function(){
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
