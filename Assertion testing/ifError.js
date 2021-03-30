const assert = require('assert');

function if_error(val) {
	try {
		assert.ifError(val);
	} catch (e) {
		console.log(e);
	}
}

if_error(null);
if_error(undefined);
if_error(1);
if_error(new Error('err'));
