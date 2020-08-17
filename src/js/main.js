/* eslint-disable */

let character = document.getElementsByClassName("character")[0];
let background = document.getElementById("app");
let body = document.getElementsByTagName('body')[0];
let score = 0;

function spawnCharacterAtRandomPosition(character) {
  let characterHeight = character.clientHeight;
  let characterWidth = character.clientWidth;
  let randomTopPosition = Math.round(Math.random() * (document.body.clientHeight - characterHeight));
  let randomLeftPosition = Math.round(Math.random() * (document.body.clientWidth) - characterWidth);
  character.style.top = (randomTopPosition + "px");
  character.style.left = (randomLeftPosition + "px");
  background.appendChild(character);
}

function deleteCharacter(character) {
  character.remove();
}

function timer(character){
  const timeLeftDisplay = document.getElementById("time");
  let timeLeft = 2;
  setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(timeLeft = 2);
      spawnCharacterAtRandomPosition(character);
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -=1;
  }, 1000)
  //time = setInterval(spawnCharacterAtRandomPosition(character), 3000);
}

function showScore(){

}

function addScore(score){
  ++score;
 // console.log(score)
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

character.addEventListener('click', function(){
  event.stopImmediatePropagation();
  deleteCharacter(character);
  timer(character);
  spawnCharacterAtRandomPosition(character);
  
  //resetTimer();
  // is deleteCharacter() en dan in die functie var character = getelementbyclass, character.remove beter
  /// Of hoe ik het nu doe?
  addScore();
})

window.onload = function() {
  timer(character);

}