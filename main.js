// docuemnt.querySelector() returns the first element within the docuement that
// matches the specified selector or group of selectors. 

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown")
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event 
// bubbling or event capturing. This parameter is optional.

choiceBtns.forEach(button => button.addEventListener("click", () => {

    // .textContent returns the text of an element. 
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    // Math.floor() rounds down and returns the largest integer less than or
    // equal to a given number.
    // Math.random() returns a floating point number that's greater than or
    // equal to 0 and less than 1. 
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Rock";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissors";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}