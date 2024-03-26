describe('How can the service contact family member page - FHG-2862', ()=> {
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
	})

	it('AC1, AC6, AC9 - select all checkboxes and navigate back', ()=> {
		const expectedPageHeading = 'How can the service contact James Bond';
		const expectedEmailPageHeading = 'What is the email address for James Bond?';
		const expectedReasonPageHeading = 'Why are you requesting a connection?';
		const expectedHintText = 'Select all that apply.';
		const expectedCheckboxes = ['Email', 'Telephone', 'Text message', 'Letter'];
		
		let actualCheckboxes = [];
		let actualCheckedBoxes = [];

		//check page heading
		cy.checkPageHeading('.govuk-fieldset__heading', expectedPageHeading);
		//check hint text
		cy.checkTextOf('.govuk-hint', expectedHintText);
		//checkbox details
		cy.getRadioButtonsAndCheckboxes('.govuk-checkboxes__label', actualCheckboxes, expectedCheckboxes);
		//select all checkboxes
		cy.selectAllCheckboxes();
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check email address page heading
		cy.checkPageHeading('.govuk-heading-l', expectedEmailPageHeading);
		//click back link on email address page
		cy.clickBackLink();
		//verify checkbox selection is preserved
		cy.checkTextOfAllCheckedCheckboxes(actualCheckedBoxes, expectedCheckboxes);
		//click back link on how can service contact page
		cy.clickBackLink();
		//check page heading on reason for request for support page
		cy.checkPageHeading('.govuk-heading-l', expectedReasonPageHeading);
	})

	it('AC2, AC3, AC4, AC5 - select one checkbox and navigate to next page', ()=> {
		const checkboxDetailsMap = new Map([
			['Email', 'What is the email address for James Bond?'], 
			['Telephone', 'What telephone number should the service use to call James Bond?'], 
			['Text message', 'What telephone number should the service use to text James Bond?'], 
			['Letter', 'What is the address for James Bond?']
			]);
		const checkboxDetailsArray = Array.from(checkboxDetailsMap);

		checkboxDetailsArray.forEach(([label, nextPageHeading]) => {
			//select checkbox
			cy.selectCheckBoxes(label);
			//click continue button
			cy.get('div.govuk-grid-row button').click();
			//check next page heading
			cy.checkPageHeading('h1', nextPageHeading);
			//click back link to go to how can service contact page
			cy.clickBackLink();
			//uncheck all the selected checkboxes
			cy.uncheckSelectedCheckboxes();
		})
	})

	it('AC7 - select multiple checkboxes and navigate to respective pages', ()=> {
		const checkboxes = ['Text message','Telephone','Email'];
		const pageDetailsMap = new Map([
			['What is the email address for James Bond?', 'test@a.com'],
			['What telephone number should the service use to call James Bond?', '07745 111456'],
			['What telephone number should the service use to text James Bond?', '0112 345 1167']
			]);
		const pageDetailsArray = Array.from(pageDetailsMap);	

		//select checkboxes
		checkboxes.forEach((checkbox)=> {
			cy.selectCheckBoxes(checkbox);
		});

		pageDetailsArray.forEach(([heading, inputText])=> {
			//click continue button 
			cy.get('div.govuk-grid-row button').click();
			//check page heading
			cy.checkPageHeading('h1', heading);
			//enter text
			cy.get('.govuk-input').type(inputText);
		});
	})

	it('AC8 - should display error message when no checkbox is selected', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Select a contact method';
		const nextPageHeading = 'What is the email address for James Bond?';
	
		//click continue button on family contact page
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);	
		//select checkbox
		cy.selectCheckBoxes('Email');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check next page heading
		cy.checkPageHeading('h1', nextPageHeading);
	})
})