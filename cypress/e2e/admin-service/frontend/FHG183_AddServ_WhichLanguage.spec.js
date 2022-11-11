describe.skip('Add a Service Languages FHG-183',function(){
    
it('AC1 Which Language - Dropdown list of languages',function(){

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
    cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC1_' + n)
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
            //Assert user prompted to select a language

            cy.contains('Which language is the service offered in?');
            cy.should('contain', 'Which language is the service offered in?');

            cy.contains('Select a language');
            cy.should('contain', 'Select a language');



})



        it('AC2 Which Language - Language selected, proceeds Does Service cost money to use',function(){

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
            cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC2_' + n)
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
    

                    //Select A Language
        cy.get("#LanguageCode0.govuk-select").select("Tatar");
        cy.contains('button', 'Continue').click();

        //Assert takes user to Does the service cost money to use?

        cy.contains('Does the service cost money to use?');
        cy.should('contain', 'Does the service cost money to use?');
        
        
        
        })

        it('AC3 Which Language - Add more than one language',function(){

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
            cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC3_' + n)
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
        
                    //Language Page Select A Language
        cy.get("#LanguageCode0.govuk-select").select("Tatar");

                //Assert can add an additional Language
        cy.contains('button', 'Add another language').should('exist');

        cy.contains('button', 'Add another language').click();


        cy.get("#LanguageCode1.govuk-select").select("English");




        
        
        
        })

        it('AC4 Which Language - More than one language, proceeds Does Service cost money to use',function(){

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
            cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC4_' + n)
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
        
                    //Language Page Select A Language
        cy.get("#LanguageCode0.govuk-select").select("Tatar");

        cy.contains('button', 'Add another language').click();


        cy.get("#LanguageCode1.govuk-select").select("English");

        cy.contains('button', 'Continue').click();

        //Assert takes user to Does the service cost money to use?

        cy.contains('Does the service cost money to use?');
        cy.should('contain', 'Does the service cost money to use?');
        
        })

        it('AC5 Which Language - More than one language, Can Remove a Language',function(){

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
                cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC5_' + n)
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
            
                        //Language Page Select A Language
            cy.get("#LanguageCode0.govuk-select").select("Tatar");
    
            cy.contains('button', 'Add another language').click();
    
    
            cy.get("#LanguageCode1.govuk-select").select("English");
    
  
    
            //Assert Remove button available
    
            cy.contains('button', 'Remove').click();
            
            })

            it('AC6 Which Language - Back button',function(){

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
                cy.get('input[name="ServiceName"]').type('Cypress Automated Test FHG183_AC6_' + n)
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
            
                        //Language Page Select A Language

    
                        cy.contains('Back').click();
    
        //Assert Back button goes to Can people or young children use the service

        cy.contains('Can children or young people use the service?');
        cy.should('contain', 'Can children or young people use the service?');
    

            
            })
   

})