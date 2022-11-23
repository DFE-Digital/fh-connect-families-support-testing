describe('| e2e-AddServ_007 | Add Service - familyhub - Online/telephone - Children - Welsh/English - Not Paid - all |',function(){
    const num = Date.now();
    const n = num.toString();
    it('familyhub - Online/telephone - address - NotforChildren - English - Not Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.selectSupport({familyhub:'d242700a-b2ad-42fe-8848-61534002156c'})
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
        cy.checkDetails('TestService' + n,'FamilyHub')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
   
    })
})