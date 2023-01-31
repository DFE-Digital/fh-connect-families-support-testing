describe('| mobile-e2ejourney-AdminServ.spec | Manage Service - Create and delete - confirm deletion',function(){
     let device = ['iphone-x','ipad-mini','samsung-s10','samsung-note9']
        for(let i=0;i<device.length;i++){
    it(`${device[i]} Journey - delete - confirm deletion`,function(){
        cy.viewport(`${device[i]}`)
         cy.visit('/')
         cy.dfeBrandingAdminUi()
        // start page 
        cy.startPage()
        cy.dfeBrandingAdminUi()
        //sign in page
        cy.signInPage()
        cy.dfeBrandingAdminUi()
        // choose organisation
        cy.chooseOrganisation('Salford City Council')
        cy.dfeBrandingAdminUi()
        const num = Date.now();
        const n = num.toString();
        // select add service
        cy.welcomePage('add','Salford City Council')
        cy.dfeBrandingAdminUi()
        // give service name
        cy.addService('TestService' + n)
        cy.dfeBrandingAdminUi()
        // select required service(s)
        cy.serviceType1({health:'32712b43-e4f7-484f-97d7-beb3bb463133',familysupport:'94f0ba86-d5fb-4fac-a1ee-f12ba4ef3012'})
        cy.serviceType2({hearingandsight:'11696b1f-209a-47b1-9ef5-c588a14d43c6',supportwithparenting:'005b3184-6ffb-414a-a1e3-6d5674dc0e63'})
        //type of service
        cy.serviceDeliveryType({online:'2', telephone:'3'})
        cy.dfeBrandingAdminUi()
        // who is it for ?
        cy.whoFor('No')
        cy.dfeBrandingAdminUi()
        // what language 
        cy.whatLanguage('English')
        cy.dfeBrandingAdminUi()
        //pay for service
        cy.payForService('No')
        cy.dfeBrandingAdminUi()
        //contact details
        cy.contactDetails({Email:'email'},'abc@email.com')
        cy.dfeBrandingAdminUi()
        //more details
        cy.moreDetails('Test details')
        cy.dfeBrandingAdminUi()
        // check details
        cy.checkDetails('TestService' + n,'Hearing and sight')
        cy.dfeBrandingAdminUi()
        // service added 
        cy.serviceAdded()
        cy.dfeBrandingAdminUi()
        // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        cy.dfeBrandingAdminUi()
        // manage service 
      // cy.ViewServices('TestService' + n)
       cy.editService('testservice' + n)
       cy.dfeBrandingAdminUi()
       // save without making any changes
       cy.saveDetails()
       cy.dfeBrandingAdminUi()
       // validate added service is present in list
        cy.ViewServices('TestService' + n,)
        cy.dfeBrandingAdminUi()
        // manage service 
      // cy.ViewServices('TestService' + n)
       cy.deleteService('testservice' + n)
       cy.dfeBrandingAdminUi()
       // confirm deletion 
       cy.deleteConfirm('Yes')
       cy.dfeBrandingAdminUi()
      
        
    })
}
})