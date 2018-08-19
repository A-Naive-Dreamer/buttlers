Buttlers.prototype.date = {
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	months: [
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
	],
	setMonths(months) {
		if (Array.isArray(months) && months.length >= 12) {
			this.months = months.slice(0, 12);
		}
	},
	getMonths() {
		return this.months;
	},
	setDays(days) {
		if (Array.isArray(days) && days.length >= 12) {
			this.days = days.slice(0, 8);
		}
	},
	getDays() {
		return Buttlers.prototype.date.days;
	}
}
