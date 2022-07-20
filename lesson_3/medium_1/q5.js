console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/*
line 1 logs 0.89999999 to the console
line 2 logs false
since JS using floating point numbers, some precision may be missing.
This leads to unexpected results

*** this is due to using base 2 in binary vs. base 10 ***
aka floating point rounding error - can only store 23 digits
*/