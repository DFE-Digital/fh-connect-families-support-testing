 // referral Service - landing page
 Cypress.Commands.add('refServLanding',()=>{
    cy.contains('Connect families to voluntary and community services')
    cy.get('[data-testid="button-start"]').click();
  })
// sign in page
Cypress.Commands.add('signOnPage',()=>{
    cy.contains('Sign in to your account')
    cy.get('.govuk-button').contains('Continue').click()
})
// search by post code 
Cypress.Commands.add('searchbypostcode', (postcode) => {
    cy.get('[data-testid="radio-postcode"]').click();
    cy.get('[data-testid="postcode-value"]').type(postcode);
    cy.get('[data-testid="button-search"]').click();
})
// search results page
Cypress.Commands.add('searchResults',(postcode)=>{
    cy.contains(`Showing results for ${postcode}`)
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
    cy.get('[data-testid="testservice-paid-0to13yrs"]').should("exist");
  } else if (serviceType === 'free'){
    cy.get('[data-testid="checkbox-free"]').click();
    cy.get('[data-testid="testservice-free-10to15yrs"]').should("exist");
  }else if (serviceType === 'both'){
    cy.get('[data-testid="checkbox-paid"]').click();
    cy.get('[data-testid="checkbox-free"]').click();
    cy.get('[data-testid="testservice-free-10to15yrs"]').should("exist");
    cy.get('[data-testid="testservice-paid-0to13yrs"]').should("exist");
  }
})
// clear filters
Cypress.Commands.add('clearFilters',()=>{
    cy.contains('Clear filters').click()
})
// no results page 
Cypress.Commands.add('noResultsPage',()=>{
  cy.contains('No results found')
  cy.contains('Try searching again using a different postcode')
  cy.get('[data-testid="searchusingdifferentpostcodelink"]').click()
  cy.contains('Find support from local services by name or postcode')
})
// delivery type filter
Cypress.Commands.add('deliveryType',(deliverySelection)=>{
   for (const [key, value] of Object.entries(deliverySelection)) {
    cy.get(`[data-testid="checkbox-${key}"]`).check(value);
    }
    cy.get('[data-testid="button-apply-filters"]').click();
})
// location 
Cypress.Commands.add('locationSelection',()=>{
    cy.get('[data-testid="checkbox-location"]').check();
    cy.get('[data-testid="button-apply-filters"]').click();
})
// language
Cypress.Commands.add('languageSelection',(selection)=>{
  cy.get('[data-testid="select-language"]').select(selection);
    cy.get('[data-testid="button-apply-filters"]').click();
})