'use strict';
exports.config = {
  'seleniumAddress': 'http://localhost:4444/wd/hub',
  'specs': ['features/*.feature'],
  multiCapabilities: [{
    'browserName': 'chrome',
    'phantomjs.binary.path': require('phantomjs').path,
  }],
  'baseUrl': '',
  'framework': 'cucumber',
  'cucumberOpts':{
  	require: ['./features/step_definitions/*.js','./features/hook/*.js'],
  	format:'json',
  },
  onPrepare: function() {
    global.optionsEnv = {
      log:{
        save:true,
        path:'../../cucumber-test-results.json',
      }
    }
  },
};