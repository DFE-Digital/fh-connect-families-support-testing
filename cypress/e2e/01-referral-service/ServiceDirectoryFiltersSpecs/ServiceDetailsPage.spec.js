describe('Referral Service - Service details page',function(){
    //https://dfedigital.atlassian.net/browse/FHG-2371
    const expectedPageUrl = "https://test.connect-families-to-support.education.gov.uk/ProfessionalReferral/LocalOfferDetail?serviceid=";

    it('Referral Service - service details page ',function(){
        cy.visit('/', {failOnStatusCode: false})
       // landing page
        cy.login('oneloginusername', 'oneloginpassword', false);
        cy.visit('/');
        cy.refServLanding();
       //sign on page 
       //cy.signOnPage()
       // search by post code page
       cy.searchbypostcode('bs2 0sp')
       // search results page
       cy.contains('Wellspring Settlement Universal and Targeted Parenting support for parents with children under 5 years').click()
        // Then Service Details page is displayed
       cy.checkPageUrlContains(expectedPageUrl)
        // And service details are shown
        expect(cy.get('[data-testid="service-name"]')).to.exist;
        expect(cy.get('[data-test-id="support-it-offers"]')).to.exist;
        expect(cy.get('[data-test-id="does-support-relate-to-children-or-young-people"]')).to.exist;
        expect(cy.get('[data-test-id="languages"]')).to.exist;
        expect(cy.get('[data-test-id="cost"]')).to.exist;

        // And how to access service is shown
        expect(cy.get('[data-test-id="how-this-service-is-provided"]')).to.exist;

        // And location of service is shown
        expect(cy.get('[data-test-id="address"]')).to.exist;
        expect(cy.get('[data-test-id="family-hub"]')).to.exist;
        expect(cy.get('[data-test-id="location-details"]')).to.exist;
        expect(cy.get('[data-test-id="days-service-is-available"]')).to.exist;
        expect(cy.get('[data-test-id="extra-availability-details"]')).to.exist;

        // And more details are shown
        expect(cy.get('[data-testid="description-value"]')).to.exist;

        // And contact details are shown
        expect(cy.get('[data-test-id="email"]')).to.exist;
        expect(cy.get('[data-test-id="phone"]')).to.exist;
        expect(cy.get('[data-test-id="website"]')).to.exist;
        expect(cy.get('[data-test-id="text-message"]')).to.exist;
    })
})