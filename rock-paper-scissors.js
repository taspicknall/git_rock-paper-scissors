function getComputerChoice() {
    let choice = Math.random();
    // Math.random() generates a function between 1 and 0
    if (choice <= 0.333) {
        choice = "rock";
    } else if (choice <= 0.666) {
        choice = "paper";
    } else {
        choice = "scissors"
    }
}
console.log(getComputerChoice(choice))
// How do I use console.log()!!??