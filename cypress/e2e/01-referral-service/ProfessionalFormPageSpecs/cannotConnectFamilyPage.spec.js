describe('Cannot connect family to service page - FHG-2853, FHG-3725', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword', false);
		
		// Navigate to a service page where a connection request can be provided.
		cy.navigateToElopMentoringServicePage();

		// Click Request a connection button
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();

		cy.get('.app-button--inverted').click();
	})

	it('FHG-2853-AC1 - should have the correct content', ()=> {
		const expectedHeading = 'Cannot request a connection';
		const expectedStaticText = ['Please get permission from the people who need support to share their details.',
		'You can come back and request a connection to the service once you have permission.'];
		let actualStaticText = [];

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//click on No radio button and continue on consent page
		cy.selectRadioButtonAndContinue('[id="radio-False"]', 'div.govuk-grid-row button');
		//check heading on cannot connect page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the cannot connect page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
	})

	it('FHG-3725-AC1 - should have the correct content', () => {
		const expectedHeading = 'Cannot request a connection';
		const expectedStaticText = ['Please share our privacy statement with the people who need support.',
			'You can come back and request a connection to the service once you have shared the privacy statement.'];
		let actualStaticText = [];

		//click on No radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-False"]', 'div.govuk-grid-row button');
		//check heading on cannot connect page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the cannot connect page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
	})
})