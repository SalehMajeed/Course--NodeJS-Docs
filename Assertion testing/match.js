const assert = require('assert');

function match(val, regex) {
	try {
		assert.match(val, regex);
	} catch (e) {
		console.log(e);
	}
}

match('I will fail', new RegExp(/pass/));
