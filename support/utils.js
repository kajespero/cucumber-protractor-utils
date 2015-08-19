'use strict';

// add some usefull string function
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function Utils(){

	/*
	* Return an array of group which match with the regexp and found to the value
	* @regexp
	* @value
	*/
	this.matches = function(regexp, value){
		return value.match(regexp);
	}
}

module.exports.Utils = new Utils();