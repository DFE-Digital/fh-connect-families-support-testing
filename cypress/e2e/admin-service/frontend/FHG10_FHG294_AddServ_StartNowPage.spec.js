describe.skip('Add a Service Start Now Page FHG-10, modified under FHG-294',function(){
    it('AC1 Start Now Page Text on Page',function(){
        cy.visit('/');
        //Landing Page
        //Assert Text Content as Expected under modifications in FHG-294
        cy.contains('Add a service to the local support directory');
        cy.should('contain', 'Add a service to the local support directory');
        cy.contains('This is for organisations supporting children and families in England.');
        cy.should('contain', 'This is for organisations supporting children and families in England.');
        cy.contains('Joining the local support directory');
        cy.should('contain', 'Joining the local support directory');

    })

    it('AC2 Start Now Page Text, Start Now Button',function(){
        cy.visit('/');
        //Assert Landing Page contains Start Button
        cy.get('.govuk-button.govuk-button--start').should('contain', 'Start now')
        cy.get('.govuk-button.govuk-button--start').click();
    })

})