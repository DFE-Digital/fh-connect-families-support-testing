describe('Consent page - FHG-2850', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword', false);
		
		// Navigate to a service page where a connection request can be provided.
		cy.navigateToElopMentoringServicePage();
		
		// Click Request a connection button
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
		
		cy.get('.app-button--inverted').click();
	})

	it('should have the correct content', ()=> {
		const expectedHeading = 'Permission to share details';
		const expectedSubHeading = 'Do you have permission to share their details?';
		const expectedStaticText = ['You must get permission from the people who need support to share their details.',
		'Those details include:', 'who to contact','ways to contact them','why they need help'];
		let actualStaticText = [];
		let actualRadioButtons = [];
		const expectedRadioButtons = ['Yes', 'No']

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check static text on the consent page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
		//check radio buttons heading
		cy.checkPageHeading('.govuk-fieldset__heading', expectedSubHeading);
		//check radio buttons text
		cy.getRadioButtonsAndCheckboxes('.govuk-radios__label', actualRadioButtons, expectedRadioButtons);
	})

	it('AC1,AC4 - should display contact in the family page when selected Yes', () => {
		const expectedContactPageHeading = 'Who should the service contact?';

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//click on Yes radio button
		cy.get('#consent-yes').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l',expectedContactPageHeading);
	})

	it('AC2,AC4 - should display cannot connetct family page when selected No', () => {
		const expectedCannotConnectPageHeading = 'Cannot request a connection';

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//click on No radio button
		cy.get('#consent-no').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l',expectedCannotConnectPageHeading);
	})

	it('AC3 - should continue the journey after error message is displayed', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Select whether you have permission to share details';
		const expectedContactPageHeading = 'Who should the service contact?';

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//Check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//click on Yes radio button
		cy.get('#consent-yes').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l',expectedContactPageHeading)
	})

	it('AC5 - clicking on back link should display safeguarding page', () => {
		const expectedSafeguardingPageHeading = 'Share our privacy statement';

		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('.govuk-heading-l', expectedSafeguardingPageHeading);
	})
})