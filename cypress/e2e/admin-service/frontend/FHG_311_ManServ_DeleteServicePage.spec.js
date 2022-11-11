describe.skip('FHG_311_ManServ_DeleteServicePage.spec',function(){
    it('AC ',function(){
        cy.visit('OrganisationAdmin/ViewServices')
        cy.contains('Test Service')
        cy.get("/html//main[@id='main-content']//table[@class='govuk-table']/tbody/tr[2]/td[2]/a[@href='/OrganisationAdmin/DeleteService?organisationid=72e653e8-1d05-4821-84e9-9177571a6013&serviceid=96781fd9-95a2-4196-8db6-0f083f1c38fc']").contains('Delete').click()

    })
})