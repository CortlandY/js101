let nanArray = [NaN];

console.log(nanArray[0] === NaN);

/*
output is false; JS does not allow for boolean statements with NaN
because NaN is a specific numerical value that indicates an operation
that is intended to return a number failed

use the built in Number.isNaN() function to compare with NaN
*/