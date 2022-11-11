describe.skip('Add a Service Can Children or Young People Use it FHG-271',function(){
    it('AC1 Can Children or Young People - Correct Options',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add or Remove Services Page
        cy.contains('Add a service').click();
        //Enter the Name of the Service Page
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC1_' + n)
        cy.get('.govuk-button').click();
        //Select the Support you offer placeholder page
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service (FHG-270)
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Can Children or Young People Use the Service (FHG-271)
        //Assert correct options
        cy.contains('Yes, they can use the service');
        cy.should('contain', 'Yes, they can use the service');
        cy.contains('No, they cannot use the service');
        cy.should('contain', 'No, they cannot use the service');

    

    })

    it('AC2 Can Children or Young People - Can select only one option',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add or Remove Services Page
        cy.contains('Add a service').click();
        //Enter the Name of the Service Page
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC2_' + n)
        cy.get('.govuk-button').click();
        //Select the Support you offer placeholder page
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service (FHG-270)
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Can Children or Young People Use the Service (FHG-271)
        //Assert can only select one option
        cy.get('input[id="Children"]').check();
        cy.get('input[id="Children-2"]').should('not.be.checked')

        cy.get('input[id="Children-2"]').check();
        cy.get('input[id="Children"]').should('not.be.checked')

    

    })

    it('AC3 Can Children or Young People - Yes, Then goes to Which language is the support offered in?',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add or Remove Services Page
        cy.contains('Add a service').click();
        //Enter the Name of the Service Page
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC3_' + n)
        cy.get('.govuk-button').click();
        //Select the Support you offer placeholder page
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service (FHG-270)
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Can Children or Young People Use the Service (FHG-271)
        //Select Yes
        cy.get('input[id="Children"]').check();
        //Select Age Range
        cy.get("#SelectedMinAge.govuk-select").select("1 year old");
        cy.get("#SelectedMaxAge.govuk-select").select("10 years old");
        cy.contains('button', 'Continue').click();
        //Assert user now goes to Which language is the support offered in

        cy.contains('Which language is the service offered in?');
        cy.should('contain', 'Which language is the service offered in?');

    })

    it('AC4 Can Children or Young People - Yes, Error if no age range given',function(){

        const num = Date.now();
        const n = num.toString();

        //landing page
        cy.visit('/');
        cy.get('.govuk-button.govuk-button--start').click();
        //Sign in to your account page
        cy.contains('button', 'Continue').click();
        //Add or Remove Services Page
        cy.contains('Add a service').click();
        //Enter the Name of the Service Page
        cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC4_' + n)
        cy.get('.govuk-button').click();
        //Select the Support you offer placeholder page
        cy.contains('button', 'Continue').click();
        //How Can Families Use the Service (FHG-270)
        cy.get('input[id="telephone"]').click();
        cy.contains('button', 'Continue').click();
        //Can Children or Young People Use the Service (FHG-271)
        //Select Yes
        cy.get('input[id="Children"]').check();
        //Select Continue without entering age range
        cy.contains('button', 'Continue').click();
        //Assert this produces an appropriate error response

        cy.contains('Please select age range');
        cy.should('contain', 'Please select age range');
})

it('AC5 Can Children or Young People - Yes, Error if only one age selected',function(){

    const num = Date.now();
    const n = num.toString();

    //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Add or Remove Services Page
    cy.contains('Add a service').click();
    //Enter the Name of the Service Page
    cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC5_' + n)
    cy.get('.govuk-button').click();
    //Select the Support you offer placeholder page
    cy.contains('button', 'Continue').click();
    //How Can Families Use the Service (FHG-270)
    cy.get('input[id="telephone"]').click();
    cy.contains('button', 'Continue').click();
    //Can Children or Young People Use the Service (FHG-271)
        //Select Yes
        cy.get('input[id="Children"]').check();
        //Select Age Range
        cy.get("#SelectedMinAge.govuk-select").select("1 year old");
        cy.contains('button', 'Continue').click();
    //Assert Error condition - only a from age was selected    
    cy.contains('Please select age range');
    cy.should('contain', 'Please select age range');
})

it('AC6 Can Children or Young People - Yes, Error on Invalid age range',function(){

    const num = Date.now();
    const n = num.toString();

    //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Add or Remove Services Page
    cy.contains('Add a service').click();
    //Enter the Name of the Service Page
    cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC6_' + n)
    cy.get('.govuk-button').click();
    //Select the Support you offer placeholder page
    cy.contains('button', 'Continue').click();
    //How Can Families Use the Service (FHG-270)
    cy.get('input[id="telephone"]').click();
    cy.contains('button', 'Continue').click();
    //Can Children or Young People Use the Service (FHG-271)
        //Select Yes
        cy.get('input[id="Children"]').check();
        //Select Age Range
        cy.get("#SelectedMinAge.govuk-select").select("10 years old");
        cy.get("#SelectedMaxAge.govuk-select").select("10 years old");
        cy.contains('button', 'Continue').click();
    //Assert Error condition - only a from age was selected    
    cy.contains('Please select valid age range');
    cy.should('contain', 'Please select valid age range');
})

it('AC7 Can Children or Young People - No, Then goes to Which language is the support offered in?',function(){

    const num = Date.now();
    const n = num.toString();

    //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Add or Remove Services Page
    cy.contains('Add a service').click();
    //Enter the Name of the Service Page
    cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC7_' + n)
    cy.get('.govuk-button').click();
    //Select the Support you offer placeholder page
    cy.contains('button', 'Continue').click();
    //How Can Families Use the Service (FHG-270)
    cy.get('input[id="telephone"]').click();
    cy.contains('button', 'Continue').click();
    //Can Children or Young People Use the Service (FHG-271)
    //Select No


    cy.get('input[id="Children-2"]').check();
    cy.contains('button', 'Continue').click();


            //Assert user now goes to Which language is the support offered in

            cy.contains('Which language is the service offered in?');
            cy.should('contain', 'Which language is the service offered in?');



})

it('AC8 Can Children or Young People - Back button returns to How Can Families Use Service',function(){

    const num = Date.now();
    const n = num.toString();

    //landing page
    cy.visit('/');
    cy.get('.govuk-button.govuk-button--start').click();
    //Sign in to your account page
    cy.contains('button', 'Continue').click();
    //Add or Remove Services Page
    cy.contains('Add a service').click();
    //Enter the Name of the Service Page
    cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG271_AC8_' + n)
    cy.get('.govuk-button').click();
    //Select the Support you offer placeholder page
    cy.contains('button', 'Continue').click();
    //How Can Families Use the Service (FHG-270)
    cy.get('input[id="telephone"]').click();
    cy.contains('button', 'Continue').click();
    //Can Children or Young People Use the Service (FHG-271)
    //Select No, and then Back


    cy.get('input[id="Children-2"]').check();
    cy.contains('Back').click();


            //Assert user now goes back to How Can Families Use the Service
            
            cy.contains('How can families use the service?');
            cy.should('contain', 'How can families use the service?');





})


})