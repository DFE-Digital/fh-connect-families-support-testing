describe('Letter/address page - FHG-2878', ()=> {
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
		cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
		//click on Yes radio button and continue on consent page
		cy.selectRadioButtonAndContinue('#consent-yes', 'div.govuk-grid-row button');
		//enter a contact name and continue on family contact name page
		cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
		//enter reason and continue on reason for connection request page
		cy.reasonForConnectionRequestPage();
		//select letter checkbox
		cy.selectCheckBoxes('Letter');
		//click continue button
		cy.get('div.govuk-grid-row button').click();
	})

	it('AC1, AC2, AC3 - verify content and navigation to next page', ()=> {
		const pageHeading = 'What is the address for James Bond?';
		const expectedLabels = new Map([
			['AddressLine1', 'Address line 1'],
			['AddressLine2', 'Address line 2 (optional)'],
			['TownOrCity', 'Town or city'],
			['County', 'County (optional)'],
			['Postcode', 'Postcode']
		]);
		const enteredAddress = new Map([
			['AddressLine1', 'Test Street 1'],
			['AddressLine2', 'Street 2'],
			['TownOrCity', 'Bristol'],
			['County', 'Bristol county'],
			['Postcode', 'BS1- (2AD).']
		]);
		const nextPageHeading = 'How can the service engage with the people who need support?';

		//check address page heading
		cy.checkPageHeading('h1', pageHeading);
		//check label text
		expectedLabels.forEach((text, label) => {
			cy.checkTextOf(`label[for="${label}"]`, text);
		});
		//enter a valid address and continue 
		enteredAddress.forEach((text, id)=> {
			cy.enterText(`#${id}`, text);
		})
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading);
	})

	it('AC4 - should display error message when no address is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessages = ['Enter the first line of the address', 'Enter a town or city', 'Enter a postcode'];
		let [actualBannerMessages, actualMessages] = [[], []];
		const nextPageHeading = 'How can the service engage with the people who need support?';
		const enteredAddress = new Map([
			['AddressLine1', 'Test Street 1'],
			['TownOrCity', 'Bristol'],
			['Postcode', 'BS1- (2AD).']
		]);
	
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banne
		cy.checkErrorBannerAndMessages(errorHeading, errorMessages, actualBannerMessages, actualMessages);
		//enter a valid address and continue 
		enteredAddress.forEach((text, id)=> {
			cy.enterText(`#${id}`, text);
		})
		//click continue button
		cy.get('div.govuk-grid-row button').click();
		//check next page heading
		cy.checkPageHeading('.govuk-heading-l', nextPageHeading)
	})

	it('AC5 - should display error message when invalid postcode is entered', ()=> {
		const errorHeading = 'There is a problem';
		const errorMessage = 'Enter a real postcode';
		const enteredAddress = new Map([
			['AddressLine1', 'Test Street 1'],
			['TownOrCity', 'Bristol'],
			['Postcode', 'BS1']
		]);
	
		//enter the address
		enteredAddress.forEach((text, id)=> {
			cy.enterText(`#${id}`, text);
		})
		//click continue button 
		cy.get('div.govuk-grid-row button').click();
		//check error banner
		cy.checkErrorText(errorHeading, errorMessage);
	})

	it('AC6 - should navigate contact methods page using back link', ()=> {
		const expectedPageHeading = 'How can the service contact James Bond?';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('h1', expectedPageHeading);
	})
})
