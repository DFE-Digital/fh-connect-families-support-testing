describe('Confirmation page - FHG-2882', ()=> {
	beforeEach(()=> {
		cy.visit('/');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		//Click Request a connection button
		cy.get('a:contains("Request a connection")').click();
		//stub-login
		cy.stubLogin('LaDualRole@example.com');
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
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//Enter text in the reason text area
		cy.get('#reason').type('Test service engage with this family');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//click on Telephone and email radio button
		cy.get('#telephone-and-email').click();
		//enter a telephone number and continue
		cy.enterTextAndContinue('.govuk-input', '01132 347 902', 'div.govuk-grid-row button');
		//click Confirm details button
		cy.contains('Confirm details and send request').click();
	})

	it('AC1 - display confirmation page with correct content', ()=> {
		const expectedHeading = 'Connection request sent';
		const expectedSubHeading = 'What happens next';
		const expectedText = ["You have given the family's details to the service. This request has been added to your dashboard and you will receive an email confirmation.",
		"The service will review your request. They may contact you for more details about the family.",
		"You will be notified by email when they accept or decline the request. You should receive a response within 5 working days."];
		let actualText = [];

		//check panel text
		cy.checkPanelText(expectedHeading);
		//check sub heading
		cy.contains('h2', expectedSubHeading);
		//check page content 
		cy.getTextOfElements('main#main-content p, main#main-content li', actualText, expectedText);
	})
})
