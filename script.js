let gamePole = document.getElementById("game-container");
let podLodka = document.getElementById("pod-lodka");
let fish_1 = document.getElementById("fish1")
let parus_1 = document.getElementById("parus-1")
let parus_2 = document.getElementById("parus-2")


let music = new Audio("audio.mp3");
music.play()

function upMove(event) {

	var y = 0;
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























