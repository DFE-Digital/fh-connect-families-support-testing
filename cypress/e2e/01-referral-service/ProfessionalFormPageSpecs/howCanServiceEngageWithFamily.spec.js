describe('How can the service engage with the family - FHG-2880', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		//login
		cy.login('oneloginusername', 'oneloginpassword')
		cy.visit('https://test.connect-families-to-support.education.gov.uk/ProfessionalReferral/Safeguarding?serviceId=277')
		//Click Continue button on safeguarding page
		cy.get('.app-button--inverted').click();
		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-yes', 'div.govuk-grid-row button');
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
		//enter reason and continue 
		cy.reasonForConnectionRequestPage();
		//select email address checkbox
		cy.selectCheckBoxes('Email');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//enter a valid email address and continue 
		cy.enterTextAndContinue('.govuk-input', 'a@test.com', 'div.govuk-grid-row button');
	})

	it('AC6 - should have the correct content', ()=> {
		const expectedPageHeading = 'How can the service engage with this family?';
		const expectedStaticText = ['Let the service know the best way to engage with the family, such as:',
		'best time and day to contact', 
		'preferred method for contact',
		'communication needs such as an interpreter or textphone',
		'any restrictions on how they can send and receive calls or texts'];

		const expectedLabel = 'What do you want to tell the service?';
		const expectedHintText = 'You have 500 characters remaining';
		const previousPageHeading = 'What is the email address for James Bond?'
		let actualStaticText = [];

		//check page heading 
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//check static text 
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
		//check heading label on the form
		cy.checkTextOf('.govuk-label', expectedLabel);
		//check hint text
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', expectedHintText);
		//click on back link
		cy.clickBackLink();
		//check previous page heading
		cy.checkPageHeading('.govuk-heading-l', previousPageHeading)
		//check saved email in the text box
		cy.checkValueOfTextBox('.govuk-input', 'a@test.com');
	})

	it('AC1, AC5 - should navigate to check details page', ()=> {
		const expectedHeading = 'How can the service contact you for more details about this request?';
		const initialHintText = 'You have 500 characters remaining';
		const finalHintText = 'You have 464 characters remaining';

		//check hint text for character count with blank text box
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', initialHintText);
		//Enter text in the reason text area
		cy.get('#reason').type('Test service engage with this family');
		//check hint text for character count after entering the text
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', finalHintText);
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check page heading
		cy.checkPageHeading('h1', expectedHeading);
	})

	it('AC2, AC3 - display error message and exceeded character count', ()=> {
		const enteredText =	'Test connection request. '.repeat(21);
		const expectedHintText = 'You have 25 characters too many';
		const errorHeading = 'There is a problem';
		const errorMessage = 'How the service can engage with the family must be 500 characters or less';
		const expectedHeading = 'How can the service contact you for more details about this request?';

		//Enter text in the reason text area
		cy.get('#reason').type(enteredText);
		//check hint text for character count
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', expectedHintText);
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//check hint text for character count after error message
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', expectedHintText);
		//Enter text in the reason text area
		cy.get('#reason').clear().type('Test connection request');
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check page heading
		cy.checkPageHeading('h1', expectedHeading);
	})

	it('AC4 - display error message on submitting a blank text box', ()=> {
		const expectedHintText = 'You have 500 characters remaining';
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter how best to engage with this family';

		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//check hint text for character count after error message
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', expectedHintText);
	})
})
