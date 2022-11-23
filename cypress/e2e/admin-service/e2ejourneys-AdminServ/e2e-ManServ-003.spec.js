describe('| e2e-ManServ_003 | Manage Service - edit - No changes made',function(){
    it('Journey - Manage Service - edit - No changes made',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        const num = Date.now();
        const n = num.toString();
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.selectSupport({supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63',health:'32712b43-e4f7-484f-97d7-beb3bb463133'})
        //type of service
        cy.serviceDeliveryType({online:'2', telephone:'3'})
        // who is it for ?
        cy.whoFor('No')
        // what language 
        cy.whatLanguage('English')
        //pay for service
        cy.payForService('No')
        //contact details
        cy.contactDetails({Email:'email'},'abc@email.com')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService' + n,'Health')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        // manage service 
      // cy.ViewServices('TestService' + n)
       cy.editService('testservice' + n)
       // save without making any changes
       cy.saveDetails()
       // delete test data
       cy.deleteTestData('testservice' + n)
      
        
    })
})