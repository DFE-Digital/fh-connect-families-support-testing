describe('Cannot connect family to service page - FHG-2853, FHG-3725', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
		cy.get('.app-button--inverted').click();
	})

	it('FHG-2853-AC1 - should have the correct content', ()=> {
		const expectedHeading = 'Cannot connect family to service';
		const expectedStaticText = ['Please get permission from the family to give their details to the service.',
		'You can come back and request a connection to the service once you have permission.'];
		let actualStaticText = [];

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
		//click on No radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-no', 'div.govuk-grid-row button');
		//check heading on cannot connect page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the cannot connect page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
	})

	it('FHG-3725-AC1 - should have the correct content', () => {
		const expectedHeading = 'Cannot connect family to service';
		const expectedStaticText = ['Please share our privacy statement with the family to make a request using their data.',
			'You can come back and request a connection to the service once you have shared the privacy statement.'];
		let actualStaticText = [];

		//click on No radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('#shared-privacy-no', 'div.govuk-grid-row button');
		//check heading on cannot connect page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the cannot connect page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
	})
})