'use strict';

module.exports = function(grunt){
  var pathUrl = grunt.option('pathUrl') || 'http://localhost:9000/'

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-shell');
  
	grunt.initConfig({
    shell:{
      selenium:{
        command: './node_modules/protractor/bin/webdriver-manager start',
        options:{
          stdout: true
        }
      }
    },
    protractor_webdriver: {
      options: {
        keepAlive : true 
      },
    },
    protractor: {
      options: {
        configFile: "protractor-conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          baseUrl: pathUrl
        }
      },
      all:{}
    },
    cucumberjs: {
      options: {
        format: 'html',
        output: 'report/cucumber_report.html',
        theme: 'simple'
      },
      my_features: ['features/*.feature']
    },
  });

  grunt.registerTask('selenium',['shell:selenium']);
  grunt.registerTask('test', ['protractor_webdriver','protractor']);
};