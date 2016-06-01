var input = document.getElementById("input");
var output = document.getElementById("output");

var MSG_TAX;

function calcTax(x)
{
	var tax;

	if (x <= 16000)
		tax = 0;
	else if (x <= 52500)
		tax = (x - 16000) * 0.1;
	else if (x <= 113000)
		tax = 3650 + (x - 52500) * 0.16;
	else if (x <= 184500)
		tax = 13330 + (x - 113000) * 0.24;
	else
		tax = 30490 + (x - 184500) * 0.36;
	
	return tax;
}

function genGraph()
{
	
}

function taxIo()
{
	var income = input.value;
	
	output.innerHTML = MSG_TAX + calcTax(income);
}
