// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const sumTwoSmallestNumbers = (numbers) => {
	const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
	return firstNumber + secondNumber;
};

const numbers = [19, 5, 42, 2, 77];
console.log(sumTwoSmallestNumbers(numbers));

// [19, 5, 42, 2, 77]
// 5 + 2 ===7

// Another way:
function sumTwoSmallestNumbers(numbers) {
	var [a, b] = numbers.sort((a, b) => a - b);
	return a + b;
}
