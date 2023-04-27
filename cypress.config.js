const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
       'baseUrl': 'https://test.manage-family-support-services-and-accounts.education.gov.uk/',

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