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
test('return the same number for single number with text input', () => {
	expect(add("sum 5")).toBe(5);
});

/* These should return added values of 2 numbers as input */
test('return added value for two number input, separated by comma', () => {
	expect(add("1,2")).toBe(3);
});
test('return added value for two numbers with text input, separated by comma', () => {
	expect(add("sum this 5,3")).toBe(8);
});

/* These should return added values of n numbers delimited by comma as input */
test('return added value for n numbers input separated by comma', () => {
	expect(add("1,2,3,4")).toBe(10);
});
test('return added value for n numbers and text input separated by comma', () => {
	expect(add("sum this 5,3,2,40")).toBe(50);
});

