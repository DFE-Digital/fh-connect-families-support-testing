describe('| e2e-AddServ_008 | Add Service - supportwithparenting - Online/inperson - Children - Thai/Xhosa - Not Paid - emailContact |',function(){
    it('supportwithparenting - Online/inperson - address - Children - Tamil/English - Not Paid - telephoneContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService 008')
        // select required service(s)
        cy.selectSupport({supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
        //type of service
        cy.serviceDeliveryType({online:'2', inperson:'1'})
        // add address
        cy.addAddress()
        //OfferAtFamiliesPlace
        cy.OfferAtFamiliesPlace('Yes')
        // who is it for ?
        cy.whoFor('Yes','1','2')
        // what language 
        cy.addLanguage('Thai','Xhosa')
        //pay for service
        cy.payForService('No')
        //contact details
        cy.contactDetails({Telephone:'phone'},'03456066166')
        //more details
        cy.moreDetails('Details for test service 008')
        // check details
        cy.checkDetails('TestService 008','Support with parenting')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService 008')  })
})