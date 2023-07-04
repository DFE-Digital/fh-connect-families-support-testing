describe('Vcs dashboard request details page - FHG-3232', () => {
	beforeEach(() => {
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/Dashboard');
		//stub login as vcs admin user
		cy.stubLogin('harsha.reddy@education.gov.uk');
	})

	it('AC1, AC16 - Verify request details page content', () => {
		let actualRequestDateAndStatus = {};
		const expectedDateAndStatus = {
			'Date received': '28 Jun 2023',
			'Status': 'New'
		};
		let actualFamilyContactDetails = {};
		const expectedFamilyContactDetails = {
			'Name': 'Megan Taylor',
			'Email': 'a@test.com'
		};
		let actualProfessionalDetails = {};
		const expectedProfessionalDetails = {
			'Name': 'La Professional',
			'Email': 'LaProfessional@example.com',
			'Phone': '0121 121 1227'
		};
		let actualText = [];
		const expectedText = ['Reason for the connection request', 'Test connection request',
			'Person in family to contact', 'How the service can engage Megan Taylor',
			'Test service engage with this family', 'Professional who has made this connection request',
			'Your response'];
		let actualRadioButtonsText = [];
		const expectedRadioButtonsText = ['Accept - our service will contact this person to offer support',
			'Decline - our service will not offer support'];
		let actualButtonsText = [];
		const expectedButtonsText = ['Send response', 'Return later'];

		//navigate to request details page using request number
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/RequestDetails?id=93');
		//check heading
		cy.checkPageHeading('h1', 'Request 00005D');
		//check date and status
		cy.checkTableText(0, actualRequestDateAndStatus, expectedDateAndStatus);
		//check family details
		cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
		//check professional details
		cy.checkTableText(2, actualProfessionalDetails, expectedProfessionalDetails);
		//check sub-headings
		cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
		//check hint text
		cy.checkTextOf('#select-option', 'Select one option.');
		//check radio buttons text
		cy.getRadioButtonsAndCheckboxes('.govuk-radios__item', actualRadioButtonsText, expectedRadioButtonsText);
		//check hidden decline reason
		cy.get('#conditional-decline-reason').should('not.be.visible');
		//check buttons text
		cy.getRadioButtonsAndCheckboxes('.govuk-main-wrapper button', actualButtonsText, expectedButtonsText);
		//click back link
		cy.clickBackLink();
		//check page heading 
		cy.checkPageHeading('h1', 'Received requests');
	})

	it('AC8 - verify accepted request details page', () => {
		let actualRequestDateAndStatus = {};
		const expectedDateAndStatus = {
			'Date received': '28 Jun 2023',
			'Status': 'Accepted'
		};
		let actualFamilyContactDetails = {};
		const expectedFamilyContactDetails = {
			'Name': 'Pete Smith',
			'Email': 'a@test.com'
		};
		let actualProfessionalDetails = {};
		const expectedProfessionalDetails = {
			'Name': 'La Professional',
			'Email': 'LaProfessional@example.com',
			'Phone': '0121 121 1227'
		};
		let actualText = [];
		const expectedText = ['Reason for the connection request', 'Test connection request',
			'Person in family to contact', 'How the service can engage Pete Smith',
			'Test service engage with this family', 'Professional who has made this connection request'];

		//navigate to accepted request details page using request number
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/RequestDetails?id=101');
		//check heading
		cy.checkPageHeading('h1', 'Request 000065');
		//check date and status
		cy.checkTableText(0, actualRequestDateAndStatus, expectedDateAndStatus);
		//check family details
		cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
		//check professional details
		cy.checkTableText(2, actualProfessionalDetails, expectedProfessionalDetails);
		//check sub-headings
		cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
		//check radio buttons and confirmation buttons do not exist
		cy.get('.govuk-radios').should('not.exist');
		cy.get('button[type="submit"]').should('not.exist');
		cy.get('#return-later').should('not.exist');
	})

	it('AC10,AC11,AC12,AC13 - Verify decline reason text box', () => {
		const declinereason = 'Cannot accept this request.'.repeat(19);

		//navigate to request details page using request number
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/RequestDetails?id=76');
		//click on decline request radio button
		cy.get('#decline-request').click();
		//check decline reason text box is visible
		cy.get('.govuk-radios__conditional').should('be.visible');
		//check decline reason conditional text
		cy.checkPageHeading('.govuk-radios__conditional h3', 'Reason for declining');
		cy.checkTextOf('#decline-reason-hint', 'You will no longer have access to this request.');
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', 'You have 500 characters remaining');
		//click on Send response button
		cy.get('button[value="AcceptDecline"]').click();
		//check error message
		cy.checkErrorText('There is a problem', 'Enter a reason for declining');
		//enter text into the decline reason 
		cy.enterText('#decline-reason', 'Cannot accept this request');
		//check remaining character count
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', 'You have 474 characters remaining');
		//enter text more than 500 characters
		cy.enterText('#decline-reason', declinereason);
		//check remaining character count
		cy.checkTextOf('.govuk-character-count__message:not(.govuk-visually-hidden)', 'You have 13 characters too many');
		//click on Send response button
		cy.get('button[value="AcceptDecline"]').click();
		//check error message
		cy.checkErrorText('There is a problem', 'Reason for declining must be 500 characters or less');
	})

	it('AC14 - verify error message when no radio button is selected', () => {
		//navigate to request details page using request number
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/RequestDetails?id=76');
		//click on Send response button
		cy.get('button[value="AcceptDecline"]').click();
		//check error message
		cy.checkErrorText('There is a problem', 'You must select a response');
	})

	it('AC18 - access other organization referral', () => {
		//navigate to request details page using request number
		cy.visit('https://test.manage-connection-requests.education.gov.uk/Vcs/RequestDetails?id=1');
		//check page heading
		cy.checkPageHeading('h1', 'You do not have permission to perform this action');
		//check content on the page
		cy.checkTextOf('.govuk-main-wrapper p', 'If you think you should have access, contact the organisation that set up your permissions.');
	})

})