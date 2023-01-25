describe('| e2e-RefService001-category2.spec copy | Family support - category filters|',function(){
   
    // filter - Family support
      let subcategories = ['Bullying and cyber bullying','Debt and welfare advice','Domestic abuse','Intensive targeted family support','Money, benefits and housing','Parenting support','Reducing parental conflict','Separating and separated parent support','Stopping smoking','Substance misuse (including alcohol and drug)','Targeted youth support','Youth justice services']
      let activities = ['bullyingandcyberbullying','debtandwelfareadvice','domesticabuse','intensivetargetedfamilysupport','money,benefitsandhousing','parentingsupport','reducingparentalconflict','separatingandseparatedparentsupport','stoppingsmoking','substancemisuse(includingalcoholanddrug)','targetedyouthsupport','youthjusticeservices']

       let subcatcode = ['1','2','3','4','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
     it(`${subcategories[i]} - Family support - clear filters`,function(){
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