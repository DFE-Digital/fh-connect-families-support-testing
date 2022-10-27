const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       'baseUrl': 'https://s181d01-ca-fh-sd-admin-ui-dev.calmstone-6ca2c9be.westeurope.azurecontainerapps.io/',
      // 'baseUrl': 'https://localhost:7216/',
      // 'baseUrl': 'https://as-fh-service-directory-admin-ui-main.azurewebsites.net/',
      // 'baseUrl': 'https://fh-family-experience-prototyp.herokuapp.com/',
      // 'baseUrl': 'http://localhost:3000/mvp-1/find-services-group-or-activity', 
    'specPattern': ['**/*.spec.js', '**/*.feature'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
    'defaultCommandTimeout': 15000,
    'responseTimeout': 60000,
  },
});