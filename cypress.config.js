const { defineConfig } = require("cypress");
const { afterRunHook } = require('cypress-mochawesome-reporter/lib');
var configJson = require('./config.json');

var isAzurePipeline = configJson.isAzurePipeline;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
      'baseUrl': 'https://test.connect-families-to-support.education.gov.uk/',
    'specPattern': ['**/*.spec.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);

        on('after:run', async () => {
            if(!isAzurePipeline) {
                await afterRunHook();
                return;
            }

            console.log('override after:run');
        });
       return config;
  // implement node event listeners here
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
    'defaultCommandTimeout': 15000,
    'responseTimeout': 60000,
    'experimentalRunAllSpecs': true

  },
});