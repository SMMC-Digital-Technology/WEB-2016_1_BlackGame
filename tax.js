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
	else if (income <= 16000)
		output.innerHTML = MSG_TAX + tax;
	else if (income <= 52500)
	{
		tax = (income - 16000) * 0.1;
		output.innerHTML = MSG_TAX + tax;
	}
	else if (income <= 113000)
	{
		tax = 3650 + (income - 52500) * 0.16;
		output.innerHTML = MSG_TAX + tax;
	}
	else if (income <= 184500)
	{
		tax = 13330 + (income - 113000) * 0.24;
		output.innerHTML = MSG_TAX + tax;
	}
	else
	{
		tax = 30490 + (income - 184500) * 0.36;
		output.innerHTML = MSG_TAX + tax;
	}
}
