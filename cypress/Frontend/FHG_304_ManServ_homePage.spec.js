describe('|FHG_304_ManageService_homePage|',function(){
    it('AC 1,2 - Page content + select options + back button',function(){
        cy.visit('/OrganisationAdmin/Welcome');
        //Assert page has all the text and fields visible
        cy.contains('Bristol City Council');
        cy.contains('Add a service');
        cy.contains('Add a service to the directory.');
        cy.contains('Manage your services');
        cy.contains('View, change or delete services in the directory.');
        // manage services page
        cy.get('div:nth-of-type(2) > .govuk-heading-m > a').click();
        cy.contains('Manage your services');
        cy.contains('View, change or delete services you have added to the directory.');
        // back button
        cy.get('.govuk-back-link').click();
        cy.contains('Bristol City Council');
        // Add service page
        cy.get('div:nth-of-type(1) > .govuk-heading-m > a').click();
        cy.contains('What is the name of the service?');
        // back button
        cy.get('.govuk-back-link').click();
        cy.contains('Bristol City Council');
    })
});