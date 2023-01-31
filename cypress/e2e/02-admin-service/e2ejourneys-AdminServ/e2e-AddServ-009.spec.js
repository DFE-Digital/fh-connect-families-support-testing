describe('| e2e-AddServ_009 | Add Service - transport - Online/telephone - Children - Hebrew/English - Paid - telephoneContact |',function(){
    const num = Date.now();
    const n = num.toString();
    it('Tower Hamlets - transport - Online/telephone - Children - Hebrew/English - Paid - emailContact  ',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('Tower Hamlets Council')
        // select add service
        cy.welcomePage('add','Tower Hamlets Council')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({transport:'be261f9e-f024-46f8-8b5b-58251f25388d'})
        cy.serviceType2({communitytransport:'93a29b1e-acd9-4abf-9f30-07dce3378558'})
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
        cy.checkDetails('TestService' + n,'Community transport')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })
})