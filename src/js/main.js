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

character[0].onclick = function() {
  randomPosition(character);
  addScore();
};

body.onclick = function() {
  gameOver();
};

document.getElementsByClassName('character')[0]
.addEventListener('click', function (event) {
  console.log('hoi');
});

document.addEventListener('click', function (event) {
  console.log(event.target.closest);
  console.log('body');
});


// character.addEventListener("click", function(event){
//   if (!(event.target).closest(character).length) {
//     // ... clicked on the 'body', but not inside of #menutop
//     console.log("je bent af");
//   }
// }); 

window.onload = function() {
    randomPosition(character);
}