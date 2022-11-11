describe.skip('|FHG_330_ManServ_NotDeleteServicePage.spec|',function(){
    it('AC 1,2 - Page Content, directs to homepage',function(){
        cy.visit('/OrganisationAdmin/ServiceNotDeleted');
        cy.contains('You have not deleted the service');
        cy.contains('It is still showing in the directory.');
        cy.get('.govuk-button').contains('Go to home page');
        //click go to home page button
        cy.get('.govuk-button').click();
        cy.contains('Bristol City Council');
        cy.contains('Add a service to the directory.')
    })
})