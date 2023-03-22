 // referral Service - landing page
 Cypress.Commands.add('refServLanding',()=>{
    cy.contains('Connect families to support')
    cy.get('.govuk-button.govuk-button--start').click();
  })
// sign in page
Cypress.Commands.add('signOnPage',()=>{
    cy.contains('Sign in to your account')
    cy.get('.govuk-button').contains('Continue').click()
})
// search by post code 
Cypress.Commands.add('searchbypostcode', (postcode) => {
   
    cy.get('input#Postcode').click().type(postcode);
    cy.get('[data-testid="button-search"]').click();
    // cy.contains('Services, groups and activities in this area')
})
// search results page
Cypress.Commands.add('searchResults',(postcode)=>{
    cy.contains(`search results for: ${postcode}`)
})
// filter commands
Cypress.Commands.add('ageFilter',(selection)=>{
    cy.get('[data-testid="checkbox-children"]').click();
    cy.get('[data-testid="select-children"]').select(`${selection}`);
    cy.get('[data-testid="button-apply-filters"]').click();
})
Cypress.Commands.add('costFilter',(serviceType)=>{
    if (serviceType === 'paid') {
    cy.get('[data-testid="checkbox-paid"]').click();
    cy.get('[data-testid="button-apply-filters"]').click();
    cy.get('.search-results').contains('£').should('exist')
    cy.get('.search-results').contains('Free').should('not.exist')
  } else if (serviceType === 'free'){
    cy.get('[data-testid="checkbox-free"]').click();
    cy.get('[data-testid="button-apply-filters"]').click();
    cy.get('.search-results').contains('£').should('not.exist')
    cy.get('.search-results').contains('Free').should('exist')
   
  }else if (serviceType === 'both'){
    cy.get('[data-testid="checkbox-paid"]').click();
    cy.get('[data-testid="checkbox-free"]').click();
    cy.get('[data-testid="button-apply-filters"]').click();
    cy.get('.search-results').contains('Free').should('exist')
  }
  
})
// clear filters
Cypress.Commands.add('clearFilters',()=>{
    cy.contains('Clear filters').click()
})
//show hide filters mobile
Cypress.Commands.add('showHideFiltersMob',()=>{
  cy.get('[data-testid="show-filters-button"]').click()
})
Cypress.Commands.add('returnToResults',()=>{
  cy.get('[data-testid="return-to-results-link"]').click()
})
// no results page 
Cypress.Commands.add('noResultsPage',()=>{
  cy.contains('No results found')
  cy.contains('Sorry, there are no activities, groups or services listed in your area yet.')
  cy.get('[data-testid="back-button"]').click()
  cy.contains('Search for services by postcode')
})
// delivery type filter
Cypress.Commands.add('deliveryType',(deliverySelection)=>{
   for (const [key, value] of Object.entries(deliverySelection)) {
    cy.get(`[data-testid="checkbox-${key}"]`).check(value);
    }
    cy.get('[data-testid="button-apply-filters"]').click();
})
// activities 
Cypress.Commands.add('activitiesSelection',(activities)=>{
    cy.get(`[data-testid="${activities}"]`).check();
    cy.get('[data-testid="button-apply-filters"]').click();
    
})
// language
Cypress.Commands.add('languageSelection',(selection)=>{
  cy.get('[data-testid="select-language"]').select(selection);
    cy.get('[data-testid="button-apply-filters"]').click();
})
// mobile filter 
Cypress.Commands.add('mobOpenCloseFilters',()=>{
  cy.get('[data-testid="show-filters-button"]').should('be.visible')
  cy.get('[data-testid="show-filters-button"]').click()
  cy.get('[data-testid="button-apply-filters"]').should('be.visible')
    
    })
Cypress.Commands.add('accessibilityPage',()=>{
  cy.contains('Accessibility Statement')
  cy.contains('How accessible this website is')
  cy.contains('Feedback and contact information')
  cy.contains('Reporting accessibility problems with this website')
  cy.contains('Enforcement procedure')
  cy.contains("Technical information about this website’s accessibility")
  cy.contains('Compliance status')
  cy.contains("What we\’re doing to improve accessibility")
  cy.contains('Preparation of this accessibility statement')
  // back link
  cy.get('.govuk-back-link').click()
  cy.contains('Connect families to support');

})
Cypress.Commands.add('cookiesPageContent',()=>{
    // cy.contains("This service puts small files (known as 'cookies') onto your computer. These cookies are used to:");
    // cy.contains('Change your cookie settings')
    // cy.contains('Do you want to accept analytics cookies?')
   // back link
  cy.get('.govuk-back-link').click()
  cy.contains('Connect families to support');

  })
  // feedback page
  Cypress.Commands.add('feedbackPage',()=>{
    cy.contains("The purpose of this survey is to get your feedback on the ‘Connect Families to Support' website.")
    // back link
  cy.get('.govuk-back-link').click()
  cy.contains('Connect families to support');
  })
  // terms and conditions page
  Cypress.Commands.add('termsandconditionsPage',()=>{
    cy.contains('Terms and conditions')
    cy.contains('Who we are')
    cy.contains('Connect families to support is managed by the Department for Education. The Department for Education will be referred to as ‘we’ from now on.')
    cy.contains('Using Connect families to support')
    cy.contains('Linking to Connect families to support')
    // back link
    cy.get('.govuk-back-link').click()
    cy.contains('Connect families to support');
  })
  // contact us page 
Cypress.Commands.add('contactUsPage',()=>{
  cy.contains('Contact us')
  cy.contains('Email')
  cy.contains("connect-support-for-your-family.service@education.gov.uk")
  cy.contains("We aim to respond within 5 working days.")
  // back link
   cy.get('.govuk-back-link').click()
  cy.contains('Connect families to support');
  })
  // feedback link
    Cypress.Commands.add('feedbackLinkBanner',()=>{
      cy.get('.govuk-phase-banner__text').contains('This is a new service – your feedback will help us to improve it.')
      cy.get('.govuk-phase-banner__text > a').should("have.attr", "href").and("include", "https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_eKgvRcn8vp4QtTM");
    })
  // feedback footer link
  Cypress.Commands.add('feedbackFooterLink',()=>{
    cy.get('[data-testid="feedback-link"]').should("have.attr", "href").and("include", "https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_eKgvRcn8vp4QtTM");
  })
