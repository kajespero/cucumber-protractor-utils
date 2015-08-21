'use strict';

var chai = require('chai'),
		chaiAsPromised = require('chai-as-promised'),
		protractorExpectedCondition = protractor.ExpectedConditions,
		Utils = require('./utils.js').Utils,
		Message = require('./message.js').Message;
chai.use(chaiAsPromised);

var expect = chai.expect;

function Support(browser){

	var _self = this;

	this.get = function(uri){
		return browser.get(uri);
	};

	this.checkUrl = function(uri, next){
		browser.getCurrentUrl().then(function(currentUrl){
			expect(currentUrl.endsWith(uri)).to.equal(true);
			if(next) next();
		});
	};

	this.assertEquals = function(expected, value, next){
		expect(expected, Message.get('assert.equal').format(expected, value)).to.equal(value);
		if(next) next();
	};

	this.assertIsPresent = function(expected, selector, next){
		expect(expected, Message.get('assert.present').format(selector)).to.equal(true);
		if(next) next();
	};

	this.assertTimes = function(expectedTimes, times, cssSelector, next){
		expect(expectedTimes > times, Message.get('assert.times').format(expectedTimes, cssSelector, times)).to.equal(true);
		if(next) next();
	};

	this.assertAtLeast = function(expectedTimes, times, selector, next){
		expect(expectedTimes <= times, Message.get('assert.at-least').format(times, selector, expectedTimes)).to.equal(true);
		if(next) next();
	};

	this.assertAtMost = function(expectedTimes, times, selector, next){
		expect(expectedTimes >= times, Message.get('assert.at-most').format(times, selector, expectedTimes)).to.equal(true);
		if(next) next();
	};

	this.assertContains = function(cssSelector, expectedValue, next){
		var matches = Utils.matches(/(^.+[a-zA-Z]*)\[(\d)\]/, cssSelector),
				selector = matches && matches.length > 2 ? matches[1] : cssSelector,
				elementAt = matches && matches.length > 2 ? matches[2] : 0;
		element.all(by.css(selector)).then(function(items) {
			_self.assertTimes(items.length, elementAt, selector);
			items[elementAt].getText().then(function(value){
				_self.assertEquals(expectedValue, value, next);
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
			items[elementAt].click().then(function(){
				browser.waitForAngular().then(function(){
					if(next) next();
				});
			});
		});
	};
}

module.exports = Support;