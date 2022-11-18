describe('| e2e-AddServ_009 | Add Service - familyhub - Online/telephone - Children - Hebrew/English - Paid - telephoneContact |',function(){
    it('familyhub - Online/telephone - Children - Hebrew/English - Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService 009')
        // select required service(s)
        cy.selectSupport({familyhub:'d242700a-b2ad-42fe-8848-61534002156c'})
        //type of service
        cy.serviceDeliveryType({online:'2',telephone:'3'})
        // who is it for ?
        cy.whoFor('Yes','1','2')
        // what language 
        cy.addLanguage('Hebrew','English')
        //pay for service
        cy.payForService('Yes','10.00','Session')
        //contact details
        cy.contactDetails({Telephone:'phone'},'03456066166')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService 009','FamilyHub')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService 009')
    })
})