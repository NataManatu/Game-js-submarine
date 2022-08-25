let play = document.getElementById("play")
let music = new Audio('audio2.mp3')


let playing = false





play.addEventListener("click", playTrack)

function playTrack() {
    if (playing) {
        music.pause()
        play.src = ("play.png")
    }
	// alert("nn")
    else {
        music.play()
        play.src = ("pause.png")
    }
    playing = !playing

    
}

let gamePole = document.getElementById("game-container");
let parus_1 = document.getElementById("parus-1");
let parus_2 = document.getElementById("parus-2");
let podLodka = document.getElementById("pod-lodka");
let fish_1 = document.getElementById("fish1");
let fish_2 = document.getElementById("fish2");
let fish_3 = document.getElementById("fish3");
let fish_4 = document.getElementById("fish4");
let fish_5 = document.getElementById("fish5");
let anglerfish = document.getElementById("anglerfish");

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



let lst = document.querySelectorAll('.game-img');
let gameEnded = false;
let gameScore = 0

function scoreMove() {
	let score = document.getElementById("score")
	score.innerHTML = `<p> ` + gameScore + `</p>`
	// score.style.display = "block"
}



let interval = setInterval(() => {

	lst.forEach((element) => {
		// console.log(element)

		let selection = podLodka;
		let rectSelection = selection.getBoundingClientRect();
		let rect = element.getBoundingClientRect();
		let gameOver = document.getElementById("game-over");
		gameOver.innerHTML = '<p>твой счет  ' + gameScore + '<br> Game over!</p>'

		//Если произошло столкновение с объектом
		if (rect.bottom > rectSelection.top
			&& rect.right > rectSelection.left
			&& rect.top < rectSelection.bottom
			&& rect.left < rectSelection.right) {
			//Если произошло столкновение с красной рыбой
			console.log(element.classList.contains("red-fish"))

			if (element.classList.contains("red-fish")) {
				gameScore += 1
			}
			else if (element.classList.contains("parus")) {
				gameScore -= 3
			}
			else if (element.classList.contains("anglerfish")) {
				gameScore -= 5
			}

			else {
				gameScore -= 2
			}
			//сделать в функцию 
			scoreMove()
			console.log(gameScore)
		}

		if (gameScore <= -50) {
			gameEnded = true
			gameOver.style.display = "block"
			clearInterval(interval)
			// alert("твой счет " + gameScore + " game over!")
		}
	})

}, 600);







