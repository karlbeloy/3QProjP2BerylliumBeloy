function blurReq()
{
	var reqEval = document.getElementById("newTime");
	if(reqEval.value == "") {
		reqEval.style.border = "2px solid red";
	}
	else {
		reqEval.style.border = "2px solid green";
	}
}
function reqSub()
{
	alert("Your new schedule has now been submitted. Please wait for approval from the nurses.");
	
	var newTimeV = document.getElementById("newTime").value;
	document.getElementById("newTimeF").innerHTML = "New Schedule: " + newTimeV;
	
	return false;
}