var input = document.getElementById("input");
var output = document.getElementById("output");

var MSG_TAX;
var MSG_INVALID = "The number you have entered is invalid.";

function calcTax()
{
	var income = input.value;
	var tax = 0;

	if (income < 0)
		output.innerHTML = MSG_INVALID;
}
