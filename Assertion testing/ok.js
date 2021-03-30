const assert = require('assert');

function ok(condition) {
	try {
		assert.ok(condition);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

ok(1);
ok(1 == '1');
ok(1 === '1');
ok(typeof 123 == 'string');
