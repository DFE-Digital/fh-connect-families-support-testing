// ***********************************************
/* eslint-disable max-len */


// before each hook with clearing cookies + uncaught exception override
beforeEach(() => {
  cy.clearCookies();
    Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
  // start page - admin-ui
  Cypress.Commands.add('startPage',()=>{
    cy.contains('Add a service to the local support directory')
    cy.get('.govuk-button--start').click()
  })
  // Sign in page
  Cypress.Commands.add('signInPage',()=>{
    cy.contains('Sign in to your account')
    cy.get('.govuk-button').click()
  })
  // Choose Organisation
  Cypress.Commands.add('chooseOrganisation',(selection)=>{
    cy.contains('Which type of organisation')
    cy.get("select#SelectedOrganisation").select(`${selection}`)
    cy.get('.govuk-button').click()

  })
  // Welcome page - landing
  Cypress.Commands.add('welcomePage',(serviceType,councilName)=>{
    cy.contains('Add a service')
    cy.contains('Manage your services')
    cy.contains(`${councilName}`)
    if (serviceType === 'add') {
    cy.get('div:nth-of-type(1) > .govuk-heading-m > a').click();
  } else if (serviceType === 'manage'){
     cy.get('div:nth-of-type(2) > .govuk-heading-m > a').click();
  }
  })
  //******* Add services ******
  Cypress.Commands.add('addService',(serviceName)=>{
    cy.contains('What is the name of the service?')
    cy.get('input#service-name').click().clear().type(`${serviceName}`)
    cy.get("form[method='post'] > .govuk-button").click()
    cy.wait(500)
  })
  Cypress.Commands.add('serviceType1',(serviceType)=>{
    cy.contains('What support does the service offer?')
    for (const [key, value] of Object.entries(serviceType)) {
    cy.get(`[data-testid="${key}"]`).check(value);
    }
})
 Cypress.Commands.add('serviceType2',(serviceType)=>{
    cy.contains('What support does the service offer?')
    for (const [key, value] of Object.entries(serviceType)) {
    cy.get(`[data-testid="${key}"]`).check(value);
    }
    cy.contains('Continue').click();
})



 // Select support services
 //organisation - bccsource:Organisation ,support - bccprimaryservicetype:38,children - bccagegroup:37,longtermhealthconditions- bccusergroup:56,testconditions - bccusergroupTestDelete:56
  Cypress.Commands.add('selectSupport',(serviceType)=>{
    cy.contains('Select the support you offer')
    for (const [key, value] of Object.entries(serviceType)) {
    cy.get(`[data-testid="${key}"]`).check(value);
    }
    cy.contains('Continue').click();
})  
  // Select ServiceDeliveryType
   Cypress.Commands.add('serviceDeliveryType',(TaxonomySelection)=>{
    cy.contains('How can families use the service?')
     for (const [key, value] of Object.entries(TaxonomySelection)) {  
        cy.get(`[data-testid="${key}"]`).check(value);
      }
     cy.get('.govuk-button').click()
   })
   // Address 
   Cypress.Commands.add('addAddress',()=>{
      cy.get('[data-testid="address-one"]').click().clear().type('address line 1')
      cy.get('[data-testid="address-two"]').click().clear().type('address line 2')
      cy.get('[data-testid="town-city"]').click().clear().type('random town')
      cy.get('[data-testid="post-code"]').click().clear().type('M6 5UJ')
      cy.get('.govuk-button').click()
   })
   // OfferAtFamiliesPlace
   Cypress.Commands.add('OfferAtFamiliesPlace',(selection)=>{
    cy.contains('Can families choose where they use the service?')
      if (selection === 'Yes') {
      cy.get('[data-testid="yes-select"]').check();
    } else if (selection === 'No'){
      cy.get('[data-testid="no-select"]').click();
    }
      cy.get('.govuk-button').click()
    })

   // Who for
   Cypress.Commands.add('whoFor',(selection,minAge,maxAge)=>{
    cy.contains('Can children or young people use the service?')
    if (selection === 'Yes') {
    cy.get('input#Children').check();
    cy.get(`[data-testid="age-min"]`).select(`${minAge}`)
    cy.get(`[data-testid="age-max"]`).select(`${maxAge}`)
  } else if (selection === 'No'){
     cy.get('input#Children-2').click();
  }
    cy.get('.govuk-button').click()
   })

   // What Language
   Cypress.Commands.add('whatLanguage',(selection)=>{
    cy.contains('Which language is the service offered in?')
      //Select A Language
    cy.get("#LanguageCode0.govuk-select").select(`${selection}`);
    cy.contains('Continue').click()
   })
   // 
   Cypress.Commands.add('addLanguage',(selection1,selection2)=>{
    cy.contains('Which language is the service offered in?')
    cy.get("#LanguageCode0.govuk-select").select(`${selection1}`);
    cy.contains('button', 'Add another language').click();
      //Select A Language
    cy.get("#LanguageCode1.govuk-select").select(`${selection2}`);
    cy.contains('Continue').click()
   })

   //pay for service
   Cypress.Commands.add('payForService',(selection,amount,per)=>{
    cy.contains('Does the service cost money to use?')
    if (selection === 'Yes') {
    cy.get('input#pay-service').check().wait(500);
    cy.get('input#Cost').click().clear().type(`${amount}`)
    cy.get(`[value="${per}"]`).click()
  } else if (selection === 'No'){
     cy.get('input#pay-service-2').click();
  }
    cy.get('.govuk-button').click()
   })
   // multiple contact details
    Cypress.Commands.add('multiContactDetails',(selection,category,data,selection1,category1,data1,selection2,category2,data2,selection3,category3,data3)=>{
    cy.contains('How can people contact the service?')
      cy.get('.govuk-checkboxes').contains(`${selection}`).click();
      cy.get(`input#contact-by-${category}`).click().clear().type(`${data}`);
        cy.get('.govuk-checkboxes').contains(`${selection1}`).click();
      cy.get(`input#contact-by-${category1}`).click().clear().type(`${data1}`);
        cy.get('.govuk-checkboxes').contains(`${selection2}`).click();
      cy.get(`input#contact-by-${category2}`).click().clear().type(`${data2}`);
        cy.get('.govuk-checkboxes').contains(`${selection3}`).click();
      cy.get(`input#contact-by-${category3}`).click().clear().type(`${data3}`);
    cy.get('.govuk-button').click()
   })
   // contact details
   Cypress.Commands.add('contactDetails',(ContactSelection,data)=>{
     cy.contains('How can people contact the service?')
    for (const [key, value] of Object.entries(ContactSelection)) {
    cy.get(`[id="ContactSelection${key}"]`).check(value);
    cy.get(`[id="contact-by-${value}"]`).type(`${data}`)
    }
    cy.contains('Continue').click();
   })
   // service description
   Cypress.Commands.add('moreDetails',(data)=>{
    cy.contains('More details')
    cy.get('textarea#with-hint').click().clear().type(`${data}`)
    cy.get('.govuk-button').click()
   })
   // check details
   Cypress.Commands.add('checkDetails',(serviceName,supportType)=>{
    cy.contains('Check the service details')
    cy.get('.govuk-summary-list').contains(`${serviceName}`)
    cy.get('.govuk-summary-list').contains(`${supportType}`)
    cy.contains('Confirm details').click()
   })
   // confirmation page
   Cypress.Commands.add('serviceAdded',()=>{
    cy.contains('Service added')
    cy.contains('Go to home page').click()
    cy.contains('Add a service')
   })
   

  //******* manage services ******

//view services
  Cypress.Commands.add('ViewServices',(serviceName)=>{
    cy.contains('Manage your services').click()
    cy.get('.govuk-grid-column-full').contains(`${serviceName}`)
});
//manage services
  Cypress.Commands.add('deleteServices',(serviceID)=>{
    cy.contains('Manage your services')
    cy.get('.govuk-table__row').contains(`${serviceName}`).contains('Delete').click()
});
// delete service
   Cypress.Commands.add('deleteService',(serviceID)=>{
    cy.contains('Manage your services')
    cy.get(`[data-testid="${serviceID}-delete"]`).click();
    
   })
   // delete confirmation
   Cypress.Commands.add('deleteConfirm',(selection)=>{
    cy.contains('Deleting a service')
     if (selection === 'Yes') {
    cy.get('[value="Yes, I want to delete it"]').check();
    cy.get('.govuk-button').click()
    cy.contains('You have deleted the service')
  } else if (selection === 'No'){
     cy.get('[value="No, I want to keep it"]').check();
      cy.get('.govuk-button').click()
     cy.contains('You have not deleted the service')
  }
    cy.get('.govuk-button').click()
    cy.contains('Add a service to the directory.')
   })
// edit service
Cypress.Commands.add('editService',(serviceID)=>{
  cy.contains('Manage your services')
  cy.get(`[data-testid="${serviceID}-view"]`).click();
  // cy.get('.govuk-fieldset__heading').contains(`${serviceID}`)
})

// save and proceed
Cypress.Commands.add('saveDetails',()=>{
  cy.get('[data-testid="button-save"]').click()
  cy.contains('You have saved these details')
  cy.contains('Any changes will show in the directory straight away.')
  cy.get('[data-testid="homepage-button"]').click()
  cy.contains('Add a service to the directory.')
})
// delete test data service 
Cypress.Commands.add('deleteTestData',(serviceId)=>{
  // cy.visit('/OrganisationAdmin/Welcome')
  // cy.get('[data-testid="manage-services"]').click()
  cy.get(`[data-testid="${serviceId}-delete"]`).click();
  cy.get('[value="Yes, I want to delete it"]').check();
  cy.get('.govuk-button').click()

})
// make changes on confirm page
Cypress.Commands.add('editTitle',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(1) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('checkDetailsEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.contains('Save details').click()
  cy.contains('Go to home page').click()
})
Cypress.Commands.add('typeOfServiceEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('serviceDeliveryTypeEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(3) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('whoForEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('whatLanguageEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('payForServiceEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('contactDetailsEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
})
Cypress.Commands.add('moreDetailsEdit',(serviceId)=>{
  cy.contains(`${serviceId}`)
  cy.get('div:nth-of-type(8) > .govuk-summary-list__actions > .govuk-link').click()
})




// custom command to overwrite baseUrl if we are using localhost etc
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const space = Cypress.env('SPACE');
  const basicAuthEnabled = Cypress.env(`${space}_BASIC_AUTH`) === true ||
    Cypress.env(`${space}_BASIC_AUTH`) === 'true';

  options = options || {};

  if (basicAuthEnabled) {
    options.auth = {
      username: Cypress.env(`${space}_BASIC_USERNAME`),
      password: Cypress.env(`${space}_BASIC_PASSWORD`),
    };
  }

  return originalFn(url, options);
});


//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })