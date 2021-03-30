const assert = require('assert');

function rejects(fn, err) {
	try {
		assert.rejects(fn, err);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

rejects(
	async () => {
		throw new TypeError('Wrong value');
	},
	err => {
		assert.strictEqual(err.name, 'TypeError');
		assert.strictEqual(err.message, 'Wrong value');
		return true;
	}
);
