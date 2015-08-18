'use strict';

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