describe('| e2e-AddServ_005 | Add Service - familyhub - Online - Children - Tamil/English - Paid/Hour - Email |',function(){
    it('familyhub - Online - address - Children - English - Paid/Hour - TextMessage  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService 005')
        // select required service(s)
        cy.selectSupport({familyhub:'d242700a-b2ad-42fe-8848-61534002156c'})
        //type of service
        cy.serviceDeliveryType({online:'2'})
        // who is it for ?
        cy.whoFor('Yes','1','2')
        // what language 
        cy.addLanguage('Tamil','English')
        //pay for service
        cy.payForService('Yes','20.00','Hour')
        //contact details
         cy.contactDetails({Email:'email'},'abc@email.com')
        
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService 005')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService 005')
    })

})