describe('| smokeTest-AdminService.spec | Manage Service - Create and delete - confirm deletion',function(){
    it('Journey - delete - confirm deletion ',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('Bristol County Council')
        const num = Date.now();
        const n = num.toString();
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({health:'32712b43-e4f7-484f-97d7-beb3bb463133',familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        cy.serviceType2({hearingandsight:'11696b1f-209a-47b1-9ef5-c588a14d43c6',supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
        //type of service
        cy.serviceDeliveryType({online:'2', telephone:'3', inperson:'1'})
        // add address
        cy.addAddress()
        //OfferAtFamiliesPlace
        // cy.OfferAtFamiliesPlace('Yes')
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
        cy.checkDetails('TestService' + n,'Hearing and sight')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        // manage service 
      // cy.ViewServices('TestService' + n)
       cy.deleteService('testservice' + n)
       // confirm deletion 
       cy.deleteConfirm('Yes')
        
    })
})