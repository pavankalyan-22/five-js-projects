const body = document.getElementsByTagName("body")[0];

Turncolo = (colo) => {
	body.style.backgroundColor = colo;
};

Turnrand = () => {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	body.style.backgroundColor = `rgb(${r},${g},${b})`;
	// const color = `rgb(${r}, ${g}, ${b})`;
	// body.style.backgroundColor = color;
};
