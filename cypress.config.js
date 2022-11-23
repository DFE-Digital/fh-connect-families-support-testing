const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
       'baseUrl': 'https://s181d01-as-fh-sd-admin-ui-dev.azurewebsites.net/',

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