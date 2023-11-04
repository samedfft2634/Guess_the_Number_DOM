const msg = document.querySelector(".msg");
const checkBtn = document.querySelector(".check");
const body = document.querySelector("body");
const point = document.querySelector(".point");
let randomNum = Math.ceil(Math.random() * 20); // level - 1 difficulty
console.log(randomNum);
let score = 10;
let highestScore = 0;
let pointFinal;
document.querySelector(".guess").addEventListener("focus", () => {
	msg.innerText = "Oyun basladi!";
});

checkBtn.addEventListener("click", () => {
	const guess = document.querySelector(".guess").value;
	if (!guess) {
		msg.textContent = "Please enter a number! ";
	} else if (guess == randomNum) {
		msg.textContent = " Conguratulations! You Won 👏 🎉";
        document.querySelector(".title").textContent =
				"🚩";
		point.textContent = score * 10;
		body.style.backgroundColor = "green";
		document.querySelector(".number").textContent = randomNum;
        document.querySelector(".left").style.display = "none"

		if (score > highestScore) {
			highestScore = score;
			document.querySelector(".top-score").textContent = highestScore;
		}
	} else {
		if (score > 1) {
			score--;
			document.querySelector(".score").textContent = score;
			guess < randomNum
				? (msg.textContent = "Higher 👆")
				: (msg.textContent = "Lower👇");
		} else {
			msg.textContent = `Game Over! ¯\\_(ツ)_/¯`;
			document.querySelector(".score").textContent = 0;
			document.querySelector(".title").textContent =
				"👇The Number Was👇 ";
			document.querySelector(".number").textContent = randomNum;
			body.style.backgroundColor = "red";
			point.textContent = "0";
		}
	}
});
// console.log("Game Over! ¯\_(ツ)_/¯")

document.querySelector(".again").onclick = () => {
	body.style.backgroundColor = "#2d3436";
	randomNum = Math.ceil(Math.random() * 20);
	console.log(randomNum);
	score = 10;
	document.querySelector(".score").textContent = score;
	document.querySelector(".title").textContent = "Guess The Number ";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	msg.textContent = "Game starts for new player!";
    document.querySelector(".left").style.display = "block"
};

document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		checkBtn.click();
	}
});

localStorage.setItem("Samed",)