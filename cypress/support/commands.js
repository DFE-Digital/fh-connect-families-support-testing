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
  Cypress.Commands.add('homepage',()=>{
     cy.contains('This is a prototype used for research');
        cy.get('input#password').click().type('family');
        cy.get('.govuk-button').click();
        cy.get('.govuk-heading-xl').contains('Family experience');
        cy.contains('Legacy prototypes');
  })
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
  // Add service 
  Cypress.Commands.add('addService',(serviceName)=>{
    cy.contains('What is the name of the service?')
    cy.get('input#service-name').click().clear().type(`${serviceName}`)
    cy.get("form[method='post'] > .govuk-button").click()
    cy.wait(500)
  })
  // Select support services
  Cypress.Commands.add('selectSupport',(supportName)=>{
    cy.contains('Select the support you offer')
    cy.get(`input#${supportName}`).check();
    cy.get('.govuk-button').click()
    cy.contains('How can families use the service?')
});
  // Select ServiceDeliveryType
   Cypress.Commands.add('ServiceDeliveryType',(deliveryType)=>{
    cy.contains('How can families use the service?')
    cy.get(`input#inperson`).check();
   })
  


  //manage services
  Cypress.Commands.add('ViewServices',(serviceID)=>{
    cy.contains('Manage your services')
    cy.get(`data-testid#view-service${serviceID}`).click();
    //
   
});
//manage services
  Cypress.Commands.add('deleteServices',(serviceID)=>{
    cy.contains('Manage your services')
    cy.get(`data-testid="delete-service${serviceID}"`).click();
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