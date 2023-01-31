describe('| e2e-AddServ_007 | Add Service - activities,clubsandgroups - Online/telephone - Children - Welsh/English - Not Paid - all |',function(){
    const num = Date.now();
    const n = num.toString();
    it('Suffolk County Council - activities,clubsandgroups - Online/telephone - address - NotforChildren - English - Not Paid - emailContact  ',function(){
         cy.visit('/')
        // start page 
        cy.startPage()
        //sign in page
        cy.signInPage()
        // choose organisation
        cy.chooseOrganisation('Suffolk County Council')
        // select add service
        cy.welcomePage('add','Suffolk County Council')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.serviceType1({'activities,clubsandgroups':'16f3a451-e88d-4ad0-b53f-c8925d1cc9e4'})
        cy.serviceType2({'music,artsanddance':'4d362474-79cc-449a-bafe-b128ab3b4f63'})
        //type of service
        cy.serviceDeliveryType({online:'2',telephone:'3'})
        // who is it for ?
        cy.whoFor('Yes','5','12')
        // what language 
        cy.addLanguage('Welsh','English')
        //pay for service
        cy.payForService('No')
        //contact details
         cy.multiContactDetails('Email','email','test@email.co.uk','Telephone','phone','03456066166','Website','website','www.gov.uk','Text message','text','03456066166')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService' + n,'Music, arts and dance')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
   
    })
})