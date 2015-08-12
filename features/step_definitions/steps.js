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
	this.Then(/^"(#[^"]*)" is visible$/, function (elmt, callback) {
		support.assertIsPresent(element(by.css(elmt)), callback);
	});

	//step to check the number of an element found by its class it is found
	this.Then(/^I should see "(.[^"]*)" at least "([^"]*)" times$/, function (cssSelector, times, callback) {
		element.all(by.css(cssSelector)).count().then(function(nb){
			support.assertAtLeast(times, nb, cssSelector, callback);
		});
	});
}

module.exports = steps;
