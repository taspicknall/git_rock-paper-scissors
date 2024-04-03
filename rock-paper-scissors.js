function getComputerChoice() {
    let choice = Math.random();
    // Math.random() generates a function between 1 and 0.
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

function playRound(playerSelection, computerSelection) {
// structure for outcomes processed in game.

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
}

    const playerSelection = "RoCk";

    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection)); 
    console.log(getComputerChoice());
    console.log(playerSelection);
    console.log(computerSelection);
