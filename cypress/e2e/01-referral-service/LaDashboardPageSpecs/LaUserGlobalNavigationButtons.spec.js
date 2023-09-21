describe('4212, 4220 - Navigate to postcode and dashboard pages using global nav buttons', () => {
	beforeEach(() => {
		cy.visit('/', { failOnStatusCode: false })
		cy.login('oneloginusername', 'oneloginpassword', false);
		cy.visit('/');
		cy.refServLanding();
	})

	it('AC1 - search for services by postcode - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['Search for service', 'My requests'];
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC2 - search for services by postcode - click on My requests button', () => {
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC3 - search for services by postcode - click on header link', () => {
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('AC4 - My requests page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['Search for service', 'My requests'];
		cy.visit('/referrals/La/Dashboard');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC5 - My requests page - click on My requests button', () => {
		cy.visit('/referrals/La/Dashboard');
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC6 - My requests page - click on header link', () => {
		cy.visit('/referrals/La/Dashboard');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('AC7 - service results page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['Search for service', 'My requests'];
		cy.searchbypostcode('bs14 8at');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('AC8 - service results page - click on My requests button', () => {
		cy.searchbypostcode('bs14 8at');
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('AC9 - service results page - click on header link', () => {
		cy.searchbypostcode('bs14 8at');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})

	it('4220-AC2 - start page - click on Search for service button', () => {
		let actualText = [];
		const expectedText = ['Search for service', 'My requests'];
		cy.visit('/');
		cy.getTextOfElements('.dfe-header__navigation-item', actualText, expectedText);
		cy.get('.dfe-header__navigation-item').first().click();
		cy.checkPageHeading('h1', 'Search for services by postcode');
	})

	it('4220-AC3 - start page - click on My requests button', () => {
		cy.visit('/');
		cy.get('.dfe-header__navigation-item').last().click();
		cy.checkPageHeading('h1', 'My requests');
	})

	it('4220-AC4 - start page - click on header link', () => {
		cy.visit('/');
		cy.get('.dfe-header__logo a').click();
		cy.checkPageHeading('h1', 'Connect families to support');
	})
})