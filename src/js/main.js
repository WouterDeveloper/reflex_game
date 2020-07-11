/* eslint-disable */

let character = document.getElementsByClassName("character");

function randomPosition(character) {
  let randomNumberY = Math.round(Math.random() * document.body.clientHeight);
  let randomNumberX = Math.round(Math.random() * document.body.clientWidth);
  let characterHeight = character[0].clientHeight;
  let characterWidth = character[0].clientWidth;
  let randomTop = randomNumberY - characterHeight;
  let randomLeft = randomNumberX - characterWidth;
  character[0].style.top = (randomTop + "px");
  character[0].style.left = (randomLeft + "px");
}

character[0].onclick = function() {
  randomPosition(character);
};

window.onload = function() {
    randomPosition(character);
}