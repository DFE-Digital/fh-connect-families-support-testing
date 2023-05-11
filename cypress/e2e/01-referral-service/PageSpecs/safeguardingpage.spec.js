
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
		const expectedPanelText = 'Use the NHS safeguarding app (opens in new tab) for guidance on reporting safeguarding concerns.';
		const expectedNhsLink = 'https://nhssafeguarding.app';
		const expectedContinueLink = "/ProfessionalReferral/Consent?serviceId=354";

		//Verify the content on the safeguarding page
		cy.checkPageHeading('.govuk-heading-l', expectedHeading);
		cy.checkSafeGuardingPagePanelText(expectedPanelText);
		cy.checkLinkHref('#nhs-safeguarding',expectedNhsLink);
		//verify nhs link target attribute to determine if it opens in a new tab
		cy.get('#nhs-safeguarding').should('have.attr', 'target', '_blank');
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