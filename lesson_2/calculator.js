/* pseudocode:
step 1 - ask user for first number
step 2 - ask user for second number
step 3 - ask user for operation type
step 4 - perform operation
step 5 - output result
*/

//welcome the user
prompt('Welcome to the Calculator tool!');

// create prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

// create function to check number validity
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// initialize readline variable
const rlSync = require('readline-sync');

// add while loop to run multiple operations

while (true) {

  // gather input from user
  prompt('Enter the first number to be evaluated: ');
  let num1 = rlSync.question();

  // check for invalid number 1
  while (invalidNumber(num1)) {
    prompt('Hmm... that number does not appear to be valid. Try again.');
    num1 = rlSync.question();
  }

  prompt('Enter the second number to be evaluated: ');
  let num2 = rlSync.question();

  // check for invalid number 2
  while (invalidNumber(num2)) {
    prompt('Hmm... that number does not appear to be valid. Try again.');
    num2 = rlSync.question();
  }

  prompt('Enter the operation sign of the calculation you wish to perform:\n1: add\n2: subtract\n3: multiply\n4: divide ');
  let operation = rlSync.question();

  // validate operation selection
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = rlSync.question();
  }

  // evaluate expression based on user input
  let output;

  // change type to number
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operation) {
    case '1':
      output = num1 + num2;
      break;
    case '2':
      output = num1 - num2;
      break;
    case '3':
      output = num1 * num2;
      break;
    case '4':
      output = num1 / num2;
      break;
    default:
      console.log( 'Invalid input.');
  }

  // log result to the console
  console.log(`The output is ${output}`);
  prompt('Would you like to perform another operation? y/n');
  let answer = rlSync.question();
  if (answer !== 'y') break;
}