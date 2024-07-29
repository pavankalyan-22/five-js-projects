const time = document.getElementById("time");
let interval = null;
let interinc = 0;

function changetostr(num) {
	return String(num).padStart(2, "0");
}

function settimer() {
	const setmin = Math.floor(interinc / 60);
	const setsec = interinc % 60;
	time.innerHTML = `${changetostr(setmin)}:${changetostr(setsec)}`;
}

function timer() {
	interinc++;
	settimer();
}

function startclock() {
	if (interval) stopclock();
	interval = setInterval(timer, 1000);
}
function stopclock() {
	clearInterval(interval);
}
function resetclock() {
	stopclock();
	interinc = 0;
	settimer();
}
