const assert = require('assert');

function assert_check(condition) {
	try {
		assert(condition); // it also take message parameter for default failure message.
		console.log('\n Nice Satisfied \n');
	} catch (e) {
		console.log(e);
	}
}

assert_check(5 == '5');
assert_check(5 === '5');
assert_check(5 == '5' && 5 > 8);
assert_check(5 == '5' && 5 < 8);
