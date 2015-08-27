Testing Tools
===
My goal is to test a web site I am working on. The web site is develop with angularjs. 
In a meantime I am trying to develop some support to be able to reuse it.

Features :

* Click on element to a certain position e.g : I click on ".info-link[2]" link => click on the second element found for the css selector.
* Assert if an element is found at least or at most n times.
* Assert if  element's text and expected value are equals
* Assert if an element is visible
* Assert if an element text contains an expected value 
* Fill form with string value looks like json {'html element name':'value to fill'}

Work in progress...

How it works
===

For windows users replace all / to \\\\ into Gruntfile.js and package.json

	npm install

Write your features.
You can find an example to ./features/example.feature

Start server 


	grunt selenium


Launch test 


	grunt test --url <Base url default value is http://localhost:9000> 


Protractor config:  

~~~
exports.config = {
  'seleniumAddress': 'http://localhost:4444/wd/hub',
  // directory to define features
  'specs': ['features/*.feature'],
  multiCapabilities: [{
	//'browserName': 'firefox',
	//'browserName': 'phantomjs', // not recomended. 
	//'phantomjs.binary.path': require('phantomjs').path, // if phantomjs is used as a browser
	'browserName': 'chrome',
  }],
  'baseUrl': '',
  'framework': 'cucumber',
  'cucumberOpts':{
  	require: ['./features/step_definitions/*.js','./features/hook/*.js'],
  	// output style
  	format:'json',
  },
  onPrepare: function() {
    global.optionsEnv = {
      log:{
        save:true,
        // path to save result file
        path:'../../cucumber-test-results.json',
      }
    }
  },
};
~~~

Frameworks / librairies used
===
[Cucumber]  

[Protractor] 

[Chai]


[CUCUMBER]:https://github.com/cucumber/cucumber-js
[PROTRACTOR]:https://angular.github.io/protractor/#/
[CHAI]:http://chaijs.com
[GRUNT]:http://gruntjs.com/
