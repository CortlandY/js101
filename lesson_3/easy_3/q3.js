let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// outputs 'hello there'
// since strings are primitive, the original value is not mutated