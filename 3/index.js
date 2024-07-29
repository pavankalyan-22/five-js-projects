const input = document.getElementById("quote");
const quotes = [
	"The only approval you need is your own",
	"Never regret anything that made you smile.",
	"Try to be a rainbow in someone's cloud.",
	"Perpetual optimism [is] a force multiplier.",
	"Fight for the things that you care about, but do it in a way that will lead others to join you.",
];

const restart = new Set();
function generatequote() {
	if (restart.length >= quotes.length) {
		restart.clear();
	}
	while (true) {
		const rand = Math.floor(Math.random() * 5);
		const genrat = quotes[rand];
		input.innerHTML = genrat;
		restart.add(genrat);
		console.log(restart);
		break;
	}
}
