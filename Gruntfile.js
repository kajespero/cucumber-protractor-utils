'use strict';

module.exports = function(grunt){
  var url = grunt.option('url') || 'http://localhost:9000/'

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
          baseUrl: url,
        }
      },
      all:{}
    },
    cucumberjs: {
      options: {
        format: 'pretty',
        output: 'my_report.html',
        theme: 'bootstrap'
      },
      my_features: ['features/*.feature']
    },
  });

  grunt.registerTask('selenium',['shell:selenium']);
  grunt.registerTask('test', ['protractor_webdriver','protractor']);
};