/* eslint-disable */

let character = document.getElementsByClassName("character");
let background = document.getElementById("app");
let body = document.getElementsByTagName('body')[0];
let score = 0;

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

function showScore(){

}

function addScore(score){
  ++score;
  console.log(score)
}

function gameOver(){

}

// character[0].onclick = function() {
//   randomPosition(character);
//   addScore();
// };

body.onclick = function() {
  gameOver();
  console.log("Je bent af");
};

character[0].addEventListener('click', function(){
  event.stopImmediatePropagation();
  randomPosition(character);
  addScore();
})

window.onload = function() {
    randomPosition(character);
}