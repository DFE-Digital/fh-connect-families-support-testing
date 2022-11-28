describe.skip('test services',function(){
    it('test services',function(){
        cy.visit('/OrganisationAdmin/TypeOfService')
        cy.serviceType1({health:'32712b43-e4f7-484f-97d7-beb3bb463133',familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        cy.serviceType2({hearingandsight:'11696b1f-209a-47b1-9ef5-c588a14d43c6',supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
    
    })
})