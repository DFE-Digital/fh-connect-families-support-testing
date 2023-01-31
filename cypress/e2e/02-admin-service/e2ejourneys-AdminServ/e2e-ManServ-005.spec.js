describe('| e2e-ManServ_005 | Manage Service - view - Change title ',function(){
    it('Change type of service - Salford City Council - Journey - Manage Service - edit - Change type of service',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('Salford City Council')
        const num = Date.now();
        const n = num.toString();
        // select add service
        cy.welcomePage('add','Salford City Council')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({health:'32712b43-e4f7-484f-97d7-beb3bb463133',familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        cy.serviceType2({hearingandsight:'11696b1f-209a-47b1-9ef5-c588a14d43c6',supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
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
        cy.checkDetails('TestService' + n,'Hearing and sight')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        // manage service 
       cy.editService('testservice' + n)
      
        // edit type of service
        cy.typeOfServiceEdit('TestService' + n)
         // select required service(s)
        cy.serviceType1({transport:'be261f9e-f024-46f8-8b5b-58251f25388d'})
        cy.serviceType2({communitytransport:'93a29b1e-acd9-4abf-9f30-07dce3378558'})
         // check details
        cy.checkDetailsEdit('TestService' + n,'Community transport')
      // manage service 
        cy.ViewServices('TestService' + n)
       cy.deleteService('testservice' + n)
       // confirm deletion 
       cy.deleteConfirm('Yes')

        
    })
})