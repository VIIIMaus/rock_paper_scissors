let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let results = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1
        results = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            results += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        results = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        results = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            results += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.querySelector('#results').innerHTML = results;
    return
}   

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})