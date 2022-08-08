let gamePole = document.getElementById("game-container");
let podLodka = document.getElementById("pod-lodka");
let fish_1 = document.getElementById("fish1")

let music = new Audio("audio.mp3");
music.play()

function upMove(event) {

	var y = 50;
	if (event.keyCode == 87) {
		y = y - 70;
		podLodka.style.top = y + 'px';

	}
	if (event.keyCode == 88) {
		y = y + 100;
		podLodka.style.top = y + 'px';

	}	// alert( event.key)
}
addEventListener("keydown", upMove)

function MacroCollision(podLodka, fish_1) {
	let XColl = false;
	let YColl = false;

	if ((podLodka.x + podLodka.width >= fish_1.x) && (podLodka.x <= fish_1.x + fish_1.width)) XColl = true;
	if ((podLodka.y + podLodka.height >= fish_1.y) && (podLodka.y <= fish_1.y + fish_1.height)) YColl = true;

	if (XColl & YColl) { return true; }
	return false;
}






















