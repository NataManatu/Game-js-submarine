//audio
let play = document.getElementById("play")
let music = new Audio('audio/audio2.mp3')
let playing = false
play.addEventListener("click", playTrack)

function playTrack() {
	if (playing) {
		music.pause()
		play.src = ("img/play.png")
	}
	else {
		music.play()
		play.src = ("img/pause.png")
	}
	playing = !playing

}

//Game
let playGameButton = document.getElementById("play-game");
let startGame = document.querySelector("#game-container");
let startGameSubmarine = document.querySelector(".container");

function playGame() {
	startGame.style.display = "block";
	startGameSubmarine.style.display = "none";
	// alert("ff")	
}
playGameButton.addEventListener("click", playGame)
// setTimeout(playGame, 1000);


let podLodka = document.getElementById("pod-lodka");
let y = 0;

function move(event) {
	console.log(y)

	//клавиша-W(подлодка движется вверх)
	if (event.keyCode == 87) {
		if (y >= 0) {
			y = y - 70;
			podLodka.style.top = y + 'px';
		}

	}
	//клавиша-S(подлодка движется вниз)
	if (event.keyCode == 83) {
		if (y <= 440) {
			y = y + 100;
			podLodka.style.top = y + 'px';
		}

	}
}
addEventListener("keydown", move)



let lst = document.querySelectorAll('.game-img');
let gameEnded = false;
let gameScore = 0

function scoreMove() {
	let score = document.getElementById("score")
	score.innerHTML = `<p> ` + gameScore + `</p>`
}



let interval = setInterval(() => {
	lst.forEach((element) => {

		let selection = podLodka;
		let rectSelection = selection.getBoundingClientRect();
		let rect = element.getBoundingClientRect();
		let gameOver = document.getElementById("game-over");
		gameOver.innerHTML = '<p>твой счет  ' + gameScore + '<br> Game over!</p><button id="play-again">play again</button>'


		//Если произошло столкновение с объектом
		if (rect.bottom > rectSelection.top
			&& rect.right > rectSelection.left
			&& rect.top < rectSelection.bottom
			&& rect.left < rectSelection.right) {
			//Если произошло столкновение с красной рыбой

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

			scoreMove()

		}

		if (gameScore <= -50) {
			gameEnded = true
			gameOver.style.display = "block"
			clearInterval(interval)
			// alert("твой счет " + gameScore + " game over!")
		}

		let playAgain = document.getElementById("play-again");
		playAgain.addEventListener("click", function () {
			console.log(playAgain)
		})
	})

}, 1200);












