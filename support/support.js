'use strict';

var chai = require('chai'),
		chaiAsPromised = require('chai-as-promised'),
		protractorExpectedCondition = protractor.ExpectedConditions,
		Utils = require('./utils.js').Utils;
chai.use(chaiAsPromised);

var expect = chai.expect;

function Support(browser){

	var _self = this;

	this.get = function(uri){
		return browser.get(uri);
	}

	this.assertEquals = function(expected, value, next){
		expect(expected, 'Expected value is ' + expected + ' but you have ' + value).to.equal(value);
		if(next) next();
	};

	this.assertIsPresent = function(expected, selector, next){
		expect(expected, 'Element id '+ selector).to.equal(true);
		if(next) next();
	};

	this.assertTimes = function(expectedTimes, times, cssSelector, next){
		expect(expectedTimes > times, expectedTimes + ' elements'+ (cssSelector ?  ' with css class "' + cssSelector : '') 
				+ '" are found but you expected to click on element found at ' + times).to.equal(true);
		if(next) next();
	};

	this.assertAtLeast = function(expectedTimes, times, selector, next){
		expect(expectedTimes <= times, times + ' elements'+ (selector ?  ' with css class "' + selector : '') 
			+ '" are found but you expected to find at least ' + expectedTimes).to.equal(true);
		if(next) next();
	};

	this.assertAtMost = function(expectedTimes, times, selector, next){
		expect(expectedTimes >= times, times + ' elements'+ (selector ?  ' with css class "' + selector : '') 
			+ '" are found but you expected to find at most ' + expectedTimes).to.equal(true);
		if(next) next();
	};

	this.assertContains = function(cssSelector, expectedValue, next){
		var matches = Utils.matches(/(^.+[a-zA-Z]*)\[(\d)\]/, cssSelector),
				selector = matches && matches.length > 2 ? matches[1] : cssSelector,
				elementAt = matches && matches.length > 2 ? matches[2] : 0;
		element.all(by.css(selector)).then(function(items) {
			_self.assertTimes(items.length, elementAt, selector);
			items[elementAt].getText().then(function(value){
				_self.assertEquals(expectedValue, value);
				if(next) next();
			});
			
		});
	};

	this.click = function(linkSelector, next){
		var matches = Utils.matches(/(^.+[a-zA-Z]*)\[(\d)\]/, linkSelector),
				cssSelector = matches && matches.length > 2 ? matches[1] : linkSelector,
				elementAt = matches && matches.length > 2 ? matches[2] : 0;

		element.all(by.css(cssSelector)).then(function(items) {
			_self.assertTimes(items.length, elementAt, cssSelector);
			var elementClickable = protractorExpectedCondition.elementToBeClickable(items[elementAt]);
			browser.wait(elementClickable, 5000);
			items[elementAt].click();
			browser.waitForAngular().then(function(){
				if(next) next();
			});
		});
	};
}
module.exports = Support;