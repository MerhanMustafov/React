import { useState } from "react";
export { Ticking };

var intervalId;
function Ticking() {
	let [time, setTime] = useState(getTime());
	let [day, setDay] = useState(getDay());

	function startClock() {
		intervalId = setInterval(() => {
			setTime((oldTime) => getTime());
		}, 1000);
	}

	function stopClock() {
		clearInterval(intervalId);
	}

	return (
		<div>
			<button onClick={() => startClock()}>start</button>
			<button onClick={() => stopClock()}>stop</button>
			<h2>
				{time}, {day}
			</h2>
		</div>
	);
}

function getDay() {
	const days = {
		1: "Monday",
		2: "Thuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
		0: "Sunday",
	};
	return days[new Date().getDay()];
}

function getTime() {
	let obj = {
		hour:
			new Date().getHours() <= 9
				? "0" + new Date().getHours()
				: new Date().getHours(),
		minute:
			new Date().getMinutes() <= 9
				? "0" + new Date().getMinutes()
				: new Date().getMinutes(),
		second:
			new Date().getSeconds() <= 9
				? "0" + new Date().getSeconds()
				: new Date().getSeconds(),
	};
	let am_pm = obj.hour < 12 || obj.obj[0] == "0" ? "AM" : "PM";
	let time = obj.hour + ":" + obj.minute + ":" + obj.second + " " + am_pm;
	return time;
}

function getTimeInfo() {
	return getTime() + " " + getDay();
}
