let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);
console.log(newAnswer);
console.log(answer - 8);

/*
the output of this code is 34. answer is scoped outside of the function,
and primitive values are not mutable
newAnswer is 50. answer is still 42, so line 9 logs (42 - 8) = 34
*/