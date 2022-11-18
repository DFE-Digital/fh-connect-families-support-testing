const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
       'baseUrl': 'https://s181d01-ca-fh-sd-admin-ui-dev.calmstone-6ca2c9be.westeurope.azurecontainerapps.io/',
  // 'baseUrl': 'https://s181d01-ca-fh-referral-ui-dev.calmstone-6ca2c9be.westeurope.azurecontainerapps.io/',
  // 'baseUrl': 'https://localhost:7270/index',

    'specPattern': ['**/*.spec.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
       return config;
  // implement node event listeners here
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
    'defaultCommandTimeout': 15000,
    'responseTimeout': 60000,
  },
});