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
    // buckets for playRound results to be stored
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
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

function gameResults(playerScore,computerScore) {
    if(playerScore > computerScore) {
        return "You won more rounds than the computer. You win!!!";
    }
    else if(playerScore < computerScore) {
        return "The Computer woplayerScore, computerScoren more rounds. You lose.";
    }
    else if(playerScore == computerScore) {
        return "You and for computer won an equal amount of games. It's a tie.";
    }   
}

playGame()
gameResults()




