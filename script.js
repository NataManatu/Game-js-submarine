let music = new Audio("audio2.mp3");
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
let anglerfish = document.getElementById("anglerfish");


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


//создала псевдомассив для столкновения с каждым элементом
let lst = document.querySelectorAll('.game-img');
let gameEnded = false;
lst.forEach((element) => {
	console.log(element)

	let interval = setInterval(() => {
		let selection = podLodka;
		let rectSelection = selection.getBoundingClientRect();
		let rect = element.getBoundingClientRect();
		let gameOver = document.getElementById("game-over");
		gameOver.innerHTML = '<p>твой счет  ' + gameScore + '<br> Game over!</p>'

		if (rect.bottom > rectSelection.top
			&& rect.right > rectSelection.left
			&& rect.top < rectSelection.bottom
			&& rect.left < rectSelection.right) {
			gameScore -= 1
			let score = document.getElementById("score")
			score.style.display = "block"
		}

		let rect_2 = fish_2.getBoundingClientRect()
		if (rect_2.bottom > rectSelection.top
			&& rect_2.right > rectSelection.left
			&& rect_2.top < rectSelection.bottom
			&& rect_2.left < rectSelection.right) {
			gameScore += 2
			let score_2 = document.getElementById("score-2")
			score_2.style.display = "block"
		}

		let rect_3 = anglerfish.getBoundingClientRect()
		if (rect_3.bottom > rectSelection.top
			&& rect_3.right > rectSelection.left
			&& rect_3.top < rectSelection.bottom
			&& rect_3.left < rectSelection.right) {
			gameScore -= 2
			let score_3 = document.getElementById("score-3")
			score_3.style.display = "block"
		}

		let rect_4 = parus_1.getBoundingClientRect()
		if (rect_4.bottom > rectSelection.top
			&& rect_4.right > rectSelection.left
			&& rect_4.top < rectSelection.bottom
			&& rect_4.left < rectSelection.right) {
			gameScore -= 3
			let score_4 = document.getElementById("score-4")
			score_4.style.display = "block"
		}

		if (gameScore <= -30) {
			gameEnded = true
			gameOver.style.display = "block"
			clearInterval(interval)
			// alert("твой счет " + gameScore + " game over!")
		}

	}, 500);

})





