const assert = require('assert');

function fail(message) {
	try {
		assert.fail(message);
	} catch (e) {
		console.log(e);
	}
}

fail();
fail('Oops');
fail(new Array(5));
