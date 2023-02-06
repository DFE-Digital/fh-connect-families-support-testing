describe('footerLinks.spec - accessibility, contact us, cookies , feedback , terms & conditions',function(){

    it('accessibility page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(1) > .govuk-footer__link').click()
        cy.accessibilityPage()  
    })

    it('contact us page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(2) > .govuk-footer__link').click()
        cy.contactUsPage()   
    })
    it('cookies page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(3) > .govuk-footer__link').click()
        cy.cookiesPageContent()   
    })
    it('feedback page / link',function(){
        cy.visit('/')
       cy.feedbackFooterLink()
    })
    it('terms & conditions page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(5) > .govuk-footer__link').click()
        cy.termsandconditionsPage()   
    })

})