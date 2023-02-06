describe('| e2e-RefService005-category5.spec | Special educational needs and disabilities (SEND) - category filters|',function(){
   
    // Special educational needs and disabilities (SEND)
       let subcategories = ['Autistic Spectrum Disorder (ASD)','Breaks and respite','Early years support','Groups for parents and carers of children with SEND','Hearing impairment','Multi-sensory impairment','Other difficulties or disabilities','Physical disabilities','Social, emotional and mental health support','Speech, language and communication needs','Visual impairment','Learning difficulties and disabilities']
       let activities = ['autisticspectrumdisorder(asd)','breaksandrespite','earlyyearssupport','groupsforparentsandcarersofchildrenwithSEND','hearingimpairment','multi-sensoryimpairment','otherdifficultiesordisabilities','physicaldisabilities','social,emotionalandmentalhealthsupport','speech,languageandcommunicationneeds','visualimpairment','learningdifficultiesanddisabilities']
       let subcatcode = ['1','2','3','4','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Special educational needs and disabilities (SEND) - clear filters`,function(){
          cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
        cy.searchbypostcode('bs2 0sp')
        cy.activitiesSelection(`${activities[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`)
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`)
     
    });
}
})
//cy.get('[data-testid="autisticspectrumdisorder(asd)"]')