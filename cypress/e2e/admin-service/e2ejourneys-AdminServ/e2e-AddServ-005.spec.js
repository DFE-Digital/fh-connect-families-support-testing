describe('| e2e-AddServ_005 | Add Service - transport - Online - Children - Tamil/English - Paid/Hour - Email |',function(){
    const num = Date.now();
    const n = num.toString();
    it('London Borough of Redbridge - transport - Online - address - Children - English - Paid/Hour - TextMessage  ',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('London Borough of Redbridge')
        // select add service
        cy.welcomePage('add','London Borough of Redbridge')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({transport:'be261f9e-f024-46f8-8b5b-58251f25388d'})
        cy.serviceType2({communitytransport:'93a29b1e-acd9-4abf-9f30-07dce3378558'})
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
        cy.checkDetails('TestService' + n,'Community transport')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })

})