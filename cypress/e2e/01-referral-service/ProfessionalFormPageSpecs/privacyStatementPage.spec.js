describe('Privacy statement page - FHG-3727', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.refServLanding();
		cy.searchbypostcode('bs14 8at');
		//Select the first result on search results page
		cy.get('ul.search-results>li:nth-child(1) a').click();
		//Click on Request a connection button
		cy.get('a:contains("Request a connection")').click();
		//stub-login
		cy.stubLogin('LaDualRole@example.com');
		//Click Continue button on safeguarding page
		cy.get('.app-button--inverted').click();
		//click on privacy statement link
		cy.contains('share our privacy statement (opens in new tab)').invoke('removeAttr', 'target').click();
	})

	it('AC1 - verify privacy statement content', () => {
		const expectedPageHeading = 'Privacy statement';
		const expectedSubHeadings = ['What data we collect', 'Why we collect this data',
			'How long we keep this data', 'Who we share this data with',
			'Where this data is processed and stored', 'How we protect this data and keep it secure',
			'Personal data rights', 'Questions and complaints', 'Changes to this notice',
			'Our legal basis for processing your data'];
		let actualSubHeadings = [];
		const expectedStaticText = ["This service is called ‘Manage connection requests’. It’s provided by the Department for Education (DfE).",
			"DfE is joint data controller with various local authorities for data collected within this service. The local authority that each request is associated with shares data controller responsibility for that request with DfE.",
			"A data controller determines how and why personal data is processed. For more information, read the Department for Education’s entry in the Data Protection Public Register.",
			"The personal data we collect from you is:", "your name", "your email address", "your phone number", "your address", "information about your specific needs – which may include health data, gender, ethnicity and sexual orientation",
			"We collect personal data to:", "with your permission, allow voluntary and community sector services to contact you", "with your permission, allow voluntary and community sector services to assess if they can meet your need",
			"We keep your personal data for up to 7 years, as required by law.", "As joint data controllers, DfE and the local authority which your request is associated with share data.",
			"The professional who is requesting the contact on your behalf will continue to have access to your data. They will receive a reply from the voluntary and community sector service which will say whether they will contact you.",
			"We also share if you give us permission to do so, your personal data with the voluntary and community sector organisation that you’re requesting contact from, so they can assess if they can meet your needs and contact you.",
			"If they agree to contact you, they will continue to have access to your data. They become responsible for your data once they transfer it to their own systems. If they decline to contact you, they will no longer have access to your data.",
			"We will not:", "sell or rent your data to third parties", "share your data with third parties for marketing purposes", "We will only share your personal data with other organisations if we are required to do so by law – for example, by court order, or to prevent fraud or other crime.",
			"We design, build and run our systems to make sure that data is as safe as possible at any stage, both while it’s processed and when it’s stored.",
			"Your personal data is stored on our IT infrastructure and shared with our data processors, so it may be transferred and stored securely outside the United Kingdom. Where that’s the case it will be subject to equivalent legal protection through the use of International Data Transfer Agreements or Adequacy Decisions.",
			"We are committed to keeping your data secure. We have procedures in place to secure your data and prevent unauthorised access or disclosure. For example, we protect data using varying levels of encryption.", "You have the right to:",
			"request that we remove your personal data from the system", "request a copy of your personal data - this will be provided in a structured, commonly used and machine-readable format", "Find out more about your personal data rights.",
			"You can read about how the DfE handles personal information in the personal information charter.", "You can contact us by using our secure contact form if you:", "have any questions about anything on this page",
			"think that your personal data has been misused or mishandled", "want to make a subject access request (SAR)", "You can also write to the Data Protection Officer, who provides independent advice and monitoring of DfE’s use of personal information:",
			"Emma Wharram, Data Protection Officer Department for Education (B2.28) 7 and 8 Wellington Place Leeds LS1 4AW", "If you consider that your personal data has been misused or mishandled, you may make a complaint to the Information Commissioner, who is an independent regulator:",
			"Information Commissioner’s Office Wycliffe House Water Lane Wilmslow Cheshire SK9 5AF", "Telephone: 0303 123 1113 Email: icocasework@ico.org.uk", "Complaints to the Information Commissioner are without prejudice to your right to seek redress through the courts.",
			"This notice was last updated on 8 June 2023. It will be reviewed on 8 June 2024.", "We may change this privacy notice before its review date. When we make changes, we will add a change note at the bottom of the page. Any changes to this privacy notice will apply to you and your data immediately. If these changes affect how your personal data is processed, DfE will take reasonable steps to make sure you know.", "The legal basis for processing your data is public task, article 6(1)(e) of the UK General Data Protection Regulation (UK GDPR).",
			"The legal basis for processing special category data is substantial public interest, article 9(2)(g) of the UK General Data Protection Regulation (UK GDPR)."];

		//check page heading
		cy.checkPageHeading('h1', expectedPageHeading);
		//check page sub-heading
		cy.getTextOfElements('#main-content h2', actualSubHeadings, expectedSubHeadings);
		//check static text on the consent page
		expectedStaticText.forEach((text) => {
			cy.get('main#main-content')
				.contains(text.trim())
				.should('be.visible');
		})
	})

	it('AC2 - verify links on privacy statement page', () => {
		const links = {
			'Department for Education’s entry in the Data Protection Public Register': 'https://ico.org.uk/ESDWebPages/Entry/Z1001723',
			'Adequacy Decisions': 'https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en',
			'Find out more about your personal data rights': 'https://ico.org.uk/for-the-public/',
			'how the DfE handles personal information in the personal information charter': 'https://www.gov.uk/government/organisations/department-for-education/about/personal-information-charter',
			'secure contact form': 'https://form.education.gov.uk/service/Contact_the_Department_for_Education',
			'make a subject access request (SAR)': 'https://www.gov.uk/government/organisations/department-for-education/about/personal-information-charter#how-to-make-a-subject-access-requestmake'
		}

		Object.entries(links).forEach(([linkText, linkUrl]) => {
			cy.get('a').contains(linkText).should('have.attr', 'href', linkUrl);
		})
	})
})