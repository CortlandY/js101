// non-mutating methods:
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice().reverse());

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]

console.log(numbers); // [1, 2, 3, 4, 5]

// bonus
let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});
console.log(reversedArray);