// computer play that is randomly generated each time called
function computerPlay() {
  let rock = "Rock";
  let paper = "Paper";
  let scissors = "Scissors";
  let getRandomValue = Math.random();
  if (getRandomValue <= 0.33) {
      return rock;
  } else if (getRandomValue <= 0.66) {
      return paper;
  } else {
      return scissors;
  }
}

// the game start. we're playing until someone gets 5 wins then stops 
function game() {
  let playerWin = 0;
  let computerWin = 0;
  let gameWinner = "";

  
  //  Add event listeners for all three buttons/run round on click/track and end game
  
  // query all 3 buttons 
  const buttons = document.querySelectorAll('button');
  // call each button looping through
  buttons.forEach((button) => {
    // listening for a click of a button 
      button.addEventListener('click', () => {
          // when the click happens then invokes button.className in the html file (read in the string for player selection)
          playerSelection = button.className;
          // computerSelection invokes computerPlay function using the Math.Random()
          const computerSelection = computerPlay();
          // displays playRound(playerSelection, computerSelection)
          battleWinText.textContent = (playRound(playerSelection, computerSelection));
          playerWinText.textContent = "Player Win totals: " + playerWin;
          computerWinText.textContent = "Computer Win totals: " + computerWin;
          endGame();
      })
  })

      // play the round and determine winner
      function playRound(playerSelection, computerSelection) {
          let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let paperBeatRock = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let scissorsBeatPaperLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let paperBeatRockLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let rockBeatScissors = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let rockBeatScissorsLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
          let scissorsBeatPaper = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

          if (playerSelection === computerSelection) {
              return tie;
          } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
              playerWin++;
              return paperBeatRock;
          } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
              computerWin++;
              return scissorsBeatPaperLoss;
          } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
              computerWin++;
              return paperBeatRockLoss;
          } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
              playerWin++;
              return rockBeatScissors;
          } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
              computerWin++;
              return rockBeatScissorsLoss;
          } else {
              playerWin++;
              return scissorsBeatPaper;
          }
      }
  
  //  create div DOM for all results. creating a div inside of the container div in the html file
  const container = document.querySelector("#container");
  const resultsDiv = document.createElement("div");
  resultsDiv.style.marginTop = "20px";
  container.appendChild(resultsDiv);

  //  create player win tracking DOM 
  const playerWinText = document.createElement("p");
  playerWinText.style.color = "blue";
  playerWinText.textContent = "Player Win totals: " + playerWin;
  resultsDiv.appendChild(playerWinText);

  //  create computer win tracking DOM
  const computerWinText = document.createElement("p");
  computerWinText.style.color = "blue";
  computerWinText.textContent = "Computer Win totals: " + computerWin;
  resultsDiv.appendChild(computerWinText);

  //  create battle win text DOM
  const battleWinText = document.createElement("p");
  battleWinText.style.color = "black";
  resultsDiv.appendChild(battleWinText);
  
  //  create game win text DOM
  const gameWinText = document.createElement("p");
  gameWinText.style.color = "orange";
  gameWinText.textContent = gameWinner;
  resultsDiv.appendChild(gameWinText);

  //  determine who won to five points first
  function endGame() {
      if (playerWin == 5) {
          gameWinner = "YOU WIN!";
          gameWinText.textContent = gameWinner;
          
          //  disable game buttons so the play stops. this was not asked for in instructions
          document.getElementById("1").disabled = true;
          document.getElementById("2").disabled = true;
          document.getElementById("3").disabled = true;
      } else if (computerWin == 5) {
          gameWinner = "COMPUTER WINS!";
          gameWinText.textContent = gameWinner;
          
          //  disable game buttons
          document.getElementById("1").disabled = true;
          document.getElementById("2").disabled = true;
          document.getElementById("3").disabled = true;
      }   
  }
}

//  function call to start the game
game();
