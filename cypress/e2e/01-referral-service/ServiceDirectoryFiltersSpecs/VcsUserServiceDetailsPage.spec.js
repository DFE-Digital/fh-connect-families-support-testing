describe('4230 - service details page for vcs user', () => {
    it('Request a connection button is not available', () => {
        cy.visit('/', { failOnStatusCode: false });
        cy.login('oneloginvcsusername', 'oneloginpassword', false);
        cy.visit('/');
        cy.get('.dfe-header__navigation-item').last().click();
        cy.searchbypostcode('bs14 8at');
        //Select the first result on search results page
        cy.get('ul.search-results>li:nth-child(1) a').click();
        cy.contains('Request a connection').should('not.exist');
    })
})