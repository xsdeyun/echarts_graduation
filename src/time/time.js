// 获取当前日期
const Timeday = function() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
    month >= 10 ? month : month='0' + month;
	let day = date.getDate();
    day >= 10 ? day : day='0' + day;
    let hour = date.getHours();
    hour >= 10 ? hour : hour='0' + hour;
	let minutes = date.getMinutes();
    minutes >= 10 ? minutes :minutes= '0' + minutes;
	let second = date.getSeconds();
    second >= 10 ? second :second= '0' + second;
    let time=year+"年"+month+"月"+day+"日"+hour+":"+minutes+":"+second;
	return time;
}
const Timedate = function() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let time = [year, month >= 10 ? month : '0' + month, day >= 10 ? day : '0' + day].join('-');
	return time;
}

// 获取当前-日期时间
const Timedatet = function() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();
	let time = [year, month >= 10 ? month : '0' + month, day >= 10 ? day : '0' + day].join('-');
	let timehms = [hour >= 10 ? hour : '0' + hour, minutes >= 10 ? minutes : '0' + minutes, second >= 10 ? second :
		'0' + second
	].join(':')
	time = time + " " + timehms;
	return time;
}
// 获取当前时间的前t天
const TimedatetJD = function(t) {
	let date = new Date();
	date.setDate(date.getDate() - t);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();
	let time = [year, month >= 10 ? month : '0' + month, day >= 10 ? day : '0' + day].join('-');
	let timehms = [hour >= 10 ? hour : '0' + hour, minutes >= 10 ? minutes : '0' + minutes, second >= 10 ? second :
		'0' + second
	].join(':')
	time = time + " " + timehms;
	return time;
}
// 获取当前日期和前t天的日期
const TimedateJD = function(t) {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let dayarray = [];
	dayarray.push([year, month >= 10 ? month : '0' + month, day >= 10 ? day : '0' + day].join('-'));
	date.setDate(date.getDate() - t);
	month = date.getMonth() + 1;
	day =date.getDate();
	dayarray.unshift([year, month >= 10 ? month : '0' + month, day >= 10 ? day : '0' + day].join('-'));
	return dayarray;
}

export default {
    Timeday,
	Timedate,
	Timedatet,
	TimedatetJD,
	TimedateJD
}
