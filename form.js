function blurRName()
{
	var rNameEval = document.getElementById("rName");
	if(rNameEval.value == "") {
		rNameEval.style.border = "2px solid red";
	}
	else {
		rNameEval.style.border = "2px solid green";
	}
}
function blurEMail()
{
	var eMailEval = document.getElementById("eMail");
	if(eMailEval.value == "") {
		eMailEval.style.border = "2px solid red";
	}
	else {
		eMailEval.style.border = "2px solid green";
	}
}
function blurPNo()
{
	var pNoEval = document.getElementById("pNo");
	if(pNoEval.value == "") {
		pNoEval.style.border = "2px solid red";
	}
	else {
		pNoEval.style.border = "2px solid green";
	}
}
function blurAddress()
{
	var addressEval = document.getElementById("address");
	if(addressEval.value == "") {
		addressEval.style.border = "2px solid red";
	}
	else {
		addressEval.style.border = "2px solid green";
	}
}
function subMit()
{
	document.getElementById("formResults").innerHTML = "Summary:"
	
	var rNameV = document.getElementById("rName").value;
	document.getElementById("rNameF").innerHTML = "Name: " + rNameV;
	
	var eMailV = document.getElementById("eMail").value;
	document.getElementById("eMailF").innerHTML = "E-Mail Address: " + eMailV;	
	
	var pNoV = document.getElementById("pNo").value;
	document.getElementById("pNoF").innerHTML = "Phone Number: " + pNoV;
	
	var addressV = document.getElementById("address").value;
	document.getElementById("addressF").innerHTML = "Home Address: " + addressV;

	return false;
}
function reSet()
{
	document.getElementById("formResults").innerHTML = "";
	document.getElementById("rNameF").innerHTML = "";
	document.getElementById("eMailF").innerHTML = "";
	document.getElementById("pNoF").innerHTML = "";
	document.getElementById("addressF").innerHTML = "";
	document.getElementById("schedTitle").innerHTML = "";
	document.getElementById("schedTime").innerHTML = "";
}