'use strict';

var Support = require('../../support/support.js');

var steps = function() {

	var support = new Support(browser);

	this.Given(/^get "([^"]*)"$/, function (arg1, callback) {
		 support.get(arg1);
		 callback();
	});

	// title particular step 
	this.Then(/^I should see "([^"]*)" as the page title$/, function (propertyValue, callback) {
		browser.getTitle().then(function(value){
			support.assertEquals(propertyValue, value, callback);
		});
	});

	// step to check the visibility of an element by its id
	this.Then(/^"([^"]*)" is visible$/, function (elmt, callback) {
		element(by.css(elmt)).isPresent().then(function(isPresent){
			support.assertIsPresent(isPresent, elmt,callback);
		});
	});

	//step to check if the number of an element found by its class is at least the number expected
	this.Then(/^I should see "(.[^"]*)" at least "([^"]*)" times$/, function (cssSelector, times, callback) {
		element.all(by.css(cssSelector)).count().then(function(nb){
			support.assertAtLeast(times, nb, cssSelector, callback);
		});
	});

	//step to check if the number of an element found by its class is at most the number expected
	this.Then(/^I should see "(.[^"]*)" at most "([^"]*)" times$/, function (cssSelector, times, callback) {
  	element.all(by.css(cssSelector)).count().then(function(nb){
			support.assertAtMost(times, nb, cssSelector, callback);
		});
	});

	// step click on a link represented by its class
	this.When(/^I click on "(.[^"]*)" link$/, function (linkSelector, callback) {
  	support.click(linkSelector, callback);
	});

	// step check if an element found by its class contains the expected text
	this.Then(/^I should see "([^"]*)" contains "([^"]*)"$/, function (cssSelector, expectedValue, callback) {
  	support.assertContains(cssSelector, expectedValue, callback);
	});

	// step to check page 
	this.Then(/^I expected to be on "([^"]*)"$/, function (uri, callback) {
  	support.checkUrl(uri, callback);
	});

	// step to fill a form with a "json" object 
	this.Then(/^I fill "([^"]*)" with "([^"]*)"$/, function (formSelector, jsonValue, callback) {
		var jsonObj = JSON.parse(jsonValue.replace(/'/g, '"'));
		if(jsonObj){
			support.fillForm(formSelector, jsonObj);
		}
  	callback();
	});

	// step to validate form
	this.Then(/^Submit the form with "([^"]*)"$/, function (selector, callback) {
  	support.click(selector, callback);
	});

	// step to check the equality of a value
	this.Then(/^I should see "([^"]*)" equal to "([^"]*)"$/, function (selector, expectedValue, callback) {
  	support.assertValueEqual(selector, expectedValue, callback);
	});
}

module.exports = steps;
