function getComputerChoice() {
    let computerNumberOption = Math.floor(Math.random() * 3) + 1;

    if (computerNumberOption === 1) {
        return "Rock";
    }
    else if (computerNumberOption === 2) {
        return "Paper";
    }
    else if (computerNumberOption === 3) {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanNumberOption = 0;

    do {
        humanNumberOption = parseInt(prompt("Write the number option that you want:\n1.Rock\n2.Paper\n3.Scissors"));

        if (humanNumberOption < 1 || humanNumberOption > 3) {
            console.log("Please write a valid number.");
            console.log("\n");
        }
    } while (humanNumberOption < 1 || humanNumberOption > 3);

    if (humanNumberOption === 1) {
        return "Rock";
    }
    else if (humanNumberOption === 2) {
        return "Paper";
    }
    else if (humanNumberOption === 3) {
        return "Scissors";
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound() {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        console.log("Computer choice: " + computerSelection);
        console.log("Your choice: " + humanSelection);

        if ((computerSelection === "Rock" && humanSelection === "Scissors")
            || (computerSelection === "Paper" && humanSelection === "Rock")
            || (computerSelection === "Scissors" && humanSelection === "Paper")) {
            console.log("You lose. " + computerSelection + " beats " + humanSelection + ".");

            computerScore++;
        }
        else if ((computerSelection === "Rock" && humanSelection === "Paper")
            || (computerSelection === "Paper" && humanSelection === "Scissors")
            || (computerSelection === "Scissors" && humanSelection === "Rock")) {
            console.log("You won! " + humanSelection + " beats " + computerSelection + ".")

            humanScore++;
        }
        else if (computerSelection === humanSelection) {
            console.log("No one won.");
        }

        console.log("\n");
    }

    for (let i = 1; i <= 5; i++) {
        console.log("ROUND " + i + "/5");
        playRound();
    }

    if(computerScore > humanScore){
        console.log("YOU LOSE.")
    }
    else if(humanScore > computerScore){
        console.log("YOU WON!");
    }
    else{
        console.log("\nDRAW. NO ONE WON");
    }

    console.log("Computer final score: " + computerScore);
    console.log("Your final score: " + humanScore);
}

playGame();