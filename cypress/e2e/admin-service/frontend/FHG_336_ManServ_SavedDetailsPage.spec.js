describe.skip('|FHG_336_ManServ_SavedDetailsPage|',function(){
    it('AC 1,2 - Page Content, directs to homepage',function(){
        cy.visit('/OrganisationAdmin/DetailsSaved');
        cy.contains('You have saved these details');
        cy.contains('Any changes will show in the directory straight away.');
        cy.get('.govuk-button').contains('Go to home page');
        //click go to home page button
        cy.get('.govuk-button').click();
        cy.contains('Bristol City Council');
        cy.contains('Add a service to the directory.')
    })
})