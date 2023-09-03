describe('text message page - FHG-2876', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.login('oneloginusername', 'oneloginpassword');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
		cy.get('.app-button--inverted').click();
		//click on Yes radio button and continue on privacy statement page
		cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-yes', 'div.govuk-grid-row button');
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
		//enter reason and continue on reason for connection request page
		cy.reasonForConnectionRequestPage();
		//select text message checkbox
		cy.selectCheckBoxes('Text message');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
	})

	it('AC1, AC2, AC3 - verify content and navigation to next page', ()=> {
		const pageHeading = 'What telephone number should the service use to text James Bond?';
		const expectedLabel = 'UK telephone number';
		const enteredTelephoneNumber = '+]4((4)]- 808- 157-(0192)';
		const nextPageHeading = 'How can the service engage with this family?';

		//check page heading
		cy.checkPageHeading('h1', pageHeading);
		//check label text
		cy.checkTextOf('.govuk-label', expectedLabel);
		//enter a valid telephone number and continue 
		cy.enterTextAndContinue('.govuk-input', enteredTelephoneNumber, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('AC4 - should display error message when no telephone is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a UK telephone number';
		const nextPageHeading = 'How can the service engage with this family?';
		const enteredTelephoneNumber = '01656 861 384 ext. 12345';
	
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
		//enter a valid telephone number and continue 
		cy.enterTextAndContinue('.govuk-input', enteredTelephoneNumber, 'div.govuk-grid-row button');
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading)
	})

	it('AC5 - should display error message when an invalid telephone number is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192';
		const invalidNumbers = ['+1 212-555-1234', '0746260ign1234', '+448081570192$', 'try hostel:01656861389, Friends house:01656861389'];
		invalidNumbers.forEach((invalidNumber) => {
			//enter an invalid telephone number and continue 
			cy.enterTextAndContinue('.govuk-input', invalidNumber, 'div.govuk-grid-row button');
			//check error banner
			cy.checkErrorText(errorHeading, errorMessage);
		});
	})

	it('AC6 - should navigate contact methods page using back link', ()=> {
		const expectedPageHeading = 'How can the service contact James Bond?';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('h1', expectedPageHeading);
	})
})
