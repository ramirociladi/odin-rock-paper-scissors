console.log("Hi");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result == "Tie") {
    return "It's a tie!";
  } else if (result == "Player") {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;

  while (validatedInput == false) {
    const choice = prompt("Choose rock, paper or scissors");

    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();

    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  console.log("Welcome!");

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    console.log("-----");

    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }

  console.log("Game over");

  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner!");
  } else {
    console.log("We have a tie!");
  }
}

game();
