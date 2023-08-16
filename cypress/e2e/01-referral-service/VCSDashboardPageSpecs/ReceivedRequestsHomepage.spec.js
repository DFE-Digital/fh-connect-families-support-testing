describe.skip('VCS Dashboard - Received requests home page and pagination - FHG-3216, FHG-3229', ()=> {

	beforeEach(()=> {
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/Dashboard');
		//stub login as vcs admin user
		cy.stubLogin('harsha.reddy@education.gov.uk');
	})

	it('3216-AC1, 3229-AC1 - Received requests home page content', ()=> {
		const expectedHeader = ['Contact in family', 'Date received', 'Request number', 'Status'];
		let actualHeader = [];
		const expectedList = ['1', '2', 'Next'];
		let actualList = [];

		//check page heading
		cy.checkPageHeading('h1','Received requests');
		//check table heading
		cy.getTextOfElements('.govuk-table__header', actualHeader, expectedHeader);
		//check the total records in the page 
		cy.get('tbody.govuk-table__body tr.govuk-table__row').its('length').then((length)=> {
			expect(length).to.equal(20);
		})
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
		//check current page on pagination
		cy.checkPaginationSelection('1');
	})

	it('3216-AC3 - sort by contact name', ()=> {
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

	it('3216-AC2,AC4 - sort by Date received', ()=> {
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

	it('3229-AC2 - Navigate to 2nd page using pagination link', ()=> {
		const expectedList = ['Previous', '1', '2'];
		let actualList = [];
			
		//click on 2nd page from pagination 
		cy.contains('li.govuk-pagination__item a', '2').click();
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
		//check current page on pagination
		cy.checkPaginationSelection('2');
	})

	it('3229-AC3,AC5 - Navigate to page using next link', ()=> {
		const expectedList = ['Previous', '1', '2'];
		let actualList = [];

		//click on 2nd page from pagination 
		//cy.contains('li.govuk-pagination__item a', '2').click();
		//click on page before the last one 
		//cy.get('ul.govuk-pagination__list li:nth-last-child(2) a').click();
		//click on next from pagination 
		cy.contains('div.govuk-pagination__next a', 'Next').click();
		//check current page on pagination
		cy.checkPaginationSelection('2');
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
	})

	it('3229-AC4,AC5 - Navigate to page using previous link', ()=> {
		const expectedList = ['1', '2', 'Next'];
		let actualList = [];

		//click on 2nd page from pagination 
		cy.contains('li.govuk-pagination__item a', '2').click();
		//click on previous from pagination 
		cy.contains('div.govuk-pagination__prev a', 'Previous').click();
		//check current page on pagination
		cy.checkPaginationSelection('1');
		//check pagination items
		cy.getTextOfElements('.govuk-pagination li, .govuk-pagination div', actualList, expectedList);
	})
})