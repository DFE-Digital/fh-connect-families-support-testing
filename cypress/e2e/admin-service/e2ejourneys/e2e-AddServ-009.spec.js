describe.skip('| e2e-AddServ_009 | Add Service - Org - Online/inperson - NotforChildren - English - Not Paid - emailContact |',function(){
    it('Org - Online/inperson - address - NotforChildren - English - Not Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService 003')
        // select required service(s)
        cy.selectSupport({children:'bccagegroup:37',organisation:'bccsource:Organisation'});
        // cy.selectSupport('organisation','children')
        //type of service
        cy.serviceDeliveryType({online:'2', inperson:'1'})
        // add address
        cy.addAddress()
        // who is it for ?
        cy.whoFor('No')
        // what language 
        cy.whatLanguage('English')
        //pay for service
        cy.payForService('No')
        //contact details
        cy.contactDetails('Email','email','test@email.co.uk')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService002')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService002')
    })
})