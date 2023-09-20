Cypress.Commands.add('managelogin', (olusername, olpassword, acceptTerms) => {
    cy.session([olusername, olpassword, acceptTerms], () => {

        cy.visit(`https://${Cypress.env('username')}:${Cypress.env('password')}@signin.integration.account.gov.uk/?prompt=login`, { failOnStatusCode: false })
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.get('.govuk-grid-column-two-thirds > .govuk-button').click()
        //cy.get('.govuk-button').click()
        cy.get('#sign-in-button').click()
        cy.get('#email').type(`${Cypress.env(olusername)}`)
        cy.get('form > .govuk-button').click()
        cy.get('#password').type(`${Cypress.env(olpassword)}`)
        cy.get('form > .govuk-button').click()
        if (acceptTerms) {
            cy.contains('Continue').click()
        }
    })
})


// dfe admin - Welcome page 
Cypress.Commands.add('dfeAdminWelcomePage', () => {
    cy.get('.govuk-grid-column-two-thirds').contains('Department for Education')
    cy.title().should('eq', 'Welcome - Manage family support services and accounts - GOV.UK')
    cy.contains('Add account permissions to manage family support services and manage connection requests.')
    cy.contains('View and remove account permissions to manage family support services or manage connection requests.')
    //cy.contains('Add a service to the directory.')
    //cy.contains('View, change or delete services shown in the directory.')
    //cy.contains('Add a family hub to the directory.')
    //cy.contains('View, change or delete family hubs shown in the directory.')
    //cy.contains('Activate an LA before you create its accounts, services and family hubs.')
    // cy.contains('Add a service to the directory.')
    //cy.contains('View, change or delete services shown in the directory.')
    cy.contains('Add an organisation before adding permissions for its users.')
    cy.contains('View, change or delete existing organisations.')
    cy.contains('Upload an excel spreadsheet.')
}) 

// LA Manager - Welcome page 
Cypress.Commands.add('LAManWelcomePage', (LA) => {
    cy.get('.govuk-grid-column-two-thirds').contains(`${LA}`)
    cy.title().should('eq', 'Welcome - Manage family support services and accounts - GOV.UK')

    cy.contains('Add permissions')
    cy.contains('Manage permissions')

    cy.contains('Activate a local authority')
        .should('not.exist');
    cy.contains('Add a VCS service')
        .should('not.exist');
    cy.contains('Manage VCS services')
        .should('not.exist');

    cy.contains('Add an organisation')
    cy.contains('Manage organisations')
})

// Upload excel sheet 
Cypress.Commands.add('uploadSheet', () => {
    cy.get('[data-testid="upload-spreadsheet"]').click()
    cy.contains('This file upload only supports .xlsm, .xlsx and .xls spreadsheets.')
    cy.get('#FileUpload_FormFile').selectFile('cypress/fixtures/Local Authority Data Capture v7.0 test samples-01.xlsm')

    cy.get('input.govuk-button').click()
    cy.contains('You have successfully uploaded your data')
})

// manage VCS Organisation link
Cypress.Commands.add('manVcsLink', () => {
    cy.contains('Manage VCS organisations').click()
    cy.contains('Manage organisations')
    cy.contains('View, change or delete existing organisations.')
    cy.title().should('eq', 'Manage organisations - Manage family support services and accounts - GOV.UK')
})

Cypress.Commands.add('laManVcsLink', () => {
    cy.contains('Manage organisations').click()
    cy.contains('Manage organisations')
    cy.contains('View, change or delete existing organisations.')
    cy.title().should('eq', 'Manage organisations - Manage family support services and accounts - GOV.UK')
})

Cypress.Commands.add('Signout', (serviceName) => {
    cy.visit(`https://${Cypress.env('username')}:${Cypress.env('password')}@signin.integration.account.gov.uk/?prompt=login`, { failOnStatusCode: false })

    if (serviceName === 'manage') {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/account/signout');
        cy.contains('You have signed out');
    } else {
        cy.visit('https://test.connect-families-to-support.education.gov.uk/account/signout');
        cy.contains('Connect families to support')
    };

});

// Select add permissions
Cypress.Commands.add('addPermissions', () => {
    cy.get('#add-permission').click()
})

// Type of user page 
Cypress.Commands.add('typeOfUserPage', (permissionType) => {
    cy.title().should('eq', 'Who are you adding permissions for? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1', 'Who are you adding permissions for?')
    cy.contains('Someone who works for a local authority')
    cy.contains('Someone who works for a voluntary and community sector organisation')
    // select persmission type
    if (permissionType === 'la') {
        cy.get(`[data-testid="role-for-organisation-type-${permissionType}"]`).click();
    } else if (permissionType === 'vcs') {
        cy.get(`[data-testid="role-for-organisation-type-${permissionType}"]`).click();
    }
    cy.get('#buttonContinue').click()
})

// LA manager -  Type of user page 
Cypress.Commands.add('LAManTypeOfUserPage', (LA, permissionType) => {
    cy.title().should('eq', 'Who are you adding permissions for? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1', 'Who are you adding permissions for?')
    cy.contains(`Someone who works for ${LA}`)
    cy.contains(`Someone who works for a voluntary and community sector organisation ${LA}`)
    // select persmission type
    if (permissionType === 'la') {
        cy.get(`[data-testid="role-for-organisation-type-${permissionType}"]`).click();
    } else if (permissionType === 'vcs') {
        cy.get(`[data-testid="role-for-organisation-type-${permissionType}"]`).click();
    }
    cy.get('#buttonContinue').click()
})


// what do they need to do - LA
Cypress.Commands.add('typeOfUserLA', (selection) => {
    cy.title().should('eq', 'What do they need to do? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1','What do they need to do?')
    cy.contains('Add and manage services, family hubs and accounts')
    cy.contains('Make connection requests to voluntary and community sector services')

    // user selects checkboxes 1 , 2 or both
    if (selection === '1') {
        cy.get('[data-testid="LaManager"]').check();
    } else if (selection === '2') {
        cy.get('#LaProfessional').check();
    }
    else if (selection == 'both') {
        cy.get('[data-testid="LaManager"]').check();
        cy.get('#LaProfessional').check();
    }
    cy.get('#buttonContinue').click()
})
// what do they need to do - VCS
Cypress.Commands.add('typeOfUserVCS', (selection) => {
    cy.title().should('eq', 'What do they need to do? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1','What do they need to do?')
    cy.contains('An organisation should only have one person with permissions to view and manage connection requests.')
    cy.contains('Add and manage services')
    cy.contains('View and respond to connection requests')

    // user selects checkboxes 1 , 2 or both
    if (selection === '1') {
        cy.get('[data-testid="VcsManager"]').check();
    } else if (selection === '2') {
        cy.get('#VcsProfessional').check();
    }
    else if (selection == 'both') {
        cy.get('[data-testid="VcsManager"]').check();
        cy.get('#VcsProfessional').check();
    }
    cy.get('#buttonContinue').click()
})
//la route - which local authority do they work for ?
Cypress.Commands.add('laWhichLA', (searchString) => {
    cy.title().should('eq', 'Which local authority do they work for? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1','Which local authority do they work for?')

    cy.get('#LaOrganisationName').click()
    cy.get('#LaOrganisationName').type(searchString)
    cy.get('#LaOrganisationName__option--0').click()
    cy.get('#buttonContinue').click()
})
//vcs route - which local authority do they work for ?
Cypress.Commands.add('vcsWhichLA', (searchString) => {
    cy.title().should('eq', 'Which local authority area do they work in? - Manage family support services and accounts - GOV.UK')
    cy.checkPageHeading('h1','Which local authority area do they work in?')

    cy.get('#LaOrganisationName').click().clear()
    cy.get('#LaOrganisationName').type(searchString)
    cy.get('#LaOrganisationName__option--0').click()
    cy.get('#buttonContinue').click()
})
// What's their email address?
Cypress.Commands.add('email', (emailAdd) => {
    cy.title().should('eq', "What's their email address? - Manage family support services and accounts - GOV.UK")
    cy.checkPageHeading('h1',"What's their email address?")
    cy.contains('They will use this to sign in to their account.')
    cy.get('#emailAddress').click().clear().type(emailAdd)
    cy.get('#buttonContinue').click()
})
// What's the user's full name?
Cypress.Commands.add('fullName', (fullName) => {
    cy.title().should('eq', "What's their full name? - Manage family support services and accounts - GOV.UK")
    cy.checkPageHeading('h1',"What's their full name?")
    cy.get('#fullName').click().clear().type(fullName)
    cy.get('#buttonContinue').click()
})

// Check account details page
Cypress.Commands.add('checkAnswerPage', () => {
    cy.contains('Check account details')
    cy.contains('Confirm details').click()

})

// Check confirmation page 
Cypress.Commands.add('confirmationPage', (name) => {
    cy.get('.govuk-panel.govuk-panel--confirmation').contains('Permissions added')
    cy.contains('What happens next')
    cy.contains(`We've emailed ${name}:`)
    cy.contains('to let them know their permissions have been set up')
    cy.contains('a link to the service, where they can create their password and set up two-factor authentication')
    //
    cy.contains('Go to homepage').click()
    cy.contains('Add account permissions to manage family support services and manage connection requests.')

})

// Select manage permissions link
Cypress.Commands.add('managePermissionsLink', () => {
    cy.get(':nth-child(5) > :nth-child(2) > .govuk-heading-s > a').click()
})

//Manage permissions
Cypress.Commands.add('managePermissionsPage', () => {
    cy.contains('Manage user permissions')
    cy.contains('Edit or delete user permissions.')
    cy.contains('Filter users')
})

//email filter 
Cypress.Commands.add('emailFilter', (email) => {
    cy.get(':nth-child(2) > :nth-child(1) > .govuk-form-group > .govuk-fieldset > #userName').click().clear().type(`${email}`)
    cy.get('#filters-component > .govuk-button').click()
})

// Delete permissions link
Cypress.Commands.add('deletePermissionsLink', () => {
    cy.get(':nth-child(1) > .govuk-table__cell--numeric').contains('Delete').click()
    cy.contains('This will remove all permissions that have been given to')
})
// Delete permissions options page
Cypress.Commands.add('deletePermissionsOptionPage', (user, selection) => {
    cy.contains(`Do you want to delete ${user}'s permissions?`)
    cy.contains(`This will remove all permissions that have been given to ${user}.`)
    if (selection === 'Yes') {
        cy.get('#remove-user').check();
    } else if (selection === 'No') {
        cy.get('#remove-user-2').check();
    }
    cy.get('#buttonContinue').click()
})

Cypress.Commands.add('deletePermissionsConfirmPage', (user) => {
    cy.contains(`You have deleted ${user}'s permissions`)
})
// Filters check box - Type of user
Cypress.Commands.add('typeOfUserFilter', (selection) => {

    // user selects checkboxes 1 , 2 or both
    if (selection === 'la') {
        cy.get('#isLaUser').check();
    } else if (selection === 'vcs') {
        cy.get('#isVcsUser').check();
    }
    else if (selection == 'both') {
        cy.get('#isLaUser').check();
        cy.get('#isVcsUser').check();
    }
    cy.get('#filters-component > .govuk-button').click()
})

// which organisation do they work for ?
Cypress.Commands.add('whichOrgVcs', (searchString) => {
    cy.contains('Which organisation do they work for?')
    cy.contains("Their organisation must be in the directory for it to appear here. If it's not, you can add an organisation.")
    cy.title().should('eq', 'Which organisation do they work for? - Manage family support services and accounts - GOV.UK')
    cy.get('#VcsOrganisationName').click().clear().type(searchString)
    cy.get('#VcsOrganisationName__option--0').click()
    cy.get('#buttonContinue').click()
})

