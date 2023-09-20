describe('Check the details page - FHG-2884 FHG-3670', ()=> {
	beforeEach(()=> {
		const enteredAddress = new Map([
			['AddressLine1', '1 Test Street'],
			['TownOrCity', 'Bristol'],
			['Postcode', 'BS1 2AD']
		]);

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
		cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-yes', 'div.govuk-grid-row button');
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
		//enter reason and continue 
		cy.reasonForConnectionRequestPage();
		//select all checkboxes
		cy.selectAllCheckboxes();;
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//enter a valid email address and continue 
		cy.enterTextAndContinue('.govuk-input', 'a@test.com', 'div.govuk-grid-row button');
		//enter a valid telephone number
		cy.enterTextAndContinue('.govuk-input', '0113 234 5678', 'div.govuk-grid-row button');
		//enter a valid text message number
		cy.enterTextAndContinue('.govuk-input', '07800980765', 'div.govuk-grid-row button');
		//enter a valid address
		enteredAddress.forEach((text, id)=> {
			cy.enterText(`#${id}`, text);
		})
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
	})

	it('AC1,AC2 - verify content and connection submit button on check details page', ()=> {
		const expectedPageHeading = 'Check the details you entered before requesting a connection';
		const expectedSubHeading = 'Now request a connection';
		const nextPageHeading = 'Connection request sent';
		const expectedContent = {
			'Shared privacy statement': 'Yes',
			'Permission to share details': 'Yes',
			'Name of contact': 'James Bond',
			'Reason for request for support': 'Test connection request',
			'Contact methods': 'Email, Telephone, Text message, Letter',
			'Email': 'a@test.com',
			'Telephone': '0113 234 5678',
			'Text': '07800980765',
			'Address': '1 Test StreetBristolBS1 2AD',
			'How to engage with the family': 'Test service engage with this family',
			'How the service can contact you': `Email: ${Cypress.env('oneloginusername')}\n                        Telephone: 01132 347 902`
			};

		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//check sub heading
		cy.get('#main-content > .govuk-grid-row > .govuk-grid-column-two-thirds > .govuk-heading-m').should('have.text', expectedSubHeading);		
		//check details
		cy.checkRequestDetails(expectedContent);
		//check Confirm details button
		cy.contains('Confirm details and send request').click();
		//check next page heading
		cy.checkPageHeading('h1', nextPageHeading);
	})

	it('AC3 - select change link to amend permission to share details', ()=> {
		const expectedPageHeading = 'Permission to share details';
		const nextPageHeading = 'Check the details you entered before requesting a connection';

		//Click on change link
		cy.clickOnChangeLinkFor('Permission to share details');
		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//click on Yes radio button
		cy.get('#consent-yes').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check the page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('FHG-3670-AC2 - select change link to amend Shared privacy statement details', () => {
		const expectedPageHeading = 'Share our privacy statement';
		const nextPageHeading = 'Check the details you entered before requesting a connection';

		//Click on change link
		cy.clickOnChangeLinkFor('Shared privacy statement');
		//check page heading
		cy.checkPageHeading('.govuk-heading-l', expectedPageHeading);
		//click on Yes radio button
		cy.get('#shared-privacy-yes').click();
		//click continue button on consent page
		cy.get('div.govuk-grid-row button').click();
		//check the page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('AC3 - select change links on other details', ()=> {
		const pages = [
			{ 
				changeLinkText: 'Name of contact',
				expectedPageHeading: 'Who should the service contact in the family?',
				element: '.govuk-input',
				enteredText: 'James B'
			},
			{ 
				changeLinkText: 'Reason for request for support',
				expectedPageHeading: 'Reason for the connection request',
				element: '#reason',
				enteredText: 'Reason for requesting the support'
			},
			{ 
				changeLinkText: 'Email',
				expectedPageHeading: 'What is the email address for James B?',
				element: '.govuk-input',
				enteredText: 'abc@test.com'
			},
			{ 
				changeLinkText: 'Telephone',
				expectedPageHeading: 'What telephone number should the service use to call James B?',
				element: '.govuk-input',
				enteredText: '0113 245 6781'
			},
			{ 
				changeLinkText: 'Text',
				expectedPageHeading: 'What telephone number should the service use to text James B?',
				element: '.govuk-input',
				enteredText: '07800980766'
			},
			{ 
				changeLinkText: 'Address',
				expectedPageHeading: 'What is the address for James B?',
				element: '#AddressLine1',
				enteredText: '2 Test Street'
			},
			{ 
				changeLinkText: 'How to engage with the family',
				expectedPageHeading: 'How can the service engage with this family?',
				element: '#reason',
				enteredText: 'Test how service engages with family'
			},
			//FHG-3670 AC1 - check professional contact details
			{
				changeLinkText: 'How the service can contact you',
				expectedPageHeading: 'How can the service contact you for more details about this request?',
				element: '#contact-by-phone',
				enteredText: '01132 347 903'
			}
		]
		const nextPageHeading = 'Check the details you entered before requesting a connection';
		let expectedDetail = '';

		pages.forEach(page => {
			//click on change link
			cy.clickOnChangeLinkFor(page.changeLinkText);
			//check page heading
			cy.checkPageHeading('h1', page.expectedPageHeading);
			//enter the new text
			cy.enterText(page.element, page.enteredText);
			//click continue button
			cy.get('div.govuk-grid-row button').click();
			//check page heading
			cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
			//check the new text in details page
			if(page.changeLinkText == 'Address') {
				expectedDetail = '2 Test StreetBristolBS1 2AD'
			} else {
				expectedDetail = page.enteredText
			}
			cy.contains('dt.govuk-summary-list__key', page.changeLinkText)
			.next('dd.govuk-summary-list__value')
			.should('contain', expectedDetail);
		})
	})

	it('AC4 - select change link for contact methods', ()=> {
		const expectedPageHeading = 'How can the service contact James Bond?';
		const checkboxes = ['Text message','Telephone','Email'];
		const nextPageHeading = 'Check the details you entered before requesting a connection';
		const pageDetailsMap = new Map([
			['What is the email address for James Bond?', 'test@a.com'],
			['What telephone number should the service use to call James Bond?', '07745 111456'],
			['What telephone number should the service use to text James Bond?', '0113 345 1167']
			]);
		const pageDetailsArray = Array.from(pageDetailsMap);

		//Click on change link
		cy.clickOnChangeLinkFor('Contact methods');
		//check page heading
		cy.checkPageHeading('h1', expectedPageHeading);
		//uncheck all the selected checkboxes
		cy.uncheckSelectedCheckboxes();
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
			cy.get('.govuk-input').clear().type(inputText);
		});
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check the page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('AC5 - check back link navigation', ()=> {
		const previousPageHeading = 'How can the service contact you for more details about this request?';

		//click on back link
		cy.clickBackLink();
		//check previous page heading
		cy.checkPageHeading('h1', previousPageHeading)
	})
})