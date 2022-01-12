setInterval(function() { alert("Use me!"); }, 30000);

function myFormula() {
	var box1 = parseFloat(document.getElementById('input1').value);
	var box2 = parseFloat(document.getElementById('input2').value);
	var result;
	if (box1 < 0 || box2 < 0)
	{
		alert("Error :(");
		console.log("Error :(");
	}
	else
	{
		if (document.getElementById('operators-select').selectedIndex == "0")
		{
			result = box1 + box2;
		}
		else if (document.getElementById('operators-select').selectedIndex =="1")
		{
			result = box1 - box2;
		}
		else if (document.getElementById('operators-select').selectedIndex == "2")
		{
			result = box1 * box2;
		}
		else if (document.getElementById('operators-select').selectedIndex == "3")
		{
			if (box1 || box2 == 0)
			{
				result = ("It's over 9000!");
			}
			else
			{
			result = box1 / box2;
			}
		}
		else if (document.getElementById('operators-select').selectedIndex == "4")
		{
			if (box1 || box2 == 0)
			{
				result =("It's over 9000!");
			}
			else
			{
			result = box1 % box2;
			}
		}
		alert(result);
		console.log(result);
	}
}
