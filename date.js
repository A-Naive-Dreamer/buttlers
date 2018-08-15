var buttlers = function() {};

buttlers.prototype.Date = function(days, months) {
	this.days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	this.months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	if(!isNull(days)) {
		setDays(days);
	}

	if(!isNull(months)) {
		setMonths(months);
	}
}

buttlers.Date.prototype.setMonths = function(months) {
	if(typeof months === "string") {
		months = months.split(" ");
	}

	if(months.length >= 12) {
		months
}

function getMonths() {
	return months;
}

function getFullMonth(months = getMonths, monthOrder) {
	if(typeof months === "string") {
		months.split(" ");
	}

	if(Array.isArray(months)) {
		if(months.length === 12) {
			if(monthOrder === 0) {
				return months[0];
			} else if(monthOrder === 1) {
				return months[1];
			} else if(monthOrder === 2) {
				return months[2];
			} else if(monthOrder === 3) {
				return months[3];
			} else if(monthOrder === 4) {
				return months[4];
			} else if(monthOrder === 5) {
				return months[5];
			} else if(monthOrder === 6) {
				return months[6];
			} else if(monthOrder === 7) {
				return months[7];
			} else if(monthOrder === 8) {
				return months[8];
			} else if(monthOrder === 9) {
				return months[9];
			} else if(monthOrder === 10) {
				return months[10];
			} else if(monthOrder === 11) {
				return months[11];
			}
				case 2:
					return months[2];
				case 3:
					return months[3];
				case 4:
					return months[3];
				case 5:
					return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function getFullDays() {
    switch(new Date().getDay()) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}