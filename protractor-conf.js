'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/*.feature'],
  multiCapabilities: [{
    browserName: 'chrome'
  }],
  baseUrl: '',
  framework: 'cucumber'
};