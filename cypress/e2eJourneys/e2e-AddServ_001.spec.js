describe('| e2e-AddServ_001 | Add Service',function(){
    it('Journey 1 -  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService001')
        // select required service(s)
        cy.selectSupport('organisation')
        //
    })
})