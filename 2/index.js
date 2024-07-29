const input = document.getElementById("input1");

const revstr = (val) => {
	// let s = "";
	// for (let i = val.length - 1; i >= 0; i--) {
	// 	s += val[i];
	// }
	// return s; // my method

	//newly lerned method
	return val.split("").reverse().join("");
};

function check() {
	const val = input.value;
	// alert(val);
	const reval = revstr(val);
	// console.log(reval);
	if (reval === val) {
		alert("yesss!!!! IT'S A PALINDROME");
	} else {
		alert("NAHHHH.....IT'S NOT A PALINDROME");
	}
	input.value = "";
}
