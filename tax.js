/*
Message displayed in the output field along with the calculated tax.
Called in the taxIo function.
*/
var MSG_TAX = "Your annual tax is $";

/*
Function calculates the tax from a specified income and returns it.
The income is specified in function call through the x parameter.
*/
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

/*
Generates a graph of the income vs tax from $0-$250000 and displays it in the graph div in index.html.
Uses the Plotly library's graph generating function from plotly.js linked in index.html. 
*/
function genGraph()
{
	var plot, data, layout;
	var income = [];
	var tax = [];
	
	for (i = 0; i <= 250000; i += 5000)
	{
		income[i] = i;
		tax[i] = calcTax(i);
	}
	
	plot =
	{
		x: income,
		y: tax,
		type: "scatter",
		mode: "lines+markers",
		name: "tax"
	};
	
	data = [plot];
	
	layout =
	{
		title: "Annual Tax in Zabututi",
		yaxis: 
		{
			title: "Tax (p.a.)"
		},
		xaxis:
		{
			title: "Income (p.a.)",
			range: [0, 250000]
		}
	};
	
	Plotly.newPlot("graph", data, layout);
}

/*
Called by the button in index.html using the onClick attribute.
Gets the income from the text field with the ID "input", passes it through the calcTax function and displays it in the paragraph with the ID "output".
*/
function taxIo()
{
	var income = input.value;
	
	output.innerHTML = MSG_TAX + calcTax(income);
}

// Calls the function to generate the graph.
genGraph();
