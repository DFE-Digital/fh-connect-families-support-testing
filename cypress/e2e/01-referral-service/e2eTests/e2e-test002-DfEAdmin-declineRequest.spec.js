
describe('| e2e-test002-MngConnect | Manage - add VCS organisation , add la dual role and vcs professional users , Connect - create and decline request , view requests', () => {

    afterEach(() => {
        if (Cypress.mocha.getRunner().suite.ctx.currentTest.state === 'failed') {
            Cypress.runner.stop()
        } 

        Cypress.session.clearAllSavedSessions();
    })

    it('Manage - (dfe admin) Add VCS organisation using spread sheet', () => {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword')
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.uploadSheet()
        cy.get('.dfe-header__service-name').click()
        cy.manVcsLink()
        cy.get(':nth-child(4) > .govuk-pagination__link').click()
        cy.contains('Test Harsha Madhu Vcs001')
        cy.Signout('manage');
    })

    it('Manage - (dfe admin) Add permissions to user LA Professional', () => {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword')
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.addPermissions()
        cy.typeOfUserPage('la')
        cy.typeOfUserLA('both')
        cy.laWhichLA('tower hamlets')
        cy.email('familyhubs.la@gmail.com')
        cy.fullName('TH - LA Pro')
        cy.checkAnswerPage()
        cy.confirmationPage('TH - LA Pro')
        cy.Signout('manage');
    })

    it('Manage - (dfe admin) Add permissions to user VCS Professional', () => {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword')
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.addPermissions()
        cy.typeOfUserPage('vcs')
        cy.typeOfUserVCS('2')
        cy.vcsWhichLA('tower hamlets')
        cy.whichOrgVcs('Test Harsha Madhu Vcs001')
        cy.email('familyhubs.vcs@gmail.com')
        cy.fullName('TH - VCS Pro')
        cy.checkAnswerPage()
        cy.confirmationPage('TH - VCS Pro')
        cy.Signout('manage');
    })


    it('Connect - (la Professional) Create and view connection request ', () => {
        // Get the current date
        const currentDate = new Date();

        // Define month names
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        // Format the date as 'dd Mon yyyy'
        const formattedDate = `${currentDate.getDate().toString().padStart(2,'0')} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        let actualRequestDetails = {};
        const expectedRequestDetails = {
            'Service details': 'Test service name 001 (opens in a new tab)',
            'Date updated': formattedDate,
            'Date sent': formattedDate,
            'Status': 'Sent'
        }
        let actualFamilyContactDetails = {};
        const expectedFamilyContactDetails = {
            'Name': 'James Bond',
            'Email': 'a@test.com'
        };
        let actualText = [];
        const expectedText = ['Reason for the connection request', 'Test connection request',
            'Person in family to contact', 'How the service can engage with James Bond',
            'Test service engage with this family'];

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.login('oneloginLAusername', 'oneloginLApassword', true);
        cy.visit('https://test.connect-families-to-support.education.gov.uk')
        cy.refServLanding();
        cy.searchbypostcode('E1 5NA');
        cy.get('ul.search-results>li:nth-child(1) a').click();
        cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
        cy.get('.app-button--inverted').click();
        cy.selectRadioButtonAndContinue('#shared-privacy-yes', 'div.govuk-grid-row button');
        cy.selectRadioButtonAndContinue('#consent-yes', 'div.govuk-grid-row button');
        cy.enterTextAndContinue('.govuk-input', 'James Bond', 'div.govuk-grid-row button');
        cy.reasonForConnectionRequestPage();
        cy.selectCheckBoxes('Email');
        cy.get('div.govuk-grid-row button').click();
        cy.enterTextAndContinue('.govuk-input', 'a@test.com', 'div.govuk-grid-row button');
        cy.get('div.govuk-grid-row button').click();
        cy.get('#reason').type('Test service engage with this family');
        cy.get('div.govuk-grid-row button').click();
        cy.get('#telephone-and-email').click();
        cy.enterTextAndContinue('.govuk-input', '01132 347 902', 'div.govuk-grid-row button');
        cy.contains('Confirm details and send request').click();
        cy.checkPanelText('Connection request sent');

        //navigate to LA dashboard
        cy.contains('My requests').click();
        cy.get('.govuk-table__cell a').first().click();
        cy.log(formattedDate)
        //check service details, date and status
        cy.checkTableText(0, actualRequestDetails, expectedRequestDetails);
        //check family details
        cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
        //check sub-headings
        cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
        cy.Signout('connect');
    })
    // session details change - sign in as LA Pro = user id = harshareddy.leeds@googlemail.com

    it('Connect Dashboard - (VCS Professional) view and decline requests ', () => {
        // Get the current date
        const currentDate = new Date();

        // Define month names
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        // Format the date as 'dd Mon yyyy'
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        let actualRequestDateAndStatus = {};
        const expectedDateAndStatus = {
            'Date received': formattedDate,
            'Status': 'New'
        };
        let actualFamilyContactDetails = {};
        const expectedFamilyContactDetails = {
            'Name': 'James Bond',
            'Email': 'a@test.com'
        };
        let actualProfessionalDetails = {};
        const expectedProfessionalDetails = {
            'Name': 'TH - LA Dual',
            'Email': 'familyhubs.la@gmail.com',
            'Phone': '01132 347 902'
        };

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.login('oneloginVCSusername', 'oneloginVCSpassword', true);
        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.refServLanding();
        cy.contains('My requests').click();
        cy.get('.govuk-table__cell a').first().click();
        //check date and status
        cy.checkTableText(0, actualRequestDateAndStatus, expectedDateAndStatus);
        //check family details
        cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
        //check professional details
        cy.checkTableText(2, actualProfessionalDetails, expectedProfessionalDetails);
        //decline the request
        cy.get('#decline-request').click();
        //enter text into the decline reason 
        cy.enterText('#decline-reason', 'Cannot accept this request');
        //click send response button
        cy.get('button[type="submit"][name="userAction"][value="AcceptDecline"]').click();
        //check heading
        cy.checkPageHeading('h1', 'Request for support declined');
        //navigate to request details page
        cy.contains('Go to received requests').click();
        //check the request is not present in dashboard
        cy.get('.govuk-table__cell a').should('not.exist');
        cy.Signout('connect');
    })

    it('Connect dashboard - (La professional) - view declined request', () => {
        // Get the current date
        const currentDate = new Date();

        // Define month names
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        // Format the date as 'dd Mon yyyy'
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        let actualRequestDetails = {};
        const expectedRequestDetails = {
            'Service details': 'Test service name 001 (opens in a new tab)',
            'Date updated': formattedDate,
            'Date sent': formattedDate,
            'Status': 'Declined'
        }
        let actualFamilyContactDetails = {};
        const expectedFamilyContactDetails = {
            'Name': 'James Bond',
            'Email': 'a@test.com'
        };
        let actualText = [];
        const expectedText = ['Reason for declining the connection request', 'Cannot accept this request',
            'Reason for the connection request', 'Test connection request', 'Person in family to contact',
            'How the service can engage with James Bond', 'Test service engage with this family'];

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.login('oneloginLAusername', 'oneloginLApassword', false);
        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.refServLanding();
        cy.contains('My requests').click();
        cy.get('.govuk-table__cell a').first().click();
        //check service details, date and status
        cy.checkTableText(0, actualRequestDetails, expectedRequestDetails);
        //check family details
        cy.checkTableText(1, actualFamilyContactDetails, expectedFamilyContactDetails);
        //check sub-headings
        cy.getTextOfElements('.govuk-main-wrapper h2, .govuk-main-wrapper p', actualText, expectedText);
        cy.Signout('connect');
    })

    it.only('Manage - ( dfe admin) - delete LA Professional user permissions',()=>{
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('oneloginusername', 'oneloginpassword')
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
         //manage permissions link
        cy.managePermissionsLink()
        cy.managePermissionsPage()
        cy.emailFilter('familyhubs.la@gmail.com')
        // delete permissions link
        cy.deletePermissionsLink()
        cy.deletePermissionsOptionPage('TH - LA Dual','Yes')
        cy.deletePermissionsConfirmPage('TH - LA Dual')
        cy.Signout('manage');
    })

    it.only('Manage - (dfe admin) delete VCS organisation', () => {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('oneloginusername', 'oneloginpassword')
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.manVcsLink()
        cy.get('.govuk-pagination__list li:last-child').click();
        cy.get('td.govuk-table__cell a[data-testid="delete_TestHarshaMadhuVcs001"]').click();
        cy.contains('Deleting an organisation');
        cy.selectRadioButtonAndContinue('#removeOrg', 'button.govuk-button')
        cy.contains('You have deleted Test Harsha Madhu Vcs001')
        cy.Signout('manage');
    })
})

