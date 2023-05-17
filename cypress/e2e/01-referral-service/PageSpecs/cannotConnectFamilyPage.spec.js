describe('Cannot connect family to service page - FHG-2853', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		//Click Request a connection button
		cy.get('a:contains("Request a connection")').click();
		//Click Continue button on safeguarding page
		cy.get('.app-button--inverted').click();
		//click on No radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-2', 'div.govuk-grid-row button');
	})

	it('AC1 - should have the correct content', ()=> {
		const expectedHeading = 'Cannot connect family to service';
		const expectedStaticText = ['Please get permission from the family to give their details to the service.',
		'You can come back and request a connection to the service once you have permission.'];
		let actualStaticText = [];

		//check heading on cannot connect page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the cannot connect page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
	})
})