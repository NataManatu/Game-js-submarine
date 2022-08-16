let gamePole = document.getElementById("game-container");
let podLodka = document.getElementById("pod-lodka");
let fish_1 = document.getElementById("fish1")
let fish_3 = document.getElementById("fish3")
let parus_1 = document.getElementById("parus-1")
let parus_2 = document.getElementById("parus-2")


let music = new Audio("audio.mp3");
music.play()

let y = 0;

function upMove(event) {

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
addEventListener("keydown", upMove)

setInterval(() => {
	let selection = podLodka;
	let rectSelection = selection.getBoundingClientRect();

	let rect = fish_3.getBoundingClientRect();

	if (rect.bottom > rectSelection.top
		&& rect.right > rectSelection.left
		&& rect.top < rectSelection.bottom
		&& rect.left < rectSelection.right) {
		alert("Столкновение рыбы и подлоки")
	}
}, 500);
