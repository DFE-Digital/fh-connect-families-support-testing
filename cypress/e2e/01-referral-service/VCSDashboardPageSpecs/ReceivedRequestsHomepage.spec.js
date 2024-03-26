describe('VCS Dashboard - Received requests home page and pagination - FHG-3216, FHG-3229', ()=> {

	beforeEach(()=> {
		cy.visit('/', { failOnStatusCode: false })
		cy.login('oneloginVCSuser', 'oneloginVCSpassword', false);
		cy.visit('/');
	})

	it('4210 - Login to vcs dashbaord', () => {
		const expectedHeader = ['Contact in family', 'Date received', 'Request number', 'Status'];
		let actualHeader = [];

		cy.refServLanding();
		//check page heading
		cy.checkPageHeading('h1', 'My requests');
		//check table heading
		cy.getTextOfElements('.govuk-table__header', actualHeader, expectedHeader);
	})

	it('3216-AC3 - sort by contact name', () => {
		cy.refServLanding();
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

	it('3216-AC2,AC4 - sort by Date received', () => {
		cy.refServLanding();
		//check initial sort order on Date received as descending
		cy.checkSortOrder(1, 'descending');
		//click on Date received heading link
		cy.contains('Date received').click();
		//check sort order on Date received
		cy.checkSortOrder(1, 'ascending');
		//click on Contact in family heading link
		cy.contains('Date received').click();
		//check sort order on Date received
		cy.checkSortOrder(1, 'descending');
	})

})