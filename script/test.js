// time function add
function getTimeString(time) {
	const year = parseInt(time / 31536000);
	const reminingTimeYear = time % 31536000;
	const month = parseInt(reminingTimeYear / 2592000);
	const remainingMonthTime = time % 2592000;
	const day = parseInt(remainingMonthTime / 86400);
	const remainingDayTime = remainingMonthTime % 86400;
	const hour = parseInt(remainingDayTime / 3600);
	const remainingHourTime = remainingDayTime % 3600;
	const minute = parseInt(remainingHourTime / 60);
	const second = remainingHourTime % 60;
	// Create the result string conditionally
	let result = "";
	if (year > 0) {
		result += `${year} year `;
	}
	if (month > 0) {
		result += `${month} month `;
	}
	if (day > 0) {
		result += `${day} day `;
	}
	if (hour > 0) {
		result += `${hour} hour `;
	}
	if (minute > 0) {
		result += `${minute} minute `;
	}
	if (second > 0) {
		result += `${second} second `;
	}
	if (result) {
		result += `ago`;
	}
	return result.trim();
}
