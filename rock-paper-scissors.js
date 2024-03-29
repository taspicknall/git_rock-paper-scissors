function getComputerChoice() {
    let choice = Math.random();
    // Math.random() generates a function between 1 and 0.
    if (choice <= 0.333) {
        choice = "rock";
    } else if (choice <= 0.666) {
        choice = "paper";
    } else {
        choice = "scissors";
    } 
    console.log(choice)
}

getComputerChoice();
// test that getComputerChoice(); works... it does!

function playRound(playerSelection, computerSelection) {
//need to figure out code for step 4 on TOP here

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));