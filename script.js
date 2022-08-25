let play = document.getElementById("play")
let music = new Audio('audio2.mp3')


let playing = false

play.addEventListener("click", playTrack)

function playTrack() {
    if (playing) {
        music.pause()
        play.src = ("play.png")
    }
    else {
        music.play()
        play.src = ("pause.png")
    }
    playing = !playing

    
}


let podLodka = document.getElementById("pod-lodka");
let y = 0;

function move(event) {

	if (event.keyCode == 87) {
		y = y - 70;
		podLodka.style.top = y + 'px';
	
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
}



let interval = setInterval(() => {
	lst.forEach((element) => {
		
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
			
			if (element.classList.contains("red-fish")) {
				gameScore += 2
			}
			else if (element.classList.contains("parus")) {
				gameScore -= 3
			}
			else if (element.classList.contains("anglerfish")) {
				gameScore -= 5
			}

			else {
				gameScore -= 1
			}

			scoreMove()
		
		}

		if (gameScore <= -50) {
			gameEnded = true
			gameOver.style.display = "block"
			clearInterval(interval)
			// alert("твой счет " + gameScore + " game over!")
		}
	})

}, 600);







