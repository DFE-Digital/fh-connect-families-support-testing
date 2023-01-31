describe('| e2e-RefService003-category3.spec copy | Health - category filters|',function(){
   
    // filter - Health
       let subcategories = ['Hearing and sight','Mental health, social and emotional support','Nutrition and weight management','Oral health','Public health services',]
       let activities = ['hearingandsight','mentalhealth,socialandemotionalsupport','nutritionandweightmanagement','oralhealth','publichealthservices',]
       let subcatcode = ['1','2','3','4','5']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Health - clear filters`,function(){
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