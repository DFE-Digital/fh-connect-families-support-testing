describe('Family contact page - FHG-2858', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword', false);
		cy.visit('/');
		cy.refServLanding();
		cy.searchbypostcode('e1 2en');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
		cy.get('.app-button--inverted').click();
		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('#radio-True', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#radio-True', 'div.govuk-grid-row button');
	})

	it('should have the correct content', ()=> {
		const expectedHeading = 'Who should the service contact?';
		const expectedHintText = 'This person must be 16 or over.';
		const expectedLabel = 'Full name';

		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		//check hint text
		cy.checkTextOf('.govuk-hint', expectedHintText);
		//check label text
		cy.checkTextOf('.govuk-label', expectedLabel);
	})

	it('AC1 - should navigate to reason for request for support page', ()=> {
		const expectedPageHeading = 'Why are you requesting a connection?';
		const enteredContactName = 'James bond';

		//enter a contact name and continue on family contact page
		cy.enterTextAndContinue('.govuk-input', enteredContactName, 'div.govuk-grid-row button');
		//check page heading on reason for request for support page
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//click on back link
		cy.clickBackLink();
		//check saved contact name in the text box
		cy.checkValueOfTextBox('.govuk-input', enteredContactName);
	})

	it('AC2 - should display error message when clicked on continue with no name entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a full name';
		const expectedPageHeading = 'Why are you requesting a connection?';
		const enteredContactName = 'James bond';
	
		//click continue button on family contact page
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//enter a contact name and continue on family contact page
		cy.enterTextAndContinue('.govuk-input', enteredContactName, 'div.govuk-grid-row button');
		//check page heading on reason for request for support page
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
	})

	it('AC3 - text box should accept additional spaces, hyphens, dashes, brackets, special characters, numbers and symbols', ()=> {
		const expectedPageHeading = 'Why are you requesting a connection?';
		const enteredContactName = "Test   -_ (  Test) 167 %$!\"�^&*;:@',.<>#~}{[]|�" ;

		//enter a contact name
		cy.enterTextAndContinue('.govuk-input', enteredContactName, 'div.govuk-grid-row button');
		//check page heading on reason for request for support page
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//click on back link
		cy.clickBackLink();
		//check saved contact name in the text box
		cy.checkValueOfTextBox('.govuk-input', enteredContactName);
	})

	it('AC4 - clicking on back link should display consent page', ()=> {
		const expectedConsentPageHeading = 'Permission to share details';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('.govuk-heading-l', expectedConsentPageHeading);
	})
})