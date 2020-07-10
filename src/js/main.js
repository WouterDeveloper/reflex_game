/* eslint-disable */


function randomPosition() {
  let positionY = Math.round(Math.random() * document.body.clientHeight);
  let positionX = Math.round(Math.random() * document.body.clientWidth);
  let element = document.getElementsByClassName("character");
  console.log(element.positionX);
  element.style.positionY = positionY;
  element.style.positionX = positionX;
}

window.onload = function() {
    randomPosition();
}