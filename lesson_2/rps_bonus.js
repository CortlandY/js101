const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
const THREE_WINS = 3;
const WINNING_MOVES = {
  r:  ['sc', 'l'],
  p:  ['r', 'sp'],
  sc: ['p', 'l'],
  l:  ['sp', 'p'],
  sp: ['r', 'sc'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function userWins(choice, computerChoice) {
  return WINNING_MOVES[choice].includes(computerChoice);
}

let computerWinCount = 0;
let userWinCount = 0;

function displayWinner(choice, computerChoice) {
  prompt(`User chose ${choice}, computer chose ${computerChoice}\n`);
  if (choice === computerChoice) {
    prompt('It\'s a tie!\n');
  } else if (userWins(choice, computerChoice)) {
    userWinCount += 1;
    prompt(`User wins!\n`);
  } else {
    computerWinCount += 1;
    prompt('Computer wins!\n');
  }
  prompt(`Current score:\n User: ${userWinCount} vs. Computer: ${computerWinCount}.`);
}

prompt('\nWelcome to Rock-Paper-Scissors-Lizard-Spock!\nHere are your win conditions:\n\n');
prompt('Rock (r) crushes scissors and lizard.\n=> Paper (p) covers rock and disproves Spock.\n=> Scissors (Sc) cut paper and decapitate lizard.\n=> Lizard (l) posions Spock and eats paper.\n=> Spock (sp) smashes scissors and vaporizes rock.\n\n\n');
prompt('Let\'s play best of 5 games!\n\n');

while ((userWinCount < THREE_WINS) && (computerWinCount < THREE_WINS)) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}\n`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Please enter a valid choice: ');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if ((userWinCount < THREE_WINS) && (computerWinCount < THREE_WINS)) {
    prompt('Do you want to continue playing? (y/n)');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'y' && answer[0] !== 'n') {
      prompt('Please enter "y" or "n".');
      answer = readline.question();
    }
    if (answer !== 'y') break;
  }
}

if (computerWinCount === THREE_WINS) {
  console.clear();
  prompt(`Computer is the grand champion by score of ${computerWinCount} to ${userWinCount}!\n\nThanks for playing!\n`);
} else if (userWinCount === THREE_WINS) {
  console.clear();
  prompt(`User is the grand champion by score of ${userWinCount} to ${computerWinCount}!\n\nThanks for playing!\n`);
} else {
  console.clear();
  prompt(`User has resigned with a current score of User: ${userWinCount} vs. Computer: ${computerWinCount}.\n`);
}