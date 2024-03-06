function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return 'rock';
    else if (randNum === 1) return 'paper';
    else return 'scissors';
}

function getPlayerChoice() {
    let playerChoice = prompt('Enter choice: ');
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerChoice) {

    if (playerSelection === 'rock' && computerChoice === 'scissors'
            || playerSelection === 'paper' && computerChoice === 'rock'
            || playerSelection === 'scissors' && computerChoice === 'paper') {
                return 0;}
    else if (computerChoice === 'rock' && playerSelection === 'scissors'
                || computerChoice === 'paper' && playerSelection === 'rock'
                || computerChoice === 'scissors' && playerSelection === 'paper') {
                    return 1;}
    else return 2;
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === 0) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else if (winner === 1) {
        console.log(`You loose! ${computerChoice} beats ${playerChoice}`);
    }
    else {
        console.log("It's a tie!");
    }
}

function displayWinner(playerScore, computerScore) {
    if (playerScore > computerScore){
        console.log('Game over! You Win!');
    }
    else if (computerScore > playerScore){
        console.log('Game over! You loose!');
    }
    else {
        console.log("Game over! It's a tie!");
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        console.log(`Player choice : ${playerChoice}`);
        let computerChoice = getComputerChoice();
        console.log(`Computer Choice : ${computerChoice}`);
        let winner = playRound(playerChoice, computerChoice);
        displayResult(winner, playerChoice, computerChoice);
        
        if (winner === 0) playerScore += 1;
        else if ( winner === 1) computerScore += 1;
        else { 
            computerScore += 1;
            playerScore += 1;
        }
    }

    displayWinner(playerScore, computerScore);
    
}


playGame();