let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let winner;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return 'rock';
    else if (randNum === 1) return 'paper';
    else return 'scissors';
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

function updateScore(winner, playerChoice, computerChoice) {
    if (winner == 0) {
        playerScore += 1;
        document.querySelector(".player-score").textContent = playerScore;
    }
    else if (winner == 1) {
        computerScore += 1;
        document.querySelector(".computer-score").textContent = computerScore;
    }

}

function displayWinner(playerScore, computerScore) {
    if (playerScore == 5){
        document.querySelector(".result").textContent = "Game Over! You Win!";
    }
    else {
        document.querySelector(".result").textContent = "Game Over! You Loose!";
    }
    
}

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5){
            displayWinner(playerScore, computerScore);
            return true;
        }
    return false;
}

function updateChoices(playerChoice, computerChoice){
    document.querySelector(".choices").textContent = playerChoice + " vs " + computerChoice;
}

function updateRoundResult(winner){
    if (winner == 0) {
        document.querySelector(".result").textContent = "You Win Round!";
    }
    else if (winner == 1) {
        document.querySelector(".result").textContent = "Computer Win Round!";
    }
    else {
        document.querySelector(".result").textContent = "Tie Round!";
    }
    
}

function playAgain() {
    const gameContainer = document.querySelector(".game-container");
    
    const replayContainer = document.createElement("div");
    replayContainer.classList.add("replay-container");

    const playAgainQuestion = document.createElement("p");
    playAgainQuestion.classList.add("play-again-question");
    playAgainQuestion.textContent = "Would you like to play again?";

    const yesButton = document.createElement("button");
    yesButton.classList.add("play-again-button");
    yesButton.textContent = "Yes";

    replayContainer.appendChild(playAgainQuestion);
    replayContainer.appendChild(yesButton);
    
    gameContainer.appendChild(replayContainer);

    let replay = document.querySelector(".play-again-button");
    replay.addEventListener("click", restartGame);
}

function run(eventObj) {
    playerChoice = eventObj.target.getAttribute("class");
    computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice);
    winner = playRound(playerChoice, computerChoice);
    updateRoundResult(winner);
    updateScore(winner, playerChoice, computerChoice);
    const over = checkWinner(playerScore, computerScore);
    if (over){
        buttons.removeEventListener("click", run);
        playAgain();
    }
}

function incrementScore(winner, playerScore, computerScore){
    if (winner === 0) playerScore += 1;
    else if ( winner === 1) computerScore += 1;
    else { 
        computerScore += 1;
        playerScore += 1;
    }
}

function restartGame() {
    document.querySelector(".player-score").textContent =  0;
    document.querySelector(".computer-score").textContent = 0;
    document.querySelector(".choices").textContent = "";
    document.querySelector(".result").textContent = "";
    document.querySelector(".replay-container").remove();
    playerScore = 0;
    computerScore = 0;
    let buttons = document.querySelector(".container");
    buttons.addEventListener("click", run);
}    

let buttons = document.querySelector(".container"); 
buttons.addEventListener("click", run);


