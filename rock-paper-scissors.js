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
let playerWins = 0;
let computerWins = 0;
let tie = 0;

// structure for outcomes processed in game.
function playRound(playerSelection, computerSelection) {     
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return "Rock smashes Scissors, you win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins ++;
        return "Scissors cuts Paper, you win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins ++;
        return "Paper covers Rock, you win!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins ++;
        return "Rock is covered by Paper, you lose";
    }
    else if (playerSelection === "scisssors" && computerSelection === "rock") {
        computerWins ++;
        return "Scissors are smashed by Rock, you lose.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins ++;
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

// Prompt window for playerInput, converts to lowercase.
function playerInput() {
    let playerSelection = prompt("Type rock, paper or scissors to play game.").toLowerCase();
    return playerSelection;
}
 
function playGame() {
    for (let i = 1; i <= 5; i++) {  
        const computerSelection = getComputerChoice(); 
        //declaring computerselection in loop made 5 different selections
        console.log (playRound(playerInput(), computerSelection)) 
     }
    }
playGame()

function gameResults(playerWins,computerWins) { 
    if (playerWins > computerWins) {
        return "You won more rounds than the computer. You win!!!";
    }
    else if (playerWins < computerWins) {
        return "The Computer won more rounds. You lose.";
    }
    else if (playerWins === computerWins) {
        return "You and for computer won an equal number of games. It's a tie.";
    }  console.log(gameResults(playerScore, computerScore))
}

gameResults()






