function add(input_string) {
	if (input_string === "" || input_string.length === 0) { return_value = 0; }
	let number_string_array = input_string.match(/\d+/g);
	if (number_string_array === null) {
		return 0;
	} else {
		let numbers = number_string_array.map(Number);
		if (numbers.length === 1) { return numbers[0]; }
	}
}

module.exports = { add }