describe('| e2e-RefService001-category.spec copy | category filters|',function(){
   
    // activities filter - Holiday clubs and schemes
       let subcategories = ['Activities','Before and after school clubs','Holiday clubs and schemes','Music, arts and dance','Parent, baby and toddler groups','Pre-school playgroup','Sports and recreation']
       let activities = ['activities','beforeandafterschoolclubs','holidayclubsandschemes','music,artsanddance','parent,babyandtoddlergroups','pre-schoolplaygroup','sportsandrecreation']
       let subcatcode = ['1','2','3','4','5','6','7']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Activities, clubs and groups - clear filters`,function(){
          cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.refServLanding()
        cy.searchbypostcode('ig1 4bb')
        cy.activitiesSelection(`${activities[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`)
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`)
     
    });
}
})