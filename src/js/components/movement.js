function randomPosition() {
   
    let positionY = Math.round(Math.random() * document.body.clientHeight);
    let positionX = Math.round(Math.random() * document.body.clientWidth);
    let element = document.getElementByClassName("character");

    element.style.positionY = positionY;
    element.style.positionX = positionX;
  }

  window.onload = function() {
      randomPosition();
  }