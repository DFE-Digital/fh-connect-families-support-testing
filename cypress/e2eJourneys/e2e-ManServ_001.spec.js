describe('| e2e-ManServ_001 | Manage Service',function(){
    it('Journey 1 -  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('manage')
        // view /edit
       cy.ViewServices('1')
        
    })
})