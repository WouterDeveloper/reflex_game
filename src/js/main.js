/* eslint-disable */

// Wanneer een variabele meegeven in een functie function voorbeeld(variabele)
// En wannneer niet

let character = document.getElementsByClassName("character")[0];
let background = document.getElementById("app");
let body = document.getElementsByTagName('body')[0];
let scoreDisplay = document.getElementsByClassName("score__text")[0];
let clickedCharacter = false;
let score = 10;

function spawnCharacterAtRandomPosition(character) {
  let characterHeight = character.clientHeight;
  let characterWidth = character.clientWidth;
  let randomTopPosition = Math.round(Math.random() * (document.body.clientHeight - characterHeight));
  let randomLeftPosition = Math.round(Math.random() * (document.body.clientWidth - characterWidth));
  character.style.top = (randomTopPosition + "px");
  character.style.left = (randomLeftPosition + "px");
  background.appendChild(character);
}

function deleteCharacter(character) {
  character.remove();
}

function timer(character){
  const timeLeftDisplay = document.getElementsByClassName("time__text")[0];
  let timeLeft = 1;
  setInterval(function(){
    if(timeLeft <= -1){
      clearInterval(timeLeft = 1);
      if(clickedCharacter == false){
        subtractScore();
      }
      clickedCharacter = false;
      updateScoreDisplay();
      spawnCharacterAtRandomPosition(character);
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -=1;
  }, 1000)

}

function showScore(){
  scoreDisplay.innerHTML = score;
}

function addScore(){
  score++;
  console.log("Score" + score);
}


// Waarom moet ik bij subtractScore() niet score meegeven als ik de functie roep, subtractScore(score)?
// Zonder meegeven werkt hij, telt van 10 omlaag elke keer als timer op 0 komt
// Met meegeven werkt hij maar 1 keer, telt 1 keer naar 9 omlaag bij einde timer maar erna blijft hij op 9
function subtractScore(){
  score--;
  console.log("Score" + score);
 
}

// Deze functie doet exact hetzelfde als showScore. 
// Maar het voelt raar om bij de timer showScore aan te roepen, omdat het een update is
// Moet ik showScore hernoemen en 1 functie gebruiken voor zowel tonen als updaten, showAndUpdateScore bijvoorbeeld
// Of zo laten, of andere oplossing?
function updateScoreDisplay(){
  scoreDisplay.innerHTML = score;
}

function gameOver(){

}

// character[0].onclick = function() {
//   randomPosition(character);
//   addScore();
// };

body.onclick = function() {
  subtractScore();
  console.log("Je bent af");
};

character.addEventListener('click', function(){
  event.stopImmediatePropagation();
  addScore();
  updateScoreDisplay();
  deleteCharacter(character);
  // is deleteCharacter() en dan in die functie var character = getelementbyclass, character.remove beter
  /// Of hoe ik het nu doe?
  clickedCharacter = true; 
})

window.onload = function() {
  showScore();
  timer(character);
}