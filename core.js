// This file contains all javascript functions related to this project

// console.log(getComputerChoice());

let playerSelection;
let playerScore = 0;
let computerScore = 0;
let userSelect;
const computerSelection = getComputerChoice().toUpperCase();

// Start loop

for(let i = 1; i <= 5; i++)
{

    // get player input

    userSelect = prompt("Valid options : Rock, Paper and Scissors. Enter a value to play.");
    
    userSelect = userSelect.toUpperCase();
    
    console.log(userSelect);
    
    
    switch (userSelect){
    
        case 'ROCK':
        case 'PAPER':
        case 'SCISSORS':
                game();
                break;
    
        default:
            console.log("Invlid Entry")
    }

}

// Report Game Status

if (playerScore > computerScore){
    console.log("Player is the overall Winner")
}else{
    console.log("Computer is the overall Winner")
}


function game(){
    playerSelection = userSelect;
    console.log(playRound(playerSelection, computerSelection));
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


