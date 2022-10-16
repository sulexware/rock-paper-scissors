// This file contains all javascript functions related to this project

// This file implements the User Interface 

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let userSelect;
let myCount = 0;

const displayScore = document.querySelector('#status');

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      
    // collect name of selected button
      userSelect = button.id.toUpperCase();

      // get computer selection
      computerSelection = getComputerChoice().toUpperCase();

      // increament count variable
      myCount++;

      // play game
      game();

      // Check number of games to report final score
      if(myCount === 5){

        if (playerScore > computerScore){

            displayScore.textContent += ", Final Round, Player is the overall Winner";

        }else{

            displayScore.textContent +=", Final Round, Computer is the overall Winner";
        }

        // reset counter
        myCount = 0;
        
      }


    });
  });


function game(){

    playerSelection = userSelect;

    displayScore.textContent =`Round ${myCount}, ` + playRound(playerSelection, computerSelection);

  //  console.log(`Round ${myCount}, ` + playRound(playerSelection, computerSelection));
}

function playRound(playerChoice, computerChoice){
// Decide the winner based on their selections

    if(playerChoice === computerChoice){
        playerScore += 1;
        computerScore += 1;
        return "It's a tie, you both choose " + playerChoice;
    }else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        playerScore += 1;
        computerScore += 0;
        return "Player win, Computer Loose!";
    }else if (playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        playerScore += 1;
        computerScore += 0;
        return "Player win, Computer Loose!";
    }else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        playerScore += 1;
        computerScore += 0;
        return "Player win, Computer Loose!";
    }else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS'){
        playerScore += 0;
        computerScore += 1;
        return "Computer win, Player Loose!";
    }else if (computerChoice === 'PAPER' && playerChoice === 'ROCK'){
        playerScore += 0;
        computerScore += 1;
        return "Computer win, Player Loose!";
    }else if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER'){
        playerScore += 0;
        computerScore += 1;
        return "Computer win, Player Loose!";
    }

}

function getComputerChoice(){
    // generate randomly between 1, 2 & 3
    // where 1 - Rock, 2 - Paper, and 3 - Scissors
    let choice;
    let choiceId = Math.floor(Math.random() * 3 ) + 1;

    switch(choiceId){

        case 1: choice = 'Rock';
                break;

        case 2: choice = 'Paper';
                break;

        case 3: choice = 'Scissors';
      }

    return choice;
}


