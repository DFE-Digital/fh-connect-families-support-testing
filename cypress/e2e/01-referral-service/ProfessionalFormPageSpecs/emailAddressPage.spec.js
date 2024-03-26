describe('What is the email address page - FHG-2866', ()=> {
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
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
		//enter reason and continue on reason for connection request page
		cy.reasonForConnectionRequestPage();
		//select email address checkbox
		cy.selectCheckBoxes('Email');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
	})

	it('AC1 - verify content and navigation to next page', ()=> {
		const pageHeading = 'What is the email address for James Bond?';
		const expectedLabel = 'Email address';
		const enteredEmailAddress = 'test@abc.com';
		const nextPageHeading = 'How can the service engage with the people who need support?';

		//check email address page heading
		cy.checkPageHeading('h1', pageHeading);
		//check label text
		cy.checkTextOf('.govuk-label', expectedLabel);
		//enter a valid email address and continue 
		cy.enterTextAndContinue('.govuk-input', enteredEmailAddress, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('AC2 - should display error message when no email is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter an email address in the correct format, like name@example.com';
		const nextPageHeading = 'How can the service engage with the people who need support?';
		const enteredEmailAddress = 'test@abc.com';
	
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//enter a valid email address and continue 
		cy.enterTextAndContinue('.govuk-input', enteredEmailAddress, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading)
	})

	it('AC3 - should display error message when an invalid email is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter an email address in the correct format, like name@example.com';
		const invalidEmails = ['test@', 'test123', '@abc.com'];
		invalidEmails.forEach((invalidEmail) => {
			//enter an invalid email address and continue 
			cy.enterTextAndContinue('.govuk-input', invalidEmail, 'div.govuk-grid-row button');
			//check error banner
			cy.checkErrorText(errorHeading, errorMessage);
		});
	})

	it('AC4 - should navigate contact methods page using back link', ()=> {
		const expectedPageHeading = 'How can the service contact James Bond';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('h1', expectedPageHeading);
	})
})