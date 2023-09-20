
describe('| e2e-test008-MngConnect | Manage - add VCS organisation , add la and vcs managers , Connect - no access to referrals and dashboards', () => {

    afterEach(() => {
        if (Cypress.mocha.getRunner().suite.ctx.currentTest.state === 'failed') {
            Cypress.runner.stop()
        } 

        Cypress.session.clearAllSavedSessions();
    })

    it('Manage - (dfe admin) Add VCS organisation using spread sheet',()=>{
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword', false)
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.uploadSheet()  
        cy.get('.dfe-header__service-name').click()
        cy.manVcsLink()
        cy.get(':nth-child(4) > .govuk-pagination__link').click()
        cy.contains('Test Harsha Madhu Vcs001')
        cy.Signout('manage');
    })
    
    it('Manage - (dfe admin) Add permissions to user LA manager', () => {  
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword', false)
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.addPermissions()
        cy.typeOfUserPage('la')
        cy.typeOfUserLA('1')
        cy.laWhichLA('tower hamlets')
        cy.email('familyhubs.la@gmail.com')
        cy.fullName('TH - LA Man')
        cy.checkAnswerPage()
        cy.confirmationPage('TH - LA Man')
        cy.Signout('manage');
    })
    
    it('Manage - (dfe admin) Add permissions to user VCS manager', () => {  
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword', false)
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.addPermissions()
        cy.typeOfUserPage('vcs')
        cy.typeOfUserVCS('1')
        cy.vcsWhichLA('tower hamlets')
        cy.whichOrgVcs('Test Harsha Madhu Vcs001')
        cy.email('familyhubs.vcs@gmail.com')
        cy.fullName('TH - VCS Man')
        cy.checkAnswerPage()
        cy.confirmationPage('TH - VCS Man')
        cy.Signout('manage');
    })


    it('Connect - (la manager) restricted access to make a referral request and dashboard', () => {

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.login('oneloginLAusername', 'oneloginLApassword', true);
        cy.visit('https://test.connect-families-to-support.education.gov.uk')
        cy.refServLanding();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');

        //navigate to LA dashboard
        cy.contains('My requests').click();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');
        cy.Signout('connect');
    })
    // session details change - sign in as LA Pro = user id = harshareddy.leeds@googlemail.com

    it('Connect Dashboard - (VCS manager) restricted access to dashboard ', () => {

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.login('oneloginVCSuser', 'oneloginVCSpassword', true);
        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.refServLanding();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');
        cy.Signout('connect');
    })

    it('Manage - ( dfe admin) - delete LA manager user permissions',()=>{
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword', false)
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
         //manage permissions link
        cy.managePermissionsLink()
        cy.managePermissionsPage()
        cy.emailFilter('familyhubs.la@gmail.com')
        // delete permissions link
        cy.deletePermissionsLink()
        cy.deletePermissionsOptionPage('TH - LA Man','Yes')
        cy.deletePermissionsConfirmPage('TH - LA Man')
        cy.Signout('manage');
    })

    it('Manage - (dfe admin) delete VCS organisation', () => {
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/')
        cy.managelogin('onelogindfeusername', 'onelogindfepassword', false)
        cy.visit('https://test.manage-family-support-services-and-accounts.education.gov.uk/Welcome')
        cy.dfeAdminWelcomePage()
        cy.manVcsLink()
        cy.get('.govuk-pagination__list li:last-child').click();
        cy.get('td.govuk-table__cell a[data-testid="delete_TestHarshaMadhuVcs001"]').click();
        cy.contains('Deleting an organisation');
        cy.selectRadioButtonAndContinue('#removeOrg', '#buttonConfirm')
        cy.contains('You have deleted Test Harsha Madhu Vcs001')
        cy.Signout('manage');
    })
})

