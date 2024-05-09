describe('Reason for connection request page - FHG-2860', ()=> {
	let enteredContactName = 'James Bond';
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword', false);

		// Navigate to a service page where a connection request can be provided.
		cy.navigateToElopMentoringServicePage();
		
		// Click Request a connection button
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();

		cy.get('.app-button--inverted').click();
		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('[id="radio-True"]', 'div.govuk-grid-row button');
		
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', enteredContactName, 'div.govuk-grid-row button');
	})

	it('AC7 - should have the correct content', ()=> {
		const expectedPageHeading = 'Why are you requesting a connection?';
		const expectedStaticText = ['Use this to give the service details about the people who need support, for example:',
		'why they need help', 
		'other organisations currently working with them',
		'if anyone has mental health conditions or special educational needs or disabilities',
		'important things to note such as domestic abuse or difficulty paying for food or bills',
		'Please give enough information for the service to review this request. The service may need to contact you for more information or to do their own assessment.'];

		const expectedLabel = 'Enter details';
		const expectedHintText = 'You have 500 characters remaining';
		let actualStaticText = [];
		const expectedWarningText = 'Warning\n        You should only share the name of the contact who has given permission. Do not share the names or details of other people.';

		//check page heading on reason for request for support page
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//check static text on the reason for request for support page
		cy.getTextOfElements('main#main-content p, main#main-content li', actualStaticText, expectedStaticText);
		//check heading label on the form
		cy.checkTextOf('.govuk-label', expectedLabel);
		//check hint text
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', expectedHintText);
		//check warning text
		cy.checkTextOf('.govuk-warning-text__text', expectedWarningText);
		//click on back link
		cy.clickBackLink();
		//check saved contact name in the text box
		cy.checkValueOfTextBox('.govuk-input', enteredContactName);
	})

	it('AC1, AC6 - should navigate to How can the service contact page', ()=> {
		const expectedHeading = 'How can the service contact James Bond?';
		const initialHintText = 'You have 500 characters remaining';
		const finalHintText = 'You have 477 characters remaining';

		//check hint text for character count with blank text box
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', initialHintText);
		//Enter text in the reason text area
		cy.get('#reason').type('Test connection request');
		//check hint text for character count after entering the text
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', finalHintText);
		//click continue button on reason for connection page
		cy.get('div.govuk-grid-row button').click();
		//check page heading
		cy.checkPageHeading('.govuk-fieldset__heading', expectedHeading);
	})

	it('AC2, AC3 - display error message and exceeded character count', ()=> {
		const enteredText =	'Test connection request. '.repeat(21);
		const expectedHintText = 'You have 25 characters too many';
		const errorHeading = 'There is a problem';
		const errorMessage = 'Reason for the connection request must be 500 characters or less';
		const expectedHeading = 'How can the service contact James Bond?';

		//Enter text in the reason text area
		cy.get('#reason').type(enteredText);
		//check hint text for character count
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', expectedHintText);
		//click continue button on reason for connection page
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//check hint text for character count after error message
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', expectedHintText);
		//Enter text in the reason text area
		cy.get('#reason').clear().type('Test connection request');
		//click continue button on reason for connection page
		cy.get('div.govuk-grid-row button').click();
		//check page heading
		cy.checkPageHeading('.govuk-fieldset__heading', expectedHeading);
	})

	it('AC4 - display error message on submitting a blank text box', ()=> {
		const expectedHintText = 'You have 500 characters remaining';
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter details about the people who need support';

		//click continue button on reason for connection page
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//check hint text for character count after error message
		cy.checkTextOf('.govuk-hint:not(.govuk-visually-hidden)', expectedHintText);
	})

	it('AC5 - should display family contact page on clicking back link', ()=> {
		const expectedPageHeading = 'Who should the service contact?';
		
		//Enter text in the reason text area
		cy.get('#reason').type('Test Test');
		//click on back link
		cy.clickBackLink();
		//check saved contact name in the text box
		cy.checkValueOfTextBox('.govuk-input', enteredContactName);
		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
	})

})