describe('| e2e-AddServ_006 | Add Service - pregnancy,birthandearlyyears - Online/telephone - Children - Hebrew/English - Paid - telephoneContact |',function(){
    const num = Date.now();
    const n = num.toString();
    it('Bristol County Council - pregnancy,birthandearlyyears - Online/telephone - Children - Hebrew/English - Paid - emailContact  ',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('Bristol County Council')
        // select add service
        cy.welcomePage('add','Bristol County Council')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({'pregnancy,birthandearlyyears':'ff704172-db6a-4e7a-b612-cd925e0aa7a0'})
        cy.serviceType2({midwifeandmaternity:'19c29d11-ffbc-41d0-841c-ea8f0dfdda94'})
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
        cy.checkDetails('TestService' + n,'Midwife and maternity')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })
})