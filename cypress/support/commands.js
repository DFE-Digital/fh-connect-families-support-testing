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
  // Welcome page - landing
  Cypress.Commands.add('welcomePage',(serviceType)=>{
    cy.contains('Add a service')
    cy.contains('Manage your services')
    if (serviceType === 'add') {
    cy.get('div:nth-of-type(1) > .govuk-heading-m > a').click();
  } else if (serviceType === 'manage'){
     cy.get('div:nth-of-type(2) > .govuk-heading-m > a').click();
  }
  })
  //
  //******* Add services ******
  Cypress.Commands.add('addService',(serviceName)=>{
    cy.contains('What is the name of the service?')
    cy.get('input#service-name').click().clear().type(`${serviceName}`)
    cy.get("form[method='post'] > .govuk-button").click()
    cy.wait(500)
  })
 // Select support services
 //organisation - bccsource:Organisation ,support - bccprimaryservicetype:38,children - bccagegroup:37,longtermhealthconditions- bccusergroup:56,testconditions - bccusergroupTestDelete:56
  Cypress.Commands.add('selectSupport',(serviceType)=>{
    cy.contains('Select the support you offer')
    for (const [key, value] of Object.entries(serviceType)) {
    cy.get(`input#${key}`).check(value);
    }
    cy.contains('Continue').click();
})  
  // Select ServiceDeliveryType
   Cypress.Commands.add('serviceDeliveryType',(deliveryType)=>{
    cy.contains('How can families use the service?')
    cy.get(`input#${deliveryType}`).check();
    cy.get('.govuk-button').click()
   })
   // Who for
   Cypress.Commands.add('whoFor',(selection)=>{
    cy.contains('Can children or young people use the service?')
    if (selection === 'Yes') {
    cy.get('input#Children').check();
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

   //pay for service
   Cypress.Commands.add('payForService',(selection)=>{
    cy.contains('Does the service cost money to use?')
    if (selection === 'Yes') {
    cy.get('input#pay-service').check();
  } else if (selection === 'No'){
     cy.get('input#pay-service-2').click();
  }
    cy.get('.govuk-button').click()
   })
   // contact details
    Cypress.Commands.add('contactDetails',(selection,category,data)=>{
    cy.contains('How can people contact the service?')
     cy.get('.govuk-checkboxes').contains(`${selection}`).click();
     cy.get(`input#contact-by-${category}`).click().clear().type(`${data}`);
    cy.get('.govuk-button').click()
   })
   // service description
   Cypress.Commands.add('moreDetails',(data)=>{
    cy.contains('More details')
    cy.get('textarea#with-hint').click().clear().type(`${data}`)
    cy.get('.govuk-button').click()
   })
   // check details
   Cypress.Commands.add('checkDetails',(serviceName)=>{
    cy.contains('Check the service details')
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains(`${serviceName}`)
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