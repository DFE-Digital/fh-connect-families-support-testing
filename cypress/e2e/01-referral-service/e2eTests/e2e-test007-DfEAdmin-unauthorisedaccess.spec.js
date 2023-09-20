
describe('| e2e-test007-MngConnect | Manage - add VCS organisation , Connect - DfE admin has no access to referrals and dashboards', () => {

    afterEach(() => {
        if (Cypress.mocha.getRunner().suite.ctx.currentTest.state === 'failed') {
            Cypress.runner.stop()
        } 

        Cypress.session.clearAllSavedSessions();
    })
    
    it('Connect - (DfE admin) restricted access to make a referral request and dashboard', () => {

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.connectlogin('oneloginusername', 'oneloginpassword');
        cy.visit('https://test.connect-families-to-support.education.gov.uk')
        cy.refServLanding();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');

        //navigate to LA dashboard
        cy.contains('My requests').click();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');
        cy.Signout('connect');
    })
    // session details change - sign in as LA Pro = user id = harshareddy.leeds@googlemail.com

    it('Connect Dashboard - (DfE admin) restricted access to dashboard ', () => {

        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.connectlogin('oneloginusername', 'oneloginpassword');
        cy.visit('https://test.connect-families-to-support.education.gov.uk');
        cy.refServLanding();
        cy.checkPageHeading('h1', 'You do not have permission to perform this action');
        cy.Signout('connect');
    })
})

