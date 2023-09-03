describe('4272 - Navigate to postcode and dashboard pages using global nav buttons', () => {
	beforeEach(() => {
		cy.visit('/', { failOnStatusCode: false })
		cy.login('oneloginvcsusername', 'oneloginpassword');
	})

	it('AC1 - search for services by postcode - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['My requests', 'Search for service'];
		cy.visit('/ProfessionalReferral/Search');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC2 - search for services by postcode - click on My requests button', () => {
		cy.visit('/ProfessionalReferral/Search');
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC3 - search for services by postcode - click on header link', () => {
		cy.visit('/ProfessionalReferral/Search');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('AC4 - My requests page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['My requests', 'Search for service'];
		cy.visit('/referrals/Vcs/Dashboard');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC5 - My requests page - click on My requests button', () => {
		cy.visit('/referrals/Vcs/Dashboard');
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC6 - My requests page - click on header link', () => {
		cy.visit('/referrals/Vcs/Dashboard');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('AC7 - service results page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['My requests', 'Search for service'];
		cy.visit('/ProfessionalReferral/Search');
		cy.searchbypostcode('bs14 8at');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC8 - service results page - click on My requests button', () => {
		cy.visit('/ProfessionalReferral/Search');
		cy.searchbypostcode('bs14 8at');
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC9 - service results page - click on header link', () => {
		cy.visit('/ProfessionalReferral/Search');
		cy.searchbypostcode('bs14 8at');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('4228-AC2 - start page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['My requests', 'Search for service'];
		cy.visit('/');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('4228-AC3 - start page - click on My requests button', () => {
		cy.visit('/');
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('4228-AC4 - start page - click on header link', () => {
		cy.visit('/');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})
})