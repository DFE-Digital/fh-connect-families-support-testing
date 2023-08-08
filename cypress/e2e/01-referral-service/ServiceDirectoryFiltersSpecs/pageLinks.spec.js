describe('pageLinks.spec - accessibility, contact us, cookies , feedback , terms & conditions, feedback banner',function(){

    it('footer - accessibility page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(1) > .govuk-footer__link').click()
        cy.accessibilityPage()  
    })

    it('footer - contact us page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(2) > .govuk-footer__link').click()
        cy.contactUsPage()   
    })
    it('footer - cookies page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(3) > .govuk-footer__link').click()
        cy.cookiesPageContent()   
    })
    it('footer - feedback link',function(){
        cy.visit('/')
       cy.feedbackFooterLink()
    })
    it('footer - terms & conditions page / link',function(){
        cy.visit('/')
        cy.get('.govuk-footer__inline-list > :nth-child(5) > .govuk-footer__link').click()
        cy.termsandconditionsPage()   
    })
    it.only('feedback banner',function(){
        cy.visit('/')
        cy.feedbackLinkBanner()
    })

})