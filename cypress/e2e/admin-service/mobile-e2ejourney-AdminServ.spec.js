describe('| mobile-e2ejourney-AdminServ.spec | Manage Service - Create and delete - confirm deletion',function(){
     let device = ['iphone-x','ipad-mini','samsung-s10','samsung-note9']
        for(let i=0;i<device.length;i++){
    it(`${device[i]} Journey - delete - confirm deletion`,function(){
        cy.viewport(`${device[i]}`)
        cy.visit('/OrganisationAdmin/Welcome')
        const num = Date.now();
        const n = num.toString();
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.selectSupport({supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63',health:'32712b43-e4f7-484f-97d7-beb3bb463133'})
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
        cy.checkDetails('TestService' + n,'Health')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        // manage service 
      // cy.ViewServices('TestService' + n)
       cy.deleteService('testservice' + n)
       // confirm deletion 
       cy.deleteConfirm('Yes')
        
    })
}
})