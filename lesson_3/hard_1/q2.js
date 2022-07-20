let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*
the last line outputs {first: [1, 2]} since the push() method in line 3
mutates the original value. numArray points to object and it is not reassigned.

To avoid this, we can do the following:
**** OPTION 1 ****
  let object = { first: [1] };
  let numArray = object["first"].slice();
  numArray.push(2);
- the slice() function creates a copy, so the original
- object will not be mutated

**** OPTION 2 ****
  let object = { first: [1] };
  let numArray = object["first"].concat();
  numArray.push(2);
- the concat() function returns a new array rather than mutating
- the original one
*/