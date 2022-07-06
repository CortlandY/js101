// m = monthly payment
// n = loan duration [months]
// p = loan amount
// j = monthly interest rate

// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt('Welcome to the Mortgage and Car Loan Calculator!');

while (true) {
  prompt('Enter the loan amount: ');
  let loanAmt = rlSync.question();
  while (isInvalidNumber(loanAmt)) {
    prompt('Must enter a valid number.');
    loanAmt = rlSync.question();
  }

  prompt('Enter the interest rate: ');
  prompt('Example: enter 3 for 3% or 2.6 for 2.6%');
  let interestRate = rlSync.question();
  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a valid number.');
    interestRate = rlSync.question();
  }

  prompt('Enter the loan duration in years: ');
  let years = rlSync.question();
  while (isInvalidNumber(years)) {
    prompt('Must enter a valid number.');
    years = rlSync.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;


  let monthlyPayment = loanAmt * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-1 * months))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to calculate another payment? ');
  let answer = rlSync.question();
  if (answer[0].toLowerCase() !== 'y') break;
}