let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerSelection, computerSelection) {
  // Make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection.toLowerCase() === "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection.toLowerCase() === "scissors") {
      return "You lose! Scissors beats Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection.toLowerCase() === "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  } else {
    return 'Invalid input! Please enter "Rock", "Paper", or "Scissors".';
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game(playerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent = "You win the game!";
    } else {
      document.getElementById("result").textContent = "You lose the game!";
    }
    document.getElementById("play-again").style.display = "inline-block";
    return;
  }

  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.startsWith("You win!")) {
    playerScore++;
  } else if (roundResult.startsWith("You lose!")) {
    computerScore++;
  }

  roundsPlayed++;

  document.getElementById("result").textContent = roundResult;
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    document.getElementById("play-again").style.display = "inline-block";
    setTimeout(game, 1000); // wait for 1 second before announcing the winner of the game
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById("score").textContent = "Player: 0 | Computer: 0";
  document.getElementById("result").textContent = "";
  document.getElementById("play-again").style.display = "none";
}

document.getElementById("rock").addEventListener("click", function () {
  game("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  game("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  game("scissors");
});

document.getElementById("play-again").addEventListener("click", function () {
  resetGame();
});
