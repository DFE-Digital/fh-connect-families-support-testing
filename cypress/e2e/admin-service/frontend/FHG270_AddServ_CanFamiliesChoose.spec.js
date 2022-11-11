describe.skip('Add a Service Can Families Choose Where They use it FHG-270',function(){
    it('AC1 Can Families Choose Where - Correct Options',function(){

        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG270_AC1_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="Address_1"]').type('Cypress Automated Test Address Line 1');
        cy.get('input[id="Address_2"]').type('Cypress Automated Test Address Line 2');
        cy.get('input[id="City"]').type('Cypress Automated Test City');
        cy.get('input[id="State_province"]').type('Cypress Automated Test County');
        cy.get('input[id="Postal_code"]').type('SW1A 0AA');
        cy.contains('button', 'Continue').click();
        //User is now on the Can Families Choose Where Page
        //Assert correct options
        cy.contains('Yes, they can choose where');
        cy.should('contain', 'Yes, they can choose where');
        cy.contains('No, they cannot choose where');
        cy.should('contain', 'No, they cannot choose where');

    

    })

    it('AC2 Can Families Choose Where - Can only select one',function(){
        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG270_AC2_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="Address_1"]').type('Cypress Automated Test Address Line 1');
        cy.get('input[id="Address_2"]').type('Cypress Automated Test Address Line 2');
        cy.get('input[id="City"]').type('Cypress Automated Test City');
        cy.get('input[id="State_province"]').type('Cypress Automated Test County');
        cy.get('input[id="Postal_code"]').type('SW1A 0AA');
        cy.contains('button', 'Continue').click();
        //User is now on the Can Families Choose Where Page
        //Assert can only select one radio button option
        cy.get('input[id="Familychoice"]').check();
        cy.get('input[id="Familychoice2"]').should('not.be.checked')

        cy.get('input[id="Familychoice2"]').check();
        cy.get('input[id="Familychoice"]').should('not.be.checked')

    })

    
    it('AC3 Can Families Choose Where - Continue to Can children or young people use the service?',function(){
        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG270_AC3_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="Address_1"]').type('Cypress Automated Test Address Line 1');
        cy.get('input[id="Address_2"]').type('Cypress Automated Test Address Line 2');
        cy.get('input[id="City"]').type('Cypress Automated Test City');
        cy.get('input[id="State_province"]').type('Cypress Automated Test County');
        cy.get('input[id="Postal_code"]').type('SW1A 0AA');
        cy.contains('button', 'Continue').click();
        //User is now on the Can Families Choose Where Page
        cy.get('input[id="Familychoice"]').check();
        cy.contains('button', 'Continue').click();
        //Assert - should go to Can children and young people use the service
        cy.contains('Can children or young people use the service?');
        cy.should('contain', 'Can children or young people use the service?');


    })

    it('AC4 Can Families Choose Where - No selection made ?',function(){
        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG270_AC4_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="Address_1"]').type('Cypress Automated Test Address Line 1');
        cy.get('input[id="Address_2"]').type('Cypress Automated Test Address Line 2');
        cy.get('input[id="City"]').type('Cypress Automated Test City');
        cy.get('input[id="State_province"]').type('Cypress Automated Test County');
        cy.get('input[id="Postal_code"]').type('SW1A 0AA');
        cy.contains('button', 'Continue').click();
        //User is now on the Can Families Choose Where Page
        //User continues without making a selection
        cy.contains('button', 'Continue').click();
        //Assert - This should be an error condition
        cy.contains('You must select one option');
        cy.should('contain', 'You must select one option');


    })

    it('AC5 Can Families Choose Where - Back button',function(){
        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG270_AC4_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        cy.get('input[id="Address_1"]').type('Cypress Automated Test Address Line 1');
        cy.get('input[id="Address_2"]').type('Cypress Automated Test Address Line 2');
        cy.get('input[id="City"]').type('Cypress Automated Test City');
        cy.get('input[id="State_province"]').type('Cypress Automated Test County');
        cy.get('input[id="Postal_code"]').type('SW1A 0AA');
        cy.contains('button', 'Continue').click();
        //User is now on the Can Families Choose Where Page
        //User selects the Back Button
        cy.contains('Back').click();
                //Assert - should go to address page
                cy.contains('What is the address?');
                cy.should('contain', 'What is the address?');
 


    })

})