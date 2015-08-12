'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

function Support(browser){

	this.get = function(uri){
		return browser.get(uri);
	}

	this.assertEquals = function(expected, value, next){
		expect(expected, 'Expected value is ' + expected + ' but you have ' + value).to.equal(value);
		next();
	};

	this.assertIsPresent = function(expectedElmt, next){
		expect(expectedElmt.isPresent(), 'Element id #'+ expectedElmt.getId()).to.become(true).and.notify(next);
	};

	this.assertAtLeast = function(expectedTimes, times, selector, next){
		expect(expectedTimes <= times, times + ' elements'+ (selector ?  ' with css class "' + selector : '') 
			+ '" are found but you expected to find at least ' + expectedTimes).to.equal(true);
		next()
	}
}
module.exports = Support;