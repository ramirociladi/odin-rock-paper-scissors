# Rock Paper Scissors

This is a simple game of Rock Paper Scissors built using HTML, CSS, and JavaScript. It allows the user to select their weapon of choice (Rock, Paper, or Scissors) and compete against the computer. The game keeps track of the score and announces the winner of each round. The first player to reach a score of 5 wins the game.

## How to Play

To play the game, simply click on one of the three buttons corresponding to Rock, Paper, or Scissors. The computer will then randomly select its own weapon and the winner of the round will be announced. The game will continue until one player reaches a score of 5. At this point, the winner of the game will be announced and the option to play again will be displayed.

## Code Functionality

The game logic is implemented using two functions - `playRound` and `game`.

`playRound` takes two arguments - `playerSelection` and `computerSelection` - and returns the result of the round (either "It's a tie!", "You win!", or "You lose!"). It compares the player's selection to the computer's selection and determines the winner based on the traditional Rock Paper Scissors rules.

`game` takes one argument - `playerSelection` - and calls `playRound` with the player's selection and a randomly generated computer selection. It then updates the score based on the result of the round and displays the current score and round result on the webpage. If one player reaches a score of 5, the winner of the game is announced and the option to play again is displayed.

The webpage is styled using CSS and the Google Fonts API is used to import the "Roboto" font.

## Sources

This game was built as a part of the curriculum for [The Odin Project's Foundations Course](https://www.theodinproject.com/paths/foundations/courses/foundations). More information about the project can be found [here](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) and [here](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors).
