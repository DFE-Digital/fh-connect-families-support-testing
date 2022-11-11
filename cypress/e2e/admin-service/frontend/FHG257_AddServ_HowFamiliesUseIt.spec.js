describe.skip('Add A Service - How can Families Use Service FHG-257',function(){
    it('AC1 How Can Families Use the Service - Correct Options',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC1_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //Assert on correct page and the expected options are available
        cy.contains('How can families use the service?');
        cy.should('contain', 'How can families use the service?');
        cy.contains('Select all that apply.');
        cy.should('contain', 'Select all that apply.');
        cy.contains('In Person');
        cy.should('contain', 'In Person');
        cy.contains('Online');
        cy.should('contain', 'Online');
        cy.contains('Telephone');
        cy.should('contain', 'Telephone');



    })

    it('AC2 How Can Families Use the Service - In Person Only Selected',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC2_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.get('input[id="inperson"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to address page
        cy.contains('What is the address?');
        cy.should('contain', 'What is the address');
    

    })

    it('AC3 How Can Families Use the Service - Online Only Selected',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC3_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.get('input[id="online"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to Can children and young people use the service
        cy.contains('Can children or young people use the service?');
        cy.should('contain', 'Can children or young people use the service?');
    

    })

    it('AC4 How Can Families Use the Service - Telephone Only Selected',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC4_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.contains('button', 'Continue').click();
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to Can children and young people use the service
        cy.contains('Can children or young people use the service?');
        cy.should('contain', 'Can children or young people use the service?');
    

    })

    it('AC5 How Can Families Use the Service - Online and Telephone Selected',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC5_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.get('input[id="online"]').click();
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to Can children and young people use the service
        cy.contains('Can children or young people use the service?');
        cy.should('contain', 'Can children or young people use the service?');
    

    })

    it('AC6 How Can Families Use the Service - In Person and Online Selected',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC6_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.get('input[id="inperson"]').click();
        cy.get('input[id="online"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to address page
        cy.contains('What is the address?');
        cy.should('contain', 'What is the address?');
    

    })

    it('AC7 How Can Families Use the Service - All Options',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC7_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.get('input[id="inperson"]').click();
        cy.get('input[id="online"]').click();
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Assert - should go to address page
        cy.contains('What is the address?');
        cy.should('contain', 'What is the address?');
    

    })

    it('AC8 How Can Families Use the Service - Back Button',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add and Remove Services Page
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC8_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service 
        cy.contains('Back').click();        
                //Assert on correct page and the expected options are available
                cy.contains('Select the support you offer');
                cy.should('contain', 'Select the support you offer');

    

    })

    it('AC9 How Can Families Use the Service - Option Selection Required',function(){

        const num = Date.now();
        const n = num.toString();

        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        cy.contains('button', 'Continue').click();
        cy.contains('Add a service').click();
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG257_AC9_' + n)
        cy.get('.govuk-button').click();
        cy.contains('button', 'Continue').click();
        cy.contains('button', 'Continue').click();
        //Assert - invalid option must be selected
        cy.contains('You must select one or more options');
        cy.should('contain', 'You must select one or more options');

    

    })


})