window.onload = function()	{
	alert( "welcome" );
$(document).ready(function() {
	var displayStuff, doMaths, value1, value2, operation;
	
	displayStuff = {
		checkIfNull: function()	{
			var getDisplay = $("#display").html();
			if (getDisplay === "0")	{
				$("#display").empty();
			}	else if (getDisplay === "00")	{
				$("#display").empty();
			};
		},
		
		clear: function()	{
			$("#display").empty();
			$("#display").append("0");
		}
	};

	doMaths = {
		add: function(a, b)	{
			var result = a + b;
			return result;
		},
		subtract: function(a, b)	{
			var result = a - b;
			return result;
		},
		multiply: function(a, b)	{
			var result = a * b;
			return result;
		},
		divide: function(a, b)		{
			var result = a / b;
			return result;
		},
		percent: function(a, b)		{
			var result = a * (b / 100);
			return result;
	}
};

$("#one").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("1");
});

$("#two").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("2");
});

$("#three").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("3");
});

$("#four").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("4");
});

$("#five").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("5");
});

$("#six").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("6");
});

$("#seven").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("7");
});

$("#eight").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("8");
});

$("#nine").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("9");
});

$("#zero").click(function()	{
	displayStuff.checkIfNull();
	$("#display").append("0");
});

$("#clear").click(function()	{
	displayStuff.clear();
});

$("#equals").click(function()	{
	value2 = $("#display").html();
	value2 = parseInt(value2, 10);
	displayStuff.clear();
	displayStuff.checkIfNull();
	if (operation === "addition")	{
		$("#display").append(doMaths.add(value1, value2));
	}	else if (operation === "subtraction")	{
		$("#display").append(doMaths.subtract(value1, value2));
	}	else if (operation === "multiplication")	{
		$("#display").append(doMaths.multiply(value1, value2));
	}	else if (operation === "division")	{
		$("#display").append(doMaths.divide(value1, value2));
	};
});

$("#add").click(function()	{
	value1 = $("#display").html();
	value1 = parseInt(value1, 10);
	operation = "addition"
	displayStuff.clear();
});
$("#subtract").click(function()	{
	value1 = $("#display").html();
	value1 = parseInt(value1, 10);
	operation = "subtraction"
	displayStuff.clear();
});
$("#multiply").click(function()	{
	value1 = $("#display").html();
	value1 = parseInt(value1, 10);
	operation = "multiplication"
	displayStuff.clear();
});
$("#divide").click(function()	{
	value1 = $("#display").html();
	value1 = parseInt(value1, 10);
	operation = "division"
	displayStuff.clear();
});
$("#percent").click(function()	{
	value1 = $("#display").html();
	value1 = parseInt(value1, 10);
	operation = "percent"
	displayStuff.clear();
});
});

$("#separator").click(function()	{
	});
};