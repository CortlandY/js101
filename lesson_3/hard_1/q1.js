function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());


/* the second function returns undefined. since the object is not on the same
line as the return statement, the object does not get returned when the funciton
is called. This is because JS implicitly inserts semicolons where expected, and 
in this case, a semicolon is inserted after the word return in line 8.
*/