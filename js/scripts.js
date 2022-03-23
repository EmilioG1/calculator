//business logic

function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

//user logic

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);
		$("#outputAdd").text(result);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#sub1").val());
		const number2 = parseInt($("#sub2").val());
		const result = subtract(number1, number2);
		$("#outputSub").text(result);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#multi1").val());
		const number2 = parseInt($("#multi2").val());
		const result = multiply(number1, number2);
		$("#outputMult").text(result);
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#div1").val());
		const number2 = parseInt($("#div2").val());
		const result = divide(number1, number2);
		$("#outputDiv").text(result);
	});




	
});
// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

// const result = add(number1, number2);
// alert(result);

// function temp(num) {
// 	return ((num - 32) * (5 / 9));
// }

// const num = parseInt(prompt("Enter a temperature in Fahrenheit:"));
// const result = temp(num);
// alert(result.toFixed(1) + " degrees C");

