let music = new Audio("audio.mp3");
music.play()

let gamePole = document.getElementById("game-container");
let parus_1 = document.getElementById("parus-1");
let parus_2 = document.getElementById("parus-2");
let podLodka = document.getElementById("pod-lodka");
let fish_1 = document.getElementById("fish1");
let fish_2 = document.getElementById("fish2");
let fish_3 = document.getElementById("fish3");
let fish_4 = document.getElementById("fish4");
let fish_5 = document.getElementById("fish5");
let anglerfish = document.getElementById("anglerfish")
let elem = document.querySelectorAll(".game-img")

let gameScore = 0

let y = 0;

function move(event) {

	if (event.keyCode == 87) {
		y = y - 70;
		podLodka.style.top = y + 'px';
		// alert("up")
	}

	if (event.keyCode == 88) {
		y = y + 100;
		podLodka.style.top = y + 'px';

	}
}
addEventListener("keydown", move)

setInterval(() => {
	let selection = podLodka;
	let rectSelection = selection.getBoundingClientRect();
	let rect = elem.getBoundingClientRect()

	if (rect.bottom > rectSelection.top
		&& rect.right > rectSelection.left
		&& rect.top < rectSelection.bottom
		&& rect.left < rectSelection.right) {
		gameScore--
		alert("твой счет " + gameScore)
	}



}, 500);




