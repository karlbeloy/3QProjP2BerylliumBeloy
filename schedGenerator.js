function schedGenerator()
{
	document.getElementById("schedTitle").innerHTML = "Assigned Schedule:";
	
	var meridiem = Math.floor((Math.random() * 2) + 1);
	var hr;
	var min;
	var hr2;
	
	if(meridiem == 1) {
		// time will be am, so starting times will be 8:00 am - 10:30 am
		hr = Math.ceil((Math.random() * 2) + 0);
		hr2 = hr;
		min = Math.floor((Math.random() * 2) + 1);
		hr += 8;
		hr2 += 8;
		if(min == 1) {
			min = "00";
		}
		else if(min == 2) {
			min = "30";
		}
		meridiem = "AM";
	}	
	else if(meridiem == 2) {
		// time will be am, so starting times will be 12:00 pm - 5:00 pm
		hr = Math.ceil((Math.random() * 4) + 0);
		hr2 = hr;
		if(hr == 0) {
			min = "30";
			hr = 12;
		}
		else if(hr == 4) {
			min = "00";
		}
		else {
			min = Math.floor((Math.random() * 2) + 1);
			if(min == 1) {
				min = "00";
			}
			else if(min == 2) {
				min = "30";
			}
		}
		meridiem = "PM";
	}
	hr2 += 1;
	
	document.getElementById("schedTime").innerHTML = hr + ":" + min + " " + meridiem + " - " + hr2 + ":" + min + " " + meridiem;
	document.getElementById("req").innerHTML = "<a href='req.html' style='color: #eeb3ff; text-decoration: none;'>Request for a new schedule</a>";
	
	return false;
}