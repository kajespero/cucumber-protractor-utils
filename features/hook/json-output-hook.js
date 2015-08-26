var Cucumber = require('cucumber'),
		fs = require('fs'),
		path = require('path');
module.exports = function JsonOutputHook() { 
  var JsonFormatter = Cucumber.Listener.JsonFormatter();

  JsonFormatter.log = function (json) {
  	var opts = global.optionsEnv;
  	if(opts.log.save){
  		fs.writeFile(path.join(__dirname, opts.log.path), json, function (err) {
	      if (err) console.error('error : ' +err);
	      console.log('json file location: ' + path.join(__dirname, '../../cucumber-test-results.json'));
    	});
  	} 
  };
 
  this.registerListener(JsonFormatter);
};