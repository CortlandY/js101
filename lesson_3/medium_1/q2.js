let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));

/*
1- an array of chars is created with the split() method
2- we use the map method to iterate over the array
3- an if statement determines the case of the letter, and changes
it accordingly
4- lastly, a new string is returned using the join() method
*/