describe('LA Dashboard - sent requests home page - FHG-3558, FHG-3588', () => {
	beforeEach(() => {
		cy.visit('/', { failOnStatusCode: false })
		cy.login('oneloginusername', 'oneloginpassword');
		cy.refServLanding();
		cy.get('.dfe-header__navigation-item').last().click();
	})

	it.only('4222-AC1 - verify content on la dashboard', () => {
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
		const expectedList = ['1', '2', '⋯', '4', 'Next'];
		let actualList = [];

		//check page heading
		cy.checkPageHeading('h1', 'Requests sent');
		//check table heading
		cy.getTextOfElements('.govuk-table__header', actualHeader, expectedHeader);
		//check the total records in the page 
		cy.get('tbody.govuk-table__body tr.govuk-table__row').its('length').then((length) => {
			expect(length).to.equal(20);
		})
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
		//check current page on pagination
		cy.checkPaginationSelection('1');
	})

	it.only('3558-AC3 - sort by contact name', () => {
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

	it.only('3558-AC2,AC5 - sort by Date updated', () => {
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

	it.only('3558-AC4 - sort by Service', () => {
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

	it.only('3558-AC6 - sort by Date sent', () => {
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

	it('3588-AC8 - navigate to request details page', () => {

		//click on 1st row contact
		//cy.get('.govuk-table__cell a').click();

	})

	it('3588-AC3 - Navigate to 3rd page using Next button', () => {
		const expectedList = ['Previous', '1', '2', '3', '4', 'Next'];
		let actualList = [];

		//click on 2nd page from pagination 
		cy.contains('li.govuk-pagination__item a', '2').click();
		//click on Next from pagination 
		cy.contains('div.govuk-pagination__next a', 'Next').click();
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
		//check current page on pagination
		cy.checkPaginationSelection('3');
	})

	it('3588-AC4, AC5 - Navigate to a page using Previous button', () => {
		const expectedList = ['1', '2', '⋯', '4', 'Next'];
		let actualList = [];

		//click on 2nc page from pagination 
		cy.contains('li.govuk-pagination__item a', '2').click();
		//check current page on pagination
		cy.checkPaginationSelection('2');
		//click on Previous from pagination 
		cy.contains('div.govuk-pagination__prev', 'Previous').click();
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
		//check current page on pagination
		cy.checkPaginationSelection('1');
	})
})