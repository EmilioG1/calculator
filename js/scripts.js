// function add(number1, number2) {
// 	return number1 + number2;
// }

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

// const result = add(number1, number2);
// alert(result);

function temp(num) {
	return ((num - 32) * (5 / 9));
}

const num = parseInt(prompt("Enter a temperature in Fahrenheit:"));
const result = temp(num);
alert(result.toFixed(1) + " degrees C");