describe.skip('test',function(){
    it('test',function(){
        cy.visit('/OrganisationAdmin/ContactDetails')
         cy.multiContactDetails('Email','email','test@email.co.uk','Telephone','phone','020909878','Website','website','www.gov.uk','Text message','text','02087487413')
        
    })
})