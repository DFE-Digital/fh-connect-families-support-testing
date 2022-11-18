describe('| e2e-AddServ_001 | Add Service - familyhub/supportwithparenting/health - Online - NotforChildren - English - Not Paid - emailContact |',function(){
    it('familyhub/supportwithparenting/health - Online - NotforChildren - English - Not Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService 001')
        // select required service(s)
        cy.selectSupport({familyhub:'d242700a-b2ad-42fe-8848-61534002156c',supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63',health:'32712b43-e4f7-484f-97d7-beb3bb463133'})
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
        cy.checkDetails('TestService 001','FamilyHub')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService 001')
    })
})