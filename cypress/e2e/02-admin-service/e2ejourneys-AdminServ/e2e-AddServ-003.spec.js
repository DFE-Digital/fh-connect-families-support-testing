describe('| e2e-AddServ_003 | Add Service - familysupport - Online/inperson - Children - Telugu - Not Paid - WebsiteContact |',function(){
     const num = Date.now();
     const n = num.toString();
    it('Suffolk County Council - familysupport - Online/inperson - address - Children - Telugu - Not Paid - emailContact  ',function(){
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
       cy.serviceType1({familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        cy.serviceType2({supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
        //type of service
        cy.serviceDeliveryType({online:'2', inperson:'1'})
        // add address
        cy.addAddress()
        //OfferAtFamiliesPlace
     //    // cy.OfferAtFamiliesPlace('Yes')
        // who is it for ?
        cy.whoFor('Yes','1','2')
        // what language 
        cy.whatLanguage('Telugu')
        //pay for service
        cy.payForService('No')
        //contact details
         cy.contactDetails({Website:'website'},'www.gov.uk')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService' + n,"Support with parenting")
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })
})