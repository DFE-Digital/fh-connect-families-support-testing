describe.skip('delete services',function(){
    it('delete services',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // cy.get('.govuk-table__cell').contains('Delete').click()
        // cy.deleteService('testservice1669205959249')
        // cy.deleteConfirm('Yes')
        cy.deleteTestData('testservice1669230911482')
    })
})