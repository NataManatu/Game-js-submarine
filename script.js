let podLodka = document.getElementById("pod-lodka");
let gamePole = document.getElementById("game-container");

var music = new Audio("audio.mp3")
	music.play()

    function go() {
        if (times % 2) {
          boat.classList.remove('back');
          boat.style.marginLeft = 100 * times + 200 + 'px';
        } else {
          boat.classList.add('back');
          boat.style.marginLeft = 100 * times - 200 + 'px';
        }

      }

      go()
















