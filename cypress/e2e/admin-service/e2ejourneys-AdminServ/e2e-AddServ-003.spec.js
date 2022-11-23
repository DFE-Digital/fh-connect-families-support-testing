describe('| e2e-AddServ_003 | Add Service - familysupport - Online/inperson - Children - Telugu - Not Paid - WebsiteContact |',function(){
     const num = Date.now();
     const n = num.toString();
    it('familysupport - Online/inperson - address - Children - Telugu - Not Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.selectSupport({familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        //type of service
        cy.serviceDeliveryType({online:'2', inperson:'1'})
        // add address
        cy.addAddress()
        //OfferAtFamiliesPlace
        cy.OfferAtFamiliesPlace('Yes')
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
        cy.checkDetails('TestService' + n,"Family support")
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })
})