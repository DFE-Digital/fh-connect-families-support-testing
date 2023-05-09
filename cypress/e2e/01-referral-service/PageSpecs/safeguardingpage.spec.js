
describe('safeguarding page - FHG-2848', ()=> {
	beforeEach(()=> {
		cy.visit('https://dev.connect-families-to-support.education.gov.uk');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		//Click on Request a connection button
		cy.get('a:contains("Request a connection")').click();
	})

	it('AC1, AC2 - should have the correct content', ()=> {
		const expectedHeading = 'Do not use this service to report safeguarding concerns';
		const expectedPanelText = 'Use the NHS safeguarding app for guidance on reporting safeguarding concerns.';
		const expectedNhsLink = 'https://nhssafeguarding.app/?nocache=0.23461449202295054';
		const expectedContinueLink = "/ProfessionalReferral/Consent?serviceId=354&serviceName=Young%20Bristol%0AYouth%20and%20Play%20Services,%20including%20School%20Holiday%20and%20Outdoor%20Activities";

		//Verify the content on the safeguarding page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		cy.checkSafeGuardingPagePanelText(expectedPanelText);
		cy.checkLinkHref(expectedNhsLink);
		cy.checkSafeGuardingPageContinueButton(expectedContinueLink);
	})

	it('AC3 - back link should take to service details page', ()=> {
		const expectedHeading = 'Young Bristol\nYouth and Play Services, including School Holiday and Outdoor Activities';

		//Click on back link
		cy.clickBackLink();
		//verify page heading
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		
	})
})