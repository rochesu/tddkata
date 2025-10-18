const { add } = require('./calculator.js');

/* These should return 0 when string is empty or doesn't have numbers */
test('return 0 for empty string input', () => {
	expect(add("")).toBe(0);
});
test('return 0 for string input with no number', () => {
	expect(add("sum")).toBe(0);
});

/* These should return the same one number sent as input */
test('return same number for single number input', () => {
	expect(add("1")).toBe(1);
});
test('return the same number for single number and text input', () => {
	expect(add("sum 5")).toBe(5);
});
