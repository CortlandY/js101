const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt('It\'s a tie!');
  } else {
    prompt('Computer wins!');
  }
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Please enter a valid choice: ');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question();
  }

  if (answer !== 'y') break;
}