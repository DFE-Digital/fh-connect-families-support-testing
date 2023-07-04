describe('LA Dashboard request details page - FHG-3594', () => {
	beforeEach(() => {
		cy.visit('https://test.manage-connection-requests.education.gov.uk/La/Dashboard');
		//stub login as vcs admin user
		cy.stubLogin('LaProfessional@example.com');
	})

	it('AC1,AC4 - Accepted request page', () => {
		let actualRequestDetails = {};
		const expectedRequestDetails = {
			'Service details': 'Elop Mentoring (opens in a new tab)',
			'Date updated': '28 Jun 2023',
			'Date sent': '28 Jun 2023',
			'Status': 'Accepted'
		}
		let actualFamilyContactDetails = {};
		const expectedFamilyContactDetails = {
			'Name': 'Samuel jackson',
			'Email': 'a@test.com'
		};
		let actualText = [];
		const expectedText = ['Reason for the connection request', 'Test connection request',
			'Person in family to contact', 'How the service can engage with Samuel jackson',
			'Test service engage with this family'];

		//visit the request details page using request number is url
		cy.visit('https://test.manage-connection-requests.education.gov.uk/La/RequestDetails?id=85');
		//check heading
		cy.checkPageHeading('h1', 'Request 000055');
		//check service details, date and status
		cy.checkTableText(0, actualRequestDetails, expectedRequestDetails);
		//check family details
		cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
		//check sub-headings
		cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
		//click on service link
		cy.get('a[href="https://test.connect-families-to-support.education.gov.uk/ProfessionalReferral/LocalOfferDetail?serviceid=737"]').invoke('removeAttr', 'target').click();
		cy.url().should('eq', 'https://test.connect-families-to-support.education.gov.uk/ProfessionalReferral/LocalOfferDetail?serviceid=737');
	})

	it('AC2 - Declined request page', () => {
		let actualRequestDetails = {};
		const expectedRequestDetails = {
			'Service details': 'Elop Mentoring (opens in a new tab)',
			'Date updated': '28 Jun 2023',
			'Date sent': '28 Jun 2023',
			'Status': 'Declined'
		}
		let actualFamilyContactDetails = {};
		const expectedFamilyContactDetails = {
			'Name': 'Stuart Clark',
			'Email': 'a@test.com'
		};
		let actualText = [];
		const expectedText = ['Reason for declining the connection request', 'tester','Reason for the connection request', 'Test connection request',
			'Person in family to contact', 'How the service can engage with Stuart Clark',
			'Test service engage with this family'];

		//visit the request details page using request number is url
		cy.visit('https://test.manage-connection-requests.education.gov.uk/La/RequestDetails?id=65');
		//check heading
		cy.checkPageHeading('h1', 'Request 000041');
		//check service details, date and status
		cy.checkTableText(0, actualRequestDetails, expectedRequestDetails);
		//check family details
		cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
		//check sub-headings
		cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
	})

	it('AC3, AC5 - Sent request page', () => {
		let actualRequestDetails = {};
		const expectedRequestDetails = {
			'Service details': 'V & A Museum Of Childhood (opens in a new tab)',
			'Date updated': '28 Jun 2023',
			'Date sent': '28 Jun 2023',
			'Status': 'Sent'
		}
		let actualFamilyContactDetails = {};
		const expectedFamilyContactDetails = {
			'Name': 'Sam lopez',
			'Email': 'a@test.com'
		};
		let actualText = [];
		const expectedText = ['Reason for the connection request', 'Test connection request',
			'Person in family to contact', 'How the service can engage with Sam lopez',
			'Test service engage with this family'];

		//visit the request details page using request number is url
		cy.visit('https://test.manage-connection-requests.education.gov.uk/La/RequestDetails?id=102');
		//check heading
		cy.checkPageHeading('h1', 'Request 000066');
		//check service details, date and status
		cy.checkTableText(0, actualRequestDetails, expectedRequestDetails);
		//check family details
		cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
		//check sub-headings
		cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
		//click back link
		cy.clickBackLink();
		//check page heading 
		cy.checkPageHeading('h1', 'Requests sent');
	})
})