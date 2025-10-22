# Simple String Calculator (TDD Kata)
A simple string calculator that takes a string of numbers and returns the sum of all numbers in the string. 
The string input should be restricted to 100 number of numbers, with each number less than or equal to 1000, and no negative numbers. 
The limit on number of numbers and value of number is to ensure calculations never reach the big number state. 
Although the biggest number JavaScript can handle is much greater than this limit of 100 x 1000 = 100,000, but that requires a slightly modified implementation of this solution.

Codebase used: JavaScript and Jest

## Features
- Sum is 0 if the input string has no numbers.
- Sum is the same number entered if the input string has only one number.
- Sums numbers separated by comma, semicolon, plus, underscore or linefeed
- Throws an exception if input string has any negative number. The exception contains a comma separated list of negative numbers from the input string.
- Throws an exception if input string has very large numbers (> 1000). The exception contains a comma separated list of large numbers from the input string.
- Throws an exception if input string has more than 100 numbers in input.
- Allows custom delimiter to be specified using a delimiter definition. It has to be present at the start of the input string.
- Throws an exception if more than one delimiter definition is found.
- Throws an exception if delimiter definition includes any general tokens from regular expression like linefeed (\n), tab (\t), carriage return(\r).
- Throws an exception if the delimiter definition is malformed or present not at the start of the string input.
 
## Examples
Examples of input string:
- "5;3;1" will show a sum of 9.
- "5,3,1" will show a sum of 9.
- "5+3+1" will show a sum of 9.
- "//#\n5#3#1" will show a sum of 9.
- "//ADD\n5ADD3ADD1" will show a sum of 9.

A input string contains numbers which are either comma separated, semi-colon separated, or separated by new line like "5,3,1".
A custom delimiter can be given in the input string with a delimiter definition. A delimiter definition has the following parts:
- Two forward slashes (//)
- Delimiter eg. #
- New line (\n)
Examples of custom delimiters are "//#\n", "//$\n", "//+\n"
Examples of input string with custom delimiters "//#\n5#3#1", "//$\n5$3$1", "//+\n5+3+1"
