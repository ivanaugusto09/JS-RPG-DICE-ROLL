var bleep = new Audio();
bleep.src = "dice-sound.mp3"

function RollD6() {
	var firstRandomNum = Math.floor(Math.random() * 6) + 1

	var firstDiceImage = 'assets/dice' + firstRandomNum + '.png';

	document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
}

function RollD8() {
	var firstRandomNum = Math.floor(Math.random() * 8) + 1

	document.querySelector('h2.dice-d8').innerHTML = (firstRandomNum);
}

function RollD10() {
	var firstRandomNum = Math.floor(Math.random() * 10) + 1

	document.querySelector('h2.dice-d10').innerHTML = (firstRandomNum);
}

function RollD12() {
	var firstRandomNum = Math.floor(Math.random() * 12) + 1

	document.querySelector('h2.dice-d12').innerHTML = (firstRandomNum);
}

function RollD20() {
	var firstRandomNum = Math.floor(Math.random() * 20) + 1

	document.querySelector('h2.dice-d20').innerHTML = (firstRandomNum);
}
