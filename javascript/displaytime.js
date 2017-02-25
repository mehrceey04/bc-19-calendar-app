function displayTime() {
	var currentTime = new Date(),
	hours = currentTime.getHours(),		//get hours using the Date() function
	minutes = currentTime.getMinutes(),	//get mins using the Date() function
	seconds = currentTime.getSeconds(),	//get secs using the Date() function
	meridiem = "AM";
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}
	if (hours > 12) {
		hours = String(Number(hours)-12)
		meridiem = "PM";
	}
	hourSpan = document.getElementById('hour');
	hourSpan.innerText = hours;
	minSpan = document.getElementById('minutes');
	minSpan.innerText = minutes;
	secSpan = document.getElementById('seconds');
	secSpan.innerText = seconds;
	meriSpan = document.getElementById('meridien');
	meriSpan.innerText = meridiem;
setInterval(displayTime);
}
