function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.333) {
        choice = "rock";
    } else if (choice <= 0.666) {
        choice = "paper";
    } else {
        choice = "scissors"
    }
}