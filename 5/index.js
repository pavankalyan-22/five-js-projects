const input = document.getElementById("input1");
let items = [];
const divitems = document.getElementById("items");
const localkey = "todo";

function renderitems() {
	divitems.innerHTML = null;

	for (const [i, cont] of Object.entries(items)) {
		const container = document.createElement("div");

		const text = document.createElement("p");
		text.textContent = cont;
		text.style.display = "inline";
		text.style.marginRight = "10px";

		const button = document.createElement("button");
		button.textContent = "X";
		button.onclick = () => removelist(i);
		button.style.borderRadius = "40px";
		button.style.border = "none";

		container.style.padding = "10px";
		container.appendChild(text);
		container.appendChild(button);

		divitems.appendChild(container);
	}
}

function savetolocal() {
	const storage = JSON.stringify(items);
	localStorage.setItem(localkey, storage);
}

function loadfromlocal() {
	const load = localStorage.getItem(localkey);
	if (load) items = JSON.parse(load);
	renderitems();
}
function addtolist() {
	const data = input.value;
	items.push(data);
	renderitems();
	input.value = "";
	savetolocal();
}

function removelist(idx) {
	items.splice(idx, 1);
	renderitems();
	savetolocal();
}
document.addEventListener("DOMContentLoaded", loadfromlocal);
