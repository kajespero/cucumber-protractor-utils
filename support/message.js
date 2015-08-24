'use strinct';

const properties = {
	'assert':{
		'equal': 'Expected value is {0} but you have {1}',
		'present': 'Element id {0}',
		'times': '{0} elements with css class "{1}" are found but you expected to click on element found at {2}',
		'at-least': '{0} elements with css class "{1}" are found but you expected to find at least {2}',
		'at-most': '{0} elements with css class "{1}" are found but you expected to find at most {2}',
		'contains': '{0} value is expected to contains {1}'
	}
};

function Message(){
	this.get = function(key){
		var keys = key.split('.');
		
		var obj = undefined;
		for(var i = 0; i < keys.length; i ++){
			obj = !obj ?  properties[keys[i]] : obj[keys[i]];
		}
		return obj;
	};
}

module.exports.Message = new Message();