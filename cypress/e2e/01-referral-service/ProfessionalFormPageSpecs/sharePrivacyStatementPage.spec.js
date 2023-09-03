describe('Share our privacy statement page - FHG-3671', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
		cy.get('.app-button--inverted').click();
	})

	it('AC1,AC4 - verify the content and select yes button', () => {
		const expectedPageHeading = 'Share our privacy statement';
		const expectedSubHeading = 'Have you shared our privacy statement with the family?';
		let actualStaticText = [];
		const expectedStaticText = ['You must share our privacy statement (opens in new tab) with the family before you can make a request.',
			'The privacy statement tells them more about:', 'what data we collect about them and why we need it',
			'who is responsible for data within the service', 'how we protect, process and store their data',
			'how long we keep their data', 'their personal data rights'];
		let actualRadioButtons = [];
		const expectedRadioButtons = ['Yes', 'No'];
		const expectedNextPageHeading = 'Permission to share details';

		//check page heading
		cy.checkPageHeading('h1', expectedPageHeading);
		//check static text on the consent page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
		//check radio buttons heading
		cy.checkPageHeading('.govuk-fieldset__heading', expectedSubHeading);
		//check radio buttons text
		cy.getRadioButtonsAndCheckboxes('.govuk-radios__label', actualRadioButtons, expectedRadioButtons);
		//click on Yes radio button
		cy.get('#shared-privacy-yes').click();
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l', expectedNextPageHeading);
	})

	it('AC2,AC4 - cannot connect to service page should be displayed when selected No', () => {
		const expectedNextPageHeading = 'Cannot connect family to service';

		//click on No radio button
		cy.get('#shared-privacy-no').click();
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l', expectedNextPageHeading);
	})

	it('AC3 - Should display error message when option is not selected', () => {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Select whether you have shared our privacy statement with the family';
		const expectedNextPageHeading = 'Permission to share details';

		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//Check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//click on Yes radio button
		cy.get('#shared-privacy-yes').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check contact in the family page heading
		cy.checkPageHeading('.govuk-heading-l', expectedNextPageHeading)
	})

	it('AC5 - share our privacy statement link should open in a new page', () => {
		//check privacy statement link
		cy.contains('share our privacy statement (opens in new tab)').invoke('removeAttr', 'target').click();
		cy.url().should('contain', 'https://test.connect-families-to-support.education.gov.uk/ProfessionalReferral/PrivacyStatement');
	})

	it('AC6 - clicking on back link should display safeguarding page', () => {
		const expectedSafeguardingPageHeading = 'Do not use this service to report safeguarding concerns';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('.govuk-heading-l', expectedSafeguardingPageHeading);
	})
})