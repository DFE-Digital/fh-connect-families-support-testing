describe('| e2e-RefService006-category6.spec | Transport - filters|',function(){
   
    // Transport 
        let subcategories = ['Community transport']
        let activities = ['communitytransport']
        let subcatcode = ['1']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Transport - clear filters`,function(){
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