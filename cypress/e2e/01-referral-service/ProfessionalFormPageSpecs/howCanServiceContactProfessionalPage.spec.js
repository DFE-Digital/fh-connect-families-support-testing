describe('How can the service contact you for more details about this request page - FHG-3669', () => {
	beforeEach(() => {
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
		//select all checkboxes
		cy.selectCheckBoxes('Email');;
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//enter a valid email address and continue 
		cy.enterTextAndContinue('.govuk-input', 'a@test.com', 'div.govuk-grid-row button');
		//Enter text in the reason text area
		cy.get('#reason').type('Test service engage with this family');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
	})

	it('AC1, AC8 - verify content and select email only button', () => {
		const expectedPageHeading = 'How can the service contact you for more details about this request?';
		const nextPageHeading = 'Check the details you entered before requesting a connection';
		const previousPageHeading = 'How can the service engage with this family?';
		const expectedHintText = 'Select one option.';
		let actualRadioButtons = [];
		const expectedRadioButtons = ['Email only', 'Telephone and email'];
		const expectedEmailConditionalHint = 'The service can contact me through my account email.';

		//check page heading
		cy.checkPageHeading('h1', expectedPageHeading);
		//check hint text
		cy.checkTextOf('#contact-hint', expectedHintText);
		//check radio buttons
		cy.getRadioButtonsAndCheckboxes('.govuk-radios__label', actualRadioButtons, expectedRadioButtons);
		//click on Email only radio button
		cy.get('#email').click();
		//check email hint conditional text
		cy.checkTextOf('#conditional-email', expectedEmailConditionalHint);
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check next page heading
		cy.checkPageHeading('h1', nextPageHeading);
		//Click on back links to professional contact details page
		cy.clickBackLink();
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('h1', previousPageHeading);
	})

	it('AC2, AC3, AC4 - Select Telephone and email radio button', () => {
		const expectedTelephoneAndEmailConditionalHint = 'The service can contact me by telephone and account email.';
		const nextPageHeading = 'Check the details you entered before requesting a connection';
		const enteredTelephoneNumber = '+]4((4)]- 808- 157-(0192)';

		//click on Telephone and email radio button
		cy.get('#telephone-and-email').click();
		//check Telephone and email hint conditional text
		cy.checkTextOf('#telephone-and-email-hint', expectedTelephoneAndEmailConditionalHint);
		//check label on telephone number text box
		cy.checkTextOf('.govuk-radios__conditional .govuk-label', 'Telephone number');
		//check empty telephone number text box
		cy.checkTextOf('#contact-by-phone', '');
		//enter a valid Telephone number and continue 
		cy.enterTextAndContinue('.govuk-input', enteredTelephoneNumber, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('h1', nextPageHeading);
	})

	it('AC5 - should display error message when continued with out entering a telephone number', () => {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a UK telephone number';
		const nextPageHeading = 'Check the details you entered before requesting a connection';
		const enteredTelephoneNumber = '077 88 11 22 33';

		//click on Telephone and email radio button
		cy.get('#telephone-and-email').click();
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//enter a valid Telephone number and continue 
		cy.enterTextAndContinue('.govuk-input', enteredTelephoneNumber, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('h1', nextPageHeading);
	})

	it('AC6 - should display error message when an invalid telephone number is entered', () => {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192';
		const invalidNumbers = ['+1 212-555-1234', '0746260ign1234', '+448081570192$', 'try hostel:01656861389, Friends house:01656861389'];

		//click on Telephone and email radio button
		cy.get('#telephone-and-email').click();
		invalidNumbers.forEach((invalidNumber) => {
			//enter an invalid telephone number and continue 
			cy.enterTextAndContinue('.govuk-input', invalidNumber, 'div.govuk-grid-row button');
			//check error banner
			cy.checkErrorText(errorHeading, errorMessage);
		});
	})

	it('AC7 - should display error message when no radio button is selected', () => {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Select how the service can contact you';

		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
	})
})