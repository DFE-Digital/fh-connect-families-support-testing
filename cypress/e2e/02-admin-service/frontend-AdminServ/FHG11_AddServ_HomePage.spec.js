describe.skip('Add a Service Homepage FHG-11',function(){
    it('AC1 Add a Service Page - Text on Page',function(){

        //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Assert on the Add and Remove Services Page
    cy.contains('Add and remove services provided by your organisation.');
    cy.should('contain', 'Add and remove services provided by your organisation.');

    cy.contains('Add details for a service provided by your organisation');
    cy.should('contain', 'Add details for a service provided by your organisation');



    })

    it('AC2 Add a Service Page, Add a Service Function',function(){
    //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Add and Remove Services Page, Select Add a Service
        cy.contains('Add a service').click();
        //Assert now on page 'What is the name of the service?'
        cy.contains('What is the name of the service?');
        cy.should('contain', 'What is the name of the service?');
    })

})