describe('LA Dashboard - sent requests home page - FHG-3558, FHG-3588', () => {
	beforeEach(() => {
		cy.visit('/', { failOnStatusCode: false })
		cy.login('oneloginusername', 'oneloginpassword', false);
		cy.visit('/');
		cy.refServLanding();
		cy.get('.dfe-header__navigation-item').last().click();
	})

	it('4222-AC1 - verify content on la dashboard', () => {
		const expectedHeader = ['Contact in family', 'Service', 'Date updated', 'Date sent', 'Request number', 'Status'];
		let actualHeader = [];

		//check page heading
		cy.checkPageHeading('h1', 'My requests');
		//check table heading
		cy.getTextOfElements('.govuk-table__header', actualHeader, expectedHeader);
	})

    it('3558-AC1, 3588-AC1,AC2,AC5 Verify LA Dashboard home page content', () => {
		const expectedHeader = ['Contact in family', 'Service', 'Date updated', 'Date sent', 'Request number', 'Status'];
		let actualHeader = [];

		//check page heading
		cy.checkPageHeading('h1', 'My requests');
		//check table heading
		cy.getTextOfElements('.govuk-table__header', actualHeader, expectedHeader);
	})

	it('3558-AC3 - sort by contact name', () => {
		//check initial sort order on contact name
		cy.checkSortOrder(0, 'none');
		//click on Contact in family heading link
		cy.contains('Contact in family').click();
		//check sort order on contact name
		cy.checkSortOrder(0, 'ascending');
		//click on Contact in family heading link
		cy.contains('Contact in family').click();
		//check sort order on contact name
		cy.checkSortOrder(0, 'descending');
	})

	it('3558-AC2,AC5 - sort by Date updated', () => {
		//check initial sort order on Date updated as descending
		cy.checkSortOrder(2, 'descending');
		//click on Date updated heading link
		cy.contains('Date updated').click();
		//check sort order on Date updated
		cy.checkSortOrder(2, 'ascending');
		//click on Date updated heading link
		cy.contains('Date updated').click();
		//check sort order on Date updated
		cy.checkSortOrder(2, 'descending');
	})

	it('3558-AC4 - sort by Service', () => {
		//check initial sort order on Service as none
		cy.checkSortOrder(1, 'none');
		//click on Service heading link
		cy.contains('Service').click();
		//check sort order on Service
		cy.checkSortOrder(1, 'ascending');
		//click on Service heading link
		cy.contains('Service').click();
		//check sort order 
		cy.checkSortOrder(1, 'descending');
	})

	it('3558-AC6 - sort by Date sent', () => {
		//check initial sort order on Date sent as none
		cy.checkSortOrder(3, 'none');
		//click on Date sent heading link
		cy.contains('Date sent').click();
		//check sort order on Date sent
		cy.checkSortOrder(3, 'ascending');
		//click on Date sent heading link
		cy.contains('Date sent').click();
		//check sort order 
		cy.checkSortOrder(3, 'descending');
	})


})