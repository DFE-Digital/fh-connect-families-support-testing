describe.skip('Add a Service Name FHG-12',function(){
    it('AC1 What is the name of the Service - Text on Page',function(){
       //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        //Assert Text on Add a Service Page
        cy.contains('What is the name of the service?');
        cy.should('contain', 'What is the name of the service?');


    })

    it('AC2 Add a Service Page, Add Service, Goes to Next Page',function(){

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG12_AC2')
        cy.get('.govuk-button').click();
        //Assert Takes user to Next Page
        cy.contains('Select the support you offer');
        cy.should('contain', 'Select the support you offer');

    })

    it('AC3 Add a Service Page, Back Button Returns to Add Service',function(){

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        //Assert Back button Returns to Add Service
        cy.contains('Back').click();
        cy.contains('Add and remove services provided by your organisation.');
        cy.should('contain', 'Add and remove services provided by your organisation.');

    })

    it('AC4 Add a Service Page, Up to 255 characters accepted',function(){

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('A Long Service Name containing up to 255 characters is accepted. A Long Service Name containing up to 255 characters is accepted. A Long Service Name containing up to 255 characters is accepted. A Long Service Name containing up to 255 characters is accepted.')
        cy.get('.govuk-button').click();
        //Assert Takes user to Next Page
        cy.contains('Select the support you offer');
        cy.should('contain', 'Select the support you offer');

    })

    it('AC5 Add a Service Page, Service name is mandatory',function(){

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('.govuk-button').click();
        //Assert Error Message Response for Mandatory Service Name Entry
        cy.contains('You must enter a service name');
        cy.should('contain', 'You must enter a service name');

    })

    

})