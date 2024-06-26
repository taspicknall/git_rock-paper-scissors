function getComputerChoice() {
    // Math.random() generates a function between 1 and 0.
    let choice = Math.random();
    // Assigns rock, paper or scissors to randomly generated number
    if (choice <= 0.333) {
        choice = "rock";
        return "rock";
    } else if (choice <= 0.666) {
        choice = "paper";
        return "paper";
    } else if (choice <= 1) {
        choice = "scissors";
        return "scissors";
    }   
    
}

 // buckets for playRound results to be stored
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// structure for outcomes processed in game.
function playRound(playerSelection, computerSelection) {     
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock smashes Scissors, you win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        return "Scissors cuts Paper, you win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        return "Paper covers Rock, you win!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        return "Rock is covered by Paper, you lose";
    }
    else if (playerSelection === "scisssors" && computerSelection === "rock") {
        computerScore ++;
        return "Scissors are smashed by Rock, you lose.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore ++;
        return "Paper is cut by Scissors, you lose.";
    }
    else if (playerSelection === computerSelection) {
        tie ++;
        return "tie";
    }   
    else {
        return "Can't score. You did not enter rock, paper or scissors.";
    }
}

// Prompt window for getPlayerInput, converts to lowercase.
function getPlayerInput() {
    let playerSelection = prompt("Type rock, paper or scissors to play game.").toLowerCase();
    return playerSelection;
}
 

function playGame() {
    for (let i = 1; i <= 5; i++) {  
        const computerSelection = getComputerChoice(); 
        //declaring computerselection in loop made 5 different selections. When
        // outside I got same random computerSelection 5 times.
        console.log (playRound(getPlayerInput(), computerSelection));
     }
    }
    
playGame();

//function for winner/loser to be processed in and result returned
function getGameResults(playerWins, computerWins) { 
    if (playerWins > computerWins) {
        return "You won more rounds than the computer. You win!!!";
    }
    else if (playerWins < computerWins) {
        return "The Computer won more rounds. You lose :-(";
    }
    else if (playerWins === computerWins) {
        return "You and the computer won an equal number of games. It's a tie.";
    } 
}

getGameResults();

console.log(getGameResults(playerScore, computerScore));






