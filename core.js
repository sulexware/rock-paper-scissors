// This file contains all javascript functions related to this project

// console.log(getComputerChoice());

const playerSelection ='Rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));

function playRound(playerChoice, computerChoice){
// Decide the winner based on their selections

    if(playerChoice === computerChoice){
        return "It's a tie, you both choose " + playerChoice;
    }else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        return "Player win, Computer Loose!";
    }else if (playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        return "Player win, Computer Loose!";
    }else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        return "Player win, Computer Loose!";
    }else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS'){
        return "Player win, Computer Loose!";
    }else if (computerChoice === 'PAPER' && playerChoice === 'ROCK'){
        return "Player win, Computer Loose!";
    }else if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER'){
        return "Player win, Computer Loose!";
    }

}

function getComputerChoice(){
    // generate randomly between 1, 2 & 3
    // where 1 - Rock, 2 - Paper, and 3 - Scissors
    let choice;
    let choiceId = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch(choiceId){

        case 1: choice = 'Rock';
                break;

        case 2: choice = 'Paper';
                break;

        case 3: choice = 'Scissors';
      }

    return choice;
}


