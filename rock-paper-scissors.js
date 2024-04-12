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

// structure for outcomes processed in game.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock smashes Scissors, you win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors cuts Paper, you win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper covers Rock, you win!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper covers Rock, you lose";
    }
    else if (playerSelection === "scisssors" && computerSelection === "rock") {
        return "Rock smashes Scissors, you lose.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors cuts Paper, you lose.";
    }
    else if (playerSelection === computerSelection) {
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
    // buckets for playRound results to be stored
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    
    for (let i = 1; i <= 5; i++) {  
        const computerSelection = getComputerChoice(); 
        //declaring computerselection in loop made 5 different selections
        console.log (playRound(playerInput(), computerSelection)) 
        
     }

    
    
   
    //return playRound(playerInput(), computerSelection); 
}    
    //console.log(playRound(playerInput(), computerSelection));

playGame()


