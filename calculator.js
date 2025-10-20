function add(input_string) {
	if (input_string === "" || input_string.length === 0) { return_value = 0; }
	let number_string_array = input_string.match(/-?\d+(\.\d+)?/g);
	if (number_string_array === null) {
		return 0;
	} else {
		let numbers = number_string_array.map(Number);
		if (numbers.length === 1) { return numbers[0]; }
		let added_value = 0;
		let negative_numbers = [];
		negative_numbers = numbers.filter(number => number < 0);
		console.log(negative_numbers);
		if (negative_numbers.length > 0) {
			throw new Error('Negative numbers not allowed ' + negative_numbers.join(','));
		}
		added_value = numbers.reduce((sum, n) => sum + n, 0);
		return added_value;
	}
}

module.exports = { add }