describe.skip('|FHG-274-Add a Service - How can people contact the service (Contact details)|',function(){
    it('AC 1,7,10 - Page content + select options + back button',function(){
        cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
         // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // options available and selectable
        cy.get('.govuk-checkboxes').contains('Email').click();
        cy.get('.govuk-checkboxes').contains('Telephone').click();
        cy.get('.govuk-checkboxes').contains('Website').click();
        cy.get('.govuk-checkboxes').contains('Text message').click();
        // back button
        cy.get('.govuk-back-link').click();
        cy.contains('Does the service cost money to use?');
    })
    it('AC 2,9 - Email validation ',function(){
        cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
        cy.get('.govuk-checkboxes').contains('Email').click();
        cy.contains('Email address').should('be.visible');
        cy.get('input#contact-by-email').should('be.visible');
        // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // enter invalid email address 
        cy.get('input#Email').click().clear().type('test email');
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('Please enter a valid email address');
        // enter valid email address 
        cy.get('input#Email').click().clear().type('test@email');
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('More details');
    })
     it('AC 3,8 - Telephone ',function(){
        cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
        cy.get('.govuk-checkboxes').contains('Telephone').click();
        cy.contains('Telephone number').should('be.visible');
        cy.get('input#contact-by-phone').should('be.visible');
         // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // enter invalid telephone number 
        cy.get('input#contact-by-phone').click().clear().type('testphonenumber');
        cy.get('.govuk-button').click();
        cy.contains('Please enter a valid phone number');
        // enter valid telephone number - do we need more validations ?
        cy.get('input#contact-by-phone').click().clear().type('02087873748');
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('More details');
    }) 
    it('AC 4 - Website',function(){
        cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
        cy.get('.govuk-checkboxes').contains('Website').click();
        cy.contains('Website').should('be.visible');
        cy.get('input#contact-by-website').should('be.visible');
        // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // enter valid website details
        cy.get('input#contact-by-website').click().clear().type('www.gov.uk');
        cy.get('.govuk-button').click();
        cy.contains('More details');
    }) 
    it('AC 5 - Text message ',function(){
       cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
        cy.get('.govuk-checkboxes').contains('Text message').click();
        cy.contains('Telephone number');
        cy.get('input#contact-by-text').should('be.visible');
         // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // enter invalid telephone number 
        cy.get('input#contact-by-text').click().clear().type('testphonenumber');
        cy.get('.govuk-button').click();
        cy.contains('Please enter a valid phone number');
        // enter valid telephone number - do we need more validations ?
        cy.get('input#contact-by-text').click().clear().type('02087873748');
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('More details');
    });
     it('AC 6 - multiple options selected',function(){
        cy.visit('/OrganisationAdmin/ContactDetails');
        //Assert page has all the text and fields visible
        cy.contains('How can people contact the service?');
        cy.contains('Select all that apply.');
         // no value entered
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-message').contains('You must select at least one option');
        // options available and selectable
        cy.get('.govuk-checkboxes').contains('Email').click();
         cy.get('input#Email').click().clear().type('test@email');
        cy.get('.govuk-checkboxes').contains('Telephone').click();
        cy.get('input#contact-by-phone').click().clear().type('02087873748');
        cy.get('.govuk-checkboxes').contains('Website').click();
        cy.get('input#contact-by-website').click().clear().type('www.gov.uk');
        cy.get('.govuk-checkboxes').contains('Text message').click();
        cy.get('input#contact-by-text').click().clear().type('02087873748');
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('More details');
         // back button
        cy.get('.govuk-back-link').click();
        cy.get('.govuk-checkboxes').contains('Email').click();
        cy.get('.govuk-button').contains('Continue').click();
        cy.contains('More details');
       
    })

});