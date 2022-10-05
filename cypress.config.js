const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      'baseUrl': 'http://localhost:21914/',
    //  'baseUrl': 'https://localhost:7216/',

  //  'baseUrl': 'https://fh-family-experience-prototyp.herokuapp.com/',
   //'baseUrl': 'http://localhost:3000/mvp-1/find-services-group-or-activity', 
    'specPattern': ['**/*.spec.js', '**/*.feature'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
  
});