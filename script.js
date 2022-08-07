let gamePole = document.getElementById("game-container");
let podLodka = document.getElementById("pod-lodka");

let music = new Audio("audio.mp3");
music.play()

function upMove(event) {

	// let code = event.keyCode || event.charCode;
	// if (code != 38 && code != 40)
	// 	return;
	// podLodka.style.top = podLodka.offsetLeft+ (code == 38 ? -70 : 70) + 'px';

	var y = 50;
	if (event.keyCode == 87) {
		y = y - 100;
		podLodka.style.top = y + 'px';
	}
	else if (event.keyCode == 88) {
		y = y + 100;
		podLodka.style.top = y + 'px';
	}
	// alert( event.key)
}
addEventListener("keydown", upMove)






















